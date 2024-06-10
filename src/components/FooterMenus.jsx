import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FooterMenus = ({ navtitle, navLink, navActive, setNavActive }) => {
  const handleLink = (links) => {
    setNavActive(links);
  };
  const activeLinks = (
    <div id="footernav">
      <a href={"#" + navLink} onClick={() => handleLink(navLink)}>
        {navtitle}
        <span className="footericon">
          <FaArrowRightLong />
        </span>
      </a>
    </div>
  );

  const hoverLinks = (
    <div id="footernav">
      <a href={"#" + navLink} onClick={() => handleLink(navLink)}>
        {navtitle}
        <span className="footericon">
          <FaArrowRightLong />
        </span>
      </a>
    </div>
  );

  return navActive && navActive === navLink ? activeLinks : hoverLinks;
};

export default FooterMenus;
