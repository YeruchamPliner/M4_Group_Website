import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <img 
            src="/new-logo.jpeg" 
            alt="M4 Development Group Logo" 
            className="h-28 w-auto"
          />
          <img 
            src="/secondary-logo.jpeg" 
            alt="Secondary Logo" 
            className="h-28 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <Link href="/consultation">
            <Button variant="default" className="bg-yellow-600 text-black hover:bg-yellow-500 text-lg px-6 py-2 font-semibold flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn(
      "text-lg font-medium transition-colors hover:text-primary",
      "text-gray-200"
    )}>
      {children}
    </Link>
  );
}