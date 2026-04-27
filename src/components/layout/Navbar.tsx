"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { getWhatsAppLink, siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/portfolio", label: "Demo Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-cyan-400/20">
            <Code2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-base font-black leading-tight text-white md:text-lg">{siteConfig.name}</p>
            <p className="hidden text-xs text-slate-400 sm:block">Websites • Ecommerce • Automation</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-emerald-300" : "transition hover:text-white"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          className="hidden rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300 lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={pathname === link.href ? "rounded-2xl bg-emerald-400/10 px-4 py-3 font-semibold text-emerald-300" : "rounded-2xl px-4 py-3 font-semibold text-slate-200 hover:bg-white/5"}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              className="mt-2 rounded-2xl bg-emerald-400 px-4 py-3 text-center font-black text-slate-950"
            >
              Get a Quote on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
