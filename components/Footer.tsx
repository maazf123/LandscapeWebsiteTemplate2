import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const serviceLinks = [
  "Lawn Care",
  "Landscape Design",
  "Hardscaping",
  "Tree Services",
  "Irrigation",
  "Seasonal Cleanup",
];

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Free Estimate", href: "#estimate" },
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface w-full rounded-t-[2.5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-inverse-primary" strokeWidth={2.5} />
            <span className="font-headline font-black text-2xl text-white">
              Greenway
            </span>
          </div>
          <p className="leading-relaxed text-inverse-on-surface/70">
            Cultivating organic excellence for premium estates across Central
            New Jersey since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-headline font-bold text-secondary-container mb-6">
            Company
          </h5>
          <ul className="flex flex-col gap-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-inverse-on-surface/70 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-headline font-bold text-secondary-container mb-6">
            Services
          </h5>
          <ul className="flex flex-col gap-4">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-inverse-on-surface/70 hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-headline font-bold text-secondary-container mb-6">
            Contact
          </h5>
          <ul className="flex flex-col gap-4">
            <li className="text-inverse-on-surface/70 flex items-center gap-3">
              <MapPin className="w-4 h-4 shrink-0" />
              Edison, NJ 08817
            </li>
            <li className="text-inverse-on-surface/70 flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              (732) 555-0123
            </li>
            <li className="text-inverse-on-surface/70 flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              hello@greenwaylandscaping.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-inverse-on-surface/50">
          <p>&copy; {new Date().getFullYear()} Greenway Landscaping. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-secondary-container font-bold">
              Your Agency
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
