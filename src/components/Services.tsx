import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Fan,
  Zap,
  Lightbulb,
  Battery,
  Wifi,
  Building,
  Shield,
  Wrench,
  Camera,
  Lock
} from 'lucide-react';
import hvacImage from '@/assets/hvac-systems.jpg';
import electricalImage from '@/assets/electrical-panels.jpg';
import fireImage from '@/assets/fire-safety.jpg';

const Services = () => {
  const designServices = [
    {
      icon: Fan,
      title: 'HVAC Systems',
      description: 'Load calculations, equipment selection, duct/piping layout, ventilation design',
      image: hvacImage
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Power distribution, panel schedules, cable sizing, grounding, SLDs',
      image: electricalImage
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Lux level design, fixture layout, emergency lighting, controls',
      image: null
    },
    {
      icon: Battery,
      title: 'UPS Systems',
      description: 'Load analysis, UPS sizing, backup configuration, system integration',
      image: null
    },
    {
      icon: Wifi,
      title: 'IT Passive Infrastructure',
      description: 'Structured cabling, rack layout, data/voice points, telecom room design',
      image: null
    },
    {
      icon: Building,
      title: 'BMS Integration',
      description: 'System integration, control strategies, I/O schedules',
      image: null
    },
    {
      icon: Shield,
      title: 'Fire & Safety',
      description: 'Fire alarm, sprinkler design, voice evac, NFPA compliance',
      image: fireImage
    }
  ];

  const builtSolutions = [
    {
      title: 'SITC of Electrical Systems',
      items: ['Lighting Systems', 'Power Distribution', 'UPS Systems', 'Earthing & Grounding', 'Cable Tray Systems', 'IT Passive Infrastructure']
    },
    {
      title: 'Fire, Safety & Security Systems',
      items: ['Fire Fighting Systems', 'Gas Suppression', 'Fire Alarm Systems', 'CCTV Surveillance', 'Access Control', 'Leak Detection', 'VESDA Systems', 'IBMS Integration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Design Solutions */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Design Solutions
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Comprehensive MEP design services delivering innovative, cost-effective solutions 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <Card 
                key={index}
                className="card-hover border-0 shadow-card overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Built Solutions */}
        <div className="animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Built Solutions
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              End-to-end implementation services ensuring seamless project execution 
              from design to commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {builtSolutions.map((solution, index) => (
              <Card 
                key={index}
                className="card-hover border-0 shadow-card bg-gradient-to-br from-white to-secondary/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-primary mb-4">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 hover:bg-accent/10 transition-colors group"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="font-body text-sm text-foreground font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;