// ================= SECÇÃO: O QUE OFERECEMOS =================
// Este ficheiro insere o HTML da secção "O Que Oferecemos" (incluindo a
// página de detalhe de cada nível de ensino), e contém os dados dos
// níveis de ensino (niveis), das instalações (instalacoes) e a função
// que constrói a página de detalhe de um nível (renderNivel), usada
// pelo router em js/script.js.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= O QUE OFERECEMOS ================= -->
  <section class="view" data-view="oferecemos">
    <div class="section-head">
      <h2>O Que Oferecemos</h2>
   <p>O Complexo escolar privado Fermas desenvolve, em todos os níveis de ensino,
          um Projecto Pedagógico global, integrado e orientado para a excelência, alinhado
          com as orientações e os objectivos gerais definidos pelo Ministério da Educação,
          sem deixar de responder às necessidades e aos desafios da realidade angolana</p>    
  </div>

    <div class="section-head">
      <h3>Percurso Académico</h3>
      <p>Toque num nível para conhecer melhor o que oferecemos nessa etapa.</p>
    </div>

        <div class="facilities-block">
      <h3>As Nossas Instalações</h3>
      <div class="facility-cards" id="facility-cards"></div>
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
