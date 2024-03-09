import React, { useContext } from "react";

//import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";

// import router
import { BrowserRouter } from "react-router-dom";
//import MOTION framer-motion
import { motion } from "framer-motion";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  //console.log(useContext(CursorContext));
  const {cursorVariants, cursorBG} = useContext(CursorContext)

  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
      {/* cursor */}
      <motion.div
      variants={cursorVariants}
      animate={cursorBG}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full "></motion.div>
    </>
  );
};

export default App;
