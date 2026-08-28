/* Olsen — brasserie editorial contemporânea: canvas preto-oliva, creme quente, verde floresta e Olsen Lemon; composição assimétrica, fotografia gastronômica dominante e interações rápidas. */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Menu,
  X,
  MapPin,
  Clock3,
  Phone,
} from "lucide-react";

const asset = {
  hero: "/manus-storage/olsen-hero-burger_602677a8.jpg",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=88",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=88",
  space: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=88",
  mark: "/manus-storage/olsen-mark_d984ac49.png",
};

const instagramUrl = "https://www.instagram.com/olsen_cafeteria/";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "brand brand--compact" : "brand"} href="#inicio" aria-label="Olsen — voltar ao início">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="presentation">
          <path d="M20 3c6.4 4.9 11 10.2 11 17.1 0 8.1-5.2 15-11 15S9 28.2 9 20.1c0-4.1 2-8.2 5.2-12.4-.2 5.6 2.1 8.4 4.6 9.9C21.1 14.5 21.4 9.9 20 3Z" />
          <path d="M13.5 26.2c2.5-2.2 5-3.1 7.4-2.8 2.4.3 4.3 1.4 5.8 3.2-2.7 2.8-5.4 4.1-8.1 4-2.1-.1-3.8-1.5-5.1-4.4Z" fill="var(--black-olive)" />
        </svg>
      </span>
      <span>OLSEN</span>
    </a>
  );
}

