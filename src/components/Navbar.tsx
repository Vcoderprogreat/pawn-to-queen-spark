import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/summer-session", label: "Summer Session" },
    { to: "/coaches", label: "Coaches" },
    { to: "/partnerships", label: "Partnerships" },
    { to: "/get-started", label: "Get Started" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-maroon smooth-transition"
          >
            Pawn to Queen Chess Coaching
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={location.pathname === link.to ? "default" : "ghost"}
                  className="smooth-transition hover:bg-maroon-light hover:text-maroon"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === link.to ? "default" : "ghost"}
                    className="w-full justify-start smooth-transition hover:bg-maroon-light hover:text-maroon"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;