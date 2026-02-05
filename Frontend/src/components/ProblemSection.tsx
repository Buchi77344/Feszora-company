// components/ProblemSection.tsx
import React from 'react';
import { Clock, DollarSign, MessageCircle, Users, AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Overwhelming DMs",
      description: "Constant Instagram/WhatsApp/website DMs are impossible to manage manually"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Repetitive Questions",
      description: "Same 'Where's my order?' questions wasting hours every day"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Lost Sales",
      description: "Slow responses cause abandoned carts and lower satisfaction"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expensive Staff",
      description: "Hiring more support staff is costly and doesn't scale"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">The Reality of E-commerce Support</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Customer Support Costs You Time & Money</h2>
          <p className="text-xl text-gray-600">
            Managing customer inquiries across multiple channels is draining your resources and limiting growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-black text-white rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">The Average Store Loses $12,000/year</h3>
              <p className="text-gray-300">On delayed responses and missed sales opportunities</p>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Calculate Your Loss
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;