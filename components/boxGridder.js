import * as React from "react";
import AboutMeBox from "./aboutMeBox";
import EducationBox from "./educationBox";
import ExpBox from "./expBox";
import SkillsetBox from "./skillsetBox";
import ContactBox from "./contactBox";
import QuestionsBox from "./questionsBox";

const BoxGridder = () => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <AboutMeBox />
      <EducationBox />
      <ExpBox />
      <SkillsetBox />
      <ContactBox />
      <QuestionsBox />
    </div>
  );
};

export default BoxGridder;
