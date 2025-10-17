import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const RefundPolicy: React.FC = () => (
  <>
    <SEO title="Refund and Return Policy - Makario" description="Read our refund and return policy for purchases made on Makario." />
    <Header />
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-heritage">Refund and Return Policy</h1>
      <div className="prose max-w-2xl space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-heritage">Refund Policy</h2>
          <div className="space-y-4">
            <p>
              We offer a refund/exchange within the first 10 days from the date of your purchase. If 10 days have passed since your purchase, you will not be offered a return, exchange, or refund of any kind.
            </p>
            <p>
              To become eligible for a return or an exchange:
            </p>
            <ul>
              <li>The purchased item should be unused and in the same condition as you received it</li>
              <li>The item must have original packaging</li>
              <li>If the item was purchased on a sale, then the item may not be eligible for a return/exchange</li>
            </ul>
            <p>
              Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged. Replacement/Exchange products will be delivered within 10 business days.
            </p>
            <p>
              You agree that there may be a certain category of products/items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-heritage">Return Process</h2>
          <div className="space-y-4">
            <p>
              For exchange/return accepted request(s) (as applicable):
            </p>
            <ul>
              <li>Once your returned product/item is received and inspected by us, we will send you an email to notify you about receipt of the returned/exchanged product</li>
              <li>If the same has been approved after the quality check at our end, your request (i.e. return/exchange) will be processed within 10 days</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default RefundPolicy;
