import React from 'react';

const Insights = () => {
  const insights = [
    {
      title: 'Navigating Post-Pandemic Financial Recovery',
      category: 'Financial Planning',
      date: 'March 15, 2024',
      excerpt: 'Strategies for businesses to recover and thrive in the post-pandemic economy.',
      image: '/insights/recovery.jpg',
    },
    {
      title: 'Digital Transformation in Financial Services',
      category: 'Technology',
      date: 'March 10, 2024',
      excerpt: 'How technology is reshaping the financial services landscape.',
      image: '/insights/digital.jpg',
    },
    {
      title: 'Tax Planning for 2024',
      category: 'Tax',
      date: 'March 5, 2024',
      excerpt: 'Key tax considerations and strategies for businesses in 2024.',
      image: '/insights/tax.jpg',
    },
    {
      title: 'Sustainable Business Practices',
      category: 'Sustainability',
      date: 'February 28, 2024',
      excerpt: 'Integrating sustainability into your business strategy.',
      image: '/insights/sustainability.jpg',
    },
    {
      title: 'Investment Trends 2024',
      category: 'Investment',
      date: 'February 20, 2024',
      excerpt: 'Emerging investment opportunities and market trends.',
      image: '/insights/investment.jpg',
    },
    {
      title: 'Risk Management Strategies',
      category: 'Risk Management',
      date: 'February 15, 2024',
      excerpt: 'Effective risk management approaches for modern businesses.',
      image: '/insights/risk.jpg',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Insights & Resources</h1>
          <p className="text-xl text-gray-200">
            Stay informed with the latest trends and insights in finance and business
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/insights/featured.jpg"
                  alt="Featured Article"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-primary font-semibold">Featured Article</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  The Future of Financial Services
                </h2>
                <p className="text-gray-600 mb-4">
                  Explore how emerging technologies and changing market dynamics are
                  shaping the future of financial services.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-semibold">
                      {insight.category}
                    </span>
                    <span className="text-gray-500 text-sm">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <button className="text-primary font-semibold hover:text-primary/80">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights; 