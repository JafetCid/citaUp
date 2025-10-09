

export default function Home() {
  return (
    <main className="home-root">
      <header className="nav">
        <div className="logo">CitaUp</div>
        <nav className="nav-actions">
          <a className="btn ghost" href="#features">Características</a>
          <a className="btn" href="#registro">Regístrate</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Encuentra conexiones reales, con estilo</h1>
          <p className="hero-sub">CitaUp te ayuda a conocer personas compatibles con intereses y valores compartidos. Rápido, seguro y divertido.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#registro">Crear cuenta — es gratis</a>
            <a className="btn ghost" href="#features">Cómo funciona</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="card sample">
            <div className="avatar" />
            <div className="meta">
              <div className="name">María, 27</div>
              <div className="tag">Amante del café · Senderismo</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Por qué elegir CitaUp</h2>
        <div className="feature-grid">
          <article className="feature">
            <h3>Algoritmo inteligente</h3>
            <p>Conecta con personas que realmente comparten tus intereses y estilo de vida.</p>
          </article>
          <article className="feature">
            <h3>Privacidad y seguridad</h3>
            <p>Controles claros y moderación activa para que te sientas cómodo.
            </p>
          </article>
          <article className="feature">
            <h3>Eventos y planes</h3>
            <p>Organiza o únete a planes locales para conocer gente en persona.</p>
          </article>
        </div>
      </section>

      <section id="registro" className="signup">
        <div className="signup-card">
          <h2>Empieza hoy</h2>
          <p>Regístrate en menos de un minuto y descubre coincidencias cerca de ti.</p>
          {/* <form className="signup-form" onSubmit={(e)=>{e.preventDefault(); alert('Registro simulado');}}> */}
            <input name="email" type="email" placeholder="Tu email" required />
            <input name="name" type="text" placeholder="Tu nombre" required />
            <button className="btn primary" type="submit">Crear cuenta</button>
          {/* </form> */}
        </div>
      </section>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} CitaUp — Hecho con ❤️</div>
        <div className="small">Privacidad · Términos · Contacto</div>
      </footer>
    </main>
  );
}
