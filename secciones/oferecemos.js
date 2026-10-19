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

    <div class="day-block" id="dia">
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

    <div class="cta-banner">
      <div>
        <h3>Pronto para dar o próximo passo?</h3>
        <p>Conheça os requisitos e o processo de matrícula para o nível que procura.</p>
      </div>
      <a href="#matricula" class="btn btn-enroll">Quero Matricular</a>
    </div>
  </section>

  <!-- ================= DETALHE DE NÍVEL (gerado por JS) ================= -->
  <section class="view" data-view="nivel">
    <a href="#oferecemos" class="back-link">&larr; Voltar a O Que Oferecemos</a>
    <div class="level-detail-head">
      <span class="level-tag" id="nivel-tag"></span>
      <h2 id="nivel-titulo"></h2>
    </div>
    <div class="level-top" id="nivel-topo">
      <div class="level-detail-text" id="nivel-texto"></div>
      <div class="gallery" id="nivel-galeria"></div>
    </div>

    <!-- Informação extra de cada nível (o Externato usa este espaço) -->
    <div id="nivel-blocos"></div>
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
    titulo: "Externato FERMAS",
    resumo: "Apoio ao estudo e acompanhamento para além do horário lectivo.",
    tag: "Regime de Externato",
    texto: [
      '<strong class="nivel-lead">Aprender, crescer e descobrir o próprio potencial!</strong>',
      "Um ambiente educativo que combina aprendizagem, acompanhamento e actividades complementares para promover o desenvolvimento integral dos nossos alunos."
    ]
  }
];


// ---------- Externato: fotografias e blocos de informação ----------
// Aparecem na página do nível "Externato" (#nivel-externato), por baixo
// do texto de apresentação. Edite aqui os textos.

// ---------- Conteúdo de cada nível (por baixo da galeria) ----------
// Edite aqui os textos, os benefícios, o plano de estudos e as fotografias.
// "fotos": acrescente ou apague linhas (ex: "Imagens/primario-1.jpg").
const fotosPadrao = [
  "Imagens/fondo_fermas.png", "Imagens/Fermas_fondo2.png", "Imagens/fondo_fermas.png",
  "Imagens/Fermas_fondo2.png", "Imagens/fondo_fermas.png", "Imagens/Fermas_fondo2.png"
];
const beneficiosPadrao = [
  ["Ensino de qualidade", "Aprendizagem centrada no aluno e nas suas necessidades."],
  ["Tecnologia e inovação", "Recursos que estimulam a pesquisa e a descoberta."],
  ["Actividades complementares", "Desporto, cultura, arte e projectos educativos."],
  ["Valores e cidadania", "Respeito, inclusão, solidariedade e responsabilidade."]
];
const metodologiaPadrao = ["No FERMAS, o aluno participa activamente no processo de aprendizagem. Através de actividades práticas, investigação, trabalho em equipa e acompanhamento pedagógico, incentivamos o pensamento crítico, a resolução de problemas e a capacidade de aprender com autonomia."];
const formacaoPadrao = [
  "Queremos formar alunos capazes de comunicar, pensar de forma crítica, utilizar a tecnologia com responsabilidade, respeitar as diferenças e contribuir positivamente para a sociedade.",
  "A nossa educação valoriza tanto os conhecimentos académicos como o bem-estar, as relações humanas e os hábitos de vida saudáveis."
];
const familiaPadrao = ["Acreditamos que o sucesso educativo se constrói em conjunto. Valorizamos o diálogo e a colaboração com os encarregados de educação, acompanhando o percurso escolar dos alunos com responsabilidade e compromisso."];

