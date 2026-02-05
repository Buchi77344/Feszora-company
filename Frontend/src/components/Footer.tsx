// components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">F</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Feszora</span>
                <span className="bg-white text-black px-2 py-1 text-xs rounded ml-2">AI</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Automating Shopify customer support with AI-powered solutions that save time, boost sales, and enhance customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram, Facebook, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Docs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">hello@feszora.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">San Francisco, CA</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Feszora AI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;