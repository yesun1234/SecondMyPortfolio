import React, { useContext } from "react";
import { PiFinnTheHuman } from "react-icons/pi";
import styled from "styled-components";
import { DataContext } from "../context/DataProvider";

const About = () => {
  const AboutTop = styled.div`
    width: 200px;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px dashed rgb(249, 219, 239);
    padding-bottom: 3px;
    display: flex;
    margin-bottom: 90px;
  `;
  const AboutBox = styled.div`
    position: relative;
    display: flex;
    wdith: 900px;
  `;
  const AboutBoxP = styled.div`
    width: 600px;
    font-weight: bold;
    font-size: 18px;
  `;
  const AboutBoxImg = styled.div`
    width: 400px;
    position: absoluted;
    bottom: -50px;
    right: 140px;
    opacity: 0.7;
    position: absolute;
  `;
  const { about } = useContext(DataContext);
  console.log(about[0].title);
  console.table(about[1].desc);

  return (
    <div id="about">
      <AboutTop>
        <span className="pifinnthehuman">
          <PiFinnTheHuman />
        </span>
        About
      </AboutTop>
      <AboutBox>
        <AboutBoxP>
          <p>{about[0].title}</p>
          {about[1].desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </AboutBoxP>
        <AboutBoxImg>
          <img src="images\a-man-working-hard-on-laptop-in-mad-frayed-stress-crazy-with-messy-hair-in-transparent-background-png.webp" />
        </AboutBoxImg>
      </AboutBox>
    </div>
  );
};

export default About;
