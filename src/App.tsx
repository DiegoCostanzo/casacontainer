import { useState, useEffect } from 'react'

// ─── Image IDs ───────────────────────────────────────────────────────────────
const IMG = {
  hero:    'photo-1542300058-69b66c786d6e', // pool + trees
  pool:    'photo-1762254794468-1fb6fa893f73', // infinity pool dusk
  sunset:  'photo-1709733167463-a5bb577a05d1', // Brazil lagoon sunset
  grill:   'photo-1623524145380-76d0d3e09575', // grill / churrasco
  deck:    'photo-1622683328784-b033567cd273', // wood chair window
  nature:  'photo-1646483152971-963fbce67ca4', // pool mountains
}

const u = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#sobre', label: 'A Casa' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#comodidades', label: 'Comodidades' },
    { href: '#localizacao', label: 'Localização' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(247,242,233,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(182,123,67,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold text-white"
            style={{ background: '#2D5F5D', fontFamily: 'var(--font-display)' }}
          >
            CC
          </span>
          <span
            className="font-semibold tracking-wide transition-colors"
            style={{
              fontFamily: 'var(--font-display)',
              color: scrolled ? '#2A2520' : '#F7F2E9',
              fontSize: '1rem',
            }}
          >
            Casa Container
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: scrolled ? '#4A3E35' : '#F7F2E9' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5551999851057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#2D5F5D', color: '#F7F2E9' }}
          >
            Reservar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block h-0.5 w-6 transition-all duration-300"
                style={{ background: scrolled ? '#2A2520' : '#F7F2E9' }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: '#F7F2E9' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: '#4A3E35', borderColor: '#E8CFA0' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5551999851057"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm font-semibold px-5 py-3 rounded-full"
            style={{ background: '#2D5F5D', color: '#F7F2E9' }}
          >
            Reservar agora
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end" style={{ background: '#1D3F3D' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={u(IMG.hero, 1600, 1000)}
          alt="Casa Container com piscina e natureza"
          className="w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(29,63,61,0.92) 0%, rgba(29,63,61,0.3) 50%, rgba(0,0,0,0.1) 100%)',
          }}
        />
      </div>

      {/* Organic texture accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl"
        style={{ background: '#B67B43', transform: 'translate(30%, -30%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: '#B67B43' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#D4A06A' }}>
              Torres · RS · Brasil
            </span>
          </div>

          {/* Main title */}
          <h1
            className="mb-4 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              color: '#F7F2E9',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Casa<br />
            <em style={{ color: '#D4A06A', fontStyle: 'italic' }}>Container</em>
          </h1>

          {/* Tagline */}
          <p
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'rgba(247,242,233,0.85)',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            Conexão com a natureza,<br />fundamental!!
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5551999851057"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: '#B67B43', color: '#F7F2E9' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar agora
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: 'rgba(247,242,233,0.4)', color: '#F7F2E9' }}
            >
              Conhecer mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(247,242,233,0.5)', writingMode: 'vertical-rl' }}>
          rolar
        </span>
        <div className="w-px h-12 animate-pulse" style={{ background: 'rgba(247,242,233,0.3)' }} />
      </div>
    </section>
  )
}

