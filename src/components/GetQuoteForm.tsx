import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Upload, FileText, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import FormModal from '@/components/FormModal';

interface GetQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string;
  projectDetails: string;
  file?: File;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  services?: string;
  projectDetails?: string;
}

const GetQuoteForm: React.FC<GetQuoteFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services: '',
    projectDetails: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const services = [
    'HVAC – High Side',
    'HVAC – Low Side',
    'Electrical Systems',
    'Cable Tray Systems',
    'Fire Fighting Systems',
    'Fire Alarm Systems',
    'Fire Suppression Systems',
    'IBMS Integration',
    'MEP Consulting',
    'Complete MEP Solutions',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.services) {
      newErrors.services = 'Please select a service';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('File size must be less than 10MB');
      return;
    }
    
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/gif'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload PDF, Word document, or image files only');
      return;
    }

    setFormData(prev => ({ ...prev, file }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Prepare email data
      const emailData = {
        to: 'sales@designedgemep.com',
        subject: `New Quote Request from ${formData.name}`,
        body: `
          New quote request received:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Services: ${formData.services}
          Project Details: ${formData.projectDetails}
          ${formData.file ? `File attached: ${formData.file.name}` : 'No file attached'}
          
          Please contact the client to discuss their requirements.
        `,
        formData: formData
      };
      
      // Here you would typically send the form data to your backend
      console.log('Quote request submitted:', emailData);
      
      // For now, we'll simulate successful submission
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      services: '',
      projectDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <FormModal isOpen={isOpen} onClose={handleClose} title={isSubmitted ? 'Thank You!' : 'Get Quote'}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Thank you for your interest!
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team will contact you shortly to discuss your project requirements.
          </p>
          <Button onClick={handleClose} className="bg-gradient-accent">
            Close
          </Button>
        </div>
      ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={cn(errors.name && 'border-red-500')}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={cn(errors.email && 'border-red-500')}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={cn(errors.phone && 'border-red-500')}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services">Services Interested In *</Label>
                  <Select value={formData.services} onValueChange={(value) => handleInputChange('services', value)}>
                    <SelectTrigger className={cn(errors.services && 'border-red-500')}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.services && <p className="text-sm text-red-500">{errors.services}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails">Project Details *</Label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                  className={cn('min-h-[120px]', errors.projectDetails && 'border-red-500')}
                  placeholder="Please describe your project requirements, timeline, and any specific needs..."
                />
                {errors.projectDetails && <p className="text-sm text-red-500">{errors.projectDetails}</p>}
              </div>

              <div className="space-y-2">
                <Label>File Upload (Optional)</Label>
                <div
                  className={cn(
                    'border-2 border-dashed rounded-lg p-6 text-center transition-colors',
                    dragActive ? 'border-accent bg-accent/10' : 'border-border',
                    'hover:border-accent hover:bg-accent/5'
                  )}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {formData.file ? (
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{formData.file.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setFormData(prev => ({ ...prev, file: undefined }))}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your file here, or{' '}
                        <label className="text-accent cursor-pointer hover:underline">
                          browse
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                          />
                        </label>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, Word, or Image files (max 10MB)
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-accent"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </Button>
              </div>
            </form>
          )}
    </FormModal>
  );
};

export default GetQuoteForm;