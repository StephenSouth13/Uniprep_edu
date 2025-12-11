import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    slug: "sat-tips-2025",
    title: "Top 10 SAT Tips That Actually Work in 2025",
    excerpt:
      "Discover proven strategies used by students who scored 1500+ on the SAT. Learn the insider secrets that test prep companies don't want you to know.",
    date: "Dec 15, 2024",
    author: "Dr. Sarah Chen",
    category: "Test Prep",
  },
  {
    slug: "university-essays",
    title: "Writing Compelling University Essays That Stand Out",
    excerpt:
      "Learn how to tell your story in a way that resonates with admissions officers. We analyze essays from admitted students and show you the formula.",
    date: "Dec 10, 2024",
    author: "James Mitchell",
    category: "Essays",
  },
  {
    slug: "gap-year-guide",
    title: "The Complete Gap Year Guide: Is It Right for You?",
    excerpt:
      "Explore the benefits and challenges of taking a gap year before university. Real stories from students who took the unconventional path.",
    date: "Dec 5, 2024",
    author: "Emma Rodriguez",
    category: "Career Planning",
  },
]

export default function BlogHighlights() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights, strategies, and resources to help you succeed in your university preparation and admissions
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="hover:shadow-lg transition-all border-primary/10 hover:border-primary/50 flex flex-col overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <p className="text-xs font-medium text-accent uppercase tracking-wide">{post.date}</p>
                  <span className="text-xs text-muted-foreground">•</span>
                  <p className="text-xs font-medium text-primary uppercase tracking-wide">{post.category}</p>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-base mb-4 flex-grow leading-relaxed">{post.excerpt}</CardDescription>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <User className="w-3 h-3" />
                  <span>By {post.author}</span>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild variant="outline" className="w-full group bg-transparent hover:bg-primary/5">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="/blog">
              Explore Full Blog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
