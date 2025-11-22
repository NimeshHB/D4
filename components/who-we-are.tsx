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
              We're a compact team of product designers and front-end engineers. We combine
              strategy, beautiful UI, and motion to deliver memorable digital products and
              polished brand experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 mb-6">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00DF82] to-[#00C2A8]" />
                <span className="font-medium">Product strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00DF82] to-[#00C2A8]" />
                <span className="font-medium">Design systems</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00DF82] to-[#00C2A8]" />
                <span className="font-medium">Web & Mobile</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00DF82] to-[#00C2A8]" />
                <span className="font-medium">Motion</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#00DF82] text-black font-semibold px-5 py-3 rounded-md shadow-lg"
            >
              Let's talk
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/placeholder-user.jpg" alt="Team member" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/placeholder.svg" alt="Studio" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
