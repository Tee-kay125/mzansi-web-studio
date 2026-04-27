import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Websites, catalogues, ecommerce, and business systems."
            description="Mzansi Web Studio helps small businesses move from only using WhatsApp and social media to having a professional online presence."
            light
          />
        </div>
      </section>

      <AnimatedSection className="bg-white px-4 py-20 text-slate-950 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <service.icon className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-black">{service.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{service.description}</p>

              <div className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <p key={feature} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    {feature}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-black text-slate-950">Best for:</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{service.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection />
    </main>
  );
}
