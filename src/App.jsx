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
import Birthday from './components/Birthdays';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';




function App() {
  return (
    <>
      <Helmet>
        <title>Yafet Lopez - Software Developer Portfolio</title>
        <meta name="description" content="Full-stack software developer specializing in React, Node.js, Python and modern web technologies. View my projects and get in touch." />
      </Helmet>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/birthdays" element={<Birthday />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
