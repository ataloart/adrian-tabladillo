import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
    </div>
  );
};

export default Navbar;
