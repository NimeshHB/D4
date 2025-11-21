import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#00DF82] text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-8 text-balance uppercase tracking-tighter leading-[0.85]">
          Let's Build
          <br />
          Something Great
        </h2>
        <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto text-balance uppercase tracking-wide">
          Ready to transform your digital presence? We're currently accepting new projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black hover:bg-black/80 text-white rounded-none px-12 py-8 text-xl font-black uppercase tracking-widest shadow-xl">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
