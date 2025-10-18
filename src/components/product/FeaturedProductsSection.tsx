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
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Mobile: Show 4 products at a time (2x2 grid), total 8 products in 2 slides
  const productsPerGroup = 4;
  const maxIndex = 1; // Fixed to 2 slides for 8 products

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-wide">{title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our premium collection of Bihar makhana products. Fresh, organic, and healthy fox nuts directly from Bihar's finest cultivation areas.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop View - Grid Layout */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {products.slice(0, 10).map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Tablet View - 3 products in a row */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-3 gap-4">
              {products.slice(0, 10).map((product) => (
                <FeaturedProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Mobile View - 2 Row Carousel */}
          <div className="block md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Show all 10 products in 3 slides */}
                {Array.from({ length: 3 }).map((_, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-2 gap-3">
                      {products.slice(groupIndex * 4, (groupIndex + 1) * 4).slice(0, 10).map((product) => (
                        <div key={product.id} className="mb-3">
                          <FeaturedProductCard product={product} small />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 shadow-lg border-0 hover:bg-white"
              onClick={handlePrevious}
              disabled={currentIndex === 0 || isScrolling}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 shadow-lg border-0 hover:bg-white"
              onClick={handleNext}
              disabled={currentIndex === Math.ceil(products.length / 4) - 1 || isScrolling}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-4 gap-1.5">
              {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${currentIndex === index ? 'bg-gray-900 w-4' : 'bg-gray-300'}`}
                  onClick={() => !isScrolling && setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            <Link to="/shop" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}