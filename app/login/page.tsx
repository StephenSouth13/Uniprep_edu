"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const { language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const content = {
    vi: {
      title: "Đăng nhập",
      subtitle: "Tiếp tục hành trình chuẩn bị đại học của bạn",
      email: "Email",
      password: "Mật khẩu",
      forgotPassword: "Quên mật khẩu?",
      login: "Đăng nhập",
      noAccount: "Chưa có tài khoản?",
      signUp: "Đăng ký ngay",
      orContinueWith: "Hoặc tiếp tục với",
      google: "Google",
      apple: "Apple",
      rememberMe: "Ghi nhớ tôi",
    },
    en: {
      title: "Sign In",
      subtitle: "Continue your university prep journey",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot password?",
      login: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Sign up",
      orContinueWith: "Or continue with",
      google: "Google",
      apple: "Apple",
      rememberMe: "Remember me",
    },
  }

  const t = content[language as keyof typeof content]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* Card with glass effect */}
        <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:border-primary/30">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo.png"
                alt="Uniprep Vietnam"
                width={60}
                height={60}
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                {t.email}
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 w-5 h-5 text-primary/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-foreground">
                  {t.password}
                </label>
                <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80 transition-colors">
                  {t.forgotPassword}
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3 w-5 h-5 text-primary/60" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/30 cursor-pointer transition-all"
              />
              <label htmlFor="remember" className="text-sm text-foreground cursor-pointer">
                {t.rememberMe}
              </label>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    {t.login}
                  </>
                ) : (
                  t.login
                )}
              </span>
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white/95 text-muted-foreground">{t.orContinueWith}</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-primary/50 group">
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-medium">{t.google}</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-primary/50 group">
              <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                <path d="M17.05 13.5c-.91 0-1.74.44-2.25 1.12.41-.66 1.14-1.12 2-.12 1.33 0 2.41 1.08 2.41 2.41s-1.08 2.41-2.41 2.41c-1.33 0-2.41-1.08-2.41-2.41 0-.21.02-.42.07-.63.04-.15.09-.3.15-.43-.58.35-.96.99-.96 1.72 0 1.33 1.08 2.41 2.41 2.41 1.33 0 2.41-1.08 2.41-2.41 0-1.33-1.08-2.41-2.41-2.41z" />
              </svg>
              <span className="text-sm font-medium">{t.apple}</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground">
            {t.noAccount}{" "}
            <Link href="/signup" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              {t.signUp}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
