import React from "react";
import About from "../nav/About";
import Contact from "../nav/Contact";
import Skill from "../nav/Skill";
import Story from "../nav/Story";
import Footer from "./Footer";
import styled from "styled-components";

const Contents = () => {
  const ContentsBox = styled.div`
    padding-bottom: 50px;
    border-bottom: 1px solid #999;
  `;
  return (
    <div id="contents">
      <ContentsBox>
        <About />
      </ContentsBox>
      <ContentsBox>
        <Story />
      </ContentsBox>
      <ContentsBox>
        <Skill />
      </ContentsBox>
      <ContentsBox>
        <Contact />
      </ContentsBox>
      <Footer />
    </div>
  );
};

export default Contents;
