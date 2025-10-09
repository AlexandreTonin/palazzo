import {
  UserRound,
  LogIn,
  UserRoundPlus,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { CircleButton } from "../ui/CircleButton";
import Link from "next/link";

const unauthenticatedLinks = [
  { label: "Login", href: "/login", icon: <LogIn size={16} /> },
  { label: "Cadastro", href: "/cadastro", icon: <UserRoundPlus size={16} /> },
];

const authenticatedLinks = [
  { label: "Profile", href: "/profile", icon: <UserRound size={16} /> },
  { label: "Settings", href: "/settings", icon: <Settings size={16} /> },
  { label: "Logout", href: "/logout", icon: <LogOut size={16} /> },
];

const navbarLinks = [
  { label: "Imóveis", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Visitas", href: "/visitas" },
];

export function HeaderMenu({ isAuthenticated }) {
  const links = isAuthenticated ? authenticatedLinks : unauthenticatedLinks;

  return (
    <div className="dropdown dropdown-end z-50">
      <CircleButton icon={<UserRound size={20} />} className="hidden md:flex" />
      <CircleButton icon={<Menu size={20} />} className="md:hidden" />

      <ul
        tabIndex={0}
        className="dropdown-content menu text-white font-semibold rounded-lg mt-2 z-50 bg-[#dedede]/30 backdrop-blur-2xl w-40 p-2 shadow-sm border border-[#dedede]/30"
      >
        {navbarLinks.map((link) => (
          <li
            key={link.href}
            className="hover:bg-white/15 rounded-md block md:hidden"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}

        <hr className="my-2 text-gray-300 block md:hidden"></hr>

        {links.map((link) => (
          <li key={link.href} className="hover:bg-white/15 rounded-md">
            <Link href={link.href} className="flex items-center gap-3">
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
