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
    // India
    { name: 'Mumbai', coordinates: [72.8777, 19.0760], type: 'headquarters', country: 'India' },
    { name: 'Pune', coordinates: [73.8567, 18.5204], type: 'office', country: 'India' },
    { name: 'Delhi', coordinates: [77.1025, 28.7041], type: 'office', country: 'India' },
    { name: 'Gurgaon', coordinates: [77.0266, 28.4595], type: 'office', country: 'India' },
    { name: 'Ahmedabad', coordinates: [72.5714, 23.0225], type: 'office', country: 'India' },
    { name: 'Chennai', coordinates: [80.2707, 13.0827], type: 'office', country: 'India' },
    { name: 'Hyderabad', coordinates: [78.4867, 17.3850], type: 'office', country: 'India' },
    { name: 'Bangalore', coordinates: [77.5946, 12.9716], type: 'office', country: 'India' },
    { name: 'Bihar', coordinates: [85.3131, 25.0961], type: 'office', country: 'India' },
    { name: 'Lucknow', coordinates: [80.9462, 26.8467], type: 'office', country: 'India' },
    // International
    { name: 'Thimphu', coordinates: [89.6419, 27.4728], type: 'international', country: 'Bhutan' },
    { name: 'Cape Town', coordinates: [18.4241, -33.9249], type: 'international', country: 'South Africa' },
    { name: 'Dubai', coordinates: [55.2708, 25.2048], type: 'international', country: 'UAE' },
  ];

  return (
    <section id="presence" className="py-20 bg-background" data-reveal="up" data-stagger data-aos-once="true">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Global <span className="text-accent">Presence</span>
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Strategically located across India and internationally to serve our clients with comprehensive MEP solutions
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
                <div className="space-y-4">
                  {/* India Locations */}
                  <div>
                    <h4 className="text-lg font-heading font-medium text-accent mb-3 flex items-center">
                      <span className="mr-2">🇮🇳</span> India
                    </h4>
                    <div className="space-y-2">
                      {presenceCities.filter(city => city.country === 'India').map((city, index) => (
                        <div 
                          key={index}
                          className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                            hoveredCity === city.name 
                              ? 'bg-accent/10 border-accent' 
                              : 'bg-secondary/50 hover:bg-secondary'
                          } border text-sm`}
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                city.type === 'headquarters' ? 'bg-accent' : 'bg-primary'
                              } ${hoveredCity === city.name ? 'animate-pulse' : ''}`}></div>
                              <span className="font-body font-medium text-foreground">
                                {city.name}
                              </span>
                            </div>
                            <MapPin className="w-3 h-3 text-accent" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* International Locations */}
                  <div>
                    <h4 className="text-lg font-heading font-medium text-accent mb-3 flex items-center">
                      <span className="mr-2">🌍</span> International
                    </h4>
                    <div className="space-y-2">
                      {presenceCities.filter(city => city.country !== 'India').map((city, index) => (
                        <div 
                          key={index}
                          className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                            hoveredCity === city.name 
                              ? 'bg-accent/10 border-accent' 
                              : 'bg-secondary/50 hover:bg-secondary'
                          } border text-sm`}
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                              <span className="font-body font-medium text-foreground">
                                {city.name}, {city.country}
                              </span>
                            </div>
                            <MapPin className="w-3 h-3 text-accent" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
                            setTooltipContent(`${city.name}, ${city.country} - ${
                              city.type === 'headquarters' ? 'Headquarters' : 
                              city.type === 'international' ? 'International Office' : 'Office'
                            }`);
                            setHoveredCity(city.name);
                          }}
                          onMouseLeave={() => {
                            setTooltipContent('');
                            setHoveredCity(null);
                          }}
                        >
                          <g>
                            <circle 
                              r={city.type === 'headquarters' ? 8 : city.type === 'international' ? 7 : 6} 
                              fill={city.type === 'headquarters' ? '#f15a29' : city.type === 'international' ? '#0b1f4e' : '#0b1f4e'}
                              stroke="#fff"
                              strokeWidth={2}
                              className={`cursor-pointer transition-all duration-300 ${
                                hoveredCity === city.name ? 'animate-pulse' : ''
                              }`}
                              style={{
                                filter: hoveredCity === city.name ? 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))' : 'none'
                              }}
                            />
                            <text
                              textAnchor="middle"
                              y={city.type === 'headquarters' ? -15 : city.type === 'international' ? -14 : -12}
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
                        <span className="font-body text-primary">Headquarters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-body text-primary">India Office</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-body text-primary">International</span>
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
            <div className="text-3xl font-heading font-bold text-accent mb-2">13+</div>
            <div className="text-sm font-body text-muted-foreground">Global Locations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
            <div className="text-sm font-body text-muted-foreground">Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">3</div>
            <div className="text-sm font-body text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
            <div className="text-sm font-body text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceMap;