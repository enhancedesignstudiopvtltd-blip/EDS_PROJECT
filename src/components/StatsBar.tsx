import React from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';

const stats = [
  { value: '150+', label: 'Clients' },
  { value: '300+', label: 'Projects' },
  { value: '45+', label: 'Employees' },
  { value: '3', label: 'Offices' },
];

const StatsBar = () => {
  return (
    <MotionSection className="py-8 bg-background" variant="up" stagger data-aos-once="true">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <MotionItem key={s.label} variant="up" delay={i * 0.06} className="text-center p-6 bg-secondary rounded-xl shadow-card">
              <div className="text-3xl font-heading font-bold text-accent">{s.value}</div>
              <div className="text-sm font-body text-muted-foreground">{s.label}</div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default StatsBar;