import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/19452542233?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";



export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-600 flex items-center justify-center shadow-cta animate-pulse-glow hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Chat with Tasha!
      </span>
    </a>
  );
};