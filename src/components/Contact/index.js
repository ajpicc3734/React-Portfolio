import React, { useState } from "react";

function Form() {

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("errorMessage", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h2 id="contact">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            placeholder="Your Name"
            type="text"
            name="name"
            onBlur={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            placeholder="Your Message"
            type="text"
            name="message"
            onBlur={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="resume">
        <a
          href={require("../../assets/docs/WebDev Resume 2022 (1).pdf")}
          target="_blank"
          download
        >
          Download Resume
        </a>
      </div>

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