const conteudoNiveis = {
  iniciacao: {
    nome: "Iniciação", oqueEyebrow: "A Iniciação", oqueTitulo: "O que é a Iniciação?",
    oque: ["No Colégio FERMAS, a Iniciação acontece num espaço seguro, acolhedor e cheio de descobertas, pensado para o ritmo de cada criança.", "Através do brincar, da música, da arte e das histórias, desenvolvemos a linguagem, a motricidade, a autonomia e a confiança em si próprias."],
    fotosTitulo: "O dia a dia na Iniciação", beneficiosTitulo: "O que o seu educando encontra na Iniciação?",
    metodologiaTitulo: "Aprender a brincar, brincar para aprender",
    planoTitulo: "As áreas que exploramos",
    plano: ["Linguagem e comunicação", "Descoberta de números e formas", "Expressão plástica e musical", "Motricidade e educação física", "Formação pessoal e social"],
    fecho: "Conheça a Iniciação do Colégio FERMAS e os primeiros passos do seu educando."
  },
  primario: {
    nome: "Ensino Primário", oqueEyebrow: "O Ensino Primário", oqueTitulo: "O que é o Ensino Primário?",
    oque: ["O Ensino Primário do Colégio FERMAS articula o currículo com actividades complementares, promovendo o sucesso académico e o crescimento pessoal e social dos alunos.", "A nossa proposta valoriza a curiosidade, a criatividade, a responsabilidade e o respeito pelo ritmo de aprendizagem de cada aluno."],
    fotosTitulo: "O dia a dia no Ensino Primário", beneficiosTitulo: "O que o seu educando encontra no Ensino Primário?",
    metodologiaTitulo: "Aprender fazendo, crescer com confiança",
    planoTitulo: "Disciplinas do Ensino Primário",
    plano: ["Língua Portuguesa", "Matemática", "Estudo do Meio", "Educação Moral e Cívica", "Educação Visual e Plástica", "Educação Física", "Inglês"],
    fecho: "Conheça o Ensino Primário do Colégio FERMAS e as oportunidades que temos para o seu educando."
  },
  iciclo: {
    nome: "I Ciclo do Ensino Secundário", oqueEyebrow: "O I Ciclo", oqueTitulo: "O que é o I Ciclo do Ensino Secundário?",
    oque: ["No I Ciclo, os alunos ganham autonomia, aprendem a organizar o estudo e desenvolvem o pensamento crítico, num ambiente de exigência e acompanhamento.", "Projectos, trabalhos em grupo e actividades extracurriculares ajudam-nos a descobrir interesses e talentos."],
    fotosTitulo: "O dia a dia no I Ciclo", beneficiosTitulo: "O que o seu educando encontra no I Ciclo?",
    metodologiaTitulo: "Pensar, investigar e participar",
    planoTitulo: "Disciplinas do I Ciclo",
    plano: ["Língua Portuguesa", "Matemática", "Inglês", "Física e Química", "Biologia", "História e Geografia", "Educação Física"],
    fecho: "Conheça o I Ciclo do Colégio FERMAS e prepare o futuro do seu educando."
  },
  iiciclo: {
    nome: "II Ciclo do Ensino Secundário", oqueEyebrow: "O II Ciclo", oqueTitulo: "O que é o II Ciclo do Ensino Secundário?",
    oque: ["O II Ciclo consolida os conhecimentos e desenvolve competências de investigação, comunicação e trabalho em equipa, essenciais para o futuro académico e profissional.", "Com preparação para os exames e orientação para o ensino superior, acompanhamos cada aluno até à conclusão do percurso."],
    fotosTitulo: "O dia a dia no II Ciclo", beneficiosTitulo: "O que o seu educando encontra no II Ciclo?",
    metodologiaTitulo: "Rumo ao ensino superior",
    planoTitulo: "Disciplinas do II Ciclo",
    plano: ["Língua Portuguesa", "Matemática", "Inglês", "Física", "Química", "Biologia", "História e Geografia", "Filosofia"],
    fecho: "Conheça o II Ciclo do Colégio FERMAS e o caminho do seu educando até ao ensino superior."
  },
  externato: {
    nome: "Externato", oqueEyebrow: "O Externato", oqueTitulo: "O que é o Externato?",
    oque: ["O Externato do Colégio FERMAS oferece uma experiência educativa que articula o currículo escolar com actividades complementares, promovendo não só o sucesso académico, mas também o crescimento pessoal e social das crianças.", "A nossa proposta valoriza a autonomia, a criatividade, a responsabilidade e o respeito pelo ritmo de aprendizagem de cada aluno."],
    fotosTitulo: "O dia a dia no Externato", beneficiosTitulo: "O que o seu educando encontra no Externato?",
    metodologiaTitulo: "Aprender fazendo, crescer com confiança",
    formacaoTitulo: "Preparados para os desafios do futuro", familiaTitulo: "Escola e família: uma parceria essencial",
    fecho: "Descubra a proposta educativa do Externato FERMAS e conheça as oportunidades que temos para o desenvolvimento do seu educando."
  }
};
// valores por omissão (o que não estiver acima usa estes)
Object.values(conteudoNiveis).forEach(c => {
  c.fotos = c.fotos || fotosPadrao;
  c.beneficios = c.beneficios || beneficiosPadrao;
  c.metodologia = c.metodologia || metodologiaPadrao;
  c.formacao = c.formacao || formacaoPadrao;
  c.familia = c.familia || familiaPadrao;
  c.formacaoTitulo = c.formacaoTitulo || "Preparados para os desafios do futuro";
  c.familiaTitulo = c.familiaTitulo || "Escola e família: uma parceria essencial";
});

