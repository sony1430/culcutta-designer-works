import { useEffect, useState } from 'react'
import './App.css'

import img1mw from './assets/images/1mw.jpg'
import img3mw from './assets/images/3mw.jpg'
import img4mw from './assets/images/4mw.jpg'
import img5mw from './assets/images/5mw.jpg'
import img6mw from './assets/images/6mw.jpg'
import img7mw from './assets/images/7mw.jpg'
import img8mw from './assets/images/8mw.jpg'
import img9mw from './assets/images/9mw.jpg'
import img10mw from './assets/images/10mw.jpg'
import img11mw from './assets/images/11mw.jpg'
import img12mw from './assets/images/12mw.webp'
import img13mw from './assets/images/13mw.jpg'

const WHATSAPP = '918179270524'
const WA_MSG = encodeURIComponent(
  'Hello Calcutta Designer Works! I would like to book a private bridal Maggam consultation.',
)
const wa = (m = WA_MSG) => `https://wa.me/${WHATSAPP}?text=${m}`

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'atelier', label: 'Atelier' },
  { id: 'collections', label: 'Collections' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'stories', label: 'Stories' },
  { id: 'contact', label: 'Contact' },
]

const STATS = [
  { value: '25+', label: 'Years of mastery' },
  { value: '500+', label: 'Brides adorned' },
  { value: '100%', label: 'Hand embroidered' },
]

const COLLECTIONS = [
  { num: 'I', title: 'Signature Maggam', desc: 'Baraat narratives & peacock majesty in couched gold.', img: img5mw },
  { num: 'II', title: 'Kanchipuram Harmony', desc: 'Pallu borders mirrored in temple vine geometry.', img: img3mw },
  { num: 'III', title: 'Royal Violet Couture', desc: 'Scalloped sleeves with floral zardosi pairing.', img: img4mw },
  { num: 'IV', title: 'Emerald Jaal', desc: 'Diamond-grid work with ruby & emerald accents.', img: img9mw },
  { num: 'V', title: 'Cream Gold Regal', desc: 'Heirloom puff sleeves & emerald bead latkans.', img: img1mw },
  { num: 'VI', title: 'Magenta Temple', desc: 'Ceremonial borders on pure bridal silk.', img: img6mw },
]

const GALLERY = [
  { img: img5mw, title: 'Royal Baraat & Peacock', cat: 'Signature', span: 'xl' },
  { img: img3mw, title: 'Maroon Peacock Ensemble', cat: 'Heritage', span: 'wide' },
  { img: img1mw, title: 'Cream Gold Regal', cat: 'Classic', span: 'tall' },
  { img: img7mw, title: 'Teal Peacock U-Neck', cat: 'Temple', span: 'tall' },
  { img: img9mw, title: 'Emerald Diamond Jaal', cat: 'Maggam', span: 'md' },
  { img: img10mw, title: 'Emerald Temple Sleeve', cat: 'Muhurtham', span: 'md' },
  { img: img4mw, title: 'Royal Violet Scallop', cat: 'Couture', span: 'md' },
  { img: img8mw, title: 'Fuchsia Peacock Grid', cat: 'Modern', span: 'md' },
  { img: img6mw, title: 'Magenta Silk Ensemble', cat: 'Bridal', span: 'md' },
  { img: img11mw, title: 'Emerald Royalty Detail', cat: 'Artisan', span: 'md' },
  { img: img13mw, title: 'Magenta Zardosi Sleeves', cat: 'Premium', span: 'md' },
  { img: img12mw, title: 'Heritage Gold Maggam', cat: 'Traditional', span: 'md' },
]

const STORIES = [
  { quote: 'The embroidery caught candlelight like jewellery — my mandap felt like a painting.', name: 'Priya S.', city: 'Chennai' },
  { quote: 'They understood our family motifs before we finished explaining. Museum-level precision.', name: 'Lakshmi R.', city: 'Hyderabad' },
  { quote: 'Not a boutique — an atelier. Patient, private, and impossibly beautiful.', name: 'Divya M.', city: 'Bengaluru' },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

function useNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return { solid, open, setOpen }
}

function IconWA() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function Btn({ variant = 'gold', href, external, children, className = '', icon }) {
  const cls = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={cls} {...extra}>
      {icon}
      <span>{children}</span>
    </a>
  )
}

