import React from "react";

function HobbiesItem({ text }) {
  return (
    <li className="underline flex text-gray-200 justify-center text-xl hover:text-red-400 transition-all duration-300 ">
      {text}
    </li>
  );
}

export default HobbiesItem;
