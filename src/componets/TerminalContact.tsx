"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

type FormStep = "name" | "email" | "subject" | "message" | "complete"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface HistoryItem {
  type: "output" | "input"
  content: string
  isValid?: boolean
  isTyping?: boolean
}

export default function TerminalContactForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>("name")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output" as const,
      content: "> Welcome to Terminal Contact Form ✨",
    },
    {
      type: "output" as const,
      content: "> This is an interactive terminal – start typing your details below!",
    },
    {
      type: "output" as const,
      content: "> Press Enter after each field or click 'Send' to proceed.",
    },
    {
      type: "output" as const,
      content: "",
    },
    {
      type: "output" as const,
      content: "What is your name? (Click the input below to start typing...)",
    },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus input on mount
  useEffect(() => {
    if (inputRef.current && currentStep !== "complete") {
      inputRef.current.focus()
    }
  }, [currentStep])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2
  }

  const validateSubject = (subject: string): boolean => {
    return subject.trim().length >= 3
  }

  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10
  }

  const validateField = (step: FormStep, value: string): boolean => {
    switch (step) {
      case "name":
        return validateName(value)
      case "email":
        return validateEmail(value)
      case "subject":
        return validateSubject(value)
      case "message":
        return validateMessage(value)
      default:
        return false
    }
  }

  const getPrompt = () => {
    switch (currentStep) {
      case "name":
        return "$ "
      case "email":
        return "$ "
      case "subject":
        return "$ "
      case "message":
        return "$ "
      case "complete":
        return ""
      default:
        return "$ "
    }
  }

  const getQuestion = () => {
    switch (currentStep) {
      case "name":
        return "What is your name?"
      case "email":
        return "What is your email address?"
      case "subject":
        return "What is the subject?"
      case "message":
        return "What is your message?"
      case "complete":
        return ""
      default:
        return ""
    }
  }

  const getPlaceholder = () => {
    switch (currentStep) {
      case "name":
        return "Type your full name here..."
      case "email":
        return "Enter your email address..."
      case "subject":
        return "Describe the subject of your message..."
      case "message":
        return "Type your detailed message here..."
      default:
        return ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const isValid = validateField(currentStep, input)

    if (!isValid) {
      const newHistory = [
        ...history,
        {
          type: "input" as const,
          content: `${getPrompt()}${input}`,
          isValid: false,
        },
        {
          type: "output" as const,
          content: "",
        },
      ]

      let errorMsg = ""
      if (currentStep === "name") {
        errorMsg = "✗ Name must be at least 2 characters"
      } else if (currentStep === "email") {
        errorMsg = "✗ Please enter a valid email address"
      } else if (currentStep === "subject") {
        errorMsg = "✗ Subject must be at least 3 characters"
      } else if (currentStep === "message") {
        errorMsg = "✗ Message must be at least 10 characters"
      }

      setHistory([
        ...newHistory,
        {
          type: "output" as const,
          content: errorMsg,
        },
        {
          type: "output" as const,
          content: getQuestion(),
        },
      ])

      setInput("")
      return
    }

    // Add input to history with validation
    const newHistory = [
      ...history,
      {
        type: "input" as const,
        content: `${getPrompt()}${input}`,
        isValid: true,
      },
    ]

    // Update form data
    const updatedFormData = { ...formData }
    if (currentStep === "name") updatedFormData.name = input
    if (currentStep === "email") updatedFormData.email = input
    if (currentStep === "subject") updatedFormData.subject = input
    if (currentStep === "message") updatedFormData.message = input

    setFormData(updatedFormData)

    // Determine next step
    let nextStep: FormStep = "complete"
    let outputText = ""

    if (currentStep === "name") {
      nextStep = "email"
      outputText = `✓ Name saved! What is your email address?`
    } else if (currentStep === "email") {
      nextStep = "subject"
      outputText = `✓ Email saved! What is the subject of your message?`
    } else if (currentStep === "subject") {
      nextStep = "message"
      outputText = `✓ Subject saved! Now, what is your message?`
    } else if (currentStep === "message") {
      nextStep = "complete"
      outputText = "✓ Processing your message..."
      setIsSubmitting(true)

      // Simulate sending
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            type: "output" as const,
            content: outputText,
          },
          {
            type: "output" as const,
            content: "",
          },
          {
            type: "output" as const,
            content: "✓ Message sent successfully! 🎉",
            isValid: true,
          },
          {
            type: "output" as const,
            content: `Thanks for reaching out, ${updatedFormData.name}! We'll get back to you soon.`,
          },
          {
            type: "output" as const,
            content: "",
          },
          {
            type: "output" as const,
            content: `Contact details:`,
          },
          {
            type: "output" as const,
            content: `✓ Name: ${updatedFormData.name}`,
            isValid: true,
          },
          {
            type: "output" as const,
            content: `✓ Email: ${updatedFormData.email}`,
            isValid: true,
          },
          {
            type: "output" as const,
            content: `✓ Subject: ${updatedFormData.subject}`,
            isValid: true,
          },
          {
            type: "output" as const,
            content: `✓ Message: ${updatedFormData.message}`,
            isValid: true,
          },
        ])
        setIsSubmitting(false)
      }, 800)

      setCurrentStep(nextStep)
      setInput("")
      return
    }

    setHistory([
      ...newHistory,
      {
        type: "output" as const,
        content: "",
      },
      {
        type: "output" as const,
        content: outputText,
        isValid: true,
      },
    ])

    setCurrentStep(nextStep)
    setInput("")
  }

  const handleReset = () => {
    setCurrentStep("name")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setInput("")
    setHistory([
      {
        type: "output" as const,
        content: "> Welcome to Terminal Contact Form ✨",
      },
      {
        type: "output" as const,
        content: "> This is an interactive terminal – start typing your details below!",
      },
      {
        type: "output" as const,
        content: "> Press Enter after each field or click 'Send' to proceed.",
      },
      {
        type: "output" as const,
        content: "",
      },
      {
        type: "output" as const,
        content: "What is your name? (Click the input below to start typing...)",
      },
    ])
  }

  return (
    <div className="w-full max-w-2xl bg-terminal-bg border-2 border-terminal-border rounded-lg shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-terminal-header px-4 py-3 flex items-center gap-2.5 border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        </div>
        <span className="text-terminal-text text-sm font-medium ml-2">Terminal Contact Form (Interactive!)</span>
      </div>

      {/* Terminal Content */}
      <div className="bg-terminal-bg p-6 font-mono text-sm overflow-y-auto max-h-96 space-y-1">
        {history.map((item, index) => (
          <div
            key={index}
            className={`${
              item.type === "output"
                ? item.isValid
                  ? "text-green-400"
                  : item.content.includes("✗")
                    ? "text-red-400"
                    : "text-terminal-text"
                : "text-terminal-input"
            }`}
          >
            {item.content}
          </div>
        ))}

        {/* Current Input Line */}
        {currentStep !== "complete" && (
          <div className="flex items-center gap-1 text-terminal-text">
            <span className="text-terminal-prompt font-bold">$ </span>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e)
                  }
                }}
                className="bg-transparent border-0 text-terminal-input outline-none flex-1 caret-terminal-input transition-all duration-200 focus:ring-2 focus:ring-terminal-accent pr-8"
                disabled={isSubmitting}
                placeholder={getPlaceholder()}
              />
              {/* Blinking cursor indicator (shows when input is empty/focused) */}
              {!input.trim() && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-terminal-input animate-pulse pointer-events-none" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="bg-terminal-header border-t border-terminal-border px-6 py-4 flex gap-3 justify-end items-center">
        <Button
          onClick={handleReset}
          variant="outline"
          className="text-xs px-3 py-1.5 border-terminal-border text-terminal-text hover:bg-terminal-hover bg-transparent"
        >
          Restart Terminal
        </Button>
        {currentStep !== "complete" && (
          <>
            <span className="text-xs text-terminal-text opacity-70">or press Enter to submit</span>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent);
              }}
              disabled={!input.trim() || isSubmitting}
              className="text-xs px-3 py-1.5 bg-terminal-accent text-terminal-bg hover:bg-terminal-accent-hover"
            >
              Send →
            </Button>
          </>
        )}
      </div>
    </div>
  )
}