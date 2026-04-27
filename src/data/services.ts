import { Globe2, ShoppingCart, Store, CalendarCheck, BarChart3, MessageCircle } from "lucide-react";

export const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites for small businesses that need customers to find them, trust them, and contact them easily.",
    icon: Globe2,
    features: ["Mobile-friendly pages", "WhatsApp button", "Services section", "Gallery", "Contact form", "Google Maps"],
    bestFor: "Salons, tutors, mechanics, churches, car washes, contractors, and service businesses.",
  },
  {
    title: "Online Catalogues",
    description:
      "A product catalogue for businesses selling through WhatsApp, Facebook, or Instagram without needing full online payments yet.",
    icon: Store,
    features: ["Product categories", "Product pages", "Product images", "WhatsApp order button", "Delivery/collection info"],
    bestFor: "Clothing sellers, cosmetics, perfumes, cakes, food packs, school uniforms, and small shops.",
  },
  {
    title: "Ecommerce Stores",
    description:
      "Full online stores where customers can browse products, add to cart, checkout, pay online, and place orders.",
    icon: ShoppingCart,
    features: ["Product catalogue", "Cart", "Checkout", "Payment integration", "Order management", "Customer notifications"],
    bestFor: "Serious product sellers that want customers to place and pay for orders online.",
  },
  {
    title: "Booking Systems",
    description:
      "Simple booking and enquiry systems that help businesses collect customer information and reduce manual admin.",
    icon: CalendarCheck,
    features: ["Booking forms", "Quote request forms", "Customer details", "Email/WhatsApp follow-up flow"],
    bestFor: "Tutors, coaches, beauty businesses, consultants, training centres, and service providers.",
  },
  {
    title: "Business Dashboards",
    description:
      "Simple admin tools for businesses that need to manage enquiries, registrations, payments, products, or reports.",
    icon: BarChart3,
    features: ["Admin dashboards", "Customer lists", "Payment tracking", "Product updates", "Simple reports"],
    bestFor: "Businesses that need more than a normal website.",
  },
  {
    title: "WhatsApp-Ready Websites",
    description:
      "Websites designed around quick customer contact, so visitors can message the business without struggling.",
    icon: MessageCircle,
    features: ["Floating WhatsApp CTA", "Click-to-chat buttons", "Fast mobile layout", "Clear contact sections"],
    bestFor: "Any business that depends on WhatsApp enquiries.",
  },
];
