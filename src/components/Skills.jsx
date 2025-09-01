import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Skills = ({ data }) => {
  const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Tools', 'Design'];
  
  const getSkillsByCategory = (category) => {
    return data.skills.filter(skill => skill.category === category);
  };

  const getColorByCategory = (category) => {
    const colors = {
      Frontend: 'from-blue-500 to-cyan-500',
      Backend: 'from-green-500 to-emerald-500',
      Database: 'from-purple-500 to-violet-500',
      Cloud: 'from-orange-500 to-red-500',
      DevOps: 'from-indigo-500 to-purple-500',
      Tools: 'from-yellow-500 to-orange-500',
      Design: 'from-pink-500 to-rose-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={scaleIn}
                      custom={index}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { type: 'spring', stiffness: 300 }
                      }}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                      {/* Background gradient on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${getColorByCategory(category)}`}
                      />
                      
                      <div className="relative z-10 text-center space-y-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-4xl mb-3"
                        >
                          {skill.icon}
                        </motion.div>
                        
                        {/* Skill Name */}
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={`h-full bg-gradient-to-r ${getColorByCategory(category)} rounded-full relative`}
                            >
                              <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                  repeatDelay: 1
                                }}
                                className="absolute inset-0 bg-white/30 skew-x-12 w-8"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;