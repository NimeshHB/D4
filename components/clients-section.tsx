export function ClientsSection() {
  const clients = [
    { name: "Stripe" },
    { name: "Notion" },
    { name: "Linear" },
    { name: "Figma" },
    { name: "Webflow" },
    { name: "Framer" },
  ]

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto">
        <p className="text-center text-[#00DF82] mb-12 text-sm font-black uppercase tracking-widest">
          Trusted by ambitious brands worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-80">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-white/10 h-24 hover:border-[#00DF82] transition-colors bg-white/5"
            >
              <span className="text-xl font-black tracking-tight uppercase">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
