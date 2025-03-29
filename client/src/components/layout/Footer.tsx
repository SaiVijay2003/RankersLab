import { Link } from "wouter";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Rankerslab</h3>
            <p className="text-gray-400 mb-4">
              Empowering students with personalized learning solutions for academic excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Study Material</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Dubai</li>
              <li className="text-gray-400">Hyderabad</li>
              <li className="text-gray-400">Mumbai</li>
              <li className="text-gray-400">Bengaluru</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <Mail className="h-4 w-4 mt-1 mr-2 text-primary" />
                <span>info@rankerslab.com</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <Phone className="h-4 w-4 mt-1 mr-2 text-primary" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-primary" />
                <span>Headquarters: Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rankerslab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
