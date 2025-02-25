import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      description: "Perfect for testing and small-scale projects.",
      features: [
        "100 API requests per month",
        "Basic support",
        "Limited access to API types",
      ],
    },
    {
      title: "Pro",
      price: "$29/month",
      description: "Great for developers and startups.",
      features: [
        "10,000 API requests per month",
        "Priority support",
        "Access to all API types",
        "Detailed analytics",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for large organizations.",
      features: [
        "Unlimited API requests",
        "Dedicated account manager",
        "Custom SLAs",
        "Advanced security options",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Pricing Plans</h1>
        <p className="text-center text-gray-600 mb-12">
          Choose a plan that fits your needs and start building with our APIs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="shadow-lg border border-gray-200 h-full">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {plan.title}
                  </h2>
                  <p className="text-3xl font-bold text-purple-600 mb-4">
                    {plan.price}
                  </p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="text-gray-700 text-left mb-6 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-purple-500 mr-2">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-muted-yellow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {plan.title === "Free" ? "Get Started" : "Choose Plan"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
