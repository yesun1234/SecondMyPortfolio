import React, { useRef } from "react";
import styled from "styled-components";
import { GoMail } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandKakoTalk } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "yeseonan",
        "template_jr0t6sd",
        form.current,
        "t_vKKY-0dXFexB0yI"
      )
      .then(
        (result) => {
          alert("성공적으로 이메일이 전송되었습니다.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };

  const Contac = styled.div`
    background-color: #fff;
    color: #666;
    padding: 50px 50px 50px 30px;
  `;
  const Title = styled.div`
    width: 200px;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px dashed #000;
    padding-bottom: 3px;
    mmargin-bottom: 20px;
  `;
  return (
    <>
      <Contac id="contact">
        <Title>Contact Me</Title>
        <div className="contact">
          <div className="contactleft">
            <img
              src="images/me.jpeg"
              alt="의자에 앉아서 한손에 커피를 들고 여유롭게 노트북을 하는 여자 흑백 그림"
            />
          </div>
          <div className="contactright">
            <h1>CONTACT ME!</h1>
            <ul>
              <li>
                <span>
                  <GoMail />
                </span>{" "}
                : <a href="mailto:dptjs1106@naver.com"> dptjs1106@naver.com</a>{" "}
              </li>
              <li>
                <span>
                  <BsFillTelephoneFill />
                </span>
                <a href="sms:01041164661"> : 010-4116-4661</a>
              </li>
              <li>
                <span className="contactIcon">
                  <FaGithub />
                </span>{" "}
                <a href="https://github.com/yesun1234">
                  : https://github.com/yesun1234{" "}
                </a>
              </li>
              <li>
                <span className="contactIcon">
                  <TbBrandKakoTalk />
                </span>{" "}
                : 2016am
              </li>
            </ul>
            <form ref={form} onSubmit={sendEmail}>
              <h4>name</h4>
              <input
                type="text"
                name="ask_title"
                placeholder="ex)안예선, Minsu ..등"
                maxLength={20}
                required
              />
              <h4>Email Address</h4>
              <input
                type="email"
                name="user_email"
                placeholder="ex)abcd@naver.com"
                required
              />
              <h4>Message</h4>
              <textarea
                name="ask_message"
                placeholder="제목을 입력해주세요."
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Contac>
    </>
  );
};

export default Contact;
