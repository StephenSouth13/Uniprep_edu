import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Your Path to Top Universities Starts Here
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-balance max-w-lg leading-relaxed">
              Join thousands of Vietnamese students who've gained admission to the world's leading universities. We
              provide expert mentorship, personalized pathways, and proven strategies for your success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/pathway" className="flex items-center gap-2">
                Start Your Pathway <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">5,000+</p>
              <p className="text-white/80 text-sm">Students Admitted</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
              <p className="text-white/80 text-sm">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-white/80 text-sm">Partner Universities</p>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>1-on-1 Expert Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Proven Track Record</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative h-96 md:h-full items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl"></div>
          <div className="w-full h-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center justify-center p-8 space-y-6">
            <div className="space-y-4 text-center">
              <div className="inline-block">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-accent/60 rounded-2xl mb-4 flex items-center justify-center">
                  <ArrowRight className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg">Ready to Begin?</h3>
              <p className="text-white/70 text-sm max-w-xs">
                Take our free assessment to discover your unique strengths and potential.
              </p>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              <Link href="/assessment">Start Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
