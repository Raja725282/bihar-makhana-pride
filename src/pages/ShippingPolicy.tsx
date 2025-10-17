import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ShippingPolicy: React.FC = () => (
  <>
    <SEO title="Shipping Policy - Makario" description="Read our shipping policy for delivery timelines and charges." />
    <Header />
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-heritage">Shipping Policy</h1>
      <div className="prose max-w-2xl space-y-4">
        <p>
          The orders for the user are delivered through registered domestic courier companies and/or speed post only.
        </p>
        <p>
          Orders are delivered within 10 days from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivery of the shipment, subject to courier company/post office norms.
        </p>
        <p>
          Platform Owner shall not be liable for any delay in delivery by the courier company / postal authority.
        </p>
        <p>
          Delivery of all orders will be made to the address provided by the buyer at the time of purchase.
        </p>
        <p>
          Delivery of our services will be confirmed on your email ID as specified at the time of registration.
        </p>
        <p>
          If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be), the same is not refundable.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default ShippingPolicy;
