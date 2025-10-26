import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "../assets/20230919_115117_1761449206238.jpg";
import img2 from "../assets/IMG-20240801-WA0036_1761449206239.jpg";
import img3 from "../assets/IMG-20241209-WA0118_1761449206240.jpg";
import img4 from "../assets/IMG-20240801-WA0016_1761449206240.jpg";
import img5 from "../assets/IMG-20240801-WA0020_1761449206241.jpg";
import img6 from "../assets/IMG_6409_1761449206242.webp";
import img7 from "../assets/IMG-20240321-WA0057_1761449206243.jpg";
import img8 from "../assets/20240730_112919_1761449206244.jpg";
import img9 from "../assets/20240416_164013_1761449206245.jpg";
import img10 from "../assets/20240730_112659_1761449206246.jpg";

const galleryImages = [
  {
    id: 1,
    url: img1,
    title: "Modern Dining and Community Area",
    description: "Spacious dining area featuring contemporary furniture and natural lighting"
  },
  {
    id: 2,
    url: img2,
    title: "Rehabilitation and Therapy Room",
    description: "State-of-the-art rehabilitation facility with specialized equipment"
  },
  {
    id: 3,
    url: img3,
    title: "Contemporary Dining Space",
    description: "Elegant dining room designed for comfort and community"
  },
  {
    id: 4,
    url: img4,
    title: "Elegant Dining Room Design",
    description: "Comfortable dining space with stylish furnishings"
  },
  {
    id: 5,
    url: img5,
    title: "Accessible Bathroom Facilities",
    description: "Modern, accessible bathroom with safety features and elegant design"
  },
  {
    id: 6,
    url: img6,
    title: "Modern Patient Room",
    description: "Comfortable patient accommodation with modern amenities"
  },
  {
    id: 7,
    url: img7,
    title: "Comfortable Resident Room",
    description: "Welcoming resident room designed for comfort and care"
  },
  {
    id: 8,
    url: img8,
    title: "Spacious Patient Accommodation",
    description: "Well-appointed patient room with ample space and natural light"
  },
  {
    id: 9,
    url: img9,
    title: "Professional Reception Area",
    description: "Welcoming reception area with modern design and functionality"
  },
  {
    id: 10,
    url: img10,
    title: "Medical Workspace and Nursing Station",
    description: "Efficient nursing station with comprehensive workspace"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen pt-32 bg-black">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed healthcare facilities showcasing quality craftsmanship and thoughtful design
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-900">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12"
                data-testid="button-prev-image"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12"
                data-testid="button-next-image"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-gray-300">
                  {galleryImages[currentIndex].description}
                </p>
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 grid grid-cols-5 md:grid-cols-10 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-yellow-500 opacity-100 scale-105'
                      : 'border-gray-700 opacity-50 hover:opacity-75 hover:border-gray-500'
                  }`}
                  data-testid={`thumbnail-${index}`}
                >
                  <img
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
