export const siteConfig = {
  name: "Mzansi Web Studio",
  tagline: "Websites, ecommerce and business systems for growing South African businesses.",
  description:
    "Mzansi Web Studio builds professional websites, online catalogues, ecommerce stores, and business systems for South African small businesses.",
  phone: "063 723 8513",
  whatsappNumber: "27637238513",
  email: "thenat.robotics@gmail.com",
  location: "South Africa",
  whatsappMessage:
    "Hi Mzansi Web Studio, I need a website for my business. Please send me more information.",
};

export function getWhatsAppLink(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
