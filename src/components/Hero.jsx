import { Youtube, ShoppingBag } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-40 -right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[32rem] h-[32rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
            Skibidi Toilet • Fan Information Hub
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Dive into the world of Skibidi Toilet
          </h1>
          <p className="max-w-2xl text-blue-200/90 text-base sm:text-lg">
            A clean, ad‑free page with helpful links and a quick overview of the viral cinematic universe created by DaFuq!?Boom!.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="https://youtube.com/@dafuqboom?si=JZIPHFeWDXvXQ4Ff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Watch the main channel
            </a>
            <a
              href="https://skibiditoilet.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Official toys shop
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
