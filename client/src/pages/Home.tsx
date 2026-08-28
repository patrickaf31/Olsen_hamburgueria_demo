/* Olsen — reformulação enxaimel de afeto: cafeteria acolhedora de Pomerode, papel creme, madeira, terracota, verde musgo e a foto real da casa como único asset fotográfico. */
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Coffee,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Sprout,
  X,
} from "lucide-react";

const housePhoto = "/manus-storage/olsen-casa-enxaimel_bd052846.png";
const coffeePhoto = "/manus-storage/olsen-cafezinho_999f2e66.png";
const instagramUrl = "https://www.instagram.com/olsen_cafeteria/";
const whatsappUrl = "https://wa.me/5547991294132?text=Ol%C3%A1%20Olsen!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cafeteria.";

function OlsenLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#inicio" className={dark ? "olsen-logo olsen-logo--dark" : "olsen-logo"} aria-label="Olsen — voltar ao início">
      <span className="logo-shield" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="presentation">
          <path d="M20 4 34 10v10c0 8.2-5.3 13.5-14 16-8.7-2.5-14-7.8-14-16V10L20 4Z" />
          <path d="M20 10c4.4 3.5 7.3 7.1 7.3 11.5 0 5.1-3.1 9-7.3 9s-7.3-3.9-7.3-9c0-2.6 1.1-5.1 3.2-7.9-.1 3.2 1.2 4.7 2.5 5.6 1.1-2 2-5 1.6-10.2Z" fill="currentColor" />
        </svg>
      </span>
      <span>OLSEN</span>
    </a>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</div>;
}

