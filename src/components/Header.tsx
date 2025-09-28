import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, Mail, ShoppingCart, User, Heart, LogOut, Package } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { useAuth } from "../contexts/AuthContext";
import { AuthModal } from "./auth/AuthModal";
import CartSidebar from "./CartSidebar";
import WishlistSidebar from "./WishlistSidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();
  
  // Safe hooks with fallbacks
  let getTotalItems, wishlistItems, user, logout, isCartOpen, openCart, closeCart, isWishlistOpen, openWishlist, closeWishlist;
  
  try {
    const cart = useCart();
    getTotalItems = cart.getTotalItems;
    isCartOpen = cart.isCartOpen;
    openCart = cart.openCart;
    closeCart = cart.closeCart;
  } catch {
    getTotalItems = () => 0;
    isCartOpen = false;
    openCart = () => {};
    closeCart = () => {};
  }
  
  try {
    const wishlist = useWishlist();
    wishlistItems = wishlist.items;
    isWishlistOpen = wishlist.isWishlistOpen;
    openWishlist = wishlist.openWishlist;
    closeWishlist = wishlist.closeWishlist;
  } catch {
    wishlistItems = [];
    isWishlistOpen = false;
    openWishlist = () => {};
    closeWishlist = () => {};
  }
  
  try {
    const auth = useAuth();
    user = auth.user;
    logout = auth.logout;
  } catch {
    user = null;
    logout = () => {};
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { 
      name: "Delivery Areas", 
      href: "#",
      isDropdown: true,
      subItems: [
        { name: "Mumbai", href: "/mumbai" },
        { name: "Gujarat", href: "/gujarat" }, 
        { name: "South India", href: "/south-india" }
      ]
    },
    { name: "Export Services", href: "/export-services" },
    { name: "Quality", href: "/quality-assurance" },
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
                <h1 className="text-2xl font-bold text-heritage">Makario</h1>
                <p className="text-sm text-nature">The Pride of Bihar</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.isDropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-sm font-medium text-heritage hover:text-golden"
                      >
                        {item.name}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.subItems?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.href} className="cursor-pointer">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
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
                )
              ))}
            </nav>

            {/* E-commerce Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Wishlist */}
              <Button variant="ghost" size="sm" onClick={openWishlist} className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" onClick={openCart} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>

              {/* User Menu */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="h-5 w-5 mr-2" />
                      {user.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/orders">
                        <Package className="h-4 w-4 mr-2" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/wishlist">
                        <Heart className="h-4 w-4 mr-2" />
                        Wishlist
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setShowAuthModal(true)}>
                  Login
                </Button>
              )}
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
                item.isDropdown ? (
                  <div key={item.name} className="px-3 py-2">
                    <div className="font-medium text-heritage mb-2">{item.name}</div>
                    <div className="pl-4 space-y-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-golden"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )
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

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialView="login"
      />

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Wishlist Sidebar */}
      <WishlistSidebar />
    </>
  );
};

export default Header;