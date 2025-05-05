"use client"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Mail className="h-4 w-4 text-red-500 mr-2" />
          <a href="mailto:photographyfsm.pro@gmail.com" className="text-sm hover:text-red-500 transition-colors mr-6">
            photographyfsm.pro@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://instagram.com/photographyfsm.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@PhotographyFSM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
