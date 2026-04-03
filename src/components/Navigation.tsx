import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import edsLogoPrimaryPng from '@/EDS_1.png';
import edsLogoFallbackPng from '@/EDS Pvt. Ltd..png';
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
  const [logoSrc, setLogoSrc] = useState(edsLogoPrimaryPng);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const comingSoon =
    (import.meta.env?.VITE_COMING_SOON ?? 'true') === 'true' ||
    (import.meta.env as any)?.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  return (
    <nav className={`nav-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Enhance Design Studio Pvt. Ltd."
              className="navbar-logo"
              onError={() => setLogoSrc(edsLogoFallbackPng)}
            />
          </a>

          {/* Desktop Navigation with Services Mega Dropdown */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href={comingSoon ? "/coming-soon" : "/about-us"} className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">About us</a>
                </NavigationMenuItem>

                {/* Link to Design services page */}
                <NavigationMenuItem>
                  <a href={comingSoon ? "/coming-soon" : "/design-build"} className="px-4 py-3 font-body font-medium text-primary hover:text-black transition-colors">Design Services</a>
                </NavigationMenuItem>

                {/* Sustainability: link to Sustainable page when maintenance is on; otherwise dropdown */}
                {comingSoon ? (
                  <NavigationMenuItem>
                    <a href="/sustainable" className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Sustainability</a>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem className="dropdown relative">
                    <NavigationMenuTrigger className="px-4 py-3 font-body font-medium text-primary">Sustainability</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full flex justify-center bg-gray-100 shadow-xl border border-gray-200">
                      <div className="dropdown-content">
                        {servicesCatalog.map((col) => (
                          <div key={col.title} className="service-column">
                            <h3>{col.title}</h3>
                            <ul>
                              {col.items.map((it) => (
                                <li key={it}>
                                  <a href="/sustainable" className="flex items-center gap-2 px-2 py-1 rounded-md text-sm font-body text-slate-800 hover:text-black hover:underline transition-colors">
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
                )}

                <NavigationMenuItem>
                  <a href={comingSoon ? "/coming-soon" : "/#projects"} className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">Projects</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href={comingSoon ? "/coming-soon" : "/#news"} className="px-4 py-3 font-body font-medium text-primary hover:text-accent transition-colors">News & Updates</a>
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
          <div className="md:hidden mt-3 sm:mt-4 py-4 bg-black/70 backdrop-blur-xl rounded-xl border border-white/15 animate-fade-up">
            <div className="flex flex-col space-y-1 px-4">
              <a href="/" className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href={comingSoon ? "/coming-soon" : "/about-us"} className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>About us</a>

              {/* Mobile: Design services link */}
              <a href={comingSoon ? "/coming-soon" : "/design-build"} className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Design Services</a>

              {/* Mobile: Sustainability acts as a link when maintenance is on; otherwise collapsible */}
              {comingSoon ? (
                <a href="/sustainable" className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Sustainability
                </a>
              ) : (
                <>
                  <button
                    className="font-body font-medium text-white py-3 border-b border-white/20 btn-touch flex items-center justify-center gap-2 hover:text-accent"
                    onClick={() => setIsMobileServicesOpen((v) => !v)}
                    aria-expanded={isMobileServicesOpen}
                  >
                    Sustainability
                    <span className={`transition-transform ${isMobileServicesOpen ? 'rotate-90' : ''}`}>›</span>
                  </button>
                  {isMobileServicesOpen && (
                    <div className="bg-white/5 rounded-md mx-2 mb-2 p-3 animate-fade-up">
                      {servicesCatalog.map((col) => (
                        <div key={col.title} className="mb-4 last:mb-0">
                          <h4 className="font-heading font-semibold text-white text-sm mb-2">{col.title}</h4>
                          <ul className="space-y-1">
                            {col.items.map((it) => (
                              <li key={it}>
                                <a href="/sustainable" className="block px-2 py-1 rounded-md text-sm font-body text-white/90 hover:text-accent hover:underline">
                                  {it}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              <a href={comingSoon ? "/coming-soon" : "/#projects"} className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href={comingSoon ? "/coming-soon" : "/#news"} className="font-body font-medium text-white hover:text-accent transition-colors py-3 border-b border-white/20 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>News & Updates</a>
              <a href="/contact-us" className="font-body font-medium text-white hover:text-accent transition-colors py-3 btn-touch text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
