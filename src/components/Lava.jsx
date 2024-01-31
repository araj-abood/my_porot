import React, { useContext } from "react";
import Wave from "react-wavify";
import { ColorContext } from "../../store/colorCtx";

function Lava() {
  const { color } = useContext(ColorContext);

  return (
    <Wave
      className="absolute bottom-0 left-0 transition-all duration-100"
      fill={color}
      opacity={0.2}
      style={{ display: "flex" }}
      paused={false}
      options={{
        height: 80,
        amplitude: 20,
        speed: 0.1,
        points: 10,
      }}
    />
  );
}

export default Lava;
