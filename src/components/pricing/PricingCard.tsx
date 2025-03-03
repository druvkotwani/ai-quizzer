"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
  hoverColor: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  billing: string;
  index: number;
}

export function PricingCard({ plan, billing, index }: PricingCardProps) {
  // Calculate yearly price without decimals
  const yearlyPrice = Math.floor(parseInt(plan.price.substring(1)) * 0.8 * 12);
  const price = billing === "yearly" ? `$${yearlyPrice}` : plan.price;

  const period = billing === "yearly" ? "/year" : plan.period;

  // Create hover class based on plan color
  const getHoverClass = () => {
    if (plan.color === "bg-purple-400") {
      return "hover:bg-purple-500";
    } else if (plan.color === "bg-[#ff8e3c]") {
      return "hover:bg-[#ff9f50]";
    }
    return "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${plan.color} ${getHoverClass()} rounded-lg border-2 border-black p-6 flex flex-col transition-colors duration-200 ${
        plan.popular ? "transform scale-105 md:scale-110" : ""
      }`}
      style={{
        boxShadow: plan.popular
          ? "8px 8px 0px 0px rgba(0,0,0,1)"
          : "6px 6px 0px 0px rgba(0,0,0,1)",
      }}
    >
      {plan.popular && (
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 12, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold py-1 px-4 rounded-full border-2 border-black"
        >
          Popular
        </motion.div>
      )}

      <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
      <div className="flex items-end mt-4 mb-2">
        <motion.span
          key={price}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-black"
        >
          {price}
        </motion.span>
        <span className="text-gray-900 ml-1 font-medium">{period}</span>
      </div>
      <p className="text-gray-900 mb-6 font-medium">{plan.description}</p>

      <ul className="space-y-3 mb-8 min-h-[240px]">
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-start"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="h-5 w-5 text-green-700 mr-2 flex-shrink-0" />
            </motion.div>
            <span className="text-gray-900 font-medium">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div 
        whileTap={{ scale: 0.95 }}
        className="mt-auto"
      >
        <Button 
          variant={plan.popular ? "default" : "neutral"}
          className={`w-full ${!plan.popular ? "!bg-white !text-black" : ""}`}
        >
          {plan.cta}
        </Button>
      </motion.div>
    </motion.div>
  );
}
