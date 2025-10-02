import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, Heart, User } from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Shop", icon: ShoppingCart, to: "/shop" },
  { label: "Wishlist", icon: Heart, to: "/wishlist" },
  { label: "Profile", icon: User, to: "/profile" },
];

const MobileBottomMenu: React.FC = () => {
  const location = useLocation();
  const [showLabels, setShowLabels] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowLabels(true);
      setTimeout(() => setShowLabels(false), 2000); // Hide after 2s
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 flex md:hidden">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const active = location.pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex-1 flex flex-col items-center justify-center py-2 ${active ? "text-golden" : "text-gray-500"}`}
            onTouchStart={() => setShowLabels(true)}
            onTouchEnd={() => setTimeout(() => setShowLabels(false), 1500)}
          >
            <Icon className="w-6 h-6 mb-1" />
            {showLabels && (
              <span className="text-xs font-medium transition-opacity duration-300 opacity-100">{item.label}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomMenu;
