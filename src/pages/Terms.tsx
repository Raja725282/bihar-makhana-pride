import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-heritage">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. These terms apply to all visitors, users, and others 
                who access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Product Orders and Pricing</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All prices are subject to change without notice</li>
                <li>Minimum order quantities apply to bulk purchases</li>
                <li>Payment terms are net 30 days for established customers</li>
                <li>New customers require advance payment or letter of credit</li>
                <li>Delivery times are estimates and may vary based on location and quantity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Quality Assurance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We guarantee the quality of our makhana products according to agreed specifications. 
                Any quality issues must be reported within 7 days of delivery. We reserve the right 
                to inspect and test all products before shipment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Shipping and Delivery</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Shipping costs are separate from product prices</li>
                <li>Risk of loss passes to buyer upon delivery to carrier</li>
                <li>International shipments subject to customs and import duties</li>
                <li>Delivery delays due to customs or weather are not our responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our liability for any claim related to products or services shall not exceed the 
                purchase price paid for the products. We are not liable for indirect, incidental, 
                or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of India. Any disputes shall be resolved 
                in the courts of Bihar, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-heritage">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact us at legal@makario.in or 
                call +91 9953240031.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;