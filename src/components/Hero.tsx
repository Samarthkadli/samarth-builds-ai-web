import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/hero-bg.jpg"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Open Google Drive resume link
    window.open('https://drive.google.com/uc?export=download&id=1ATjsmdbk_B57fpy06PZcub7MiZSVjp2s', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-shimmer animate-shimmer">
            Samarth Kadli
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            AI/ML Engineering Student • Python & Web Dev
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            I build practical, data-driven solutions in AI/ML and full-stack web applications. 
            Seeking entry-level roles to contribute from day one and grow with a high-impact team.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={downloadResume}
            className="bg-hero-gradient hover:opacity-90 transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg font-medium shadow-card hover:shadow-card-hover"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Download Resume
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg group"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/samarth-kadli-54337a253"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border/40 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Samarthkadli"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border/40 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}