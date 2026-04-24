import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import HorizontalSections from "@/components/HorizontalSections";

export default function Home() {
  return (
    <main className="relative h-[100dvh] overflow-hidden">
      <div className="relative z-10">
        <HorizontalSections>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Contact />
        </HorizontalSections>
      </div>
      <BackgroundBeams className="fixed inset-0 z-0" />
    </main>
  );
}
