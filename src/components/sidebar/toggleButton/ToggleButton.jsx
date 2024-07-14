/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./toggleButton.scss";

import { useTheme } from "../../../common/ThemeContext";

const ToggleButton = ({ setOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const lightColor = theme === "light" ? "#222" : "#fff";
  const darkColor = theme === "dark" ? "#222" : "#fff";

  const imgVariants = {
    initial: {
      x: 0,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.button
      className="toggleButton"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.svg width="23" heigth="23" viewbox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          // stroke="black"
          stroke={lightColor}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 15 L 50 15" },
            open: { d: "M 3 45 L 20 10" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke={lightColor}
          strokeLinecap="round"
          d="M 3 27 L 25 27"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path
          strokeWidth="3"
          stroke={lightColor}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 40 L 50 40" },
            open: { d: "M 3 10 L 20 45" },
          }}
        />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </motion.svg>
    </motion.button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
