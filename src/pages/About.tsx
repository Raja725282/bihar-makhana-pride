import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import biharFieldsImage from "@/assets/bihar-fields.jpg";

const About = () => {
  const milestones = [
    {
      year: "1990s",
      title: "Heritage Begins",
      description: "Started traditional makhana cultivation in Bihar's wetlands"
    },
    {
      year: "2000s",
      title: "Quality Focus",
      description: "Implemented organic farming and quality control processes"
    },
    {
      year: "2010s",
      title: "Global Expansion",
      description: "Began exports to international markets"
    },
    {
      year: "2020s",
      title: "Market Leader",
      description: "Became one of Bihar's leading makhana exporters"
    }
  ];

  const stats = [
    {
      icon: MapPin,
      number: "5000+",
      label: "Acres of Cultivation"
    },
    {
      icon: Users,
      number: "500+",
      label: "Farming Families"
    },
    {
      icon: Trophy,
      number: "50+",
      label: "Export Countries"
    },
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Excellence"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-heritage">The Pride of Bihar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the ancient wetlands of Bihar comes a story of tradition, quality, and global success. 
            Discover how we've transformed local farming into a worldwide phenomenon.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-heritage">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Bihar has been the cradle of makhana cultivation for over a millennium. The state's unique 
                agro-climatic conditions, with its seasonal floods and fertile alluvial soil, create the 
                perfect environment for growing the world's finest makhana.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our journey began with a simple mission: to bring the authentic taste and nutritional 
                benefits of Bihar's makhana to the world while supporting local farming communities 
                and preserving traditional cultivation methods.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Today, Bihar produces over 85% of the world's makhana, making it not just a regional 
                specialty but a global superfood that represents the agricultural prowess of our state.
              </p>
            </div>
            <div className="relative">
              <img
                src={biharFieldsImage}
                alt="Bihar Makhana Fields"
                className="rounded-lg shadow-xl"
              />
      </div>

      <Footer />
    </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-heritage">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase our commitment to excellence and community development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-heritage" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-heritage">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our evolution from local farmers to global exporters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="font-semibold mb-3 text-heritage">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-earth text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To be the global ambassador of Bihar's makhana, promoting sustainable agriculture, 
                supporting farming communities, and delivering premium quality products that showcase 
                the rich agricultural heritage of our state to the world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To establish Bihar as the undisputed global hub for premium makhana production, 
                while fostering innovation in traditional farming practices and creating sustainable 
                livelihoods for thousands of farming families across the state.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;