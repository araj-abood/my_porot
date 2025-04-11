import React from "react";
import AboutMeDetails from "./AboutMeDetails";
import HobbiesItem from "./about-me/HobbiesItem";

function AboutMe() {
  return (
    <div className="w-[80%]  mx-auto px-3 py-2 rounded-md border-white/40 border-[1px] bg-red-900/10">
      <h2 className="text-center text-3xl  mb-2">About me</h2>
      <div className="px-3">
        <h1 className="mb-5 text-center text-gray-200 font-bold  text-lg">
          I am a Software Engineer / Mobile Developer @ <b>ZenHR</b>
          <br /> I am a graduate computer science student from the American
          University of Madaba with a GPA of <b>4.2</b>
        </h1>
        <h2 className="text-3xl text-center text-main-300  font-bold">
          My hobbies
        </h2>

        <ol className="grid grid-cols-3 mt-5 gap-3">
          <HobbiesItem text={"League of legends"} />
          <HobbiesItem text={"Programming"} />
          <HobbiesItem text={"Anime"} />
          <HobbiesItem text={"Tech Stuff "} />
        </ol>
      </div>
      <h2 className="text-3xl text-center  font-bold mt-7">Chronicles</h2>
      <AboutMeDetails />
    </div>
  );
}

export default AboutMe;
