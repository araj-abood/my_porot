import React from "react";
import RightHero from "./RightHero";
import LeftHero from "./LeftHero";

function Hero() {
  return (
    <main className="mt-10 flex h-96">
      <RightHero />
      <LeftHero />
    </main>
  );
}

export default Hero;
