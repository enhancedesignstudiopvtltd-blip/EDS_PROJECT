import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import edsLogo from '@/EDS_logo.png';
import servicesCatalog from '@/data/servicesCatalog';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-border' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto container-mobile py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={edsLogo}
              alt="Enhance Design Studio Pvt. Ltd. Logo"
              className="h-9 sm:h-11 md:h-14 w-auto mr-6 sm:mr-8 md:mr-10 object-contain"
            />
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary">
              Enhance <span className="text-accent">Design Studio</span>
              <span className="ml-1 sm:ml-2 text-sm sm:text-base font-normal">Pvt. Ltd.</span>
            </div>
          </div>

          {/* Desktop Navigation with Services Mega Dropdown */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/about-us" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">About us</a>
                </NavigationMenuItem>

                {/* Link to Design & Build page */}
                <NavigationMenuItem>
                  <a href="/design-build" className="px-4 py-3 font-body font-medium text-primary hover:text-black transition-colors">Design & Build</a>
                </NavigationMenuItem>

                {/* Services Mega Menu */}
                <NavigationMenuItem className="dropdown relative">
                  <NavigationMenuTrigger className="px-4 py-3 font-body font-medium text-primary">Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full flex justify-center bg-gray-100 shadow-xl border border-gray-200">
                    <div className="dropdown-content">
                      {servicesCatalog.map((col) => (
                        <div key={col.title} className="service-column">
                          <h3>{col.title}</h3>
                          <ul>
                            {col.items.map((it) => (
                              <li key={it}>
                                <a href="/services" className="flex items-center gap-2 px-2 py-1 rounded-md text-sm font-body text-slate-800 hover:text-black hover:underline transition-colors">
                                  <ChevronRight className="w-4 h-4 text-gray-600" />
                                  <span>{it}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/#projects" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Projects</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/#news" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">News & Updates</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/contact-us" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Contact us</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 sm:p-3 rounded-lg hover:bg-secondary transition-colors btn-touch"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu with collapsible Services */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 py-4 bg-background/95 backdrop-blur-lg rounded-lg border border-border animate-fade-up">
            <div className="flex flex-col space-y-1 px-4">
              <a href="/" className="font-body font-medium text-primary hover:text-accent transition-colors py-3 border-b border-border/50 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/about-us" className="font-body font-medium text-primary hover:text-accent transition-colors py-3 border-b border-border/50 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>About us</a>

              {/* Mobile: Design & Build link */}
              <a href="/design-build" className="font-body font-medium text-primary hover:text-black transition-colors py-3 border-b border-border/50 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Design & Build</a>

              {/* Collapsible Services */}
              <button
                className="font-body font-medium text-primary py-3 border-b border-border/50 btn-touch flex items-center justify-center gap-2 hover:text-accent"
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <span className={`transition-transform ${isMobileServicesOpen ? 'rotate-90' : ''}`}>›</span>
              </button>
              {isMobileServicesOpen && (
                <div className="bg-gray-100 rounded-md mx-2 mb-2 p-3 animate-fade-up">
                  {servicesCatalog.map((col) => (
                    <div key={col.title} className="mb-4 last:mb-0">
                      <h4 className="font-heading font-semibold text-primary text-sm mb-2">{col.title}</h4>
                      <ul className="space-y-1">
                        {col.items.map((it) => (
                          <li key={it}>
                            <a href="/services" className="block px-2 py-1 rounded-md text-sm font-body text-slate-800 hover:text-emerald-700 hover:underline">
                              {it}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <a href="/#projects" className="font-body font-medium text-primary hover:text-accent transition-colors py-3 border-b border-border/50 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/#news" className="font-body font-medium text-primary hover:text-accent transition-colors py-3 border-b border-border/50 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>News & Updates</a>
              <a href="/contact-us" className="font-body font-medium text-primary hover:text-accent transition-colors py-3 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;