import React from "react";
import ReactStars from "react-stars";

// Explicitly cast ReactStars to any to bypass type-checking issues
const ReactStarsComponent = ReactStars as any;

type SkillsRatingProps = {
  numberOfStars: number;
  arrayOfSkills: string[];
};

function SkillsRating({ numberOfStars, arrayOfSkills }: SkillsRatingProps) {
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
    <div>
      <h2>{message}</h2>
      <ReactStarsComponent value={numberOfStars} count={5} edit={false} />
    </div>
  );
}

export default SkillsRating;
