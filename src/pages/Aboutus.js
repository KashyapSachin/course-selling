import React from "react";
import About3 from "../components/about/About3";
import About1 from "../components/about/About1";
import About4 from "../components/about/About4";
import About5 from "../components/about/About5";
import About2 from "../components/about/About2";
import About6 from "../components/about/About6";
import About7 from "../components/about/About7";

const Aboutus = () => {
  return (
    <>
      <About1 />
      <About4 />
      <About3 />
      <About5 />
      <h2
        className="h2 mb-10 lg:mb-20 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        About online exam & result
      </h2>
      <About2 />
      <About6 />
      <About7 />
    </>
  );
};

export default Aboutus;
