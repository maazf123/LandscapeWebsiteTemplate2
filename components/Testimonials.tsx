"use client";

import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Greenway transformed our overgrown backyard into a true sanctuary. Their attention to detail in the stone work and tree health is unmatched in Edison.",
    name: "Sarah J.",
    role: "Oak Tree Road Resident",
  },
  {
    quote: "Finally, a landscaping team that understands ecological balance. Our garden hasn't just looked better, it's actually healthier since they took over.",
    name: "Michael T.",
    role: "Estate Manager",
  },
  {
    quote: "The design phase was so professional. They used 3D renderings to show us exactly how the seasons would change our new hardscape layout.",
    name: "David L.",
    role: "Business Owner",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-container-highest px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-headline font-black text-primary text-center mb-16">
            The Greenway Experience
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] h-full flex flex-col">
                <div className="flex gap-1 text-secondary mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-primary italic leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-headline font-black text-primary">
                    {t.name}
                  </p>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
