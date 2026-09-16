// ================= SECÇÃO: O QUE OFERECEMOS =================
// Este ficheiro insere o HTML da secção "O Que Oferecemos" (projecto
// educativo, "Um Dia no Fermas", instalações e percurso académico),
// incluindo a página de detalhe de cada nível de ensino. Contém os
// dados dos níveis de ensino (niveis), dos horários por nível
// (horarios) e das instalações (instalacoes), além da função que
// constrói a página de detalhe de um nível (renderNivel), usada pelo
// router em js/script.js.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= O QUE OFERECEMOS ================= -->
  <section class="view" data-view="oferecemos">
    <div class="section-head">
      <h2>O Que Oferecemos</h2>
      <p>O Complexo escolar privado Fermas desenvolve, em todos os níveis de ensino,
          um Projecto Pedagógico global, integrado e orientado para a excelência, alinhado
          com as orientações e os objectivos gerais definidos pelo Ministério da Educação,
          sem deixar de responder às necessidades e aos desafios da realidade angolana.</p>
      <p>O nosso projecto educativo assenta num acompanhamento próximo de cada aluno, em
          cada etapa do seu percurso — da Iniciação ao II Ciclo do Ensino Secundário —
          conjugando rigor académico, disciplina e o desenvolvimento de valores humanos,
          preparando os alunos tanto para os desafios académicos como para a vida em
          sociedade.</p>
    </div>

    <div class="day-block">
      <h3>Um Dia no Fermas</h3>
      <p>Assim é, em traços gerais, o dia de um aluno em cada etapa do percurso escolar. Toque numa etapa para ver o horário.</p>
      <div class="day-tabs" id="day-tabs"></div>
      <div class="day-timeline" id="day-timeline"></div>
    </div>

    <div class="facilities-block">
      <h3>As Nossas Instalações</h3>
      <div class="facility-cards" id="facility-cards"></div>
    </div>

    <div class="section-head">
      <h3>Percurso Académico</h3>
      <p>Toque num nível para conhecer melhor o que oferecemos nessa etapa.</p>
    </div>

    <div class="level-list" id="level-list"></div>
  </section>

  <!-- ================= DETALHE DE NÍVEL (gerado por JS) ================= -->
  <section class="view" data-view="nivel">
    <a href="#oferecemos" class="back-link">&larr; Voltar a O Que Oferecemos</a>
    <div class="level-detail-head">
      <span class="level-tag" id="nivel-tag"></span>
      <h2 id="nivel-titulo"></h2>
    </div>
    <div class="level-detail-text" id="nivel-texto"></div>
    <div class="gallery" id="nivel-galeria"></div>
  </section>
