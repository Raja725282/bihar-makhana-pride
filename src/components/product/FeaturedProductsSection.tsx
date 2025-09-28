import React, { useState } from 'react';
import { Product } from '../../data/products';
import { FeaturedProductCard } from './FeaturedProductCard';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedProductsSectionProps {
  products: Product[];
  title?: string;
  className?: string;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ 
  products, 
  title = "SEASON'S TOP PICKS",
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Show 5 products at a time on desktop
  const productsPerPage = 5;
  const maxIndex = Math.max(0, products.length - productsPerPage);

  const handlePrevious = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsScrolling(false), 500);
  };

  const handleNext = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsScrolling(false), 500);
  };

  if (!products || products.length === 0) {
    return (
      <section className={`py-16 bg-gray-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No featured products available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-wide">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our premium collection of Bihar makhana products. Fresh, organic, and healthy fox nuts 
            directly from Bihar's finest cultivation areas.
          </p>
        </div>

        {/* Products Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Only on Desktop */}
          {products.length > productsPerPage && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-0 hover:bg-gray-50 disabled:opacity-50 hidden lg:flex"
                onClick={handlePrevious}
                disabled={currentIndex === 0 || isScrolling}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border-0 hover:bg-gray-50 disabled:opacity-50 hidden lg:flex"
                onClick={handleNext}
                disabled={currentIndex === maxIndex || isScrolling}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Products Grid */}
          <div className="overflow-hidden rounded-lg">
            {/* Desktop View - 5 products in a row */}
            <div className="hidden lg:block">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 20}%)`,
                  width: `${(products.length / 5) * 100}%`
                }}
              >
                {products.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="px-3 flex-shrink-0"
                    style={{ width: `${100 / products.length}%` }}
                  >
                    <FeaturedProductCard 
                      product={product}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet View - 3 products in a row */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-3 gap-4">
                {products.slice(0, 6).map((product) => (
                  <FeaturedProductCard 
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>

            {/* Mobile View - 2 products in a row */}
            <div className="block md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {products.slice(0, 4).map((product) => (
                  <FeaturedProductCard 
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator - Only on Desktop */}
          {products.length > productsPerPage && (
            <div className="hidden lg:flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => !isScrolling && setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <Link to="/shop" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};