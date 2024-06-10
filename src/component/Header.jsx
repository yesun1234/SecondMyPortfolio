import React, { useState } from "react";
import { FaBars, FaHamsa } from "react-icons/fa";
import styled from "styled-components";
import MiniNav from "./MiniNav";

const Header = () => {
  const HeaderH = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    font-weight: 800;
    font-size: 30px;
    text-align: center;
    line-height: 0.5;
  `;
  const Headerp = styled.div`
    font-weight: 700;
    text-align: center;
    margin-bottom: 90px;
  `;
  const [navActive, setNavActive] = useState(false);
  return (
    <div id="header">
      <FaHamsa size="55" color="rgb(249, 219, 239)" className="fahamsa" />
      <HeaderH>
        <p>YESUN'S</p>
        <p>PORTFOLIO SITE</p>
      </HeaderH>
      <Headerp>
        <p>
          I'm new full-stack developer. I mainly use java, html, css,
          javascript, react. Welcome to my portfolio site.{" "}
        </p>
      </Headerp>
      <span className="fabars">
        <button
          onClick={() => {
            navActive === false ? setNavActive(true) : setNavActive(false);
          }}
        >
          <FaBars />
        </button>
      </span>
      {navActive === true ? <MiniNav /> : null}
    </div>
  );
};

export default Header;
