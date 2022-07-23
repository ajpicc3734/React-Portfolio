import React from "react";
import "./App.css";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Nav from "../src/components/Nav";
import Projects from "../src/components/Projects";

function App() {
  return (
    <div>
      <main>
        <Nav />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
