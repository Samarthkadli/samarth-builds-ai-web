import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
  details?: string[]
  type: 'work' | 'education' | 'achievement'
}

const timelineItems: TimelineItem[] = [
  {
    title: "Python Development Intern",
    organization: "EZTS",
    period: "April 2024",
    description: "Strengthened Python fundamentals through real-world development tasks and gained practical software development experience.",
    details: [
      "Worked on real-world Python development tasks",
      "Gained hands-on experience with software development lifecycle",
      "Strengthened programming fundamentals and best practices"
    ],
    type: "work"
  },
  {
    title: "B.E. in Artificial Intelligence & Machine Learning",
    organization: "Ballari Institute of Technology and Management",
    period: "Dec 2022 – Present",
    description: "Currently pursuing Bachelor's degree with strong academic performance and focus on AI/ML technologies.",
    details: [
      "CGPA: 8.9/10",
      "Specialized coursework in AI/ML algorithms and applications",
      "Active participation in technical projects and hackathons"
    ],
    type: "education"
  },
  {
    title: "Pre-University Education",
    organization: "Sri Sharada PU College, Koppal",
    period: "2020 – 2022",
    description: "Completed pre-university education with focus on science and mathematics foundation.",
    details: ["Score: 66%", "Science stream with Mathematics"],
    type: "education"
  },
  {
    title: "High School Education",
    organization: "S.V.E.M High School, Koppal",
    period: "2016 – 2020",
    description: "Completed secondary education with excellent academic performance.",
    details: ["Score: 83.6%", "Strong foundation in core subjects"],
    type: "education"
  }
]

const achievements = [
  "Participant in HACKB-24 (24-hour inter-college hackathon, 2024)",
  "Completed multiple ML and web development projects",
  "Leadership & problem-solving contributions in team settings",
  "Strong academic performance throughout educational journey"
]

const certifications = [
  { name: "Python Internship Certificate — EZTS", link: "https://drive.google.com/file/d/199spuVcRZ88rA3umcpG4pyBztt5Hluxw/view?usp=sharing" },
  { name: "Simulink Onramp — MATLAB", link: "https://drive.google.com/file/d/1RjeTtH33Wkm-8rm3eAurtD3IhvVHdHOv/view?usp=sharing" },
  { name: "Google Cloud Generative AI Course", link: "https://drive.google.com/file/d/17mYGktmZXp6zxKOgNFmE7cniyctNi4Ux/view?usp=sharing" },
  { name: "HACKB-24 Hackathon Participation (2024)", link: "https://drive.google.com/file/d/19QCNtSfpe2LCVNd57-JFVZREFtu8ALVn/view?usp=sharing" }
]

function getIcon(type: string) {
  switch (type) {
    case 'work':
      return Briefcase
    case 'education':
      return GraduationCap
    default:
      return Calendar
  }
}

function getIconColor(type: string) {
  switch (type) {
    case 'work':
      return 'text-primary bg-primary/10'
    case 'education':
      return 'text-accent bg-accent/10'
    default:
      return 'text-muted-foreground bg-muted/20'
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in technology, education, and professional development
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const IconComponent = getIcon(item.type)
                const iconColorClass = getIconColor(item.type)
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Icon */}
                    <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-background ${iconColorClass} z-10 flex items-center justify-center`}>
                      <IconComponent className="h-2.5 w-2.5" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                            <Badge variant="outline" className="text-xs w-fit">
                              {item.period}
                            </Badge>
                          </div>
                          <p className="font-medium text-primary">{item.organization}</p>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardHeader>
                        {item.details && (
                          <CardContent className="pt-0">
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        )}
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Achievements and Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-foreground/90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-border/40">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  cert.link ? (
                    <a 
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Badge 
                        variant="secondary" 
                        className="block text-left p-3 h-auto bg-muted/30 hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium cursor-pointer"
                      >
                        {cert.name}
                      </Badge>
                    </a>
                  ) : (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="block text-left p-3 h-auto bg-muted/30 hover:bg-muted/50 transition-colors text-xs font-medium"
                    >
                      {cert.name}
                    </Badge>
                  )
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
