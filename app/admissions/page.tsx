"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Upload } from "lucide-react"
import admissionsVi from "@/i18n/vi/admissions.json"
import admissionsEn from "@/i18n/en/admissions.json"
import { useLanguage } from "@/lib/language-context"

export default function AdmissionsPage() {
  const { language } = useLanguage()
  const content = language === "vi" ? admissionsVi : admissionsEn

  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    nationality: "",
    currentLevel: "",
    gpa: "",
    englishLevel: "",
    programId: "",
    reason: "",
    startDate: "",
    transcript: null as File | null,
    idCard: null as File | null,
    photo: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, [fieldName]: file }))
    }
  }

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
    else handleSubmit()
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    setSubmitted(true)
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
    }, 1500)
  }

  if (submitted) {
    return (
      <main className="min-h-screen">
        <section className="section-padding bg-gradient-to-b from-accent/10 to-white flex items-center justify-center">
          <div className="container text-center max-w-md">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{language === "vi" ? "Thành công!" : "Success!"}</h1>
            <p className="text-lg text-muted-foreground mb-8">{content.form.success}</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              {language === "vi" ? "Quay lại trang chủ" : "Back to Home"}
            </Button>
          </div>
        </section>
      </main>
    )
  }

  const stepContent = content.form[`step${currentStep}` as keyof typeof content.form]

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <section className="section-padding">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
            <p className="text-lg text-muted-foreground">{content.hero.description}</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={`flex-1 text-center px-2 ${num < 5 ? "border-b-2 mb-4" : ""} ${
                  num <= currentStep ? "border-accent" : "border-gray-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto mb-2 ${
                    num <= currentStep ? "bg-accent text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num <= currentStep ? <CheckCircle2 size={20} /> : num}
                </div>
                <p className="text-xs font-medium hidden sm:block">
                  {language === "vi" ? `Bước ${num}` : `Step ${num}`}
                </p>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{stepContent.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentStep === 1 && (
                <>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={stepContent.fields.fullName}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="date"
                    name="dateOfBirth"
                    placeholder={stepContent.fields.dateOfBirth}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={stepContent.fields.email}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={stepContent.fields.phone}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="nationality"
                    placeholder={stepContent.fields.nationality}
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {currentStep === 2 && (
                <>
                  <select
                    name="currentLevel"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.currentLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">{stepContent.fields.currentLevel}</option>
                    {stepContent.levels.map((level: string) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    name="gpa"
                    placeholder={stepContent.fields.gpa}
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.gpa}
                    onChange={handleInputChange}
                  />
                  <select
                    name="englishLevel"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.englishLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">{stepContent.fields.englishLevel}</option>
                    {stepContent.levels.map((level: string) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <select
                    name="programId"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.programId}
                    onChange={handleInputChange}
                  >
                    <option value="">{stepContent.fields.programId}</option>
                    <option value="1">Foundation in Computer Science</option>
                    <option value="2">Diploma in Business Analytics</option>
                    <option value="3">Foundation in Economics</option>
                    <option value="4">Diploma in Software Engineering</option>
                  </select>
                  <textarea
                    name="reason"
                    placeholder={stepContent.fields.reason}
                    className="w-full px-4 py-2 border border-border rounded-lg resize-none"
                    rows={3}
                    value={formData.reason}
                    onChange={handleInputChange}
                  />
                  <input
                    type="date"
                    name="startDate"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </>
              )}

              {currentStep === 4 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{stepContent.fields.transcript}</label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-accent transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "transcript")}
                          className="hidden"
                          id="transcript"
                        />
                        <label htmlFor="transcript" className="cursor-pointer">
                          <p className="text-sm">{stepContent.uploadHint}</p>
                          {formData.transcript && (
                            <p className="text-xs text-accent mt-2">{formData.transcript.name}</p>
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">{stepContent.fields.idCard}</label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-accent transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "idCard")}
                          className="hidden"
                          id="idCard"
                        />
                        <label htmlFor="idCard" className="cursor-pointer">
                          <p className="text-sm">{stepContent.uploadHint}</p>
                          {formData.idCard && <p className="text-xs text-accent mt-2">{formData.idCard.name}</p>}
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">{stepContent.fields.photo}</label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-accent transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "photo")}
                          className="hidden"
                          id="photo"
                        />
                        <label htmlFor="photo" className="cursor-pointer">
                          <p className="text-sm">{stepContent.uploadHint}</p>
                          {formData.photo && <p className="text-xs text-accent mt-2">{formData.photo.name}</p>}
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 5 && (
                <div className="space-y-4 bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold">{content.form.step5.reviewLabel}</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">{language === "vi" ? "Họ tên:" : "Name:"}</span> {formData.fullName}
                    </p>
                    <p>
                      <span className="font-medium">{language === "vi" ? "Email:" : "Email:"}</span> {formData.email}
                    </p>
                    <p>
                      <span className="font-medium">{language === "vi" ? "Chương trình:" : "Program:"}</span>{" "}
                      {formData.programId}
                    </p>
                    <p>
                      <span className="font-medium">{language === "vi" ? "Thời gian bắt đầu:" : "Start Date:"}</span>{" "}
                      {formData.startDate}
                    </p>
                  </div>
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
              {currentStep === 5 ? content.form.step5.submit : language === "vi" ? "Tiếp tục" : "Next"}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