const icones = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3 2 8l10 5 10-5-10-5z"/>
            <path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/>
          </svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="12" rx="2"/>
            <path d="M2 20h20M9 20l.7-4M15 20l-.7-4"/>
          </svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>
          </svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21s-7-4.5-9.5-9C1 8 2.5 4 6.5 4c2 0 3.5 1.2 4.5 2.8C12 5.2 13.5 4 15.5 4 19.5 4 21 8 21 12c-2.5 4.5-9.5 9-9.5 9z"/>
          </svg>`
];

function blocosNivel(c){
  return `
    <!-- 2 · O que é -->
    <div class="about-grid ext-oque" id="ext-oque">
      <div class="about-text">
        <span class="eyebrow">${c.oqueEyebrow}</span>
        <h3>${c.oqueTitulo}</h3>
        ${c.oque.map(t => `<p>${t}</p>`).join('')}
      </div>
    </div>

    <!-- Fotografias do Externato -->
    <div class="ext-fotos">
      <div class="section-head">
        <span class="eyebrow">Momentos</span>
        <h2>${c.fotosTitulo}</h2>
      </div>
      <div class="ext-fotos-grid">
        ${c.fotos.map((src, i) => `<div class="ext-foto"><img src="${src}" alt="${c.nome} — foto ${i+1}"></div>`).join('')}
      </div>
    </div>

    <!-- 3 · Benefícios -->
    <div class="diferenca-preview ext-beneficios">
      <div class="section-head">
        <span class="eyebrow">Benefícios</span>
        <h2>${c.beneficiosTitulo}</h2>
      </div>
      <div class="acrostic-icons">
        ${c.beneficios.map((b, i) => `<div class="acrostic-icon-item">${icones[i]}<h4>${b[0]}</h4><p>${b[1]}</p></div>`).join('')}
      </div>
    </div>

    <!-- 4 · Metodologia -->
    <div class="ext-band ext-band-sand">
      <div class="ext-split">
        <div class="ext-split-title">
          <span class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
            </svg>
          </span>
          <span class="eyebrow">Metodologia</span>
          <h3>${c.metodologiaTitulo}</h3>
        </div>
        <div class="ext-split-text">
          ${c.metodologia.map(t => `<p>${t}</p>`).join('')}
        </div>
      </div>
    </div>

    <!-- Plano de estudos (só aparece se o nível tiver "plano") -->
    ${c.plano ? `
    <div class="ext-band ext-band-white">
      <div class="ext-split">
        <div class="ext-split-title">
          <span class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6M9 11h6"/>
            </svg>
          </span>
          <span class="eyebrow">Plano de estudos</span>
          <h3>${c.planoTitulo}</h3>
        </div>
        <div class="ext-split-text">
          <ul class="ext-plano">${c.plano.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
      </div>
    </div>` : ''}

    <!-- 5 · Formação integral -->
    <div class="ext-band ext-band-white">
      <div class="ext-split">
        <div class="ext-split-title">
          <span class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 17l6-6 4 4 8-8"/>
              <path d="M15 6h6v6"/>
            </svg>
          </span>
          <span class="eyebrow">Formação integral</span>
          <h3>${c.formacaoTitulo}</h3>
        </div>
        <div class="ext-split-text">
          ${c.formacao.map(t => `<p>${t}</p>`).join('')}
        </div>
      </div>
    </div>

    <!-- 6 · Família -->
    <div class="ext-band ext-band-teal">
      <div class="ext-split">
        <div class="ext-split-title">
          <span class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="8" r="3.2"/>
              <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/>
              <circle cx="17.5" cy="9.5" r="2.5"/>
              <path d="M17 14.2c2.6.1 4.5 1.9 4.5 4.8"/>
            </svg>
          </span>
          <span class="eyebrow">Família</span>
          <h3>${c.familiaTitulo}</h3>
        </div>
        <div class="ext-split-text">
          ${c.familia.map(t => `<p>${t}</p>`).join('')}
        </div>
      </div>
    </div>

    <!-- 7 · Fecho -->
    <div class="cta-banner ext-cta">
      <div>
        <h3>O futuro do seu educando começa aqui!</h3>
        <p>${c.fecho}</p>
      </div>
      <a href="#matricula" class="btn btn-enroll">Quero Matricular</a>
    </div>
