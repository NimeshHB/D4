import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-snug uppercase tracking-tight text-center space-y-3">
                <span className="block whitespace-nowrap">Where technology</span>
                <span className="block whitespace-nowrap">meets creativity.</span>
              </h1>
            </div>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--mint-green)] max-w-2xl mx-auto font-medium uppercase tracking-wider mb-8">
            <span className="inline-flex items-center justify-center gap-6">
              <span>Web Development</span>
              <span className="opacity-80">·</span>
              <span>UI/UX Design</span>
              <span className="opacity-80">·</span>
              <span>Branding</span>
              <span className="opacity-80">·</span>
              <span>Logo</span>
            </span>
          </p>

        
        </div>

        {/* Desktop mockups: centered 3D-style group of four overlapping desktop screens */}
        <div className="mt-20 relative h-[420px] md:h-[520px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-5xl">
            <div className="relative h-full">
              {/* Back-left */}
              <div className="absolute left-0 top-1/6 w-1/3 transform -translate-x-6 -translate-y-6 -rotate-6 z-10">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/dreamer.svg" alt="Desktop 1" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>

              {/* Front-left */}
              <div className="absolute left-1/4 top-0 w-1/3 transform -rotate-2 z-20">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/spices.svg" alt="Desktop 2" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>

              {/* Front-right */}
              <div className="absolute left-1/2 top-6 w-1/3 transform rotate-2 z-30">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/placeholder.svg?height=800&width=800" alt="Desktop 3" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>

              {/* Back-right */}
              <div className="absolute right-0 top-1/4 w-1/3 transform translate-x-6 rotate-8 z-5">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/dreamer.svg" alt="Desktop 4" width={900} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
