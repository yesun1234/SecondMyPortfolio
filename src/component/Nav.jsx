import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import Menus from "../components/Menus";

const Nav = () => {
  const { menu } = useContext(DataContext);
  const [navActive, setNavActive] = useState(false);

  return (
    <div id="nav" className="navBar">
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <Menus
              navtitle={item.name}
              navLink={item.link}
              navActive={navActive}
              setNavActive={setNavActive}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
