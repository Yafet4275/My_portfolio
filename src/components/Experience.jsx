import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: "Freelance Software Developer",
    company: "Independent / Remote",
    period: "Jun 2021 – Present",
    description:
      "Building AI-powered, full-stack solutions across finance, manufacturing, and automation industries.",
    achievements: [
      "Developed algorithmic trading bots and market prediction tools using Python, TensorFlow, and Binance API.",
      "Built enterprise-grade applications with Django, FastAPI, and React.",
      "Deployed and containerized systems using Docker and Kubernetes.",
      "Designed PLC and IoT automation systems integrating real and simulated data streams."
    ]
  },
  {
    title: "Maintenance Technician",
    company: "Monett Metals Industrial",
    period: "Jan 2020 – Aug 2022",
    description:
      "Performed maintenance and PLC programming for industrial manufacturing systems.",
    achievements: [
      "Implemented automation processes to reduce downtime by 30%.",
      "Maintained and programmed complex electrical control systems."
    ]
  },
  {
    title: "Telecommunications Analyst",
    company: "Corporacion Nacional de Telecomunicaciones (CNT)",
    period: "Oct 2013 – Jun 2015",
    description:
      "Oversaw network systems, configured routers, and optimized data connectivity.",
    achievements: [
      "Ensured network uptime exceeding 99%.",
      "Led small team in upgrading communication infrastructure."
    ]
  }
];


  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-4">{exp.description}</p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-sm text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;