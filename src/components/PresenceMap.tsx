import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Building, Phone, Mail } from 'lucide-react';

// India TopoJSON URL
const INDIA_TOPO_JSON = "https://unpkg.com/world-atlas/countries/356.json";

const PresenceMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const presenceCities = [
    { name: 'Mumbai', coordinates: [72.8777, 19.0760], type: 'Head Office' },
    { name: 'Navi Mumbai', coordinates: [73.0297, 19.0330], type: 'Branch Office' },
    { name: 'Pune', coordinates: [73.8567, 18.5204], type: 'Branch Office' },
    { name: 'Ahmedabad', coordinates: [72.5714, 23.0225], type: 'Branch Office' },
    { name: 'Gurugram', coordinates: [77.0266, 28.4595], type: 'Branch Office' },
    { name: 'New Delhi', coordinates: [77.1025, 28.7041], type: 'Branch Office' },
    { name: 'Bengaluru', coordinates: [77.5946, 12.9716], type: 'Branch Office' },
    { name: 'Chennai', coordinates: [80.2707, 13.0827], type: 'Branch Office' },
    { name: 'Hyderabad', coordinates: [78.4867, 17.3850], type: 'Branch Office' },
    { name: 'Lucknow', coordinates: [80.9462, 26.8467], type: 'Branch Office' }
  ];

  return (
    <section id="presence" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our <span className="text-accent">Presence</span> Across India
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Strategically located offices to serve you better with localized expertise 
            and nationwide coverage for all your MEP requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Cities List */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-accent" />
                  Office Locations
                </h3>
                <div className="space-y-3">
                  {presenceCities.map((city, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                        hoveredCity === city.name 
                          ? 'bg-accent/10 border-accent' 
                          : 'bg-secondary/50 hover:bg-secondary'
                      } border`}
                      onMouseEnter={() => setHoveredCity(city.name)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            city.type === 'Head Office' ? 'bg-accent' : 'bg-primary'
                          } ${hoveredCity === city.name ? 'animate-pulse' : ''}`}></div>
                          <div>
                            <div className="font-body font-semibold text-foreground">
                              {city.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {city.type}
                            </div>
                          </div>
                        </div>
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-secondary/20 to-primary/5">
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 1000,
                      center: [78.9629, 20.5937]
                    }}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "500px"
                    }}
                  >
                    <ZoomableGroup center={[78.9629, 20.5937]} zoom={1}>
                      <Geographies geography={INDIA_TOPO_JSON}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#f0f2f5"
                              stroke="#e1e5e9"
                              strokeWidth={0.5}
                              style={{
                                default: {
                                  fill: "#f0f2f5",
                                  outline: "none",
                                },
                                hover: {
                                  fill: "#e8f4f8",
                                  outline: "none",
                                },
                                pressed: {
                                  fill: "#d1ecf1",
                                  outline: "none",
                                },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                      
                      {presenceCities.map((city, index) => (
                        <Marker 
                          key={index} 
                          coordinates={city.coordinates}
                          onMouseEnter={() => {
                            setTooltipContent(`${city.name} - ${city.type}`);
                            setHoveredCity(city.name);
                          }}
                          onMouseLeave={() => {
                            setTooltipContent('');
                            setHoveredCity(null);
                          }}
                        >
                          <g>
                            <circle 
                              r={city.type === 'Head Office' ? 8 : 6} 
                              fill={city.type === 'Head Office' ? '#f15a29' : '#0b1f4e'}
                              stroke="#fff"
                              strokeWidth={2}
                              className={`cursor-pointer transition-all duration-300 ${
                                hoveredCity === city.name ? 'animate-pulse' : ''
                              }`}
                              style={{
                                filter: hoveredCity === city.name ? 'drop-shadow(0 0 10px rgba(241, 90, 41, 0.6))' : 'none'
                              }}
                            />
                            <text
                              textAnchor="middle"
                              y={city.type === 'Head Office' ? -15 : -12}
                              className={`text-xs font-body font-medium fill-primary ${
                                hoveredCity === city.name ? 'fill-accent' : ''
                              }`}
                            >
                              {city.name}
                            </text>
                          </g>
                        </Marker>
                      ))}
                    </ZoomableGroup>
                  </ComposableMap>
                  
                  {/* Tooltip */}
                  {tooltipContent && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-card text-sm font-body font-medium text-primary animate-fade-up">
                      {tooltipContent}
                    </div>
                  )}
                  
                  {/* Legend */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-card">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                        <span className="font-body text-primary">Head Office</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-body text-primary">Branch Office</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in">
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">10+</div>
            <div className="text-sm font-body text-muted-foreground">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
            <div className="text-sm font-body text-muted-foreground">Local Support</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
            <div className="text-sm font-body text-muted-foreground">Service Areas</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">100%</div>
            <div className="text-sm font-body text-muted-foreground">Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceMap;