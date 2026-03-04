"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/wer-wir-sind", label: "Wer wir sind" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ];

  return (
    <div className="nav text-2xl gap-1 mt-20 flex flex-col uppercase justify-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "text-anna-500 font-bold" : ""}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
