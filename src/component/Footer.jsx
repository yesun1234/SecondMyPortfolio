import React, { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { DataContext } from "../context/DataProvider";
import FooterMenus from "../components/FooterMenus";

const Footer = () => {
  const { menu } = useContext(DataContext);
  const [navActive, setNavActive] = useState(false);
  return (
    <div id="footer">
      <div className="footertop">
        <div className="footerleft">
          <img src="images/flower2.png" alt="" />
        </div>
        <ul className="footermain">
          {menu.map((item, index) => (
            <li key={index}>
              <FooterMenus
                navtitle={item.name}
                navLink={item.link}
                navActive={navActive}
                setNavActive={setNavActive}
              />
            </li>
          ))}
        </ul>
        <ul className="footerright">
          <li>
            <a href="https://www.instagram.com/pizza0__o/" target="_blank">
              <IoLogoInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009787262604"
              target="_blank"
            >
              <FaFacebook className="facebook" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yesun1234" className="github">
              <BsGithub target="_blank" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footerbottom">
        <span>copyright &copy;</span>
        <span> All Rights Reseved.</span>
      </div>
    </div>
  );
};

export default Footer;
