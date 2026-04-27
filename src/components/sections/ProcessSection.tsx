import { ArrowRight, CheckCircle2, MessageCircle, Smartphone, Globe2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppLink } from "@/data/site";

const steps = [
  {
    number: "01",
    title: "We understand your business",
    text: "We look at your services, products, customers, photos, prices, and what you want people to do when they visit your website.",
  },
  {
    number: "02",
    title: "We design the customer journey",
    text: "We plan the sections so visitors can quickly understand, trust, and contact your business without getting lost.",
  },
  {
    number: "03",
    title: "We build mobile-first",
    text: "Most customers browse from their phones, so the website is designed to look clean, fast, and easy to use on mobile first.",
  },
  {
    number: "04",
    title: "We connect WhatsApp and launch",
    text: "Your website is connected to WhatsApp, contact forms, Google Maps, and the final domain before going live.",
  },
];

export function ProcessSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white px-4 py-20 text-slate-950 md:px-6">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Our process"
              title="We do not just put information on a page."
              description="The website is planned around what the business wants: more enquiries, more bookings, more orders, and more trust."
            />

            <a
              href={getWhatsAppLink()}
              target="_blank"
              className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start your website <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl font-black text-emerald-700">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{step.title}</h3>
                      <p className="mt-3 leading-8 text-slate-600">{step.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
