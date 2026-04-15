"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-20 px-8">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary-container to-[#2d5a3d] rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center">
          <h2 className="text-white text-4xl md:text-6xl font-headline font-black mb-8 leading-tight">
            Ready to curate your
            <br />
            perfect estate?
          </h2>
          <p className="text-primary-fixed text-lg mb-12 max-w-xl">
            Schedule a private consultation with our lead landscape architect
            today.
          </p>
          <a
            href="#estimate"
            className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-black text-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer"
          >
            Book Your Consultation
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
