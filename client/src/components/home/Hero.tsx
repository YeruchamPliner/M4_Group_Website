import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GridPattern from "../ui/patterns/GridPattern";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, Building, MapPin, Calendar, MessageSquare, DollarSign, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import img1 from "../../assets/20230919_115117_1761449206238.jpg";
import img2 from "../../assets/IMG-20240801-WA0036_1761449206239.jpg";
import img7 from "../../assets/IMG-20240321-WA0057_1761449206243.jpg";
import img8 from "../../assets/20240730_112919_1761449206244.jpg";
import img9 from "../../assets/20240416_164013_1761449206245.jpg";
import img11 from "../../assets/20240730_112608_1763384881743.jpg";

const slides = [
  {
    url: img1,
    alt: "Modern Dining and Community Area",
    title: "Community Excellence"
  },
  {
    url: img2,
    alt: "Rehabilitation and Therapy Room",
    title: "Healthcare Excellence"
  },
  {
    url: img8,
    alt: "Spacious Patient Accommodation",
    title: "Quality Care Spaces"
  },
  {
    url: img7,
    alt: "Comfortable Resident Room",
    title: "Resident Care"
  },
  {
    url: img11,
    alt: "Modern Nursing Station",
    title: "Professional Workspaces"
  }
];

export default function Hero() {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    budget: "",
    timeline: "",
    description: "",
    preferredContact: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.projectType || !formData.location) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Consultation Request Received!",
          description: "Thank you! We will contact you within 24 hours using your preferred contact method to schedule your free consultation.",
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          location: "",
          budget: "",
          timeline: "",
          description: "",
          preferredContact: ""
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 h-full"
            >
              <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
              <img
                src={slide.url}
                alt={slide.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 z-10 opacity-40">
          <GridPattern />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-6 text-lg md:text-xl font-medium bg-gray-800 text-gray-200 rounded-full"
            >
              Design • Development • Construction
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Building Excellence, Delivering Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12"
            >
              M4 Development Group provides comprehensive design-build solutions for Healthcare, Commercial and Multi-Family projects. From concept to completion, we transform your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-yellow-600 text-black hover:bg-yellow-500 font-semibold">
                    Get a Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/95 backdrop-blur-lg border-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-white mb-4">
                      Free Consultation
                    </DialogTitle>
                  </DialogHeader>

                  <div className="max-w-4xl mx-auto">
                    <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h2 className="text-2xl font-semibold text-white flex items-center">
                            <Mail className="w-6 h-6 mr-2" />
                            Contact Information
                          </h2>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                              <Input
                                id="firstName"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                              <Input
                                id="lastName"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white"
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-gray-300">Company/Organization</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>

                        {/* Project Information */}
                        <div className="space-y-4">
                          <h2 className="text-2xl font-semibold text-white flex items-center">
                            <Building className="w-6 h-6 mr-2" />
                            Project Details
                          </h2>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="projectType" className="text-gray-300">Project Type *</Label>
                              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="nursing-home">Nursing Home</SelectItem>
                                  <SelectItem value="rehabilitation">Rehabilitation Center</SelectItem>
                                  <SelectItem value="senior-living">Senior Living</SelectItem>
                                  <SelectItem value="medical-office">Medical Office</SelectItem>
                                  <SelectItem value="commercial">Commercial</SelectItem>
                                  <SelectItem value="multi-family">Multi-Family</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="location" className="text-gray-300">Project Location *</Label>
                              <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                placeholder="City, State"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="budget" className="text-gray-300">Estimated Budget</Label>
                              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="under-1m">Under $1M</SelectItem>
                                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                                  <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                                  <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                                  <SelectItem value="over-25m">Over $25M</SelectItem>
                                  <SelectItem value="not-sure">Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="timeline" className="text-gray-300">Project Timeline</Label>
                              <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                                  <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
                                  <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                                  <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                                  <SelectItem value="planning">Planning phase</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-gray-300">Project Description</Label>
                            <Textarea
                              id="description"
                              value={formData.description}
                              onChange={(e) => handleInputChange("description", e.target.value)}
                              className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                              placeholder="Tell us about your project vision, requirements, and goals..."
                            />
                          </div>
                        </div>

                        {/* Consultation Preferences */}
                        <div className="space-y-4">
                          <h2 className="text-2xl font-semibold text-white flex items-center">
                            <Calendar className="w-6 h-6 mr-2" />
                            Consultation Preferences
                          </h2>

                          <div className="space-y-2">
                            <Label htmlFor="preferredContact" className="text-gray-300">Preferred Contact Method</Label>
                            <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder="Select contact method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="phone">Phone Call</SelectItem>
                                <SelectItem value="video">Video Conference</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="in-person">In-Person Meeting</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex justify-center pt-6">
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="bg-yellow-600 text-black hover:bg-yellow-500 font-semibold px-8"
                          >
                            Schedule Free Consultation
                          </Button>
                        </div>
                      </form>
                    </Card>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}