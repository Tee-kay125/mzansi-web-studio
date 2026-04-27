import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Heart,
  PackageCheck,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const products = [
  {
    name: "Glow Repair Serum",
    category: "Skincare",
    price: "R189",
    image: "/images/demos/beauty-store/product-1.jpg",
    tag: "Best Seller",
  },
  {
    name: "Hydrating Body Butter",
    category: "Body Care",
    price: "R129",
    image: "/images/demos/beauty-store/product-2.jpg",
    tag: "New Arrival",
  },
  {
    name: "Luxury Hair Oil",
    category: "Hair Care",
    price: "R149",
    image: "/images/demos/beauty-store/product-3.jpg",
    tag: "Popular",
  },
  {
    name: "Soft Matte Lip Kit",
    category: "Makeup",
    price: "R159",
    image: "/images/demos/beauty-store/product-4.jpg",
    tag: "Limited",
  },
];

const categories = ["Skincare", "Hair Care", "Body Care", "Makeup", "Fragrance", "Bundles"];

const benefits = [
  {
    icon: ShoppingCart,
    title: "Cart and checkout",
    text: "Customers can add products to cart and continue to checkout when the store is connected to payments.",
  },
  {
    icon: CreditCard,
    title: "Payment-ready layout",
    text: "The store can be prepared for online payments, EFT, collection, or WhatsApp order flow.",
  },
  {
    icon: Truck,
    title: "Delivery or collection",
    text: "Show delivery areas, collection points, courier rules, and order expectations clearly.",
  },
];

const reviews = [
  {
    name: "Mpho R.",
    text: "The product pages were easy to understand and checkout felt simple. The store looks clean and trustworthy.",
  },
  {
    name: "Kayla N.",
    text: "I liked seeing categories, product photos, and prices in one place instead of asking for everything on WhatsApp.",
  },
  {
    name: "Zanele P.",
    text: "The online store made the beauty brand look serious and professional. It feels ready for real customers.",
  },
];

function StoreImage({
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
    <div className={`group relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-800">{label}</p>
      </div>
    </div>
  );
}

export default function BeautyStoreDemoPage() {
  return (
    <main className="bg-[#fff7f2] text-stone-950">
      <div className="bg-stone-950 px-4 py-3 text-center text-sm font-semibold text-white">
        Demo ecommerce website by Mzansi Web Studio — this can be customised for beauty, cosmetics, clothing, food, and local product brands.
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/demos/beauty-store/hero.jpg"
            alt="Beauty ecommerce background"
            className="h-full w-full object-cover opacity-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/92 via-stone-950/70 to-rose-950/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(244,114,182,0.22),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(245,158,11,0.14),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to demos
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-rose-100 md:flex">
              <ShoppingBag className="h-4 w-4" />
              Premium Ecommerce Demo
            </div>
          </div>

          <div className="grid gap-12 pb-16 pt-8 md:grid-cols-[1fr_0.95fr] md:items-center md:pb-24 md:pt-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-300/15 px-4 py-2 text-sm font-black text-rose-100 ring-1 ring-rose-200/20">
                <Sparkles className="h-4 w-4" />
                Online Beauty Store Demo
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Sell beauty products with confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-50/90">
                Glow Beauty Store is a polished ecommerce demo for product-based businesses that need categories, product cards, cart flow, checkout readiness, and a professional brand experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-2xl bg-rose-300 px-6 py-4 font-black text-stone-950 shadow-lg shadow-rose-950/20 transition hover:bg-rose-200"
                >
                  Browse Products
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  Store Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["24/7", "Online store"],
                  ["6", "Product categories"],
                  ["Fast", "Order flow"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-3xl font-black text-rose-200">{value}</p>
                    <p className="mt-1 text-sm text-rose-50/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-rose-300/20 blur-2xl md:block" />
              <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-amber-200/10 blur-2xl md:block" />

              <div className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <StoreImage
                  src="/images/demos/beauty-store/banner.jpg"
                  alt="Beauty products banner"
                  label="Store Banner Image"
                  className="h-[460px] rounded-[1.7rem]"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-5 text-stone-950 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-500">Cart summary</p>
                      <p className="text-lg font-black">3 items ready for checkout</p>
                    </div>
                  </div>
                  <button className="mt-4 flex w-full items-center justify-center rounded-2xl bg-stone-950 px-4 py-3 font-black text-white">
                    Continue to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-rose-100 bg-white px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Glow Beauty Store</p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">A premium online store experience.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-stone-600">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-rose-50 px-4 py-2">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Featured products</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Product cards that sell clearly.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                Strong ecommerce pages help customers see photos, prices, categories, and purchase actions without asking for every detail on WhatsApp.
              </p>
            </div>
            <button className="inline-flex items-center rounded-2xl bg-stone-950 px-6 py-4 font-black text-white">
              View Cart <ShoppingCart className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="group overflow-hidden rounded-[1.8rem] border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <StoreImage
                    src={product.image}
                    alt={product.name}
                    label={product.category}
                    className="h-64"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-stone-950 px-3 py-1 text-xs font-black text-white">
                    {product.tag}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-700">{product.category}</p>
                  <h3 className="mt-2 text-xl font-black">{product.name}</h3>
                  <p className="mt-2 text-2xl font-black text-rose-800">{product.price}</p>
                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-950 px-4 py-3 font-black text-white transition hover:bg-stone-800">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature banner */}
      <section id="features" className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <StoreImage
            src="/images/demos/beauty-store/about.jpg"
            alt="Beauty store product collection"
            label="Brand Product Image"
            className="h-[460px] rounded-[2rem]"
          />

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Why ecommerce works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Move from scattered WhatsApp orders to a real online store.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              A proper ecommerce store helps product businesses look serious, organise their products, reduce repeated customer questions, and guide buyers toward checkout or WhatsApp ordering.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Product categories",
                "Cart and checkout flow",
                "Delivery/collection information",
                "Order-ready structure",
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

      {/* Benefits */}
      <section className="bg-stone-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-200">Store features</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Built for product-based businesses.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
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

      {/* Checkout flow */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Customer journey</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A simple path from browsing to ordering.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              { icon: Search, title: "Browse", text: "Customer views categories and product cards." },
              { icon: Heart, title: "Choose", text: "Customer compares product details and prices." },
              { icon: ShoppingCart, title: "Cart", text: "Customer adds products and reviews order." },
              { icon: PackageCheck, title: "Order", text: "Customer checks out or sends WhatsApp order." },
            ].map((step, index) => (
              <div key={step.title} className="rounded-[1.8rem] border border-rose-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="text-sm font-black text-rose-700">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What customers say.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[1.8rem] border border-rose-100 bg-[#fff7f2] p-6">
                <div className="mb-5 flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="leading-8 text-stone-700">“{review.text}”</p>
                <p className="mt-6 font-black">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mzansi CTA */}
      <section className="bg-slate-950 px-4 py-16 text-white md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Mzansi Web Studio Demo</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Want an ecommerce store like this?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            This beauty ecommerce demo shows how a product business can present categories, products, cart flow, checkout readiness, delivery information, and a polished brand experience.
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
