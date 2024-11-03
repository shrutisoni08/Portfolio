// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Skills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  const skillsData = [
    { percentage: 90, text: "HTML" },
    { percentage: 90, text: "CSS" },
    { percentage: 60, text: "JavaScript" },
    { percentage: 60, text: "React" },
    { percentage: 70, text: "Tailwind" },
    { percentage: 70, text: "WordPress" },
    { percentage: 70, text: "Canva" },

  ];

  return (
    <div className="main-container">
      <div className="wrapper-new">
        <div className="skills-container">
          <div className="heading">
            <h1>Skills</h1>
          </div>
          <div className="skills-progress-bar">
            <div className="progress-bar-container">
              {skillsData.map((skill, index) => (
                <div key={index} style={{ width: 100, margin: "10px" }}>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      textColor: "#ffff",
                      pathColor: `rgba(62, 152, 199, ${
                        skill.percentage / 100
                      })`,
                      trailColor: "#d6d6d6",
                    })}
                  />
                  <div className="skill-text" style={{ textAlign: "center", marginTop: "10px" }}>
                   <h2> {skill.text} </h2> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
