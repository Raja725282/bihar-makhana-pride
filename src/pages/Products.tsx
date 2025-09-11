import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Package, Award, Truck, Globe, Shield } from "lucide-react";
import globalExportImage from "@/assets/global-export.jpg";
import { useState } from "react";

const Products = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<"quote" | "contact" | "bulk">("quote");

  const handleQuoteRequest = () => {
    setFormType("quote");
    setShowContactForm(true);
  };

  const handleCatalogRequest = () => {
    setFormType("quote");
    setShowContactForm(true);
  };

  const productCategories = [
    {
      title: "Premium Grade A",
      description: "Largest size, perfect for snacking and gifting",
      image: "/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png",
      features: ["20-25mm size", "Low breakage", "Premium packaging", "Export quality"],
      price: "Contact for pricing"
    },
    {
      title: "Grade B Commercial",
      description: "Standard size for food processing and bulk orders",
      image: "/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png",
      features: ["15-20mm size", "Food grade", "Bulk packaging", "Competitive pricing"],
      price: "Contact for pricing"
    },
    {
      title: "Processing Grade",
      description: "Perfect for food manufacturing and flavoring",
      image: "/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png",
      features: ["Mixed sizes", "Industrial use", "Cost effective", "High volume"],
      price: "Contact for pricing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Our Premium Products</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover our range of premium makhana products, each grade carefully selected 
              and processed to meet specific market requirements worldwide.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-heritage" onClick={handleCatalogRequest}>
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-card flex items-center justify-center">
                    <Package className="w-10 h-10 text-heritage" />
                  </div>
                  <CardTitle className="text-center text-heritage">{product.title}</CardTitle>
                  <p className="text-center text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-heritage mb-4">
                        {product.price}
                      </div>
                      <Button variant="hero" className="w-full">
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-heritage">Why Choose Our Products?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every batch of our makhana undergoes rigorous quality checks to ensure 
              you receive only the finest products from Bihar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Hand-selected for size, color, and texture"
              },
              {
                icon: Shield,
                title: "Quality Certified",
                description: "ISO 22000 and HACCP certified facilities"
              },
              {
                icon: Globe,
                title: "Export Ready",
                description: "Meets international quality standards"
              },
              {
                icon: Truck,
                title: "Fresh Delivery",
                description: "Direct from source to your doorstep"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-heritage" />
                  </div>
                  <h3 className="font-semibold mb-2 text-heritage">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-16 text-heritage"
        style={{
          backgroundImage: `url(${globalExportImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-heritage">Ready to Place Your Order?</h2>
          <p className="text-heritage/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our sales team to discuss your requirements and 
            receive a customized quote for your bulk order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-heritage text-heritage hover:bg-heritage hover:text-white" onClick={handleCatalogRequest}>
              Download Catalog
            </Button>
            <Button variant="hero" size="lg" onClick={handleQuoteRequest}>
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <ContactForm 
          title={formType === "quote" ? "Request Quote" : "Download Catalog"} 
          formType={formType}
          isPopup={true}
          onClose={() => setShowContactForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Products;