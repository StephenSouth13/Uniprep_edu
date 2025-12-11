import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Linh Nguyen",
    role: "Harvard University | Class of 2025",
    university: "Harvard",
    content:
      "Uniprep completely transformed my approach to applications. The mentorship was invaluable, and I felt supported every step of the way. I got into Harvard, Stanford, and MIT!",
    rating: 5,
    image: "LN",
  },
  {
    name: "Minh Tran",
    role: "Stanford University | Class of 2025",
    university: "Stanford",
    content:
      "The pathway tool helped me understand exactly what I needed to work on. The structured approach and personalized feedback made all the difference in my essays.",
    rating: 5,
    image: "MT",
  },
  {
    name: "Hoa Pham",
    role: "MIT | Class of 2026",
    university: "MIT",
    content:
      "Best investment I made for my future. The mentors truly cared about my success, and the community of other ambitious students was incredibly motivating.",
    rating: 5,
    image: "HP",
  },
  {
    name: "Duc Hoang",
    role: "Princeton University | Class of 2026",
    university: "Princeton",
    content:
      "I improved my SAT score from 1450 to 1570 and got accepted to Princeton early action. The test prep and essay coaching were exceptional.",
    rating: 5,
    image: "DH",
  },
  {
    name: "Anh Le",
    role: "Yale University | Class of 2026",
    university: "Yale",
    content:
      "Coming from a non-traditional background, I worried about my chances. Uniprep helped me tell my story in a way that resonated with admissions officers.",
    rating: 5,
    image: "AL",
  },
  {
    name: "Khanh Ly",
    role: "UC Berkeley | Class of 2025",
    university: "Berkeley",
    content:
      "The IELTS preparation was thorough and practical. I scored 8.0 and gained the confidence I needed for university-level English.",
    rating: 5,
    image: "KL",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from students who achieved their university dreams with Uniprep's guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-all border-primary/10 hover:border-primary/50 flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-accent font-medium">{testimonial.university}</p>
                    </div>
                  </div>
                  <Quote className="w-4 h-4 text-accent/30" />
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
