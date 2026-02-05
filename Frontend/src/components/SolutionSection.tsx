// components/SolutionSection.tsx
import React from 'react';
import { Inbox, Zap, Brain, CheckCircle } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    "Connect Shopify in 5 minutes",
    "Unified inbox for all channels",
    "AI trained on your products",
    "24/7 automated responses",
    "Human takeover when needed",
    "GDPR & privacy compliant"
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">The Solution</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                One AI Inbox for All Your Shopify Conversations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Feszora AI connects your Shopify store, website chat, and social messaging channels 
                into one platform. Automatically replies to questions about orders, products, shipping, and more.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 flex items-center space-x-2">
                <Inbox className="w-5 h-5" />
                <span>See it in Action</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Smart AI Integration</div>
                    <div className="text-gray-600">Works with your existing tools</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-blue-600">S</span>
                      </div>
                      <div>
                        <div className="font-bold">Shopify Store</div>
                        <div className="text-gray-600 text-sm">Orders • Products • Customers</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-bold">Connected</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-pink-600">IG</span>
                      </div>
                      <div>
                        <div className="font-bold">Instagram DMs</div>
                        <div className="text-gray-600 text-sm">Direct Messages • Comments</div>
                      </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                      Connect
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-green-600">WA</span>
                      </div>
                      <div>
                        <div className="font-bold">WhatsApp Business</div>
                        <div className="text-gray-600 text-sm">Meta-verified integration</div>
                      </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border hidden lg:block">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15 min</div>
                  <div className="text-gray-600">Average daily time saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;