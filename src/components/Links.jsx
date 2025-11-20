import { ExternalLink } from 'lucide-react'

const links = [
  {
    label: 'Main YouTube channel',
    href: 'https://youtube.com/@dafuqboom?si=JZIPHFeWDXvXQ4Ff',
    description: 'Watch official episodes and updates from DaFuq!?Boom!'
  },
  {
    label: 'Official toys shop',
    href: 'https://skibiditoilet.shop/',
    description: 'Merch and collectibles inspired by the series'
  }
]

const Links = () => {
  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Official Links</h2>
        <div className="rounded-xl border border-blue-500/20 bg-slate-800/50 overflow-hidden">
          {links.map((l, idx) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-3 p-5 hover:bg-slate-800/70 transition-colors ${idx !== links.length - 1 ? 'border-b border-blue-500/10' : ''}`}
            >
              <div className="flex-1">
                <p className="text-white font-medium">{l.label}</p>
                <p className="text-sm text-blue-200/80">{l.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-blue-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Links
