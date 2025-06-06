import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Financial Advisory',
      description: 'Expert guidance for your financial decisions and investments.',
      icon: '💰',
      details: [
        'Investment Planning',
        'Wealth Management',
        'Retirement Planning',
        'Risk Assessment',
      ],
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to optimize your financial position.',
      icon: '📊',
      details: [
        'Tax Strategy Development',
        'Compliance Management',
        'Tax Optimization',
        'International Tax Planning',
      ],
    },
    {
      title: 'Business Consulting',
      description: 'Comprehensive business solutions for growth and success.',
      icon: '💼',
      details: [
        'Business Strategy',
        'Process Optimization',
        'Market Analysis',
        'Growth Planning',
      ],
    },
    {
      title: 'Audit & Assurance',
      description: 'Reliable audit services to ensure compliance and transparency.',
      icon: '📋',
      details: [
        'Financial Audits',
        'Internal Controls',
        'Compliance Reviews',
        'Risk Assessment',
      ],
    },
    {
      title: 'Corporate Finance',
      description: 'Strategic financial solutions for corporate growth.',
      icon: '🏢',
      details: [
        'Mergers & Acquisitions',
        'Capital Raising',
        'Valuation Services',
        'Financial Modeling',
      ],
    },
    {
      title: 'Digital Transformation',
      description: 'Modern solutions to drive your business forward.',
      icon: '💻',
      details: [
        'Technology Integration',
        'Digital Strategy',
        'Process Automation',
        'Data Analytics',
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive financial and business solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help your business grow
          </p>
          <Link
            to="/contact"
            className="btn btn-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 