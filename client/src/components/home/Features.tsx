import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PencilRuler, Building2, Hammer, ClipboardCheck, Users, Shield, Zap, Globe, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import featuresBg from "../../assets/20240416_164013_1761449206245.jpg";

const features = [
  {
    icon: PencilRuler,
    title: "Architectural Custom Design",
    description: "Custom architectural solutions, space planning that blend form and function",
    expandedDescription: "Our design team creates innovative, functional spaces that reflect your unique requirements and aesthetic preferences. We specialize in Healthcare facility design, Commercial architecture, and Multi-Family residential projects. Our comprehensive design services include space planning, interior design, ADA compliance, and sustainable design solutions that enhance both functionality and visual appeal. You can either work directly with our designers or we can work with any designer of your choosing."
  },
  {
    icon: Building2,
    title: "Development Planning",
    description: "Comprehensive project planning and development strategy from start to finish",
    expandedDescription: "From initial concept to final execution, our development planning services ensure your project meets all regulatory requirements, stays within budget, and delivers on schedule. We handle site analysis, feasibility studies, permitting, zoning compliance, and coordinate with local authorities to streamline the approval process. Our experienced team anticipates challenges and develops strategic solutions before they become problems. We work directly with your internal team to maintain uninterrupted facility operations throughout the project."
  },
  {
    icon: Hammer,
    title: "Construction Excellence",
    description: "Quality construction with high attention to detail and craftsmanship",
    expandedDescription: "Our skilled construction teams deliver superior craftsmanship using the latest techniques and highest quality materials. We maintain strict quality control standards throughout the construction process, ensuring every detail meets or exceeds industry standards. With our proficiency in Healthcare regulation, we ensure you project is compliant with all the changing Healthcare standards and regulations. From foundation to finish, we prioritize safety, efficiency, and durability while maintaining open communication with clients throughout the build process."
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project oversight ensuring timely completion",
    expandedDescription: "Our certified project managers coordinate every aspect of your project, from initial planning through final inspection. We provide regular progress updates, manage subcontractor schedules, monitor budgets, and ensure quality standards are maintained. Our proactive approach to project management minimizes delays and keeps your project on track while maintaining clear communication channels throughout the entire process."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
        <img
          src={featuresBg}
          alt="Professional Reception Area"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
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
            Comprehensive design-build services from concept to completion
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
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer">
                    <feature.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/95 backdrop-blur-lg border-gray-800 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-white flex items-center">
                      <feature.icon className="w-8 h-8 mr-3" />
                      {feature.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {feature.expandedDescription}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}