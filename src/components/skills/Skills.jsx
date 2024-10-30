import React from 'react';

import './Skills.css';
import "../../App.css";

const SkillsCard = ({ name, percentage, description }) => (
    <div className='skills__item'>
        <div className="skills__titles">
            <h3 className="skills__name">{name}</h3>
            <span className='skills__number'>{percentage} <span>%</span>
            </span>
        </div>

            <p className="skills__description">{description}
            </p>

            <div className='skills__bar'>
                <span className='skills__percentage' style={{ '--percentage': percentage }}>
                    <span></span>
                </span>
            </div>

    </div>
  );

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <div className="skills__wrapper">
                <h2 className="section__title text-cs">Professional Skills</h2>
                <p className="section__subtitle">
                My <span>Knowledge</span>
                </p>

                <div className='skills__grid container'>
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