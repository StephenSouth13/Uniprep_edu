import Hero from "@/components/sections/hero"
import WhyUniprep from "@/components/sections/why-uniprep"
import Pathway from "@/components/sections/pathway"
import Programs from "@/components/sections/programs"
import Philosophy from "@/components/sections/philosophy"
import Testimonials from "@/components/sections/testimonials"
import BlogHighlights from "@/components/sections/blog-highlights"
import FooterCTA from "@/components/sections/footer-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyUniprep />
      <Pathway />
      <Programs />
      <Philosophy />
      <Testimonials />
      <BlogHighlights />
      <FooterCTA />
    </main>
  )
}
