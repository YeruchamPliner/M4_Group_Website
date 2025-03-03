import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">About M4 Development Group</h1>
          <p className="text-gray-400 text-lg mb-6">
            M4 Development Group is a leading design-build construction company committed to delivering exceptional results. 
            We specialize in transforming our clients' visions into reality through comprehensive design and construction services.
          </p>
          <p className="text-gray-400 text-lg">
            Our integrated approach to project delivery ensures seamless coordination between design and construction phases, 
            resulting in efficient project execution and superior quality outcomes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
