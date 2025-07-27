import { useState } from "react";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div
      id="pricing"
      className="sm:h-[1500px] lg:h-[480px] bg-gray-50 dark:bg-gray-900 pb-20 pt-[50px]"
    >
      <h2 className="text-center text-5xl font-bold py-8 dark:text-white">
        Pricing
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full border-2 border-gray-300 dark:bg-gray-700 bg-white overflow-hidden">
          <button
            className={`px-6 py-2 font-bold transition-all ${
              activeTab === "monthly"
                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 font-bold transition-all ${
              activeTab === "yearly"
                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {(activeTab === "monthly" ? monthlyPlans : yearlyPlans).map(
          (plan, index) => (
            <div
              key={index}
              className={`${
                plan.popular 
                  ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 scale-105 border-4 border-yellow-400 shadow-2xl" 
                  : "bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 dark:from-slate-700 dark:via-gray-800 dark:to-slate-900"
              } text-white rounded-2xl p-8 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 tracking-wide">{plan.title}</h3>
                <div className="text-center">
                  <h4 className="text-3xl font-black mb-1">{plan.price.lkr}</h4>
                  <p className="text-sm opacity-80">{plan.price.usd}</p>
                </div>
              </div>
              <p className="text-sm mb-6 opacity-90 leading-relaxed">{plan.description}</p>
              <ul className="text-sm text-left space-y-3 mb-8">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span className="flex-1">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                plan.popular 
                  ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg" 
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}>
                Choose {plan.title}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const monthlyPlans = [
  {
    title: "BASIC",
    price: { lkr: "LKR 0", usd: "($0)" },
    description: "Essential Spark Voyage experience with core learning games.",
    benefits: [
      "Basic adventure games with Spark companion.",
      "Limited progress tracking for parents.",
      "Access to fundamental ADHD learning tools.",
    ],
  },
  {
    title: "PREMIUM",
    price: { lkr: "LKR 1,500", usd: "($5)" },
    description: "Full AI-powered personalized learning experience.",
    popular: true,
    benefits: [
      "Complete access to adaptive learning system.",
      "Real-time AI companion personalization.",
      "Comprehensive parental dashboard & insights.",
    ],
  },
  {
    title: "IOT BUNDLE",
    price: { lkr: "LKR 8,500", usd: "($28)" },
    description: "Premium + IoT devices (Wearable + Magic Crystal Ball).",
    benefits: [
      "Includes wearable device for biometric tracking.",
      "Magic Crystal Ball for emotional regulation.",
      "Full physiological data integration.",
    ],
  },
  {
    title: "CLINICAL",
    price: { lkr: "LKR 3,500", usd: "($12)" },
    description: "Professional tools for healthcare providers and educators.",
    benefits: [
      "Advanced analytics and clinical reporting.",
      "Multi-child monitoring capabilities.",
      "Healthcare professional consultation support.",
    ],
  },
];

const yearlyPlans = [
  {
    title: "BASIC",
    price: { lkr: "LKR 0", usd: "($0)" },
    description: "Essential Spark Voyage experience with core learning games.",
    benefits: [
      "Basic adventure games with Spark companion.",
      "Limited progress tracking for parents.",
      "Access to fundamental ADHD learning tools.",
    ],
  },
  {
    title: "PREMIUM",
    price: { lkr: "LKR 15,000", usd: "($50)" },
    description: "Save 17% with yearly subscription - Full AI experience.",
    popular: true,
    benefits: [
      "Complete access to adaptive learning system.",
      "Real-time AI companion personalization.",
      "Comprehensive parental dashboard & insights.",
      "Priority customer support included.",
    ],
  },
  {
    title: "IOT BUNDLE",
    price: { lkr: "LKR 75,000", usd: "($250)" },
    description: "Premium yearly + IoT devices with significant savings.",
    benefits: [
      "Includes wearable device for biometric tracking.",
      "Magic Crystal Ball for emotional regulation.",
      "Full physiological data integration.",
      "Hardware warranty and replacement coverage.",
    ],
  },
  {
    title: "CLINICAL",
    price: { lkr: "LKR 35,000", usd: "($117)" },
    description: "Professional yearly plan with enhanced clinical features.",
    benefits: [
      "Advanced analytics and clinical reporting.",
      "Multi-child monitoring capabilities.",
      "Healthcare professional consultation support.",
      "Continuing education credits available.",
    ],
  },
];

export default PricingSection;