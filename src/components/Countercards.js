import React, { useState } from "react";
// import data
import { counter } from "../data";
//import countup
import CountUp from "react-countup";
//import scroll triger
import ScrollTrigger from "react-scroll-trigger";

const Countercards = () => {
  //desturcture Counter data
  const { countercards } = counter;
  //
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      {/* cards */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
          {countercards.map((card, cardIndex) => {
            
            // destructure card
            const { icon, title, subtitle, delay, start, end } = card;
            return (
              <div
                key={cardIndex}
                data-aos="zoom-out"
                data-aos-offset="300"
                data-aos-delay="delay"
              >
                <div
                  className={`w-[350px] h-[350px] flex flex-col justify-center items-center p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
                >
                  {/* card icon */}
                  <div className="mb-6 w-28 h-28">
                    <img src={icon} alt="" />
                  </div>
                  {/* card title */}
                  <div className="mb-3 text-[30px] font-medium text-white">
                    <h1 className="mb-3 text-[30px] font-medium text-white">
                      {counterOn && (
                        <CountUp
                          start={start}
                          end={end}
                          duration={4}
                          delay={0}
                        />
                      )}{" "}
                      +
                    </h1>
                    <p className="text-2xl lg:text-4xl text-white ">{title}</p>
                  </div>
                  {/* card subtitle */}
                  <p className="mb-6 text-light">{subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Countercards;
