import React, { useState, useEffect } from "react";

const dummyInternships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company_name: "Tech Solutions Inc.",
    url: "https://example.com/internship/frontend-developer",
    location: "Remote",
    duration: "3 months",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company_name: "Data Insights LLC",
    url: "https://example.com/internship/data-science",
    location: "New York, NY",
    duration: "6 months",
  },
  {
    id: 3,
    title: "Marketing Intern",
    company_name: "Creative Minds",
    url: "https://example.com/internship/marketing",
    location: "San Francisco, CA",
    duration: "4 months",
  },
];

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((res) => res.json())
      .then((data) => {
        // Filter jobs with "intern" in title or job_type "Internship"
        const filtered = data.jobs.filter(
          (job) =>
            job.title.toLowerCase().includes("intern") ||
            job.job_type.toLowerCase() === "internship"
        );

        if (filtered.length > 0) {
          setInternships(filtered.slice(0, 5)); // Show top 5 internships
        } else {
          // Fallback to dummy data if no internships found
          setInternships(dummyInternships);
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback to dummy data on fetch error
        setInternships(dummyInternships);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="internships"
      className="content-section max-w-4xl mx-auto p-6"
      aria-label="Internship Opportunities"
    >
      <h2 className="text-3xl font-bold mb-6" tabIndex="0">
        Internships
      </h2>
      {loading ? (
        <p>Loading internships...</p>
      ) : (
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          {internships.map(({ id, title, company_name, url, location, duration }) => (
            <li key={id} tabIndex="0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              >
                {title} at {company_name}
              </a>
              {location && <span>, {location}</span>}
              {duration && <span> — {duration}</span>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}