import Image from "next/image"

export default function WhoWeAre(): JSX.Element {
  return (
    <section aria-labelledby="who-we-are" className="mt-20 text-white bg-[#071018]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h3 id="who-we-are" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Who we are
            </h3>

            <p className="text-gray-300 max-w-prose mb-6">
              We’re a tight-knit team of designers, developers, and brand strategists based in Sri
              Lanka. We blend sharp strategy, pixel-perfect design, and clean code to launch standout
              websites, powerful software solutions, and unforgettable brand identities that grow with
              your business.
            </p>

            <h4 className="text-sm font-semibold uppercase text-[#00DF82] mb-3">Core strengths</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-2 bg-white/3 rounded-md border border-white/6 text-sm flex items-center gap-3">
              <div className="flex-none w-8 h-8 rounded-sm bg-[#00160f] grid place-items-center text-[#00DF82] text-xs">+</div>
              <div>
                <div className="font-medium">Web Design</div>
                <div className="text-gray-300 text-xs">UI/UX & Frontend</div>
              </div>
              </div>

              <div className="p-2 bg-white/3 rounded-md border border-white/6 text-sm flex items-center gap-3">
              <div className="flex-none w-8 h-8 rounded-sm bg-[#00160f] grid place-items-center text-[#00DF82] text-xs">+</div>
              <div>
                <div className="font-medium">Development</div>
                <div className="text-gray-300 text-xs">Backend | Hosting</div>
              </div>
              </div>

              <div className="p-2 bg-white/3 rounded-md border border-white/6 text-sm flex items-center gap-3">
              <div className="flex-none w-8 h-8 rounded-sm bg-[#00160f] grid place-items-center text-[#00DF82] text-xs">+</div>
              <div>
                <div className="font-medium">Branding</div>
                <div className="text-gray-300 text-xs">Logo & Identity</div>
              </div>
              </div>
            </div>

            <a
              href="https://web.facebook.com/profile.php?id=61583791092081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00DF82] text-black font-semibold px-5 py-3 rounded-md shadow-lg"
            >
              Let's talk
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/chalana.jpg" alt="Team member" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/Nimesh.jpg" alt="Studio" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
