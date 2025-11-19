import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 sm:pt-28 md:pt-32">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;