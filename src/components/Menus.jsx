import React from "react";
import { FcCursor } from "react-icons/fc";

const Menus = ({ navtitle, navLink, navActive, setNavActive }) => {
  const handleLink = (links) => {
    setNavActive(links);
  };
  const activeLinks = (
    <div id="nav">
      <a href={"#" + navLink} onClick={() => handleLink(navLink)}>
        <span>
          <FcCursor className="fccursor" />
        </span>
        {navtitle}
      </a>
    </div>
  );

  const hoverLinks = (
    <div id="nav">
      <a href={"#" + navLink} onClick={() => handleLink(navLink)}>
        <span>
          <FcCursor className="fccursor" />
        </span>
        {navtitle}
      </a>
    </div>
  );

  return navActive && navActive === navLink ? activeLinks : hoverLinks;
};

export default Menus;
