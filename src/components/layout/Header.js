import { Menu, UserRound } from "lucide-react";
import { Navbar } from "./Navbar";
import { CircleButton } from "../ui/CircleButton";

export function Header() {
  return (
    <header className="navbar bg-[#dedede]/30 w-[96%] lg:px-8 px-4 lg:py-4 py-2 rounded-full absolute top-4 left-1/2 right-1/2 -translate-x-1/2 flex justify-between items-center gap-4 border border-[#dedede]/20">
      <div className="navbar-start">
        <h1 className="font-[against] text-white lg:text-2xl text-md">
          Palazzo
        </h1>
      </div>

      <Navbar />

      <div className="navbar-end">
        <CircleButton
          icon={<UserRound size={20} />}
          className="hidden md:flex"
        />
        <CircleButton icon={<Menu size={20} />} className="md:hidden" />
      </div>
    </header>
  );
}
