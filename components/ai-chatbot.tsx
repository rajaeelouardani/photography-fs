"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, X, Loader2, Wifi, WifiOff, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  role: "user" | "assistant"
  content: string
  source?: string
}

export default function AIChatbot() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [chatLanguage, setChatLanguage] = useState<"fr" | "en" | "ar">(language as "fr" | "en" | "ar" || "fr")
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  
  // Update initial message when language changes
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === "assistant") {
      setMessages([{
        role: "assistant",
        content: getInitialMessage()
      }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatLanguage])
  
  const getInitialMessage = () => {
    const messages: Record<string, string> = {
      fr: "Bonjour! Je suis رؤيا (Roya), votre assistante IA spécialisée en photographie du Photography Club FSM. 📸\n\nJe peux vous aider avec:\n• Techniques photo (ISO, ouverture, vitesse)\n• Composition et cadrage\n• Éclairage et lumière\n• Réglages d'appareil\n• Conseils par style (portrait, paysage, macro...)\n• Post-traitement et retouche\n• Résolution de problèmes\n\n🎯 **Nouvelles fonctionnalités:**\n• Créer des listes de prises de vue pour vos séances\n• Générer du contenu publicitaire pour vos services\n\n💡 **Exemples:**\n• \"Crée une liste de prises de vue pour un portrait en extérieur\"\n• \"Écris un texte publicitaire pour Instagram\"\n\nPosez-moi n'importe quelle question sur la photographie!",
      en: "Hello! I'm رؤيا (Roya), your AI assistant specialized in photography from Photography Club FSM. 📸\n\nI can help you with:\n• Photography techniques (ISO, aperture, shutter speed)\n• Composition and framing\n• Lighting and illumination\n• Camera settings\n• Style advice (portrait, landscape, macro...)\n• Post-processing and editing\n• Problem solving\n\n🎯 **New features:**\n• Create shot lists for your sessions\n• Generate advertising content for your services\n\n💡 **Examples:**\n• \"Create a shot list for an outdoor portrait\"\n• \"Write an Instagram ad copy\"\n\nAsk me any question about photography!",
      ar: "مرحباً! أنا رؤيا (Roya)، مساعدتك الذكية المتخصصة في التصوير الفوتوغرافي من نادي التصوير FSM. 📸\n\nيمكنني مساعدتك في:\n• تقنيات التصوير (ISO، الفتحة، سرعة الغالق)\n• التكوين والإطار\n• الإضاءة\n• إعدادات الكاميرا\n• نصائح حسب النمط (بورتريه، منظر طبيعي، ماكرو...)\n• المعالجة والتحرير\n• حل المشاكل\n\n🎯 **ميزات جديدة:**\n• إنشاء قوائم اللقطات لجلساتك\n• إنشاء محتوى إعلاني لخدماتك\n\n💡 **أمثلة:**\n• \"أنشئ قائمة لقطات لصورة بورتريه في الهواء الطلق\"\n• \"اكتب نص إعلاني لإنستغرام\"\n\nاطرح علي أي سؤال حول التصوير الفوتوغرافي!"
    }
    return messages[chatLanguage] || messages.fr
  }
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: getInitialMessage()
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "online" | "offline">("checking")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Check Ollama connection on mount
  useEffect(() => {
    checkConnection()
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showLanguageMenu && !(event.target as Element).closest('.relative')) {
        setShowLanguageMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showLanguageMenu])

  const checkConnection = async () => {
    try {
      const response = await fetch("http://localhost:11434/api/tags", {
        method: "GET",
        signal: AbortSignal.timeout(3000), // 3 second timeout
      })
      setConnectionStatus(response.ok ? "online" : "offline")
    } catch (error) {
      setConnectionStatus("offline")
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content
          })),
          language: chatLanguage
        }),
      })

      const data = await response.json()
      
      if (!response.ok || data.error) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.message || "Je rencontre des difficultés techniques. Je peux toujours vous aider avec des réponses prédéfinies sur la photographie!",
          source: data.source || "error"
        }])
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.message || "Désolé, je n'ai pas pu générer de réponse.",
          source: data.source || "unknown"
        }])
      }
    } catch (error) {
      console.error("Chat error:", error)
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Je suis رؤيا (Roya). Je rencontre des difficultés de connexion, mais voici quelques conseils photo rapides:\n\n📸 **Triangle d'exposition:** ISO, Ouverture, Vitesse\n📐 **Composition:** Règle des tiers\n💡 **Éclairage:** Heure dorée pour portraits\n📷 **Réglages:** Mode A/Av pour débuter\n\nPosez-moi une autre question ou consultez /cours pour notre cours complet!",
          source: "fallback"
        }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Format message with bold text (**text**)
  const formatMessage = (content: string) => {
    const parts: (string | JSX.Element)[] = []
    const regex = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match
    let key = 0

    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index))
      }
      // Add bold text
      parts.push(
        <strong key={`bold-${key++}`} className="font-bold text-gray-900 dark:text-white">
          {match[1]}
        </strong>
      )
      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex))
    }

    // If no bold found, return original
    if (parts.length === 0) {
      return content
    }

    return <>{parts}</>
  }

  const getSourceBadge = (source?: string) => {
    if (!source) return null
    
    const badges: Record<string, { text: string; color: string }> = {
      "ollama": { text: "IA", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      "faq": { text: "FAQ", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
      "fallback": { text: "Info", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
    }
    
    const badge = badges[source]
    if (!badge) return null
    
    return (
      <span className={`text-xs px-2 py-1 rounded ${badge.color} ml-2 mt-2 inline-block`}>
        {badge.text}
      </span>
    )
  }

  const getPlaceholder = () => {
    const placeholders: Record<string, string> = {
      fr: "Posez une question sur la photo...",
      en: "Ask a question about photography...",
      ar: "اطرح سؤالاً حول التصوير..."
    }
    return placeholders[chatLanguage] || placeholders.fr
  }

  const getStatusText = () => {
    const texts: Record<string, { online: string; offline: string }> = {
      fr: { online: "✓ Connecté - Réponses IA", offline: "Mode FAQ - Réponses instantanées" },
      en: { online: "✓ Connected - AI Responses", offline: "FAQ Mode - Instant Answers" },
      ar: { online: "✓ متصل - ردود ذكية", offline: "وضع الأسئلة الشائعة - ردود فورية" }
    }
    const langTexts = texts[chatLanguage] || texts.fr
    return connectionStatus === "online" ? langTexts.online : langTexts.offline
  }

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 shadow-lg z-50"
        size="lg"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[380px] h-[550px] flex flex-col shadow-2xl z-50 border-2 border-red-600 dark:border-red-700 rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white flex flex-row justify-between items-center p-3 border-b-2 border-red-500">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-white p-1 flex items-center justify-center">
                <Image
                  src="/images/photography-club-logo.png"
                  alt="Photography Club FSM Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-base font-bold flex items-center gap-1.5">
                  رؤيا (Roya) 📸
                </CardTitle>
                <p className="text-[10px] text-red-100">Photography Club FSM</p>
              </div>
              {connectionStatus === "online" ? (
                <Wifi className="h-4 w-4 text-green-300 ml-1.5" title="Ollama connecté" />
              ) : connectionStatus === "offline" ? (
                <WifiOff className="h-4 w-4 text-yellow-300 ml-1.5" title="Mode FAQ - réponses disponibles" />
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="text-white hover:bg-red-700 dark:hover:bg-red-800 h-8 w-8 p-0"
                  title="Change language"
                >
                  <Languages className="h-4 w-4" />
                </Button>
                {showLanguageMenu && (
                  <div className="absolute top-full right-0 mt-2 z-10">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-1 min-w-[140px]">
                      <button
                        onClick={() => {
                          setChatLanguage("fr")
                          setShowLanguageMenu(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          chatLanguage === "fr" ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        🇫🇷 Français
                      </button>
                      <button
                        onClick={() => {
                          setChatLanguage("en")
                          setShowLanguageMenu(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          chatLanguage === "en" ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        🇬🇧 English
                      </button>
                      <button
                        onClick={() => {
                          setChatLanguage("ar")
                          setShowLanguageMenu(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          chatLanguage === "ar" ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold" : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        🇲🇦 العربية
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-red-700 dark:hover:bg-red-800 h-8 w-8 p-0"
                aria-label="Fermer le chat"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-2.5 p-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-2.5 shadow-sm ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-red-600 to-red-700 text-white rounded-br-none"
                        : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-none border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <div className={`text-xs leading-relaxed whitespace-pre-wrap break-words ${msg.role === "user" ? "text-white" : ""}`}>
                      {formatMessage(msg.content)}
                    </div>
                    {msg.role === "assistant" && getSourceBadge(msg.source)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 rounded-lg rounded-bl-none p-2.5 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-red-600" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {chatLanguage === "fr" ? "En train de réfléchir..." : 
                         chatLanguage === "en" ? "Thinking..." : "جاري التفكير..."}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-2.5 bg-white dark:bg-gray-900">
              <div className="flex gap-1.5">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={getPlaceholder()}
                  className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 text-xs py-1.5 rounded-lg focus:ring-2 focus:ring-red-500"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSend} 
                  disabled={isLoading || !input.trim()}
                  className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 px-3 rounded-lg shadow-md h-8"
                >
                  {isLoading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1.5 text-center">
                {getStatusText()}
              </p>
              <p className="text-[9px] text-gray-400 dark:text-gray-500 mt-1 text-center">
                Préparé par Rajae Elouardani
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

