import { useState, useEffect } from "react";
export default function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMousePos = (e) => {
    setMousePos({
      x: e.pageX,
      y: e.pageY,
    });
  };
  console.log("MOUSE POS");
  useEffect(() => {
    window.addEventListener("mousemove", handleMousePos);
  }, []);
  return mousePos;
}
