import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Yafet Lopez - Software Developer Portfolio</title>
        <meta name="description" content="Full-stack software developer specializing in React, Node.js, Python and modern web technologies. View my projects and get in touch." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;