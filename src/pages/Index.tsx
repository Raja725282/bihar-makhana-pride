import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import biharFieldsImage from "@/assets/bihar-fields.jpg";
import globalExportImage from "@/assets/global-export.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Pure & Natural",
      description: "100% organic makhana grown in the pristine wetlands of Bihar"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Traditional methods ensuring the highest quality standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 50+ countries across the world"
    },
    {
      icon: Truck,
      title: "Bulk Orders",
      description: "Competitive pricing for wholesale and bulk purchases"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-heritage">Why Choose Bihar Makhana?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the exceptional quality that makes our makhana the preferred choice worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
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

      {/* Bihar Heritage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-heritage">The Pride of Bihar</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                For generations, Bihar has been the heartland of makhana cultivation. Our fertile wetlands 
                and traditional farming techniques have made us the world's largest producer of this 
                superfood, accounting for over 85% of global production.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From the sacred ponds of Mithila to international markets, our makhana carries 
                the essence of Bihar's agricultural heritage and commitment to quality.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn About Our Heritage</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={biharFieldsImage}
                alt="Bihar Makhana Fields"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-golden-light p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-heritage">85%</div>
                <div className="text-sm text-muted-foreground">Global Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 bg-gradient-earth text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={globalExportImage}
                alt="Global Export"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">From Bihar to the World</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Our premium makhana reaches tables across North America, Europe, Australia, 
                and Asia. We've built a global supply chain that maintains freshness and 
                quality while connecting Bihar's farmers to international markets.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">50+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">1000+</div>
                  <div className="text-sm text-white/80">Tons Annually</div>
                </div>
              </div>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-heritage" asChild>
                <Link to="/global">View Global Presence</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-heritage">Ready to Experience Bihar's Finest?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for retail quantities or bulk orders, 
            we're here to serve you with the finest quality makhana from Bihar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">View Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/bulk-order">Place Bulk Order</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
