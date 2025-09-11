import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-heritage">Get In Touch</h1>
          <p className="text-muted-foreground text-xl mb-8 max-w-3xl mx-auto">
            Ready to bring Bihar's finest makhana to your market? Let's discuss your requirements 
            and create a partnership that benefits both of us.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-heritage">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Your country" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Bulk Order Inquiry</option>
                      <option>Export Partnership</option>
                      <option>Product Information</option>
                      <option>Quality Certification</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, quantity needed, and any specific questions..."
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-heritage" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heritage">Head Office</h3>
                      <p className="text-muted-foreground">
                        Mithila Agricultural Complex<br />
                        Darbhanga, Bihar, India - 846004
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center">
                      <Phone className="w-6 h-6 text-heritage" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heritage">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Sales: +91 98765 43210<br />
                        Export: +91 98765 43211<br />
                        Support: +91 98765 43212
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center">
                      <Mail className="w-6 h-6 text-heritage" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heritage">Email Addresses</h3>
                      <p className="text-muted-foreground">
                        General: info@makari.com<br />
                        Sales: sales@makari.com<br />
                        Export: export@makari.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center">
                      <Clock className="w-6 h-6 text-heritage" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heritage">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM<br />
                        (Indian Standard Time)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-heritage" />
              </div>
              <div className="text-3xl font-bold text-heritage mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-heritage" />
              </div>
              <div className="text-3xl font-bold text-heritage mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-card mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-heritage" />
              </div>
              <div className="text-3xl font-bold text-heritage mb-2">24hrs</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;