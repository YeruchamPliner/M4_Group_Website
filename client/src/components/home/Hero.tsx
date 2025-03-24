import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import GridPattern from "../ui/patterns/GridPattern";
import { useState, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?auto=format&fit=crop&q=80",
    alt: "Healthcare Facility 1",
    title: "Healthcare"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    alt: "Healthcare Facility 2",
    title: "Healthcare"
  },
  {
    url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80",
    alt: "Healthcare Facility 3",
    title: "Healthcare"
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    alt: "Commercial Building",
    title: "Commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    alt: "Multi-Family Housing",
    title: "Multi-Family"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
            <img
              src={slides[currentIndex].url}
              alt={slides[currentIndex].alt}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <GridPattern className="absolute inset-0 z-10 opacity-40" />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gray-800 text-gray-200 rounded-full"
          >
            Design • Development • Construction
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Building Excellence, Delivering Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10"
          >
            M4 Development Group provides comprehensive design-build solutions for Healthcare, Commercial and Multi-Family projects. From concept to completion, we transform your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}