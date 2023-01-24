import React from "react";
import useMousePosition from "./useMousePosition";

export default function CursorCircle() {
  const mousePos = useMousePosition();
  return (
    <div
      style={{ top: mousePos.y - 100, left: mousePos.x - 100 }}
      className="hidden z-10 md:inline-block absolute w-[200px] h-[200px] mix-blend-difference bg-white  rounded-full"
    ></div>
  );
}
