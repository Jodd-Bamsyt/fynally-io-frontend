import React, { useState } from "react";

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex flex-wrap md:flex-nowrap justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
      role="banner"
    >
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400" tabIndex="0">
        Fynally.io
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300 ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav
        aria-label="Primary navigation"
        className={`w-full md:w-auto mt-4 md:mt-0 ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-700 dark:text-gray-300">
          {["Home", "Student Resources", "Learning", "Internships", "Employment"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded block"
                tabIndex="0"
                onClick={() => setMenuOpen(false)} // close menu on mobile after click
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="ml-0 md:ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
