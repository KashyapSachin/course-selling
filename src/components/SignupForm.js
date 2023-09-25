import React, { useState } from "react";

const SignupForm = () => {
  return (
    <>
      <form
        action=""
        className="flex flex-col space-y-4 "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div>
          <label for="" className="text-sm">
            Your name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className=" bg-gray-100 appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-200  "
          />
        </div>
        <div>
          <label for="" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="   bg-gray-100 appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-200  "
          />
        </div>
        <div>
          <label for="" className="text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="   bg-gray-100 appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-orange-200  "
          />
        </div>
        <button className="self-end btn btn-md  font-bold btn-accent flex justify-center items-center  px-6 py-2 uppercase text-sm">
          Login
        </button>
      </form>
    </>
  );
};

export default SignupForm;
