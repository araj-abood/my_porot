import React, { useState } from "react";
import ReactStars from "react-stars";
import { FaInfoCircle } from "react-icons/fa";

// Explicitly cast ReactStars to any to bypass type-checking issues
const ReactStarsComponent = ReactStars as any;

type SkillsRatingProps = {
  numberOfStars: number;
  arrayOfSkills: string[];
};

function SkillsRating({ numberOfStars, arrayOfSkills }: SkillsRatingProps) {
  const [isHovered, setIsHovered] = useState(false);

  let message = "";

  switch (numberOfStars) {
    case 1:
      message = "Basic Knowledge";
      break;
    case 2:
      message = "Can move my way around it";
      break;
    case 3:
      message = "Can handle medium Tasks in it";
      break;
    case 4:
      message = "Almost there";
      break;
    case 5:
      message = "Master of the craft";
      break;
  }

  return (
    <div
      className="relative flex flex-col items-center group mt-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="items-center space-x-2 flex flex-col justify-center">
        <h2 className="font-semibold group-hover:underline flex items-center text-2xl">
          {message}
          <FaInfoCircle
            className="ml-2 text-gray-500 group-hover:text-gray-800 transition-colors"
            title="Hover to see more"
          />
        </h2>
        <ReactStarsComponent
          value={numberOfStars}
          count={5}
          edit={false}
          className="group-hover:scale-110 transition-transform text-5xl"
          size={50}
        />
      </div>
      {isHovered && (
        <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-200 animate-fade-in z-10">
          <h3 className="text-sm font-bold mb-2">Skills:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {arrayOfSkills.map((skill, index) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillsRating;
