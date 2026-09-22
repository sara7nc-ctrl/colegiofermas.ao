// ================= SECÇÃO: VIDA FERMAS =================
// Este ficheiro insere o HTML da secção "Vida Fermas": uma galeria de
// fotografias das actividades do colégio, organizadas por categoria,
// com filtros para o utilizador escolher o que quer ver.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= VIDA FERMAS ================= -->
  <section class="view" data-view="vida">
    <div class="section-head">
      <h2>Vida Fermas</h2>
      <p>Um olhar sobre os momentos, actividades e celebrações que fazem parte do dia a dia do colégio. Escolha uma categoria para ver essas fotografias.</p>
    </div>

    <div class="day-tabs" id="vida-filtros"></div>
    <div class="vida-grid" id="vida-grid"></div>
  </section>
`);

const vidaIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon-dark)" stroke-width="1.2">
    <rect x="3" y="5" width="18" height="14" rx="1.5"/>
    <circle cx="9" cy="10.5" r="1.8"/>
    <path d="M4 18l5-5 4 4 3-3 4 4" stroke-linejoin="round"/>
  </svg>`;

// ---------- Dados das actividades ----------
// Substitua "foto" pelo caminho real de cada fotografia
// (ex: "Imagens/vida/torneio-futebol.jpg") e ajuste títulos e categorias
// conforme as fotografias e eventos reais do colégio.
const categoriasVida = ["Todas", "Sala de Aula", "Desporto", "Artes e Música", "Visitas de Estudo", "Festas e Celebrações"];

const atividades = [
  { titulo: "Aula prática de Ciências", categoria: "Sala de Aula", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Leitura e escrita na Iniciação", categoria: "Sala de Aula", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Feira do livro", categoria: "Sala de Aula", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Torneio interturmas de futebol", categoria: "Desporto", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Aula de Educação Física", categoria: "Desporto", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Torneio de basquetebol", categoria: "Desporto", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Apresentação de dança", categoria: "Artes e Música", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Aula de música e instrumentos", categoria: "Artes e Música", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Visita de estudo ao Museu Nacional de Antropologia", categoria: "Visitas de Estudo", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Visita de estudo a uma exposição científica", categoria: "Visitas de Estudo", foto: "Imagens/vida/placeholder.png" },
  { titulo: "Festa de encerramento do ano lectivo", categoria: "Festas e Celebrações", foto: "Imagens/mossas-grad.jpeg" },
  { titulo: "Comemoração do Dia da Criança", categoria: "Festas e Celebrações", foto: "Imagens/vida/placeholder.png" }
];

const vidaFiltrosEl = document.getElementById('vida-filtros');
const vidaGridEl = document.getElementById('vida-grid');

categoriasVida.forEach((cat, i) => {
  const tab = document.createElement('button');
  tab.className = 'day-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = cat;
  tab.dataset.categoria = cat;
  tab.onclick = () => filtrarVida(cat);
  vidaFiltrosEl.appendChild(tab);
});

atividades.forEach(a => {
  const card = document.createElement('div');
  card.className = 'vida-card';
  card.dataset.categoria = a.categoria;
  card.innerHTML = `
    <div class="photo-placeholder">
      ${vidaIconSvg}
      <p class="ph-label">Fotografia — ${a.titulo}</p>
    </div>
    <div class="vida-caption">
      <span class="vida-tag">${a.categoria}</span>
      <h4>${a.titulo}</h4>
    </div>
  `;
  vidaGridEl.appendChild(card);
});

function filtrarVida(categoria){
  document.querySelectorAll('#vida-filtros .day-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.categoria === categoria);
  });
  document.querySelectorAll('#vida-grid .vida-card').forEach(card => {
    const mostrar = categoria === 'Todas' || card.dataset.categoria === categoria;
    card.style.display = mostrar ? '' : 'none';
  });
}
