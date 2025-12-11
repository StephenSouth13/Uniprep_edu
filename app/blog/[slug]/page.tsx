"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import blogVi from "@/i18n/vi/blog.json"
import blogEn from "@/i18n/en/blog.json"
import { useLanguage } from "@/lib/language-context"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage()
  const content = language === "vi" ? blogVi : blogEn

  const post = content.posts.find((p) => p.slug === params.slug)
  const recommendedPosts = content.posts.filter((p) => p.slug !== params.slug).slice(0, 3)

  if (!post) {
    return (
      <main className="min-h-screen">
        <section className="section-padding">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "vi" ? "Bài viết không tìm thấy" : "Post not found"}
            </h1>
            <Button asChild>
              <Link href="/blog">{language === "vi" ? "Quay lại Blog" : "Back to Blog"}</Link>
            </Button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <section className="section-padding border-b border-border">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              {language === "vi" ? "Quay lại Blog" : "Back to Blog"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 border-b border-border">
        <div className="container max-w-2xl">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User size={18} />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {new Date(post.publishedAt).toLocaleDateString(language === "vi" ? "vi-VN" : "en-US")}
            </div>
            <div>{post.readTime} min read</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container max-w-2xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{post.content}</p>
            <p className="text-base text-foreground leading-relaxed">
              {language === "vi"
                ? "Bài viết này cung cấp những kiến thức thực tế và hữu ích cho hành trình học tập của bạn. Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với đội ngũ tư vấn của Uniprep."
                : "This article provides practical insights for your learning journey. If you have any questions, feel free to contact our advisory team."}
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">{language === "vi" ? "Bài viết liên quan" : "Related Articles"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-primary to-accent opacity-10"></div>
                  <CardContent className="p-6">
                    <p className="text-xs text-accent font-semibold mb-2 uppercase">{relatedPost.category}</p>
                    <h3 className="font-semibold line-clamp-2 mb-3">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User size={14} />
                      {relatedPost.author}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
