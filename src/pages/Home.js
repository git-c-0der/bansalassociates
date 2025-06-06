import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Your Trusted Financial Partner
              </h1>
              <p className="text-xl text-gray-200">
                We provide comprehensive financial services and business solutions
                to help your business grow and succeed.
              </p>
              <div className="flex space-x-4">
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
                <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/bansalassociates/home/BA6.jpg"
                alt="Financial Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Advisory',
                description: 'Expert guidance for your financial decisions and investments.',
                icon: '💰',
              },
              {
                title: 'Tax Planning',
                description: 'Strategic tax planning to optimize your financial position.',
                icon: '📊',
              },
              {
                title: 'Business Consulting',
                description: 'Comprehensive business solutions for growth and success.',
                icon: '💼',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Manufacturing',
              'Technology',
              'Healthcare',
              'Retail',
              'Real Estate',
              'Financial Services',
              'Education',
              'Energy',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {industry}
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
            Let's discuss how we can help you achieve your financial goals.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 