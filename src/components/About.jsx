import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "../assets/imgs/Selfie.png"; // replace with your photo if available
import resumePdf from "../assets/files/Yafet_Lopez_Resume.pdf";


const About = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = resumePdf.split("/").pop();
    link.click();
  };

  return (
    <section id="about" className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Yafet Lopez"
            className="rounded-3xl shadow-2xl w-72 h-72 object-cover border-4 border-purple-600/40"
          />
        </motion.div>

        {/* Right column: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I’m <span className="font-semibold text-purple-400">Yafet Lopez</span>, a
            Freelance Software Developer with deep expertise in{" "}
            <strong>AI, Machine Learning, and Full-Stack Development</strong>.
            I build scalable applications using technologies like{" "}
            <strong>React, FastAPI, Django, and Docker</strong>, focusing on
            real-time data systems, algorithmic trading, and cloud architecture.
          </p>
          <p className="text-gray-400 mb-6">
            With experience in industrial automation, ERP integration, and
            DevOps pipelines, I specialize in transforming business requirements
            into efficient, production-ready software. I’m passionate about
            continuous learning, collaboration, and developing systems that
            merge intelligence with usability.
          </p>

          {/* Resume download buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600"
              onClick={() => handleDownload("pdf")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



















// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Rocket, Users } from 'lucide-react';

// const About = () => {
//   const features = [
//     {
//       icon: Code2,
//       title: "Clean Code",
//       description: "Writing maintainable, scalable, and efficient code following best practices"
//     },
//     {
//       icon: Rocket,
//       title: "Fast Delivery",
//       description: "Delivering high-quality projects on time with agile methodologies"
//     },
//     {
//       icon: Users,
//       title: "Team Player",
//       description: "Collaborating effectively with cross-functional teams to achieve goals"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             About <span className="gradient-text">Me</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             I'm a passionate software developer with 5+ years of experience building web applications. 
//             I love turning ideas into reality through code.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
//             >
//               <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
//               <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;