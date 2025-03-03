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
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 py-16">
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
