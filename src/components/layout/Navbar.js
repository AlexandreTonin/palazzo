"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const items = [
  { label: "Imóveis", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Visitas", href: "/visitas" },
];

export function Navbar() {
  const location = usePathname();

  return (
    <nav className="navbar-center hidden md:flex">
      <div className="relative flex gap-8 md:gap-4 text-sm font-medium text-white">
        {items.map((item) => {
          const isActive =
            (location === "/" && item.href === "/") || location === item.href;

          return (
            <Link
              href={item.href}
              key={item.label}
              className="relative px-4 py-2 rounded-full hover:bg-white/15 transition duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={isActive ? "relative text-black" : "relative"}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