`;
}

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
  { nome:"Cantina", foto:"Imagens/fondo_fermas.png", desc:"Espaço equipado para as refeições diárias dos alunos." },
  { nome:"Cozinhas", foto:"Imagens/Fermas_fondo2.png", desc:"Duas cozinhas preparadas para a confecção das refeições." },
  { nome:"Refeitórios", foto:"Imagens/fondo_fermas.png", desc:"Dois refeitórios amplos e confortáveis." },
  { nome:"Papelaria", foto:"Imagens/Fermas_fondo2.png", desc:"Material escolar disponível dentro do colégio." },
  { nome:"Piscinas", foto:"Imagens/fondo_fermas.png", desc:"Duas piscinas — uma para as crianças e outra para os adultos." },
  { nome:"Música e Dança", foto:"Imagens/Fermas_fondo2.png", desc:"Salas dedicadas às artes performativas." },
  { nome:"Campos Desportivos", foto:"Imagens/fondo_fermas.png", desc:"Três campos para a prática de diferentes desportos." },
  { nome:"Anfiteatro", foto:"Imagens/Fermas_fondo2.png", desc:"Espaço para eventos, apresentações e celebrações." },
  { nome:"Laboratórios", foto:"Imagens/fondo_fermas.png", desc:"Laboratórios de química, física e biologia." },
  { nome:"Informática e Artes", foto:"Imagens/Fermas_fondo2.png", desc:"Salas equipadas para tecnologia e expressão artística." },
  { nome:"Biblioteca", foto:"Imagens/fondo_fermas.png", desc:"Um espaço de leitura e pesquisa para os alunos." }
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
  const ehExternato = (n.id === 'externato');
  document.getElementById('nivel-tag').textContent = n.tag;
  document.getElementById('nivel-titulo').textContent = n.titulo || n.nome;
  document.getElementById('nivel-texto').innerHTML =
    n.texto.map(p => `<p>${p}</p>`).join('');
  const gal = document.getElementById('nivel-galeria');
  gal.innerHTML = '';
  gal.style.display = ehExternato ? 'none' : '';
  document.getElementById('nivel-topo').classList.toggle('so-texto', ehExternato);
  // Foto grande (horizontal) do topo de cada nível. Troque o caminho pela sua foto.
  const fotosGaleria = ["Imagens/fondo_fermas.png"];
  if(!ehExternato) fotosGaleria.forEach(src => {
    const fig = document.createElement('div');
    fig.className = 'gallery-photo';
    fig.innerHTML = `<img src="${src}" alt="Fotografia — ${n.nome}">`;
    gal.appendChild(fig);
  });
  const blocos = document.getElementById('nivel-blocos');
  blocos.innerHTML = conteudoNiveis[n.id] ? blocosNivel(conteudoNiveis[n.id]) : '';
  if(window.registerReveals) registerReveals(blocos);
  return true;
}
