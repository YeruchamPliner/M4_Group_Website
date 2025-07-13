import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { PencilRuler, Building2, Hammer, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: PencilRuler,
    title: "Custom Design",
    description: "Expert architectural and interior design services tailored to your vision"
  },
  {
    icon: Building2,
    title: "Development Planning",
    description: "Comprehensive project planning and development strategy"
  },
  {
    icon: Hammer,
    title: "Construction Excellence",
    description: "Quality construction with attention to detail and craftsmanship"
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project oversight ensuring timely completion"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            M4 Development Group specializes in comprehensive design-build solutions across three key sectors
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}