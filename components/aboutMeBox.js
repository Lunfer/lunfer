import * as React from "react";
import "aos/dist/aos.css";

const AboutMeBox = () => {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="700" className="glass-card">
      <p className="section-label">01 — About</p>
      <h2
        style={{
          margin: "0 0 14px",
          fontSize: "1.6rem",
          fontWeight: 700,
          fontFamily: "Dosis, sans-serif",
          borderBottom: "1px solid rgba(0,0,0,0.15)",
          paddingBottom: 10,
        }}
      >
        About Me
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: "1rem",
          lineHeight: 1.75,
          color: "#222",
          fontFamily: "Dosis, sans-serif",
        }}
      >
        Social butterfly, outside-of-the-box thinker, and Machine Learning enthusiast.
        I&apos;m passionate about data and the way it can be used to create solutions and
        insights — from everyday problems to the bigger ones. I love to learn across
        disciplines, which is why you&apos;ll find languages, HR, and tech all on my radar.
      </p>
      <p
        style={{
          margin: "12px 0 0",
          fontSize: "1rem",
          lineHeight: 1.75,
          color: "#222",
          fontFamily: "Dosis, sans-serif",
        }}
      >
        I was lucky enough to study abroad at the University of Osijek in Croatia
        through the <strong>Erasmus+</strong> programme, in the Department of
        Computer Science and Electrical Engineering. I&apos;ve since completed my
        Bachelor&apos;s degree in Industrial Design and Production Engineering at the
        University of West Attica, where I also wrote my <strong>AI-based thesis</strong>.
      </p>
    </section>
  );
};

export default AboutMeBox;
