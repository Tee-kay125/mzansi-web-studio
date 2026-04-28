import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Heart,
  AtSign,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Braids & Protective Styles",
    price: "From R350",
    text: "Neat, long-lasting styles for everyday beauty, school, work, and special occasions.",
    image: "/images/demos/salon/gallery-1.jpg",
  },
  {
    title: "Silk Press & Styling",
    price: "From R450",
    text: "Smooth, elegant styling with shine, movement, and a polished salon finish.",
    image: "/images/demos/salon/gallery-2.jpg",
  },
  {
    title: "Wig Installation",
    price: "From R500",
    text: "Clean installation, styling, and a natural-looking finish for confident wear.",
    image: "/images/demos/salon/gallery-3.jpg",
  },
  {
    title: "Treatment & Blow Dry",
    price: "From R220",
    text: "Deep care for healthy, soft, beautiful hair with a fresh salon finish.",
    image: "/images/demos/salon/gallery-4.jpg",
  },
];

const priceList = [
  ["Wash & Blow Dry", "R180"],
  ["Hair Treatment", "R250"],
  ["Braids", "From R350"],
  ["Silk Press", "From R450"],
  ["Wig Installation", "From R500"],
  ["Special Occasion Styling", "From R380"],
];

const reasons = [
  "Clean and comfortable salon space",
  "Friendly professional stylists",
  "Clear pricing before booking",
  "WhatsApp appointment booking",
  "Gallery of real hairstyle results",
  "Easy location and contact details",
];

const testimonials = [
  {
    name: "Lerato M.",
    text: "The booking was quick and my braids came out beautifully. I loved the clean, professional service.",
  },
  {
    name: "Anele K.",
    text: "I checked the services and prices before booking. It made the whole process easy and stress-free.",
  },
  {
    name: "Nandi S.",
    text: "The salon looked professional online, and the experience matched what I saw on the website.",
  },
];

const faqs = [
  {
    q: "Do I need to book before coming?",
    a: "Booking is recommended so the salon can reserve time for your preferred service.",
  },
  {
    q: "Can I ask for prices on WhatsApp?",
    a: "Yes. Customers can send a quick WhatsApp message and receive guidance before booking.",
  },
  {
    q: "Can I show the stylist a hairstyle picture?",
    a: "Yes. Customers can send reference pictures before the appointment for better preparation.",
  },
];

const hours = [
  ["Monday - Friday", "09:00 - 18:00"],
  ["Saturday", "08:00 - 16:00"],
  ["Sunday", "Closed"],
];

