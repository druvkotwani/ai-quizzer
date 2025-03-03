"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const SimpleCTASection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pb-24 rounded-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-primary"
          >
            Supercharge Your Learning Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Elevate your skills with our AI-powered quizzes tailored
            specifically to your learning needs and goals.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href="/quiz">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="px-8 py-6 text-lg font-medium transition-all duration-200 hover:bg-[#ff9f50]">
                  Start Your Quiz Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SimpleCTASection;
