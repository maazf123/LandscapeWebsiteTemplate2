"use client";

import Image from "next/image";
import { Trees, Compass, Hammer, TreePine, Droplets, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Trees,
    title: "Lawn Care",
    description: "Organic fertilizing and precision mowing schedules for a fairway-perfect finish.",
    image: "/services/lawn-care.png",
    alt: "Freshly mowed lawn with crisp parallel stripes in golden morning light",
  },
  {
    icon: Compass,
    title: "Landscape Design",
    description: "Master-planned blueprints that integrate native NJ flora with modern aesthetics.",
    image: "/services/landscape-design.png",
    alt: "Hand-drawn landscape blueprint with botanical samples on a designer's desk",
  },
  {
    icon: Hammer,
    title: "Hardscaping",
    description: "Artisan masonry, flagstone patios, and structural retaining walls that last a lifetime.",
    image: "/services/hardscaping.png",
    alt: "Bluestone flagstone patio with fire pit glowing at dusk",
  },
  {
    icon: TreePine,
    title: "Tree Services",
    description: "Structural pruning and professional health assessments by certified arborists.",
    image: "/services/tree-services.png",
    alt: "Mature oak canopy with golden sunlight filtering through the leaves",
  },
  {
    icon: Droplets,
    title: "Irrigation",
    description: "Smart water management systems that reduce waste while keeping foliage lush.",
    image: "/services/irrigation.png",
    alt: "Fine mist sprinkler arcing over lush garden foliage, backlit at dawn",
  },
  {
    icon: Sparkles,
    title: "Seasonal Cleanup",
    description: "Spring awakening and fall preparation to ensure year-round landscape health.",
    image: "/services/seasonal-cleanup.png",
    alt: "Pile of freshly raked autumn leaves on manicured lawn in late-afternoon light",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative pt-56 pb-24 bg-surface px-8 overflow-hidden -mt-[120px]"
    >
      {/* Simple gradient for hero→services blend */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none z-[5]"
        style={{
          background: `linear-gradient(to bottom, #144227 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-primary leading-tight mb-4">
                Our Curated Services
              </h2>
              <p className="text-on-surface-variant text-lg">
                Comprehensive estate management and design tailored to the
                unique ecology of New Jersey.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="group bg-[#fafcfa] p-8 rounded-[1.5rem] shadow-[0_2px_20px_-4px_rgba(0,43,20,0.08)] transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-surface-container-high hover:shadow-[0_16px_48px_-8px_rgba(0,43,20,0.18)] cursor-pointer">
                <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-6 text-primary">
                  <service.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
