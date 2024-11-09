// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import Skills from "../Skills/Skills";
import Certificate from "../Certificate/Certificate";
const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="wrapper-new">
          <div className="about-me">
            <div className="heading">
              <h1>
                Get To <span>Know Me!</span>
              </h1>
            </div>
            <div className="para">
              <p>
                I am a passionate Frontend Developer with two years of hands-on
                experience, actively seeking new job opportunities to enhance my
                skills and contribute to exciting projects. My expertise lies in
                crafting visually appealing and user-friendly web applications,
                where I blend creativity with technical knowledge to deliver
                outstanding user experiences. I have a solid foundation in HTML,
                CSS, and JavaScript, along with experience in modern frameworks
                like ReactJS. I thrive in collaborative environments, where I
                can work closely with designers and backend developers to bring
                ideas to life. I take pride in writing clean, maintainable code
                and am dedicated to ensuring optimal performance across all
                devices and browsers. Continuous learning is at the heart of my
                professional journey. I stay updated with the latest industry
                trends and best practices, allowing me to implement innovative
                solutions and enhance my problem-solving abilities. I am eager
                to tackle new challenges and contribute my skills to a dynamic
                team that values creativity and collaboration.
              <br />   Let’s connect and explore how I can bring value to your projects!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Certificate />
    </>
  );
};

export default About;
