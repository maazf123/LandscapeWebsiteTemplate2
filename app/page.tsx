import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <footer
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, #0a3f22 0%, #07381e 55%, #06331b 100%)',
          position: 'relative',
          zIndex: 1,
          isolation: 'isolate',
        }}
      >
        <EstimateForm />
        <Footer />
      </footer>
    </>
  );
}
