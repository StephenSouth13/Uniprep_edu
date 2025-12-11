"use client"

import { useState, useMemo } from "react"
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProgramForm from "@/components/admin/program-form"
import type { Program } from "@/lib/types"
import { mockPrograms } from "@/lib/mock-data"

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(mockPrograms)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "students" | "price">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProgram, setEditingProgram] = useState<Program | null>(null)

  const itemsPerPage = 10

  // Filter and sort programs
  const filteredPrograms = useMemo(() => {
    const filtered = programs.filter(
      (program) =>
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name)
      } else if (sortBy === "students") {
        comparison = a.enrolled - b.enrolled
      } else if (sortBy === "price") {
        comparison = a.price - b.price
      }

      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [programs, searchTerm, sortBy, sortOrder])

  // Pagination
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const paginatedPrograms = filteredPrograms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleAddProgram = (formData: Omit<Program, "id">) => {
    if (editingProgram) {
      setPrograms(programs.map((p) => (p.id === editingProgram.id ? { ...formData, id: p.id } : p)))
      setEditingProgram(null)
    } else {
      setPrograms([
        ...programs,
        {
          ...formData,
          id: Math.random().toString(36).substr(2, 9),
        },
      ])
    }
    setIsFormOpen(false)
  }

  const handleEditProgram = (program: Program) => {
    setEditingProgram(program)
    setIsFormOpen(true)
  }

  const handleDeleteProgram = (id: string) => {
    if (confirm("Are you sure you want to delete this program?")) {
      setPrograms(programs.filter((p) => p.id !== id))
    }
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingProgram(null)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Programs Management</h1>
        <p className="text-muted-foreground">Manage all Uniprep programs and courses</p>
      </div>

      {/* Controls */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "students" | "price")}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="name">Sort by Name</option>
                <option value="students">Sort by Students</option>
                <option value="price">Sort by Price</option>
              </select>

              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
              >
                {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </div>

            {/* Add Button */}
            <Button
              onClick={() => {
                setEditingProgram(null)
                setIsFormOpen(true)
              }}
              className="bg-primary hover:bg-primary/90 text-white gap-2"
            >
              <Plus size={18} />
              Add Program
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Students</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Price</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPrograms.length > 0 ? (
                  paginatedPrograms.map((program) => (
                    <tr key={program.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-foreground">{program.name}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-muted-foreground max-w-xs truncate">{program.description}</div>
                      </td>
                      <td className="py-4 px-4">{program.duration}</td>
                      <td className="py-4 px-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {program.enrolled}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right font-semibold">${program.price}</td>
                      <td className="py-4 px-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditProgram(program)}
                            className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteProgram(program.id)}
                            className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">
                      No programs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredPrograms.length)} of {filteredPrograms.length}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg transition-colors ${
                        currentPage === page ? "bg-primary text-white" : "border border-gray-300 hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Form Modal */}
      {isFormOpen && (
        <ProgramForm program={editingProgram || undefined} onSubmit={handleAddProgram} onClose={handleCloseForm} />
      )}
    </div>
  )
}
