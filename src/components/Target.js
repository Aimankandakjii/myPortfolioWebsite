import React from "react";
import rabbit from "../images/rabbit.png";
import useMousePosition from "./useMousePosition";
const Target = () => {
  const mousePos = useMousePosition();
  return (
    <div className=" text-white m-0  xl:inline-block hidden">
      {/* <div className="text-white mb-0 bg-black w-[100%] px-4z -rotate-[0deg] md:-rotate-[0deg] md:mt-7 lg:px-32">
        <h1 className="font-Akirta px-5 ">
          <spam className="text-yellow-500 md:hidden">try on wide screens</spam>
          <span id="descriptionTttl" className="hidden lg:inline-block">
            . Three
            <spam className="text-yellow-500"> JS </spam> . express
            <spam className="text-yellow-500"> JS </spam>. Venom Tube
            <spam className="text-yellow-500"> JS </spam>. Venom Tube
            <spam className="text-yellow-500"> JS </spam>. JS Venom .
          </span>
        </h1>
      </div> */}
      <div className=" flex flex-col w-[100%] pt-0 bg-black color-al mx-0 md:px-20 md:pb-10   p-5  ">
        <div className=" z-40 flex flex-col md:flex-row">
          <div>
            <h1 className="font-Akirta text-4xl md:text-8xl ">
              Shoot <br></br>the Target !
            </h1>
            <div className="bg-red-700 max-w-[75%] h-2 md:max-w-[22%]"></div>
            <div className=" font-sans py-2 mdtext-2xl md:py-5 md:flex-row">
              <div className="  py-7">
                <b className="font-mono">shoot the Target</b>
                <br></br>
                <span className="font-mono text-black">
                  “Attention is vitality. It connects you with others. It makes
                  you eager. Stay eager.” ― Susan Sontag ++++++++++++++++++++++
                  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                </span>
              </div>
              <div className=" font-sans font-bold ">
                <button
                  className="  bg-red-600 mx-5 rounded-full text-white p-2 pt-1 px-7 
                 m-3 min-w-[100px]"
                  onClick={() =>
                    (window.location = "mailto:aimankandakji898@gmail.com")
                  }
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white max-w-6xl md:w-96 h-96 rounded-full md:mx-52 md:mt-20 p-20 ">
              <div className=" relative">
                <div className="  bg-red-600 w-[10px] h-[10px]  rounded-full blur-[1px] absolute left-[45%] bottom-[45%] z-50"></div>

                <img
                  className="w-[100%] m-auto "
                  style={{
                    transform:
                      window.innerWidth > 768
                        ? `translate(${mousePos.x - 3000 / 18}px , ${
                            mousePos.y / 5 - 560
                          }px`
                        : "none",
                  }}
                  alt="Venom Tube"
                  src={rabbit}
                ></img>
              </div>
            </div>
            <div className="flex justify-center font-Akirta p-8">
              <h1>Scope 𐀏</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
