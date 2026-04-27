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

const salonServices = [
  {
    title: "Braids & Protective Styles",
    price: "From R350",
    description: "Neat, long-lasting styles for everyday beauty and special occasions.",
  },
  {
    title: "Wash, Treatment & Blow Dry",
    price: "From R220",
    description: "Deep care for healthy, soft, and beautiful hair.",
  },
  {
    title: "Silk Press",
    price: "From R450",
    description: "Smooth, elegant finish with shine and movement.",
  },
  {
    title: "Wig Installation",
    price: "From R500",
    description: "Clean installation, styling, and natural-looking finish.",
  },
];

const galleryImages = [
  {
    src: "/images/demos/salon/gallery-1.jpg",
    title: "Braids styling",
    fallback: "Braids",
  },
  {
    src: "/images/demos/salon/gallery-2.jpg",
    title: "Silk press finish",
    fallback: "Silk Press",
  },
  {
    src: "/images/demos/salon/gallery-3.jpg",
    title: "Wig installation",
    fallback: "Wig Install",
  },
  {
    src: "/images/demos/salon/gallery-4.jpg",
    title: "Hair treatment",
    fallback: "Treatment",
  },
];

const testimonials = [
  {
    name: "Lerato M.",
    text: "The booking was easy and my braids came out beautifully. I loved the clean professional service.",
  },
  {
    name: "Anele K.",
    text: "I found the salon online, checked the prices, and booked on WhatsApp. Very convenient.",
  },
  {
    name: "Nandi S.",
    text: "The website made it easy to see services before visiting. The salon looked professional from the start.",
  },
];

const openingHours = [
  { day: "Monday - Friday", time: "09:00 - 18:00" },
  { day: "Saturday", time: "08:00 - 16:00" },
  { day: "Sunday", time: "Closed" },
];

