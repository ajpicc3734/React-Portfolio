import React from "react";

function Form() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
