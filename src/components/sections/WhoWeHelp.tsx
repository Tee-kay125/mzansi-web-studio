import { Store, Scissors, GraduationCap, Wrench, Church, Car, Utensils, BedDouble } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImageBlock } from "@/components/ui/ImageBlock";

const businesses = [
  { name: "Salons & barbers", icon: Scissors },
  { name: "Tutors & training centres", icon: GraduationCap },
  { name: "Mechanics & contractors", icon: Wrench },
  { name: "Churches & community groups", icon: Church },
  { name: "Car washes", icon: Car },
  { name: "Catering businesses", icon: Utensils },
  { name: "Guesthouses & BnBs", icon: BedDouble },
  { name: "Local shops & sellers", icon: Store },
];

export function WhoWeHelp() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Who we help"
            title="Built for businesses that depend on visibility, trust, and enquiries."
            description="Most customers will visit your website on a phone. That is why we design around mobile, WhatsApp, and clear contact actions."
            light
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {businesses.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-black">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ImageBlock
            src="/images/main/business-owner.jpg"
            alt="Small business owner"
            label="Small Business Owner"
            className="h-80 rounded-[2rem] sm:mt-12"
          />
          <ImageBlock
            src="/images/main/mobile-website.jpg"
            alt="Mobile website example"
            label="Mobile Website"
            className="h-80 rounded-[2rem]"
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Our focus</p>
            <h3 className="mt-3 text-3xl font-black">Make it easy for customers to take action.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Clear sections, strong calls-to-action, WhatsApp contact, mobile-friendly layouts, and professional presentation.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
