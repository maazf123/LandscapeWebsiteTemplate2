"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl rounded-full px-6 py-3 z-50 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-surface/90 shadow-[0_12px_32px_-4px_rgba(0,43,20,0.08)] backdrop-blur-xl"
            : "bg-surface/70 backdrop-blur-xl"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary-container" strokeWidth={2.5} />
          <span className="font-headline font-black text-xl text-primary">
            Greenway
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#estimate"
          className="hidden md:block bg-secondary text-on-secondary px-6 py-2 rounded-full font-bold text-sm hover:bg-on-secondary-container hover:text-on-secondary transition-colors cursor-pointer"
        >
          Free Estimate
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-surface/95 backdrop-blur-xl rounded-3xl p-8 z-40 flex flex-col gap-6 shadow-[0_12px_32px_-4px_rgba(0,43,20,0.1)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline font-bold text-lg text-primary hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#estimate"
              onClick={() => setMobileOpen(false)}
              className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold text-center hover:bg-on-secondary-container transition-colors"
            >
              Free Estimate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
