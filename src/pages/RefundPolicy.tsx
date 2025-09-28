import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const RefundPolicy: React.FC = () => (
	<>
		<SEO title="Refund Policy - Bihar Makhana Pride" description="Read our refund policy for returns and refunds." />
		<Header />
		<main className="container mx-auto px-4 py-12 min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-golden">Refund Policy</h1>
			<div className="prose max-w-2xl">
				<p>Your satisfaction is our priority. If you are not happy with your purchase, you may request a refund or replacement within 7 days of delivery.</p>
				<ul>
					<li>Products must be unused and in original packaging</li>
					<li>Refunds are processed within 5-7 business days after approval</li>
					<li>Contact our support team for refund requests</li>
				</ul>
				<p>For more details, please refer to our terms or contact us directly.</p>
			</div>
		</main>
		<Footer />
	</>
);

export default RefundPolicy;
