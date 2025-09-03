import React from "react";
import { motion } from "framer-motion";

const stages = [
  { id: "student", label: "Student", icon: "🎓" },
  { id: "learner", label: "Learner", icon: "📚" },
  { id: "intern", label: "Intern", icon: "💼" },
  { id: "employee", label: "Employee", icon: "🏢" },
];

export default function JourneyFlow({ currentStage, setCurrentStage }) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" aria-label="Career journey flow">
      <h2 className="text-3xl font-bold mb-8 text-center" tabIndex="0">
        Your Career Pathway
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
        {stages.map(({ id, label, icon }, index) => (
          <motion.div
            key={id}
            className={`flex items-center cursor-pointer select-none ${
              currentStage === id
                ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }`}
            onClick={() => setCurrentStage(id)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter") setCurrentStage(id);
            }}
            aria-current={currentStage === id ? "step" : undefined}
            aria-label={`Go to ${label} section`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl mr-3" aria-hidden="true">
              {icon}
            </div>
            <div className="text-xl">{label}</div>
            {index < stages.length - 1 && (
              <div
                className="hidden md:block mx-6 text-2xl text-gray-400 dark:text-gray-600"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}