function Kicker({ children }) {
  return (
    <p className="kicker" data-reveal>
      <span className="kicker__line" aria-hidden="true" />
      <span>{children}</span>
      <span className="kicker__line" aria-hidden="true" />
    </p>
  )
}

function SectionHead({ title, sub, dark }) {
  return (
    <header className={`sect-head ${dark ? 'sect-head--light' : ''}`} data-reveal>
      <h2 className="sect-head__title">{title}</h2>
      {sub && <p className="sect-head__sub">{sub}</p>}
    </header>
  )
}

function Navbar({ solid, open, setOpen, waHref }) {
  const close = () => setOpen(false)
  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="shell nav__inner">
        <a href="#home" className="nav__logo" onClick={close}>
          <span className="nav__crest">CDW</span>
          <span className="nav__name">
            Calcutta Designer Works
            <small>Bridal Maggam Couture</small>
          </span>
        </a>
        <nav className={`nav__drawer ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul className="nav__links">
            {NAV.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>
          <Btn href={waHref} external variant="nav-wa" icon={<IconWA />}>
            WhatsApp
          </Btn>
        </nav>
        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero({ waHref }) {
  return (
    <section id="home" className="hero-cine">
      <div className="hero-cine__media" aria-hidden="true">
        <img src={img5mw} alt="" className="hero-cine__bg" />
        <div className="hero-cine__shade hero-cine__shade--main" />
        <div className="hero-cine__shade hero-cine__shade--vignette" />
        <div className="hero-cine__gold-beam" />
      </div>

      <div className="shell hero-cine__body">
        <div className="hero-cine__copy">
          <Kicker>South Indian Bridal Couture</Kicker>
          <h1 className="hero-cine__title" data-reveal data-reveal-delay="1">
            Calcutta
            <br />
            <em>Designer</em>
            <span>Works</span>
          </h1>
          <p className="hero-cine__lead" data-reveal data-reveal-delay="2">
            Hand-embroidered Maggam for the woman who wears tradition as couture —
            gold thread, temple motifs, and silence before the mandap.
          </p>
          <div className="hero-cine__cta" data-reveal data-reveal-delay="3">
            <Btn href="#gallery" variant="gold">View Blouse Gallery</Btn>
            <Btn href={waHref} external variant="ghost" icon={<IconWA />}>
              Book Consultation
            </Btn>
          </div>
        </div>

        <div className="hero-cine__stats" data-reveal data-reveal-delay="4">
          {STATS.map((s) => (
            <div key={s.label} className="stat-float">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-cine__scroll" aria-hidden="true">
        <span>Discover</span>
        <i />
      </div>
    </section>
  )
}

function Atelier() {
  return (
    <section id="atelier" className="atelier sect">
      <div className="shell atelier__grid">
        <div className="atelier__visual" data-reveal>
          <div className="atelier__frame">
            <img src={img11mw} alt="Gold Maggam beadwork on emerald bridal silk" loading="lazy" />
            <div className="atelier__frame-gold" />
          </div>
        </div>
        <div className="atelier__copy">
          <Kicker>The Atelier</Kicker>
          <SectionHead
            title="Maggam as living sculpture"
            sub="Every commission is architecture in thread — peacock, Baraat, jaal, and temple borders raised by master artisans in our Chennai atelier."
          />
          <p className="atelier__p" data-reveal data-reveal-delay="1">
            We do not embellish fabric. We compose light. Japanese gold thread, silk zari,
            and weeks of hand work transform your blouse into an heirloom worn once, remembered forever.
          </p>
          <p className="atelier__p" data-reveal data-reveal-delay="2">
            Private consultations. Multiple fittings. Motifs drawn from your saree, your mother&apos;s pallu,
            your muhurtham hour.
          </p>
        </div>
      </div>
    </section>
  )
}

function CollectionItem({ item, i, waHref }) {
  return (
    <article className="edit-card" data-reveal data-reveal-delay={String((i % 3) + 1)}>
      <div className="edit-card__visual">
        <img src={item.img} alt={item.title} loading="lazy" />
        <div className="edit-card__glow" />
        <span className="edit-card__num">{item.num}</span>
        <div className="edit-card__cap">
          <Btn href={waHref} external variant="glass">Inquire</Btn>
        </div>
      </div>
      <div className="edit-card__body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </article>
  )
}

function Collections({ waHref }) {
  return (
    <section id="collections" className="collections sect sect--cream">
      <div className="shell">
        <Kicker>Collections</Kicker>
        <SectionHead
          title="Editorial commissions"
          sub="Six expressions of our house — each garment finished over hundreds of hours of Maggam mastery."
        />
        <div className="collections__grid">
          {COLLECTIONS.map((item, i) => (
            <CollectionItem key={item.title} item={item} i={i} waHref={waHref} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ item, i, waHref }) {
  return (
    <a
      href={waHref}
      className={`pin pin--${item.span}`}
      data-reveal
      data-reveal-delay={String((i % 4) + 1)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Inquire: ${item.title}`}
    >
      <div className="pin__stack">
        <div className="pin__img">
          <img src={item.img} alt={`${item.title} — ${item.cat}`} loading="lazy" />
          <div className="pin__overlay" />
          <div className="pin__sheen" />
        </div>
        <div className="pin__meta">
          <small>{item.cat}</small>
          <strong>{item.title}</strong>
          <em>Commission →</em>
        </div>
      </div>
    </a>
  )
}

