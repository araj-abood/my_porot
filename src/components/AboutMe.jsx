import React from "react";
import AboutMeDetails from "./AboutMeDetails";
import HobbiesItem from "./about-me/HobbiesItem";
import myCv from "../assets/my_cv.pdf";

function AboutMe() {
  return (
    <div
      id="about-me"
      className="w-[80%]  mx-auto px-3 py-2 rounded-md border-white/40 border-[1px] bg-red-900/10"
    >
      <h2 className="text-center text-3xl  mb-2">About me</h2>
      <div className="px-3">
        <h1 className="mb-5 text-center text-gray-200 font-bold  text-lg">
          I am a Software Engineer / Mobile Developer @ <b>ZenHR</b>
          <br /> I am a graduate computer science student from the American
          University of Madaba with a GPA of <b>3.2</b>
        </h1>
        <h2 className="text-3xl text-center text-main-300  font-bold">
          My hobbies
        </h2>

        <ol className="grid grid-cols-2 sm:grid-cols-3 mt-5 gap-3">
          <HobbiesItem text={"League of legends"} />
          <HobbiesItem text={"Programming"} />
          <HobbiesItem text={"Anime"} />
          <HobbiesItem text={"Tech Stuff "} />
        </ol>
      </div>
      <h2 className="text-3xl text-center  font-bold mt-7">Chronicles</h2>
      <AboutMeDetails />

      <div className="mt-10 text-center">
        <h2 className="text-2xl text-main-300 font-bold mb-4">
          Connect with me
        </h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/abdullah-al-araj-76073328a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-main-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/araj-abood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-main-300 transition-colors"
          >
            GitHub
          </a>
        </div>
        <button
          className="px-6 py-2 bg-main-300 text-gray-900 font-bold rounded-md hover:bg-main-400 transition-colors"
          onClick={() => window.open(myCv, "_blank")}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
