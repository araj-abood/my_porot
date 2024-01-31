import React, { useContext, useReducer, useRef, useState } from "react";
import LinkItem from "./LinkItem";
import HoverLink from "./HoverLink";
import { ColorContext } from "../../store/colorCtx";

function Links() {
  const [selectedLink, setSelectedLink] = useState();
  const container = useRef(null);

  function handleSelect(ref) {
    setSelectedLink(ref);
    console.dir(ref);
    console.dir(ref.dataset.color);
  }

  const { handleColorChange } = useContext(ColorContext);

  return (
    <ul
      // onMouseLeave={() => {
      //   setSelectedLink(null);
      // }}
      ref={container}
      className="flex gap-4 relative"
    >
      {selectedLink && (
        <HoverLink
          width={selectedLink.offsetWidth}
          left={selectedLink.offsetLeft}
          color={selectedLink.dataset.color}
        />
      )}
      <LinkItem
        colortw="bg-red-600"
        handleSelect={handleSelect}
        to={"#"}
        text={"About me"}
        onClick={() => handleColorChange("red")}
      />
      <LinkItem
        colortw="bg-emerald-600"
        handleSelect={handleSelect}
        to={"#"}
        text={"Skills"}
        onClick={() => handleColorChange("green")}
      />
      <LinkItem
        colortw="bg-cyan-500"
        handleSelect={handleSelect}
        to={"#"}
        text={"Projects"}
        onClick={() => handleColorChange("blue")}
      />
    </ul>
  );
}

export default Links;
