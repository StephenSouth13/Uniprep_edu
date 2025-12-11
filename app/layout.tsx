import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ChatbotWidget from "@/components/chatbot/chatbot-widget"
import { LanguageProvider } from "@/lib/language-context"
import BackToTop from "@/components/ui/back-to-top"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uniprep Vietnam - Chuẩn Bị Đại Học Hàng Đầu | uniprep edu",
  description:
    "Uniprep Vietnam là nền tảng chuẩn bị đại học hàng đầu. Lộ trình được chứng minh, hướng dẫn chuyên gia, và chuẩn bị thi toàn diện cho tuyển sinh đại học top. Tham gia hàng nghìn học sinh thành công với Uniprep edu.",
  generator: "v0.app",
  keywords:
    "uniprep vietnam, uniprep edu, chuẩn bị đại học, chuẩn bị thi đại học, tuyển sinh đại học, lộ trình học tập, giáo dục Việt Nam, học sinh chuẩn bị đại học",
  authors: [{ name: "Uniprep Vietnam" }],
  metadataBase: new URL("https://uniprep.edu.vn"),
  alternates: {
    canonical: "https://uniprep.edu.vn",
  },
  openGraph: {
    title: "Uniprep Vietnam - Chuẩn Bị Đại Học Hàng Đầu",
    description: "Nền tảng tuyên bị đại học hàng đầu Việt Nam với lộ trình được chứng minh và hướng dẫn chuyên gia.",
    type: "website",
    locale: "vi_VN",
    url: "https://uniprep.edu.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniprep Vietnam - Chuẩn Bị Đại Học",
    description: "Chuẩn bị tuyển sinh đại học top cùng Uniprep Vietnam",
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <ChatbotWidget />
          <BackToTop />
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
