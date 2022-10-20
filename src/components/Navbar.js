import React from "react";

function Navbar() {
  return (
    <>
      <div
        className="flex absolute w-full bg-cyan-900 p-5 text-white justify-center text-3xl font-medium tracking-widest shadow-[0px_0px_8px_0px_rgb(0,0,0)]"
        style={{ textShadow: "2px 2px 15px rgba(0, 252, 176, 0.651)" }}
      >
        <a href="./">QUIZ APP</a>
      </div>
    </>
  );
}

export default Navbar;
