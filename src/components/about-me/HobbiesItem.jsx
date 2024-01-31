import React from "react";

function HobbiesItem({ text }) {
  return (
    <li className="underline flex justify-center text-xl hover:text-red-400 transition-all duration-300 ">
      {text}
    </li>
  );
}

export default HobbiesItem;
