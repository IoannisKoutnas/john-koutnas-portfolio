"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative flex min-h-[75vh] flex-col gap-6 px-6 pt-10">
      {/* ===== Desktop nav ===== */}
      <nav className="absolute top-6 right-6 hidden items-center gap-4 text-sm text-zinc-300 sm:flex">
        {navLinks.map((l) => (
          <a key={l.href} className="link-accent" href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      {/* ===== Mobile burger ===== */}
      <div className="absolute top-5 right-4 sm:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="button-accent px-3 py-2"
        >
          <span className="block h-0.5 w-5 bg-zinc-200" />
          <span className="mt-1.5 block h-0.5 w-5 bg-zinc-200" />
          <span className="mt-1.5 block h-0.5 w-5 bg-zinc-200" />
        </button>
      </div>

      {/* ===== Mobile menu ===== */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70"
            aria-label="Close menu"
          />

          <div className="absolute right-4 top-4 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/15 bg-black/80 p-4 shadow-lg shadow-black/60 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-100">Menu</p>
              <button
                onClick={() => setOpen(false)}
                className="button-accent px-3 py-2"
                aria-label="Close menu"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-200" />
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-zinc-200" />
                </span>
              </button>
            </div>

            <div className="mt-4 h-px w-full bg-white/10" />

            <nav className="mt-4 flex flex-col gap-2 text-sm text-zinc-200">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 transition hover:text-yellow-400 hover:border-white hover:shadow-md hover:shadow-white/50"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ===== Role + Name ===== */}
      <div className="text-left">
        <p className="text-sm text-zinc-400">{profile.role}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-100">
          {profile.name}
        </h1>
      </div>

      {/* ===== Centered hero ===== */}
      <div className="mt-2 flex max-w-xl flex-col items-center gap-6 self-center text-center">
        
        {/* ===== CLEAN PHOTO (no effects) ===== */}
        <div className="relative h-36 w-36 overflow-hidden rounded-full sm:h-40 sm:w-40">
          <Image
            src="/profile/profile.jpg"
            alt={`${profile.name} portrait`}
            fill
            priority
            className="rounded-full object-cover border border-white/15"
          />
        </div>

        <p className="text-[15px] leading-relaxed text-zinc-300 sm:text-base">
          I’m a junior data analyst with a strong focus on precision and clarity.
          I care deeply about getting things right — from clean data and efficient
          SQL to dashboards that are accurate, intuitive, and well-designed. I
          continuously invest in my growth through hands-on projects and
          professional certifications, driven by a constant desire to improve and
          deliver work I can stand behind.
        </p>

        <div className="mt-1 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="button-muted font-medium">
            View projects
          </a>
          <a href="#contact" className="button-accent font-medium">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-auto h-px w-full bg-white/10" />
    </header>
  );
}
