import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      aria-label="Introduction"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        tabIndex="0"
      >
        Your Journey from Student to Employee Starts Here
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        tabIndex="0"
      >
        Guidance, Growth, and Empowerment at Every Step
      </motion.p>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#studentresources"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          tabIndex="0"
        >
          Explore Resources
        </a>
        <a
          href="#learning"
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          tabIndex="0"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}