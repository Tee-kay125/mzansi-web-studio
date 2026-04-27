import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

export function MobileWhatsAppBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur-xl md:hidden">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 text-center font-black text-white shadow-lg shadow-green-950/30"
      >
        <MessageCircle className="h-5 w-5" />
        Get a Quote on WhatsApp
      </a>
    </div>
  );
}
