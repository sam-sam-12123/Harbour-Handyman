export interface HandymanService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'repairs' | 'installations' | 'agedcare' | 'outdoor' | 'bathroom' | 'commercial';
  categoryLabel: string;
  iconName: string;
  typicalTime: string;
  priceGuide: string;
  popular?: boolean;
  ndisApproved?: boolean;
  seniorFavorite?: boolean;
  commonTasks: string[];
  materialsUsed: string[];
  imageUrl: string;
}

export interface SuburbInfo {
  name: string;
  postcode: string;
  distanceKm: number;
  zone: string;
  travelFee: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  suburb: string;
  rating: number;
  date: string;
  serviceCategory: string;
  comment: string;
  verified: boolean;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'agedcare' | 'areas';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  suburb: string;
  description: string;
  service: string;
  beforeImg: string;
  afterImg: string;
  highlights: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  selectedServices: string[];
  urgency: 'Standard (Flexible)' | 'Next 2-3 Days' | 'Emergency / Today' | 'Quote Only';
  description: string;
  isSenior: boolean;
  isNdis: boolean;
  preferredTime: 'Morning (7am - 12pm)' | 'Afternoon (12pm - 5pm)' | 'Anytime';
  photoCount?: number;
}
