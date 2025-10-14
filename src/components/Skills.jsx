import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Responsive UI Design", level: 90 }
    ]
  },
  {
    category: "Backend & API",
    skills: [
      { name: "Python / FastAPI / Django", level: 95 },
      { name: "Node.js / Express", level: 85 },
      { name: "REST / GraphQL APIs", level: 90 },
      { name: "SQL / PostgreSQL / MongoDB", level: 85 },
      { name: "Microservices Architecture", level: 88 }
    ]
  },
  {
    category: "AI, Cloud & DevOps",
    skills: [
      { name: "Machine Learning (Scikit-learn, TensorFlow, PyTorch)", level: 90 },
      { name: "Algorithmic Trading / Binance API", level: 92 },
      { name: "Docker / Kubernetes / CI/CD", level: 88 },
      { name: "AWS / Cloud Deployment", level: 80 },
      { name: "Git / GitHub Actions", level: 90 }
      ]
    }
  ];
  
  function Skills() {
    return (
      <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;