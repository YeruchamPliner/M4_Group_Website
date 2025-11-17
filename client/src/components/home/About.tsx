
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Building2, CheckCircle } from "lucide-react";
import aboutBg from "../../assets/DJI_0426_1763385527166.jpg";

const stats = [
  {
    icon: Users,
    number: "25+",
    label: "Years Experience"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Client Satisfaction"
  }
];

const highlights = [
  "Specialized in Nursing Home, ALF and Multi-Family construction",
  "End-to-End Design-Build solutions",
  "Full Service Nationwide Construction & Management Firm",
  "Proven track record in healthcare facility development"
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/40" /> {/* Overlay */}
        <img
          src={aboutBg}
          alt="Aerial View of Construction Site Foundation"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About M4 Development Group
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over 25 years of combined experience in the construction industry, M4 Development Group has established itself as a premier design-build firm specializing in healthcare facilities, commercial properties, and multi-family residential projects.
            </p>
            
            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700"
                >
                  <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* States of Operation Pictogram - positioned below the other two */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <svg className="w-full h-full text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                Nationwide
              </div>
              <div className="text-gray-400 text-sm mb-3">
                Currently operating in:
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {["NY", "NJ", "IL", "AL", "MS", "FL", "LA", "IA", "KY"].map((state, index) => (
                  <span key={state} className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">
                    {state}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
