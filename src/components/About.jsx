import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About = ({ data }) => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-500 to-accent-500 rounded-2xl transform -rotate-6 opacity-20"></div>
              
              {/* Main image */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-2xl">
                <img
                  src={data.personal.image}
                  alt={data.personal.name}
                  className="w-full h-96 md:h-[500px] object-cover rounded-xl"
                />
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              >
                👋
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              >
                💻
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '4rem' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {data.personal.bio}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">{data.personal.location}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                  <Mail className="text-secondary-600 dark:text-secondary-400" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">{data.personal.email}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                  <Phone className="text-accent-600 dark:text-accent-400" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">{data.personal.phone}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;