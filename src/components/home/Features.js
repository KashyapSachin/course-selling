import React from "react";
// import data
import { features } from "../../data";
// import components
import Cards from "../Cards";

const Features = () => {
  // destructure Features data
  const { title, subtitle } = features;
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* title & subtitle */}
        <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="300"
          >
            {title}
          </h2>
          <p
            className="lead lg:max-w-[350px]"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="400"
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Features;
