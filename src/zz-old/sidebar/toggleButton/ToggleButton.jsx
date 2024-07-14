/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" heigth="23" viewbox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 10 L 50 10" },
            open: { d: "M 3 30 L 20 10" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 3 25 L 25 25"
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 40 L 50 40" },
            open: { d: "M 3 10 L 20 30" },
          }}
        />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
