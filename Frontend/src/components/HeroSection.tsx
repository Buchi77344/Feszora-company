// components/HeroSection.tsx
import React from 'react';
import { MessageSquare, ShoppingBag, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="text-2xl font-bold">Feszora</span>
          <span className="bg-black text-white px-2 py-1 text-xs rounded">AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-gray-600">Features</a>
          <a href="#pricing" className="hover:text-gray-600">Pricing</a>
          <a href="#how-it-works" className="hover:text-gray-600">How it Works</a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          Get Started
        </button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Shopify-Only AI Support</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Automate Shopify Customer Support Across Your{' '}
                <span className="text-gray-600">Website & Social Channels</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Feszora AI instantly replies to customer messages, checks orders, recommends products, 
                and frees up your support team — all in one smart dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Connect Your Shopify Store</span>
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Request Early Access</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">90%</div>
                  <div className="text-gray-600 text-sm">Queries Auto-Resolved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2 min</div>
                  <div className="text-gray-600 text-sm">Average Setup</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Dashboard Mockup */}
            <div className="lg:w-1/2 relative">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xl font-bold">Feszora AI Dashboard</div>
                    <div className="text-gray-600">Unified Customer Inbox</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">142</div>
                        <div className="text-gray-600 text-sm">Messages</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">92%</div>
                        <div className="text-gray-600 text-sm">AI Resolved</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">45s</div>
                        <div className="text-gray-600 text-sm">Avg Response</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Preview */}
                <div className="bg-white rounded-xl border p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-bold">Sarah Miller</div>
                      <div className="text-gray-600 text-sm">Order #1234 • Instagram DM</div>
                    </div>
                    <div className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      AI Handling
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                        <div className="font-medium text-sm">Customer</div>
                        <div>Where is my order #1234?</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-black text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-xs">
                        <div className="font-medium text-sm">Feszora AI</div>
                        <div>Your order shipped today! Tracking shows delivery by Friday. Want me to share tracking details?</div>
                      </div>
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border hidden lg:block">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-bold">+23% Sales</div>
                    <div className="text-gray-600 text-sm">From AI recommendations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;