import { ChatBotResponse, FAQ, AdminSettings } from './types';

class ChatBotService {
  private faqs: FAQ[] = [
    {
      id: '1',
      question: 'What services does Design Edge MEP LLP offer?',
      answer: 'Design Edge MEP LLP offers comprehensive MEP (Mechanical, Electrical, and Plumbing) engineering solutions including HVAC systems design, electrical panel installations, fire safety systems, plumbing design, energy efficiency consulting, and sustainable building solutions.',
      keywords: ['services', 'mep', 'hvac', 'electrical', 'plumbing', 'mechanical', 'what do you do', 'offerings'],
      category: 'services'
    },
    {
      id: '2',
      question: 'What are your office hours?',
      answer: 'Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. We also provide emergency support for critical MEP issues outside regular hours.',
      keywords: ['hours', 'time', 'open', 'closed', 'schedule', 'working hours', 'office hours'],
      category: 'contact'
    },
    {
      id: '3',
      question: 'How can I get a quote for my project?',
      answer: 'You can get a quote by clicking the "Get Quote" button on our website, filling out our contact form, or reaching out to us directly via email or phone. We\'ll need project details, timeline, and scope to provide an accurate estimate.',
      keywords: ['quote', 'estimate', 'price', 'cost', 'pricing', 'how much', 'budget'],
      category: 'general'
    },
    {
      id: '4',
      question: 'What types of buildings do you work with?',
      answer: 'We work with various building types including commercial offices, residential complexes, industrial facilities, healthcare facilities, educational institutions, retail spaces, and hospitality projects.',
      keywords: ['buildings', 'projects', 'commercial', 'residential', 'industrial', 'types', 'sectors'],
      category: 'services'
    },
    {
      id: '5',
      question: 'Do you provide sustainable and energy-efficient solutions?',
      answer: 'Yes! We specialize in sustainable MEP design including energy-efficient HVAC systems, LED lighting solutions, renewable energy integration, water conservation systems, and green building certifications like LEED.',
      keywords: ['sustainable', 'green', 'energy efficient', 'leed', 'renewable', 'eco-friendly', 'environment'],
      category: 'services'
    },
    {
      id: '6',
      question: 'Where is Design Edge MEP LLP located?',
      answer: 'Design Edge MEP LLP has multiple locations to serve you better. Please check our Presence section on the website for detailed location information and contact details for each office.',
      keywords: ['location', 'address', 'where', 'office', 'presence', 'contact'],
      category: 'contact'
    },
    {
      id: '7',
      question: 'How experienced is your team?',
      answer: 'Our team consists of highly experienced MEP engineers, project managers, and technical specialists with decades of combined experience in the industry. We stay updated with the latest technologies and industry standards.',
      keywords: ['experience', 'team', 'engineers', 'expertise', 'qualifications', 'staff'],
      category: 'company'
    },
    {
      id: '8',
      question: 'Do you handle emergency MEP services?',
      answer: 'Yes, we provide emergency MEP services for critical issues. Our emergency response team is available 24/7 for urgent electrical, HVAC, or plumbing problems that require immediate attention.',
      keywords: ['emergency', 'urgent', '24/7', 'immediate', 'critical', 'breakdown', 'repair'],
      category: 'services'
    }
  ];

  private settings: AdminSettings = {
    companyEmail: 'support@designedgemepllp.com',
    teamsLink: 'https://teams.microsoft.com/l/chat/0/0?users=support@designedgemepllp.com',
    phoneNumber: '+1-234-567-8900',
    officeHours: 'Monday to Friday, 9:00 AM to 6:00 PM',
    welcomeMessage: 'Hello! I\'m your Design Edge MEP assistant. How can I help you today?',
    fallbackMessage: 'I\'m sorry, I don\'t have specific information about that. Let me connect you with our team who can provide detailed assistance.'
  };

  async getResponse(userInput: string): Promise<ChatBotResponse> {
    const normalizedInput = userInput.toLowerCase().trim();
    
    // Find matching FAQ
    const matchingFAQ = this.findBestMatch(normalizedInput);
    
    if (matchingFAQ) {
      return {
        text: matchingFAQ.answer,
        showContactOptions: false
      };
    }

    // Handle greeting
    if (this.isGreeting(normalizedInput)) {
      return {
        text: 'Hello! Welcome to Design Edge MEP LLP. I can help you with information about our MEP engineering services, office hours, project quotes, and more. What would you like to know?',
        showContactOptions: false
      };
    }

    // Handle thanks
    if (this.isThanking(normalizedInput)) {
      return {
        text: 'You\'re welcome! Is there anything else I can help you with regarding our MEP services?',
        showContactOptions: false
      };
    }

    // Fallback response
    return {
      text: this.settings.fallbackMessage,
      showContactOptions: true
    };
  }

  private findBestMatch(input: string): FAQ | null {
    let bestMatch: FAQ | null = null;
    let highestScore = 0;

    for (const faq of this.faqs) {
      const score = this.calculateMatchScore(input, faq);
      if (score > highestScore && score > 0.3) { // Minimum threshold
        highestScore = score;
        bestMatch = faq;
      }
    }

    return bestMatch;
  }

  private calculateMatchScore(input: string, faq: FAQ): number {
    let score = 0;
    const inputWords = input.split(' ');
    
    // Check keywords
    for (const keyword of faq.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += 0.8;
      }
    }

    // Check individual words
    for (const word of inputWords) {
      if (word.length > 2) { // Ignore short words
        for (const keyword of faq.keywords) {
          if (keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())) {
            score += 0.3;
          }
        }
      }
    }

    return Math.min(score, 1); // Cap at 1
  }

  private isGreeting(input: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => input.includes(greeting));
  }

  private isThanking(input: string): boolean {
    const thanks = ['thank', 'thanks', 'appreciate', 'grateful'];
    return thanks.some(thank => input.includes(thank));
  }

  // Admin methods for updating settings
  updateSettings(newSettings: Partial<AdminSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
  }

  addFAQ(faq: Omit<FAQ, 'id'>): void {
    const newFAQ: FAQ = {
      ...faq,
      id: Date.now().toString()
    };
    this.faqs.push(newFAQ);
  }

  updateFAQ(id: string, updates: Partial<FAQ>): void {
    const index = this.faqs.findIndex(faq => faq.id === id);
    if (index !== -1) {
      this.faqs[index] = { ...this.faqs[index], ...updates };
    }
  }

  deleteFAQ(id: string): void {
    this.faqs = this.faqs.filter(faq => faq.id !== id);
  }

  getFAQs(): FAQ[] {
    return [...this.faqs];
  }

  getSettings(): AdminSettings {
    return { ...this.settings };
  }
}

export const chatBotService = new ChatBotService();