function SalonImage({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-gradient-to-br from-[#f7d7c5] via-[#f8eee7] to-[#d6a86d] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24110d]/55 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 px-4 py-3 shadow-xl backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9f2f45]">{label}</p>
      </div>
    </div>
  );
}

export default function SalonDemoPage() {
  return (
    <main className="bg-[#fffaf6] text-[#21130f]">
      <a
        href="#book"
        className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-[#24d366] px-5 py-4 font-black text-white shadow-2xl shadow-green-950/30 transition hover:-translate-y-1 md:inline-flex"
      >
        <MessageCircle className="mr-2 h-5 w-5" /> Book on WhatsApp
      </a>

      <div className="bg-[#120c0b] px-4 py-3 text-center text-sm font-semibold text-white">
        Demo salon website by Mzansi Web Studio — customised for salons, barbers, spas, and beauty businesses.
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1d0f0d] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/demos/salon/hero-bg.jpg"
            alt="Luxury salon interior"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1d0f0d]/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d0f0d]/90 via-[#381613]/64 to-[#6d1f42]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d0f0d]/15 via-transparent to-[#1d0f0d]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_28%,rgba(244,114,182,0.24),transparent_30%),radial-gradient(circle_at_16%_78%,rgba(245,158,11,0.16),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to demos
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-rose-100 md:flex">
              <Scissors className="h-4 w-4" /> Premium Salon Demo
            </div>
          </div>

          <div className="grid gap-12 pb-16 pt-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:pb-24 md:pt-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black text-rose-100 ring-1 ring-white/20 backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#f7b267]" />
                Cape Town Hair & Beauty Studio
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Step out looking polished, confident, and beautiful.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-50/92">
                Bella Hair Studio helps clients book professional braids, treatments, silk press, wig installation, and elegant styling with a smooth WhatsApp booking experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#ff8fab] px-6 py-4 font-black text-[#250b10] shadow-lg shadow-rose-950/25 transition hover:bg-[#ffb3c6]"
                >
                  Book on WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["4.9", "Client rating"],
                  ["800+", "Happy clients"],
                  ["Same day", "Booking support"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/12 bg-white/12 p-5 backdrop-blur">
                    <p className="text-3xl font-black text-[#ffc2d1]">{value}</p>
                    <p className="mt-1 text-sm text-rose-50/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 hidden h-32 w-32 rounded-full bg-[#ff8fab]/25 blur-3xl md:block" />
              <div className="absolute -bottom-10 -right-10 hidden h-44 w-44 rounded-full bg-[#f7b267]/20 blur-3xl md:block" />

              <div className="relative rounded-[2.4rem] border border-white/18 bg-white/12 p-3 shadow-2xl shadow-black/35 backdrop-blur">
                <SalonImage
                  src="/images/demos/salon/hero.jpg"
                  alt="Client having hair styled"
                  label="Signature Styling"
                  className="h-[430px] rounded-[1.9rem] md:h-[500px]"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-5 text-[#24110d] shadow-2xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe3ea] text-[#c9184a]">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-500">Today’s opening</p>
                      <p className="text-lg font-black">09:00 - 18:00</p>
                    </div>
                  </div>
                  <a href="#book" className="mt-4 flex w-full items-center justify-center rounded-2xl bg-[#24d366] px-4 py-3 font-black text-white">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-b border-[#f3d5ce] bg-white px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Bella Hair Studio</p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">Premium hair care with easy WhatsApp booking.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-stone-600">
            {['Braids', 'Treatments', 'Silk Press', 'Wig Installation'].map((item) => (
              <span key={item} className="rounded-full bg-[#fff0f3] px-4 py-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="bg-[#fff0f3] px-4 py-12 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-[#f3b6c6] bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">New client special</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Treatment + blow dry from R350 this week.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-stone-600">A special-offer banner gives customers a reason to book now instead of waiting.</p>
          </div>
          <a href="#book" className="inline-flex items-center justify-center rounded-2xl bg-[#24110d] px-6 py-4 font-black text-white">
            Claim Offer <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section id="services" className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Signature services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Services clients can understand at a glance.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">A salon website should show what you do, what it costs, and how customers can book without asking many questions.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group overflow-hidden rounded-[2rem] border border-[#f3d5ce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <SalonImage src={service.image} alt={service.title} label={service.title} className="h-64" />
                <div className="p-6">
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-2xl font-black text-[#c9184a]">{service.price}</p>
                  <p className="mt-3 leading-7 text-stone-600">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SPLIT */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <SalonImage src="/images/demos/salon/about-1.jpg" alt="Salon interior" label="Salon Interior" className="h-80 rounded-[2rem]" />
            <SalonImage src="/images/demos/salon/about-2.jpg" alt="Stylist working" label="Stylist Working" className="mt-12 h-80 rounded-[2rem]" />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">The experience</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A warm beauty space with professional service.</h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">Bella Hair Studio is designed for clients who want neat styling, healthy hair care, and a comfortable salon experience. A website like this helps the salon look professional before the client even walks in.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#fff0f3] p-4 font-bold text-stone-700">
                  <CheckCircle2 className="h-5 w-5 text-[#c9184a]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING MENU */}
      <section className="bg-[#fff7f2] px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Price menu</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Clear prices help customers book faster.</h2>
            <p className="mt-5 leading-8 text-stone-600">Instead of replying to the same price questions all day, the business can display starting prices and use WhatsApp for final confirmation.</p>
          </div>

          <div className="rounded-[2rem] border border-[#f3d5ce] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {priceList.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between rounded-2xl bg-[#fff0f3] p-4">
                  <span className="font-black">{name}</span>
                  <span className="font-black text-[#c9184a]">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Gallery</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Show customers the quality before they book.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">A strong gallery gives customers confidence because beauty businesses are highly visual.</p>
            </div>
            <a href="#book" className="inline-flex items-center rounded-2xl bg-[#24110d] px-6 py-4 font-black text-white">Book now <ArrowRight className="ml-2 h-5 w-5" /></a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-[#f3d5ce] bg-white shadow-sm">
                <SalonImage src={item.image} alt={item.title} label={item.title} className="h-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#2a1210] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb3c6]">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Everything customers need to feel confident.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Personal care",
                text: "Every appointment is handled with attention, patience, and care.",
              },
              {
                icon: Sparkles,
                title: "Beautiful results",
                text: "Gallery and service sections help customers see the quality of the work.",
              },
              {
                icon: MessageCircle,
                title: "Easy booking",
                text: "Customers can quickly tap WhatsApp and start a booking conversation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <item.icon className="mb-6 h-8 w-8 text-[#ffb3c6]" />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-rose-50/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What clients say.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[2rem] border border-[#f3d5ce] bg-[#fff7f2] p-6 shadow-sm">
                <Quote className="mb-5 h-8 w-8 text-[#c9184a]" />
                <p className="leading-8 text-stone-700">“{testimonial.text}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="font-black">{testimonial.name}</p>
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fff7f2] px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Questions</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Make booking feel easy.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[1.5rem] border border-[#f3d5ce] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#100907] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb3c6]">Book now</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Ready for your new look?</h2>
            <p className="mt-5 leading-8 text-stone-300">Customers can send a WhatsApp message directly from the website to ask about availability, pricing, or appointments.</p>

            <div className="mt-8 space-y-4">
              <a href="#" className="flex items-center gap-4 rounded-2xl bg-[#24d366] p-4 font-black text-white">
                <MessageCircle className="h-6 w-6" /> Book on WhatsApp
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white"><Phone className="h-5 w-5 text-[#ffb3c6]" /> 063 000 0000</div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white"><AtSign className="h-5 w-5 text-[#ffb3c6]" /> @bellahairstudio</div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white"><MapPin className="h-5 w-5 text-[#ffb3c6]" /> Cape Town, South Africa</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#f3d5ce] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c9184a]">Opening hours</p>
            <h3 className="mt-3 text-3xl font-black">Visit the salon</h3>
            <div className="mt-8 space-y-4">
              {hours.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between rounded-2xl bg-[#fff0f3] p-4">
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#c9184a]" /><p className="font-black">{day}</p></div>
                  <p className="font-semibold text-stone-600">{time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex h-64 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f3d5ce] to-[#fff0f3] text-center">
              <div><MapPin className="mx-auto mb-3 h-8 w-8 text-[#c9184a]" /><p className="font-black text-stone-800">Google Maps Placeholder</p><p className="mt-2 text-sm text-stone-600">A real map can be embedded here.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* MZANSI CTA */}
      <section className="bg-slate-950 px-4 py-16 text-white md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Mzansi Web Studio Demo</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Want a website like this for your business?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">This salon demo shows how a business can look professional online with strong visuals, clear services, pricing, gallery, and WhatsApp booking.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/packages" className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 font-black text-slate-950 transition hover:bg-emerald-300">View Packages <ArrowRight className="ml-2 h-5 w-5" /></Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black text-white transition hover:bg-white/10">Back to Demo Projects</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
