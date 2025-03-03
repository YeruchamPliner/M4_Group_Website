import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Hammer, Users, Phone } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-white">
              M4<span className="text-primary">Development</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/about" icon={<Users className="w-4 h-4" />}>
            About Us
          </NavLink>
          <NavLink href="/services" icon={<Hammer className="w-4 h-4" />}>
            Services
          </NavLink>
          <Button asChild variant="secondary" className="flex items-center space-x-2">
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <a className={`flex items-center space-x-2 cursor-pointer transition-colors ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}>
        {icon}
        <span>{children}</span>
      </a>
    </Link>
  );
}