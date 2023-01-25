import React from "react";
import Typewriter from "typewriter-effect";
import useMousePosition from "./useMousePosition";

const Hero = () => {
  const mousePos = useMousePosition();
  return (
    <div className="text-black font-Akirta mb-10">
      <div className="max-w-[800px] mt-[96px] w-full f-screen mx-auto text-center flex flex-col justify-center">
        <div
          style={{
            transform:
              window.innerWidth > 768
                ? `translate(${mousePos.x / 30}px,${mousePos.y / 30}px)`
                : "none",
          }}
          className="text-red-600 font-bold p-2 text-left tracking-widest hidden md:inline-block -z-10"
        >
           
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('"Unity Game <b>Dev</b>"')
                .pauseFor(1000)
                .deleteAll()
                .typeString("Backend <b>Dev</b>")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Frontend <b>Dev</b>")

                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div>
          <h1
            style={{
              transform:
                window.innerWidth > 768
                  ? `translate(${mousePos.x / 10 - 100}px,${mousePos.y / 10}px)`
                  : "none",
            }}
            className="md:text-9xl   sm:text-6xl text-center text-5xl font-bold md:py-2 text-akira_expandedsuper_bold lg:text-9xl lg:text-left"
          >
            Aiman Kandakji
          </h1>
        </div>

        <div
          className="p-3 z-50"
          style={{
            transform:
              window.innerWidth > 768
                ? `translate(${mousePos.x / 18}px,${mousePos.y / 18}px)`
                : "none",
          }}
        >
          <div className="">
            <button
              className=" bg-red-600 p-[10px] rounded-full text-white w-[280px] m-5"
              onClick={() => (window.location = "mailto:yourmail@domain.com")}
            >
              Open for offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
