"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Clock, Users } from "lucide-react"
import Link from "next/link"
import programsVi from "@/i18n/vi/programs.json"
import programsEn from "@/i18n/en/programs.json"
import { useLanguage } from "@/lib/language-context"

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const content = language === "vi" ? programsVi : programsEn

  const program = content.programs.find((p) => p.id === Number.parseInt(params.id))

  if (!program) {
    return (
      <main className="min-h-screen">
        <section className="section-padding">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "vi" ? "Chương trình không tìm thấy" : "Program not found"}
            </h1>
            <Button asChild>
              <Link href="/programs">{language === "vi" ? "Quay lại Programs" : "Back to Programs"}</Link>
            </Button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <section className="pt-12 pb-6">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/programs" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              {language === "vi" ? "Quay lại Programs" : "Back to Programs"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Program Header */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
        <div className="container max-w-2xl">
          <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {program.level}
          </div>
          <h1 className="text-4xl font-bold mb-6">{program.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{program.description}</p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <Clock size={20} />
                {language === "vi" ? "Thời lượng" : "Duration"}
              </div>
              <p className="text-lg font-bold">{program.duration}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <Users size={20} />
                {language === "vi" ? "Hình thức" : "Format"}
              </div>
              <p className="text-lg font-bold">{program.format}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <CheckCircle2 size={20} />
                {language === "vi" ? "Đầu ra" : "Outcome"}
              </div>
              <p className="text-lg font-bold">{program.outcomes}</p>
            </div>
          </div>

          <Button className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
            {language === "vi" ? "Đăng ký ngay" : "Enroll Now"}
          </Button>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding">
        <div className="container max-w-2xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{language === "vi" ? "Về chương trình này" : "About This Program"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">{language === "vi" ? "Mô tả chi tiết" : "Program Overview"}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {language === "vi" ? "Những gì bạn sẽ học" : "What You'll Learn"}
                </h3>
                <ul className="space-y-2">
                  {[
                    language === "vi" ? "Kiến thức chuyên sâu về lĩnh vực của bạn" : "In-depth knowledge in your field",
                    language === "vi"
                      ? "Kỹ năng thực tiễn được các công ty tuyển dụng"
                      : "Practical skills sought by employers",
                    language === "vi" ? "Kinh nghiệm làm việc trên dự án thực tế" : "Real-world project experience",
                    language === "vi" ? "Chứng chỉ được công nhận quốc tế" : "Internationally recognized certification",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
            <Link href="/admissions">{language === "vi" ? "Bắt đầu đơn đăng ký" : "Start Application"}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
