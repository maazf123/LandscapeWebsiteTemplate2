"use client";

import Image from "next/image";
import { Trees, Compass, Hammer, TreePine, Droplets, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Trees,
    title: "Lawn Care",
    description: "Organic fertilizing and precision mowing schedules for a fairway-perfect finish.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1YDHxUDKSCShCcoB9Q0q_pCapzo88WQjOig0Aju3MTFBhH9L9ie2L0JTcJWOp-gxQfw5eWea6hrnQoGrFy93kLZ_9mmlTYlrEzi7eyPOlsGKL13E_3T8LtPFkdobOtx6b_diHjGHeA0LUGKVheYtqv69BesTrXEbx5vRpD2FEATaeftsltqQACb2cHDQlttdOykaV4tfZWrtb6OVxgaDlK9oKh0D1gWKlAVe5OGKmiirf5-Wodkp0QBcBnOYHpOug7s2W-JyAvgA",
    alt: "Vibrant green lawn with perfect parallel mowing stripes",
  },
  {
    icon: Compass,
    title: "Landscape Design",
    description: "Master-planned blueprints that integrate native NJ flora with modern aesthetics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP5ranBEU3qXq1QQMasH9PfSQNG7IHKYSYSbTPEbKZa1aaHuU466TcnypX6goHZ5gasjzf4OIHv4bk_TrWDMxjceg5adRaQaiUfwtUYwy5W9akZSxjUVjfpgE50mGxDL0kQqY6s7QcZdYKgfYS-e_8rygIoSQE8XDCAhVrIPmz-3zBo5tUL0xLNiAZMUMTPAbbqG6ZYNu8rjdX-kNwuG_6AElChGLNNd-nHjfoCZabhl9LM_AQm7CR9QP4M7IpMzOf-i-YNC16oZc",
    alt: "Architectural landscape blueprint on wooden desk",
  },
  {
    icon: Hammer,
    title: "Hardscaping",
    description: "Artisan masonry, flagstone patios, and structural retaining walls that last a lifetime.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMs3TudUW1eySi1gEPLFUbr0GMViFg-izp4b5aSDu86nl2qNYUa02waFXe0DEH9rZaDIBNbFM3wXQFxEYI7-XJTh0elSAV35jIku_ujQgRSw8bU_6vqUeG8x-cwDaychSHadxBmgVQf3RMlOQAb0dPuz_unHUttF2xX4O7MbtP_GQ1f2Ag3EH4QGM5VBjlAc0UgsMadJJdZPxdSOD7yIeQ3JfkQFecb1SBBLvHtnNWIYXVUel2s-31YiQlcYOGOX0O0SxgeREfJIU",
    alt: "Elegant flagstone patio with fire pit and seating",
  },
  {
    icon: TreePine,
    title: "Tree Services",
    description: "Structural pruning and professional health assessments by certified arborists.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjSCBBaxvYYOOwK20KJ9kBPGUOGxrYThrelc85r26jCIbw-rcrC0DTUXIPZ-jJsvbuQtGVRY87pyy1R8LYmmf3JgQ2K9zY4WL49vsqDcb17QWW32ZuC-G1tSERYiEkCoZ4-6x8Q0N2lDzdC-7nQFcymzH-hrpEe1uvhrnP-LJhznGQdDvpVko1boxYWXUgyerLrf9k3sfqQZ3ocwyn4iumsf9TIPc4auPN8sM-v_2OLY285jBAvjJt2drNmWcqH5solGmGJp3iqo",
    alt: "Tall oak trees with sunlight filtering through canopy",
  },
  {
    icon: Droplets,
    title: "Irrigation",
    description: "Smart water management systems that reduce waste while keeping foliage lush.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsLrRaLOdSVU5PYS0zBjlFGf5HaBoYjUCFTCX_KaxkQ82a5NI6Ns55UcV-qYZPloew2I8fKDB8gJ7gbumjC58IDzMdU167jOe-hyD_I6I4LGPpIsWjwm_SALMoSt-81BW8MOp6CwmzmwYcKrDZrTMvF2mrtmIJ4B-atR3lemw-CYJOxk5UXpcUzs4cOTfMiHU9yx623KewGQ_JXeJ1W9LeFQE5Y9JdiaLACdZ1u9Oc4aRXCWMQ7KvPYELxvWQkh62OGq_FKisgrkQ",
    alt: "Modern sprinkler system watering a garden in morning mist",
  },
  {
    icon: Sparkles,
    title: "Seasonal Cleanup",
    description: "Spring awakening and fall preparation to ensure year-round landscape health.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHYF16fvrghBeEmPf0-c_EmDnNo1fBh-rRDqnfSV2P_0G1X349T7cP0uyxMLF1RnJCXNq_q3u1NZq2vc6KjdIWvJ5N1phAioWDbQDxOxmAET13xnwwtEDzzgoJ348wrlSLR9DKNTRAOe2FiHEKziKSoau5Pquxb77nOhv_x4SSlE0_G11C-ylbaRsBNrPebhe4h0AvYYvUH7GqdI6N-nqrQoTjdKWoUJ1Lkejdfbzm-c4f7sNkJVeD7kMly4UMym_AYxt6CAy_Ng",
    alt: "Golden autumn leaves being raked on a green lawn",
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
