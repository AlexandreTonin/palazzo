"use client";

import { Navbar } from "./Navbar";
import { useState } from "react";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  const [isAuthenticated] = useState(false);

  return (
    <header className="navbar bg-[#dedede]/30 w-[96%] lg:px-8 px-4 lg:py-4 py-2 rounded-full absolute top-4 left-1/2 right-1/2 -translate-x-1/2 flex justify-between items-center gap-4 border border-[#dedede]/20 z-50 backdrop-blur-2xl">
      <div className="navbar-start">
        <h1 className="font-[against] text-white lg:text-2xl text-md">
          Palazzo
        </h1>
      </div>

      <div className="navbar-center">
        <Navbar />
      </div>

      <div className="navbar-end">
        <HeaderMenu isAuthenticated={isAuthenticated} />
      </div>
    </header>
  );
}
