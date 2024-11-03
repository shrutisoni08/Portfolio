// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Experience.css";
import medilifeIMG from "../../../public/assets/Images/medilife.png";
import skillectedIMG from "../../../public/assets/Images/skillected.png";


const Experience = () => {
  return (
    <div className="main-container">
      <div className="wrapper-new">
        <div className="experience">
          <h1>My Experience</h1>
        </div>
        {/* First Project */}
        <div className="experience-container">
          <div className="medilifeProject">
            <div className="project-content-container">
              <div className="project-description">
                <div className="project-details">
                  <h2>Project Title : </h2>&nbsp;&nbsp;{" "}
                  <a
                    title="Visit Site"
                    href="https://www.medilifehealthcare.info/"
                    target="_blank"
                  >
                    Medilife Health Care
                  </a>
                </div>
                <div className="project-details">
                  <h2>Project Type : </h2>&nbsp;&nbsp;<h2>Freelance Project</h2>
                </div>
                <div className="project-details">
                  <h2>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</h2>&nbsp;&nbsp;{" "}
                  <h2>2 Months (May 2024 - July 2024)</h2>
                </div>
                <div className="project-details">
                  <h2>My Role &nbsp;&nbsp;&emsp; :</h2>&nbsp;&nbsp;{" "}
                  <h2>Full-Stack Developer</h2>
                </div>
                <div className="description">
                  <h2>Project Overview :</h2>
                  <p>
                    Developed a comprehensive healthcare platform designed to
                    connect patients with over 2,500 doctors and 3,000 hospitals
                    globally. Utilizing React, JavaScript, HTML, and CSS, I
                    engineered a seamless user interface featuring:
                  </p>
                  <ul>
                    <li>
                      Efficient navigation and user-friendly interactions.
                    </li>
                    <li>
                      Responsive design for accessibility across all devices.
                    </li>
                    <li>
                      Robust backend integration to ensure reliable data
                      retrieval and display.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <p>
                  <b>Key Challenges & Solutions:</b>
                </p>
                <p>
                  Managing a large-scale JSON dataset posed significant
                  challenges. I implemented advanced data handling techniques,
                  optimized the frontend for high performance, and adhered to
                  SOLID principles to:
                </p>
                <ul>
                  <li>Enhance data accuracy and reliability.</li>
                  <li>
                    Ensure smooth user interactions and a consistent experience.
                  </li>
                  <li>
                    Tackle complex issues systematically, leading to an
                    efficient and maintainable codebase.
                  </li>
                </ul>
                <p>
                  <b>Results & Impact:</b>
                </p>
                <p>This project demonstrates my expertise in:</p>
                <ul>
                  <li>Large-scale data management and optimization.</li>
                  <li>Building robust, user-centric web applications.</li>
                  <li>
                    Delivering high-quality, complex projects within tight
                    deadlines.
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <img src={medilifeIMG} alt="medilife home page" />
            </div>
          </div>
        </div>
        <hr />
        {/* Second Project */}
        <div className="experience-container">
          <div className="medilifeProject">
            <div className="project-content-container">
              <div className="project-description">
                <div className="project-details">
                  <h2>Project Title : </h2>&nbsp;&nbsp;{" "}
                  <a
                    title="Visit Site"
                    href="https://www.skillected.com/"
                    target="_blank"
                  >
                    SkillEcted
                  </a>
                </div>
                <div className="project-details">
                  <h2>Project Type : </h2>&nbsp;&nbsp;<h2>Freelance Project</h2>
                </div>
                <div className="project-details">
                  <h2>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</h2>&nbsp;&nbsp;{" "}
                  <h2>Ongoing (July 2024 - Present)</h2>
                </div>
                <div className="project-details">
                  <h2>My Role &nbsp;&nbsp;&emsp; :</h2>&nbsp;&nbsp;{" "}
                  <h2>Front-End Developer</h2>
                </div>
                <div className="description">
                  <h2>Project Overview :</h2>
                  <p>
                    Led the development of the SkillEcted website using the
                    Graphy platform, which involved a mix of drag-and-drop
                    design elements and custom coding. The project focused on
                    creating a professional and user-friendly site that
                    effectively showcased the company’s services and educational
                    offerings.
                  </p>
                  <ul>
                    <li>
                      Efficient navigation and user-friendly interactions.
                    </li>
                    <li>
                      Responsive design for accessibility across all devices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="description">
                <p>
                  <b>Key Responsibilities :</b>
                </p>
                <ul>
                  <li>
                    Website Development on Graphy Platform: Designed and
                    developed the SkillEcted website using Graphy&#39;s
                    drag-and-drop builder. Efficiently managed and organized
                    containers, ensuring a professional and user-friendly
                    interface. Enhanced the website&#39;s functionality and
                    aesthetics with custom coding where needed.
                  </li>
                  <li>
                    Content Writing: Created engaging and informative content
                    tailored to various digital platforms, including technical
                    tutorials, blog posts, and course materials. Focused on
                    delivering high-quality content that resonated with the
                    target audience and met the company&#39;s strategic goals.
                  </li>
                  <li>
                    Technical Training: Provided hands-on training in Front End
                    Development & Digital Marketing. Developed custom training
                    materials and guided participants through practical
                    exercises to strengthen their skills and knowledge.
                  </li>
                </ul>
                <p>
                  <b>Key Achievements :</b>
                  <ul>
                    <li>Successfully launched a well-designed, functional website on the Graphy platform, enhancing the company&#39;s online presence.</li>
                    <li>Authored and published over 27+ technical articles and course modules, contributing to the company’s educational offerings.</li>
                    <li>Trained and mentored over 60+ students and professionals, significantly boosting their technical expertise and career readiness.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="project-img">
              <img src={skillectedIMG} alt="medilife home page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
