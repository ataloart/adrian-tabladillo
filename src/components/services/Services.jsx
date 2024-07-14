import "./services.scss";
import { motion, useInView } from "framer-motion";
import imgAtaloViz from "../../assets/Firma_AtaloViz.png";
import { useRef } from "react";
import { useState } from "react";

import Navbar from "../navbar/Navbar";
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
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //animate="animate"
      //whileInView={"animate"}
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="navbar">
        <Navbar />
      </div>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I help you to take your project <br /> to the next level
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={imgAtaloViz} alt="atalo firma" />
          <h1>
            <motion.b whileHover={{ color: "#507963" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            For Your
            <motion.b whileHover={{ color: "#507963" }}> Business</motion.b>
          </h1>
          <button>WHAT WE DO </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray" }}>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
            eos minima eum recusandae laboriosam tenetur, aut, in nam odio
            tempore.
          </p>
          <button> SEE MORE</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray" }}>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
            eos minima eum recusandae laboriosam tenetur, aut, in nam odio
            tempore.
          </p>
          <button> SEE MORE</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray" }}>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
            eos minima eum recusandae laboriosam tenetur, aut, in nam odio
            tempore.
          </p>
          <button> SEE MORE</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray" }}>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
            eos minima eum recusandae laboriosam tenetur, aut, in nam odio
            tempore.
          </p>
          <button> SEE MORE</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
