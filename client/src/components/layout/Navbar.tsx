import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMobile from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import Logo from "./rlLogo.jpg";
interface NavbarProps {
  onOpenSignUpModal: () => void;
}

export default function Navbar({ onOpenSignUpModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed w-full bg-white z-50 transition-all duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src={Logo}
                alt="Rankerslab Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="font-bold text-xl text-primary">Rankerslab</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>

              <Button
                onClick={onOpenSignUpModal}
                className="ml-4 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-full"
              >
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile Navigation Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="animate-in fade-in-50 duration-200 px-4 py-3 space-y-2 bg-white border-t">
          <Link
            href="/about"
            className="block py-2 text-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>

          <Link
            href="/blog"
            className="block py-2 text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>

          <Button
            onClick={() => {
              onOpenSignUpModal();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-3 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-full"
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
}
