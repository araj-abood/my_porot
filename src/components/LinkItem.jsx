import React, { forwardRef, useRef } from "react";
import { ColorContext } from "../../store/colorCtx";

const LinkItem = forwardRef(function LinkItem(
  { to, text, handleSelect, colortw, onClick },
  ref
) {
  const linkRef = useRef(null);

  return (
    <li>
      <a
        data-color={colortw}
        ref={linkRef}
        onMouseOver={() => {
          handleSelect(linkRef.current);
        }}
        onClick={onClick}
        className="text-lg font-semibold cursor-pointer hover:brightness-150 transition-all duration-100 relative"
      >
        {text}
      </a>
    </li>
  );
});

{
  /* <div className="absolute w-full h-2 blur-lg left-0 -bottom-2 bg-main-200">
        {" "}
      </div> */
}

export default LinkItem;
