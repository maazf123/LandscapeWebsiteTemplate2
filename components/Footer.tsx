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
    <div className="pt-24 pb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#a1d2ad]" strokeWidth={2.5} />
            <span className="font-headline font-black text-2xl text-white">
              Greenway
            </span>
          </div>
          <p className="leading-relaxed text-[#a1d2ad]/70">
            Cultivating organic excellence for premium estates across Central
            New Jersey since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-headline font-bold text-[#fed174] mb-6">
            Company
          </h5>
          <ul className="flex flex-col gap-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#a1d2ad]/70 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-headline font-bold text-[#fed174] mb-6">
            Services
          </h5>
          <ul className="flex flex-col gap-4">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-[#a1d2ad]/70 hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-headline font-bold text-[#fed174] mb-6">
            Contact
          </h5>
          <ul className="flex flex-col gap-4">
            <li className="text-[#a1d2ad]/70 flex items-center gap-3">
              <MapPin className="w-4 h-4 shrink-0" />
              Edison, NJ 08817
            </li>
            <li className="text-[#a1d2ad]/70 flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              (732) 555-0123
            </li>
            <li className="text-[#a1d2ad]/70 flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              hello@greenwaylandscaping.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 pt-16 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#a1d2ad]/50">
          <p>&copy; {new Date().getFullYear()} Greenway Landscaping. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-[#fed174] font-bold">
              Your Agency
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
