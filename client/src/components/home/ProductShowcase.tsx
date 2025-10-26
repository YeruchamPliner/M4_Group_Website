import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const portfolioImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80",
    alt: "Nursing Home Facility"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?auto=format&fit=crop&w=1920&q=80",
    alt: "Rehabilitation Center"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1566027310447-8d5ee9c2d421?auto=format&fit=crop&w=1920&q=80",
    alt: "Senior Living Community"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80",
    alt: "Medical Office Building"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1920&q=80",
    alt: "Memory Care Facility"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80",
    alt: "Wellness Center"
  }
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % portfolioImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    setCurrentIndex((current) =>
      current === 0 ? portfolioImages.length - 1 : current - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((current) => (current + 1) % portfolioImages.length);
  };

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75" />
        <img
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1920&q=80"
          alt="Healthcare Facility Portfolio"
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
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects showcasing excellence in healthcare facility design and construction
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-lg border-gray-700 hover:bg-gray-800/90 text-white h-12 w-12 rounded-full shadow-lg"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-lg border-gray-700 hover:bg-gray-800/90 text-white h-12 w-12 rounded-full shadow-lg"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}