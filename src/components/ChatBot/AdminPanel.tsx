import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Save, Settings, MessageSquare } from 'lucide-react';
import { chatBotService } from './chatBotService';
import { FAQ, AdminSettings } from './types';
import { useToast } from '@/hooks/use-toast';

export const AdminPanel = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [settings, setSettings] = useState<AdminSettings>({
    companyEmail: '',
    teamsLink: '',
    phoneNumber: '',
    officeHours: '',
    welcomeMessage: '',
    fallbackMessage: ''
  });
  const [newFAQ, setNewFAQ] = useState({
    question: '',
    answer: '',
    keywords: '',
    category: 'general' as FAQ['category']
  });
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setFaqs(chatBotService.getFAQs());
    setSettings(chatBotService.getSettings());
  };

  const handleSaveSettings = () => {
    chatBotService.updateSettings(settings);
    toast({
      title: 'Settings Updated',
      description: 'Chat bot settings have been successfully updated.',
    });
  };

  const handleAddFAQ = () => {
    if (!newFAQ.question || !newFAQ.answer) {
      toast({
        title: 'Error',
        description: 'Please fill in both question and answer fields.',
        variant: 'destructive',
      });
      return;
    }

    chatBotService.addFAQ({
      question: newFAQ.question,
      answer: newFAQ.answer,
      keywords: newFAQ.keywords.split(',').map(k => k.trim()),
      category: newFAQ.category
    });

    setNewFAQ({
      question: '',
      answer: '',
      keywords: '',
      category: 'general'
    });

    loadData();
    toast({
      title: 'FAQ Added',
      description: 'New FAQ has been successfully added.',
    });
  };

  const handleDeleteFAQ = (id: string) => {
    chatBotService.deleteFAQ(id);
    loadData();
    toast({
      title: 'FAQ Deleted',
      description: 'FAQ has been successfully deleted.',
    });
  };

  const handleUpdateFAQ = (id: string, field: keyof FAQ, value: any) => {
    const updates: Partial<FAQ> = { [field]: value };
    if (field === 'keywords' && typeof value === 'string') {
      updates.keywords = value.split(',').map(k => k.trim());
    }
    chatBotService.updateFAQ(id, updates);
    loadData();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Chat Bot Admin Panel</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="settings" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="faqs">FAQs Management</TabsTrigger>
            </TabsList>

            <TabsContent value="settings" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyEmail">Company Email</Label>
                  <Input
                    id="companyEmail"
                    value={settings.companyEmail}
                    onChange={(e) => setSettings(prev => ({ ...prev, companyEmail: e.target.value }))}
                    placeholder="support@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={settings.phoneNumber}
                    onChange={(e) => setSettings(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    placeholder="+1-234-567-8900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamsLink">Microsoft Teams Link</Label>
                  <Input
                    id="teamsLink"
                    value={settings.teamsLink}
                    onChange={(e) => setSettings(prev => ({ ...prev, teamsLink: e.target.value }))}
                    placeholder="https://teams.microsoft.com/..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="officeHours">Office Hours</Label>
                  <Input
                    id="officeHours"
                    value={settings.officeHours}
                    onChange={(e) => setSettings(prev => ({ ...prev, officeHours: e.target.value }))}
                    placeholder="Monday to Friday, 9:00 AM to 6:00 PM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcomeMessage">Welcome Message</Label>
                <Textarea
                  id="welcomeMessage"
                  value={settings.welcomeMessage}
                  onChange={(e) => setSettings(prev => ({ ...prev, welcomeMessage: e.target.value }))}
                  placeholder="Hello! I'm your assistant..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fallbackMessage">Fallback Message</Label>
                <Textarea
                  id="fallbackMessage"
                  value={settings.fallbackMessage}
                  onChange={(e) => setSettings(prev => ({ ...prev, fallbackMessage: e.target.value }))}
                  placeholder="I'm sorry, I don't have information about that..."
                />
              </div>

              <Button onClick={handleSaveSettings} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </Button>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-4">
              {/* Add New FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Add New FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newQuestion">Question</Label>
                    <Input
                      id="newQuestion"
                      value={newFAQ.question}
                      onChange={(e) => setNewFAQ(prev => ({ ...prev, question: e.target.value }))}
                      placeholder="What services do you offer?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newAnswer">Answer</Label>
                    <Textarea
                      id="newAnswer"
                      value={newFAQ.answer}
                      onChange={(e) => setNewFAQ(prev => ({ ...prev, answer: e.target.value }))}
                      placeholder="We offer comprehensive MEP services..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newKeywords">Keywords (comma-separated)</Label>
                      <Input
                        id="newKeywords"
                        value={newFAQ.keywords}
                        onChange={(e) => setNewFAQ(prev => ({ ...prev, keywords: e.target.value }))}
                        placeholder="services, mep, hvac, electrical"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newCategory">Category</Label>
                      <Select
                        value={newFAQ.category}
                        onValueChange={(value: FAQ['category']) => setNewFAQ(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                          <SelectItem value="contact">Contact</SelectItem>
                          <SelectItem value="general">General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleAddFAQ} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add FAQ
                  </Button>
                </CardContent>
              </Card>

              {/* Existing FAQs */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Existing FAQs</h3>
                {faqs.map((faq) => (
                  <Card key={faq.id}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-2">
                          <Input
                            value={faq.question}
                            onChange={(e) => handleUpdateFAQ(faq.id, 'question', e.target.value)}
                            className="font-medium"
                          />
                          <Textarea
                            value={faq.answer}
                            onChange={(e) => handleUpdateFAQ(faq.id, 'answer', e.target.value)}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <Input
                              value={faq.keywords.join(', ')}
                              onChange={(e) => handleUpdateFAQ(faq.id, 'keywords', e.target.value)}
                              placeholder="Keywords"
                            />
                            <Select
                              value={faq.category}
                              onValueChange={(value: FAQ['category']) => handleUpdateFAQ(faq.id, 'category', value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="services">Services</SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                                <SelectItem value="contact">Contact</SelectItem>
                                <SelectItem value="general">General</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteFAQ(faq.id)}
                          className="ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};