// ─── Sobre ─────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-36" style={{ background: '#F7F2E9' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '4/5', background: '#E8CFA0' }}
            >
              <img
                src={u(IMG.deck, 800, 1000)}
                alt="Interior da Casa Container, deck de madeira"
                className="w-full h-full object-cover"
              />
              {/* Floating accent card */}
              <div
                className="absolute bottom-6 -right-6 md:-right-10 p-5 rounded-xl shadow-xl"
                style={{ background: '#2D5F5D', color: '#F7F2E9', maxWidth: '180px' }}
              >
                <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>10<span className="text-sm font-normal">km</span></p>
                <p className="text-xs mt-1 opacity-80 leading-tight">de Torres-RS</p>
                <div className="mt-2 h-px w-8" style={{ background: '#D4A06A' }} />
                <p className="text-xs mt-2 opacity-70">Vista para a<br />Lagoa Itapeva</p>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #B67B43 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#B67B43' }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#B67B43' }}>
                sobre a casa
              </span>
            </div>

            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#2A2520',
                fontWeight: 400,
              }}
            >
              Um refúgio entre{' '}
              <em style={{ color: '#2D5F5D', fontStyle: 'italic' }}>a lagoa e o vento</em>
            </h2>

            <p className="leading-relaxed mb-5" style={{ color: '#4A3E35', fontSize: '1.05rem' }}>
              A Casa Container nasceu de um desejo simples: criar um lugar onde o tempo desacelera. A 10km de Torres, no coração do Rio Grande do Sul, ela surge entre o verde e o vento — um container reciclado transformado com madeira, plantas e muita intenção.
            </p>

            <p className="leading-relaxed mb-8" style={{ color: '#8A7D6F', fontSize: '0.975rem' }}>
              Da janela, a vista é para a Lagoa Itapeva. O som que chega é o dos pássaros e das folhas. A piscina aquecida espera por você. Tudo aqui convida a sentar, respirar e reconectar com o essencial.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: '#E8CFA0' }}>
              {[
                { val: '~10km', label: 'de Torres' },
                { val: 'Lagoa', label: 'Itapeva' },
                { val: '∞', label: 'natureza' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#2D5F5D' }}>{s.val}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#8A7D6F' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Galeria ─────────────────────────────────────────────────────────────────
function Galeria() {
  const items = [
    { id: IMG.pool, alt: 'Piscina aquecida ao entardecer', label: 'Piscina aquecida', span: 'md:col-span-2 md:row-span-2' },
    { id: IMG.sunset, alt: 'Por do sol com vista para a Lagoa Itapeva', label: 'Vista para a Lagoa' },
    { id: IMG.grill, alt: 'Espaço gourmet e churrasco', label: 'Espaço gourmet' },
    { id: IMG.nature, alt: 'Área externa com natureza ao redor', label: 'Conexão com a natureza' },
    { id: IMG.deck, alt: 'Deck de madeira e varanda', label: 'Deck de madeira' },
  ]

  return (
    <section id="galeria" className="py-24 md:py-36" style={{ background: '#EDE5D4' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: '#B67B43' }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#B67B43' }}>galeria</span>
            </div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#2A2520',
                fontWeight: 400,
              }}
            >
              Momentos que<br />
              <em style={{ color: '#4A7A5A', fontStyle: 'italic' }}>ficam na memória</em>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-xs text-sm leading-relaxed" style={{ color: '#8A7D6F' }}>
            Cada detalhe da Casa Container foi pensado para criar momentos simples e inesquecíveis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ gridAutoRows: '220px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span ?? ''}`}
              style={{ background: '#D4A06A' }}
            >
              <img
                src={u(item.id, i === 0 ? 800 : 500, i === 0 ? 700 : 400)}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(29,63,61,0.75) 0%, transparent 60%)' }}
              >
                <span className="text-xs font-medium tracking-wide" style={{ color: '#F7F2E9' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Comodidades ─────────────────────────────────────────────────────────────
const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 12h20M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"/>
        <path d="M7 12c0-2.761 2.239-5 5-5s5 2.239 5 5"/>
      </svg>
    ),
    title: 'Piscina aquecida',
    desc: 'Mergulhe em qualquer estação — a água está sempre na temperatura certa.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M1 6l11 6 11-6"/><path d="M12 12v10"/><path d="M1 6v10l11 6"/><path d="M23 6v10l-11 6"/>
      </svg>
    ),
    title: 'Vista para a Lagoa Itapeva',
    desc: 'Acorde com o reflexo da lagoa e o horizonte aberto à sua frente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 6h18M3 12h18M3 18h18"/><rect x="5" y="2" width="14" height="4" rx="1"/>
      </svg>
    ),
    title: 'Espaço gourmet',
    desc: 'Churrasco, fogo de chão e mesa posta para celebrar os melhores momentos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 6c0 8.837 3.582 12 8 12s8-3.163 8-12"/><path d="M4 6H2m20 0h-2"/><path d="M12 18v3"/>
      </svg>
    ),
    title: 'Rede',
    desc: 'Embale-se na rede entre as árvores enquanto a brisa traz cheiro de mato.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22V12"/><path d="M5 12H2a10 10 0 0020 0h-3"/><path d="M12 2a5 5 0 010 10"/>
      </svg>
    ),
    title: 'Deck de madeira',
    desc: 'Piso de madeira rústica para alongar o pôr do sol com uma taça na mão.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 8h1a4 4 0 010 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Conexão com a natureza',
    desc: 'Jardim vivo, silêncio generoso e céu estrelado para recalibrar a alma.',
  },
]

