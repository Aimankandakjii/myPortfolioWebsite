import React from "react";
import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-Akirta ">
      <h1 className="w-full text-3xl font-bold black font-sans">&#8710;.</h1>
      <ul className="hidden md:flex">
        <li className="p-4"></li>
        <li
          className="p-4 mix-blend-difference text-white hidden md:inline-block z-50"
          onClick={navHandler}
        >
          Skillset
        </li>
        <li className="p-2 z-50 ">
          <button
            className="bg-red-600 p-[10px] px-[20px] rounded-full text-white minw-20 "
            onClick={() =>
              (window.location = "mailto:aimankandakji898@gmail.com")
            }
          >
            email
          </button>
        </li>
      </ul>
      <div onClick={navHandler} className="block md:hidden"></div>
      {
        <div
          className={
            !nav
              ? "fixed inline-block left-0 top-0 w-[58%] h-full backdrop-blur-sm ease-in-out duration-[.8s] opacity-[1] z-50 "
              : "fixed left-[-100%] opacity-0"
          }
        >
          <div>
            <ul className="uppercase font-bold p-16">
              Skills
              <ul className="p-4 text-yellow-500">
                . / OOP
                <li>CPP</li>
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
              </ul>
              <div>
                <ul className="p-4 text-red-500">
                  . / Web
                  <li>HTML CSS</li>
                  <li>JS</li>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
              </div>
              <ul className="p-4 text-blue-500">
                . / Apps
                <li>Electron JS</li>
                <li>Unity 3D</li>
                <li>Unity 2D</li>
              </ul>
              <div>
                <ul className="p-4 text-gray-500">
                  . / Design
                  <li>Adobe Photosop</li>
                  <li>Adobe AfterEffects / Premier Pro</li>
                  <li>Blender </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      }
    </div>
  );
}
export default Navbar;
