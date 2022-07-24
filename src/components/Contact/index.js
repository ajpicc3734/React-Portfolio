import React, { useState } from "react";

function Form() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let content = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(content),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    console.log(content);
  };
  return (
    <section>
      <h2 id="contact">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input placeholder="Your Name" type="text" name="name" />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input placeholder="Your Email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            placeholder="Your Message"
            type="text"
            name="message"
          ></textarea>
        </div>
        <button type="submit">{status}</button>
      </form>

      <div>
        <ul class="contact-container">
          <li>
            <h3>Email</h3>
            <a href="mailto:ajpicc3734@gmail.com">
              <img
                class="contact-img"
                src={require("../../assets/images/mail.png")}
                alt="mail"
              />
            </a>
          </li>

          <li>
            <h3>GitHub</h3>
            <a href="https://github.com/ajpicc3734">
              <img
                class="contact-img"
                src={require("../../assets/images/GitHub-Mark-64px.png")}
                alt="github"
              />
            </a>
          </li>
          <li>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/andrew-piccolo-4930835b?trk=people-guest_people_search-card">
              <img
                class="contact-img"
                src={require("../../assets/images/new-linkedin-logo-white-black-png.png")}
                alt="linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Form;
