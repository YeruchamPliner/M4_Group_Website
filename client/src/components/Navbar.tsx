import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-20 md:h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 md:space-x-4">
          <img 
            src="/new-logo.jpeg" 
            alt="M4 Development Group Logo" 
            className="h-16 md:h-28 w-auto"
          />
          <img 
            src="/secondary-logo.jpeg" 
            alt="Secondary Logo" 
            className="h-8 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <Link href="/consultation">
            <Button variant="default" className="bg-yellow-600 text-black hover:bg-yellow-500 text-lg px-6 py-2 font-semibold flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 border-gray-800 w-[280px]">
            <div className="flex flex-col space-y-6 mt-8">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
              <Link href="/consultation" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="bg-yellow-600 text-black hover:bg-yellow-500 w-full text-lg px-6 py-3 font-semibold flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
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

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={cn(
      "text-xl font-medium transition-colors hover:text-primary py-2",
      "text-gray-200"
    )}>
      {children}
    </Link>
  );
}