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
import hvacImage from '@/assets/services/hvac-realistic.jpg';
import electricalImage from '@/assets/services/electrical-realistic.jpg';
import lightingImage from '@/assets/services/lighting-realistic.jpg';
import upsImage from '@/assets/services/ups-realistic.jpg';
import itPassiveImage from '@/assets/services/it-passive-realistic.jpg';
import bmsImage from '@/assets/services/bms-realistic.jpg';
import fireImage from '@/assets/services/fire-safety-realistic.jpg';

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
      image: lightingImage
    },
    {
      icon: Battery,
      title: 'UPS Systems',
      description: 'Load analysis, UPS sizing, backup configuration, system integration',
      image: upsImage
    },
    {
      icon: Wifi,
      title: 'IT Passive Infrastructure',
      description: 'Structured cabling, rack layout, data/voice points, telecom room design',
      image: itPassiveImage
    },
    {
      icon: Building,
      title: 'BMS Integration',
      description: 'System integration, control strategies, I/O schedules',
      image: bmsImage
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
    <section id="services" className="service-section-mobile bg-background">
      <div className="container mx-auto px-6">
        {/* Design Solutions */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
              Design Solutions
            </h2>
            <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto px-2">
              Comprehensive MEP design services delivering innovative, cost-effective solutions 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid-services">
            {designServices.map((service, index) => (
              <Card 
                key={index}
                className="card-hover border-0 shadow-card overflow-hidden group service-card-mobile"
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
                <CardHeader className="pb-3 p-4 md:p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-heading font-semibold text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Built Solutions */}
        <div className="animate-fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
              Built Solutions
            </h2>
            <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto px-2">
              End-to-end implementation services ensuring seamless project execution 
              from design to commissioning.
            </p>
          </div>

          <div className="grid-mobile-2cols">
            {builtSolutions.map((solution, index) => (
              <Card 
                key={index}
                className="card-hover border-0 shadow-card bg-gradient-to-br from-white to-secondary/50 service-card-mobile"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="grid grid-cols-1 gap-3">
                    {solution.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 hover:bg-accent/10 transition-colors group"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                        <span className="font-body text-sm md:text-base text-foreground font-medium">
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