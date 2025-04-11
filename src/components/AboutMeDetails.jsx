import React from "react";
import AboutmeYear from "./about-me/AboutmeYear";
import Partition from "./about-me/Partition";

const years = [
  {
    year: 2025,
    done: [
      "Graduated from universty with 3.2 GPA",
      "Got hired full time with ZenHR🎊",
    ],
  },
  {
    year: 2024,
    done: [
      "Joined MIT program",
      "Became a senior",
      "Finally become a full stack software engineer / Mobile Developer at Zenhr",
    ],
  },
  { year: 2023, done: ["Finally got my gpa above 3", "Learned Data sciece"] },
  { year: 2021, done: ["Finished Highschool", "Enrolled to University"] },
  { year: 2010, done: ["Got my drivers license"] },
];

function AboutMeDetails() {
  return (
    <div className="overflow-x-scroll flex  mt-10  px-5 overflow-y-auto red-scroll">
      {years.map((y, index) => {
        return (
          <AboutmeYear
            key={y.year}
            details={y}
            addPartition={index < years.length - 1}
          />
        );
      })}
    </div>
  );
}

export default AboutMeDetails;
