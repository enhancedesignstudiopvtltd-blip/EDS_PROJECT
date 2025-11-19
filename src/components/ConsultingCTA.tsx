import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ConsultingCTA = () => {
  return (
    <section id="consulting-cta" className="py-12 md:py-16 bg-gradient-section">
      <div className="container mx-auto container-mobile">
        <Card className="border border-accent/30 shadow-card bg-white">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Looking for expert MEP consulting?
                </h3>
                <p className="mt-2 font-body text-muted-foreground">
                  Click below to connect with our specialists.
                </p>
              </div>
              <a href="/consulting" className="inline-block">
                <Button className="btn-touch bg-gradient-accent text-white hover:shadow-accent hover:scale-105">
                  Book Consulting
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsultingCTA;