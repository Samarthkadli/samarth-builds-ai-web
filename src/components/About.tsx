import { User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Photo */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/9da462a3-c49f-4e75-b256-ed915bb5477c.png" 
                alt="Samarth Kadli - AI/ML Engineering Student" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* About Content */}
          <div className="order-1 md:order-2">
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am an enthusiastic Artificial Intelligence and Machine Learning engineering student 
                  with a strong foundation in programming, problem-solving, and data-driven technologies. 
                  With hands-on project experience in both web development and machine learning, I am 
                  passionate about building innovative solutions that create real-world impact.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am seeking opportunities to contribute to forward-thinking organizations where I can 
                  apply my technical expertise, collaborate with diverse teams, and grow as a professional 
                  while making meaningful contributions from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}