"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MessageCircle,
  MousePointerClick,
  Smartphone,
  Store,
} from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import { ImageBlock } from "@/components/ui/ImageBlock";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Full hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/main/hero-business.jpg"
          alt="Business owner using digital tools"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Readability overlay: visible image, readable text */}
      <div className="absolute inset-0 bg-slate-950/18" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/42 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/28" />

      {/* Soft brand effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(245,158,11,0.06),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-400/15 px-4 py-2 text-xs font-bold text-emerald-100 backdrop-blur md:text-sm">
            <Smartphone className="h-4 w-4" />
            Mobile-first websites for local businesses
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Websites that make your business look professional and trusted.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-100 md:text-lg">
            {siteConfig.name} builds professional websites, online catalogues,
            ecommerce stores, and simple business systems for South African
            small businesses that want more enquiries and stronger online
            presence.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 font-black text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Get a Quote on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/12 px-6 py-4 font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18"
            >
              See Demo Websites
            </a>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
            }}
            className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-3"
          >
            {["WhatsApp-ready", "Mobile-friendly", "Ecommerce available"].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-300" /> {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl md:block" />
          <div className="absolute -bottom-8 -right-6 hidden h-36 w-36 rounded-full bg-amber-500/15 blur-2xl md:block" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2.2rem] border border-white/20 bg-white/12 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/10"
          >
            <ImageBlock
              src="/images/main/hero-preview.jpg"
              alt="Website preview on phone"
              label="Website Preview Image"
              className="h-[330px] rounded-[1.7rem] md:h-[360px]"
            />

            <div className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-slate-950/85 p-4 text-white shadow-xl backdrop-blur md:left-8 md:top-8 md:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Online presence</p>
                  <p className="font-black">Open 24/7</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-4 text-slate-950 shadow-2xl backdrop-blur md:bottom-8 md:left-8 md:right-8 md:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Store className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Your Business Website</p>
                  <p className="text-lg font-black">Ready for enquiries</p>
                </div>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 text-sm font-black text-white">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </button>
            </div>
          </motion.div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-3xl border border-white/15 bg-slate-950/65 p-4 text-white shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <MousePointerClick className="h-5 w-5 text-emerald-300" />
              <p className="text-sm font-black">Designed to convert visitors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
