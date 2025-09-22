import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Shield, 
  Leaf, 
  Lightbulb, 
  HandHeart, 
  Eye, 
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Users,
      title: 'Diversity & Inclusion',
      description: 'Embracing diverse perspectives for innovative solutions'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all our work'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Designing eco-friendly and energy-efficient solutions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering cutting-edge MEP technologies and methods'
    },
    {
      icon: HandHeart,
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and honest project management'
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description: 'Contributing positively to the communities we serve'
    },
    {
      icon: Zap,
      title: 'Adaptability',
      description: 'Evolving with industry trends and client needs'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container mx-auto container-mobile">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-responsive-xl font-heading font-bold text-primary mb-4 sm:mb-6 px-2">
            We aim to be the leading{' '}
            <span className="text-accent">Integrated MEP Solutions</span>{' '}
            Consultancy through continuous innovation
          </h2>
          <p className="text-responsive-base font-body text-muted-foreground leading-relaxed px-4">
            MEP Consultancy Firm | Delivering Integrated Solutions with Cost-Effective Designs, 
            Precise Estimates, Vendor Coordination, and Value Engineering Excellence in 
            capabilities, products and services while remaining agile and adaptable.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-center text-primary mb-8 sm:mb-12 px-2">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-card bg-white/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-accent">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center animate-scale-in">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent">50+</div>
            <div className="text-sm sm:text-base md:text-lg font-body text-muted-foreground">Successful Projects</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent">10+</div>
            <div className="text-sm sm:text-base md:text-lg font-body text-muted-foreground">Cities Presence</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent">100+</div>
            <div className="text-sm sm:text-base md:text-lg font-body text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent">24/7</div>
            <div className="text-sm sm:text-base md:text-lg font-body text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;