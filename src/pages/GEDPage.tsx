import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Clock, Users, BookOpen, Award, Target, Calculator, FileText, Globe, Beaker } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import gedImage from "@/assets/ged-student.jpg";

const WHATSAPP_LINK = "https://wa.me/1234567890?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20GED%20exam!";

const subjects = [
  {
    icon: Calculator,
    title: "Mathematical Reasoning",
    description: "Build strong foundations in algebra, geometry, and data analysis.",
  },
  {
    icon: FileText,
    title: "Reasoning Through Language Arts",
    description: "Develop reading comprehension, writing, and language skills.",
  },
  {
    icon: Beaker,
    title: "Science",
    description: "Explore life science, physical science, and earth science concepts.",
  },
  {
    icon: Globe,
    title: "Social Studies",
    description: "Understand civics, U.S. history, economics, and geography.",
  },
];

const benefits = [
  "Flexible study schedule for working adults",
  "Patient, encouraging instruction style",
  "Practice with real GED-style questions",
  "Subject-specific focus based on your needs",
  "Test-taking strategies and confidence building",
  "Support from first lesson to certification",
];

const GEDPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gedImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              GED Exam Preparation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
              Earn Your GED with{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">Expert Support</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              It's never too late to achieve your high school equivalency diploma. With TashaTheWriter's patient guidance and proven methods, you'll gain the knowledge and confidence to pass your GED exam.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Get GED Help Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              All Four GED Subjects Covered
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive preparation for every section of the GED exam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-warm mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <subject.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{subject.title}</h3>
                <p className="text-sm text-muted-foreground">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Path to a Brighter Future
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a working adult, a parent returning to education, or someone looking to open new career doors, we're here to support your GED journey every step of the way.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-brand-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Transform Your Future</h3>
                <p className="text-muted-foreground">
                  A GED opens doors to higher education, better jobs, and personal achievement.
                </p>
              </div>
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Start Your GED Journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GEDPage;