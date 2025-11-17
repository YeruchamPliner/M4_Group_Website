import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "../assets/20230919_115117_1761449206238.jpg";
import img2 from "../assets/IMG-20240801-WA0036_1761449206239.jpg";
import img3 from "../assets/IMG-20241209-WA0118_1761449206240.jpg";
import img4 from "../assets/IMG-20240801-WA0016_1761449206240.jpg";
import img5 from "../assets/IMG-20240801-WA0020_1761449206241.jpg";
import img7 from "../assets/IMG-20240321-WA0057_1761449206243.jpg";
import img8 from "../assets/20240730_112919_1761449206244.jpg";
import img9 from "../assets/20240416_164013_1761449206245.jpg";
import img10 from "../assets/20240730_112659_1761449206246.jpg";
import img11 from "../assets/20240730_112608_1763384881743.jpg";

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
    url: img7,
    title: "Comfortable Resident Room",
    description: "Welcoming resident room designed for comfort and care"
  },
  {
    id: 7,
    url: img8,
    title: "Spacious Patient Accommodation",
    description: "Well-appointed patient room with ample space and natural light"
  },
  {
    id: 8,
    url: img9,
    title: "Professional Reception Area",
    description: "Welcoming reception area with modern design and functionality"
  },
  {
    id: 9,
    url: img10,
    title: "Medical Workspace and Nursing Station",
    description: "Efficient nursing station with comprehensive workspace"
  },
  {
    id: 10,
    url: img11,
    title: "Modern Nursing Station and Reception",
    description: "State-of-the-art nursing station with elegant design and modern fixtures"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (thumbnailContainerRef.current && thumbnailRefs.current[currentIndex]) {
      const container = thumbnailContainerRef.current;
      const thumbnail = thumbnailRefs.current[currentIndex];
      
      if (thumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.offsetWidth;
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

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
            <div 
              ref={thumbnailContainerRef}
              className="mt-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
              style={{ scrollbarWidth: 'thin' }}
            >
              <div className="flex gap-3 pb-4 min-w-min px-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    ref={(el) => thumbnailRefs.current[index] = el}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg border-3 transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-yellow-500 opacity-100 scale-110 ring-2 ring-yellow-500 ring-offset-2 ring-offset-black'
                        : 'border-gray-700 opacity-60 hover:opacity-90 hover:border-gray-500 hover:scale-105'
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
    </div>
  );
}
