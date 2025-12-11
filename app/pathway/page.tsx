"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import pathwayVi from "@/i18n/vi/pathway.json"
import pathwayEn from "@/i18n/en/pathway.json"
import { useLanguage } from "@/lib/language-context"

export default function PathwayPage() {
  const { language } = useLanguage()
  const content = language === "vi" ? pathwayVi : pathwayEn

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    goals: [] as string[],
    interests: [] as string[],
    background: { grade: "", strengths: "", weaknesses: "", englishLevel: "" },
    availability: { hoursPerWeek: "", learningMode: "" },
  })
  const [showResult, setShowResult] = useState(false)

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  const handleInterestSelect = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
    else setShowResult(true)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (showResult) {
    return (
      <main className="min-h-screen">
        <section className="section-padding bg-gradient-to-b from-primary/10 to-white">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-8">{content.result.title}</h1>

            <Card className="mb-8 border-accent">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-primary">{content.result.primaryProgram}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg font-semibold text-foreground mb-2">Diploma in Business Analytics</p>
                <p className="text-muted-foreground mb-6">
                  {language === "vi"
                    ? "Dựa trên sở thích và mục tiêu của bạn, chương trình này là phù hợp nhất."
                    : "Based on your interests and goals, this program is the perfect fit."}
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6">{content.result.roadmap}</h2>
            <div className="space-y-4 mb-8">
              {content.result.sampleRoadmap.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-primary/5 rounded-lg border border-border">
                  <div className="w-24 font-semibold text-primary flex-shrink-0">{item.month}</div>
                  <div>{item.content}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 bg-accent hover:bg-accent/90 text-white">{content.result.cta1}</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                {content.result.cta2}
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const step = content.steps[`step${currentStep}` as keyof typeof content.steps]

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <section className="section-padding">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
            <p className="text-lg text-muted-foreground">{content.hero.description}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  num <= currentStep ? "bg-accent text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {num <= currentStep ? <CheckCircle2 size={20} /> : num}
              </div>
            ))}
          </div>

          {/* Form Step */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-3">
                  {step.options.map((option: string) => (
                    <button
                      key={option}
                      onClick={() => handleGoalToggle(option)}
                      className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                        formData.goals.includes(option)
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {formData.goals.includes(option) && <CheckCircle2 className="w-5 h-5 text-accent" />}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                <div className="grid grid-cols-2 gap-3">
                  {step.options.map((option: string) => (
                    <button
                      key={option}
                      onClick={() => handleInterestSelect(option)}
                      className={`p-4 text-center border-2 rounded-lg transition-all ${
                        formData.interests.includes(option)
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <span className="font-medium text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={step.fields.currentGrade}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.background.grade}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        background: { ...prev.background, grade: e.target.value },
                      }))
                    }
                  />
                  <textarea
                    placeholder={step.fields.strengths}
                    className="w-full px-4 py-2 border border-border rounded-lg resize-none"
                    rows={2}
                    value={formData.background.strengths}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        background: { ...prev.background, strengths: e.target.value },
                      }))
                    }
                  />
                  <select
                    value={formData.background.englishLevel}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        background: { ...prev.background, englishLevel: e.target.value },
                      }))
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  >
                    <option value="">{step.fields.englishLevel}</option>
                    {step.englishLevels.map((level: string) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder={step.fields.hoursPerWeek}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.availability.hoursPerWeek}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        availability: { ...prev.availability, hoursPerWeek: e.target.value },
                      }))
                    }
                  />
                  <select
                    value={formData.availability.learningMode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        availability: { ...prev.availability, learningMode: e.target.value },
                      }))
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  >
                    <option value="">{step.fields.learningMode}</option>
                    {step.modes.map((mode: string) => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex gap-4">
            <Button
              onClick={handleBack}
              variant="outline"
              disabled={currentStep === 1}
              className="flex-1 bg-transparent"
            >
              {language === "vi" ? "Quay lại" : "Back"}
            </Button>
            <Button onClick={handleNext} className="flex-1 bg-accent hover:bg-accent/90 text-white">
              {currentStep === 4
                ? language === "vi"
                  ? "Xem kết quả"
                  : "See Results"
                : language === "vi"
                  ? "Tiếp tục"
                  : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
