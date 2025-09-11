import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-heritage text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png" 
                alt="Makari - The Pride of Bihar" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-golden">Makari</h3>
                <p className="text-sm text-nature">The Pride of Bihar</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bihar's finest makhana, cultivated with traditional wisdom and delivered 
              with modern excellence to tables worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-golden transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-golden transition-colors">Our Products</Link></li>
              <li><Link to="/agriculture" className="text-gray-300 hover:text-golden transition-colors">Agriculture</Link></li>
              <li><Link to="/global" className="text-gray-300 hover:text-golden transition-colors">Global Reach</Link></li>
              <li><Link to="/farmers" className="text-gray-300 hover:text-golden transition-colors">Our Farmers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-300 hover:text-golden transition-colors">Bulk Orders</Link></li>
              <li><Link to="/export-services" className="text-gray-300 hover:text-golden transition-colors">Export Services</Link></li>
              <li><Link to="/quality-assurance" className="text-gray-300 hover:text-golden transition-colors">Quality Assurance</Link></li>
              <li><Link to="/custom-packaging" className="text-gray-300 hover:text-golden transition-colors">Custom Packaging</Link></li>
              <li><Link to="/logistics" className="text-gray-300 hover:text-golden transition-colors">Logistics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-golden flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mithila, Darbhanga<br />
                  Bihar, India - 846004
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-golden flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9953240031</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-golden flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@makario.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-golden flex-shrink-0" />
                <span className="text-gray-300 text-sm">Export Worldwide</span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="mt-4" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-golden/20 bg-heritage/80">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-golden mb-1">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get latest updates on Bihar makhana and our products</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-white/10 border border-golden/30 text-white placeholder-gray-400 focus:outline-none focus:border-golden"
              />
              <Button variant="hero" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-golden/20 bg-heritage">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>© 2024 Makari - Made with</span>
              <Heart className="w-4 h-4 text-golden fill-golden" />
              <span>in Bihar, India</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-golden transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-golden transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="text-gray-300 hover:text-golden transition-colors">Shipping Policy</Link>
              <Link to="/refund" className="text-gray-300 hover:text-golden transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;