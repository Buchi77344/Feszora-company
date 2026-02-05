// components/HowItWorksSection.tsx
import React from 'react';
import { Plug, MessageSquare, Brain, BarChart3, ChevronRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Plug className="w-8 h-8" />,
      title: "Connect Shopify",
      description: "Connect your Shopify store in minutes. No coding required.",
      details: ["Install app", "Connect API", "Sync products & orders"]
    },
    {
      number: "02",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Add Channels",
      description: "Connect Instagram, WhatsApp, and website chat.",
      details: ["Meta approval", "Channel setup", "Web widget install"]
    },
    {
      number: "03",
      icon: <Brain className="w-8 h-8" />,
      title: "AI Automatically Replies",
      description: "AI handles inquiries 24/7 with instant responses.",
      details: ["FAQ training", "Order lookups", "Product recommendations"]
    },
    {
      number: "04",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitor & Optimize",
      description: "Track performance and handle complex queries manually.",
      details: ["Analytics dashboard", "Human takeover", "Continuous improvement"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How It Works in 4 Simple Steps</h2>
          <p className="text-xl text-gray-600">
            Get set up and running in minutes, not days
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white relative z-10">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {step.number}
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center justify-center text-sm text-gray-500">
                          <ChevronRight className="w-4 h-4 mr-1" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 transform translate-x-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Complete Integration Architecture</h3>
            <p className="text-gray-600">Customer → Channel → AI → Shopify Data → Instant Reply</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 items-center mb-8">
            {/* Customer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <div className="font-bold">Customer</div>
              <div className="text-gray-600 text-sm">Asks question</div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-gray-400" />
            </div>
            
            {/* Channel */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-bold">Channel</div>
              <div className="text-gray-600 text-sm">Instagram/WhatsApp/Chat</div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-gray-400" />
            </div>
            
            {/* AI */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <div className="font-bold">Feszora AI</div>
              <div className="text-gray-600 text-sm">Processes & analyzes</div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-gray-400" />
            </div>
            
            {/* Shopify */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">S</span>
              </div>
              <div className="font-bold">Shopify</div>
              <div className="text-gray-600 text-sm">Fetches data</div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-gray-400" />
            </div>
            
            {/* Reply */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <div className="font-bold">Instant Reply</div>
              <div className="text-gray-600 text-sm">Accurate answer</div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;