"use client"

import { useState } from "react"
import { Shield, BookOpen, Users, Award, Lightbulb, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

interface TeamMember {
  id: string
  name: string
  role: {
    vi: string
    en: string
  }
  bio: {
    vi: string
    en: string
  }
  image: string
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Hương Nguyễn",
    role: { vi: "Giám đốc Học thuật", en: "Academic Director" },
    bio: {
      vi: "14 năm kinh nghiệm giáo dục đại học, tốt nghiệp University of Cambridge",
      en: "14 years of higher education experience, Cambridge University alumni",
    },
    image: "/academic-director-professional.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Anh Trần",
    role: { vi: "Trưởng phòng IELTS & Academic English", en: "Head of IELTS & Academic English" },
    bio: {
      vi: "Chuyên gia IELTS 10 năm, giảng viên tại 5 trường đại học hàng đầu",
      en: "10 years IELTS expertise, lecturer at 5 top universities",
    },
    image: "/english-teacher-professional.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Linh Trần",
    role: { vi: "Cố vấn Tuyển sinh & Hướng nghiệp", en: "Admissions & Career Counselor" },
    bio: {
      vi: "Hỗ trợ 500+ học sinh đỗi đại học, chuyên gia về Portfolio & Essay",
      en: "Helped 500+ students get into universities, Portfolio & Essay specialist",
    },
    image: "/career-counselor-professional.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Khanh Phạm",
    role: { vi: "Giáo viên Kỹ năng Học thuật", en: "Academic Skills Instructor" },
    bio: {
      vi: "Phát triển chương trình lộ trình chuẩn bị đại học, tốt nghiệp NYU",
      en: "Curriculum developer, NYU graduate",
    },
    image: "/instructor-professional-development.jpg",
    linkedin: "https://linkedin.com",
  },
]

const milestones = [
  { year: "2020", vi: "Thành lập Uniprep Vietnam", en: "Founded Uniprep Vietnam" },
  { year: "2021", vi: "Đạt 100 học sinh đỗi đại học top", en: "100 students accepted to top universities" },
  { year: "2022", vi: "Khai trương văn phòng tại TP.HCM & Hà Nội", en: "Opened offices in HCMC & Hanoi" },
  { year: "2023", vi: "Phát triển 15 chương trình học", en: "Developed 15 study programs" },
  { year: "2024", vi: "Mở rộng đạo tạo trực tuyến toàn cầu", en: "Expanded global online programs" },
]

export default function AboutPage() {
  const { language } = useLanguage()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const content = {
    vi: {
      title: "Về UNIPREP VIETNAM",
      subtitle: "Sứ mệnh: Mở cửa đại học cho mỗi học sinh có hoài bão",
      mission: {
        title: "Sứ Mệnh & Tầm Nhìn",
        mission_text:
          "Giúp học sinh Việt Nam chuẩn bị toàn diện cho tuyển sinh đại học với lộ trình học tập được chứng minh, kỹ năng học thuật chuẩn Anh Mỹ, và hướng dẫn từ các chuyên gia hàng đầu.",
        vision_text:
          "Trở thành nền tảng tuyên bị đại học hàng đầu Đông Nam Á, nơi mọi học sinh được truyền cảm hứng, hỗ trợ, và phát triển hết tiềm năng của mình.",
      },
      why_different: "Tại sao Uniprep khác biệt?",
      features: [
        {
          icon: "BookOpen",
          title: "Chương trình Học thuật Tiên tiến",
          desc: "Dựa trên nghiên cứu khoa học mới nhất về giáo dục đại học",
        },
        {
          icon: "Users",
          title: "Đội ngũ Giáo viên Hàng đầu",
          desc: "Giáo viên có bằng cấp quốc tế, kinh nghiệm 10+ năm",
        },
        {
          icon: "TrendingUp",
          title: "Kết quả Đã Chứng Minh",
          desc: "95% học sinh đỗi đại học trong 3 năm qua",
        },
      ],
      team_title: "Đội Ngũ Chuyên Gia",
      partner_title: "Đối Tác & Công Nhận",
      timeline_title: "Quá Trình Phát Triển",
      cta: "Tư Vấn Miễn Phí",
    },
    en: {
      title: "About UNIPREP VIETNAM",
      subtitle: "Mission: Opening university doors for ambitious students",
      mission: {
        title: "Mission & Vision",
        mission_text:
          "Helping Vietnamese students comprehensively prepare for university admissions with a proven study pathway, international-standard academic skills, and guidance from leading experts.",
        vision_text:
          "Becoming Southeast Asia's leading university preparation platform, where every student is inspired, supported, and enabled to reach their full potential.",
      },
      why_different: "Why is Uniprep Different?",
      features: [
        {
          icon: "BookOpen",
          title: "Advanced Academic Programs",
          desc: "Based on the latest research in higher education",
        },
        {
          icon: "Users",
          title: "Top-Tier Teaching Team",
          desc: "International-qualified teachers with 10+ years experience",
        },
        {
          icon: "TrendingUp",
          title: "Proven Results",
          desc: "95% of students admitted to top universities in 3 years",
        },
      ],
      team_title: "Expert Team",
      partner_title: "Partners & Accreditations",
      timeline_title: "Our Journey",
      cta: "Free Consultation",
    },
  }

  const currentContent = content[language as keyof typeof content]
  const iconMap = { BookOpen, Users, TrendingUp } as const

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{currentContent.mission.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 bg-gradient-to-br from-white to-primary/5 hover:shadow-xl hover:shadow-primary/10 duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  {language === "vi" ? "Sứ Mệnh" : "Mission"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{currentContent.mission.mission_text}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors duration-300 bg-gradient-to-br from-white to-secondary/5 hover:shadow-xl hover:shadow-secondary/10 duration-300">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {language === "vi" ? "Tầm Nhìn" : "Vision"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{currentContent.mission.vision_text}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{currentContent.why_different}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-xl border border-primary/10 hover:border-primary/30 bg-gradient-to-br from-white to-primary/5 hover:shadow-lg transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-xl transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{currentContent.team_title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role[language as keyof typeof member.role]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio[language as keyof typeof member.bio]}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary text-primary hover:bg-primary/5 bg-transparent"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 backdrop-blur">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{currentContent.timeline_title}</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex-1"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg hidden md:flex">
                    {idx + 1}
                  </div>
                  <div className="flex-1 p-6 rounded-lg border border-primary/20 bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="font-bold text-primary text-lg mb-2">{milestone.year}</div>
                    <div className="text-foreground font-medium">{milestone[language as keyof typeof milestone]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="relative p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{language === "vi" ? "Sẵn sàng bắt đầu hành trình?" : "Ready to start your journey?"}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "vi"
                ? "Liên hệ với chúng tôi để nhận tư vấn học tập miễn phí từ các chuyên gia của Uniprep."
                : "Contact us for a free academic consultation from Uniprep experts."}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/admissions">{currentContent.cta}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
