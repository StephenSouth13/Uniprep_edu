import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const pathwaySteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Take our comprehensive assessment and personality inventory to understand your strengths, learning style, and university preferences.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Work with experienced mentors to create a personalized 12-24 month roadmap aligned with your goals and target universities.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "Engage in structured courses, intensive practice sessions, mock interviews, and targeted skill-building across academics and leadership.",
  },
  {
    number: "04",
    title: "Application",
    description:
      "Receive expert guidance on essays, application strategy, interview preparation, and navigating the entire admissions process.",
  },
  {
    number: "05",
    title: "Success",
    description:
      "Get offers from top universities and make your final decision with confidence. Begin your university journey prepared and ready.",
  },
]

export default function Pathway() {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your 5-Step Pathway to Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step journey from where you are now to university admission. Each phase builds on the last,
            ensuring comprehensive preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pathwaySteps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="h-full hover:shadow-lg transition-all border-primary/10 hover:border-primary/50">
                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                      <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{step.description}</p>
                </div>
              </Card>

              {/* Connection line */}
              {index < pathwaySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-8 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each pathway is customized based on your starting point, target universities, and personal goals. We adapt
            as you grow and evolve.
          </p>
        </div>
      </div>
    </section>
  )
}
