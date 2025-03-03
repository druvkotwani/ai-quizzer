"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for casual users",
    features: [
      "5 quizzes per month",
      "Basic quiz customization",
      "Email support",
      "Access to community templates",
    ],
    cta: "Start for Free",
    popular: false,
    color: "bg-purple-400",
    hoverColor: "#c084fc", // purple-400 hover
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious quiz creators",
    features: [
      "Unlimited quizzes",
      "Advanced customization options",
      "Priority email support",
      "Custom branding",
      "Analytics dashboard",
      "Team collaboration features",
      "API access",
      "Custom integrations",
    ],
    cta: "Get Started",
    popular: true,
    color: "bg-[#ff8e3c]",
    hoverColor: "#ff9f50", // slightly lighter orange
  },
];

export default function PricingPageClient() {
  const [billing, setBilling] = useState("monthly");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className=""
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
           className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance mb-6 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
           className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose the perfect plan for your needs. All plans include core AI
            quiz generation features.
          </motion.p>

          <motion.div
            className="flex items-center justify-center mt-8 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setBilling("monthly")}
                variant={billing === "monthly" ? "default" : "neutral"}
                className={`group relative overflow-hidden ${
                  billing === "monthly" ? "!bg-[#ff8e3c]" : "!bg-white !text-black"
                }`}
              >
                Monthly
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setBilling("yearly")}
                variant={billing === "yearly" ? "default" : "neutral"}
                className={`group relative overflow-hidden ${
                  billing === "yearly" ? "!bg-[#ff8e3c]" : "!bg-white !text-black"
                }`}
              >
                Yearly{" "}
                <span className="bg-green-200 text-green-900 font-bold px-2 py-0.5 rounded-sm text-xs">
                  Save 20%
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billing={billing}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center bg-purple-400 hover:bg-purple-500 transition-colors duration-200 p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            Need a custom solution?
          </h2>
          <p className="mb-6 text-gray-900 font-medium">
            Contact our team for custom pricing and feature packages tailored to
            your specific needs.
          </p>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button variant="default" className="!bg-white text-black">
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
        
        {/* FAQ Section */}
        <PricingFAQ />
      </div>
    </motion.div>
  );
}