function Gallery({ waHref }) {
  return (
    <section id="gallery" className="lookbook sect">
      <div className="shell">
        <Kicker>Lookbook</Kicker>
        <SectionHead
          title="The blouse gallery"
          sub="Twelve visions of South Indian bridal Maggam — curated as a designer portfolio."
        />
        <div className="lookbook__pins">
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.title} item={item} i={i} waHref={waHref} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section id="stories" className="voices sect">
      <div className="voices__blur" aria-hidden="true" />
      <div className="shell">
        <Kicker>Bride Stories</Kicker>
        <SectionHead title="Testimonials" sub="Trust earned stitch by stitch." />
        <div className="voices__grid">
          {STORIES.map((s, i) => (
            <blockquote key={s.name} className="voice-card" data-reveal data-reveal-delay={String(i + 1)}>
              <span className="voice-card__mark" aria-hidden="true">"</span>
              <p>{s.quote}</p>
              <footer>
                <cite>{s.name}</cite>
                <span>{s.city}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ waHref }) {
  return (
    <section id="contact" className="contact-dark">
      <div className="contact-dark__glow" aria-hidden="true" />
      <div className="shell contact-dark__inner">
        <Kicker>Orders</Kicker>
        <SectionHead
          dark
          title="Begin your commission"
          sub="Share your wedding date and saree. We respond within one business day."
        />
        <div className="contact-dark__cols" data-reveal>
          <div>
          <h3>Maggam Workshop</h3>
            <p>2-114,Almasguda Rd,Shivanarayana puram colony<br />Badangpet Telangana 50011</p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Mon – Sat · 10:00am – 9:00pm<br />Orders & bridal consultations available anytime</p>
          </div>
          <div>
            <h3>Direct</h3>
            <p>
              <a href="tel:+919908544620">+91 9908544620</a><br />
              <a href="mailto:culcuttamaggamworks.com">culcuttamaggamworks.com</a>
            </p>
          </div>
        </div>
        <Btn href={waHref} external variant="gold-lg" className="contact-dark__wa" icon={<IconWA />}>
          Chat on WhatsApp
        </Btn>
        <footer className="contact-dark__foot">
          <div className="contact-dark__brand">
            <span>CDW</span>
            <p>Calcutta Designer Works</p>
          </div>
          <nav>
            {NAV.map((l) => (
              <a key={l.id} href={`#${l.id}`}>{l.label}</a>
            ))}
          </nav>
          <p className="contact-dark__copy">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

function Fab({ href }) {
  return (
    <a href={href} className="fab-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <IconWA />
      <span className="fab-wa__pulse" />
    </a>
  )
}

export default function App() {
  const { solid, open, setOpen } = useNav()
  const waHref = wa()
  useReveal()

  return (
    <div className="couture">
      <Navbar solid={solid} open={open} setOpen={setOpen} waHref={waHref} />
      <main>
        <Hero waHref={waHref} />
        <Atelier />
        <Collections waHref={waHref} />
        <Gallery waHref={waHref} />
        <Stories />
        <Contact waHref={waHref} />
      </main>
      <Fab href={waHref} />
    </div>
  )
}
