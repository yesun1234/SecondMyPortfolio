import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataProvider'
import Menus from '../components/Menus';

const MiniNav = () => {
    const { menu } = useContext(DataContext);
    const [navActive, setNavActive] = useState(false);
  return (
    <div id="navs">
    <ul>
    {
     menu.map((item, index)=>(
        <li key={index}>
           <Menus 
              navtitle={item.name} 
              navLink={item.link} 
              navActive={navActive} 
              setNavActive={setNavActive} /> 
        </li>
     ))
   } 
   </ul> 
</div>
  )
}

export default MiniNav