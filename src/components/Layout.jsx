import React from 'react';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';



const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;