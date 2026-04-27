import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  CircleGauge,
  UserCheck,
} from "lucide-react";

const lessonPackages = [
  {
    name: "Starter Lessons",
    price: "R1,200",
    detail: "5 driving lessons for beginners who want to build confidence.",
    features: ["5 lessons", "Patient instructor", "Flexible times"],
  },
  {
    name: "Test Preparation",
    price: "R950",
    detail: "Focused support for learners preparing for their driving test.",
    features: ["3 focused lessons", "Test route practice", "Parking support"],
  },
  {
    name: "Full Licence Package",
    price: "R3,500",
    detail: "A complete package for learners who need structured support from start to test readiness.",
    features: ["12 lessons", "Progress tracking", "Test preparation"],
  },
];

const services = [
  "Manual driving lessons",
  "Automatic driving lessons",
  "Learner licence support",
  "Driving test preparation",
  "Parking and yard training",
  "Refresher lessons",
];

const testimonials = [
  {
    name: "Thabo M.",
    text: "The website made it easy to compare packages and book on WhatsApp. The lessons were clear and patient.",
  },
  {
    name: "Aisha K.",
    text: "I needed test preparation urgently. The package section helped me choose quickly and send an enquiry.",
  },
  {
    name: "Lunga P.",
    text: "The academy looked professional online, so I trusted them before I even made the first call.",
  },
];

const openingHours = [
  { day: "Monday - Friday", time: "08:00 - 18:00" },
  { day: "Saturday", time: "08:00 - 15:00" },
  { day: "Sunday", time: "By appointment" },
];

