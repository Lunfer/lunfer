import * as React from "react";
import "aos/dist/aos.css";

const ExpBox = () => {
  return (
    <section id="experience" data-aos="fade-up" data-aos-duration="700" className="glass-card">
      <p className="section-label">03 — Experience</p>
      <h2
        style={{
          margin: "0 0 20px",
          fontSize: "1.6rem",
          fontWeight: 700,
          fontFamily: "Dosis, sans-serif",
          borderBottom: "1px solid rgba(0,0,0,0.15)",
          paddingBottom: 10,
        }}
      >
        Experience
      </h2>

      <div className="timeline-entry">
        <div className="timeline-role">Software Engineer</div>
        <div className="timeline-company">Squaredev</div>
        <div className="timeline-period">2023 — Present</div>
        <div className="timeline-desc">
          Building full-stack web applications with JavaScript, React, and various
          frameworks. Also developing backend functionality with Node.js and creating
          APIs with FastAPI, sharpening skills across the full product lifecycle.
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-role">Junior Data Scientist</div>
        <div className="timeline-company">Zero To MVP Inc</div>
        <div className="timeline-period">6 months</div>
        <div className="timeline-desc">
          Focused on JavaScript and C# / .NET, using these tools to automate processes
          and deliver projects with REST API implementations.
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-role">Data Science Intern</div>
        <div className="timeline-company">EWORX S.A.</div>
        <div className="timeline-period">Internship</div>
        <div className="timeline-desc">
          First tech role — learned R for data manipulation and visualisation,
          working on real business data projects from day one.
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-role">Customer Assistance Roles</div>
        <div className="timeline-company">Various</div>
        <div className="timeline-period">Before 2022</div>
        <div className="timeline-desc">
          Developed strong communication, empathy, and people management skills
          working in several customer-facing environments.
        </div>
      </div>
    </section>
  );
};

export default ExpBox;
