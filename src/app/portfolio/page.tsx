import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { demos } from "@/data/demos";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Demo projects"
            title="Website demos for different business types."
            description="These demo projects help business owners quickly understand what their own website could look like."
            light
          />
        </div>
      </section>

      <AnimatedSection className="bg-white px-4 py-20 text-slate-950 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <div key={demo.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-800 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{demo.category}</p>
                <h2 className="mt-12 text-3xl font-black">{demo.title}</h2>
              </div>

              <p className="mt-6 leading-8 text-slate-600">{demo.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {demo.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href={demo.href}
                target={demo.external ? "_blank" : undefined}
                rel={demo.external ? "noreferrer" : undefined}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-slate-800"
              >
                {demo.external ? "Visit Live Site" : "View Demo"} <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection />
    </main>
  );
}
