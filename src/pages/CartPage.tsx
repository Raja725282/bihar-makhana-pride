import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/CartComponent';
import SEO from '../components/SEO';

export const CartPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Shopping Cart - Bihar Makhana Pride"
        description="Review your selected makhana products and proceed to checkout"
        keywords="shopping cart, makhana, checkout, buy online"
      />
      <Header />
      <Cart />
      <Footer />
    </>
  );
};