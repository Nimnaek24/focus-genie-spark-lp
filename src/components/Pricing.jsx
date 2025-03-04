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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {(activeTab === "monthly" ? monthlyPlans : yearlyPlans).map(
          (plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500 to-blue-500 dark:text-white text-white rounded-xl p-6 text-center shadow-lg transition-transform hover:scale-105 pt-10"
            >
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
              <h4 className="text-2xl font-bold mb-4">{plan.price}</h4>
              <p className="text-sm mb-2">{plan.description}</p>
              <ul className="text-sm text-left space-y-2 mb-6">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-navy-blue font-bold">✔</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 dark:text-white text-white px-4 py-2 rounded-full font-bold transition">
                Choose Plan
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
    title: "FREE",
    price: "$0",
    description: "Access to basic games and limited progress tracking.",
    benefits: [
      "Basic games for early learners.",
      "Monitor limited progress.",
      "No subscription fees.",
    ],
  },
  {
    title: "PREMIUM",
    price: "$8 - $15",
    description: "Advanced features for personalized learning.",
    benefits: [
      "Access to personalized learning plans.",
      "Exclusive skill-building games.",
      "Detailed progress reports for parents.",
    ],
  },
  {
    title: "IOT KITS",
    price: "$50",
    description: "Optional IoT kits: Basic Kit $50-100, Advanced Kit $120-200.",
    benefits: [
      "Interactive IoT-enabled learning.",
      "Hands-on activities with real-world applications.",
      "Support for STEM education.",
    ],
  },
  {
    title: "VIP",
    price: "$5+",
    description: "Specialized learning modules starting at $5.",
    benefits: [
      "Premium support and consultation.",
      "Exclusive access to advanced tools.",
      "Custom-tailored learning modules.",
    ],
  },
];

const yearlyPlans = [
  {
    title: "FREE",
    price: "$0",
    description: "Access to basic games and limited progress tracking.",
    benefits: [
      "Basic games for early learners.",
      "Monitor limited progress.",
      "No subscription fees.",
    ],
  },
  {
    title: "PREMIUM",
    price: "$80 - $150",
    description: "Save 10-20% with a yearly subscription.",
    benefits: [
      "Access to personalized learning plans.",
      "Exclusive skill-building games.",
      "Detailed progress reports for parents.",
      "Significant cost savings.",
    ],
  },
  {
    title: "IOT KITS",
    price: "$50",
    description: "Optional IoT kits: Basic Kit $50-100, Advanced Kit $120-200.",
    benefits: [
      "Interactive IoT-enabled learning.",
      "Hands-on activities with real-world applications.",
      "Support for STEM education.",
    ],
  },
  {
    title: "VIP",
    price: "$5+",
    description: "Specialized learning modules starting at $5.",
    benefits: [
      "Premium support and consultation.",
      "Exclusive access to advanced tools.",
      "Custom-tailored learning modules.",
    ],
  },
];

export default PricingSection;
