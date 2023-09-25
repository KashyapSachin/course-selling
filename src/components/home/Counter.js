import React from "react";

import Countercards from "../Countercards";

const Counter = () => {
  return (
    <section
      className=" lg:min-h-[300px] min-h-[350px]
     bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[50px]"
    >
      <div
        className="flex justify-center
     overflow-hidden"
      >
        <Countercards />
      </div>
    </section>
  );
};

export default Counter;
