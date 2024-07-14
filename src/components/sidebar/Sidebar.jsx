import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const lightColor = theme === "light" ? "#222" : "#fff";
  const darkColor = theme === "dark" ? "#222" : "#fff";

  const variants = {
    open: {
      clipPath: "circle(1000px at 70px 50px)",
      background: lightColor,

      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      background: lightColor,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  return (
    // <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    //   <motion.div className="bg" variants={variants}>
    //     <Links />
    //   </motion.div>
    //   <ToggleButton setOpen={setOpen} />
    // </motion.div>

    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
