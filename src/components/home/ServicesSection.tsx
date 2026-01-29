import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hesiImage from "@/assets/hesi-student.jpg";
import teasImage from "@/assets/teas-student.jpg";
import gedImage from "@/assets/ged-student.jpg";
import onlineImage from "@/assets/online-classes.jpg";

const services = [
  {
    title: "HESI Exam",
    description: "Comprehensive support for the Health Education Systems Incorporated exam. Excel in nursing school admissions with expert guidance.",
    image: hesiImage,
    href: "/hesi",
    color: "from-brand-teal to-brand-blue",
  },
  {
    title: "TEAS Exam",
    description: "Master the Test of Essential Academic Skills with proven strategies designed for healthcare program success.",
    image: teasImage,
    href: "/teas",
    color: "from-brand-green to-brand-green-band",
  },
  {
    title: "GED Exam",
    description: "Achieve your high school equivalency diploma with personalized preparation and expert support.",
    image: gedImage,
    href: "/ged",
    color: "from-brand-orange to-brand-orange-alt",
  },
  {
    title: "Online Classes",
    description: "Flexible virtual learning sessions tailored to your schedule. Learn from anywhere with one-on-one tutoring.",
    image: onlineImage,
    href: "/online-classes",
    color: "from-brand-navy to-brand-blue",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expert Exam Assistance for{" "}
            <span className="text-gradient-hero">Academic Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive range of academic exam support services designed to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-background/80 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};