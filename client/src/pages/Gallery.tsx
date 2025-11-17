import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
import img12 from "../../../attached_assets/B355FCE3-104E-4816-851C-1CE8F4E5FB42_1_105_c_1763417763348.jpeg";
import img13 from "../../../attached_assets/ABCDF4B2-53AD-4A36-8AFC-FCEBF01D182E_1_105_c_1763417763349.jpeg";
import img14 from "../../../attached_assets/528C869B-5EE4-4809-91CD-CF3FB09B35D2_1_105_c_1763417763350.jpeg";
import img15 from "../../../attached_assets/356D8FA3-160F-4AFD-B649-40C8DE4FA57B_1_105_c_1763417763350.jpeg";
import img16 from "../../../attached_assets/9D1F4C04-3F66-4298-8386-720C7E28245F_1_105_c_1763417763351.jpeg";
import img17 from "../../../attached_assets/6E9428BE-F235-4EC4-8319-577672376A39_1_105_c_1763417763354.jpeg";
import img18 from "../../../attached_assets/5A5081EF-22EB-487C-82CF-66F95E24CAF3_1_105_c_1763417763355.jpeg";
import img19 from "../../../attached_assets/1E494899-47CB-41F5-A877-5E61D65908BC_1_105_c_1763417763356.jpeg";
import img20 from "../../../attached_assets/41C32EFE-FB15-4811-B617-9DE9509CF3EF_1_105_c_1763417763356.jpeg";
import img21 from "../../../attached_assets/444FDB86-E344-429F-9400-26F747E60F5C_1_105_c_1763417763356.jpeg";
import img22 from "../../../attached_assets/55037250-4AE4-453A-AEF9-DCDF815067D2_1_105_c_1763417763357.jpeg";
import img23 from "../../../attached_assets/4778D898-F3BC-433E-AE37-06E88B70281D_1_105_c_1763417763357.jpeg";
import img24 from "../../../attached_assets/F79E323D-49EC-4203-A99B-FFE693AC5C27_1_105_c_1763417763358.jpeg";
import img25 from "../../../attached_assets/D1665BD5-2F8B-468B-9CC8-9D62946850BD_1_105_c_1763417763359.jpeg";
import img26 from "../../../attached_assets/DDC7722E-DEB4-4C5E-A387-92D7386E889B_1_105_c_1763417763359.jpeg";
import img27 from "../../../attached_assets/D38BE6E1-DE80-4D71-8335-0A38F8B8BE46_1_105_c_1763417763360.jpeg";
import img28 from "../../../attached_assets/CD8CF7DD-3539-4F82-8E11-6D0694E9F8C1_1_105_c_1763417763360.jpeg";
import img29 from "../../../attached_assets/C85B6CF0-574A-4117-AAC7-58C5593C0B55_1_105_c_1763417763361.jpeg";
import img30 from "../../../attached_assets/C4CF4D30-11FE-46B0-B237-81DBFD8F3B68_1_105_c_1763417763361.jpeg";
import img31 from "../../../attached_assets/BD6A601D-0B28-4605-B87A-CD4392B1D2AF_1_105_c_1763417763362.jpeg";
import img32 from "../../../attached_assets/Leesburg FC153B15-6993-4976-9DF1-C76C9FFF20AA_1763421722975.jpeg";
import img33 from "../../../attached_assets/DJI_0389_1763421722975.jpg";
import img34 from "../../../attached_assets/20240311_180732 (1)_1763421722975.jpg";
import img35 from "../../../attached_assets/20240416_164013 (1)_1763421722976.jpg";
import img36 from "../../../attached_assets/IMG-20240222-WA0004 (1)_1763421722976.jpg";
import img37 from "../../../attached_assets/20250820_134754 (1)_1763421722976.jpg";
import img38 from "../../../attached_assets/20241224_113735 (1)_1763421722976.jpg";
import img39 from "../../../attached_assets/20240311_180732_1763421722976.jpg";
import img40 from "../../../attached_assets/IMG-20240321-WA0062_1763421722977.jpg";
import img41 from "../../../attached_assets/IMG-20240321-WA0059_1763421722977.jpg";
import img42 from "../../../attached_assets/20240129_172045_1763421722977.jpg";
import img43 from "../../../attached_assets/20230801_125754_1763421722977.jpg";

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
  },
  {
    id: 11,
    url: img12,
    title: "Grand Dining Hall with Vaulted Ceilings",
    description: "Impressive dining space featuring exposed wood beams and stone accent wall"
  },
  {
    id: 12,
    url: img13,
    title: "Contemporary Lobby Entrance",
    description: "Modern entrance lobby with vertical wood slat design and circular mirror"
  },
  {
    id: 13,
    url: img14,
    title: "Executive Office Space",
    description: "Professional office area with exposed ceiling beams and modern finishes"
  },
  {
    id: 14,
    url: img15,
    title: "Welcoming Entrance Foyer",
    description: "Bright lobby space with contemporary lighting and outdoor views"
  },
  {
    id: 15,
    url: img16,
    title: "Community Lounge with Arched Details",
    description: "Elegant lounge featuring dramatic arched ceiling design and modern seating"
  },
  {
    id: 16,
    url: img17,
    title: "Gourmet Community Kitchen",
    description: "Spacious kitchen with island seating and high ceilings with decorative beams"
  },
  {
    id: 17,
    url: img18,
    title: "Social Gathering Space",
    description: "Open lounge area with architectural arches and comfortable seating"
  },
  {
    id: 18,
    url: img19,
    title: "Multi-Purpose Activity Room",
    description: "Versatile space with wooden dining table and artistic lighting fixtures"
  },
  {
    id: 19,
    url: img20,
    title: "Expansive Community Center",
    description: "Large gathering space with signature arched ceiling and abundant natural light"
  },
  {
    id: 20,
    url: img21,
    title: "Built-In Storage and Display",
    description: "Custom millwork with integrated shelving and contemporary design"
  },
  {
    id: 21,
    url: img22,
    title: "Premium Kitchen Island",
    description: "Stunning marble waterfall island with modern cabinetry"
  },
  {
    id: 22,
    url: img23,
    title: "Central Kitchen and Dining Hub",
    description: "Large open kitchen with extensive counter space and multiple seating areas"
  },
  {
    id: 23,
    url: img24,
    title: "Resident Bar and Lounge",
    description: "Upscale bar area with designer stools and decorative vases"
  },
  {
    id: 24,
    url: img25,
    title: "Main Community Living Room",
    description: "Spacious lounge with fireplace, modern furniture, and artistic center piece"
  },
  {
    id: 25,
    url: img26,
    title: "Modern Kitchenette Space",
    description: "Sleek kitchen workspace with glass partitions and contemporary fixtures"
  },
  {
    id: 26,
    url: img27,
    title: "Double-Height Kitchen Design",
    description: "Impressive two-story kitchen with shiplap accent wall and island seating"
  },
  {
    id: 27,
    url: img28,
    title: "Reception and Lounge Vista",
    description: "View of reception desk area with arched architectural elements"
  },
  {
    id: 28,
    url: img29,
    title: "Arched Corridor Seating",
    description: "Intimate seating nook with dramatic arched ceiling and modern furniture"
  },
  {
    id: 29,
    url: img30,
    title: "Fireplace Lounge Area",
    description: "Cozy gathering space with fireplace, high ceilings, and large windows"
  },
  {
    id: 30,
    url: img31,
    title: "Open Concept Community Space",
    description: "Bright multi-use area with dining tables and lounge seating"
  },
  {
    id: 31,
    url: img32,
    title: "Construction Site - Leesburg Project",
    description: "Active construction site showing materials delivery and equipment"
  },
  {
    id: 32,
    url: img33,
    title: "Aerial Foundation Construction View",
    description: "Drone view of foundation and utility infrastructure installation"
  },
  {
    id: 33,
    url: img34,
    title: "Premium Bathroom Tile Installation",
    description: "High-end tile work with modern mosaic flooring detail"
  },
  {
    id: 34,
    url: img35,
    title: "Custom Reception Desk",
    description: "Modern reception area with rustic wood accent wall and contemporary lighting"
  },
  {
    id: 35,
    url: img36,
    title: "Healthcare Facility Nursing Station",
    description: "Central nursing station with panoramic hallway view"
  },
  {
    id: 36,
    url: img37,
    title: "Patient Care Corridor",
    description: "Clean, modern hallway with comfortable seating and artwork"
  },
  {
    id: 37,
    url: img38,
    title: "Main Facility Corridor",
    description: "Wide hallway with elevator access and decorative wall rails"
  },
  {
    id: 38,
    url: img39,
    title: "Accessible Bathroom Design",
    description: "Contemporary bathroom featuring luxury tile and accessibility features"
  },
  {
    id: 39,
    url: img40,
    title: "Semi-Private Patient Room",
    description: "Comfortable two-bed patient room with modern furnishings and natural light"
  },
  {
    id: 40,
    url: img41,
    title: "Private Patient Suite",
    description: "Spacious single patient room with comfortable seating and accent wall"
  },
  {
    id: 41,
    url: img42,
    title: "Resident Living Corridor",
    description: "Bright hallway with skylight and modern flooring design"
  },
  {
    id: 42,
    url: img43,
    title: "Extended Care Facility Hallway",
    description: "Long corridor with safety rails and contemporary finishes"
  }
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
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

        {/* Grid Layout */}
        <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              onClick={() => openImage(index)}
              className="aspect-square overflow-hidden rounded-lg border-2 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            </motion.button>
          ))}
        </div>

        {/* Modal/Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeImage()}>
          <DialogContent className="max-w-[95vw] w-full max-h-[95vh] bg-black/95 border-gray-800 p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>
                {selectedIndex !== null ? galleryImages[selectedIndex].title : "Gallery Image"}
              </DialogTitle>
              <DialogDescription>
                {selectedIndex !== null ? galleryImages[selectedIndex].description : "View gallery image"}
              </DialogDescription>
            </VisuallyHidden>
            {selectedIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium">
                  {selectedIndex + 1} / {galleryImages.length}
                </div>

                {/* Main Image */}
                <div className="relative w-full h-[85vh] flex items-center justify-center px-20 py-16">
                  <img
                    src={galleryImages[selectedIndex].url}
                    alt={galleryImages[selectedIndex].title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Previous Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 z-50"
                  data-testid="button-prev-modal"
                >
                  <ChevronLeft className="w-10 h-10" />
                </Button>

                {/* Next Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 z-50"
                  data-testid="button-next-modal"
                >
                  <ChevronRight className="w-10 h-10" />
                </Button>

                {/* Image Title */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {galleryImages[selectedIndex].title}
                  </h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
