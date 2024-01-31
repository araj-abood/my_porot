import React from "react";

function AboutmeYear({ details }) {
  return (
    <div className="min-w-[250px] min-h-[150px] text-center">
      <h2 className="text-3xl text-main-300">{details.year}</h2>
      <ul className="text-sm text-gray-200  flex flex-col gap-1 mt-2">
        {details.done.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutmeYear;
