import React from "react";
import ShootingStars from "../components/ShootingStars";

function PageBody({ children }) {
  return (
    <div className="main-body relative z-20">
      <ShootingStars />
      3e
      <div className="space star-1 relative -z-10"></div>
      <div className="space star-2 -z-10"></div>
      <div className="space star-3 -z-10"></div>
      {children}
    </div>
  );
}

export default PageBody;
