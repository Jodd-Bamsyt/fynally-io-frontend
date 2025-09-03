import React, { useState, useEffect } from "react";

export default function StudentResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=learning&per_page=5")
      .then((res) => res.json())
      .then((data) => {
        // Map to only needed fields
        const articles = data.map(({ id, title, url }) => ({
          id,
          title,
          link: url,
        }));
        setResources(articles);
        setLoading(false);
      })
      .catch(() => {
        setResources([]);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="studentresources"
      className="content-section max-w-4xl mx-auto p-6"
      aria-label="Student Resources"
    >
      <h2 className="text-3xl font-bold mb-6" tabIndex="0">
        Student Resources
      </h2>
      {loading ? (
        <p>Loading resources...</p>
      ) : resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          {resources.map(({ id, title, link }) => (
            <li key={id} tabIndex="0">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}