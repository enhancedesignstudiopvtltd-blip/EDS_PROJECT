import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(1100px_circle_at_20%_0%,_rgba(148,163,184,0.22),_transparent_55%),radial-gradient(900px_circle_at_85%_28%,_rgba(255,255,255,0.10),_transparent_52%),linear-gradient(135deg,_#121826,_#0b0f16)]">
      <Navigation />
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12">
        <Contact />
      </div>
    </div>
  );
};

export default ContactUsPage;
