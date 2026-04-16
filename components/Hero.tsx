"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Leaf, Users, Award } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Users, label: "Expert Team" },
  { icon: Award, label: "Award Winning" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[115vh] flex items-center justify-center pt-24 pb-[15vh] overflow-hidden bg-gradient-to-br from-primary to-primary-container">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-bg.png"
          alt="Luxury landscaped estate at golden hour"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-container font-bold tracking-widest text-sm uppercase mb-4"
        >
          Edison&apos;s Premier Landscaping
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white text-5xl md:text-7xl font-headline font-black tracking-tight leading-[1.1] mb-6"
        >
          Transform Your
          <br />
          Outdoor Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-primary-fixed text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Curating organic excellence for premium estates in Edison, NJ. We
          blend sustainable design with architectural precision to cultivate your
          perfect sanctuary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#estimate"
            className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer"
          >
            Get a Free Estimate
          </a>
          <a
            href="#portfolio"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 pt-12 border-t border-white/10"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 text-primary-fixed/80"
            >
              <badge.icon className="w-5 h-5 text-secondary-container" />
              <span className="text-sm font-bold tracking-wide uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* No gradient here — Services section handles the full transition via overlap */}
    </section>
  );
}
