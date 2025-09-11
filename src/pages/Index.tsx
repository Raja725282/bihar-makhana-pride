import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Shield, Truck, Users, Sprout, Award, Leaf, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import biharFieldsImage from "@/assets/bihar-fields.jpg";
import globalExportImage from "@/assets/global-export.jpg";
import farmersWorkingImage from "@/assets/farmers-working.jpg";
import cultivationProcessImage from "@/assets/cultivation-process.jpg";
import biharAgricultureImage from "@/assets/bihar-agriculture.jpg";
import brandStoryImage from "@/assets/brand-story.jpg";

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

      {/* Farmers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={farmersWorkingImage}
                alt="Makhana Farmers Working in Bihar Fields"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-golden p-4 rounded-full shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-heritage">The Heart of Our Success</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Behind every premium makhana lies the dedication of Bihar's skilled farmers. 
                Working in the traditional wetlands, they continue centuries-old cultivation 
                practices passed down through generations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">5000+ Family Farmers Connected</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">Traditional Handpicked Methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">Fair Trade & Direct Support</span>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/farmers">Meet Our Farmers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultivation Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-heritage">Traditional Cultivation Process</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover the ancient art of makhana cultivation that has been perfected over centuries in Bihar's wetlands
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-heritage">Pond Preparation</h3>
                    <p className="text-muted-foreground">Sacred ponds are prepared with organic fertilizers and traditional methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-heritage">Seed Planting</h3>
                    <p className="text-muted-foreground">Lotus seeds are carefully planted in the muddy pond beds during monsoon</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-heritage">Natural Growth</h3>
                    <p className="text-muted-foreground">Plants grow naturally for 4-5 months with minimal intervention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-heritage">Handpicked Harvest</h3>
                    <p className="text-muted-foreground">Farmers dive to collect seeds by hand, ensuring premium quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={cultivationProcessImage}
                alt="Traditional Makhana Cultivation Process"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-heritage p-6 rounded-lg shadow-lg text-white">
                <div className="text-2xl font-bold">4-5</div>
                <div className="text-sm opacity-90">Months Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bihar Agriculture Section */}
      <section className="py-16 bg-gradient-earth text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bihar: The Agricultural Powerhouse</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Bihar's fertile Gangetic plains and abundant water resources create the perfect 
                ecosystem for makhana cultivation. The state's agricultural heritage spans millennia, 
                making it India's agricultural heartland.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">60%</div>
                  <div className="text-sm text-white/80">of India's Makhana</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">15,000</div>
                  <div className="text-sm text-white/80">Hectares Under Cultivation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">80%</div>
                  <div className="text-sm text-white/80">Rural Employment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden-light mb-1">₹500Cr</div>
                  <div className="text-sm text-white/80">Annual Revenue</div>
                </div>
              </div>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-heritage" asChild>
                <Link to="/agriculture">Explore Agriculture</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={biharAgricultureImage}
                alt="Bihar Agriculture Landscape"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-golden-light p-4 rounded-full shadow-lg">
                <Leaf className="w-8 h-8 text-heritage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={brandStoryImage}
                alt="Our Brand Story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-card p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-heritage">25+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-heritage">Our Brand Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Born from the vision to showcase Bihar's agricultural excellence to the world, 
                our brand represents the perfect blend of traditional farming wisdom and modern 
                quality standards. We are not just exporters; we are custodians of Bihar's rich heritage.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">ISO 22000 Certified Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">Direct Farmer Partnership Model</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-muted-foreground">Global Quality Standards</span>
                </div>
              </div>
              <Button variant="premium" size="lg" asChild>
                <Link to="/about">Discover Our Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-heritage">From Farm to Global Markets</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our comprehensive quality process ensures that every makhana meets international standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sprout,
                title: "Organic Cultivation",
                description: "Chemical-free farming in pristine wetlands"
              },
              {
                icon: Users,
                title: "Expert Harvesting",
                description: "Skilled farmers using traditional methods"
              },
              {
                icon: Shield,
                title: "Quality Processing",
                description: "Modern facilities with traditional care"
              },
              {
                icon: Globe,
                title: "Global Distribution",
                description: "Worldwide delivery maintaining freshness"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-heritage" />
                  </div>
                  <h3 className="font-semibold mb-3 text-heritage text-lg">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
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
