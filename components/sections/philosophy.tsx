import { CheckCircle2 } from "lucide-react"

export default function Philosophy() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Philosophy</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl border border-primary/10 p-8 md:p-12 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Uniprep, we believe that every student has unique potential and deserves guidance tailored to their
              circumstances. University admission isn't just about test scores—it's about discovering and presenting
              your authentic self to the world's leading institutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Holistic Development
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We focus on developing the whole person—academics, leadership, emotional intelligence, and
                      character. Strong test scores matter, but so do the qualities that make you a great student and
                      community member.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Personalized Pathways
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your journey is unique. We create customized plans that align with your specific goals,
                      circumstances, learning style, and target universities rather than following a cookie-cutter
                      approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Community & Support
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You're not alone. Our experienced mentors and peer community provide guidance, encouragement, and
                      accountability throughout your journey.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Proven Results
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our track record speaks for itself: 98% success rate, 5,000+ students admitted to top
                      universities, with average score improvements of 200+ points.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
