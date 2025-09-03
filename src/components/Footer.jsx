import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 mt-12 text-center">
      <p>© 2024 Fynally.io. All rights reserved.</p>
      <p>
        <a href="mailto:contact@fynally.io" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">
          Contact Us
        </a>
      </p>
    </footer>
  );
}