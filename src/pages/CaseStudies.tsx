import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import project images
import dpWorldImage from '@/assets/projects/logistics.png';
import morganImage from '@/assets/projects/Finance11.png';
import kotakImage from '@/assets/projects/Finance22.png';
import tablespaceImage from '@/assets/projects/coworking.jpg';
import paccarImage from '@/assets/projects/Automotive1.png';
import logisticsImage from '@/assets/projects/logistics.png';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  keyStats: {
    duration: string;
    budget: string;
    size: string;
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  services: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'dp-world',
    title: 'DP World Logistics Hub MEP Systems',
    client: 'DP World',
    category: 'Logistics',
    description: 'Complete MEP design and implementation for a state-of-the-art logistics facility with advanced automation and energy-efficient systems.',
    image: dpWorldImage,
    keyStats: {
      duration: '18 months',
      budget: '$2.5M',
      size: '500,000 sq ft'
    },
    challenges: [
      'Complex automation requirements for cargo handling',
      'High-capacity electrical systems for automated equipment',
      'Advanced fire safety systems for hazardous materials',
      'Energy efficiency targets and sustainability goals'
    ],
    solutions: [
      'Implemented smart BMS integration for automated systems',
      'Designed redundant electrical infrastructure',
      'Advanced fire suppression systems with early detection',
      'LED lighting with occupancy sensors and daylight harvesting'
    ],
    results: [
      '30% reduction in energy consumption',
      '99.9% system uptime achieved',
      'LEED Gold certification obtained',
      'Zero safety incidents during construction'
    ],
    services: ['HVAC Systems', 'Electrical Systems', 'Fire & Safety', 'BMS Integration']
  },
  {
    id: 'morgan-stanley',
    title: 'Morgan Stanley Financial Center',
    client: 'Morgan Stanley',
    category: 'Finance',
    description: 'Premium MEP solutions for a high-security financial center with redundant systems and advanced technology integration.',
    image: morganImage,
    keyStats: {
      duration: '24 months',
      budget: '$3.8M',
      size: '750,000 sq ft'
    },
    challenges: [
      'High-security requirements for financial operations',
      'Redundant power systems for critical operations',
      'Advanced HVAC for server rooms and trading floors',
      'Compliance with financial industry regulations'
    ],
    solutions: [
      'Dual-feed electrical systems with UPS backup',
      'Precision cooling systems for data centers',
      'Advanced access control and security integration',
      'Comprehensive fire suppression for sensitive equipment'
    ],
    results: [
      '100% uptime for critical systems',
      'Tier III data center certification',
      '25% improvement in energy efficiency',
      'Full regulatory compliance achieved'
    ],
    services: ['Electrical Systems', 'HVAC Systems', 'Fire & Safety', 'BMS Integration']
  },
  {
    id: 'kotak-mahindra',
    title: 'Kotak Mahindra Bank Corporate Office',
    client: 'Kotak Mahindra Bank',
    category: 'Finance',
    description: 'Modern MEP infrastructure for a corporate banking facility with focus on sustainability and employee comfort.',
    image: kotakImage,
    keyStats: {
      duration: '15 months',
      budget: '$1.8M',
      size: '400,000 sq ft'
    },
    challenges: [
      'Open office design requiring flexible HVAC zones',
      'High-density occupancy cooling requirements',
      'Energy efficiency and green building standards',
      'Integration with existing building systems'
    ],
    solutions: [
      'Variable air volume (VAV) systems for flexible zoning',
      'High-efficiency chillers with heat recovery',
      'Smart lighting controls with daylight integration',
      'Comprehensive BMS for optimal performance'
    ],
    results: [
      'IGBC Gold certification achieved',
      '35% reduction in energy costs',
      'Improved indoor air quality ratings',
      'Enhanced employee comfort and productivity'
    ],
    services: ['HVAC Systems', 'Electrical Systems', 'BMS Integration', 'MEP Consulting']
  },
  {
    id: 'tablespace',
    title: 'Tablespace Co-working Hub',
    client: 'Tablespace',
    category: 'Commercial',
    description: 'Innovative MEP design for a modern co-working space with flexible infrastructure and smart building features.',
    image: tablespaceImage,
    keyStats: {
      duration: '12 months',
      budget: '$950K',
      size: '200,000 sq ft'
    },
    challenges: [
      'Flexible space requirements for varying occupancy',
      'High-speed connectivity and power distribution',
      'Acoustic control for open collaborative spaces',
      'Sustainable design within budget constraints'
    ],
    solutions: [
      'Modular electrical distribution for flexibility',
      'Advanced HVAC zoning for different space types',
      'Integrated audio-visual and IT infrastructure',
      'Energy-efficient LED lighting with smart controls'
    ],
    results: [
      '40% faster space reconfiguration capability',
      '20% reduction in operational costs',
      'High tenant satisfaction scores',
      'LEED Silver certification obtained'
    ],
    services: ['Electrical Systems', 'HVAC Systems', 'BMS Integration', 'MEP Consulting']
  },
  {
    id: 'paccar',
    title: 'Paccar Manufacturing Facility',
    client: 'Paccar',
    category: 'Automotive',
    description: 'Heavy-duty MEP systems for automotive manufacturing with specialized equipment support and safety systems.',
    image: paccarImage,
    keyStats: {
      duration: '20 months',
      budget: '$4.2M',
      size: '800,000 sq ft'
    },
    challenges: [
      'High-power requirements for manufacturing equipment',
      'Specialized ventilation for welding and painting',
      'Safety systems for hazardous manufacturing processes',
      'Reliability requirements for continuous production'
    ],
    solutions: [
      'High-capacity electrical infrastructure with redundancy',
      'Industrial ventilation systems with pollution control',
      'Advanced fire suppression for manufacturing areas',
      'Predictive maintenance systems integration'
    ],
    results: [
      '99.8% production uptime achieved',
      'Full environmental compliance maintained',
      '15% reduction in energy consumption',
      'Zero workplace safety incidents'
    ],
    services: ['Electrical Systems', 'HVAC Systems', 'Fire & Safety', 'Complete MEP Solutions']
  },
  {
    id: 'logistics-center',
    title: 'Regional Logistics Distribution Center',
    client: 'Logistics Partners Inc.',
    category: 'Logistics',
    description: 'Comprehensive MEP solutions for a large-scale distribution center with automated systems and energy optimization.',
    image: logisticsImage,
    keyStats: {
      duration: '16 months',
      budget: '$2.1M',
      size: '600,000 sq ft'
    },
    challenges: [
      'Large open spaces requiring efficient climate control',
      'High-bay lighting for warehouse operations',
      'Integration with automated sorting systems',
      'Energy efficiency for 24/7 operations'
    ],
    solutions: [
      'High-volume, low-speed (HVLS) fans for air circulation',
      'LED high-bay lighting with motion sensors',
      'Integrated power systems for automation equipment',
      'Smart energy management and monitoring systems'
    ],
    results: [
      '45% reduction in lighting energy consumption',
      'Optimal temperature control achieved',
      'Seamless automation integration',
      'ROI achieved within 3 years'
    ],
    services: ['HVAC Systems', 'Electrical Systems', 'BMS Integration', 'MEP Consulting']
  }
];

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto container-mobile">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-responsive-2xl font-heading font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-responsive-lg font-body opacity-90 max-w-3xl">
            Explore our successful MEP engineering projects across various industries. 
            Each case study demonstrates our expertise in delivering innovative, efficient, and reliable solutions.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto container-mobile py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-hover transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {study.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-base">
                  <strong>{study.client}</strong> • {study.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-primary">{study.keyStats.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-semibold text-primary">{study.keyStats.budget}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-semibold text-primary">{study.keyStats.size}</p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-primary mb-2">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-accent" />
                    Key Challenges
                  </h4>
                  <ul className="space-y-1">
                    {study.challenges.slice(0, 2).map((challenge, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-accent" />
                    Solutions Implemented
                  </h4>
                  <ul className="space-y-1">
                    {study.solutions.slice(0, 2).map((solution, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Results Achieved
                  </h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full group">
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us help you achieve similar results with our comprehensive MEP engineering solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-accent">
                  Get Quote
                </Button>
                <Button variant="outline">
                  Request Proposal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;