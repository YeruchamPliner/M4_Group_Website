import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PencilRuler, Building2, Hammer, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: PencilRuler,
    title: "Architectural Design",
    description: "Custom architectural solutions that blend form and function."
  },
  {
    icon: Building2,
    title: "Development Planning",
    description: "Strategic planning and development services for successful project execution."
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "High-quality construction services with meticulous attention to detail."
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Comprehensive project oversight from start to finish."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75" /> {/* Overlay */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="Construction and Development Services"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
