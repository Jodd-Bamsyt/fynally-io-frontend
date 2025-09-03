import React, { useEffect, useState } from "react";

export default function Learnings() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=react&per_page=5")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setArticles([]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="learnings" className="max-w-4xl mx-auto p-6" aria-label="Learning Resources">
      <h2 className="text-3xl font-bold mb-6" tabIndex="0">Learning Resources</h2>
      {loading ? (
        <p>Loading articles...</p>
      ) : articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          {articles.map(({ id, title, url }) => (
            <li key={id} tabIndex="0">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}