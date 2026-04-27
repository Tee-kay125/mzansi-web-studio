import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us what your business needs."
            description="Send us a message and we will help you choose the right website package for your business."
            light
          />
        </div>
      </section>

      <AnimatedSection className="bg-white px-4 py-20 text-slate-950 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-2xl font-black">Contact details</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The fastest way to reach us is through WhatsApp. Tell us what type of website you need and we will respond with the next steps.
            </p>

            <div className="mt-8 space-y-4">
              <a href={getWhatsAppLink()} target="_blank" className="flex items-center gap-4 rounded-2xl bg-green-500 p-4 font-black text-white">
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </a>
              <p className="flex items-center gap-4 rounded-2xl bg-white p-4 font-semibold text-slate-700">
                <Phone className="h-5 w-5 text-cyan-700" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center gap-4 rounded-2xl bg-white p-4 font-semibold text-slate-700">
                <Mail className="h-5 w-5 text-cyan-700" />
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-4 rounded-2xl bg-white p-4 font-semibold text-slate-700">
                <MapPin className="h-5 w-5 text-cyan-700" />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Quick quote checklist</h2>
            <p className="mt-3 leading-7 text-slate-600">
              When you message us, include these details so we can understand your project faster.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Business name",
                "Type of business",
                "Do you need a website, catalogue, or ecommerce store?",
                "Do you already have a logo and photos?",
                "How many pages or products do you need?",
                "Do you need WhatsApp orders, online payments, or booking forms?",
                "Your rough budget and deadline",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink("Hi Mzansi Web Studio, I need a quote. My business name is:")}
              target="_blank"
              className="mt-8 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:bg-slate-800"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
