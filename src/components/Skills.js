import React from "react";
import Skill from "./Skill";
import { useState, useEffect } from "react";

export default function Skills() {
  const [loadedSkills, setLoadedSkills] = useState([]);
  const [isloadingSkills, setIsLoadingSkills] = useState(true);
  useEffect(() => {
    fetch(
      "https://portfolio-78a11-default-rtdb.europe-west1.firebasedatabase.app/skills.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((skills) => {
        setLoadedSkills(skills);
        setIsLoadingSkills(false);
      });
  }, []);
  if (isloadingSkills) {
    return (
      <div>
        <section className="font-bold text-center pt-4 text-xs md:text-base  bg-black text-white m-auto max-w-[400px] md:max-w-[550px] rounded-t-full">
          <p className="animate-pulse">
            The server is powered by a 🍋lemon and two ⚡electrodes. <br></br>
            Please be patient :)
          </p>
        </section>
      </div>
    );
  }
  const skills = loadedSkills;

  return (
    <div>
      {skills.map((skill) => {
        let unqKey = `skill_${skill.id}`;
        return <Skill key={unqKey} skillInfo={skill} />;
      })}
    </div>
  );
}
