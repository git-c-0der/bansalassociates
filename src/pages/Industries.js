import React from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      title: 'Manufacturing',
      description: 'Supporting manufacturing excellence through financial expertise.',
      icon: '🏭',
      services: [
        'Cost Optimization',
        'Supply Chain Finance',
        'Equipment Financing',
        'Working Capital Management',
      ],
    },
    {
      title: 'Technology',
      description: 'Empowering tech companies with innovative financial solutions.',
      icon: '💻',
      services: [
        'R&D Tax Credits',
        'Venture Capital Advisory',
        'IP Valuation',
        'Growth Strategy',
      ],
    },
    {
      title: 'Healthcare',
      description: 'Specialized financial services for healthcare providers.',
      icon: '🏥',
      services: [
        'Healthcare Compliance',
        'Medical Practice Management',
        'Healthcare IT Solutions',
        'Revenue Cycle Management',
      ],
    },
    {
      title: 'Retail',
      description: 'Driving retail success through strategic financial planning.',
      icon: '🛍️',
      services: [
        'Inventory Management',
        'E-commerce Solutions',
        'Retail Analytics',
        'Store Expansion Planning',
      ],
    },
    {
      title: 'Real Estate',
      description: 'Comprehensive financial services for real estate professionals.',
      icon: '🏢',
      services: [
        'Property Valuation',
        'Investment Analysis',
        'Development Finance',
        'Portfolio Management',
      ],
    },
    {
      title: 'Financial Services',
      description: 'Expert solutions for financial institutions.',
      icon: '💰',
      services: [
        'Regulatory Compliance',
        'Risk Management',
        'Digital Banking Solutions',
        'Investment Advisory',
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-200">
            Specialized financial solutions for diverse industries
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <h4 className="font-semibold mb-2">Our Services Include:</h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific challenges and opportunities.',
              },
              {
                title: 'Customized Solutions',
                description: 'Tailored financial strategies for your unique business needs.',
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully serving clients across various industries.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help your industry-specific needs
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries; 