import React from "react";

//import aos
import Aos from "aos";
//import aos css
import "aos/dist/aos.css";

//import components
import Hero from "./Hero";
import Counter from "./Counter";
import About1 from "../about/About1";
import About2 from "../about/About2";
import Features from "./Features";
import Courses from "../course/Courses";
import Testimonials from "./Testimonials";
import Cta from "../Cta";

function Home() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="App overflow-hidden">
      <Hero />
      <Counter />
      <About1 />
      <About2 />
      <Features />
      <Courses />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default Home;
