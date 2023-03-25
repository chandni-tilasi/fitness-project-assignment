import React from "react";
import "./Section3.css";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="slide4Image">
      <motion.div
        className="headingSlide"
        whileInView={{ y: -300 }}
        transition={{ delay: 2 }}
      >
         <div className="heading">
          <h3 className="head1"> Relax your body and mind </h3>
          <h3 className="head2">with our yoga coaches</h3>
        </div>
      </motion.div>

      <motion.div
        className="img-container"
        whileInView={{ opacity: 1,scale:0.8}}
    
        initial={{ opacity:0, rotate: -90,scale:0 }}
        transition={{ delay: 4, type: "spring" }}
      >
        <div class="content-wrapper">
          <div class="child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2u-m7RCHc11srTymEgOJlVlap0LTeNaePw&usqp=CAU" />
            <h2>heading</h2>
            <p>sub heading</p>
          </div>

          <div class="child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2u-m7RCHc11srTymEgOJlVlap0LTeNaePw&usqp=CAU" />
            <h2>heading</h2>
            <p>sub heading</p>
          </div>

          <div class="child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2u-m7RCHc11srTymEgOJlVlap0LTeNaePw&usqp=CAU" />
            <h2>heading</h2>
            <p>sub heading</p>
          </div>

          <div class="child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2u-m7RCHc11srTymEgOJlVlap0LTeNaePw&usqp=CAU" />
            <h2>heading</h2>
            <p>sub heading</p>
          </div>

          <div class="child">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2u-m7RCHc11srTymEgOJlVlap0LTeNaePw&usqp=CAU" />
            <h2>heading</h2>
            <p>sub heading</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section4;
