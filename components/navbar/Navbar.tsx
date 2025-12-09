"use client";
import type { NavItemParams } from "./NavItem";

import { useState } from "react";

import NavItem from "./NavItem";
import NavbarLogo from "./NavbarLogo";

export type NavbarProps = {
  items: NavItemParams[];
};

export default function Navbar(props: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      sticky top-2 md:top-8
      mt-0 md:mt-4 px-4 py-2
      z-50 border-border border-1 
      bg-background-tertiary 
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]
      backdrop-blur-xl 
      flex flex-row items-center justify-between
      w-full md:w-fit
      mx-auto"
    >
      {/* Logo */}
      <NavbarLogo />

      {/* Desktop Nav */}
      <div className="hidden md:flex flex-row gap-4 ml-auto ">
        {props.items.map((item, index) => {
          if (index === props.items.length - 1)
            return (
              <NavItem
                key={index}
                {...item}
                className={`mr-0 ${item.hidden ? "hidden" : ""}`}
              />
            );
          else
            return (
              <NavItem
                key={index}
                {...item}
                className={`${item.hidden ? "hidden" : ""}`}
              />
            );
        })}
      </div>

      {/* Mobile Hamburger */}
      <button
        aria-label="Toggle menu"
        className="md:hidden ml-auto relative w-8 h-8 flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        {/* Top line */}
        <span
          className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-500
      ${open ? "rotate-45 top-1/2" : "-translate-y-2"}
    `}
        />

        {/* Middle line */}
        <span
          className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-400
      ${open ? "opacity-0" : "opacity-100"}
    `}
        />

        {/* Bottom line */}
        <span
          className={`
      absolute w-8 h-[2px] bg-foreground transition-all duration-500
      ${open ? "-rotate-45 top-1/2" : "translate-y-2"}
    `}
        />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            absolute top-full mt-2 left-0 w-full
            bg-background-secondary 
            border-1 border-border
            flex flex-col gap-2 px-4 py-4 md:hidden"
        >
          {props.items.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              className="py-2 text-lg tracking-wide"
              navMenuStateUpdater={setOpen}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
