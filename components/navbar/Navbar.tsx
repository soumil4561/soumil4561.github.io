"use client";
import type { NavItemParams } from "@/components/navbar/NavItem";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import CloseButton from "@/components/button/CloseButton";
import NavItem from "@/components/navbar/NavItem";
import NavbarLogo from "@/components/navbar/NavbarLogo";

export type NavbarProps = {
  items: NavItemParams[];
};

export default function Navbar(props: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hasEverScrolled, setHasEverScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasEverScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`
        fixed top-2 md:top-8
        inset-x-6
        md:left-1/2 md:-translate-x-1/2
        z-50 px-4 py-2
        border border-border
        
        bg-gradient-to-b from-background-tertiary-glass-from to-background-tertiary-glass-to backdrop-blur-xl
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        flex items-center justify-between md:w-fit
        transition-all duration-500

        ${
          isHome && !hasEverScrolled
            ? "lg:opacity-0 lg:-translate-y-4 lg:pointer-events-none"
            : "lg:opacity-100 lg:translate-y-0"
        }
      `}
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
