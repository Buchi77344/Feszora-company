// components/TestimonialsSection.tsx
import React from 'react';
import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Feszora AI cut my customer support time in half — now I can focus on growing my store!",
      author: "Sarah Chen",
      role: "Owner, Minimalist Fashion Co.",
      avatar: "SC",
      stats: "Support time reduced by 52%",
      color: "bg-blue-50",
    },
    {
      quote: "The Shopify integration is seamless. Our customers get instant order updates 24/7.",
      author: "Marcus Johnson",
      role: "Founder, TechGadgets Store",
      avatar: "MJ",
      stats: "Response time: 45 seconds",
      color: "bg-green-50",
    },
    {
      quote: "Best investment we made this year. The AI handles 85% of our customer inquiries.",
      author: "Elena Rodriguez",
      role: "CEO, Beauty & Care Shop",
      avatar: "ER",
      stats: "85% auto-resolved queries",
      color: "bg-purple-50",
    },
  ];

  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "42%",
      label: "Increase in Sales",
      description: "From AI product recommendations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "4.8/5",
      label: "Customer Satisfaction",
      description: "Average rating across stores"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "94%",
      label: "Time Saved",
      description: "On support queries daily"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "5,000+",
      label: "Messages Handled",
      description: "Daily across all clients"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trusted by Shopify Store Owners</h2>
          <p className="text-xl text-gray-600">
            See what early adopters are saying about Feszora AI
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${testimonial.color} rounded-2xl p-8`}>
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-lg italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-medium">{testimonial.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="font-bold mb-1">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Platform Logos */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Integrated with Platforms You Trust</h3>
            <p className="text-gray-600">Feszora AI works seamlessly with your existing tools</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Shopify</div>
              <div className="text-gray-600 text-sm">Official Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-2">Instagram</div>
              <div className="text-gray-600 text-sm">Meta-verified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">WhatsApp</div>
              <div className="text-gray-600 text-sm">Business API</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">Facebook</div>
              <div className="text-gray-600 text-sm">Messenger</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-2">Web Chat</div>
              <div className="text-gray-600 text-sm">Any website</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;