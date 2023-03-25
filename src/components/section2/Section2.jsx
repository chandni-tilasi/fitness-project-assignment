import React from "react";
import "./Section2.css";
import video2 from "./pexels-tima-miroshnichenko-5319099.mp4";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="slide2Image">
      {/* <motion.video
        whileInView={{ scale: 0, opacity: 0 }}
        initial={{ scale: 1 }}
        transition={{ delay: 5 }}
        className="video2"
        muted
        autoPlay
        loop
      >
        <source src={`${video2}`} />
      </motion.video> */}
    <video className="video2"
        muted
        autoPlay
        loop>
    <source src={`${video2}`} />
    </video>
      <motion.div
        whileInView={{ y: -250 }}
        transition={{ delay: 3 }}
        className="text-container-slide1"
      >
        <div className="heading">
          <h3 className="head1"> Workout Program </h3>
          <h3 className="head2">made for you</h3>
          
        </div>
        <div  className="animate-subheaing">
          To help kickstart your creativity (and your blog) we’ve come up with 19
        Fitness content ideas to get you started.
          </div>
      </motion.div>
      {/* <motion.div
        className="animate-subheaing"
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ delay: 4, type: "spring" }}
      >
        To help kickstart your creativity (and your blog) we’ve come up with 19
        Fitness content ideas to get you started.
      </motion.div> */}
      <motion.div
        className="animation-part"
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "spring" }}
      >
        <div className="textImg-container div1">
          <div className="text"> Weight Management </div>
        </div>
        <div className="textImg-container div2">
          <div className="text"> Weight Management </div>
        </div>
        <div className="textImg-container div3">
          <div className="text"> Weight Management </div>
        </div>
        <br />
        <div className="textImg-container div1">
          <div className="text"> Weight Management </div>
        </div>
        <div className="textImg-container div2">
          <div className="text"> Weight Management </div>
        </div>
        <div className="textImg-container div3">
          <div className="text"> Weight Management </div>
        </div>
      </motion.div>

      <motion.div
        className="left-container"
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ delay: 5, type: "spring" }}
      >
        <h2>Weight Managemet</h2>
        <div className="para">
          Try coming up with someone you know or have met in the past who fits
          your target market. Keep that person in mind every single time you sit
          down to write a piece of content. Always ask yourself if what you’re
          writing is relevant to that person. This will help you determine
          whether your message is serving your niche.
        </div>
      </motion.div>
    </div>
  );
};

export default Section2;
