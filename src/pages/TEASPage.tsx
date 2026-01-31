import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Clock, Users, BookOpen, Award, Target, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import teasImage from "@/assets/teas-student.jpg";

const WHATSAPP_LINK =
  "https://wa.me/19452541030?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";


const sections = [
  {
    title: "Reading",
    description: "Master key ideas, craft and structure, and integration of knowledge and ideas sections.",
    percentage: "22%",
  },
  {
    title: "Mathematics",
    description: "Excel in numbers, algebra, measurement, and data interpretation questions.",
    percentage: "18%",
  },
  {
    title: "Science",
    description: "Understand human anatomy, physiology, biology, and scientific reasoning.",
    percentage: "32%",
  },
  {
    title: "English & Language Usage",
    description: "Perfect grammar, vocabulary, and language structure comprehension.",
    percentage: "28%",
  },
];

const features = [
  {
    icon: Brain,
    title: "Science Section Mastery",
    description: "Deep dive into human body systems, biology concepts, and scientific reasoning critical for healthcare careers.",
  },
  {
    icon: Target,
    title: "Section-Specific Strategies",
    description: "Learn proven techniques for each TEAS section to maximize your score potential.",
  },
  {
    icon: Users,
    title: "Personalized Study Plans",
    description: "Custom learning paths based on your diagnostic assessment and target score goals.",
  },
  {
    icon: Clock,
    title: "Time Management Training",
    description: "Master pacing strategies to complete all sections within the allotted time.",
  },
];

const TEASPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${teasImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
              Conquer the TEAS with{" "}
              <span className="text-gradient-success">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              The Test of Essential Academic Skills (TEAS) is crucial for nursing and allied health program admissions. Our comprehensive preparation ensures you're ready to excel in every section.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Get TEAS Help Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TEAS Sections */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Master All TEAS Sections
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide targeted preparation for each section of the ATI TEAS exam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-gradient-success mb-2">{section.percentage}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our TEAS Preparation Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured, personalized approach designed to maximize your TEAS score.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-success flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-success rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your TEAS Success Story Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the many students who have achieved competitive TEAS scores with our expert guidance. Your healthcare career awaits!
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Begin TEAS Preparation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TEASPage;