// ================= SECÇÃO: INÍCIO =================
// Este ficheiro insere o HTML da secção "Início": o carrossel de
// imagens com o título principal sobreposto, uma franja de destaques,
// uma pré-visualização de "O Colégio" (com os níveis de ensino) e uma
// pré-visualização de "Vida no Fermas" (com fotografias). Depois liga
// o carrossel e preenche as duas grelhas dinâmicas.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= INÍCIO ================= -->
  <section class="view" data-view="inicio">
    <div class="hero-carousel" id="hero-carousel">
      <div class="carousel-track" id="carousel-track"></div>
      <div class="hero-overlay">
        <span class="hero-eyebrow">Colégio Fermas</span>
        <h1>Da iniciação à 12.ª classe, um percurso construído com cuidado.</h1>
        <p>O Colégio Fermas acompanha os alunos desde os primeiros passos na iniciação até à conclusão do ensino secundário, com um ensino próximo, disciplinado e atento a cada criança e jovem.</p>
        <div class="hero-actions">
          <a href="#sobre" class="btn btn-primary">Conheça o Fermas</a>
          <a href="#matricula" class="btn btn-enroll">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="3.4"/>
              <path d="M5 20c0-3.8 3.1-6.5 7-6.5s7 2.7 7 6.5"/>
            </svg>
            Quero Matricular
          </a>
        </div>
      </div>
      <button class="carousel-arrow prev" onclick="carouselPrev()" aria-label="Imagem anterior">&#8249;</button>
      <button class="carousel-arrow next" onclick="carouselNext()" aria-label="Imagem seguinte">&#8250;</button>
      <div class="carousel-dots" id="carousel-dots"></div>
    </div>

    <div class="features-strip">
      <div class="feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3 2 8l10 5 10-5-10-5z"/>
          <path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/>
        </svg>
        <div>
          <h4>Formação Integral</h4>
          <p>Conhecimento, valores e competências para a vida.</p>
        </div>
      </div>
      <div class="feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="8" r="3.2"/>
          <path d="M3.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2"/>
          <circle cx="17" cy="8.5" r="2.6"/>
          <path d="M14.7 19c.2-2.2 1.8-4 3.8-4.6"/>
        </svg>
        <div>
          <h4>Acompanhamento Próximo</h4>
          <p>Uma relação próxima entre alunos, professores e famílias.</p>
        </div>
      </div>
      <div class="feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
          <path d="M12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2z"/>
        </svg>
        <div>
          <h4>Actividades Diversificadas</h4>
          <p>Desporto, artes, cultura e muito mais.</p>
        </div>
      </div>
      <div class="feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        <div>
          <h4>Preparação para o Futuro</h4>
          <p>Autonomia, responsabilidade e novas oportunidades.</p>
        </div>
      </div>
    </div>

    <div class="colegio-preview">
      <div class="colegio-preview-media">
        <img src="Imagens/fondo_fermas.png" alt="Campus do Colégio Fermas, no Lar do Patriota, Talatona">
      </div>
      <div class="colegio-preview-text">
        <span class="eyebrow">O Colégio</span>
        <h2>Presente em cada etapa do percurso do aluno.</h2>
        <p>O Colégio Fermas iniciou a sua actividade lectiva a 6 de Fevereiro de 2015, no Lar do Patriota, Talatona. Acreditamos que aprender é também crescer como pessoa — por isso unimos rigor académico e acompanhamento próximo, num ambiente seguro e acolhedor.</p>
        <a href="#sobre" class="btn btn-primary">Sobre o Fermas</a>
      </div>
    </div>

    <div class="niveis-preview-band">
      <h3>Níveis de Ensino</h3>
      <div class="niveis-mini-grid" id="niveis-mini-grid"></div>
      <a href="#oferecemos" class="link-more">Ver todos os níveis &#8250;</a>
    </div>

    <div class="diferenca-preview">
      <div class="section-head">
        <span class="eyebrow"></span>
        <h2>Seis palavras que resumem o que somos.</h2>
      </div>
      <div class="acrostic-icons">
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
          </svg>
          <h4><span class="big-letter">F</span>azer</h4>
          <p>Aprender fazendo, na prática do dia a dia.</p>
        </div>
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 6.5C10 5 6.5 4.5 4 5v13c2.5-.5 6 0 8 1.5 2-1.5 5.5-2 8-1.5V5c-2.5-.5-6 0-8 1.5z"/>
            <path d="M12 6.5V20"/>
          </svg>
          <h4><span class="big-letter">E</span>nsinar</h4>
          <p>Um ensino próximo, rigoroso e atento a cada aluno.</p>
        </div>
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2h5c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/>
          </svg>
          <h4><span class="big-letter">R</span>efletir</h4>
          <p>Espaço para pensar, questionar e compreender.</p>
        </div>
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 17l6-6 4 4 8-8"/>
            <path d="M15 6h6v6"/>
          </svg>
          <h4><span class="big-letter">M</span>elhorar</h4>
          <p>Procurar, todos os dias, ser um pouco melhor.</p>
        </div>
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3 2 8l10 5 10-5-10-5z"/>
            <path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/>
          </svg>
          <h4><span class="big-letter">A</span>prender</h4>
          <p>Uma curiosidade que acompanha os alunos para a vida.</p>
        </div>
        <div class="acrostic-icon-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21s-7-4.5-9.5-9C1 8 2.5 4 6.5 4c2 0 3.5 1.2 4.5 2.8C12 5.2 13.5 4 15.5 4 19.5 4 21 8 21 12c-2.5 4.5-9.5 9-9.5 9z"/>
          </svg>
          <h4><span class="big-letter">S</span>er</h4>
          <p>Formar pessoas, não só alunos.</p>
        </div>
      </div>
    </div>

    <div class="vida-preview">
      <div class="vida-preview-text">
        <span class="eyebrow">Vida no Fermas</span>
        <h2>Mais do que aulas, experiências que marcam.</h2>
        <p>No Fermas, os alunos participam em actividades culturais, desportivas, visitas de estudo e muitos outros momentos que enriquecem o seu percurso.</p>
        <a href="#vida" class="btn btn-secondary">Ver todas as actividades</a>
      </div>
      <div class="vida-preview-grid" id="vida-preview-grid"></div>
    </div>

    <div class="quote-block">
      <p>"Educação é a melhor arma que se pode usar para mudar o mundo."</p>
      <cite>— Nelson Mandela</cite>
    </div>
  </section>
