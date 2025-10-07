import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';
import FormModal from '@/components/FormModal';

interface RequestProposalFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectScope: string;
  estimatedBudget: string;
  expectedTimeline: string;
  additionalDetails: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectScope?: string;
  estimatedBudget?: string;
  expectedTimeline?: string;
}

const RequestProposalForm: React.FC<RequestProposalFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectScope: '',
    estimatedBudget: '',
    expectedTimeline: '',
    additionalDetails: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
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

    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Project scope is required';
    }

    if (!formData.estimatedBudget.trim()) {
      newErrors.estimatedBudget = 'Estimated budget is required';
    }

    if (!formData.expectedTimeline.trim()) {
      newErrors.expectedTimeline = 'Expected timeline is required';
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
        to: 'projects@designedgemep.com',
        subject: `New Proposal Request from ${formData.name} - ${formData.company}`,
        body: `
          New proposal request received:
          
          Name: ${formData.name}
          Company: ${formData.company}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Project Scope: ${formData.projectScope}
          Estimated Budget: ${formData.estimatedBudget}
          Expected Timeline: ${formData.expectedTimeline}
          Additional Details: ${formData.additionalDetails}
          
          Please review and prepare a comprehensive proposal for this client.
        `,
        formData: formData
      };
      
      // Here you would typically send the form data to your backend
      console.log('Proposal request submitted:', emailData);
      
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
      company: '',
      email: '',
      phone: '',
      projectScope: '',
      estimatedBudget: '',
      expectedTimeline: '',
      additionalDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };



  return (
    <FormModal isOpen={true} onClose={handleClose} title={isSubmitted ? 'Thank You!' : 'Request Proposal'}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Thank you for requesting a proposal!
          </h3>
          <p className="text-muted-foreground mb-6">
            Our projects team will review your requirements and get back to you with a detailed proposal.
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
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={cn(errors.company && 'border-red-500')}
                    placeholder="Your company name"
                  />
                  {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={cn(errors.email && 'border-red-500')}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

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
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectScope">Project Scope *</Label>
                <Textarea
                  id="projectScope"
                  value={formData.projectScope}
                  onChange={(e) => handleInputChange('projectScope', e.target.value)}
                  className={cn('min-h-[120px]', errors.projectScope && 'border-red-500')}
                  placeholder="Describe the scope of your project, including building type, size, specific MEP requirements, and any special considerations..."
                />
                {errors.projectScope && <p className="text-sm text-red-500">{errors.projectScope}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="estimatedBudget">Estimated Budget *</Label>
                  <Input
                    id="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={(e) => handleInputChange('estimatedBudget', e.target.value)}
                    className={cn(errors.estimatedBudget && 'border-red-500')}
                    placeholder="e.g., $50,000 - $100,000"
                  />
                  {errors.estimatedBudget && <p className="text-sm text-red-500">{errors.estimatedBudget}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedTimeline">Expected Timeline *</Label>
                  <div className="relative">
                    <Input
                      id="expectedTimeline"
                      value={formData.expectedTimeline}
                      onChange={(e) => handleInputChange('expectedTimeline', e.target.value)}
                      className={cn(errors.expectedTimeline && 'border-red-500')}
                      placeholder="e.g., Q2 2024, 6 months, ASAP"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  {errors.expectedTimeline && <p className="text-sm text-red-500">{errors.expectedTimeline}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalDetails">Additional Details</Label>
                <Textarea
                  id="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                  className="min-h-[100px]"
                  placeholder="Any additional information, special requirements, or questions you'd like to include..."
                />
              </div>

              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> By submitting this form, you agree to be contacted by our projects team. 
                  We'll review your requirements and provide a detailed proposal within 3-5 business days.
                </p>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Proposal Request'}
                </Button>
              </div>
            </form>
          )}
    </FormModal>
  );
};

export default RequestProposalForm;