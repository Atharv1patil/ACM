"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser'

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
  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = "service_1o62qcw"
  const EMAILJS_TEMPLATE_ID = "template_cen8deu"
  const EMAILJS_PUBLIC_KEY = "XAs6mjkCoBoL9qmhS"

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
  const [sendError, setSendError] = useState<string |number | null>(null)
  console.log(sendError)
  setSendError(String(0)); // or
   setSendError(`${0}`);
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
      setSendError(null)

      // Send email via EmailJS
      try {
        const templateParams = {
          from_name: updatedFormData.name,
          from_email: updatedFormData.email,
          subject: updatedFormData.subject,
          message: updatedFormData.message,
          to_name: "Your Name", // Optional: customize this
        }

        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )

        console.log("Email sent successfully:", response)

        // Success - show confirmation
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
        }, 300)
      } catch (error) {
        console.error("Failed to send email:", error)
        setSendError(error instanceof Error ? error.message : "Unknown error")
        
        // Show error message
        setHistory((prev) => [
          ...prev,
          {
            type: "output" as const,
            content: "",
          },
          {
            type: "output" as const,
            content: "✗ Failed to send message. Please try again.",
          },
          {
            type: "output" as const,
            content: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
          },
        ])
        setIsSubmitting(false)
        setCurrentStep("message")
        setInput("")
        return
      }

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
    setSendError(null)
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-3 flex items-center gap-2.5 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium ml-2">Terminal Contact Form (Interactive!)</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-800 p-6 font-mono text-sm overflow-y-auto max-h-96 space-y-1">
          {history.map((item, index) => (
            <div
              key={index}
              className={`${
                item.type === "output"
                  ? item.isValid
                    ? "text-green-400"
                    : item.content.includes("✗")
                      ? "text-red-400"
                      : "text-gray-300"
                  : "text-blue-400"
              }`}
            >
              {item.content}
            </div>
          ))}

          {/* Current Input Line */}
          {currentStep !== "complete" && (
            <div className="flex items-center gap-1 text-gray-300">
              <span className="text-green-400 font-bold">$ </span>
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
                  className="bg-transparent border-0 text-blue-400 outline-none w-full caret-blue-400 transition-all duration-200 focus:ring-2 focus:ring-cyan-400 pr-8"
                  disabled={isSubmitting}
                  placeholder={getPlaceholder()}
                />
                {/* Blinking cursor indicator */}
                {!input.trim() && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-400 animate-pulse pointer-events-none" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="bg-gray-900 border-t border-gray-700 px-6 py-4 flex gap-3 justify-end items-center">
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1.5 border border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent rounded transition-colors"
          >
            Restart Terminal
          </button>
          {currentStep !== "complete" && (
            <>
              <span className="text-xs text-gray-400 opacity-70">or press Enter to submit</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent);
                }}
                disabled={!input.trim() || isSubmitting}
                className="text-xs px-3 py-1.5 bg-cyan-500 text-gray-900 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors font-medium"
              >
                {isSubmitting ? "Sending..." : "Send →"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}