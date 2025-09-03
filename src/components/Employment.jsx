import React, { useState, useEffect } from "react";

export default function Employment() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs?category=software-dev")
      .then((res) => res.json())
      .then((data) => {
        // Filter for full-time or employment-relevant jobs (optional)
        const employmentJobs = data.jobs.filter(job =>
          !job.title.toLowerCase().includes("intern") &&
          job.job_type !== "Internship"
        );
        setJobs(employmentJobs.slice(0, 5)); // Show top 5 for brevity
        setLoading(false);
      })
      .catch(() => {
        // Fallback to dummy data if API fails
        setJobs([
          {
            id: 1,
            title: "Junior Software Engineer",
            company_name: "Innovatech Corp",
            url: "https://remotive.io/job/12345/junior-software-engineer",
          },
          {
            id: 2,
            title: "Product Manager",
            company_name: "NextGen Solutions",
            url: "https://remotive.io/job/67890/product-manager",
          },
          {
            id: 3,
            title: "UX Designer",
            company_name: "Creative Studio",
            url: "https://remotive.io/job/54321/ux-designer",
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="employment"
      className="content-section max-w-4xl mx-auto p-6"
      aria-label="Employment Opportunities"
    >
      <h2 className="text-3xl font-bold mb-6" tabIndex="0">
        Employment
      </h2>
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          {jobs.map(({ id, title, company_name, url }) => (
            <li key={id} tabIndex="0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              >
                {title} at {company_name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}