const facts = [
  {
    title: "What is Skibidi Toilet?",
    text:
      "A wildly popular web series blending surreal humor, music-driven edits, and a battle between Cameramen, Speakermen, and the infamous Skibidi Toilets.",
  },
  {
    title: "Creator",
    text:
      "Made by DaFuq!?Boom!, the channel that kicked off the trend with high‑energy episodes and iconic characters.",
  },
  {
    title: "Style",
    text:
      "Fast cuts, meme culture references, catchy beats, and escalating spectacle define the show's signature vibe.",
  },
  {
    title: "Community",
    text:
      "A massive fanbase remixing clips, building lore, and sharing theories across YouTube and social platforms.",
  },
]

const Info = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-blue-500/20 bg-slate-800/50 p-5 text-blue-100"
            >
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-blue-200/80 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
