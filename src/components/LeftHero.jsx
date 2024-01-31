import React from "react";

function LeftHero() {
  return (
    <div className="flex-1 relative ">
      <div className="absolute bg-main-500 aspect-square w-[400px] rounded-full opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bg-main-200 aspect-square w-[400px] rounded-full opacity-50 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

export default LeftHero;