function DrivingImage({
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
    <div className={`group relative overflow-hidden bg-gradient-to-br from-sky-100 via-slate-100 to-blue-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-800">{label}</p>
      </div>
    </div>
  );
}

export default function DrivingSchoolDemoPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <div className="bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">
        Demo service website by Mzansi Web Studio — this can be customised for driving schools, tutors, training centres, and appointment-based businesses.
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/demos/driving-school/hero.jpg"
            alt="Driving school background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/68 to-sky-950/34" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_32%,rgba(56,189,248,0.20),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(250,204,21,0.14),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to demos
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-sky-100 md:flex">
              <Car className="h-4 w-4" />
              Premium Driving School Demo
            </div>
          </div>

          <div className="grid gap-12 pb-16 pt-8 md:grid-cols-[1fr_0.95fr] md:items-center md:pb-24 md:pt-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-300/15 px-4 py-2 text-sm font-black text-sky-100 ring-1 ring-sky-200/20">
                <CircleGauge className="h-4 w-4" />
                Professional Driving Lessons
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Learn to drive with confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50/90">
                Mzansi Driving Academy is a premium demo for driving schools that need lesson packages, instructor trust, WhatsApp booking, and clear test-preparation information.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-300 px-6 py-4 font-black text-slate-950 shadow-lg shadow-sky-950/20 transition hover:bg-sky-200"
                >
                  Book a Lesson
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Manual", "and automatic"],
                  ["Flexible", "lesson times"],
                  ["WhatsApp", "quick booking"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-3xl font-black text-sky-200">{value}</p>
                    <p className="mt-1 text-sm text-sky-50/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-sky-300/20 blur-2xl md:block" />
              <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-yellow-200/10 blur-2xl md:block" />

              <div className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <DrivingImage
                  src="/images/demos/driving-school/hero-card.jpg"
                  alt="Learner driver lesson"
                  label="Driving Lesson Image"
                  className="h-[460px] rounded-[1.7rem]"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-5 text-slate-950 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500">Next available lesson</p>
                      <p className="text-lg font-black">Today from 15:00</p>
                    </div>
                  </div>
                  <a
                    href="#book"
                    className="mt-4 flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 font-black text-white"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="border-b border-sky-100 bg-white px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Mzansi Driving Academy</p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">Driving lessons made clear and easy to book.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-600">
            {services.slice(0, 4).map((service) => (
              <span key={service} className="rounded-full bg-sky-50 px-4 py-2">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Lesson packages</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Clear packages help learners choose faster.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A good driving school website should make packages, pricing, services, and booking steps easy to understand.
              </p>
            </div>
            <a href="#book" className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 font-black text-white">
              Book Now <MessageCircle className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {lessonPackages.map((pkg) => (
              <div key={pkg.name} className="rounded-[1.8rem] border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Car className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className="mt-3 text-3xl font-black text-sky-800">{pkg.price}</p>
                <p className="mt-4 leading-7 text-slate-600">{pkg.detail}</p>

                <div className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-700" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-6 flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 font-black text-white">
                  Ask About This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <DrivingImage
              src="/images/demos/driving-school/instructor.jpg"
              alt="Driving instructor"
              label="Instructor Image"
              className="h-72 rounded-[1.8rem]"
            />
            <DrivingImage
              src="/images/demos/driving-school/car.jpg"
              alt="Driving school car"
              label="Training Car Image"
              className="mt-10 h-72 rounded-[1.8rem]"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Why learners choose us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Build trust before the first lesson.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Driving school clients need confidence. A strong website shows the instructor, packages, lesson types, location, operating hours, and a direct booking path.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Patient instructors",
                "Test preparation support",
                "Clear lesson packages",
                "Easy WhatsApp booking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-sky-50 p-4 font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-sky-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">What we offer</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Services that are easy to understand.</h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-[1.8rem] border border-sky-100 bg-white p-6 shadow-sm">
                <GraduationCap className="mb-5 h-7 w-7 text-sky-700" />
                <h3 className="text-xl font-black">{service}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  This section helps visitors quickly see if the school provides the lesson or support they need.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature dark section */}
      <section className="bg-slate-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-200">Website features</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Designed for bookings and enquiries.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp booking",
                text: "Customers can ask about packages, lesson times, and availability directly from the website.",
              },
              {
                icon: ShieldCheck,
                title: "Trust sections",
                text: "Show instructors, vehicles, learner support, reviews, and service areas clearly.",
              },
              {
                icon: UserCheck,
                title: "Lead generation",
                text: "Use forms or WhatsApp buttons to collect serious learner enquiries.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/15 text-sky-200">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-sky-50/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What learners say.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[1.8rem] border border-sky-100 bg-sky-50 p-6">
                <Quote className="mb-5 h-8 w-8 text-sky-700" />
                <p className="leading-8 text-slate-700">“{testimonial.text}”</p>
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

      {/* Contact / booking */}
      <section id="book" className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-200">Book a lesson</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Ready to start driving?</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Customers can send a WhatsApp message directly from the website to ask about package availability, lesson times, or test preparation.
            </p>

            <div className="mt-8 space-y-4">
              <a href="#" className="flex items-center gap-4 rounded-2xl bg-green-500 p-4 font-black text-white">
                <MessageCircle className="h-6 w-6" />
                Book on WhatsApp
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                <Phone className="h-5 w-5 text-sky-200" />
                063 000 0000
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 font-semibold text-white">
                <MapPin className="h-5 w-5 text-sky-200" />
                Cape Town, South Africa
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Opening hours</p>
            <h3 className="mt-3 text-3xl font-black">Lesson availability</h3>

            <div className="mt-8 space-y-4">
              {openingHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between rounded-2xl bg-sky-50 p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-sky-700" />
                    <p className="font-black">{item.day}</p>
                  </div>
                  <p className="font-semibold text-slate-600">{item.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex h-64 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-200 to-sky-100 text-center">
              <div>
                <MapPin className="mx-auto mb-3 h-8 w-8 text-sky-700" />
                <p className="font-black text-slate-800">Google Maps Placeholder</p>
                <p className="mt-2 text-sm text-slate-600">A real map can be embedded here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mzansi CTA */}
      <section className="bg-slate-950 px-4 py-16 text-white md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Mzansi Web Studio Demo</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Want a driving school website like this?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            This driving school demo shows how a service business can present packages, build trust, show availability, and collect WhatsApp enquiries.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 font-black text-slate-950 transition hover:bg-emerald-300"
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
