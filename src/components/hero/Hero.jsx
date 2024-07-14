import heroImg from "../../assets/hero-img.png";
import scrollDown from "../../../public/scrollDown.png";
import "./hero.scss";
import { motion, useInView, useScroll } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../../public/iconSun.png";
import moon from "../../../public/iconMoon.png";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramLight from "../../assets/instagram-light.png";
import instagramDark from "../../assets/instagram-dark.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import contactLight from "../../assets/contact-light.png";
import contactDark from "../../assets/contact-dark.png";
import CVLight from "../../assets/cv-light.png";
import scrollDownLight from "../../../public/scrollDownLight.png";
import scrollDownDark from "../../../public/scrollDownDark.png";

import Navbar from "../navbar/Navbar";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";

const textVariants = {
  initial: {
    x: -500,
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};
const imgVariants = {
  initial: {
    x: 500,
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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-230%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
      duration: 15,
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const contactIcon = theme === "light" ? contactLight : contactDark;
  const scrollDownIcon = theme === "light" ? scrollDownLight : scrollDownDark;

  {
    /* Hide Cookies */
  }
  const [showCookies, setShowCookies] = useState(true);

  const handleAccept = () => {
    setShowCookies(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        handleAccept();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.img
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="dayLightMode"
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />

        <div className="navBar">
          <Navbar />
        </div>

        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={textVariants} className="social">
            <motion.a
              href="https://www.linkedin.com/in/adriantabladillo"
              target="_blank"
            >
              <img src={linkedinIcon} alt="" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/atalo_art/"
              target="_blank"
            >
              <img src={instagramIcon} alt="" />
            </motion.a>
            <motion.a href="https://github.com/ataloart" target="_blank">
              <img src={githubIcon} alt="" />
            </motion.a>
          </motion.div>
          <motion.h1 variants={textVariants}>Adrián Tabladillo</motion.h1>
          <motion.h2 variants={textVariants}>Architect | 3D Artist</motion.h2>
          <motion.div className="aboutHero" variants={textVariants}>
            <motion.a>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={100}
                offset={-50}
              >
                <img src={contactIcon} alt="" />
              </ScrollLink>
            </motion.a>

            <motion.a>
              <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
                <img src={CVLight} alt="" />
              </ScrollLink>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="imageContainer"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <img src={heroImg} alt="hero img" />
        </motion.div>
      </div>

      {/* SCROLL GIFT ICON */}
      <motion.div>
        <motion.img
          className="scrollButton"
          variants={textVariants}
          animate="scrollButton"
          src={scrollDownIcon}
        ></motion.img>
      </motion.div>

      {/* SLIDING TEXT */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Architecture, 3D art, web development,
      </motion.div>

      {/* cookies */}
      {showCookies && (
        <motion.div
          className="cookies"
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
        >
          <p>
            We use our own and third party cookies. If you accept or continue
            browsing, we consider that you accept their use.
          </p>
          <motion.div className="cookiesButton">
            <button onClick={handleAccept}>Accept</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
