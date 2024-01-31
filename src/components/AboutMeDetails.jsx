import React from "react";
import AboutmeYear from "./about-me/AboutmeYear";

function AboutMeDetails() {
  return (
    <div className="overflow-x-scroll min-h-[200px] px-5 overflow-y-auto red-scroll">
      <div className="h-1">
        <AboutmeYear />
      </div>
    </div>
  );
}

export default AboutMeDetails;
