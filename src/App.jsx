import Hero from './components/Hero'
import Info from './components/Info'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="Icon" className="w-6 h-6" />
            <span className="font-semibold text-white">Skibidi Toilet Hub</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#overview" className="hover:text-white/90">Overview</a>
            <a href="#links" className="hover:text-white/90">Links</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section id="overview"><Info /></section>
        <section id="links"><Links /></section>
      </main>

      <Footer />
    </div>
  )
}

export default App
