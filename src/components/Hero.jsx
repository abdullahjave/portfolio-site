import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { fadeInUp, fadeInDown, staggerContainer } from '../utils/animations';

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'AI & ML Enthusiast',
    'Flutter Developer',
    'React Developer',
    'Computer Vision Expert',
    'CS Student'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-gradient dark:gradient-bg-dark"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-glow"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300/10 to-cyan-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max section-padding text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Enhanced Profile Image */}
          <motion.div
            variants={fadeInDown}
            className="relative mx-auto w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-glow"></div>
            <div className="absolute inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-75 animate-pulse"></div>
            <img
              src={data.personal.image}
              alt={data.personal.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-white/80 dark:border-gray-800/80 shadow-2xl shadow-colored dark:shadow-colored-dark animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-500/30 via-transparent to-secondary-500/20"></div>
          </motion.div>

          {/* Enhanced Name and Title */}
          <div className="space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white text-shadow dark:text-shadow-dark"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text animate-float">{data.personal.name}</span>
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-gray-200 h-12 md:h-16 lg:h-20"
            >
              I&apos;m a{' '}
              <span className="gradient-text-alt font-black text-shadow">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 ml-1"
                />
              </span>
            </motion.div>
          </div>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium text-balance"
          >
            {data.personal.subtitle}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <motion.a
              href={data.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Download size={20} />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            
            <motion.button
              onClick={scrollToContact}
              className="btn-secondary group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Mail size={20} />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="pt-16"
          >
            <motion.button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group"
              whileHover={{ y: -2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-sm font-medium tracking-wide">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="p-2 rounded-full border-2 border-current group-hover:bg-current group-hover:text-white transition-all duration-300"
              >
                <ArrowDown size={20} className="group-hover:animate-bounce" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
