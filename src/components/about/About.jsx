import React from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import scrollUpLight from "../../../public/scrollUpLigth.png";
import scrollUpDark from "../../../public/scrollUpDark.png";

const variants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { theme, toggleTheme } = useTheme();
  const scrollUpIcon = theme === "light" ? scrollUpLight : scrollUpDark;

  const handleScroll = (e) => {
    e.preventDefault();
    const scrollAmount = Math.min(Math.max(-e.deltaY, -1), 1) * 50; // Adjust scrolling speed

    const maxScrollDistance = 200; // Adjust the maximum scroll distance
    const scrollDistance = Math.min(
      scrollAmount * maxScrollDistance,
      maxScrollDistance
    ); // Limit the scroll distance

    ref.current.scrollTo({
      top: ref.current.scrollTop + scrollDistance, // Adjust the scrolling distance
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      onWheel={handleScroll}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <h1>About</h1>
      </motion.div>

      <motion.div className="aboutWrapper" variants={variants}>
        <p className="aboutTextSub">
          I am passionate about architecture, art, design, and new technologies.
          This passion has driven me to build a professional career in the
          architecture sector, specializing as a designer and 3D specialist.
        </p>
        <br />
        <p className="aboutTextSub">
          Currently, I work as an architect and 3D artist at PPG Studios, where
          we focus on the visual aspects of architectural projects. Our work
          adds significant value to developments for prominent companies such as
          AQ Acentor, Metrovacesa, Porcelanosa, and Realia, among others.
        </p>
        <br />
        <p className="aboutTextSub">
          In addition to my full-time role, I undertake independent
          architectural and 3D design projects. I also implement design and web
          development strategies to enhance the visibility and reach of
          individuals and companies in the real estate sector.
        </p>
        <br />
        {/* WORK EXPERIENCE */}
        <p className="aboutTextMain">Working Experience</p>
        <br />
        <p className="aboutTextSub">
          Architect and Senior 3D Artist <br />
          PPG studios
        </p>
        <p className="aboutTextP">2022 - Present </p>
        <br />
        <p className="aboutTextSub">
          Designer Director
          <br />
          atalo
        </p>
        <p className="aboutTextP">2014 - Present</p>
        <br />
        <p className="aboutTextSub">
          Architectural Visualization teacher
          <br />
          The Factory School
        </p>
        <p className="aboutTextP">2021 - 2022 VR</p>
        <br />
        <p className="aboutTextSub">
          Director / Archviz
          <br />
          Panoram&Co
        </p>
        <p className="aboutTextP"> 2020 - 2022 </p>
        <br />
        <p className="aboutTextSub">
          Architect / Senior CG Artist
          <br />
          Factoría 5 Visualización{" "}
        </p>
        <p className="aboutTextP"> 2018 - 2021</p>
        <br />
        <p className="aboutTextSub">
          kitchen & dining co-worker
          <br />
          IKEA España
        </p>
        <p className="aboutTextP">2018 - 2019 </p>
        <br />
        <p className="aboutTextSub">
          Architect
          <br />
          Martín Escanciano Arquitectos{" "}
        </p>
        <p className="aboutTextP">2016 - 2017</p>
        <br />
        {/* PUBLICATIONS */}
        <p className="aboutTextMain">Publications</p>
        <br />
        <p className="aboutTextSub">
          Ensoñación y Belleza
          <br />
          Huerga & Fierro editores
        </p>
        <p className="aboutTextP">2024</p>
        <br />
        <p className="aboutTextSub">
          Ambite. Propuestas bioclimáticas en el espacio público
          <br />
          Instituto Juan de Herrera
        </p>
        <p className="aboutTextP">2019</p>
        <br />
        <p className="aboutTextSub">
          Talamanca de Jarama. Propuestas bioclimáticas en el espacio público
          <br />
          Universidad Politécnica de Madrid
        </p>
        <p className="aboutTextP">2019</p>
        <br />
        <p className="aboutTextSub">
          El modelo háptico de la Capilla de la Luz de Tadao Ando
          <br />
          Ando Archivo Digital UPM
        </p>
        <p className="aboutTextP">2017</p>
        <br />
        {/* COMPANIES  */}
        <p className="aboutTextMain">Companies I have collaborated with </p>
        <br />
        <p className="aboutTextP">
          Ábaton
          <br />
          Acciona
          <br /> Aedas homes
          <br /> AQ Acentor
          <br /> ikos Resorts
          <br /> intu
          <br /> metrovacesa
          <br /> Porcelanosa
          <br /> Rockwell Group
          <br /> WDCA Studio
        </p>
        <br />

        {/* EDUCATION  */}
        <p className="aboutTextMain">Education </p>
        <br />
        <p className="aboutTextSub">
          Web Design and Development with HTML5, CSS3 and JavaScript
          <br />
          UNED
        </p>
        <p className="aboutTextP">2023-2024</p>
        <br />
        <p className="aboutTextSub">
          Master in Virtual Reality for Architecture
          <br />
          The Factory School
        </p>
        <p className="aboutTextP">2019 - 2021</p>
        <br />
        <p className="aboutTextSub">
          Master in Professional Architectural Visualization
          <br />
          The Factory School
        </p>
        <p className="aboutTextP">2017 - 2018</p>
        <br />
        <p className="aboutTextSub">
          Architecture degree
          <br />
          ETSAM (UPM)
        </p>
        <p className="aboutTextP">2010 - 2016</p>
        <br />
        {/* SKILLS  */}
        <p className="aboutTextMain">Education </p>
        <br />
        <p className="aboutTextP">
          AutoCAD <br />
          3DS MAX <br />
          Unreal Engine <br />
          Corona Renderer
          <br />
          Vray
          <br />
          itoo Software
          <br />
          SiNi Software
          <br />
          Photoshop
          <br />
          After Effects <br />
          HTML
          <br />
          CSS
          <br />
          JavaScript
          <br />
          React
          <br />
        </p>
        <br />

        {/* CREDITS  */}
        <p className="aboutTextMain">Credits </p>
        <br />
        <p className="aboutTextSub">Adrián Tabladillo López</p>
      </motion.div>

      <motion.div className="scrollUpButton" variants={variants}>
        <img
          src={scrollUpIcon}
          alt="scroll up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
