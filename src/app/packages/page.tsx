import { CheckCircle2 } from "lucide-react";
import { packages } from "@/data/packages";
import { getWhatsAppLink } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Packages"
            title="Simple starting prices for small businesses."
            description="Every business is different, so prices are listed as starting prices. Final pricing depends on content, features, pages, and integrations."
            light
          />
        </div>
      </section>

      <AnimatedSection className="bg-slate-50 px-4 py-20 text-slate-950 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className={pkg.popular ? "relative rounded-3xl border-2 border-cyan-500 bg-white p-6 shadow-xl" : "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"}>
              {pkg.popular && (
                <div className="absolute -top-4 left-6 rounded-full bg-cyan-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                  Good first choice
                </div>
              )}
              <h2 className="text-2xl font-black">{pkg.name}</h2>
              <p className="mt-2 text-3xl font-black text-cyan-700">{pkg.price}</p>
              <p className="mt-3 leading-7 text-slate-600">{pkg.summary}</p>

              <div className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <p key={feature} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    {feature}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-black">Best for:</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{pkg.bestFor}</p>
              </div>

              <a
                href={getWhatsAppLink(`Hi Mzansi Web Studio, I am interested in the ${pkg.name} package. Please send me more information.`)}
                target="_blank"
                className="mt-8 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:bg-slate-800"
              >
                Ask About This Package
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection />
    </main>
  );
}
