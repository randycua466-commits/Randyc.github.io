/* =========================================================
   Hire Connect — Router SPA muy simple basado en hash
   Rutas:
     #/                  Inicio (portada)
     #/quien-somos       Introducción + Sobre Nosotros
     #/metas             Misión, Visión, Cultura, Valores
     #/contactos         Ubicación + enlaces (banner -> RR.HH.)
     #/recursos-humanos  Descripción de servicios
   ========================================================= */

const routes = {
  "/": renderHome,
  "/quien-somos": renderQuienSomos,
  "/metas": renderMetas,
  "/contactos": renderContactos,
  "/recursos-humanos": renderRecursosHumanos,
};

const navItems = [
  { to: "/",            label: "Inicio" },
  { to: "/quien-somos", label: "Quien somos" },
  { to: "/metas",       label: "Metas" },
  { to: "/contactos",   label: "Contactos" },
];

function currentPath() {
  const h = window.location.hash || "#/";
  return h.replace(/^#/, "") || "/";
}

function renderNav() {
  const path = currentPath();
  return `
    <header class="site-header">
      <nav class="nav">
        ${navItems.map(it => `
          <a href="#${it.to}" class="${path === it.to ? "active" : ""}">${it.label}</a>
        `).join("")}
      </nav>
    </header>
  `;
}

function renderHome() {
  return `
    <main>
      <img class="hero-img" src="assets/1.webp" alt="Equipo profesional reunido en una sala de juntas moderna" />
      <section style="background:var(--navy-deep)">
        <div class="hero-title-wrap">
          <span class="chalk-line"></span>
          <h1>HIRE CONNECT</h1>
          <span class="chalk-line"></span>
        </div>
        <p class="hero-sub">
         
        </p>
      </section>
      <div class="curve-cream"></div>
    </main>
  `;
}

function renderQuienSomos() {
  return `
    <main>
      <section class="intro container">
        <h1>INTRODUCCIÓN</h1>
        <p>Hire Connection es una empresa especializada en la verificación de identidad de personas y organizaciones, la cual utiliza métodos científicos, tecnológicos y de análisis profesional para evaluar el perfil de conducta y los niveles de riesgo del talento humano. Su principal finalidad es apoyar a las empresas en la toma de decisiones más seguras y confiables dentro del ámbito laboral.</p>
        <p>La propuesta de valores de Hire Connection se diferencia por ofrecer un enfoque integral en la evaluación del capital humano, combinando tecnología avanzada con experiencia profesional. Su propuesta de valor se basa en brindar información precisa, confiable y útil para reducir riesgos dentro de las organizaciones.</p>
      </section>

      <div class="curve-cream" style="height:8rem"></div>
      <div class="logo-band"><img src="assets/logo-hireconnect.jpg" alt="Logo Hire Connect" /></div>

      <section class="about">
        <div class="container">
          <h2>Sobre Nosotros</h2>
          <p>Nuestro objetivo principal es apoyar a las empresas en la reducción de riesgos relacionados con el capital humano, ayudando a garantizar procesos de selección más seguros y eficientes. Esto permite que las organizaciones puedan tomar decisiones más informadas al momento de contratar personal o establecer relaciones laborales.</p>
          <span class="chalk-line dark"></span>
        </div>
      </section>

      <section class="diagonal-section">
        <div class="clip">
          <div class="container">
            <p>Hire Connection fue fundada en el año 2008 por un grupo visionario que identificó la necesidad de mejorar los sistemas de evaluación y seguridad en las empresas de la región. Su objetivo inicial fue desarrollar herramientas que ayudaran a disminuir los incidentes relacionados con el recurso humano.</p>
          </div>
        </div>
      </section>

      <div class="cta-band">
        <a class="btn-lavender" href="#/metas">Ver nuestras Metas →</a>
      </div>
    </main>
  `;
}

function renderMetas() {
  return `
    <main>
      <section class="split">
        <div class="left">
          <h2>Misión y Visión</h2>
          <ul>
            <li><strong>Misión:</strong> Brindar servicios de verificación y evaluación de talento humano con excelencia, generando bienestar en las personas y contribuyendo al éxito de nuestros clientes.</li>
            <li><strong>Visión:</strong> Ser reconocida a nivel internacional por la excelencia de sus servicios, generando bienestar en las personas y contribuyendo al éxito de sus clientes.</li>
          </ul>
        </div>
        <div class="right">
          <h2>Cultura organizacional</h2>
          <p style="font-size:1.125rem;line-height:1.7;text-align:justify">La cultura de Hire Connection se basa en un orden de valores que prioriza a Dios, la familia, el trabajo y la sociedad. Este enfoque busca mantener un equilibrio entre la vida personal, profesional y social de sus colaboradores.</p>
        </div>
      </section>

      <img class="hero-img" src="assets/personas.webp" alt="Reunión de negocios con presentación" />

      <section class="values">
        <div class="center"><h2 class="framed-title">Valores</h2></div>
        <ul>
          <li>Integridad, entendida como el respeto a la dignidad humana y el actuar con honestidad en todo momento.</li>
          <li>Respeto hacia las personas, sus ideas y sus derechos.</li>
          <li>Trabajo en equipo, promoviendo la colaboración entre todos los miembros de la organización.</li>
        </ul>
      </section>

      <div class="curve-cream"></div>
    </main>
  `;
}

function renderContactos() {
  return `
    <main class="contact-page">
      <div class="inner">
        <div class="center"><h1 class="framed-title">Ubicación y alcance</h1></div>
        <ul class="contact-list">
          <li>Opera principalmente en <strong>Guatemala</strong>. Su alcance ha crecido a nivel regional, convirtiéndose en una organización reconocida dentro de Latinoamérica por su enfoque en la prevención de riesgos humanos y la mejora de procesos empresariales.</li>
          <li><strong>Dirección:</strong> 7 Avenida 12-23 Zona 9, Plaza España, Edificio Etisa, 7o. Nivel Ala Norte, Ciudad de Guatemala.</li>
          <li class="indent">Para mayor información comunicarse a:
            hireconnectgt@gmail.com
          </li>
        </ul>

        <div style="margin-top:4rem">
          <h2 style="font-size:1.875rem;font-weight:800;margin-bottom:1.5rem">Enlaces</h2>
          <div class="links-grid">

            <!-- 🔵 YA NO ES UN ENLACE, SOLO DECORATIVO -->
            <div class="link-card">
              <div class="ttl">Correo electrónico</div>
              <div class="sub">hireconnectgt@gmail.com</div>
            </div>

            <!-- 🔵 TAMBIÉN DECORATIVO -->
            <div class="link-card">
              <div class="ttl">Cómo llegar</div>
              <div class="sub">Plaza España, Zona 9 — Ciudad de Guatemala</div>
            </div>

          </div>
        </div>
      </div>

      <div style="margin-top:6rem">
        <a class="rh-banner" href="#/recursos-humanos">
          <h3>Recursos Humanos →</h3>
        </a>
        <div class="lavender-strip"></div>
      </div>
    </main>
  `;
}


function renderRecursosHumanos() {
  const servicios = [
    ["Reclutamiento y selección de personal", "Proceso estructurado para identificar candidatos adecuados según el perfil requerido."],
    ["Pruebas de polígrafo", "Evaluación que permite detectar posibles inconsistencias en la información proporcionada por una persona."],
    ["Tecnologías especializadas", "Herramientas modernas utilizadas para el análisis de veracidad."],
    ["Estudios socioeconómicos", "Investigación del entorno social y económico de los candidatos."],
    ["Evaluaciones psicométricas", "Análisis de habilidades, personalidad y aptitudes."],
    ["Certificación de proveedores y clientes", "Verificación de confiabilidad en relaciones comerciales."],
    ["Evaluación del clima laboral", "Análisis del ambiente de trabajo dentro de la organización."],
    ["Capacitaciones empresariales", "Formación del personal en temas clave para mejorar el desempeño."],
    ["Sistemas de control de acceso", "Uso de tecnología como relojes biométricos para el control del personal."],
  ];
  return `
    <main class="contact-page">
      <div class="inner">
        <div class="center"><h1 class="framed-title">Descripción de servicios</h1></div>
        <ul class="servicios-list">
          ${servicios.map(([t,d]) => `<li><strong>${t}:</strong> ${d}</li>`).join("")}
        </ul>
      </div>
      <div class="curve-cream" style="margin-top:6rem"></div>
    </main>
  `;
}

function renderNotFound() {
  return `
    <main class="notfound">
      <div>
        <h1>404</h1>
        <p style="margin:1rem 0 1.5rem">Página no encontrada</p>
        <a class="btn-lavender" href="#/">Inicio</a>
      </div>
    </main>
  `;
}

function render() {
  const path = currentPath();
  const view = (routes[path] || renderNotFound)();
  document.getElementById("app").innerHTML = renderNav() + view;
  window.scrollTo({ top: 0, behavior: "instant" });
  document.title = {
    "/": "Hire Connect — Portada",
    "/quien-somos": "Quien somos — Hire Connect",
    "/metas": "Metas — Hire Connect",
    "/contactos": "Contactos — Hire Connect",
    "/recursos-humanos": "Recursos Humanos — Hire Connect",
  }[path] || "Hire Connect";
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
