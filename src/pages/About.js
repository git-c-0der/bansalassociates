import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'Madhav Bansal',
      position: 'Chartered Accountant & CEO',
      bio: 'With over 25 years of experience in financial services.',
      image: '/bansalassociates/team/Madhav.jpg',
      linkedin: 'https://linkedin.com/in/madhav-bansal',
      contact: {
        email: 'madhav.bansal@gmail.com',
        phone: '+91 80102 37518'
      }
    },
    {
      name: 'Raghav Bansal',
      position: 'Chartered Accountant',
      bio: 'Expert in financial strategy and risk management.',
      image: '/bansalassociates/team/Raghav.jpeg',
      linkedin: 'https://www.linkedin.com/in/raghav-bansal-329603a0/',
      contact: {
        email: 'raghav.bansal@gmail.com',
        phone: '+91 78386 25828'
      }
    },
    {
      name: 'Shilpa Maurya',
      position: 'Chartered Accountant',
      bio: 'Specializes in CFO Advisory',
      image: '/bansalassociates/team/Shilpa.png',
      linkedin: 'https://www.linkedin.com/in/ca-shilpa-maurya-80bb06144/',
      contact: {
        email: 'shilpa.maurya@gmail.com',
        phone: '+91 80765 62597'
      }
    },
  ];

  const milestones = [
    {
      year: '1995',
      title: 'Company Founded',
      description: 'Established with a vision to provide exceptional financial services.',
    },
    {
      year: '2005',
      title: 'National Expansion',
      description: 'Expanded operations to major cities across India.',
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched innovative digital financial solutions.',
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Recognized as a leading financial advisory firm.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Your trusted partner in financial excellence since 1995
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, Bansal Associates has grown from a small financial
                advisory firm to one of India's leading financial services providers.
                Our journey has been marked by a commitment to excellence, innovation,
                and client satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across various industries, providing
                comprehensive financial solutions that drive growth and success. Our
                team of experienced professionals combines deep industry knowledge
                with cutting-edge expertise to deliver exceptional results.
              </p>
            </div>
            <div className="relative">
              <img
                src="/bansalassociates/about/Office.jpg"
                alt="Our Office"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct our business with the highest ethical standards.',
                icon: '🤝',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do.',
                icon: '⭐',
              },
              {
                title: 'Innovation',
                description: 'We embrace innovation to deliver better solutions.',
                icon: '💡',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="md:w-1/3 h-[300px] md:h-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                </div>
                
                {/* Content Section */}
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-4">{member.position}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span>{' '}
                        <a href={`mailto:${member.contact.email}`} className="hover:text-primary">
                          {member.contact.email}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span>{' '}
                        <a href={`tel:${member.contact.phone}`} className="hover:text-primary">
                          {member.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12' : 'pl-12'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-bold text-xl">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Let's work together to achieve your financial goals
          </p>
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About; 