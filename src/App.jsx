import React, { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import portfolioData from './data/data.json';

function App() {
  const [data, setData] = useState(portfolioData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{data.personal.name} - {data.personal.title}</title>
        <meta name="description" content={`${data.personal.name} - ${data.personal.subtitle}`} />
        <meta name="keywords" content="full stack developer, react, node.js, web development, portfolio" />
        <meta name="author" content={data.personal.name} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.personal.name} - ${data.personal.title}`} />
        <meta property="og:description" content={data.personal.subtitle} />
        <meta property="og:image" content={data.personal.image} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.personal.name} - ${data.personal.title}`} />
        <meta name="twitter:description" content={data.personal.subtitle} />
        <meta name="twitter:image" content={data.personal.image} />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Hero data={data} />
        <About data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Certificates data={data} />
        <Contact data={data} />
        <Footer data={data} />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;