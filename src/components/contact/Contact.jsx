import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { theme, toggleTheme } = useTheme();
  const scrollUpIcon = theme === "light" ? scrollUpLight : scrollUpDark;
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e, formRef) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ncbfl69", "template_4fy12p9", formRef.current, {
        publicKey: "Vh7GkyLSHlfJhys33",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
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
        <h1>Contact</h1>
      </motion.div>

      <div className="formContainer">
        <motion.form
          className="workExperience"
          variants={variants}
          initial="initial"
          ref={formRef}
          animate={isInView ? "animate" : "initial"}
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail(e, formRef);
          }}
        >
          <input type="text" required placeholder="Name" name="name" />

          <input type="email" required placeholder="Email" name="email" />

          <textarea rows={7} placeholder="Message" name="message"></textarea>

          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={(e) => sendEmail(e, formRef)} // Pass the formRef as an argument
          >
            Submit
          </motion.button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};
export default Contact;
