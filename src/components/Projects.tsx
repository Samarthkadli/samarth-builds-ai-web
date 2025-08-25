import { Database, Shield, Heart, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  technologies: string[]
  features: string[]
  icon: React.ElementType
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "Pharmacy Database Management System",
    description: "Full-stack web application for comprehensive pharmacy inventory, billing, and record management with secure authentication and responsive design.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Secure authentication system",
      "CRUD operations for inventory",
      "Responsive user interface",
      "Billing and record management"
    ],
    icon: Database,
    github: "https://github.com/Samarthkadli/PHP-project"
  },
  {
    title: "Fake News Detection System",
    description: "Machine learning model using Naïve Bayes algorithm to classify news articles as real or fake through advanced text preprocessing and feature extraction.",
    technologies: ["Python", "Machine Learning", "NLP", "Naïve Bayes"],
    features: [
      "Text preprocessing pipeline",
      "Feature extraction algorithms",
      "High accuracy classification",
      "Real-time news analysis"
    ],
    icon: Shield,
    github: "https://github.com/Samarthkadli/ML_project123"
  },
  {
    title: "Medicine Reminder Android App",
    description: "A caring Android app that reminds you to take your medicines on time, because health deserves love and attention.",
    technologies: ["Android Studio", "Java/Kotlin", "Room Database", "RecyclerView", "AlarmManager", "Notification Manager"],
    features: [
      "User Authentication - Register & login system",
      "Medicine Management - Add, edit, and delete medicines",
      "Smart Reminders - Timely alerts for every dose",
      "Schedule View - Daily & weekly medicine schedules",
      "Offline Support - Stores data locally using RoomDB",
      "User-Friendly UI - Card-based clean interface"
    ],
    icon: Heart,
    github: "https://github.com/Samarthkadli/Medicine-Reminder-Android-App"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in web development and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card 
                key={project.title}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-border/40 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium mb-2 text-sm text-foreground/80">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="font-medium mb-2 text-sm text-foreground/80">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-hero-gradient hover:opacity-90 transition-opacity"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}