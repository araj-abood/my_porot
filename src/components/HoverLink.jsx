import React from "react";

function HoverLink({ width, color, left }) {
  return (
    <div
      style={{
        width: `${width}px`,
        left: `${left}px`,
      }}
      className={`absolute h-4 ${color} -bottom-5  blur-md transition-all  duration-500 `}
    ></div>
  );
}

export default HoverLink;
