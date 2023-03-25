import React from "react";
import "./Section1.css";
import video1 from "./pexels-tima-miroshnichenko-5751977.mp4"

const Section1 = () => {
  return <div className="slide1image">
    <video className="video1" muted autoPlay loop>
      <source src={`${video1}`} />
    </video>

    <div className="text-container-slide1">
      <div className="heading"> Bored with your gym routine,</div>
      <div className="sub-heading">
        try working out with BFF
      </div></div>

    <div className="btn-container">
      <div className="btn">Join Now</div>
    </div>
    {/* <a href="#" class="hvr-rectangle-out">Rectangle Out</a> */}
  </div>;
};

export default Section1;