`);

// ---------- Dados dos níveis ----------
const niveis = [
  {
    id: "iniciacao",
    numero: "01",
    nome: "Iniciação",
    resumo: "Os primeiros passos escolares, entre o brincar e o aprender.",
    tag: "Educação Pré-Escolar",
    texto: [
      "A Iniciação é o primeiro contacto da criança com o ambiente escolar. Aqui, o brincar tem um papel central: é através dele que a criança desenvolve a linguagem, a coordenação e a convivência com os colegas.",
      "As turmas são pequenas e o acompanhamento é próximo, para que cada criança se sinta segura a explorar, perguntar e experimentar."
    ]
  },
  {
    id: "primario",
    numero: "02",
    nome: "Ensino Primário",
    resumo: "Da 1ª à 6ª classe — as bases da leitura, escrita e matemática.",
    tag: "1ª à 6ª Classe",
    texto: [
      "No Ensino Primário, os alunos consolidam a leitura, a escrita e o cálculo, ao mesmo tempo que descobrem as ciências, a história e a geografia.",
      "É também nesta fase que se formam hábitos de estudo e responsabilidade, com o apoio próximo dos professores e da família."
    ]
  },
  {
    id: "iciclo",
    numero: "03",
    nome: "I Ciclo do Ensino Secundário",
    resumo: "Da 7ª à 9ª classe — aprofundamento e orientação.",
    tag: "7ª à 9ª Classe",
    texto: [
      "O I Ciclo aprofunda as disciplinas fundamentais e introduz um estudo mais exigente, preparando os alunos para as escolhas do ciclo seguinte.",
      "Ao longo destes três anos, o colégio acompanha também a orientação vocacional dos alunos, ajudando-os a reconhecer os seus interesses e talentos."
    ]
  },
  {
    id: "iiciclo",
    numero: "04",
    nome: "II Ciclo do Ensino Secundário",
    resumo: "Da 10ª à 12ª classe — o percurso final até ao ensino superior.",
    tag: "10ª à 12ª Classe",
    texto: [
      "O II Ciclo prepara os alunos para o ingresso no ensino superior ou no mercado de trabalho, com um estudo mais aprofundado e exigente.",
      "Os alunos concluem o percurso escolar no Colégio Fermas prontos para os desafios seguintes, com uma base sólida construída desde a Iniciação."
    ]
  },
  {
    id: "externato",
    numero: "05",
    nome: "Externato",
    resumo: "Apoio ao estudo e acompanhamento para além do horário lectivo.",
    tag: "Regime de Externato",
    texto: [
      "O Externato é um serviço complementar para os alunos que permanecem no colégio para além do horário normal de aulas, com apoio ao estudo, realização de trabalhos de casa e acompanhamento próximo.",
      "É uma opção pensada para as famílias que precisam de mais flexibilidade no horário, sem abdicar da qualidade do acompanhamento educativo."
    ]
  }
];

// ---------- Dados de "Um Dia no Fermas" ----------
// Um horário-tipo por nível. Substitua os horários e as descrições
// pelos horários reais de cada etapa.
const horarios = {
  iniciacao: [
    { hora: "07:30", titulo: "Acolhimento", desc: "Chegada das crianças e momento de acolhimento com a educadora." },
    { hora: "08:00", titulo: "Rotina e higiene", desc: "Hábitos de autonomia, casa de banho e pequeno lanche." },
    { hora: "08:30", titulo: "Atividades pedagógicas", desc: "Exploração sensorial, motricidade fina e primeiras noções de linguagem e números." },
    { hora: "10:00", titulo: "Recreio", desc: "Brincadeira livre e socialização no espaço exterior." },
    { hora: "10:30", titulo: "Música, arte e histórias", desc: "Atividades de expressão plástica, musical e contação de histórias." },
    { hora: "11:30", titulo: "Saída", desc: "Preparação e entrega das crianças aos encarregados de educação." }
  ],
  primario: [
    { hora: "07:00", titulo: "Entrada", desc: "Chegada dos alunos e formatura antes do início das aulas." },
    { hora: "07:15", titulo: "1ª e 2ª aulas", desc: "Língua Portuguesa e Matemática, as disciplinas nucleares da manhã." },
    { hora: "09:00", titulo: "Intervalo", desc: "Lanche e recreio no pátio do colégio." },
    { hora: "09:30", titulo: "3ª e 4ª aulas", desc: "Estudo do Meio, Educação Física ou outras disciplinas do currículo." },
    { hora: "11:15", titulo: "Almoço", desc: "Refeição no refeitório, sob supervisão dos professores." },
    { hora: "12:15", titulo: "Saída / Externato", desc: "Saída dos alunos ou continuidade no Externato para apoio ao estudo." }
  ],
  iciclo: [
    { hora: "07:00", titulo: "Entrada", desc: "Chegada dos alunos e início das aulas do I Ciclo." },
    { hora: "07:15", titulo: "Bloco de aulas (manhã)", desc: "Disciplinas nucleares como Matemática, Português, Física e Química." },
    { hora: "09:30", titulo: "Intervalo", desc: "Pausa para lanche e convívio entre turmas." },
    { hora: "09:50", titulo: "Bloco de aulas (manhã)", desc: "Continuação do currículo, incluindo disciplinas de línguas e ciências." },
    { hora: "12:00", titulo: "Almoço", desc: "Refeição no refeitório." },
    { hora: "13:00", titulo: "Saída / Actividades extracurriculares", desc: "Saída dos alunos ou participação em clubes e desporto escolar." }
  ],
  iiciclo: [
    { hora: "07:00", titulo: "Entrada", desc: "Chegada dos alunos e início das aulas do II Ciclo." },
    { hora: "07:15", titulo: "Bloco de aulas (manhã)", desc: "Disciplinas de aprofundamento, com foco na preparação para o ensino superior." },
    { hora: "09:30", titulo: "Intervalo", desc: "Pausa para lanche e convívio." },
    { hora: "09:50", titulo: "Bloco de aulas (manhã)", desc: "Continuação das disciplinas do currículo do II Ciclo." },
    { hora: "12:00", titulo: "Almoço", desc: "Refeição no refeitório." },
    { hora: "13:00", titulo: "Orientação vocacional / Saída", desc: "Sessões de apoio à escolha do percurso pós-secundário ou saída dos alunos." }
  ],
  externato: [
    { hora: "12:15", titulo: "Acolhimento", desc: "Chegada dos alunos ao Externato após o horário lectivo normal." },
    { hora: "12:30", titulo: "Almoço", desc: "Refeição servida no refeitório do colégio." },
    { hora: "13:30", titulo: "Apoio ao estudo", desc: "Realização de trabalhos de casa com acompanhamento próximo." },
    { hora: "15:00", titulo: "Lanche", desc: "Pausa para lanche da tarde." },
    { hora: "15:30", titulo: "Actividades complementares", desc: "Leitura, jogos pedagógicos ou reforço em disciplinas específicas." },
    { hora: "17:00", titulo: "Saída", desc: "Entrega dos alunos aos encarregados de educação." }
  ]
};

// ---------- Construção das abas e da linha do tempo ----------
const dayTabsEl = document.getElementById('day-tabs');
const dayTimelineEl = document.getElementById('day-timeline');

niveis.forEach((n, i) => {
  const tab = document.createElement('button');
  tab.className = 'day-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = n.nome;
  tab.onclick = () => renderDay(n.id);
  tab.dataset.nivel = n.id;
  dayTabsEl.appendChild(tab);
});

function renderDay(nivelId){
  const items = horarios[nivelId];
  if(!items) return;

  document.querySelectorAll('.day-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.nivel === nivelId);
  });

  dayTimelineEl.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-time">${item.hora}</div>
      <div class="timeline-rail"><div class="timeline-dot"></div></div>
      <div class="timeline-content">
        <h4>${item.titulo}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

renderDay(niveis[0].id);

// ---------- Dados das Instalações ----------
// Substitua "foto" pelo caminho real de cada fotografia.
const instalacoes = [
  { nome:"Cantina", foto:"Imagens/instalacoes/placeholder.png", desc:"Espaço equipado para as refeições diárias dos alunos." },
  { nome:"Cozinhas", foto:"Imagens/instalacoes/placeholder.png", desc:"Duas cozinhas preparadas para a confecção das refeições." },
  { nome:"Refeitórios", foto:"Imagens/instalacoes/placeholder.png", desc:"Dois refeitórios amplos e confortáveis." },
  { nome:"Papelaria", foto:"Imagens/instalacoes/placeholder.png", desc:"Material escolar disponível dentro do colégio." },
  { nome:"Piscinas", foto:"Imagens/instalacoes/placeholder.png", desc:"Duas piscinas — uma para as crianças e outra para os adultos." },
  { nome:"Música e Dança", foto:"Imagens/instalacoes/placeholder.png", desc:"Salas dedicadas às artes performativas." },
  { nome:"Campos Desportivos", foto:"Imagens/instalacoes/placeholder.png", desc:"Três campos para a prática de diferentes desportos." },
  { nome:"Anfiteatro", foto:"Imagens/instalacoes/placeholder.png", desc:"Espaço para eventos, apresentações e celebrações." },
  { nome:"Laboratórios", foto:"Imagens/instalacoes/placeholder.png", desc:"Laboratórios de química, física e biologia." },
  { nome:"Informática e Artes", foto:"Imagens/instalacoes/placeholder.png", desc:"Salas equipadas para tecnologia e expressão artística." },
  { nome:"Biblioteca", foto:"Imagens/instalacoes/placeholder.png", desc:"Um espaço de leitura e pesquisa para os alunos." }
];

const facilityCardsEl = document.getElementById('facility-cards');
instalacoes.forEach(f => {
  const card = document.createElement('div');
  card.className = 'facility-card';
  card.innerHTML = `
    <div class="facility-photo"><img src="${f.foto}" alt="${f.nome}"></div>
    <div class="facility-info">
      <h4>${f.nome}</h4>
      <p>${f.desc}</p>
    </div>
  `;
  facilityCardsEl.appendChild(card);
});

// ---------- Construção da lista de níveis ----------
const levelListEl = document.getElementById('level-list');
niveis.forEach(n => {
  const row = document.createElement('button');
  row.className = 'level-row';
  row.onclick = () => { window.location.hash = '#nivel-' + n.id; };
  row.innerHTML = `
    <span class="level-num">${n.numero}</span>
    <span class="level-body">
      <h3>${n.nome}</h3>
      <p>${n.resumo}</p>
    </span>
    <span class="level-arrow">&#8250;</span>
  `;
  levelListEl.appendChild(row);
});

const iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon-dark)" stroke-width="1.2">
    <rect x="3" y="5" width="18" height="14" rx="1.5"/>
    <circle cx="9" cy="10.5" r="1.8"/>
    <path d="M4 18l5-5 4 4 3-3 4 4" stroke-linejoin="round"/>
  </svg>`;

function renderNivel(id){
  const n = niveis.find(x => x.id === id);
  if(!n) return false;
  document.getElementById('nivel-tag').textContent = n.tag;
  document.getElementById('nivel-titulo').textContent = n.nome;
  document.getElementById('nivel-texto').innerHTML = n.texto.map(p => `<p>${p}</p>`).join('');
  const gal = document.getElementById('nivel-galeria');
  gal.innerHTML = '';
  for(let i=0;i<3;i++){
    const ph = document.createElement('div');
    ph.className = 'photo-placeholder';
    ph.innerHTML = iconSvg + `<p class="ph-label">Fotografia — ${n.nome}</p>`;
    gal.appendChild(ph);
  }
  return true;
}
