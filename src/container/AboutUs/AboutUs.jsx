import React from "react";

import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.m} alt="m" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about+spoon" className="spoon__img" />
        <p className="p__opensans">food, substance consisting essen, carbohydrate, fat, and other
          nutrients used in the body of an organism to sustain growth and vital
          processes and to furnish energy.
        </p>
        <br></br>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about+spoon" className="spoon__img" />
        <p className="p__opensans">
          food, substance consisting essen, carbohydrate, fat, and other
          nutrients used in the body of an organism to sustain growth and vital
          processes and to furnish energy.
        </p>
        <br></br>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
