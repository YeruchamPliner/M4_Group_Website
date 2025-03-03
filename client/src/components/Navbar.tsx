import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">BuildCraft</span>
          </a>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <Button asChild variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        "text-muted-foreground"
      )}>
        {children}
      </a>
    </Link>
  );
}
