import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
// import trading from '@/components/imgs/trading_platform.png';
import trading from '../assets/imgs/trading_platform.png';

const Projects = () => {
  const projects = [
    {
      title: "Investment Platform",
      description: "Full-stack investment platform with backtesting integration, portfolio management",
      image: trading,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://refaccionessol.com/"
    },


    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and analytics",
      image: "Task management dashboard with kanban board",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and natural language processing",
      image: "Modern chat interface with AI assistant",
      tags: ["React", "OpenAI", "WebSocket", "Express"],
      github: "#",
      demo: "#"
    }
  ];

  const handleLinkClick = (type) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={project.title}
                 src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleLinkClick('github')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => handleLinkClick('demo')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;