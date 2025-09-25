import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <BackgroundBeams className="fixed inset-0 z-0" />
    </main>
  );
}
