"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#"
          className="text-base font-bold text-accent transition-opacity hover:opacity-80 sm:text-lg"
        >
          {personalInfo.name.split(" ")[0]}
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "top-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-6 bg-white transition-all duration-200 ${open ? "top-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-background transition-all duration-300 md:hidden ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0"}`}
      >
        <ul className="flex max-h-[calc(80vh-1px)] flex-col gap-1 overflow-y-auto px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-accent active:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
