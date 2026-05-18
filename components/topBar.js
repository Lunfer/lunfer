import * as React from "react";
import "aos/dist/aos.css";
import InspoQuote from "./inspoQuote";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const TopBar = () => {
  return (
    <>
      {/* Sticky frosted-glass nav */}
      <nav className="sticky-nav">
        <span className="nav-name">Zoi Kousteni</span>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 40px",
        }}
      >
        <h1
          data-aos="fade-down"
          data-aos-duration="900"
          style={{
            margin: "0 0 10px",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 700,
            fontFamily: "Dosis, sans-serif",
            color: "#1a1a1a",
            lineHeight: 1.05,
          }}
        >
          Zoi{" "}
          <span style={{ color: "white", textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}>
            Kousteni
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          style={{
            margin: "0 0 36px",
            fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
            fontFamily: "Dosis, sans-serif",
            color: "white",
            textShadow: "0 1px 8px rgba(0,0,0,0.45)",
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          Software Engineer&nbsp;&middot;&nbsp;Data Scientist&nbsp;&middot;&nbsp;ML Enthusiast
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          style={{
            maxWidth: 540,
            background: "rgba(255,255,255,0.22)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: 20,
            padding: "16px 28px",
            marginBottom: 48,
            fontStyle: "italic",
            color: "white",
            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            fontSize: "0.95rem",
            fontFamily: "Dosis, sans-serif",
          }}
        >
          <InspoQuote />
        </div>

        <div className="arrow">
          <a href="#about" aria-label="Scroll to about section">
            <KeyboardArrowDownOutlinedIcon
              className="bounce"
              sx={{
                fontSize: 56,
                color: "white",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default TopBar;
