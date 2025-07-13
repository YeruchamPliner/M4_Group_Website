
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MapPin, Calendar, ArrowRight, Building2, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "Sunset Manor Nursing Home",
    location: "Denver, Colorado",
    type: "Nursing Home",
    year: "2023",
    description: "A state-of-the-art 120-bed nursing facility featuring modern amenities and specialized care units.",
    fullDescription: "Sunset Manor represents the pinnacle of modern nursing home design, featuring 120 beds across three specialized wings. The facility includes a dedicated memory care unit with secure outdoor gardens, a full-service rehabilitation center, and therapeutic recreation areas. Built with sustainability in mind, the facility incorporates solar panels, rainwater collection systems, and energy-efficient HVAC systems.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    features: ["120 Beds", "Memory Care Unit", "Rehabilitation Center", "Therapeutic Gardens"],
    size: "85,000 sq ft",
    capacity: "120 residents",
    completion: "December 2023"
  },
  {
    id: 2,
    title: "Riverside Rehabilitation Center",
    location: "Austin, Texas",
    type: "Rehabilitation Center",
    year: "2023",
    description: "Comprehensive rehabilitation facility with advanced equipment and accessible design.",
    fullDescription: "The Riverside Rehabilitation Center is a cutting-edge facility designed to provide comprehensive rehabilitation services. The center features state-of-the-art physical therapy equipment, an indoor aquatic therapy pool, occupational therapy suites, and specialized areas for speech and cognitive therapy. The design emphasizes natural lighting and therapeutic environments to promote healing.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?auto=format&fit=crop&w=800&q=80",
    features: ["Physical Therapy", "Aquatic Therapy", "Occupational Therapy", "Speech Therapy"],
    size: "45,000 sq ft",
    capacity: "200 patients/day",
    completion: "August 2023"
  },
  {
    id: 3,
    title: "Parkside Senior Living",
    location: "Charlotte, North Carolina",
    type: "Senior Living",
    year: "2022",
    description: "Luxury senior living community with independent and assisted living options.",
    fullDescription: "Parkside Senior Living offers a resort-style living experience for seniors in a beautifully landscaped setting. The community features 180 independent living apartments, 60 assisted living units, and comprehensive amenities including a fitness center, library, dining venues, and activity spaces. The design emphasizes aging-in-place with flexible unit configurations.",
    image: "https://images.unsplash.com/photo-1566027310447-8d5ee9c2d421?auto=format&fit=crop&w=800&q=80",
    features: ["Independent Living", "Assisted Living", "Dining Services", "Activity Programs"],
    size: "320,000 sq ft",
    capacity: "240 residents",
    completion: "June 2022"
  },
  {
    id: 4,
    title: "Metro Medical Plaza",
    location: "Seattle, Washington",
    type: "Medical Office",
    year: "2023",
    description: "Modern medical office building with specialized outpatient services.",
    fullDescription: "Metro Medical Plaza is a five-story medical office building designed to house multiple healthcare specialties under one roof. The facility includes imaging centers, laboratory services, outpatient surgery suites, and physician offices. Advanced building systems ensure optimal air quality and infection control throughout the facility.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    features: ["Outpatient Surgery", "Imaging Center", "Laboratory", "Specialist Offices"],
    size: "95,000 sq ft",
    capacity: "50 providers",
    completion: "October 2023"
  },
  {
    id: 5,
    title: "Valley Memory Care",
    location: "Phoenix, Arizona",
    type: "Memory Care",
    year: "2022",
    description: "Specialized memory care facility with secure outdoor spaces and therapeutic design.",
    fullDescription: "Valley Memory Care is specifically designed for residents with Alzheimer's and other forms of dementia. The facility features secure outdoor courtyards, sensory gardens, and specialized lighting systems that support circadian rhythms. Each neighborhood is designed with familiar, residential-style environments to reduce confusion and promote comfort.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    features: ["Secure Design", "Sensory Gardens", "Therapeutic Lighting", "Neighborhood Model"],
    size: "55,000 sq ft",
    capacity: "80 residents",
    completion: "March 2022"
  },
  {
    id: 6,
    title: "Coastal Wellness Center",
    location: "San Diego, California",
    type: "Wellness Center",
    year: "2023",
    description: "Integrated wellness facility combining fitness, therapy, and preventive care services.",
    fullDescription: "Coastal Wellness Center represents a new model of integrated healthcare, combining fitness facilities, physical therapy, mental health services, and preventive care under one roof. The facility features a full gymnasium, swimming pool, yoga studios, meditation spaces, and clinical areas for various health services.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    features: ["Fitness Center", "Pool", "Therapy Services", "Preventive Care"],
    size: "75,000 sq ft",
    capacity: "500 members",
    completion: "September 2023"
  }
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects showcasing excellence in healthcare facility design and construction across the United States
          </p>
        </motion.div>

        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 backdrop-blur-lg border-gray-700 hover:bg-gray-800/90 text-white h-12 w-12 rounded-full shadow-lg"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 backdrop-blur-lg border-gray-700 hover:bg-gray-800/90 text-white h-12 w-12 rounded-full shadow-lg"
            onClick={scrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <ScrollArea className="w-full whitespace-nowrap">
            <div ref={scrollContainerRef} className="flex space-x-6 pb-4">
              {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 overflow-hidden hover:bg-gray-900/70 transition-all duration-300 cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="bg-gray-800 text-gray-200">
                            {project.type}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 2).map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="outline"
                              className="border-gray-700 text-gray-300 text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="bg-gray-900/95 backdrop-blur-lg border-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl text-white mb-4">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-800/50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-400 mb-2">
                              <Building2 className="w-4 h-4 mr-2" />
                              <span className="text-sm">Size</span>
                            </div>
                            <p className="text-white font-semibold">{project.size}</p>
                          </div>
                          
                          <div className="bg-gray-800/50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-400 mb-2">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="text-sm">Capacity</span>
                            </div>
                            <p className="text-white font-semibold">{project.capacity}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="bg-gray-800 text-gray-200">
                              {project.type}
                            </Badge>
                            <div className="flex items-center text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              Completed {project.completion}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-400 mb-4">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                          <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant="outline"
                                className="border-gray-700 text-gray-300 justify-center py-2"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
