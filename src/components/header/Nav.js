// Nav.js

import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";

const Nav = () => {
  const { links } = nav;
  return (
    <nav>
      {" "}
      <ul className="flex gap-x-10 ">
        {links.map((item, index) => {
          // destructure item
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
    </nav>
  );
};

export default Nav;
