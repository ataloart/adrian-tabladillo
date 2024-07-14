import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import imgDragDrop from "../../assets/DragAndDrop.png";
import imgAbatonCh from "../../assets/PrV_Abaton_Chipre1.jpg";
import imgIkeaKitchen from "../../assets/PrV_Ikea_Kitchen1.jpg";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: imgDragDrop,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Project 2",
    img: imgAbatonCh,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Project 3",
    img: imgIkeaKitchen,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = React.useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "start"],
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
