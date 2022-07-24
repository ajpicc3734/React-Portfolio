import React from "react";

function Projects(work) {
  // const {
  //     title: title,
  //     link: link,
  //     image:img
  // } = work;
  return (
    <section>
      <h2 id="projects">Projects</h2>

      <div className="project-container">
        <section className="project">
          <h3>Vinyl Collectors</h3>
          <div>
          <a href="https://github.com/ajpicc3734/Project-2">
            <img
              src={require("../../assets/images/pexels-mike-1181769.jpg")}
              alt="vinyl records"
            />
          </a>
          </div>
        </section>

        <section className="project">
          <h3>Trending music</h3>

          <a href="https://github.com/ajpicc3734/Group-Project">
            <img
              src={require("../../assets/images/photo-1477233534935-f5e6fe7c1159.avif")}
              alt="music"
            />
          </a>
        </section>

        <section className="project">
          <div>
            <h3>Employee Tracker</h3>
          </div>
          <a href="https://github.com/ajpicc3734/Employee-Tracker">
            <img src={require("../../assets/images/office.jpg")} />
          </a>
        </section>
      </div>
    </section>
  );
}

export default Projects;
