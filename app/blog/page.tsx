"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"
import blogVi from "@/i18n/vi/blog.json"
import blogEn from "@/i18n/en/blog.json"
import { useLanguage } from "@/lib/language-context"

export default function BlogPage() {
  const { language } = useLanguage()
  const content = language === "vi" ? blogVi : blogEn
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = content.pagination.postsPerPage
  const totalPages = Math.ceil(content.posts.length / postsPerPage)
  const startIdx = (currentPage - 1) * postsPerPage
  const visiblePosts = content.posts.slice(startIdx, startIdx + postsPerPage)

  const featuredPost = content.posts[0]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.hero.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.hero.description}</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">{content.hero.featured}</h2>
          <Card className="overflow-hidden border-accent/30 hover:border-accent transition-colors">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary to-accent opacity-20"></div>
              <CardHeader className="flex flex-col justify-center">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4">
                  {featuredPost.category}
                </div>
                <CardTitle className="text-3xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime} {language === "vi" ? "phút" : "min"}
                  </div>
                </div>
                <Button className="w-fit bg-accent hover:bg-accent/90 text-white">
                  {language === "vi" ? "Đọc tiếp" : "Read More"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardHeader>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-40 bg-gradient-to-br from-primary to-accent opacity-10"></div>
                <CardHeader>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3">
                    {post.category}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime} {language === "vi" ? "phút" : "min"}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    {language === "vi" ? "Đọc bài" : "Read Article"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
            >
              {content.pagination.previousPage}
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={page === currentPage ? "bg-accent text-white" : ""}
                variant={page === currentPage ? "default" : "outline"}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              {content.pagination.nextPage}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
