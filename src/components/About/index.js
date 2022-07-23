import React from "react";

function About() {
  return (
    <section className="about">
      
      <div className="about-container">
      <div className="about-text">
      <h2>About</h2>
        <p>
          Highly determined web developer with experience creating applications
          with both front-end and back-end functionality. A background working
          collaboratively in a team environment and comfortable taking a lead
          role on projects with peers. My deliberate approach and
          problem-solving abilities would be a valuable addition to your team.
        </p>
        </div>
        <div className="about-me-img">
          <img
            src={require("../../assets/images/IMG_0951 (1).jpg")}
            alt="self photograph"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
