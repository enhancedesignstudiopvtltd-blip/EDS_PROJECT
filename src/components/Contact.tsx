import React, { useState } from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';
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
      icon: MapPin,
      title: 'Head Office',
      value: 'PHOENIX PARAGON PLAZA, 1ST FLOOR, OFFICE NO. 1B/53, LBS MARG, KURLA WEST, MUMBAI – 400070, India',
      link: null,
    },
    {
      icon: MapPin,
      title: 'Satellite Office',
      value: 'VASHI – NAVI MUMBAI',
      link: null,
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.enhancedesignstudio.com',
      link: 'https://www.enhancedesignstudio.com',
    },
    {
      icon: Mail,
      title: 'Contact us',
      value: 'Info@enhancedesignstudio.com',
      link: 'mailto:Info@enhancedesignstudio.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9504322143',
      link: 'tel:+919504322143',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 77984 69191',
      link: 'tel:+917798469191',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon–Fri: 9:00 AM – 6:00 PM · Sat: 9:00 AM – 2:00 PM',
      link: null,
    },
  ];

  return (
    <MotionSection id="contact" className="section-padding bg-transparent" variant="up" stagger data-aos-once="true">
      <div className="container mx-auto container-mobile">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <MotionItem variant="up">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold">Let’s Build Smart Together</h2>
              </MotionItem>
              <MotionItem variant="up" delay={0.06}>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold">Let’s Start Your Next Project</h3>
              </MotionItem>
              <MotionItem variant="fade" delay={0.12}>
                <p className="text-base sm:text-lg font-body text-white/80 leading-[1.85] max-w-[65ch]">
                  Whether you’re planning a new commercial development, upgrading an industrial facility, or exploring sustainable design options, our engineering team is ready to help. Tell us your goals and challenges, and we’ll recommend solutions tailored to your timeline and performance targets.
                </p>
              </MotionItem>
              <div>
                <MotionItem variant="up" delay={0.18}>
                  <h4 className="text-lg sm:text-xl font-heading font-semibold mb-3">Contact Information</h4>
                </MotionItem>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <MotionItem key={index} variant="up" delay={0.2 + index * 0.06} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center">
                        <info.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-heading font-semibold text-sm sm:text-base">{info.title}</div>
                        {info.link ? (
                          <a href={info.link} className="font-body text-sm sm:text-base text-white hover:underline">{info.value}</a>
                        ) : (
                          <p className="font-body text-sm sm:text-base text-white/80">{info.value}</p>
                        )}
                      </div>
                    </MotionItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;
