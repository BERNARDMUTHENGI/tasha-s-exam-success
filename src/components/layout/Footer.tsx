import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";
import TashaLogo from "@/assets/tasha.jpeg";
const WHATSAPP_LINK =
  "https://wa.me/19452541030?text=Hello%20Tasha%2C%20I%20need%20help%20with%20my%20exam!";



export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <img
                  src={TashaLogo}
                  alt="Tasha The Writer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-background">Tasha</span>
                <span className="text-lg font-bold text-primary">TheWriter</span>
              </div>
            </Link>

            <p className="text-background/70 text-sm leading-relaxed">
              Empowering students to achieve academic excellence through expert
              exam assistance and personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hesi"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  HESI Exam Help
                </Link>
              </li>
              <li>
                <Link
                  to="/teas"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  TEAS Preparation
                </Link>
              </li>
              <li>
                <Link
                  to="/ged"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  GED Assistance
                </Link>
              </li>
              <li>
                <Link
                  to="/online-classes"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Online Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/other-services"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Other Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#testimonials"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/#how-it-works"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tashathewriter.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Tashathewriter.ttw@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19452541030"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1(945)254-1030
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} TashaTheWriter. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-background/50 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-background/50 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
