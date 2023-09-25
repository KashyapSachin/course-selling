import React from "react";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
// import Stepper from "../components/Stepper";
// import Stepper from "../components/StepperControl";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <>
      <div className="flex w-full  min-h-screen justify-center items-center pt-32">
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-6  md:space-y-0 bg-cta w-full max-w-6xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1
                className=" text-white font-bold text-8xl tracking-wide "
                data-aos="fade-down"
                data-aos-delay="200"
              >
                SignUp
              </h1>
              <p
                className="pt-2 text-cyan-100 text-sm "
                data-aos="fade-down"
                data-aos-delay="400"
              >
                "We're here to answer any questions you have about our
                ,services, or products. Don't hesitate to reach out!",
              </p>
            </div>
            <div
              className="flex flex-col space-y-6"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <div className="inline-flex  space-x-2 items-center">
                <IoMdCall className="text-teal-300 text-xl" />{" "}
                <span> +91 9410727366/8534830713</span>
              </div>
              <div className="inline-flex  space-x-2 items-center">
                <GrMail className="text-teal-300 text-xl" />{" "}
                <span> millenniumcomputer05@gmail.com</span>
              </div>
              <div className="inline-flex  space-x-2 items-center">
                <GoLocation className="text-teal-300 text-xl" />{" "}
                <span> Near Bus Stop(Sahaspur),Dehradun,Uttarakhand,India</span>
              </div>
            </div>
            <div
              className=" flex space-x-4 text-lg "
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <a>
                <BsFacebook />
              </a>
              <a>
                <BsInstagram />
              </a>
              <a>
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div
            className=" bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-82"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* <Stepper /> */}
            <SignupForm />
            {/* <StepperControl /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
