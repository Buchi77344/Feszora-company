// components/PricingSection.tsx
import React, { useState } from 'react';
import { Check, X, Zap, TrendingUp, Crown } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'annual' ? '$24/mo' : '$29/mo',
      description: 'Perfect for small stores',
      icon: <Zap className="w-6 h-6" />,
      features: [
        { text: 'Website chat + Shopify AI', included: true },
        { text: 'Up to 1,000 messages/month', included: true },
        { text: 'Order status inquiries', included: true },
        { text: 'Basic FAQ handling', included: true },
        { text: 'Email support', included: true },
        { text: 'Instagram DM integration', included: false },
        { text: 'WhatsApp integration', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: billingCycle === 'annual' ? '$41/mo' : '$49/mo',
      description: 'For growing businesses',
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Instagram DM integration', included: true },
        { text: 'WhatsApp integration', included: true },
        { text: 'Unlimited messages', included: true },
        { text: 'Multi-language support', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
        { text: 'Dedicated account manager', included: false },
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Pro',
      price: billingCycle === 'annual' ? '$83/mo' : '$99/mo',
      description: 'For scaling enterprises',
      icon: <Crown className="w-6 h-6" />,
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Advanced analytics dashboard', included: true },
        { text: 'Priority 24/7 support', included: true },
        { text: 'Multi-store management', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Custom AI models', included: true },
        { text: 'API access', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with a free trial. No credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black shadow'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-white text-black shadow'
                  : 'text-gray-600'
            }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-black scale-105 shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    plan.popular ? 'bg-black' : 'bg-gray-100'
                  }`}>
                    <div className={plan.popular ? 'text-white' : 'text-black'}>
                      {plan.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <div className="text-gray-600">
                    {billingCycle === 'annual' ? 'billed annually' : 'billed monthly'}
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-6 transition-colors ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span
                      className={feature.included ? 'text-gray-800' : 'text-gray-400'}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {plan.name === 'Growth' && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold mb-2">Free 14-Day Trial</div>
                    <div className="text-gray-600 text-sm">
                      No credit card required. Cancel anytime.
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
            <p className="text-gray-600 mb-6">
              Need custom pricing for multiple stores, advanced features, or dedicated support?
            </p>
            <button className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-50">
              Contact Our Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;