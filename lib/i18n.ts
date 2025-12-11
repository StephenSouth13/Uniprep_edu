// Simple i18n configuration
export const locales = {
  en: "English",
  vi: "Tiếng Việt",
} as const

export type Locale = keyof typeof locales

export const defaultLocale: Locale = "en"

export const translations = {
  en: {
    nav: {
      about: "About",
      programs: "Programs",
      pathway: "Pathway Tool",
      blog: "Blog",
      admissions: "Admissions",
      getStarted: "Get Started",
    },
    hero: {
      title: "Your Path to Top Universities",
      subtitle:
        "Expert guidance, personalized pathways, and proven strategies to help you gain admission to your dream university.",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      programs: "Chương trình",
      pathway: "Công cụ Lộ trình",
      blog: "Blog",
      admissions: "Tuyển sinh",
      getStarted: "Bắt đầu",
    },
    hero: {
      title: "Con đường đến các trường đại học hàng đầu",
      subtitle:
        "Hướng dẫn từ chuyên gia, lộ trình được cá nhân hóa, và các chiến lược đã được chứng minh để giúp bạn được nhận vào đại học mơ ước của mình.",
    },
  },
} as const
