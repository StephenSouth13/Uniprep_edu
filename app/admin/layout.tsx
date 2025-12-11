import type React from "react"
import Link from "next/link"
import { BarChart3, BookOpen, Settings, LogOut } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary font-bold">U</div>
          <h1 className="text-lg font-bold">Uniprep Admin</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/admin/programs"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium"
          >
            <BookOpen size={20} />
            Programs
          </Link>
          <Link
            href="/admin/analytics"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium"
          >
            <BarChart3 size={20} />
            Analytics
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium"
          >
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium w-full text-left">
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen">{children}</div>
      </main>
    </div>
  )
}
