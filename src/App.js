import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JourneyFlow from "./components/JourneyFlow";
import StudentResources from "./components/StudentResources";
import Learning from "./components/Learning";
import Internships from "./components/Internships";
import Employment from "./components/Employment";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [currentStage, setCurrentStage] = useState("student");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle theme and save preference
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-ful overflow-hidden">

        <section id="home">
          <Hero />
        </section>
        <JourneyFlow currentStage={currentStage} setCurrentStage={setCurrentStage} />
        <section id="studentresources">
          <StudentResources />
        </section>
        <section id="learning">
          <Learning />
        </section>
        <section id="internships">
          <Internships />
        </section>
        <section id="employment">
          <Employment />
        </section>
      </main>
      <Footer />
    </div>
  );
}
