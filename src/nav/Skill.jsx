import React, { useEffect } from "react";

const Project = () => {
  const totalMinwon = 95; // 예시 값

  useEffect(() => {
    const donutElements = document.querySelectorAll(".html");
    let t4 = 0;

    const donutAnimation = setInterval(() => {
      t4 += 1;
      donutElements.forEach((donut) => {
        donut.dataset.percent = t4;
        donut.style.background = `conic-gradient(#3F8BC9 0% ${t4}%, #F2F2F2 ${t4}% 100%)`;
      });
      if (t4 >= totalMinwon) {
        clearInterval(donutAnimation);
      }
    }, 10);

    // Cleanup interval on component unmount
    return () => clearInterval(donutAnimation);
  }, [totalMinwon]); // totalMinwon 값이 변경될 때마다 실행

  const totalMinwons = 90;

  useEffect(() => {
    const donutElements = document.querySelectorAll(".css");
    let t4 = 0;

    const donutAnimation = setInterval(() => {
      t4 += 1;
      donutElements.forEach((donut) => {
        donut.dataset.percent = t4;
        donut.style.background = `conic-gradient(#3fc956 0% ${t4}%, #F2F2F2 ${t4}% 100%)`;
      });
      if (t4 >= totalMinwons) {
        clearInterval(donutAnimation);
      }
    }, 10);

    return () => clearInterval(donutAnimation);
  }, [totalMinwon]);

  const totalMinwonssss = 80;

  useEffect(() => {
    const donutElements = document.querySelectorAll(".bootstrap");
    let t4 = 0;

    const donutAnimation = setInterval(() => {
      t4 += 1;
      donutElements.forEach((donut) => {
        donut.dataset.percent = t4;
        donut.style.background = `conic-gradient(#f182e4 0% ${t4}%, #F2F2F2 ${t4}% 100%)`;
      });
      if (t4 >= totalMinwonssss) {
        clearInterval(donutAnimation);
      }
    }, 10);

    return () => clearInterval(donutAnimation);
  }, [totalMinwon]);

  const totalMinwonss = 80;

  useEffect(() => {
    const donutElements = document.querySelectorAll(".js");
    let t4 = 0;

    const donutAnimation = setInterval(() => {
      t4 += 1;
      donutElements.forEach((donut) => {
        donut.dataset.percent = t4;
        donut.style.background = `conic-gradient(#eac520 0% ${t4}%, #F2F2F2 ${t4}% 100%)`;
      });
      if (t4 >= totalMinwonss) {
        clearInterval(donutAnimation);
      }
    }, 10);

    return () => clearInterval(donutAnimation);
  }, [totalMinwon]);

  const totalMinwonsss = 70;

  useEffect(() => {
    const donutElements = document.querySelectorAll(".react");
    let t4 = 0;

    const donutAnimation = setInterval(() => {
      t4 += 1;
      donutElements.forEach((donut) => {
        donut.dataset.percent = t4;
        donut.style.background = `conic-gradient(#ea6720 0% ${t4}%, #F2F2F2 ${t4}% 100%)`;
      });
      if (t4 >= totalMinwonsss) {
        clearInterval(donutAnimation);
      }
    }, 10);

    return () => clearInterval(donutAnimation);
  }, [totalMinwon]);

  return (
    <div id="skill">
      <div className="title">Skill</div>
      <div className="skillList">
        <ul>
          <li>
            <div className="donut html" data-percent="85.4"></div>
          </li>
          <li>
            <div className="donut css" data-percent="85.4"></div>
          </li>
          <li>
            <div className="donut js" data-percent="85.4"></div>
          </li>
          <li>
            <div className="donut react" data-percent="85.4"></div>
          </li>
          <li>
            <div className="donut bootstrap" data-percent="85.4"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
