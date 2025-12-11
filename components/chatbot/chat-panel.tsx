"use client"

import type React from "react"

import type { RefObject } from "react"
import { Send, RotateCcw, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatPanelProps {
  messages: Array<{ id: string; role: "user" | "assistant"; content: string }>
  inputValue: string
  isLoading: boolean
  messagesEndRef: RefObject<HTMLDivElement>
  onInputChange: (value: string) => void
  onSendMessage: () => void
  onClearChat: () => void
}

export default function ChatPanel({
  messages,
  inputValue,
  isLoading,
  messagesEndRef,
  onInputChange,
  onSendMessage,
  onClearChat,
}: ChatPanelProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">U</span>
          </div>
          <div>
            <h3 className="font-semibold">Uniprep Assistant</h3>
            <p className="text-xs text-white/80">Usually responds instantly</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onClearChat}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title="Clear chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96 bg-gray-50/50">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xl">👋</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Welcome to Uniprep!</h4>
              <p className="text-sm text-muted-foreground">
                Ask me anything about university preparation, programs, or admissions.
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                {message.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">U</span>
                  </div>
                )}
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white border border-primary/10 text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">U</span>
                </div>
                <div className="bg-white border border-primary/10 text-foreground rounded-lg rounded-bl-none px-4 py-2">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-primary/10 p-4 bg-white space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            disabled={isLoading}
          />
          <Button
            onClick={onSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-primary hover:bg-primary/90 text-white px-3 py-2 h-auto"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center">Ctrl+K to toggle | Shift+Enter for new line</p>
      </div>
    </div>
  )
}
