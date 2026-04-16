"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, ShieldCheck, Clock, Star } from "lucide-react";

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

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24-Hour Response",
    desc: "We respond to every inquiry within one business day.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "Trusted by hundreds of homeowners across Central NJ.",
  },
];

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="estimate" className="pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-4 leading-tight">
                Get a Free Estimate
              </h2>
              <p className="text-[#a1d2ad] text-lg font-body leading-relaxed">
                Tell us about your project and we&apos;ll get back to you
                within 24 hours with a personalized quote.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#144227] flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-[#fed174]" />
                  </div>
                  <div>
                    <h3 className="text-white font-body font-semibold text-sm">
                      {badge.title}
                    </h3>
                    <p className="text-[#a1d2ad]/70 font-body text-sm mt-0.5">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 md:p-14 text-center">
                <CheckCircle className="w-16 h-16 text-[#144227] mx-auto mb-6" />
                <h3 className="text-2xl font-headline font-bold text-[#002b14] mb-3">
                  Thank You!
                </h3>
                <p className="text-[#414942] text-lg font-body">
                  We&apos;ve received your request. A member of our team will
                  reach out within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="est-name"
                      className="block text-xs font-bold uppercase tracking-widest text-[#00210e] mb-2 font-body"
                    >
                      Full Name
                    </label>
                    <input
                      id="est-name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full bg-white border border-[#c1c9c0] rounded-xl px-4 py-3 text-[#00210e] placeholder:text-[#717971] font-body outline-none focus:border-[#144227] focus:ring-2 focus:ring-[#144227]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="est-phone"
                      className="block text-xs font-bold uppercase tracking-widest text-[#00210e] mb-2 font-body"
                    >
                      Phone
                    </label>
                    <input
                      id="est-phone"
                      type="tel"
                      required
                      placeholder="(732) 555-0123"
                      className="w-full bg-white border border-[#c1c9c0] rounded-xl px-4 py-3 text-[#00210e] placeholder:text-[#717971] font-body outline-none focus:border-[#144227] focus:ring-2 focus:ring-[#144227]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="est-email"
                    className="block text-xs font-bold uppercase tracking-widest text-[#00210e] mb-2 font-body"
                  >
                    Email
                  </label>
                  <input
                    id="est-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white border border-[#c1c9c0] rounded-xl px-4 py-3 text-[#00210e] placeholder:text-[#717971] font-body outline-none focus:border-[#144227] focus:ring-2 focus:ring-[#144227]/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="est-service"
                    className="block text-xs font-bold uppercase tracking-widest text-[#00210e] mb-2 font-body"
                  >
                    Service Needed
                  </label>
                  <select
                    id="est-service"
                    required
                    className="w-full bg-white border border-[#c1c9c0] rounded-xl px-4 py-3 text-[#00210e] font-body outline-none focus:border-[#144227] focus:ring-2 focus:ring-[#144227]/20 transition-all cursor-pointer"
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
                  <label
                    htmlFor="est-message"
                    className="block text-xs font-bold uppercase tracking-widest text-[#00210e] mb-2 font-body"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="est-message"
                    rows={4}
                    placeholder="Describe your goals, property size, timeline..."
                    className="w-full bg-white border border-[#c1c9c0] rounded-xl px-4 py-3 text-[#00210e] placeholder:text-[#717971] font-body outline-none focus:border-[#144227] focus:ring-2 focus:ring-[#144227]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#fed174] text-[#785800] px-8 py-4 rounded-xl font-bold text-lg hover:brightness-105 transition-all flex items-center justify-center gap-3 cursor-pointer font-body mt-1"
                >
                  Send Request
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
