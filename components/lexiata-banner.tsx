"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LexiataBanner() {
  const [chatOpen, setChatOpen] = useState(true)

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white py-16 px-6">
      {/* subtle animated background particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-8 top-10 w-3 h-3 rounded-full bg-[color:var(--mint-green)] opacity-30 animate-pulse" />
        <div className="absolute left-28 top-40 w-2 h-2 rounded-full bg-[color:var(--mint-green)] opacity-20 animate-pulse delay-200" />
        <div className="absolute right-20 top-24 w-4 h-4 rounded-full bg-[color:var(--mint-green)] opacity-18 animate-pulse delay-500" />
        <div className="absolute right-36 bottom-20 w-2 h-2 rounded-full bg-[color:var(--mint-green)] opacity-14 animate-pulse delay-300" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#00DF82] to-[#9CFFB8] bg-clip-text text-transparent drop-shadow-[0_6px_30px_rgba(0,223,130,0.14)]">
              Our Service
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            <ServiceCard
              title="Web Development"
              icon={<img src="/dreamer.svg" alt="Web Development" className="w-6 h-6" loading="lazy" />}
              description="Crafting stunning websites that captivate and engage your target audience."
            />
            <ServiceCard
              title="Web Hosting"
              icon={<img src="/dreamer.svg" alt="Web Hosting" className="w-6 h-6" loading="lazy" />}
              description="Reliable hosting solutions ensuring your website is always accessible and secure."
            />
            <ServiceCard
              title="Website Maintenance"
              icon={<img src="//dreamer.svg" alt="Website Maintenance" className="w-6 h-6" loading="lazy" />}
              description="Continuous upkeep to ensure your website remains fresh, secure, and optimized."
            />

            {/* Row 2 */}
            <ServiceCard
              title="UI/UX Design"
              icon={<BrushIcon />}
              description="Designing intuitive interfaces and delightful user experiences that convert and delight users."
            />
            <ServiceCard
              title="Logo Design"
              icon={<BrushIcon />}
              description="Crafting memorable logos that capture your brand essence and captivate audiences."
            />
            <ServiceCard
              title="Graphic Design"
              icon={<BrushIcon />}
              description="Creating striking visual assets—posters, banners, illustrations, and branding collateral that elevate your message."
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button className="mint-btn mint-glow mint-focus px-6 py-3 font-black uppercase tracking-wider">
              Get Started
            </Button>
            <a href="#contact" className="mint-outline inline-block px-4 py-3 font-bold uppercase">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Live-chat bubble bottom-left */}
      {chatOpen && (
        <div className="fixed left-6 bottom-6 z-50 flex items-center gap-3 bg-[color:var(--mint-green)] text-black rounded-xl px-4 py-2 shadow-lg mint-glow">
          <div className="text-sm font-bold">we help you?</div>
          <button
            aria-label="Close chat"
            onClick={() => setChatOpen(false)}
            className="ml-2 h-6 w-6 rounded-full bg-black text-[color:var(--mint-green)] flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}

function ServiceCard({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) {
  return (
    <div className="group bg-[#111111] border border-[color:var(--mint-green)]/10 hover:border-[color:var(--mint-green)] hover:shadow-[0_10px_40px_rgba(0,223,130,0.12)] rounded-lg p-6 transition-all">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center bg-transparent text-[color:var(--mint-green)]">
          {icon}
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">{title}</h3>
          <p className="text-[color:var(--mint-green)]/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L3 12L9 6" stroke="#00DF82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6L21 12L15 18" stroke="#00DF82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
      <rect x="3" y="10" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
      <rect x="3" y="16" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.5A3.5 3.5 0 1012 8.5a3.5 3.5 0 000 7z" stroke="#00DF82" strokeWidth="1.6" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 014.3 16.88l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.7 0 1.26-.44 1.51-1a1.65 1.65 0 00-.33-1.82L4.3 4.3A2 2 0 017.12 1.47l.06.06a1.65 1.65 0 001.82.33h.09c.7 0 1.26-.44 1.51-1V1a2 2 0 014 0v.09c.25.56.81 1 1.51 1h.09c.7 0 1.26.44 1.51 1a1.65 1.65 0 001.82.33l.06-.06A2 2 0 0120.53 7.12l-.06.06a1.65 1.65 0 00-.33 1.82v.09c0 .7.44 1.26 1 1.51H21a2 2 0 010 4h-.09c-.56.25-1 .81-1 1.51z" stroke="#00DF82" strokeWidth="1" />
    </svg>
  )
}

function SeoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 11a8 8 0 1114 6.32L21 21" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21l-3-3" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BrushIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21l4-4" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 6.5c1.5-1.5 3.5-1 4.5 0s1.5 3 0 4.5l-5 5c-1.5 1.5-3.5 1-4.5 0s-1.5-3 0-4.5l5-5z" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8a1 1 0 00-.55-.89l-7-4a1 1 0 00-.9 0l-7 4A1 1 0 003 8v8a1 1 0 00.55.89l7 4a1 1 0 00.9 0l7-4A1 1 0 0021 16z" stroke="#00DF82" strokeWidth="1.2" />
      <path d="M3.2 8.6l8.8 5.1 8.8-5.1" stroke="#00DF82" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default LexiataBanner
