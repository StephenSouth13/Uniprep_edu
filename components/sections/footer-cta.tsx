import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function FooterCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/50 to-primary/90 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">Ready to Transform Your Future?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of Vietnamese students who are preparing for top universities. Your journey to admission
              starts today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg hover:shadow-xl"
            >
              <Link href="/assessment" className="flex items-center gap-2">
                Start Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          <div className="pt-8 space-y-3">
            <p className="text-white/80 font-medium">What happens next:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>15-minute initial call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Free assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Personalized plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
