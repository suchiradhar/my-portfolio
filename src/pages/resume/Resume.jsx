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
    description: "The Masters in Interaction and Experience Design, a 12-months intensive course, combines technological competence with design/artistic endeavour. It offered unique opportunities to exploit new areas (experience, interaction and participatory design, internet of things, social media and virtual reality, mobile and physical computing), across a wide range of activities, such as digital multimedia, software development, interactive installation, human-centred research and education.",
    category: "education",
  },
  {
    id: 2,
    title: "Bachelors of Arts (Psychology Honors)",
    subtitle: "Indira Gandhi National Open University (IGNOU)",
    date: "2020 - 2024",
    description: "The IGNOU BA in Psychology is a well-structured, distance learning program that explores the scientific study of human behavior and mental processes. It offered a balanced mix of theoretical knowledge and practical applications, providing a deep understanding of psychological concepts, research methods, and various branches of psychology. The curriculum included key subjects like General Psychology, Developmental Psychology, Social Psychology, Forensic Psychology and Research Methods.",
    category: "education",
  },
  {
    id: 3,
    title: "Vocal Performer Certificate Program",
    subtitle: "The True School of Music",
    date: "2015 - 2017",
    description: "With a core purpose to educate musicians, music producers, sound engineers, DJ’s, music teachers and music business professionals, True School promotes music education in India with a focus on western music principles in jazz, rock, country, soul, Indian classical and Hindustani music. The faculty hails from Conservatoire Van Amsterdam and they strongly empower musicians to bring positive change, innovation and global competitiveness to the music industry around the world.",
    category: "education",
  },
  {
    id: 4,
    title: "UX Designer",
    subtitle: "ARC Document Solutions",
    date: "2023 - 2024",
    description: "Responsible for planning and implementing new designs for projects such as ARC Print, Skysite Archives, and ARC Facilities, optimising and testing existing user interface designs for intuitiveness and experience, building functional design systems that align with project guidelines and responsiveness, communicating with stakeholders to understand business goals and objectives and creating prototypes for new product ideas.",
    category: "experience",
  },
  {
    id: 5,
    title: "UI UX Designer",
    subtitle: "Lane 4 Solutions ",
    date: "2020 - 2022",
    description: "Produced end-to-end design solutions by understanding client requirements and project objectives, delivered brand guidelines, assets, wireframes and responsive mockups, incorporated post-testing changes to optimise product performance, developed landing pages for marketing campaigns that align with brand guidelines and target audience, conducted competitor analysis and suggesting relevant improvements to enhance user experiences and ensured timely completion of assigned projects.",
    category: "experience",
  },
  {
    id: 6,
    title: "Operations Manager & Editor",
    subtitle: "Blindspot Media Pvt. Ltd.",
    date: "2019 - 2020",
    description: "Maintained communication with management, team members, and clients, ensured timely operational activities and deliveries, identified customer needs and recommending new content to address gaps in communication, conducted keyword research using SEO best practices to increase traffic to websites, developed and proofread content for blogs, articles, product descriptions, social media, and websites and contributed towards growing the efficiency of existing organisational processes and procedures.",
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
