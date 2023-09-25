import React, { useState } from "react";
// import data
import { courses } from "../../data";
// import icons
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Course = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure course
  const { title, cards } = courses;
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="h2 mb-10 lg:mb-20 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        {/* cards */}
        <div className=" flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map((card, cardIndex) => {
            // destructure card
            const { icon, services, btnText, delay } = card;
            // card
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="300"
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? "bg-white shadow-2xl"
                      : "border border-grey"
                  } w-[350px] h-[525px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  {/* card icon */}
                  <div className="mb-8">
                    <img src={icon} alt="" className=" h-64" />
                  </div>
                  <div className="flex flex-col gap-y-2 mb-6">
                    {services.map((service, index) => {
                      // destructure service
                      const { name } = service;
                      return (
                        <div
                          className="flex items-center gap-x-[10px]"
                          key={index}
                        >
                          <HiCheck className="text-light" />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      cardIndex === index
                        ? "bg-accent hover:bg-accentHover text-white"
                        : "border border-accent text-accent"
                    } btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course;
