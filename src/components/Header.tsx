import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Export Services", href: "/export-services" },
    { name: "Quality", href: "/quality-assurance" },
    { name: "Packaging", href: "/custom-packaging" },
    { name: "Logistics", href: "/logistics" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-heritage text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9953240031</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@makario.in</span>
              </div>
            </div>
            <div className="text-golden-light">
              Premium Quality Makhana - Direct from Bihar
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/98 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-golden/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png" 
                alt="Makari - The Pride of Bihar" 
                className="w-16 h-16 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-heritage">Makari</h1>
                <p className="text-sm text-nature">The Pride of Bihar</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-golden ${
                    isActive(item.href)
                      ? "text-golden"
                      : "text-heritage"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/products">View Products</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/bulk-order">Bulk Order</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-heritage"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-golden/20 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-golden ${
                    isActive(item.href)
                      ? "text-golden bg-accent"
                      : "text-heritage"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                    View Products
                  </Link>
                </Button>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/bulk-order" onClick={() => setIsMenuOpen(false)}>
                    Bulk Order
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;