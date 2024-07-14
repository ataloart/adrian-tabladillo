import React from "react";
import "./workExperience.scss";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";
import { useState } from "react";

import imgAtaloViz from "../../assets/Firma_AtaloViz.png";

import companyPpg from "../../../public/companyPpg.png";
import companyF5 from "../../../public/companyF5.png";
import companyAtalo from "../../../public/companyAtalo.jpg";
import companyPanoramico from "../../../public/companyPanoramyco.png";
import companyFactorySchool from "../../../public/companyFactorySchool.jpg";
import companyIkea from "../../../public/companyIkea.jpg";
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
const WorkExperience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { theme, toggleTheme } = useTheme();
  const scrollUpIcon = theme === "light" ? scrollUpLight : scrollUpDark;

  const [companyImage1, setCompanyImage1] = useState(companyPpg);
  const [companyImage2, setCompanyImage2] = useState(companyAtalo);
  const [companyImage3, setCompanyImage3] = useState(companyFactorySchool);
  const [companyImage4, setCompanyImage4] = useState(companyIkea);
  const handleMouseEnter = (index, companyName) => {
    if (index === 1) {
      if (companyName === "PPG studios") {
        setCompanyImage1(companyPpg);
      } else if (companyName === "Factoria 5 Visualizacion") {
        setCompanyImage1(companyF5);
      }
    } else if (index === 2) {
      if (companyName === "atalo studios") {
        setCompanyImage2(companyAtalo);
      } else if (companyName === "Panoram&Co") {
        setCompanyImage2(companyPanoramico);
      }
    } else if (index === 4) {
      if (companyName === "Ikea") {
        setCompanyImage4(companyIkea);
      } else if (companyName === "Factoria 5 Visualizacion") {
        setCompanyImage4(companyF5);
      } else if (companyName === "atalo studios") {
        setCompanyImage4(companyAtalo);
      }
    }
  };

  return (
    <motion.div
      className="workExperience"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="scrollUpButton" variants={variants}>
        <img
          src={scrollUpIcon}
          alt="scroll down"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </motion.div>
      <motion.div className="textContainer" variants={variants}>
        <h1>Work Experience</h1>
      </motion.div>

      <motion.div className="workWrapper" variants={variants}>
        {/* ARCHITECT AND SENIOR 3D ARTIST */}
        <motion.div className="listContainer" variants={variants}>
          <div className="companyImg">
            <img
              src={companyImage1}
              alt="company architect and senior 3d artist"
            />
          </div>

          <motion.div className="box">
            <h2>ARCHITECT AND SENIOR 3D ARTIST</h2>

            <motion.div className="companyText">
              <motion.h3
                onClick={() => window.open("https://ppgstudios.com/")}
                onMouseEnter={() => handleMouseEnter(1, "PPG studios")}
              >
                PPG studios
              </motion.h3>

              <p>mar.2022 - Present</p>
              <br />
              <motion.h3
                onClick={() => window.open("https://factoria5.es/es/")}
                onMouseEnter={() =>
                  handleMouseEnter(1, "Factoria 5 Visualizacion")
                }
                className="hover-effect"
              >
                Factoría 5 Visualización
              </motion.h3>
              <p>mar.2020 - nov.2021</p>
              <br />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* DESIGNER  DIRECTOR */}
        <motion.div className="listContainer" variants={variants}>
          <div className="companyImg">
            <img
              src={companyImage2}
              alt="company architect and senior 3d artist"
            />
          </div>

          <motion.div className="box">
            <h2>DESIGNER DIRECTOR</h2>
            <motion.div className="companyText">
              <motion.h3
                onClick={() => window.open("https://www.behance.net/atalo_art")}
                onMouseEnter={() => handleMouseEnter(2, "atalo studios")}
              >
                atalo studios
              </motion.h3>
              <p>mar.2022 - Present</p>
              <br />

              <motion.h3
                onClick={() => window.open("https://panoramyco.es/")}
                onMouseEnter={() => handleMouseEnter(2, "Panoram&Co")}
              >
                Panoram&Co.
              </motion.h3>
              <p>nov.2020 - mar.2022</p>
              <br />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* ARCHITECTURAL VISUALIZATION TEACHER */}
        <motion.div className="listContainer" variants={variants}>
          <div className="companyImg">
            <img
              src={companyImage3}
              alt="company architect and senior 3d artist"
            />
          </div>

          <motion.div className="box">
            <h2>ARCHITECTURAL VISUALIZATION TEACHER</h2>

            <motion.div className="companyText">
              <motion.h3
                onClick={() => window.open("https://thefactoryschool.com/")}
                onMouseEnter={() => handleMouseEnter(3, "The Factory School")}
              >
                The Factory School
              </motion.h3>

              <p>may.2021 - mar.2022</p>
              <br />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* 3D ARTIST AND INTERIOR DESIGNER */}
        <motion.div className="listContainer" variants={variants}>
          <div className="companyImg">
            <img src={companyImage4} alt="3D ARTIST AND INTERIOR DESIGNER" />
          </div>

          <motion.div className="box">
            <h2>3D ARTIST AND INTERIOR DESIGNER</h2>

            <motion.div className="companyText">
              <motion.h3
                onClick={() => window.open("https://www.ikea.es/")}
                onMouseEnter={() => handleMouseEnter(4, "Ikea")}
              >
                IKEA Spain
              </motion.h3>

              <p>un.2018 - apr.2019</p>
              <br />
              <motion.h3
                onClick={() => window.open("https://factoria5.es/es/")}
                onMouseEnter={() =>
                  handleMouseEnter(4, "Factoria 5 Visualizacion")
                }
              >
                Factoría 5 Visualización
              </motion.h3>
              <p>sep.2018 - mar.2020</p>
              <br />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
