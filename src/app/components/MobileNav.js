"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/wer-wir-sind", label: "Wer wir sind" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ];

  return (
    <>
      {/* Burger Menu Button - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-23 right-15 z-20 md:hidden text-anna-500"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-300/60 bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Off-canvas Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-400 text-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="mt-16 px-4">
          <div className="flex flex-col gap-3 items-start px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase ${
                  pathname === link.href
                    ? "text-anna-500 font-bold"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="nav text-2xl gap-1 mt-20 flex flex-col uppercase justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "text-anna-500 font-bold" : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
