"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is AI-Quizzer?",
    answer:
      "AI-Quizzer is an intelligent quiz platform that uses AI to generate personalized quizzes based on your learning needs. It adapts to your knowledge level and helps you improve in areas where you need the most practice.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer three pricing tiers: Free, Pro, and Enterprise. The Free tier gives you access to basic features with limited quizzes per month. The Pro tier offers unlimited quizzes and additional features for a monthly subscription. The Enterprise plan is customized for organizations with advanced needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your billing period.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes, we offer a 7-day free trial for our Pro plan. This gives you full access to all Pro features so you can experience the benefits before committing to a subscription.",
  },
  {
    question: "How accurate are the AI-generated quizzes?",
    answer:
      "Our AI-generated quizzes are highly accurate and regularly updated with the latest information. We use advanced language models to ensure questions are relevant, challenging, and educational.",
  },
  {
    question: "Can I create quizzes on any topic?",
    answer:
      "Yes, you can create quizzes on virtually any topic. Our AI is trained on a wide range of subjects including programming, science, history, literature, and many more. If you have specific needs, our Enterprise plan offers custom quiz creation for specialized topics.",
  },
];

const PricingFAQ = () => {
  return (
    <section className="pt-32  px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about AI-Quizzer? Find answers to common questions below.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-blue-200/80 hover:bg-blue-200 transition-colors duration-200"
            >
              <AccordionTrigger className="text-base md:text-lg font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default PricingFAQ;