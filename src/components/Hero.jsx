import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import my_pricture from './imgs/picture.jpg';
import my_pricture from '../assets/imgs/picture.jpg';
// import picture from './picture.jpg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,126,234,0.1),transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <img 
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 glow-effect object-cover"
            alt="Professional headshot of software developer"
           src={my_pricture} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Yafet Lopez</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full-Stack Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Crafting elegant solutions to complex problems. Passionate about building scalable applications and beautiful user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 justify-center"
        >
          <a href="https://github.com/Yafet4275" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yafet-lopez-8b177886/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:yafetlopez4275@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default Hero;