export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  showContactOptions?: boolean;
}

export interface ChatBotResponse {
  text: string;
  showContactOptions: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: 'services' | 'company' | 'contact' | 'general';
}

export interface AdminSettings {
  companyEmail: string;
  teamsLink: string;
  phoneNumber: string;
  officeHours: string;
  welcomeMessage: string;
  fallbackMessage: string;
}