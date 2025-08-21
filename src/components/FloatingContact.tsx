import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingContact() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl bg-hero-gradient hover:opacity-90 transition-all duration-300 hover:scale-110 group"
      aria-label="Open contact form"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
    </Button>
  )
}