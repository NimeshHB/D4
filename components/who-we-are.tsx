import Image from "next/image"

export default function WhoWeAre(): JSX.Element {
  const cards = [
    { title: "Our Team", desc: "Designers and engineers working cross-functionally.", image: "/placeholder-user.jpg" },
    { title: "How we work", desc: "Iterative product design and rapid prototyping.", image: "/placeholder.svg" },
    { title: "Culture", desc: "Remote-first, collaborative, outcome-driven.", image: "/placeholder-user.jpg" },
    { title: "Commitment", desc: "Long-term partnerships and measurable impact.", image: "/placeholder.svg" },
  ]

  return (
    <section aria-labelledby="who-we-are" className="py-16 px-6 bg-[#061217] text-white rounded-2xl my-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 id="who-we-are" className="text-3xl md:text-4xl font-extrabold mb-4">Who we are</h2>
            <p className="text-gray-300 mb-6 max-w-prose">
              We are a small, dedicated team that builds thoughtful products and striking visual
              identities. We combine product thinking, visual craft, and front-end execution to
              ship delightful experiences.
            </p>

            <a href="#contact" className="inline-flex items-center gap-3 bg-[#00DF82] text-black font-semibold px-5 py-3 rounded-md shadow-lg">
              Work with us
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <article key={c.title} className="group relative rounded-xl p-4 bg-gradient-to-br from-white/3 to-white/2 hover:shadow-xl transition">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-lg bg-[#00160f] grid place-items-center text-[#00DF82]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{c.title}</h4>
                      <p className="text-sm text-gray-300">{c.desc}</p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-md overflow-hidden h-36">
                    <img src={c.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
