import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Video, Calendar, Users, Laptop, Clock, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import onlineImage from "@/assets/online-classes.jpg";

const WHATSAPP_LINK = "https://wa.me/(945)254-1030?text=Hello%20Tasha%2C%20I%27m%20interested%20in%20online%20classes!";

const features = [
  {
    icon: Video,
    title: "Live Video Sessions",
    description: "Real-time interactive sessions with screen sharing, whiteboard tools, and instant feedback.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your lifestyle—morning, afternoon, evening, or weekends.",
  },
  {
    icon: Users,
    title: "One-on-One Attention",
    description: "Private tutoring sessions focused entirely on your learning needs and pace.",
  },
  {
    icon: Laptop,
    title: "Easy-to-Use Platform",
    description: "Simple setup with no complicated software—just click and learn from any device.",
  },
  {
    icon: Clock,
    title: "Recorded Sessions",
    description: "Review your lessons anytime with session recordings for extra practice.",
  },
  {
    icon: Globe,
    title: "Learn From Anywhere",
    description: "No commute needed—get expert tutoring from the comfort of your home.",
  },
];

const offerings = [
  "HESI exam preparation classes",
  "TEAS exam study sessions",
  "GED subject tutoring",
  "General academic support",
  "Test-taking strategy workshops",
  "Custom study plan development",
];

const OnlineClassesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${onlineImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
              Expert Tutoring,{" "}
              <span className="text-gradient-hero">Anywhere You Are</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              Our online classes bring professional exam preparation directly to you. Experience personalized, interactive learning sessions designed around your schedule and learning goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book Your First Session
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Online Learning Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              All the benefits of in-person tutoring with the convenience of learning from home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Online Class Offerings
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From exam preparation to academic support, our virtual classroom covers all your educational needs.
              </p>
              <ul className="space-y-4">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
              <Video className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Start Learning Today</h3>
              <p className="text-white/90 mb-6">
                Connect with Tasha on WhatsApp to schedule your first online session. Free consultation available!
              </p>
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineClassesPage;