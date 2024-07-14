import { motion } from "framer-motion";
import { useTheme } from "../../../common/ThemeContext";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = [
    "Homepage",
    "Work Experience",
    "Portfolio",
    "Contact",
    "About",
  ];

  const { theme, toggleTheme } = useTheme();
  const lightColor = theme === "light" ? "" : "#fff";
  const darkColor = theme === "dark" ? "#222" : "#fff";

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          style={{ color: theme === "light" ? "#fff" : "#222" }}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
