import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import wms from '../assets/imgs/wms_system.png';
import fastapiApp from '../assets/imgs/fastapi_react_app.png';
import dashboard from '../assets/imgs/manufacturing_dashboard.png';
import erp from '../assets/imgs/erp_integration.png';
import alertTool from '../assets/imgs/alert_tool.png';
import microservices from '../assets/imgs/microservices_architecture.png';
import ciCd from '../assets/imgs/ci_cd_pipeline.png';
import refactor from '../assets/imgs/refactoring_modernization.png';
import ruleEngine from '../assets/imgs/business_rule_engine.png';



const Projects = () => {
  const projects = [
    {
      title: "End-to-End Business System",
      description:
        "Full-stack application built with React and FastAPI. Features vendor API integration, modular architecture, robust error handling, and Dockerized cloud deployment.",
      image: fastapiApp,
      tags: ["React", "FastAPI", "PostgreSQL", "Docker", "REST API"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Warehouse Management System (WMS-lite)",
      description:
        "Inventory system for tracking inbound/outbound goods, bin locations, and real-time reporting dashboards.",
      image: wms,
      tags: ["Django", "React", "SQLite", "Chart.js"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Manufacturing Monitoring Dashboard",
      description:
        "IoT-driven system simulating PLC data streams with MQTT for real-time machine monitoring and production analytics.",
      image: dashboard,
      tags: ["MQTT", "WebSockets", "FastAPI", "React", "IoT"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "ERP Integration Platform",
      description:
        "Middleware service that integrates ERP and third-party APIs, automating data synchronization across departments.",
      image: erp,
      tags: ["Python", "FastAPI", "REST", "JSON", "Microservices"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "On-Call Alerting & Incident Tool",
      description:
        "Tool for monitoring microservices health, triggering automated alerts, and supporting escalation processes.",
      image: alertTool,
      tags: ["React", "FastAPI", "Notifications", "WebSocket"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Microservices Architecture Sample",
      description:
        "Modular architecture demo with containerized services communicating over REST and Kafka message queues.",
      image: microservices,
      tags: ["Kafka", "Docker", "FastAPI", "React"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Testing & CI/CD Pipeline",
      description:
        "Automated CI/CD pipeline using GitHub Actions, including unit testing, integration testing, and blue-green deployment.",
      image: ciCd,
      tags: ["GitHub Actions", "CI/CD", "Testing", "Docker"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Legacy Refactoring & Modernization",
      description:
        "Rebuilt an old monolithic codebase into a modular, testable architecture, improving performance and scalability.",
      image: refactor,
      tags: ["Python", "Refactoring", "Modular Design"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    },
    {
      title: "Complex Business Rule Engine",
      description:
        "Dynamic workflow engine capable of handling conditional rules, approvals, and business automation logic.",
      image: ruleEngine,
      tags: ["Python", "Django", "Logic Engine"],
      github: "https://github.com/Yafet4275",
      demo: "#"
    }
  ];

  const handleLinkClick = (type) => {
    toast({
      title: "Private code!",
      description: "You can explore all source code on my GitHub profile, if not available there, please contact me to provide access!",
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
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Enterprise-grade software systems built with modern technologies.
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
                  src={project.image}
                />
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
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.github, "_blank")}>
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600" onClick={() => handleLinkClick('demo')}>
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
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







// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { toast } from '@/components/ui/use-toast';
// import trading from '../assets/imgs/trading_platform.png';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Investment Platform",
//       description: "Full-stack investment platform with backtesting integration, portfolio management",
//       image: trading,
//       tags: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "https://refaccionessol.com/"
//     },


//     {
//       title: "Task Management App",
//       description: "Collaborative task management tool with real-time updates, team collaboration, and analytics",
//       image: "Task management dashboard with kanban board",
//       tags: ["React", "Firebase", "Tailwind CSS"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "AI Chat Application",
//       description: "Real-time chat application with AI-powered responses and natural language processing",
//       image: "Modern chat interface with AI assistant",
//       tags: ["React", "OpenAI", "WebSocket", "Express"],
//       github: "#",
//       demo: "#"
//     }
//   ];

//   const handleLinkClick = (type) => {
//     toast({
//       title: "🚧 Feature Coming Soon!",
//       description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
//     });
//   };

//   return (
//     <section id="projects" className="py-20 px-4 bg-black/20">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-gray-400 text-lg">
//             Some of my recent work that I'm proud of
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300 group"
//             >
//               <div className="relative overflow-hidden h-48">
//                 <img 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   alt={project.title}
//                  src={project.image} />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   <Button 
//                     size="sm" 
//                     variant="outline" 
//                     className="flex-1"
//                     onClick={() => handleLinkClick('github')}
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     Code
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600"
//                     onClick={() => handleLinkClick('demo')}
//                   >
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Demo
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;