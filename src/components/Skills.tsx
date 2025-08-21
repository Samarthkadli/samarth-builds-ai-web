import { Code, Brain, Users, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillGroup {
  title: string
  icon: React.ElementType
  skills: string[]
  color: string
}

const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: Code,
    skills: ["C", "C++", "Python", "SQL", "HTML", "JavaScript", "PHP"],
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "DBMS", "Machine Learning", "OOP"],
    color: "bg-accent/10 text-accent border-accent/20"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Adaptability", "Leadership", "Problem-Solving", "Time Management"],
    color: "bg-secondary/30 text-secondary-foreground border-secondary/40"
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English", "Kannada", "Hindi"],
    color: "bg-muted/50 text-muted-foreground border-muted/60"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions in AI/ML and web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => {
            const IconComponent = group.icon
            return (
              <Card 
                key={group.title} 
                className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-border/40 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-2 p-2 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {group.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className={`${group.color} hover:scale-105 transition-transform duration-200 text-xs font-medium px-2 py-1`}
                      >
                        {skill}
                      </Badge>
                    ))}
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