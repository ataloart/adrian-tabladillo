import React from "react";
import "./portfolio.scss";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";
import { useState } from "react";

import scrollUp from "../../../public/scrollUp.png";
// import selectAtaloArch from "../../../src/assets/selectAtaloarch.png";
// import selectAtaloWeb from "../../../src/assets/selectAtaloweb.png";
import selectAtaloArchLight from "../../../src/assets/selectAtaloarchLight.png";
import selectAtaloArchDark from "../../../src/assets/selectAtaloarchDark.png";
import selectAtaloWebLight from "../../../src/assets/selectAtalowebLight.png";
import selectAtaloWebDark from "../../../src/assets/selectAtalowebDark.png";
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

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { theme, toggleTheme } = useTheme();
  const scrollUpIcon = theme === "light" ? scrollUpLight : scrollUpDark;
  const selectAtaloArch =
    theme === "light" ? selectAtaloArchLight : selectAtaloArchDark;
  const selectAtaloWeb =
    theme === "light" ? selectAtaloWebLight : selectAtaloWebDark;

  const [isHoveringArch, setIsHoveringArch] = useState(false);
  const [isHoveringWeb, setIsHoveringWeb] = useState(false);
  const handleArchHover = () => {
    if (window.innerWidth >= 768) {
      setIsHoveringArch(true);
      setIsHoveringWeb(false);
    } else {
      setIsHoveringArch(false);
      setIsHoveringWeb(false);
    }
  };

  const handleWebHover = () => {
    if (window.innerWidth >= 768) {
      setIsHoveringWeb(true);
      setIsHoveringArch(false);
    } else {
      setIsHoveringArch(false);
      setIsHoveringWeb(false);
    }
  };

  return (
    <motion.div
      className="portfolio"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="scrollUpButton" variants={variants}>
        <img
          src={scrollUpIcon}
          alt="scroll up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </motion.div>
      <motion.div className="textContainer" variants={variants}>
        <h1>Portfolio</h1>
      </motion.div>
      {/* CONTENIDO TOTAL */}
      <motion.div className="portfolioWrapper" variants={variants}>
        {/* CONTENIDO ARQUITECTURA */}

        <motion.div
          className="archWrapper"
          onMouseEnter={handleArchHover}
          onMouseLeave={() => setIsHoveringArch(false)}
          style={{
            width:
              (!isHoveringArch && !isHoveringWeb) || !isInView
                ? "350px"
                : isHoveringArch && !isHoveringWeb
                ? "800px"
                : "350px",
          }}
        >
          <div>
            <h2>Architecture</h2>
          </div>
          <motion.div className="selectBoxArch">
            <div className="selectBoxImg">
              <img
                src={selectAtaloArch}
                alt="portfolio architecture"
                onClick={() => window.open("https://www.behance.net/atalo_art")}
              />
            </div>
            <div className="selectBoxText">
              <h3>atalo studios</h3>
            </div>
          </motion.div>
        </motion.div>
        {/* SEPARADOR */}
        <div className="separator"></div>
        {/* CONTENIDO WEB */}
        <motion.div
          className="webWrapper"
          onMouseEnter={handleWebHover}
          onMouseLeave={() => setIsHoveringWeb(false)}
          style={{
            width: isHoveringWeb && !isHoveringArch ? "800px" : "350px",
          }}
        >
          <div>
            <h2>Web</h2>
          </div>
          <motion.div className="selectBoxWeb">
            <div className="selectBoxImg">
              <img
                src={selectAtaloWeb}
                alt="portfolio web"
                onClick={() => window.open("https://github.com/ataloart/")}
              />
            </div>
            <div className="selectBoxText">
              <h3>atalo web</h3>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
