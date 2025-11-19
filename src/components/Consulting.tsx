import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Leaf, Target, TrendingUp, ShieldCheck } from 'lucide-react';

const Consulting = () => {
  const pillars = [
    {
      icon: Target,
      title: 'MEP Consulting',
      description:
        'Independent design review, value engineering, performance optimization, compliance guidance (NBC, NFPA, ASHRAE, IEC).',
      items: [
        'Peer review & due diligence',
        'Cost–benefit analysis & VE',
        'Design audit & compliance',
        'Commissioning strategies',
      ],
    },
    {
      icon: Leaf,
      title: 'Sustainability Consulting',
      description:
        'Energy modeling, daylight & comfort studies, renewable integration, and certification pathways (IGBC/LEED/EDGE).',
      items: [
        'Building energy simulation',
        'Thermal comfort & daylight analysis',
        'Solar & microclimate studies',
        'Green building certification support',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Strategic & Advisory',
      description:
        'Lifecycle planning, operational excellence, and business outcomes aligned to Capex/Opex realities.',
      items: [
        'MEP strategy & roadmap',
        'Carbon footprint reduction plans',
        'Risk assessment & mitigation',
        'Performance SLAs & KPIs',
      ],
    },
  ];

  const useCases = [
    {
      title: 'Greenfield Commercial Tower',
      summary:
        'Optimized HVAC & electrical design for peak efficiency, enabling 18–22% energy savings versus baseline and faster approvals.',
    },
    {
      title: 'Hospital Retrofit',
      summary:
        'Phased upgrade of HVAC, medical-grade power, and fire safety with zero downtime and strict compliance to healthcare codes.',
    },
    {
      title: 'Data Center Efficiency',
      summary:
        'Cooling rebalancing, UPS strategy, and IBMS insights delivering improved PUE and resilient operations.',
    },
  ];

  return (
    <section id="consulting" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">Consulting Services</h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Expert guidance to make better decisions early—because design choices
            determine performance, safety, and lifecycle costs.
          </p>
          <div className="mt-6 inline-flex items-start gap-3 bg-secondary/70 rounded-xl p-4 text-left">
            <Quote className="w-5 h-5 text-accent mt-1" />
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl">
              “Well-informed MEP decisions pay dividends. Our consulting ensures\n
              code compliance, energy efficiency, and operational resilience—so your\n
              assets perform on day one and for years to come.”
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up">
          {pillars.map((pillar, idx) => (
            <Card key={pillar.title} className="card-hover border-0 shadow-card overflow-hidden" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardHeader className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent">
                    <pillar.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">{pillar.title}</CardTitle>
                </div>
                <p className="mt-3 text-sm md:text-base text-muted-foreground font-body">{pillar.description}</p>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="grid grid-cols-1 gap-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 p-2 rounded-lg bg-white/80 hover:bg-accent/10 transition-colors">
                      <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="font-body text-sm md:text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-14 md:mt-16 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-6">Representative Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((uc, idx) => (
              <Card key={uc.title} className="card-hover border-0 shadow-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader className="p-6">
                  <CardTitle className="text-lg md:text-xl font-heading text-primary">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{uc.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;