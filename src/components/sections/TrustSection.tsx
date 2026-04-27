import { CheckCircle2, Globe2, MessageCircle, Smartphone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { Reveal } from "@/components/ui/Reveal";

const trustPoints = [
  "Clear pricing and service information",
  "Professional first impression",
  "WhatsApp buttons placed where customers need them",
  "Mobile-friendly layout for phone visitors",
  "Gallery/demo sections for visual proof",
  "Contact details, location, and enquiry flow",
];

export function TrustSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <ImageBlock
              src="/images/main/trust-mobile.jpg"
              alt="Customer using mobile website"
              label="Mobile Experience"
              className="h-80 rounded-[2rem]"
            />
          </Reveal>

          <Reveal delay={0.12}>
            <ImageBlock
              src="/images/main/trust-business.jpg"
              alt="Professional small business"
              label="Trust Builder"
              className="h-80 rounded-[2rem] sm:mt-12"
            />
          </Reveal>

          <Reveal delay={0.2} className="sm:col-span-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <Smartphone className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-black">Mobile-first</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <MessageCircle className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-black">WhatsApp-ready</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <Globe2 className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-black">Online presence</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Why it works</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Customers judge your business before they contact you.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A professional website helps your business look serious before the first WhatsApp message, call, booking, or order.
          </p>

          <div className="mt-8 grid gap-3">
            {trustPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="font-semibold text-slate-200">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
