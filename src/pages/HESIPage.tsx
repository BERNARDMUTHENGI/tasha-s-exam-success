import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Clock, Users, BookOpen, Award, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import hesiImage from "@/assets/hesi-student.jpg";

const WHATSAPP_LINK =
  "https://wa.me/19452542233?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";


const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Content Review",
    description: "In-depth coverage of all HESI exam sections including Math, Reading, Vocabulary, Grammar, Biology, Chemistry, Anatomy & Physiology.",
  },
  {
    icon: Target,
    title: "Targeted Practice Tests",
    description: "Access realistic practice exams that mirror the actual HESI format, helping you identify and strengthen weak areas.",
  },
  {
    icon: Users,
    title: "One-on-One Tutoring",
    description: "Personalized sessions tailored to your learning style, schedule, and specific areas needing improvement.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Study on your terms with sessions available around the clock to fit your busy lifestyle.",
  },
];

const benefits = [
  "Proven strategies for each HESI section",
  "Critical thinking question mastery",
  "Time management techniques",
  "Stress reduction and test anxiety support",
  "Study materials and resources included",
  "Ongoing support until exam day",
];

const HESIPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hesiImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
              Master Your HESI Exam with{" "}
              <span className="text-gradient-hero">Expert Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              The Health Education Systems Incorporated (HESI) exam is your gateway to nursing school success. With TashaTheWriter's proven strategies and personalized support, you'll approach your exam with confidence and achieve the scores you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Get HESI Help Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive HESI Exam Support
            </h2>
            <p className="text-lg text-muted-foreground">
              Our HESI preparation program covers every aspect of the exam, ensuring you're fully prepared for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose TashaTheWriter for HESI Prep?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience helping students pass their HESI exams, we understand what it takes to succeed. Our approach combines expert knowledge with personalized attention.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Succeed?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of students who have achieved their HESI goals with our help.
                </p>
              </div>
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Start Your HESI Journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HESIPage;