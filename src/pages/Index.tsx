import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { FloatingContact } from "@/components/FloatingContact"
import { FloatingParticles } from "@/components/FloatingParticles"
import { TwinklingStars } from "@/components/TwinklingStars"
import { WaveDivider } from "@/components/WaveDivider"

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <TwinklingStars />
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        <WaveDivider />
        
        <About />
        <WaveDivider />
        
        <Skills />
        <WaveDivider />
        
        <Projects />
        <WaveDivider />
        
        <Experience />
        <WaveDivider />
        
        <Contact />
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;