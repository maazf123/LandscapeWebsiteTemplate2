"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "The Modern Oasis",
    location: "Edison Heights",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsehiJ63oWdeqJkAJSb5pVCK5dLh25_Hz-Y1cumblCXlknxKqMTbEIJhl6gOOERXj7xbZhT985RVfGTjOndnp-oLIV8vMaIfuAGKQW83zJAJDYd9FG9SZTEwcNgxVvh-S46jdqo3Xw7wfZfOJh-f0v8rWj2lEUZwU0nEIki6l5NgFl76Br6YeQKXh6lwtodzLWsIOx_LQRlRjJBLMw42SRzI0LTVzQI-Eh8YzPw0614qyAHBVnL3lMTJdcryGiWP02TJX5snRu8CU",
    alt: "Modern luxury estate with infinity pool and gardens at dusk",
    featured: true,
  },
  {
    title: "The Formal Garden",
    location: "Metuchen Estate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY-3-kCjVQN-WxRpHgin5Q2xB3VEL3na3GyYMpdDSgMQeeMPYxFqRW9E0ERJNDZpVJq2wg-3_YEpjwrVUIK_ET1Fsq_2EIG8HbbRI777uybcmjJ1b8NX61et7sNveMZznIrJP-I5oWgEhHgzXq3oP2WsEpzUWK1xoCZ9jdGE6B7c4Ihbg6fIZxrJZEBZx0Zt_uSt0sGAvjsCGiduLT7uQPvU2be8iMUJe38NCBdf-Z31PGPDT49gBMyd43nenfboX8_BQwf4flCEg",
    alt: "Formal boxwood hedges and colorful flower beds",
    featured: false,
  },
  {
    title: "The Woodland Path",
    location: "Woodbridge",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3mKmh5ntKOo_owxcljM9d9h1D7wX7wRDTSpfWMXREM3EqqOk4WWdzj6PvTyCDItHCJVooWUUXTkmmaiUbCMeVeHBGK4G9Q80ieEWUkCe-6lsrq8fZ5JUK2k_VXTQpw7PiYMSWXz-evTubbEAPlRtrfEt45RIOftMGg81jKRJT8-r6LcNEdtU9kRrwaz7Okhu7GxwshTH3oyBUYAgpYrn3lRXKibrwjvzTgItrd2gCOVicJtZshileIA4m9ZxdCt2ZZ2fHSNs96J8",
    alt: "Artisan flagstone path winding through a lush wooded area",
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">
              Portfolio of Estates
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl">
              A glimpse into the sanctuaries we&apos;ve built across Central
              Jersey.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured large card */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] min-h-[400px]">
              <Image
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-primary/80 to-transparent">
                <span className="text-secondary-container font-bold text-sm tracking-widest uppercase">
                  {projects[0].location}
                </span>
                <h4 className="text-white text-3xl font-headline font-bold mt-2">
                  {projects[0].title}
                </h4>
              </div>
            </div>

            {/* Smaller cards */}
            {projects.slice(1).map((project) => (
              <div
                key={project.title}
                className="relative group overflow-hidden rounded-[2rem] h-64 md:h-auto"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-bold text-xl">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
