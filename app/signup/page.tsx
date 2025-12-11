"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const { language } = useLanguage()
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsComplete(true)
    setIsLoading(false)
  }

  const handleNextStep = () => {
    if (step === 1 && formData.fullName && formData.email) {
      setStep(2)
    } else if (
      step === 2 &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
    ) {
      setStep(3)
    }
  }

  const content = {
    vi: {
      title: "Tạo tài khoản",
      subtitle: "Bắt đầu hành trình chuẩn bị đại học của bạn ngay hôm nay",
      step1: "Thông tin cá nhân",
      step2: "Bảo mật",
      step3: "Xác nhận",
      fullName: "Họ và tên",
      email: "Email",
      password: "Mật khẩu",
      confirmPassword: "Xác nhận mật khẩu",
      agreeTerms: "Tôi đồng ý với",
      termsOfService: "điều khoản dịch vụ",
      privacyPolicy: "chính sách bảo mật",
      and: "và",
      signup: "Đăng ký",
      next: "Tiếp tục",
      back: "Quay lại",
      hasAccount: "Đã có tài khoản?",
      login: "Đăng nhập",
      successTitle: "Chào mừng đến với Uniprep!",
      successMessage: "Tài khoản của bạn đã được tạo thành công. Bạn sẽ được chuyển đến bảng điều khiển.",
      passwordMismatch: "Mật khẩu không khớp",
      fillAllFields: "Vui lòng điền tất cả các trường",
    },
    en: {
      title: "Create Account",
      subtitle: "Start your university prep journey today",
      step1: "Personal Information",
      step2: "Security",
      step3: "Confirmation",
      fullName: "Full Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      agreeTerms: "I agree to the",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      and: "and",
      signup: "Sign Up",
      next: "Next",
      back: "Back",
      hasAccount: "Already have an account?",
      login: "Sign in",
      successTitle: "Welcome to Uniprep!",
      successMessage: "Your account has been created successfully. You will be redirected to your dashboard.",
      passwordMismatch: "Passwords do not match",
      fillAllFields: "Please fill in all fields",
    },
  }

  const t = content[language as keyof typeof content]

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50"></div>
                <CheckCircle className="relative w-20 h-20 text-primary animate-bounce" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {t.successTitle}
            </h2>
            <p className="text-muted-foreground mb-8">{t.successMessage}</p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white"
            >
              <Link href="/">{language === "vi" ? "Về trang chủ" : "Go to Dashboard"}</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:border-primary/30">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo.png"
                alt="Uniprep Vietnam"
                width={100}
                height={100}
                className="relative rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-2">
              {t.title}
            </h1>
            <p className="text-sm text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                    s <= step
                      ? "bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 transition-all ${
                      s < step ? "bg-gradient-to-r from-primary to-blue-700" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">{t.fullName}</label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 w-5 h-5 text-primary/60" />
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">{t.email}</label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3 w-5 h-5 text-primary/60" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">{t.password}</label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 w-5 h-5 text-primary/60" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 bg-white/50 backdrop-blur-sm border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-primary/60 hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">{t.confirmPassword}</label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      <Lock className="absolute left-3 w-5 h-5 text-primary/60" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 bg-white/50 backdrop-blur-sm border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 text-primary/60 hover:text-primary transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "vi" ? "Xác nhận thông tin" : "Confirm Information"}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">{t.fullName}:</span> {formData.fullName}
                    </p>
                    <p>
                      <span className="font-medium">{t.email}:</span> {formData.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary/30 cursor-pointer transition-all"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer">
                    {t.agreeTerms}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {t.termsOfService}
                    </a>{" "}
                    {t.and}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {t.privacyPolicy}
                    </a>
                  </label>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  variant="outline"
                  className="flex-1 border-gray-200 hover:border-primary/50 transition-all"
                >
                  {t.back}
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNextStep}
                  className={`${step === 1 ? "w-full" : "flex-1"} bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white transition-all`}
                >
                  {t.next}
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading || !formData.agreeTerms}
                  className="flex-1 bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white transition-all disabled:opacity-70"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      {t.signup}
                    </span>
                  ) : (
                    t.signup
                  )}
                </Button>
              )}
            </div>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            {t.hasAccount}{" "}
            <Link href="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              {t.login}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
