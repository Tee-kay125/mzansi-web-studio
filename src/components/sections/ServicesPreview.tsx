import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CreditCard,
  FileText,
  MapPin,
  MessageCircle,
  Search,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageBlock } from "@/components/ui/ImageBlock";

const featuredServices = [
  {
    title: "Business websites",
    text: "Professional pages that show services, prices, location, and WhatsApp contact.",
    src: "/images/main/service-websites.jpg",
    label: "Business Website Image",
  },
  {
    title: "Online catalogues",
    text: "Product layouts for sellers who want customers to browse before ordering.",
    src: "/images/main/service-catalogue.jpg",
    label: "Catalogue Image",
  },
  {
    title: "Ecommerce stores",
    text: "Online stores with product categories, cart, checkout, and order flow.",
    src: "/images/main/service-ecommerce.jpg",
    label: "Ecommerce Image",
  },
];

const addOns = [
  {
    title: "WhatsApp enquiry flow",
    description:
      "Buttons and messages are placed where customers are most likely to take action.",
    icon: MessageCircle,
  },
  {
    title: "Booking forms",
    description:
      "Collect appointment requests, learner registrations, quote requests, or service enquiries.",
    icon: CalendarCheck,
  },
  {
    title: "Google Maps setup",
    description:
      "Help customers find your business location and understand your service area.",
    icon: MapPin,
  },
  {
    title: "Basic SEO structure",
    description:
      "Clear page titles, descriptions, headings, and structure to help customers find you.",
    icon: Search,
  },
  {
    title: "Online payment setup",
    description:
      "For ecommerce projects, we can prepare checkout and payment integration options.",
    icon: CreditCard,
  },
  {
    title: "Simple dashboards",
    description:
      "For businesses that need admin tools for products, enquiries, orders, or reports.",
    icon: BarChart3,
  },
];

export function ServicesPreview() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white px-4 py-20 text-slate-950 md:px-6">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="A website should do more than look good."
          description="It should help customers understand your business, trust you faster, and contact you without confusion."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredServices.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <ImageBlock
                src={item.src}
                alt={item.title}
                label={item.label}
                className="h-60"
                imgClassName="transition duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              What can be included
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Add the features your business actually needs.
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Every business is different. Some only need a clean website and WhatsApp button.
              Others need booking forms, maps, ecommerce, admin tools, or online payment setup.
            </p>

            <a
              href="/services"
              className="mt-8 inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800"
            >
              Explore all services <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
