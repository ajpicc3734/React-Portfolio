import React from "react";

function Projects(work) {
  // const {
  //     title: title,
  //     link: link,
  //     image:img
  // } = work;
  return (
    <section id="work">
      <h2>Work</h2>

      <div class="container">
        <section class="card">
          <div class="img-txt">
            <h3>Vinyl Collectors</h3>
          </div>
          <a href="https://github.com/ajpicc3734/Project-2">
            <img
              src="./assets/images/pexels-mike-1181769.jpg"
              alt="vinyl records"
            />
          </a>
        </section>

        <section class="card">
          <div class="img-txt">
            <h3>Trending music</h3>
          </div>
          <a href="https://github.com/ajpicc3734/Group-Project">
            <img
              src="./assets/images/photo-1477233534935-f5e6fe7c1159.avif"
              alt="music"
            />
          </a>
        </section>

        <section class="card">
          <div class="img-txt">
            <h3>Employee Tracker</h3>
          </div>
          <a href="https://github.com/ajpicc3734/Employee-Tracker">
            <img src="./assets/images/office.jpg" alt="office" />
          </a>
        </section>
      </div>
    </section>
  );
}

export default Projects;
