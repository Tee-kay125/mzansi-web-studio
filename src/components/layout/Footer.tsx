import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">{siteConfig.name}</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">{siteConfig.description}</p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            className="mt-6 inline-flex rounded-2xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="font-black">Pages</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/packages" className="hover:text-white">Packages</Link>
            <Link href="/portfolio" className="hover:text-white">Demo Projects</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-2"><Phone className="h-4 w-4 text-emerald-300" /> {siteConfig.phone}</p>
            <p className="flex gap-2"><Mail className="h-4 w-4 text-emerald-300" /> {siteConfig.email}</p>
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-emerald-300" /> {siteConfig.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
