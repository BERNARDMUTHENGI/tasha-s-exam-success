import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, FileText, PenTool, GraduationCap, BookOpen, ClipboardList, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const WHATSAPP_LINK =
  "https://wa.me/19452542233?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";



const services = [
  {
    icon: FileText,
    title: "Essay Writing Assistance",
    description: "Get expert help with academic essays, personal statements, and application essays that stand out.",
  },
  {
    icon: PenTool,
    title: "Assignment Support",
    description: "Guidance and tutoring for coursework, homework, and academic assignments across various subjects.",
  },
  {
    icon: GraduationCap,
    title: "College Application Help",
    description: "Navigate the college application process with expert guidance on essays, interviews, and requirements.",
  },
  {
    icon: BookOpen,
    title: "Subject Tutoring",
    description: "One-on-one tutoring in math, science, English, and other core academic subjects.",
  },
  {
    icon: ClipboardList,
    title: "Study Skills Coaching",
    description: "Learn effective study techniques, time management, and organizational skills for academic success.",
  },
  {
    icon: Users,
    title: "Group Study Sessions",
    description: "Join peer study groups with expert facilitation for collaborative learning experiences.",
  },
];

const OtherServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              More Ways We Can{" "}
              <span className="text-brand-yellow">Help You Succeed</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Beyond exam preparation, TashaTheWriter offers a range of academic support services to help you achieve excellence in all areas of your education.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Explore Our Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Academic Support
            </h2>
            <p className="text-lg text-muted-foreground">
              Whatever your academic needs, we're here to help you reach your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevated max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See What You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always expanding our services to meet student needs. If you have a specific academic challenge or goal, reach out and let's discuss how we can help.
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Tell Us What You Need
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OtherServicesPage;