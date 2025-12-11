import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Expert Mentorship",
    description:
      "Learn from mentors with experience at Harvard, MIT, Stanford, and other Ivy League universities. They've walked the path you're on.",
  },
  {
    icon: BookOpen,
    title: "Proven Pathways",
    description:
      "Structured programs specifically designed for Vietnamese students. We understand the unique challenges and opportunities you face.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Join thousands of ambitious students and build meaningful connections with peers on similar journeys toward university admission.",
  },
  {
    icon: TrendingUp,
    title: "Personalized Plans",
    description:
      "Customized learning paths tailored to your strengths, goals, timeline, and university preferences. No one-size-fits-all approach.",
  },
]

export default function WhyUniprep() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Uniprep?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're not just another test prep company. We're your partner in achieving your university dreams with a
            comprehensive approach to preparation and admission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="border-2 border-primary/10 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
