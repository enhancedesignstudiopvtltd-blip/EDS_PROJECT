import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users } from 'lucide-react';
import logisticsImage from '@/assets/projects/logistics.jpg';
import coworkingImage from '@/assets/projects/coworking.jpg';
import corporateImage from '@/assets/projects/corporate.jpg';
import technologyImage from '@/assets/projects/technology.jpg';
import analyticsImage from '@/assets/projects/analytics.jpg';
import automotiveImage from '@/assets/projects/automotive.jpg';
import realestateImage from '@/assets/projects/realestate.jpg';
import certificationImage from '@/assets/projects/certification.jpg';
import financeImage from '@/assets/projects/finance.jpg';
import mediaImage from '@/assets/projects/media.jpg';

const Projects = () => {
  const projects = [
    { name: 'DP World', category: 'Logistics', location: 'Mumbai', year: '2023' },
    { name: 'Tablespace', category: 'Co-working', location: 'Bengaluru', year: '2023' },
    { name: 'EY (Ernst & Young)', category: 'Corporate', location: 'Pune', year: '2022' },
    { name: 'Ingram Micro', category: 'Technology', location: 'Chennai', year: '2023' },
    { name: 'Fractal Analytics', category: 'Analytics', location: 'Mumbai', year: '2022' },
    { name: 'Paccar', category: 'Automotive', location: 'Pune', year: '2023' },
    { name: 'KRC Infrastructure', category: 'Real Estate', location: 'Mumbai', year: '2023' },
    { name: 'LRQA', category: 'Certification', location: 'Mumbai', year: '2022' },
    { name: 'Nucleus Office Parks', category: 'Real Estate', location: 'Bengaluru', year: '2023' },
    { name: 'Baring Private Equity', category: 'Finance', location: 'Mumbai', year: '2022' },
    { name: 'Mercedes Workshop', category: 'Automotive', location: 'Mumbai', year: '2023' },
    { name: 'Axis Mutual Fund', category: 'Finance', location: 'Mumbai', year: '2022' },
    { name: 'Bank of America', category: 'Banking', location: 'Bengaluru', year: '2023' },
    { name: 'Kotak Mahindra Bank', category: 'Banking', location: 'Mumbai', year: '2022' },
    { name: 'Viacom 18', category: 'Media', location: 'Mumbai', year: '2023' },
    { name: 'Morgan Stanley', category: 'Finance', location: 'Mumbai', year: '2022' },
    { name: 'Persistent Bhagheerath', category: 'Technology', location: 'Pune', year: '2023' }
  ];

  const getCategoryImage = (category: string) => {
    const imageMap = {
      'Logistics': logisticsImage,
      'Co-working': coworkingImage,
      'Corporate': corporateImage,
      'Technology': technologyImage,
      'Analytics': analyticsImage,
      'Automotive': automotiveImage,
      'Real Estate': realestateImage,
      'Certification': certificationImage,
      'Finance': financeImage,
      'Banking': financeImage,
      'Media': mediaImage
    };
    return imageMap[category as keyof typeof imageMap] || corporateImage;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Logistics': 'bg-blue-500/90 text-white',
      'Co-working': 'bg-green-500/90 text-white',
      'Corporate': 'bg-purple-500/90 text-white',
      'Technology': 'bg-indigo-500/90 text-white',
      'Analytics': 'bg-cyan-500/90 text-white',
      'Automotive': 'bg-red-500/90 text-white',
      'Real Estate': 'bg-orange-500/90 text-white',
      'Certification': 'bg-teal-500/90 text-white',
      'Finance': 'bg-emerald-500/90 text-white',
      'Banking': 'bg-yellow-500/90 text-white',
      'Media': 'bg-pink-500/90 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/90 text-white';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our SITC Projects
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Successfully delivered MEP solutions across diverse industries, 
            ensuring excellence in every project execution.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-scale-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
            <div className="text-sm font-body text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">15+</div>
            <div className="text-sm font-body text-muted-foreground">Industry Sectors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">98%</div>
            <div className="text-sm font-body text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">0</div>
            <div className="text-sm font-body text-muted-foreground">Safety Incidents</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover border-0 shadow-card overflow-hidden group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                {/* Project Image */}
                <img 
                  src={getCategoryImage(project.category)} 
                  alt={`${project.name} workspace`}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                />
                
                {/* Category Badge */}
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(project.category)} border-0 shadow-lg`}>
                  {project.category}
                </Badge>
                
                {/* SITC Project Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  SITC Project
                </div>
                
                {/* Overlay with Project Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-sm text-white/90">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-white/90">
                        <Calendar className="w-4 h-4 mr-2" />
                        Completed in {project.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center text-white/80">
                        <Users className="w-3 h-3 mr-1" />
                        MEP Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-lg font-body text-muted-foreground mb-6">
            Ready to start your next MEP project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-accent text-white font-heading font-semibold rounded-lg shadow-accent hover:shadow-hover transition-all duration-300">
              View Case Studies
            </button>
            <button className="px-8 py-3 border border-primary text-primary font-heading font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
              Request Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;