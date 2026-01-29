import { MessageCircle, ClipboardCheck, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Tasha",
    description: "Reach out via WhatsApp to discuss your exam goals and current preparation level.",
    color: "bg-brand-teal",
  },
  {
    icon: ClipboardCheck,
    title: "Get Your Plan",
    description: "Receive a personalized study plan tailored to your timeline, strengths, and areas for improvement.",
    color: "bg-brand-green",
  },
  {
    icon: BookOpen,
    title: "Start Learning",
    description: "Engage in focused preparation sessions with expert guidance and comprehensive study materials.",
    color: "bg-brand-blue",
  },
  {
    icon: Trophy,
    title: "Achieve Success",
    description: "Take your exam with confidence and achieve the scores you need to reach your goals.",
    color: "bg-brand-orange",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Your journey to academic success starts with a simple conversation. Here's how we'll work together.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};