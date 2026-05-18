import * as React from "react";
import "aos/dist/aos.css";

const SKILL_GROUPS = [
  {
    category: "Data Science & ML",
    chips: ["Python", "Machine Learning", "Data Visualisation", "R", "Pandas", "Scikit-learn", "Jupyter"],
  },
  {
    category: "Backend & APIs",
    chips: ["Node.js", "FastAPI", "REST APIs", "C# / .NET", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    chips: ["React", "Next.js", "HTML/CSS", "Material UI", "Responsive Design"],
  },
  {
    category: "Languages",
    chips: ["Greek (native)", "English (fluent)", "Spanish (A1+)", "Croatian (A1)", "Italian (A1)", "French (A1)"],
  },
  {
    category: "Soft Skills",
    chips: ["Ownership & Accountability", "Team Communication", "Leadership", "Detail-Oriented", "Fast Learner"],
  },
];

const SkillsetBox = () => {
  return (
    <section id="skills" data-aos="fade-up" data-aos-duration="700" className="glass-card">
      <p className="section-label">04 — Skills</p>
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
        Skillset
      </h2>

      <p style={{ margin: "0 0 20px", color: "#333", fontFamily: "Dosis, sans-serif", fontSize: "0.97rem", lineHeight: 1.7 }}>
        Over 30 completed courses across Data Science, Machine Learning, Management, and
        Front-end Development. Strong sense of ownership — I love building things end-to-end
        and have a keen eye for detail (blame the art background).
      </p>

      {SKILL_GROUPS.map((group) => (
        <div key={group.category} style={{ marginBottom: 18 }}>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.45)",
              marginBottom: 8,
              fontFamily: "Dosis, sans-serif",
            }}
          >
            {group.category}
          </div>
          <div>
            {group.chips.map((chip) => (
              <span key={chip} className="skill-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsetBox;
