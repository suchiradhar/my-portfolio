import React, { useState } from "react";
import "./Resume.css";
import "../../App.css";

// Data for education and experience
const resumeData = [
  {
    id: 1,
    title: "Masters of Interaction and Experience Design",
    subtitle: "University of Limerick",
    date: "2024 - Current",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },
  {
    id: 2,
    title: "Bachelors of Arts (Psychology Honors)",
    subtitle: "Indira Gandhi National Open University (IGNOU)",
    date: "2020 - 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },
  {
    id: 3,
    title: "Vocal Performer Certificate Program",
    subtitle: "The True School of Music",
    date: "2015 - 2017",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },
  {
    id: 4,
    title: "UX Designer",
    subtitle: "ARC Document Solutions",
    date: "2023 - 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
  {
    id: 5,
    title: "UI UX Designer",
    subtitle: "Lane 4 Solutions ",
    date: "2020 - 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
  {
    id: 6,
    title: "Operations Manager & Editor",
    subtitle: "Blindspot Media Pvt. Ltd.",
    date: "2019 - 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
];

// Individual card component for resume items
const ResumeCard = ({ title, subtitle, date, description, defaultOpen, className }) => {
  const [showInfo, setShowInfo] = useState(defaultOpen); // Use defaultOpen to set the initial state

  return (
    <div className={`resume__item ${className} ${showInfo ? "show-content" : ""}`}>
      {/* Header with clickable toggle */}
      <div className="resume__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle">{title}</h3>
        <span className="resume__icon">{showInfo ? '-' : '+'}</span>
      </div>

      {/* Toggle content visibility */}
      <div className="resume__content">
        <div className="resume__date-title">
          <h3 className="resume__title">{subtitle}</h3>
          <span className="resume__date text-cs">{date}</span>
        </div>
        <p className="resume__description">{description}</p>
      </div>
    </div>
  );
};

// Main Resume component
const Resume = () => {
  return (
    <div className='resume' id='resume'>
        <div className='resume__heading'>
            <h2 className="section__title text-cs">Resume</h2>
            <p className="section__subtitle">
            My <span>Journey</span>
            </p>
        </div>

      <div className="resume__container container">
        {/* Education Section */}
        <div className="resume__group">
          <h3 className="resume__groupheading">Education</h3>
          {resumeData
          .filter((item) => item.category === "education")
          .map((item, index) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              defaultOpen={index === 0} // Open the first item by default
              className={index === 0 ? "first" : ""}
            />
          ))}
        </div>

        {/* Experience Section */}
        <div className="resume__group">
          <h3 className="resume__groupheading">Experience</h3>
          {resumeData
          .filter((item) => item.category === "experience")
          .map((item, index) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              defaultOpen={index === 0} // Open the first item by default
              className={index === 0 ? "first" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
