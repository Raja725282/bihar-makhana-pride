import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ShippingPolicy: React.FC = () => (
	<>
		<SEO title="Shipping Policy - Bihar Makhana Pride" description="Read our shipping policy for delivery timelines and charges." />
		<Header />
		<main className="container mx-auto px-4 py-12 min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-golden">Shipping Policy</h1>
			<div className="prose max-w-2xl">
				<p>We strive to deliver your order as quickly and safely as possible. All orders are processed within 1-2 business days. Delivery times may vary based on your location and chosen shipping method.</p>
				<ul>
					<li>Standard shipping: 3-7 business days</li>
					<li>Express shipping: 1-3 business days</li>
					<li>Free shipping on orders above ₹999</li>
				</ul>
				<p>If you have any questions about your shipment, please contact our support team.</p>
			</div>
		</main>
		<Footer />
	</>
);

export default ShippingPolicy;
