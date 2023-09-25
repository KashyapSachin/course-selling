import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";

const MobileNav = () => {
  const { links } = nav;
  return (
    <div className="backdrop-blur-sm w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {links.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <Link
                to={href}
                className="hover:text-accent transition cursor-pointer"
              >
                {" "}
                {name}{" "}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
