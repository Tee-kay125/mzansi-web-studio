import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <AnimatedSection className="bg-slate-950 px-4 py-20 text-white md:px-6">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-emerald-950/20 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Ready to start?</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
          Let us help your business look professional online.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          Send us a WhatsApp message and we will help you choose the right website package for your business.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 font-black text-slate-950 transition hover:bg-emerald-300"
        >
          Get a Quote on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </AnimatedSection>
  );
}
