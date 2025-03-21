import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description: "A state-of-the-art office building featuring sustainable design and smart technology integration.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    description: "High-end residential development with premium amenities and spectacular city views.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Industrial Warehouse Complex",
    category: "Industrial",
    description: "Modern industrial facility with advanced logistics capabilities and sustainable features.",
    image: "https://images.unsplash.com/photo-1587293852726-70656d4e2277?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Our Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-lg border-gray-800">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
