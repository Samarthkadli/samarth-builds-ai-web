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
    </section>
  )
}