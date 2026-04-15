"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceOptions = [
  "Lawn Care",
  "Landscape Design",
  "Hardscaping",
  "Tree Services",
  "Irrigation Systems",
  "Seasonal Cleanup",
  "Full Property Refresh",
  "Not Sure Yet",
];

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="estimate" className="py-24 bg-surface px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Get a Free Estimate
            </h2>
            <p className="text-on-surface-variant text-lg">
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {submitted ? (
            <div className="bg-surface-container-lowest rounded-[2rem] p-12 text-center">
              <CheckCircle className="w-16 h-16 text-primary-container mx-auto mb-6" />
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">
                Thank You!
              </h3>
              <p className="text-on-surface-variant text-lg">
                We&apos;ve received your request. A member of our team will
                reach out within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface placeholder:text-outline border-0 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(732) 555-0123"
                    className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface placeholder:text-outline border-0 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface placeholder:text-outline border-0 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Service Needed
                </label>
                <select
                  required
                  className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface border-0 outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your goals, property size, timeline..."
                  className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface placeholder:text-outline border-0 outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-on-secondary-container hover:text-on-secondary transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Send Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
