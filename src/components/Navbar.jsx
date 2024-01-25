import React from "react";
import LinkItem from "./LinkItem";
import Links from "./Links";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="py-2 flex justify-between items-center">
      <Logo />
      <Links />
    </nav>
  );
}

export default Navbar;
