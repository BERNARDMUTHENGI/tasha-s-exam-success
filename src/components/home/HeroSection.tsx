import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const WHATSAPP_LINK = "https://wa.me/1234567890?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-slide-up">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 5,000+ Students Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Achieve Excellence in
            <span className="block text-gradient-hero">HESI, TEAS & GED Exams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Expert academic exam assistance tailored to your success. Get personalized support, proven strategies, and guaranteed results with TashaTheWriter.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-background/90">98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-background/90">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-background/90">5+ Years Experience</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Get Started on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground">
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};