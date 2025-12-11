"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import programsVi from "@/i18n/vi/programs.json"
import programsEn from "@/i18n/en/programs.json"
import { useLanguage } from "@/lib/language-context"

export default function ProgramsPage() {
  const { language } = useLanguage()
  const content = language === "vi" ? programsVi : programsEn

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedField, setSelectedField] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("")

  const filteredPrograms = content.programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesField = !selectedField || program.level.includes(selectedField)
    const matchesLevel = !selectedLevel || program.level === selectedLevel
    const matchesDuration = !selectedDuration || program.duration.includes(selectedDuration)

    return matchesSearch && matchesField && matchesLevel && matchesDuration
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{content.hero.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.hero.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white">{content.hero.cta1}</Button>
              <Button variant="outline">{content.hero.cta2}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <section className="sticky top-20 z-40 bg-white border-b border-border shadow-sm py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={content.filters.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Field Filter */}
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-white text-sm"
            >
              <option value="">{content.filters.field}</option>
              {Object.entries(content.filters.fields).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-white text-sm"
            >
              <option value="">{content.filters.level}</option>
              {Object.entries(content.filters.levels).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-white text-sm"
            >
              <option value="">{content.filters.duration}</option>
              {Object.entries(content.filters.durations).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-border hover:border-accent/50"
              >
                <div className="h-24 bg-gradient-to-r from-primary to-accent opacity-10"></div>
                <CardHeader className="-mt-16 relative z-10">
                  <div className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 w-fit">
                    {program.level}
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-sm">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">{language === "vi" ? "Thời lượng" : "Duration"}</p>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">{language === "vi" ? "Hình thức" : "Format"}</p>
                      <p className="font-semibold text-xs">{program.format}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">{language === "vi" ? "Đầu ra" : "Outcome"}</p>
                      <p className="font-semibold text-xs line-clamp-1">{program.outcomes}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {language === "vi" ? "Chi tiết chương trình" : "View Details"} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {language === "vi" ? "Không tìm thấy chương trình phù hợp" : "No programs found"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Study Flow */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "vi" ? "Quy trình học tập" : "Learning Process"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => {
              const stepData = content.studyFlow[`step${step}` as keyof typeof content.studyFlow]
              return (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{stepData}</h3>
                  <p className="text-muted-foreground">
                    {content.studyFlow[`step${step}Desc` as keyof typeof content.studyFlow]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.finalCta.title}</h2>
          <p className="text-lg mb-8 opacity-90">{content.finalCta.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90">{content.finalCta.button1}</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              {content.finalCta.button2}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
