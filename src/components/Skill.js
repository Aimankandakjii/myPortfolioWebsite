import React from "react";
import Three from "./Three";
const Skill = (props) => {
  const skillInfo = props.skillInfo;
  return (
    <div className="text-white m-0  minh-[500px]">
      <div className=" flex flex-col  w-[100%] pt-20 bg-black color-al mx-0 md:p-14  p-5  ">
        <div className="flex flex-col md:flex-row">
          <div>
            <h1 className="font-Akirta text-3xl md:text-8xl ">
              {skillInfo.name}
            </h1>
            <div
              className={`bg-yellow-700  h-2  `}
              style={{ width: parseInt(skillInfo.stars) * 10 + "%" }}
            ></div>
            <div className="  font-sans py-2 mdtext-2xl md:py-5 md:flex-row">
              {skillInfo.tech}
              <div className="py-7 font-mono">
                <br></br>
                {skillInfo.description}
              </div>
              <div className=" font-sans font-bold ">
                <button
                  className=" md:relative z-40 bg-yellow-600 mx-5 rounded-full text-black p-2 pt-1 px-7
                 m-3 min-w-[100px] "
                >
                  <a href={skillInfo.ctaLink} className="cursor-pointer">
                    {skillInfo.cta}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div>
            {skillInfo.tech.map((framework) => {
              return framework === "Three Js" ? (
                <Three key={"key_three"} />
              ) : null;
            })}
            <div className=" max-w-6xl md:w-96 maxh-96 rounded-full md:mx-52 md:mt-28 mt-14 ">
              {skillInfo.imgs.map((img) => {
                let imgkey = `img_${img}`;

                return img ? (
                  <img
                    key={imgkey}
                    className=" m-auto"
                    style={{ width: 100 / skillInfo.imgs.length + "%" }}
                    alt={skillInfo.tech}
                    src={img}
                  ></img>
                ) : null;
              })}
            </div>
            <div className="flex justify-center font-Akirta ">
              <h1>{}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
