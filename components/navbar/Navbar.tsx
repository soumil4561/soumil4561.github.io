"use client";
import type { NavItemParams } from "@/components/navbar/NavItem";

import { useState } from "react";

import CloseButton from "@/components/button/CloseButton";
import NavItem from "@/components/navbar/NavItem";
import NavbarLogo from "@/components/navbar/NavbarLogo";

export type NavbarProps = {
  items: NavItemParams[];
};

export default function Navbar(props: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
  className="
    fixed
    top-2 md:top-8
    left-1/2 -translate-x-1/2
    z-50
    px-4 py-2
    border border-border
    bg-background-tertiary
    backdrop-blur-xl
    shadow-[0_4px_30px_rgba(0,0,0,0.1)]
    flex items-center justify-between
    w-full md:w-fit
  "
>

      {/* Logo */}
      <NavbarLogo />

      {/* Desktop Nav */}
      <div className="hidden md:flex flex-row gap-2 ml-auto ">
        {props.items.map((item, index) => {
          if (index === props.items.length - 1)
            return (
              <NavItem
                key={index}
                {...item}
                className={`mx-0 ${item.hidden ? "hidden" : ""}`}
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
      <CloseButton open={open} onToggle={() => setOpen((open) => !open)} />

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
