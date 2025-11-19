import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sunset Manor Nursing Home",
    location: "Denver, Colorado",
    type: "Nursing Home",
    year: "2023",
    description: "A state-of-the-art 120-bed nursing facility featuring modern amenities, therapeutic gardens, and specialized care units.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    features: ["120 Beds", "Therapeutic Gardens", "Memory Care Unit", "Rehabilitation Center"]
  },
  {
    id: 2,
    title: "Riverside Rehabilitation Center",
    location: "Austin, Texas",
    type: "Rehabilitation Center",
    year: "2023",
    description: "Comprehensive rehabilitation facility with advanced equipment and accessible design for optimal patient outcomes.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5",
    features: ["Physical Therapy", "Occupational Therapy", "Aquatic Therapy", "Outpatient Services"]
  },
  {
    id: 3,
    title: "Parkside Senior Living",
    location: "Charlotte, North Carolina",
    type: "Senior Living",
    year: "2022",
    description: "Luxury senior living community with independent and assisted living options in a beautiful park-like setting.",
    image: "https://images.unsplash.com/photo-1566027310447-8d5ee9c2d421",
    features: ["Independent Living", "Assisted Living", "Dining Services", "Activity Programs"]
  },
  {
    id: 4,
    title: "Metro Commercial Plaza",
    location: "Seattle, Washington",
    type: "Commercial",
    year: "2022",
    description: "Modern commercial development featuring office spaces, retail, and dining in the heart of downtown.",
    image: "https://images.unsplash.com/photo-1577760258779-e787a1733016",
    features: ["Office Spaces", "Retail Units", "Parking Garage", "Green Building Certified"]
  },
  {
    id: 5,
    title: "Harmony Heights Apartments",
    location: "Phoenix, Arizona",
    type: "Multi-Family",
    year: "2021",
    description: "Contemporary multi-family residential complex with modern amenities and sustainable design features.",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be",
    features: ["200 Units", "Fitness Center", "Pool & Spa", "Energy Efficient"]
  },
  {
    id: 6,
    title: "Golden Years Care Center",
    location: "Atlanta, Georgia",
    type: "Nursing Home",
    year: "2021",
    description: "Family-centered nursing home designed for comfort and dignity with specialized Alzheimer's care.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    features: ["80 Beds", "Alzheimer's Care", "Family Rooms", "Outdoor Spaces"]
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-24 md:pt-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80" /> {/* Overlay */}
        <img
          src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80"
          alt="Healthcare Project Portfolio"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Discover our portfolio of successful design-build projects across healthcare, commercial, and residential sectors
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800 overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
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
                    {project.features.map((feature, featureIndex) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}