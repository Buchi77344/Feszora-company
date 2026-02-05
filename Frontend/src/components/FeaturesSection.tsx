// components/FeaturesSection.tsx
import React from 'react';
import { 
  ShoppingBag, MessageSquare, Brain, Users, 
  Fingerprint, BarChart3, Shield, Bell 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Shopify Integration",
      description: "Connect your Shopify store in minutes. AI reads order history, products, shipping, and customer info.",
      examples: [
        "Where is my order #1234?",
        "Do you have size M in stock?",
        "Can I return this product?"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Omnichannel Messaging",
      description: "Respond to website chat, Instagram DMs, WhatsApp, and Messenger from one dashboard.",
      channels: ["Website", "Instagram", "WhatsApp", "Messenger"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Auto-Replies",
      description: "Trained AI responds instantly 24/7 to FAQs, order status, and product recommendations.",
      capabilities: ["FAQs", "Order Status", "Product Recommendations", "Shipping Updates"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human Takeover",
      description: "AI hands off complex conversations to support staff with full chat history and Shopify context.",
      benefits: ["Seamless Transfer", "Full Context", "No Customer Repeating"]
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Customer Identity Matching",
      description: "Links customer messages to Shopify orders using email, username, or chat history.",
      accuracy: "99.8% Match Accuracy"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Track messages handled, response times, frequent questions, and sales impact.",
      metrics: ["AI Resolutions", "Response Time", "Sales Impact", "Common Questions"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Easy Setup & Security",
      description: "Quick Shopify connection, Meta-approved integrations, fully GDPR & privacy compliant.",
      badges: ["GDPR", "Privacy", "Meta-Approved"]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Proactive Messaging",
      description: "Greet visitors with behavior-triggered messages to increase engagement.",
      triggers: ["Cart Abandonment", "Product Views", "Returning Visitors"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Core Features Built for Shopify</h2>
          <p className="text-xl text-gray-600">
            Everything you need to automate customer support and boost sales
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              
              {feature.examples && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-sm font-medium mb-2">Example Questions:</div>
                  <ul className="space-y-1">
                    {feature.examples.map((example, i) => (
                      <li key={i} className="text-xs text-gray-500">• {example}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {feature.channels && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {feature.channels.map((channel, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {feature.accuracy && (
                <div className="mt-4 text-sm text-green-600 font-medium">
                  {feature.accuracy}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;