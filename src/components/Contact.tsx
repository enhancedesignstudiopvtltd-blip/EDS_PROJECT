import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  User, 
  MessageSquare, 
  Send,
  Clock,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: User,
      title: 'Contact Person',
      value: 'Imam Rabbani',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+91 9504322143',
      link: 'tel:+919504322143'
    },
    {
      icon: Mail,
      title: 'Email Address',
      value: 'sales@designedgemep.com\nprojects@designedgemep.com',
      link: null
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.designedgemep.com',
      link: 'https://www.designedgemep.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'Office No. 511C, C-Wing, Baitunnoor, Kurla West, Mumbai, Maharashtra, 400070, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Let's Connect & <span className="text-accent">Build Together</span>
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space with world-class MEP solutions? 
            Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-body font-semibold text-primary mb-1">
                            {info.title}
                          </h4>
                          {info.title === 'Email Address' ? (
                            <div className="space-y-1">
                              <a 
                                href="mailto:sales@designedgemep.com"
                                className="block text-muted-foreground hover:text-accent transition-colors font-body"
                              >
                                sales@designedgemep.com
                              </a>
                              <a 
                                href="mailto:projects@designedgemep.com"
                                className="block text-muted-foreground hover:text-accent transition-colors font-body"
                              >
                                projects@designedgemep.com
                              </a>
                            </div>
                          ) : info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-accent transition-colors font-body"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground font-body">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-0 shadow-card bg-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-heading font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-2 font-body">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-semibold text-primary flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-accent" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body font-medium text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="font-body"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="font-body"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium text-foreground">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your MEP requirements, project timeline, and any specific needs..."
                      required
                      rows={5}
                      className="font-body resize-none"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 mt-0.5 text-accent" />
                    <p className="font-body">
                      Your information is secure and will only be used to respond to your inquiry. 
                      We respect your privacy and never share your details.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent hover:shadow-accent text-white font-heading font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;