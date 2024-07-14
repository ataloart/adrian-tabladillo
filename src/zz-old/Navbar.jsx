import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Slidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Adrián Tabladillo López
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/src/assets/linkedin-light.svg" alt="" />
          </a>
          <a href="#">
            <img src="/src/assets/instagram-light.png" alt="" />
          </a>
          <a href="#">
            <img src="/src/assets//github-light.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
