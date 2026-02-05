// components/CTASection.tsx
import React from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const CTASection: React.FC = () => {
  const guarantees = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "14-day free trial"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "No credit card required"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Set up in 5 minutes"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Cancel anytime"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-3xl p-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate Your Customer Support and Boost Sales Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ Shopify stores that save hours daily and increase revenue with AI-powered customer support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center space-x-2">
                <span>Connect Your Shopify Store</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 flex items-center justify-center space-x-2">
                <span>Request Early Access</span>
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
                  {guarantee.icon}
                  <span className="text-sm">{guarantee.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get notified about new features, case studies, and exclusive offers.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-black"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-lg font-bold hover:bg-gray-800">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;