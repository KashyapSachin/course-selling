import React from "react";
// import data
import { copyright } from "../data";
import { Link } from "react-router-dom";

const Copyright = () => {
  // destructure copyright data
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
    >
      {/* links */}
      <div className="flex gap-x-6">
        <Link
          to={link1.href}
          className="hover:text-accent transition cursor-pointer"
        >
          {link1.name}
        </Link>
      </div>
      {/* copyright text */}
      <div>{copyText}</div>
      {/* social icons */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          // destructure icon
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
