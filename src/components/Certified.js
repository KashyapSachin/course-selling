import React from "react";
import { counter } from "../data";
const Certified = () => {
  //destructure overview
  const { Certified } = counter;

  return (
    <section>
      <div className="conatiner mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {/* Certified */}
        {Certified.map((item, index) => {
          //destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={delay}>
              {/* Certified Images */}
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certified;
