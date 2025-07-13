import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GridPattern from "../ui/patterns/GridPattern";
import { useState, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern American Nursing Home Facility",
    title: "Nursing Homes"
  },
  {
    url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1920&q=80",
    alt: "American Rehabilitation Center",
    title: "Rehabilitation Centers"
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80",
    alt: "Senior Care Facility",
    title: "Senior Care"
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern American Commercial Building",
    title: "Commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern American Multi-Family Housing",
    title: "Multi-Family"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 h-full"
            >
              <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
              <img
                src={slide.url}
                alt={slide.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <GridPattern className="absolute inset-0 z-10 opacity-40" />

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 mb-6 text-lg md:text-xl font-medium bg-gray-800 text-gray-200 rounded-full"
            >
              Design • Development • Construction
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Building Excellence, Delivering Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12"
            >
              M4 Development Group provides comprehensive design-build solutions for Healthcare, Commercial and Multi-Family projects. From concept to completion, we transform your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <Link href="/consultation">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}