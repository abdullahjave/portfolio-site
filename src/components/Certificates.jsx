import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Certificates = ({ data }) => {
  return (
    <section id="certificates" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My{' '}
              <span className="gradient-text">Certificates</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications and achievements that showcase my commitment to continuous learning and expertise in various technologies.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                className="card card-hover group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=600';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Certificate Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary-600 text-white p-2 rounded-full shadow-lg">
                      <Award size={20} />
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Issuer */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {certificate.issuer}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{certificate.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {certificate.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Link */}
                  {certificate.credentialUrl && (
                    <motion.a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
              <Award size={20} />
              <span className="font-medium">Continuously expanding my skill set</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
