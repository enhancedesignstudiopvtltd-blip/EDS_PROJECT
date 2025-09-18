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
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            We aim to be the leading{' '}
            <span className="text-accent">Integrated MEP Solutions</span>{' '}
            Consultancy through continuous innovation
          </h2>
          <p className="text-xl font-body text-muted-foreground leading-relaxed">
            MEP Consultancy Firm | Delivering Integrated Solutions with Cost-Effective Designs, 
            Precise Estimates, Vendor Coordination, and Value Engineering Excellence in 
            capabilities, products and services while remaining agile and adaptable.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold text-center text-primary mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-card bg-white/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-accent">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-scale-in">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">50+</div>
            <div className="text-lg font-body text-muted-foreground">Successful Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">10+</div>
            <div className="text-lg font-body text-muted-foreground">Cities Presence</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">100+</div>
            <div className="text-lg font-body text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent">24/7</div>
            <div className="text-lg font-body text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;