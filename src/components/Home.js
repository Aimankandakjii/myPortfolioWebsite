import React from "react";
import CursorCircle from "./CursorCircle";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Target from "./Target";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <CursorCircle />
      <Navbar />
      <Hero />
      <Skills />
      <Target />
      <Footer />
    </>
  );
}