function ArrowCta({ children, href, filled = false }: { children: ReactNode; href: string; filled?: boolean }) {
  return (
    <a className={filled ? "pill-button pill-button--filled" : "pill-button"} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14, rootMargin: "0px 0px -45px" },
    );
    revealItems.forEach((item) => observer.observe(item));
    const onScroll = () => setShowTop(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="cozy-site">
      <header className="cozy-header">
        <div className="header-wrap page-width">
          <OlsenLogo dark />
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#historia">Nossa história</a>
            <a href="#casa">A casa</a>
            <a href="#visite">Visite</a>
          </nav>
          <div className="header-actions">
            <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            <button className="mobile-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        <div className={menuOpen ? "mobile-panel is-open" : "mobile-panel"}>
          <span className="mobile-panel__eyebrow">OLSEN / POMERODE</span>
          <a href="#historia" onClick={closeMenu}>Nossa história <ArrowUpRight size={18} /></a>
          <a href="#casa" onClick={closeMenu}>A casa <ArrowUpRight size={18} /></a>
          <a href="#visite" onClick={closeMenu}>Visite <ArrowUpRight size={18} /></a>
          <a className="mobile-panel__whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar no WhatsApp</a>
        </div>
      </header>

      <main>
        <section id="inicio" className="cozy-hero">
          <div className="hero-frame hero-frame--left" aria-hidden="true" />
          <div className="hero-frame hero-frame--right" aria-hidden="true" />
          <div className="hero-image-wrap"><img src={housePhoto} alt="Casa enxaimel da Olsen Cafeteria em Pomerode" /></div>
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-content page-width">
            <Reveal className="hero-copy-block">
              <span className="small-label"><span className="label-dot" /> Casa enxaimel centenária · Pomerode</span>
              <h1>Uma casa<br /><em>para chamar</em><br />de sua.</h1>
              <p>Um café passado, um bolo de família e tempo para ficar. Bem-vindo à Olsen.</p>
              <div className="hero-ctas"><ArrowCta href="#historia" filled>Conheça a nossa história</ArrowCta><a className="text-cta" href="#visite">Como chegar <ArrowDown size={16} /></a></div>
            </Reveal>
            <Reveal className="hero-note" delay={160}><span>Desde</span><strong>07.25</strong><small>Pequena Alemanha</small></Reveal>
          </div>
          <a className="scroll-cue" href="#historia" aria-label="Rolar para a história"><span>Role para conhecer</span><ChevronDown size={18} /></a>
        </section>

        <section className="welcome-band paper-section">
          <div className="page-width welcome-grid">
            <Reveal><span className="small-label small-label--rust"><span className="label-dot" /> Feito à mão, com afeto</span></Reveal>
            <Reveal delay={100}><p className="welcome-lede">Em Pomerode, algumas casas guardam histórias. A Olsen decidiu preparar café dentro de uma delas — e abrir as portas para a sua.</p></Reveal>
            <Reveal className="welcome-aside" delay={180}><span>O café fica melhor<br />quando a conversa demora.</span><Heart size={22} strokeWidth={1.4} /></Reveal>
          </div>
        </section>

        <section className="coffee-moment paper-section">
          <div className="page-width coffee-moment__grid">
            <Reveal className="coffee-moment__image"><img src={coffeePhoto} alt="Cafezinho servido em xícara de vidro na Olsen Cafeteria" /><span className="photo-note">Pausa para um café</span></Reveal>
            <Reveal className="coffee-moment__copy" delay={150}><span className="small-label small-label--rust"><span className="label-dot" /> Um cafezinho da Olsen</span><h2>Pequenos rituais<br /><em>fazem o dia melhor.</em></h2><p>Tem o primeiro gole, a espuma delicada e aquele minuto em que a conversa desacelera. Na Olsen, o café chega como deve: feito com cuidado e servido para aproveitar.</p><a className="text-cta text-cta--dark" href="#visite">Venha tomar um café <ArrowUpRight size={16} /></a></Reveal>
          </div>
        </section>

        <section id="historia" className="story-section paper-section">
          <div className="beam-pattern beam-pattern--top" aria-hidden="true" />
          <div className="page-width story-layout">
            <Reveal className="story-heading"><span className="small-label small-label--moss"><span className="label-dot" /> A nossa história</span><h2>Dois recomeços.<br /><em>Uma casa cheia.</em></h2><p>Eduardo e Thayana trocaram a estabilidade por um sonho antigo. O resto, fizeram com as próprias mãos.</p></Reveal>
            <div className="timeline">
              <Reveal className="timeline-item" delay={80}><span className="timeline-year">01 / O sonho</span><div><h3>Antes da Olsen</h3><p>Eduardo trabalhava com soldagem, trailers e carros antigos. Thayana estava prestes a se formar em Enfermagem — cada um seguindo seu caminho, até a vida pedir uma pausa.</p></div></Reveal>
              <Reveal className="timeline-item" delay={160}><span className="timeline-year">02 / A virada</span><div><h3>Um bebê a caminho</h3><p>Um dia antes da formatura de Thayana, veio a notícia que mudaria tudo: o casal descobriu que seria pai e mãe. Junto com a novidade, veio a coragem de tirar um sonho do papel.</p></div></Reveal>
              <Reveal className="timeline-item" delay={240}><span className="timeline-year">03 / Pomerode</span><div><h3>Pequena Alemanha</h3><p>Em julho de 2025, eles deixaram Rio Negrinho e recomeçaram no coração de Pomerode. Uma casa enxaimel centenária virou endereço, oficina, jardim e lar.</p></div></Reveal>
              <Reveal className="timeline-item" delay={320}><span className="timeline-year">04 / A Olsen</span><div><h3>Receitas de família</h3><p>Com as mãos de Eduardo na reforma e as receitas dos pais de Thayana na cozinha, nasceu uma cafeteria com jeito de casa de vó — simples, honesta e feita para acolher.</p></div></Reveal>
            </div>
          </div>
        </section>

        <section id="casa" className="house-section">
          <div className="house-grid page-width">
            <Reveal className="house-card house-card--moss"><div className="house-icon"><Coffee size={28} strokeWidth={1.25} /></div><span className="small-label small-label--cream">O que mora aqui</span><h2>Café, bolo<br />e conversa.</h2><p>O cardápio muda, o acolhimento fica. Tudo preparado em pequena escala, com receitas de família e o cuidado de quem conhece cada canto da casa.</p></Reveal>
            <Reveal className="house-card house-card--terracotta" delay={140}><div className="house-icon"><Sprout size={28} strokeWidth={1.25} /></div><span className="small-label small-label--cream">Mão na massa</span><h2>Feito por<br />Eduardo e Thayana.</h2><p>Do jardim ao sótão, da decoração às formas para servir: a Olsen tem a marca das mãos que imaginaram este lugar.</p></Reveal>
            <Reveal className="house-card house-card--cream" delay={280}><div className="house-icon"><CalendarDays size={28} strokeWidth={1.25} /></div><span className="small-label small-label--moss">Um dia de cada vez</span><h2>Chegue sem<br />pressa.</h2><p>A casa fica na Rua Hermann Weege, 1178, no Centro de Pomerode. Um lugar para visitar, respirar e voltar.</p></Reveal>
          </div>
        </section>

        <section className="numbers-section paper-section">
          <div className="page-width numbers-grid">
            <Reveal><span className="numbers-big">400</span><span className="numbers-caption">pessoas em um dia de casa cheia</span></Reveal>
            <Reveal delay={120}><span className="numbers-big">07.25</span><span className="numbers-caption">quando a história começou em Pomerode</span></Reveal>
            <Reveal delay={240}><span className="numbers-big">∞</span><span className="numbers-caption">receitas, encontros e motivos para voltar</span></Reveal>
          </div>
        </section>

        <section id="visite" className="visit-section">
          <div className="beam-pattern beam-pattern--bottom" aria-hidden="true" />
          <div className="page-width visit-layout">
            <Reveal className="visit-heading"><span className="small-label small-label--cream"><span className="label-dot" /> Venha para a Olsen</span><h2>Tem sempre<br /><em>lugar para mais um.</em></h2><p>Rua Hermann Weege, 1178 · Centro · Pomerode / SC</p><div className="visit-actions"><ArrowCta href={whatsappUrl} filled>Falar no WhatsApp</ArrowCta><ArrowCta href={instagramUrl}>Ver no Instagram</ArrowCta></div></Reveal>
            <Reveal className="visit-details" delay={160}><div className="detail-row"><MapPin size={19} /><span>Endereço</span><strong>Rua Hermann Weege, 1178<br />Centro, Pomerode — SC</strong></div><div className="detail-row"><Coffee size={19} /><span>Horários</span><strong>Quarta a sexta<br />07h30–11h30 · 14h–19h<br /><br />Sábado e domingo<br />07h30–19h</strong></div><div className="detail-row"><MessageCircle size={19} /><span>Contato</span><strong><a href={whatsappUrl} target="_blank" rel="noreferrer">(47) 99129-4132</a><br /><a href={instagramUrl} target="_blank" rel="noreferrer">@olsen_cafeteria</a></strong></div></Reveal>
          </div>
        </section>
      </main>

      <footer className="cozy-footer">
        <div className="page-width footer-main"><OlsenLogo /><div className="footer-phrase">Uma casa enxaimel.<br /><em>Um café com história.</em></div><a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={15} /></a></div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Olsen Cafeteria</span><span>Pomerode · SC</span><span>Feito devagar, para durar.</span></div>
      </footer>

      <button className={showTop ? "back-top is-visible" : "back-top"} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo"><ArrowUp size={17} /></button>
    </div>
  );
}