`);

// ---------- Carrossel do Início ----------
// Substitua "img" pelo caminho real de cada fotografia (ex: "Imagens/hero-2.jpg").
const heroSlides = [
  { img: "Imagens/fondo_fermas.png", legenda: "O nosso campus, no Lar do Patriota, Talatona." },
  { img: "Imagens/Fermas_fondo2.png", legenda: "Formatura dos alunos de iniciação." },
  { img: "Imagens/fondo_fermas.png", legenda: "Espaços desportivos para o desenvolvimento físico." },
  { img: "Imagens/Fermas_fondo2.png", legenda: "Laboratórios equipados para a aprendizagem prática." }
];

const trackEl = document.getElementById('carousel-track');
const dotsEl = document.getElementById('carousel-dots');
let slideIndex = 0;
let carouselTimer = null;

heroSlides.forEach((s, i) => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  slide.innerHTML = `<img src="${s.img}" alt="${s.legenda}">`;
  trackEl.appendChild(slide);

  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', 'Ir para a imagem ' + (i + 1));
  dot.onclick = () => goToSlide(i);
  dotsEl.appendChild(dot);
});

function updateCarousel(){
  trackEl.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('.carousel-dots .dot').forEach((d, i) => {
    d.classList.toggle('active', i === slideIndex);
  });
}
function goToSlide(i){
  slideIndex = (i + heroSlides.length) % heroSlides.length;
  updateCarousel();
  restartAutoplay();
}
function carouselNext(){ goToSlide(slideIndex + 1); }
function carouselPrev(){ goToSlide(slideIndex - 1); }
function restartAutoplay(){
  clearInterval(carouselTimer);
  carouselTimer = setInterval(carouselNext, 6000);
}
const carouselEl = document.getElementById('hero-carousel');
carouselEl.addEventListener('mouseenter', () => clearInterval(carouselTimer));
carouselEl.addEventListener('mouseleave', restartAutoplay);
restartAutoplay();

// ---------- Mini-grelha dos Níveis de Ensino ----------
// Versão resumida dos níveis (a lista completa, com textos, está em
// secciones/oferecemos.js — este ficheiro carrega antes, por isso
// mantém aqui a sua própria cópia leve, só com id, nome e ícone).
const niveisMini = [
  {
    id: "iniciacao", nome: "Iniciação",
    icon: `<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="10.5" r="1" fill="currentColor" stroke="none"/><path d="M8.7 15c1.3 1.2 5.3 1.2 6.6 0"/>`
  },
  {
    id: "primario", nome: "Ensino Primário",
    icon: `<path d="M3 5.5c3-1.3 6-1.3 9 0v13c-3-1.3-6-1.3-9 0v-13z"/><path d="M21 5.5c-3-1.3-6-1.3-9 0v13c3-1.3 6-1.3 9 0v-13z"/>`
  },
  {
    id: "iciclo", nome: "I Ciclo",
    icon: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>`
  },
  {
    id: "iiciclo", nome: "II Ciclo",
    icon: `<path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/>`
  },
  {
    id: "externato", nome: "Externato",
    icon: `<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5l3.2 2"/>`
  }
];

const niveisMiniGridEl = document.getElementById('niveis-mini-grid');
niveisMini.forEach(n => {
  const card = document.createElement('a');
  card.href = '#nivel-' + n.id;
  card.className = 'nivel-mini-card';
  card.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${n.icon}</svg>
    <span>${n.nome}</span>
  `;
  niveisMiniGridEl.appendChild(card);
});

// ---------- Mini-galeria de "Vida no Fermas" ----------
// Amostra de 4 actividades (a galeria completa, com filtros, está em
// secciones/vida.js). Substitua "foto" pelo caminho real de cada
// fotografia.
const vidaPreviewItens = [
  { titulo: "Torneio interturmas de futebol", categoria: "Desporto", foto: "Imagens/fondo_fermas.png" },
  { titulo: "Apresentação de dança", categoria: "Artes e Música", foto: "Imagens/Fermas_fondo2.png" },
  { titulo: "Visita de estudo ao Museu Nacional de Antropologia", categoria: "Visitas de Estudo", foto: "Imagens/fondo_fermas.png" },
  { titulo: "Festa de encerramento do ano lectivo", categoria: "Festas e Celebrações", foto: "Imagens/Fermas_fondo2.png" }
];

const vidaPreviewGridEl = document.getElementById('vida-preview-grid');
vidaPreviewItens.forEach(a => {
  const card = document.createElement('div');
  card.className = 'vida-card';
  card.innerHTML = `
    <div class="vida-photo">
      <img src="${a.foto}" alt="${a.titulo}">
    </div>
    <div class="vida-caption">
      <span class="vida-tag">${a.categoria}</span>
      <h4>${a.titulo}</h4>
    </div>
  `;
  vidaPreviewGridEl.appendChild(card);
});
