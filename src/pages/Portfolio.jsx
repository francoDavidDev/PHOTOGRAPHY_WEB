import React,{useContext} from "react";
// import image
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
//import links
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions.js";
// import cursor context
import { CursorContext } from "../context/CursorContext.jsx";

const Portfolio = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 ">
          {/*text */}
          <motion.div 
             initial={{ opacity: 0, y: "-80%" }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: "-80%" }}
             transition={transition1}
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
          className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis perspiciatis dignissimos iusto sunt repudiandae.
              <b> Commodi, asperiores </b>
              ea nam sequi vero libero iusto minima qui officiis numquam iste
              modi sint corporis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eaque odit! Nam deserunt necessitatibus accusantium.
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </motion.div  >
          {/* image grid */}
          <div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          className="grid grid-cols-2 lg:gap-2 ">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={Image1}
                alt="Image1"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={Image2}
                alt="Image2"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={Image3}
                alt="Image3"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={Image4}
                alt="Image4"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
