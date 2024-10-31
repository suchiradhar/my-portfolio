import React from 'react';

// Importing CSS styles for the Skills component
import './Skills.css';
import "../../App.css";

// Skill card component that displays individual skill details
const SkillsCard = ({ name, percentage, description }) => (
    <div className='skills__item'>

        {/* Titles for the skill name and percentage */}
        <div className="skills__titles">
            <h3 className="skills__name">{name}</h3>
            <span className='skills__number'>{percentage} <span>%</span>
            </span>
        </div>
            
            {/* Description of the skill */}
            <p className="skills__description">{description}
            </p>

            {/* Skill progress bar */}
            <div className='skills__bar'>

                {/* Progress indicator for the skill percentage */}
                <span className='skills__percentage' style={{ '--percentage': percentage }}>
                    <span></span>
                </span>
            </div>

    </div>
  );

// Main Skills component that renders the skills section
const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <div className="skills__wrapper">

                {/* Section title and subtitle */}
                <h2 className="section__title text-cs">Professional Skills</h2>
                <p className="section__subtitle">
                My <span>Knowledge</span>
                </p>

                {/* Grid layout for skill cards */}
                <div className='skills__grid container'>

                    {/* Individual skill cards with respective details */}
                    <SkillsCard 
                    name="Figma"
                    percentage="90"
                    description="I use Figma extensively for wireframing, prototyping, and crafting high-fidelity UI designs. 
                    Its real-time collaboration features streamline teamwork, enabling quick iteration and the seamless sharing of ideas across teams and stakeholders."
                    />
                    <SkillsCard 
                    name="HTML CSS"
                    percentage="60"
                    description="With expertise in HTML and CSS, I transform design concepts into fully functional, pixel-perfect layouts. 
                    I ensure web interfaces are responsive and accessible, which helps in smooth collaboration with developers and brings designs to life exactly as envisioned."
                    />
                    <SkillsCard 
                    name="Maya"
                    percentage="40"
                    description="Maya is my go-to tool for creating detailed 3D models and animations. 
                    I leverage it to enhance AR/VR projects, bringing an extra layer of realism and interactivity to immersive experiences and interactive design elements."
                    />
                    <SkillsCard 
                    name="Adobe Creative Suite"
                    percentage="65"
                    description="With Photoshop, I perfect images and designs; Illustrator is my go-to for crisp vector designs, while After Effects adds motion and depth to my projects. 
                    These tools help me deliver visually engaging and impactful designs across digital and print media."
                    />
                    <SkillsCard 
                    name="Framer"
                    percentage="70"
                    description="Framer allows me to design interactive, high-fidelity prototypes, showcasing complex animations and micro-interactions. 
                    It gives my designs a dynamic and responsive feel, perfect for testing ideas with real-world interactions."
                    />
                    <SkillsCard 
                    name="Unity"
                    percentage="40"
                    description="I use Unity to develop interactive AR/VR experiences, where I create immersive environments and spatial interfaces that push the boundaries of user engagement. 
                    It's a powerful tool for building dynamic, multi-sensory user interactions."
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills