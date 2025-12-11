import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Clock, BookOpen } from "lucide-react"

const programs = [
  {
    id: "sat-prep",
    title: "SAT Preparation",
    description:
      "Comprehensive SAT prep covering all sections: Reading & Writing, Math, with full-length practice tests and adaptive learning.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    students: "2,400+",
    color: "from-primary to-secondary",
    highlights: [
      "12 full-length practice tests",
      "Strategy sessions for each section",
      "Essay writing intensive",
      "Test day preparation",
    ],
  },
  {
    id: "act-prep",
    title: "ACT Preparation",
    description:
      "Intensive ACT course focusing on time management, strategic problem-solving, and mastering all four sections.",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    students: "1,800+",
    color: "from-accent to-primary",
    highlights: [
      "10 full-length practice tests",
      "Science section mastery",
      "Speed and accuracy training",
      "Composite score optimization",
    ],
  },
  {
    id: "ielts-prep",
    title: "IELTS Preparation",
    description:
      "Master English proficiency with IELTS-focused instruction covering Speaking, Writing, Reading, and Listening sections.",
    duration: "8 weeks",
    level: "Intermediate to Advanced",
    students: "1,200+",
    color: "from-secondary to-accent",
    highlights: [
      "Real exam simulations",
      "Native speaker instructors",
      "Band score targeting",
      "Interview preparation",
    ],
  },
]

export default function Programs() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expert Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive preparation courses designed by leading educators and proven through thousands of successful
            admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="overflow-hidden hover:shadow-xl transition-all border-primary/10 hover:border-primary/50 flex flex-col"
            >
              <div className={`h-32 bg-gradient-to-r ${program.color} opacity-10`}></div>
              <CardHeader className="-mt-20 relative z-10 pb-3">
                <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-xs">Duration</p>
                      <p className="font-semibold text-foreground">{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground text-xs">Students</p>
                      <p className="font-semibold text-foreground">{program.students}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-accent" /> What's Included:
                  </p>
                  <ul className="space-y-1.5">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full group bg-primary hover:bg-primary/90 text-white">
                  <Link href={`/programs/${program.id}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
