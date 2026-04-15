"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    value: "4.9",
    label: "Google Rating",
    description: "Trusted by hundreds of homeowners in Edison and surrounding counties.",
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Decades of combined expertise in arboriculture and landscape architecture.",
  },
  {
    value: "Zero",
    label: "Chemical Waste",
    description: "We use 100% organic compounds to protect your family and the local ecology.",
  },
  {
    value: "24h",
    label: "Emergency Response",
    description: "Our tree specialists are available around the clock for storm recovery.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary font-headline font-black text-4xl">
                  {stat.value}
                </h4>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
                <p className="text-on-surface-variant text-sm">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
