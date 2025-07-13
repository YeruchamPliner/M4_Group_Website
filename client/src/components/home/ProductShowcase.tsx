
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const featuredProjects = [
  {
    id: 1,
    title: "Sunset Manor Nursing Home",
    location: "Denver, Colorado",
    type: "Nursing Home",
    year: "2023",
    description: "A state-of-the-art 120-bed nursing facility featuring modern amenities and specialized care units.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    features: ["120 Beds", "Memory Care Unit"]
  },
  {
    id: 2,
    title: "Riverside Rehabilitation Center",
    location: "Austin, Texas",
    type: "Rehabilitation Center",
    year: "2023",
    description: "Comprehensive rehabilitation facility with advanced equipment and accessible design.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?auto=format&fit=crop&w=800&q=80",
    features: ["Physical Therapy", "Aquatic Therapy"]
  },
  {
    id: 3,
    title: "Parkside Senior Living",
    location: "Charlotte, North Carolina",
    type: "Senior Living",
    year: "2022",
    description: "Luxury senior living community with independent and assisted living options.",
    image: "https://images.unsplash.com/photo-1566027310447-8d5ee9c2d421?auto=format&fit=crop&w=800&q=80",
    features: ["Independent Living", "Activity Programs"]
  }
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
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
