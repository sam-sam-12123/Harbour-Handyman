import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Coffs Harbour 30km radius suburbs database
const COFFS_SUBURBS = [
  { name: "Coffs Harbour (CBD / Central)", postcode: "2450", distanceKm: 0, zone: "Central", travelFee: 0 },
  { name: "Park Beach / Jetty", postcode: "2450", distanceKm: 3, zone: "Central", travelFee: 0 },
  { name: "Korora", postcode: "2450", distanceKm: 6, zone: "North Coast", travelFee: 0 },
  { name: "Sapphire Beach", postcode: "2450", distanceKm: 9, zone: "North Coast", travelFee: 0 },
  { name: "Moonee Beach", postcode: "2450", distanceKm: 12, zone: "North Coast", travelFee: 0 },
  { name: "Emerald Beach", postcode: "2456", distanceKm: 16, zone: "North Coast", travelFee: 0 },
  { name: "Sandy Beach", postcode: "2456", distanceKm: 19, zone: "North Coast", travelFee: 0 },
  { name: "Woolgoolga", postcode: "2456", distanceKm: 24, zone: "North Coast", travelFee: 0 },
  { name: "Safety Beach", postcode: "2456", distanceKm: 26, zone: "North Coast", travelFee: 0 },
  { name: "Mullaway", postcode: "2456", distanceKm: 28, zone: "North Coast", travelFee: 0 },
  { name: "Arrawarra / Corindi", postcode: "2456", distanceKm: 32, zone: "Outer North", travelFee: 0 },
  { name: "Boambee / Boambee East", postcode: "2452", distanceKm: 8, zone: "South Coast", travelFee: 0 },
  { name: "Toormina", postcode: "2452", distanceKm: 9, zone: "South Coast", travelFee: 0 },
  { name: "Sawtell", postcode: "2452", distanceKm: 10, zone: "South Coast", travelFee: 0 },
  { name: "Bonville", postcode: "2450", distanceKm: 14, zone: "South Coast", travelFee: 0 },
  { name: "Repton / Mylestom", postcode: "2454", distanceKm: 21, zone: "South Coast", travelFee: 0 },
  { name: "Urunga", postcode: "2455", distanceKm: 26, zone: "South Coast", travelFee: 0 },
  { name: "Raleigh / Bellingen", postcode: "2454", distanceKm: 28, zone: "Inland Valley", travelFee: 0 },
  { name: "Karangi / Coramba", postcode: "2450", distanceKm: 15, zone: "Inland Hinterland", travelFee: 0 },
  { name: "Nana Glen", postcode: "2450", distanceKm: 27, zone: "Inland Hinterland", travelFee: 0 },
  { name: "Upper Orara", postcode: "2450", distanceKm: 18, zone: "Inland Hinterland", travelFee: 0 }
];

// Health API
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", business: "Harbour Handyman", timestamp: new Date().toISOString() });
});

// Suburbs list & check API
app.get("/api/suburbs", (_req, res) => {
  res.json({
    baseLocation: "Coffs Harbour, NSW 2450",
    maxFreeRadiusKm: 30,
    suburbs: COFFS_SUBURBS
  });
});

app.post("/api/suburb-check", (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Please provide a suburb or postcode to check" });
  }

  const cleanQuery = String(query).trim().toLowerCase();
  const match = COFFS_SUBURBS.find(
    s => s.name.toLowerCase().includes(cleanQuery) || s.postcode.includes(cleanQuery)
  );

  if (match) {
    res.json({
      covered: true,
      suburb: match.name,
      postcode: match.postcode,
      distanceKm: match.distanceKm,
      zone: match.zone,
      message: `Great news! ${match.name} (${match.postcode}) is inside our primary 30km service area with $0 travel callout fees for standard quotes.`,
      travelFee: 0,
      standardResponseTime: "Same-Day to Next-Day available"
    });
  } else {
    res.json({
      covered: true,
      suburb: query,
      distanceKm: 35,
      zone: "Extended Mid North Coast",
      message: `${query} is slightly outside our primary 30km zone, but we frequently service regional jobs on request. Call Darren on 0417 755 001 for quick availability!`,
      travelFee: "Free on consultation for larger jobs",
      standardResponseTime: "24-48 Hours"
    });
  }
});

// Quote Request Submission Endpoint
app.post("/api/quote-request", (req, res) => {
  const { name, phone, email, suburb, services, urgency, description, isSenior, isNdis, preferredTime } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and mobile phone number are required." });
  }

  const quoteId = "HH-" + Math.floor(100000 + Math.random() * 900000);
  const receivedAt = new Date().toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit", hour12: true });

  res.json({
    success: true,
    quoteId,
    message: `Thank you ${name}! Darren has received your enquiry.`,
    callbackPromise: urgency === "Emergency (Within 24 Hours)" 
      ? "Priority Call: Darren will contact you within 15–30 minutes."
      : "Darren will call or message you within 2 business hours (7:00 AM – 6:00 PM Mon-Sat).",
    summary: {
      quoteId,
      name,
      phone,
      email: email || "Not provided",
      suburb: suburb || "Coffs Harbour",
      services: services || ["General Handyman Repairs"],
      urgency: urgency || "Standard",
      preferredTime: preferredTime || "Morning (8am - 12pm)",
      discounts: isSenior ? "10% Senior / Pensioner Discount applied" : "None",
      ndisAssistance: isNdis ? "NDIS / Aged Care receipt & compliance ready" : "Standard invoice",
      receivedAt
    }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Harbour Handyman server running on http://localhost:${PORT}`);
  });
}

startServer();
