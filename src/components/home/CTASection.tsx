import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const WHATSAPP_LINK =
  "https://wa.me/2549452541030?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";


export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Ace Your Exam?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Don't let exam anxiety hold you back. Join thousands of successful students who achieved their academic dreams with TashaTheWriter. Your success story starts with a simple message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp Now
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              Free consultation • No commitment required • Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};