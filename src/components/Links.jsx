import React, { useReducer, useRef, useState } from "react";
import LinkItem from "./LinkItem";
import HoverLink from "./HoverLink";

function Links() {
  const [selectedLink, setSelectedLink] = useState();
  const container = useRef(null);

  function handleSelect(ref) {
    setSelectedLink(ref);
    console.dir(ref);
    console.dir(ref.dataset.color);
  }

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
      />
      <LinkItem
        colortw="bg-emerald-600"
        handleSelect={handleSelect}
        to={"#"}
        text={"Skills"}
      />
      <LinkItem
        colortw="bg-cyan-500"
        handleSelect={handleSelect}
        to={"#"}
        text={"Projects"}
      />
    </ul>
  );
}

export default Links;
