import { CheckCircle2, Sparkles } from "lucide-react";
import { packages } from "@/data/packages";
import { getWhatsAppLink } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PackagesPreview() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-slate-50 px-4 py-20 text-slate-950 md:px-6">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Packages"
            title="Start with what your business needs now."
            description="Clear starting prices make it easier to choose the right package for your business."
          />

          <div className="rounded-[2rem] border border-emerald-300 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">Launch Special</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  We are taking 5 small businesses for starter websites this month. Ideal for businesses that want to go online quickly and look professional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.slice(0, 3).map((pkg) => (
            <div key={pkg.name} className={pkg.popular ? "relative rounded-[2rem] border-2 border-emerald-500 bg-white p-6 shadow-xl shadow-emerald-950/10" : "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"}>
              {pkg.popular && (
                <div className="absolute -top-4 left-6 rounded-full bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                  Good first choice
                </div>
              )}
              <h3 className="text-2xl font-black">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-black text-emerald-700">{pkg.price}</p>
              <p className="mt-3 leading-7 text-slate-600">{pkg.summary}</p>

              <div className="mt-6 space-y-3">
                {pkg.features.slice(0, 6).map((feature) => (
                  <div key={feature} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{feature}</span>
                  </div>
                ))}
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

        <div className="mt-10 text-center">
          <a href="/packages" className="font-black text-emerald-700 hover:text-emerald-900">
            View all packages →
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