function Comodidades() {
  return (
    <section id="comodidades" className="py-24 md:py-36" style={{ background: '#F7F2E9' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#B67B43' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#B67B43' }}>comodidades</span>
            <div className="h-px w-8" style={{ background: '#B67B43' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: '#2A2520',
              fontWeight: 400,
            }}
          >
            Tudo que você precisa<br />
            <em style={{ color: '#2D5F5D', fontStyle: 'italic' }}>para descansar de verdade</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              style={{ background: i % 2 === 0 ? '#EDE5D4' : '#F7F2E9', border: '1px solid #E8CFA0' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-petrol"
                style={{ background: '#2D5F5D', color: '#D4A06A' }}
              >
                {a.icon}
              </div>
              <h3
                className="font-semibold mb-2 text-base"
                style={{ fontFamily: 'var(--font-display)', color: '#2A2520' }}
              >
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A7D6F' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Little Moments ────────────────────────────────────────────────────────────
function LittleMoments() {
  return (
    <section className="relative py-36 overflow-hidden" style={{ background: '#1D3F3D' }}>
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src={u(IMG.sunset, 1400, 800)}
          alt="Pôr do sol na Lagoa Itapeva"
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(29,63,61,0.9) 40%, rgba(45,95,93,0.6) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p
          className="mb-3 text-xs tracking-widest uppercase font-medium"
          style={{ color: '#D4A06A' }}
        >
          little moments
        </p>
        <h2
          className="mb-8 leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: '#F7F2E9',
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          "É no simples que a vida<br />se revela mais bela."
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(247,242,233,0.7)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
          Uma xícara de chá no deck. O sol se deitando sobre a lagoa. O barulho das folhas no vento. São esses pequenos momentos que a Casa Container guarda com carinho para você.
        </p>
        <a
          href="https://wa.me/5551999851057"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{ background: '#B67B43', color: '#F7F2E9' }}
        >
          Viver esses momentos →
        </a>
      </div>
    </section>
  )
}

// ─── Localização ──────────────────────────────────────────────────────────────
function Localizacao() {
  return (
    <section id="localizacao" className="py-24 md:py-36" style={{ background: '#EDE5D4' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#B67B43' }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#B67B43' }}>localização</span>
            </div>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#2A2520',
                fontWeight: 400,
              }}
            >
              Perto do mar,<br />
              <em style={{ color: '#2D5F5D', fontStyle: 'italic' }}>longe da correria</em>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: '#4A3E35', fontSize: '1.05rem' }}>
              Localizada a apenas 10km de Torres-RS, a Casa Container fica às margens da bela Lagoa Itapeva — com fácil acesso às praias e ao centro da cidade, mas com a calma que só a natureza oferece.
            </p>

            {/* Info cards */}
            <div className="space-y-3">
              {[
                { icon: '📍', label: 'Endereço', val: 'Torres-RS, Rio Grande do Sul, Brasil' },
                { icon: '🌊', label: 'Lagoa Itapeva', val: 'Vista panorâmica a poucos passos' },
                { icon: '🏖️', label: 'Praias de Torres', val: 'A apenas 10 minutos de carro' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: '#F7F2E9', border: '1px solid #E8CFA0' }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: '#B67B43' }}>{item.label}</p>
                    <p className="text-sm" style={{ color: '#4A3E35' }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '1/1', background: '#D4A06A' }}>
            <iframe
              title="Localização Casa Container Torres RS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114823.06574810673!2d-49.82127!3d-29.33894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a1bcc62e80001%3A0x2db6d81dcf13a00!2sTorres%2C%20RS%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1699000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(20%) saturate(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge */}
            <div
              className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
              style={{ background: '#2D5F5D', color: '#F7F2E9' }}
            >
              10km de Torres · RS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contato ─────────────────────────────────────────────────────────────────
function Contato() {
  return (
    <section id="contato" className="py-24 md:py-36" style={{ background: '#2D5F5D' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8" style={{ background: '#D4A06A' }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#D4A06A' }}>contato</span>
          <div className="h-px w-8" style={{ background: '#D4A06A' }} />
        </div>

        <h2
          className="mb-4 leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#F7F2E9',
            fontWeight: 400,
          }}
        >
          Pronta para te receber
        </h2>
        <p className="mb-12 text-base leading-relaxed mx-auto" style={{ color: 'rgba(247,242,233,0.7)', maxWidth: '480px' }}>
          Dúvidas, disponibilidade ou só bater um papo? Fala com a gente. Respondemos com carinho e sem demora.
        </p>

        {/* CTA principal */}
        <a
          href="https://wa.me/5551999851057?text=Olá!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Container%20🌿"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90 mb-10 shadow-xl"
          style={{ background: '#25D366', color: '#fff' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Fale pelo WhatsApp
        </a>

        {/* Secondary contacts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:reginakreus@hotmail.com"
            className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: 'rgba(247,242,233,0.7)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            reginakreus@hotmail.com
          </a>

          <span className="hidden sm:block opacity-30" style={{ color: '#F7F2E9' }}>·</span>

          <a
            href="https://instagram.com/kcasacontainer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: 'rgba(247,242,233,0.7)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @kcasacontainer
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10 border-t" style={{ background: '#1D3F3D', borderColor: 'rgba(247,242,233,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
            style={{ background: '#2D5F5D', color: '#D4A06A', fontFamily: 'var(--font-display)' }}
          >
            CC
          </span>
          <div>
            <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#F7F2E9' }}>Casa Container</p>
            <p className="text-xs" style={{ color: 'rgba(247,242,233,0.4)' }}>Torres · RS · Brasil</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/5551999851057"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#F7F2E9">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/kcasacontainer"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F2E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a
            href="mailto:reginakreus@hotmail.com"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="E-mail"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F2E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center md:text-right" style={{ color: 'rgba(247,242,233,0.35)' }}>
          © {new Date().getFullYear()} Casa Container · Torres-RS<br />
          Feito com ♡ e muita natureza
        </p>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
      <Nav />
      <Hero />
      <Sobre />
      <Galeria />
      <Comodidades />
      <LittleMoments />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  )
}