function ImagePlaceholder({
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
    <div className={`group relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-stone-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 text-stone-950 shadow-lg backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-800">{label}</p>
      </div>
    </div>
  );
}

export default function SalonDemoPage() {
  return (
    <main className="bg-[#fff8f5] text-stone-950">
      {/* Top demo notice */}
      <div className="bg-stone-950 px-4 py-3 text-center text-sm font-semibold text-white">
        Demo website by Mzansi Web Studio — this can be customised for salons, barbers, spas, and beauty businesses.
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2b1714] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/demos/salon/hero-bg.jpg"
            alt="Luxury salon background"
            className="h-full w-full scale-105 object-cover opacity-55 blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f0f0c]/82 via-[#2b1714]/68 to-[#4a1730]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.10),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Mzansi demos
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-rose-100 md:flex">
              <Scissors className="h-4 w-4" />
              Premium Salon Demo
            </div>
          </div>

          <div className="grid gap-12 pb-16 pt-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20 md:pt-10">
            <div className="rounded-[2rem] border border-white/10 bg-black/10 p-1 backdrop-blur-[1px] md:bg-black/5">
              <div className="rounded-[1.8rem] p-1 md:p-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-300/15 px-4 py-2 text-sm font-black text-rose-100 ring-1 ring-rose-200/20">
                <Sparkles className="h-4 w-4" />
                Cape Town Hair & Beauty Studio
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Beauty that starts with confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-50/85">
                Bella Hair Studio helps women look and feel beautiful with professional braids, treatments, silk press, wig installation, and styling services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-2xl bg-rose-300 px-6 py-4 font-black text-stone-950 shadow-lg shadow-rose-950/20 transition hover:bg-rose-200"
                >
                  Book on WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["4.9", "Customer rating"],
                  ["800+", "Happy clients"],
                  ["Same day", "WhatsApp booking"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-3xl font-black text-rose-200">{value}</p>
                    <p className="mt-1 text-sm text-rose-50/75">{label}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-rose-300/20 blur-2xl md:block" />
              <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-amber-200/10 blur-2xl md:block" />

              <div className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <ImagePlaceholder
                  src="/images/demos/salon/hero.jpg"
                  alt="Salon client hair styling"
                  label="Hero Salon Image"
                  className="h-[460px] rounded-[1.7rem]"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-5 text-stone-950 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-500">Today’s opening</p>
                      <p className="text-lg font-black">09:00 - 18:00</p>
                    </div>
                  </div>
                  <a
                    href="#book"
                    className="mt-4 flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 font-black text-white"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo / brand strip */}
      <section className="border-b border-rose-100 bg-white px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Bella Hair Studio</p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">Professional hair care for everyday beauty.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-stone-600">
            <span className="rounded-full bg-rose-50 px-4 py-2">Braids</span>
            <span className="rounded-full bg-rose-50 px-4 py-2">Treatments</span>
            <span className="rounded-full bg-rose-50 px-4 py-2">Silk Press</span>
            <span className="rounded-full bg-rose-50 px-4 py-2">Wig Installation</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Popular salon services.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              A strong services section helps customers understand what the business offers before they make contact.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {salonServices.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.8rem] border border-rose-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                  <Scissors className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-2xl font-black text-rose-800">{service.price}</p>
                <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Image split */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder
              src="/images/demos/salon/about-1.jpg"
              alt="Salon interior"
              label="Salon Interior"
              className="h-72 rounded-[1.8rem]"
            />
            <ImagePlaceholder
              src="/images/demos/salon/about-2.jpg"
              alt="Hair stylist working"
              label="Stylist Working"
              className="mt-10 h-72 rounded-[1.8rem]"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">About us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              A warm beauty space with professional service.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Bella Hair Studio is designed for clients who want neat styling, healthy hair care, and a comfortable salon experience. From protective styles to treatments and elegant finishes, the goal is to make every client leave feeling confident.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced stylists",
                "Clean salon environment",
                "Quality hair products",
                "WhatsApp booking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-rose-50 p-4 font-bold text-stone-700">
                  <CheckCircle2 className="h-5 w-5 text-rose-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Gallery</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Show customers the quality.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                Image galleries are important for salons because customers want to see real work before booking.
              </p>
            </div>
            <a href="#book" className="inline-flex items-center rounded-2xl bg-stone-950 px-6 py-4 font-black text-white">
              Book now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.title} className="overflow-hidden rounded-[1.8rem] bg-white shadow-sm">
                <ImagePlaceholder
                  src={image.src}
                  alt={image.title}
                  label={image.fallback}
                  className="h-72"
                />
                <div className="p-5">
                  <h3 className="font-black">{image.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">Replace this placeholder with a real salon result image.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#2b1714] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-200">Why choose us</p>
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
                text: "The gallery and service sections help customers see the quality of the work.",
              },
              {
                icon: MessageCircle,
                title: "Easy booking",
                text: "Customers can quickly tap WhatsApp and start a booking conversation.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-300/15 text-rose-200">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-rose-50/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What clients say.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[1.8rem] border border-rose-100 bg-[#fff8f5] p-6">
                <Quote className="mb-5 h-8 w-8 text-rose-700" />
                <p className="leading-8 text-stone-700">“{testimonial.text}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="font-black">{testimonial.name}</p>
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / contact */}
      <section id="book" className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-stone-950 p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-200">Book now</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Ready for your new look?</h2>
            <p className="mt-5 leading-8 text-stone-300">
              Customers can send a WhatsApp message directly from the website to ask about availability, pricing, or appointments.
            </p>

            <div className="mt-8 space-y-4">
              <a href="#" className="flex items-center gap-4 rounded-2xl bg-green-500 p-4 font-black text-white">
                <MessageCircle className="h-6 w-6" />
                Book on WhatsApp
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                <Phone className="h-5 w-5 text-rose-200" />
                063 000 0000
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                <AtSign className="h-5 w-5 text-rose-200" />
                @bellahairstudio
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                <MapPin className="h-5 w-5 text-rose-200" />
                Cape Town, South Africa
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Opening hours</p>
            <h3 className="mt-3 text-3xl font-black">Visit the salon</h3>

            <div className="mt-8 space-y-4">
              {openingHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between rounded-2xl bg-rose-50 p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-rose-700" />
                    <p className="font-black">{item.day}</p>
                  </div>
                  <p className="font-semibold text-stone-600">{item.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex h-64 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-stone-200 to-rose-100 text-center">
              <div>
                <MapPin className="mx-auto mb-3 h-8 w-8 text-rose-700" />
                <p className="font-black text-stone-800">Google Maps Placeholder</p>
                <p className="mt-2 text-sm text-stone-600">A real map can be embedded here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mzansi Web Studio CTA */}
      <section className="bg-slate-950 px-4 py-16 text-white md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Mzansi Web Studio Demo</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Want a website like this for your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            This salon demo shows how your business can look more professional online with strong visuals, clear services, WhatsApp booking, pricing, gallery, and contact sections.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              View Mzansi Web Studio Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black text-white transition hover:bg-white/10"
            >
              Back to Demo Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
