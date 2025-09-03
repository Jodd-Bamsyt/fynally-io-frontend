import React from "react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header
      className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
      role="banner"
    >
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400" tabIndex="0">
        Fynally.io
      </div>
      <nav aria-label="Primary navigation">
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
          {["Home", "Student Resources", "Learning", "Internships", "Employment"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                tabIndex="0"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}