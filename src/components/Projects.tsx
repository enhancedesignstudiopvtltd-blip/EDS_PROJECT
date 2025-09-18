import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, Users } from 'lucide-react';

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

  const getCategoryColor = (category: string) => {
    const colors = {
      'Logistics': 'bg-blue-100 text-blue-800',
      'Co-working': 'bg-green-100 text-green-800',
      'Corporate': 'bg-purple-100 text-purple-800',
      'Technology': 'bg-indigo-100 text-indigo-800',
      'Analytics': 'bg-cyan-100 text-cyan-800',
      'Automotive': 'bg-red-100 text-red-800',
      'Real Estate': 'bg-orange-100 text-orange-800',
      'Certification': 'bg-teal-100 text-teal-800',
      'Finance': 'bg-emerald-100 text-emerald-800',
      'Banking': 'bg-yellow-100 text-yellow-800',
      'Media': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
              className="card-hover border-0 shadow-card bg-white group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={`${getCategoryColor(project.category)} border-0`}>
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Completed in {project.year}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      MEP Systems
                    </span>
                    <span className="text-accent font-medium">SITC Project</span>
                  </div>
                </div>
              </CardContent>
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