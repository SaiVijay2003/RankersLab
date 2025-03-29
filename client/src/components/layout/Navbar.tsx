import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import useMobile from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

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

  const courses = [
    { title: "Mathematics", href: "#" },
    { title: "Physics", href: "#" },
    { title: "Chemistry", href: "#" },
    { title: "Biology", href: "#" }
  ];

  return (
    <nav className={cn(
      "fixed w-full bg-white z-50 transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-primary">Rankerslab</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                      Courses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {courses.map((course) => (
                          <li key={course.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={course.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {course.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Study Material
              </Link>
              
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
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
          <div className="relative">
            <Button 
              variant="ghost"
              className="w-full justify-between text-left font-medium" 
              onClick={() => document.getElementById("courses-dropdown")?.classList.toggle("hidden")}
            >
              Courses
              <span>▼</span>
            </Button>
            <div id="courses-dropdown" className="hidden pl-4 py-2 space-y-1">
              {courses.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="block py-1 text-foreground hover:text-primary transition-colors"
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="#" className="block py-2 text-foreground hover:text-primary transition-colors">
            Study Material
          </Link>
          
          <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          
          <Link href="#" className="block py-2 text-foreground hover:text-primary transition-colors">
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
