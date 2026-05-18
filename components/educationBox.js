import * as React from "react";
import "aos/dist/aos.css";

const EducationBox = () => {
  return (
    <section id="education" data-aos="fade-up" data-aos-duration="700" className="glass-card">
      <p className="section-label">02 — Education</p>
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
        Education
      </h2>

      <div className="timeline-entry">
        <div className="timeline-role">BSc — Industrial Design & Production Engineering</div>
        <div className="timeline-company">University of West Attica, Athens, Greece</div>
        <div className="timeline-period">Graduated 2024</div>
        <div className="timeline-desc">
          Formerly the Department of Automation Engineering. Wrote an AI-based thesis
          combining machine learning with real-world engineering applications.
        </div>
      </div>

      <div className="timeline-entry">
        <div className="timeline-role">Erasmus+ Exchange — Computer Science & Electrical Engineering</div>
        <div className="timeline-company">University of Osijek, Osijek, Croatia</div>
        <div className="timeline-period">2022 — One semester abroad</div>
        <div className="timeline-desc">
          Took courses including <em>Cryptography and System Security</em>.
          Also earned an A1 certificate in Croatian language during this period.
        </div>
      </div>
    </section>
  );
};

export default EducationBox;