function ArrowLink({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a className="arrow-link" href={href}>
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["inicio", "menu", "a-casa", "contato"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -65% 0px", threshold: [0.1, 0.35, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <nav className="desktop-nav nav-left" aria-label="Navegação principal">
            <a className={activeSection === "inicio" ? "nav-link is-active" : "nav-link"} href="#inicio">Início</a>
            <a className={activeSection === "menu" ? "nav-link is-active" : "nav-link"} href="#menu">Cardápio</a>
            <a className={activeSection === "a-casa" ? "nav-link is-active" : "nav-link"} href="#a-casa">A casa</a>
          </nav>

          <BrandMark />

          <nav className="desktop-nav nav-right" aria-label="Links sociais">
            <a className="nav-link" href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a className="header-order" href="#contato">Pedir agora</a>
          </nav>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.7} /> : <Menu size={22} strokeWidth={1.7} />}
          </button>
        </div>

        <div className={menuOpen ? "mobile-menu is-open" : "mobile-menu"}>
          <div className="mobile-menu__top"><span>Menu</span><span>01—04</span></div>
          <a href="#inicio" onClick={closeMenu}>Início <ArrowUpRight size={18} /></a>
          <a href="#menu" onClick={closeMenu}>Cardápio <ArrowUpRight size={18} /></a>
          <a href="#a-casa" onClick={closeMenu}>A casa <ArrowUpRight size={18} /></a>
          <a href="#contato" onClick={closeMenu}>Contato <ArrowUpRight size={18} /></a>
          <a className="mobile-menu__social" href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Instagram size={18} /></a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-media" style={{ backgroundImage: `url(${asset.hero})` }} aria-label="Hambúrguer artesanal servido com batatas e café gelado" role="img" />
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <div className="hero-kicker"><span className="line" /> <span>CAFÉ &amp; HAMBÚRGUERIA</span></div>
            <h1>CHAPA<br /><em>QUENTE.</em><br />CAFÉ<br /><em>PASSADO.</em></h1>
            <p className="hero-copy">Uma pausa urbana para comer bem, beber melhor e ficar mais um pouco.</p>
            <div className="hero-actions">
              <a className="button button--lemon" href="#menu">Ver o cardápio <ArrowDownRight size={17} /></a>
              <a className="button button--ghost" href={instagramUrl} target="_blank" rel="noreferrer">Seguir no Instagram <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-meta page-width">
            <span>01 / 04</span>
            <span className="hero-meta__rule" />
            <span>Feito para a cidade</span>
          </div>
        </section>

        <div className="manifesto-ribbon" aria-label="O que a Olsen oferece">
          <span>CHAPA QUENTE</span><i /> <span>CAFÉ PASSADO</span><i /> <span>SEM PRESSA</span><i /> <span>CHAPA QUENTE</span><i /> <span>CAFÉ PASSADO</span>
        </div>

        <section id="menu" className="menu-section light-section">
          <div className="page-width">
            <div className="section-intro section-intro--split">
              <div>
                <span className="eyebrow eyebrow--ink">02 / O CARDÁPIO</span>
                <h2>Para pedir sem pensar duas vezes.</h2>
              </div>
              <p>Ingredientes diretos, combinações que funcionam e aquele tipo de sabor que pede mais um gole — ou mais uma mordida.</p>
            </div>

            <div className="menu-grid">
              <article className="menu-card menu-card--featured">
                <div className="menu-image-wrap"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=88" alt="Hambúrguer artesanal com queijo derretido" /></div>
                <div className="menu-card__meta"><span>01</span><span>Da chapa</span></div>
                <h3>Olsen Smash</h3>
                <p>Carne prensada na chapa, queijo derretido, picles e molho da casa no pão brioche.</p>
                <ArrowLink>Ver no cardápio</ArrowLink>
              </article>

              <article className="menu-card">
                <div className="menu-image-wrap"><img src={asset.coffee} alt="Cappuccino artesanal em xícara creme" /></div>
                <div className="menu-card__meta"><span>02</span><span>Da máquina</span></div>
                <h3>Café da casa</h3>
                <p>Espresso, cappuccino e café gelado para acompanhar o seu ritmo — sem atropelar o sabor.</p>
                <ArrowLink>Escolher meu café</ArrowLink>
              </article>

              <article className="menu-card">
                <div className="menu-image-wrap"><img src={asset.fries} alt="Batatas rústicas douradas com molho" /></div>
                <div className="menu-card__meta"><span>03</span><span>Para dividir</span></div>
                <h3>Batatas Olsen</h3>
                <p>Rústicas, douradas e crocantes por fora. Com molho para mergulhar sem economia.</p>
                <ArrowLink>Adicionar ao pedido</ArrowLink>
              </article>
            </div>
          </div>
        </section>

        <section id="a-casa" className="house-section dark-section">
          <div className="page-width house-layout">
            <div className="house-copy">
              <span className="eyebrow eyebrow--cream">03 / A CASA</span>
              <h2>Entra pelo aroma.<br /><em>Fica pelo primeiro mordisco.</em></h2>
              <p>A Olsen nasceu para os intervalos que viram encontro. Tem café para começar o dia, chapa para encerrar a noite e uma mesa que nunca parece estar com pressa.</p>
              <div className="house-details">
                <div><span>01</span><strong>Artesanal sem afetação</strong></div>
                <div><span>02</span><strong>Do café ao último pedido</strong></div>
                <div><span>03</span><strong>Uma casa para repetir</strong></div>
              </div>
              <ArrowLink href={instagramUrl}>Conhecer a Olsen</ArrowLink>
            </div>
            <figure className="house-image"><img src={asset.space} alt="Interior acolhedor da Olsen com luz quente" /><figcaption>Uma casa para qualquer hora.</figcaption></figure>
          </div>
        </section>

        <section className="quote-section light-section">
          <div className="page-width quote-layout">
            <span className="eyebrow eyebrow--ink">04 / O RITMO</span>
            <blockquote>“Tem dia que pede café. Tem dia que pede hambúrguer. Tem dia que pede os dois.”</blockquote>
            <div className="quote-signature"><span className="quote-rule" /><span>Olsen Cafeteria</span></div>
          </div>
        </section>

        <section id="contato" className="contact-section dark-section">
          <div className="page-width contact-layout">
            <div>
              <span className="eyebrow eyebrow--cream">05 / CONTATO</span>
              <h2>Seu próximo<br /><em>intervalo começa aqui.</em></h2>
              <p className="contact-lede">Acompanhe o Instagram para ver o endereço, os horários e o que acabou de sair da chapa.</p>
              <a className="button button--lemon" href={instagramUrl} target="_blank" rel="noreferrer">Abrir Instagram <Instagram size={17} /></a>
            </div>
            <div className="contact-info">
              <div className="contact-item"><MapPin size={19} strokeWidth={1.3} /><div><span>Onde</span><strong>Consulte a localização atualizada<br />no Instagram</strong></div></div>
              <div className="contact-item"><Clock3 size={19} strokeWidth={1.3} /><div><span>Quando</span><strong>Café, chapa e conversa<br />no ritmo da cidade</strong></div></div>
              <div className="contact-item"><Phone size={19} strokeWidth={1.3} /><div><span>Fale com a casa</span><strong><a href={instagramUrl} target="_blank" rel="noreferrer">@olsen_cafeteria</a></strong></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <BrandMark compact />
          <span className="footer-note">Hambúrgueria &amp; cafeteria<br />para ficar mais um pouco.</span>
          <a className="footer-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> <span>Instagram</span></a>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Olsen Cafeteria</span><span>Feito para a cidade.</span></div>
      </footer>

      <button className={showTop ? "back-top is-visible" : "back-top"} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo"><ArrowUp size={18} strokeWidth={1.5} /></button>
    </div>
  );
}
