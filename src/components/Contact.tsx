import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f0a9966c-36ec-450c-b139-99df51fadc19',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', message: '' })
        
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Ballari, Karnataka",
      href: "https://maps.google.com/?q=Ballari,Karnataka"
    },
    {
      icon: Mail,
      label: "Email",
      value: "kadlisamarth@gmail.com",
      href: "mailto:kadlisamarth@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8088059579",
      href: "tel:+918088059579"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samarth-kadli-54337a253",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Samarthkadli",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? I'm always excited to discuss new opportunities and innovative projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
            <CardHeader>
              <CardTitle className="text-xl font-heading flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-border/40 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border/40 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-border/40 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-hero-gradient hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg border border-border/40 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Additional Info */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Open to opportunities in</p>
                  <p className="font-medium text-primary">AI/ML Engineering • Python Development • Full-Stack Web Development</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}