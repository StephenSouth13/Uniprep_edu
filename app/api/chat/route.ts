import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json()

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Invalid message" }, { status: 400 })
    }

    // Format conversation history for context
    const conversationHistory = history
      .map((msg: any) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n")

    const systemPrompt = `You are Uniprep's helpful AI assistant. You help students with:
- University preparation programs (SAT, ACT, IELTS)
- The application process and timeline
- Program details and pricing
- General university preparation advice
- Information about Uniprep's services

Be friendly, encouraging, and helpful. Keep responses concise (2-3 sentences max). 
If asked about specific details you don't know, suggest contacting support or visiting the website.
Always encourage students to schedule a consultation for personalized guidance.`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      system: systemPrompt,
      prompt: `Previous conversation:\n${conversationHistory}\n\nUser: ${message}\nAssistant:`,
      maxTokens: 150,
    })

    return Response.json({ message: text.trim() })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return Response.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
