import "./App.scss";
import Parallax from "./components/parallax/Parallax";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WorkExperience from "./components/workExperience/WorkExperience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import { useState } from "react";
import Links from "./components/sidebar/links/Links";

function App() {
  return (
    <>
      {/* <Cursor /> */}
      {/* <section id="Homepage">
        <Navbar />
        <Hero />
      </section> */}
      <section id="Homepage">
        <div>
          <Hero />
        </div>
      </section>
      <section id="Work Experience">
        <WorkExperience />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About />
      </section>

      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}

      {/* <section>
        <Services />
      </section> */}

      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      {/* <Portfolio /> */}
    </>
  );
}

export default App;
