
import { motion } from "framer-motion";
import { Award, Users, Building2, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Building2,
    number: "200+",
    label: "Projects Completed"
  },
  {
    icon: Users,
    number: "25+",
    label: "Years Experience"
  },
  {
    icon: Award,
    number: "50+",
    label: "Healthcare Facilities"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Client Satisfaction"
  }
];

const highlights = [
  "Specialized in nursing and rehabilitation home construction",
  "End-to-end design-build solutions",
  "Licensed and bonded across multiple states",
  "Proven track record in healthcare facility development"
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/80" /> {/* Overlay */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="M4 Development Group Team"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About M4 Development Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building excellence through innovation, expertise, communication, and unwavering commitment to quality
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over 25 years of combined experience in the construction industry, M4 Development Group has established itself as a premier design-build firm specializing in healthcare facilities, commercial properties, and multi-family residential projects.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our comprehensive approach integrates Architectural design, Engineering, and Construction Services under one roof, ensuring seamless project delivery from initial concept through final completion. We pride ourselves on building long-term relationships with our clients through exceptional quality, attention to detail, value engineering and unwavering commitment to excellence.
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
            className="grid grid-cols-2 gap-8"
          >
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
          </motion.div>
        </div>

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To deliver exceptional design-build solutions that exceed our clients' expectations while maintaining the highest standards of safety, quality, and professionalism. We are committed to creating spaces that enhance communities and improve lives, particularly in the healthcare sector where our expertise makes a meaningful difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
