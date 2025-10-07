import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Phone, ExternalLink } from 'lucide-react';

export const ContactOptions = () => {
  const handleEmailClick = () => {
    window.open('mailto:support@designedgemepllp.com', '_blank');
  };

  const handleTeamsClick = () => {
    // Replace with actual Teams link
    window.open('https://teams.microsoft.com/l/chat/0/0?users=support@designedgemepllp.com', '_blank');
  };

  const handleContactFormClick = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    window.open('tel:+1234567890', '_blank');
  };

  return (
    <Card className="mt-3 border-accent/20 bg-secondary/50">
      <CardContent className="p-3">
        <p className="text-sm text-muted-foreground mb-3 font-medium">
          Need more help? Contact us directly:
        </p>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleEmailClick}
            className="flex items-center space-x-2 text-xs hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="w-3 h-3" />
            <span>Email</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleTeamsClick}
            className="flex items-center space-x-2 text-xs hover:bg-accent hover:text-accent-foreground"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Teams</span>
            <ExternalLink className="w-3 h-3" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handlePhoneClick}
            className="flex items-center space-x-2 text-xs hover:bg-accent hover:text-accent-foreground"
          >
            <Phone className="w-3 h-3" />
            <span>Call</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleContactFormClick}
            className="flex items-center space-x-2 text-xs hover:bg-accent hover:text-accent-foreground"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Form</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};