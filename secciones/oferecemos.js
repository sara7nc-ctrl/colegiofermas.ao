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
  "Imagens/primario-1.png", "Imagens/Fermas_fondo2.png", "Imagens/fondo_fermas.png",
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
  // ======= Cada nível tem a sua própria informação. Edite à vontade =======
  // Campos: oque (parágrafos), fotos (caminhos), beneficios ([título, texto] x4),
  // metodologia, plano (lista de disciplinas; apague a linha "plano" para esconder o bloco),
  // formacao, familia (parágrafos), fecho (frase do banner final).
  // ---------- Iniciação ----------
  iniciacao: {
    nome: "Iniciação",
    oqueEyebrow: "A Iniciação",
    oqueTitulo: "O que é a Iniciação?",
    oque: [
      "No Colégio FERMAS, a Iniciação acontece num espaço seguro, acolhedor e cheio de descobertas, pensado para o ritmo de cada criança.",
      "Através do brincar, da música, da arte e das histórias, desenvolvemos a linguagem, a motricidade, a autonomia e a confiança em si próprias."
    ],
    fotosTitulo: "O dia a dia na Iniciação",
      fotos: [
      "Imagens/primario-1.png",
      "Imagens/primario-2.png",
      "Imagens/primario-3.png",
      "Imagens/primario-4.png",
      "Imagens/primario-5.png",
      "Imagens/primario-6.png"
    ],
    beneficiosTitulo: "O que o seu educando encontra na Iniciação?",
    beneficios: [
      ["Ambiente acolhedor", "Um espaço seguro e afectuoso, pensado para os primeiros passos."],
      ["Aprender a brincar", "Jogos, música e histórias que estimulam a linguagem e a imaginação."],
      ["Desenvolvimento motor", "Actividades que trabalham a coordenação e a autonomia."],
      ["Valores desde cedo", "Partilha, respeito e boas maneiras no dia a dia."]
    ],
    metodologiaTitulo: "Aprender a brincar, brincar para aprender",
    metodologia: [
      "Na Iniciação, a criança aprende a brincar e brinca para aprender. As actividades respeitam o ritmo de cada uma e promovem a descoberta, a linguagem e a confiança."
    ],
    planoTitulo: "As áreas que exploramos",
    plano: [
      "Linguagem e comunicação",
      "Descoberta de números e formas",
      "Expressão plástica e musical",
      "Motricidade e educação física",
      "Formação pessoal e social"
    ],
    formacaoTitulo: "Preparados para os desafios do futuro",
    formacao: [
      "Queremos crianças felizes, seguras e curiosas, capazes de se expressar, partilhar e conviver com os outros.",
      "Valorizamos o bem-estar, as relações afectivas e os hábitos de vida saudáveis desde os primeiros anos."
    ],
    familiaTitulo: "Escola e família: uma parceria essencial",
    familia: [
      "Os primeiros anos são vividos em conjunto com a família. Mantemos um diálogo próximo e diário com os encarregados de educação."
    ],
    fecho: "Conheça a Iniciação do Colégio FERMAS e os primeiros passos do seu educando."
  },
  // ---------- Ensino Primário ----------
  primario: {
    nome: "Ensino Primário",
    oqueEyebrow: "O Ensino Primário",
    oqueTitulo: "O que é o Ensino Primário?",
    oque: [
      "O Ensino Primário do Colégio FERMAS articula o currículo com actividades complementares, promovendo o sucesso académico e o crescimento pessoal e social dos alunos.",
      "A nossa proposta valoriza a curiosidade, a criatividade, a responsabilidade e o respeito pelo ritmo de aprendizagem de cada aluno."
    ],
    fotosTitulo: "O dia a dia no Ensino Primário",
    fotos: fotosPadrao,   // troque por ["Imagens/xxx.jpg", ...] para fotos só deste nível
    beneficiosTitulo: "O que o seu educando encontra no Ensino Primário?",
    beneficios: [
      ["Bases sólidas", "Leitura, escrita e cálculo consolidados com acompanhamento próximo."],
      ["Descoberta do mundo", "Ciências, história e geografia explicadas de forma prática."],
      ["Hábitos de estudo", "Organização, responsabilidade e gosto por aprender."],
      ["Valores e cidadania", "Respeito, inclusão, solidariedade e responsabilidade."]
    ],
    metodologiaTitulo: "Aprender fazendo, crescer com confiança",
    metodologia: [
      "No Ensino Primário, o aluno participa activamente na aprendizagem, com actividades práticas, leitura orientada e acompanhamento pedagógico próximo."
    ],
    planoTitulo: "Disciplinas do Ensino Primário",
    plano: [
      "Língua Portuguesa",
      "Matemática",
      "Estudo do Meio",
      "Educação Moral e Cívica",
      "Educação Visual e Plástica",
      "Educação Física",
      "Inglês"
    ],
    formacaoTitulo: "Preparados para os desafios do futuro",
    formacao: [
      "Queremos formar alunos capazes de comunicar, pensar e respeitar as diferenças, com gosto pelo conhecimento.",
      "Valorizamos tanto os conhecimentos académicos como o bem-estar e as relações humanas."
    ],
    familiaTitulo: "Escola e família: uma parceria essencial",
    familia: [
      "O sucesso educativo constrói-se em conjunto. Acompanhamos o percurso de cada aluno em diálogo com os encarregados de educação."
    ],
    fecho: "Conheça o Ensino Primário do Colégio FERMAS e as oportunidades que temos para o seu educando."
  },
  // ---------- I Ciclo do Ensino Secundário ----------
  iciclo: {
    nome: "I Ciclo do Ensino Secundário",
    oqueEyebrow: "O I Ciclo",
    oqueTitulo: "O que é o I Ciclo do Ensino Secundário?",
    oque: [
      "No Quadro Geral do Sistema Educativo Angolano, a Lei n.º 32/20, de 12 de Agosto (LBSE), estabelece um Ensino Secundário constituído por dois ciclos. O I Ciclo abrange a 7ª, 8ª e 9ª classes, com a duração de três anos, e a idade mínima de ingresso é, aproximadamente, entre os 11 e os 12 anos.",
      "O plano de estudo procura um maior equilíbrio entre as disciplinas de Formação Geral e as mais viradas para o conhecimento prático e para o mundo do trabalho. Na acção pedagógica consideram-se a multiplicidade de culturas das várias regiões etnolinguísticas do País, para proporcionar ao aluno conhecimentos, habilidades, atitudes e ética que contribuam para a sua formação integral.",
      "Os alunos têm entre os 12 e os 16 anos, uma fase em que o desenvolvimento intelectual ocorre em duas etapas: a sócio-afectiva e a intelectual."
    ],
    fotosTitulo: "O dia a dia no I Ciclo",
    fotos: fotosPadrao,   // troque por ["Imagens/xxx.jpg", ...] para fotos só deste nível
    beneficiosTitulo: "O que o seu educando encontra no I Ciclo?",
    beneficios: [
      ["Continuação dos estudos", "Consolidação e aprofundamento de conhecimentos, competências, atitudes e valores."],
      ["Um professor por disciplina", "Regime de docência por disciplina, com acompanhamento especializado."],
      ["Educação Laboral", "Desenho Técnico e Oficina: conhecimentos técnicos e cultura laboral e tecnológica."],
      ["Preparação para a vida activa", "Base para prosseguir estudos e para a inserção na comunidade."]
    ],
    metodologiaEyebrow: "Estrutura curricular",
    metodologiaTitulo: "Aprofundar o saber e preparar para a vida",
    metodologia: [
      "O plano de estudo visa principalmente a continuação dos estudos, num regime de docência de professor por disciplina, de modo a assegurar a consolidação e o aprofundamento de conhecimentos e o desenvolvimento de competências, atitudes e valores que permitam prosseguir estudos em domínios diversificados e adquirir uma preparação básica para a vida activa.",
      "Ao manejarem as ferramentas da Educação Laboral, os alunos adquirem conhecimentos técnicos e habilidades, obtendo uma cultura laboral e tecnológica que os torna membros activos e valiosos da família, mesmo antes de completarem uma formação média técnica. Esta disciplina divide-se em duas áreas: Desenho Técnico e Oficina.",
      "Prevê-se um máximo de 30 horas semanais para as três classes, numa semana lectiva de cinco dias."
    ],
    planoTitulo: "Disciplinas do I Ciclo",
    plano: [
      "Língua Portuguesa",
      "Língua Estrangeira (Francês)",
      "Matemática",
      "Biologia",
      "Física",
      "Química",
      "Geografia",
      "História",
      "Educação Física",
      "Educação Moral e Cívica",
      "Educação Visual e Plástica",
      "Educação Laboral",
      "Empreendedorismo",
      "Informática"
    ],
    formacaoEyebrow: "Perfil de saída",
    formacaoTitulo: "O aluno que concluiu o I Ciclo",
    formacao: [
      "Os alunos adquirem conhecimentos, habilidades, atitudes e valores morais, éticos, cívicos e patrióticos que lhes permitem a inserção efectiva na comunidade e na sociedade.",
      "Adquirem também hábitos de trabalho individual e em grupo e formação técnica, cultural e artística para a inserção na vida activa."
    ],
    familiaTitulo: "Escola e família: uma parceria essencial",
    familia: [
      "Nesta fase, a parceria com a família é essencial. Acompanhamos o percurso escolar com reuniões e comunicação regular."
    ],
    fecho: "Conheça o I Ciclo do Colégio FERMAS e prepare o futuro do seu educando."
  },
  // ---------- II Ciclo do Ensino Secundário ----------
  iiciclo: {
    nome: "II Ciclo do Ensino Secundário",
    oqueEyebrow: "O II Ciclo",
    oqueTitulo: "O que é o II Ciclo do Ensino Secundário?",
    oque: [
      "O II Ciclo do Ensino Secundário Geral compreende a 10ª, 11ª e 12ª classes e, de acordo com a Lei de Bases do Sistema de Educação (art. 30.º), organiza-se em áreas de conhecimento consoante a natureza dos cursos a que dá acesso.",
      "Tem dois grandes objectivos: preparar os alunos para o ingresso no Ensino Superior ou no mercado de trabalho, imediatamente ou após formação profissional complementar; e desenvolver o pensamento lógico e abstracto e a capacidade de avaliar a aplicação de modelos científicos à resolução de problemas da vida prática.",
      "O ensino secundário tem como função social proporcionar conhecimentos, desenvolver capacidades e aptidões e a consciencialização de valores para a vida social e produtiva que o país exige, ou para o prosseguimento de estudos."
    ],
    fotosTitulo: "O dia a dia no II Ciclo",
    fotos: fotosPadrao,   // troque por ["Imagens/xxx.jpg", ...] para fotos só deste nível
    beneficiosTitulo: "O que o seu educando encontra no II Ciclo?",
    beneficios: [
      ["Formação sólida e aprofundada", "Estudo numa determinada área de conhecimento."],
      ["Rumo ao ensino superior", "Preparação para o Ensino Superior ou para a formação profissional."],
      ["Pensamento lógico e abstracto", "Reflexão crítica, observação e experimentação."],
      ["Valores patrióticos e cívicos", "Participação e envolvimento na vida social."]
    ],
    metodologiaEyebrow: "Objectivos do ciclo",
    metodologiaTitulo: "O que este ciclo pretende alcançar",
    metodologia: ["A Lei de Bases do Sistema de Educação e Ensino determina, no artigo 33.º, como objectivos específicos do II Ciclo:"],
    metodologiaLista: [
      "Assegurar uma formação sólida e aprofundada numa determinada área de conhecimento.",
      "Preparar o aluno para ingressar no Ensino Superior ou para actividades de formação profissional e inserção na vida activa.",
      "Desenvolver uma visão do mundo assente no pensamento filosófico, lógico e abstracto e a capacidade de avaliar a aplicação de modelos científicos na resolução de problemas da vida prática.",
      "Fomentar a aquisição e aplicação de um saber cada vez mais aprofundado, assente no estudo, na reflexão crítica, na observação e na experimentação.",
      "Consolidar os valores patrióticos, morais e cívicos, desenvolvendo o espírito de participação e envolvimento na vida social.",
      "Desenvolver experiências práticas, fortalecendo a aproximação entre a escola e a comunidade.",
      "Favorecer a orientação e formação profissional dos jovens, através da preparação técnica e tecnológica, com vista à entrada no mundo do trabalho."
    ],
    planoTitulo: "Duas áreas de conhecimento",
    planoAreas: [
      {
        titulo: "Área de Ciências Físicas e Biológicas",
        cursos: "Direccionada para cursos como Engenharia, Medicina, Ciências da Saúde, Enfermagem Geral, Ciências Biológicas, Agronomia, Medicina Veterinária, Psicologia, Ciências da Educação, entre outros.",
        disciplinas: [
          "Língua Portuguesa",
          "Língua Estrangeira",
          "Matemática",
          "Informática",
          "Educação Física",
          "Filosofia",
          "Empreendedorismo",
          "IPC (Introdução à Pesquisa Científica)",
          "Física (formação específica)",
          "Química (formação específica)",
          "Biologia (formação específica)",
          "Geologia (formação específica)",
          "Opção"
    ]
      },
      {
        titulo: "Área de Ciências Económico-Jurídicas",
        cursos: "Orientada para cursos como Economia, Direito, Psicologia, Ciências da Educação, Ciências da Comunicação, Ciência Política, Gestão, entre outros.",
        disciplinas: [
          "Língua Portuguesa",
          "Língua Estrangeira",
          "Matemática",
          "Informática",
          "Educação Física",
          "Filosofia",
          "Empreendedorismo",
          "Introdução ao Direito (formação específica)",
          "Introdução à Economia (formação específica)",
          "História (formação específica)",
          "Geografia (formação específica)",
          "Desenvolvimento Económico e Social (formação específica)",
          "Opção"
    ]
      }
    ],
    formacaoEyebrow: "Perfil de saída",
    formacaoTitulo: "O aluno que conclui a 12ª classe",
    formacao: ["Os dois grandes objectivos do ciclo completam-se com o seguinte perfil de saída. O aluno:"],
    formacaoLista: [
      "Utiliza a língua portuguesa com correcção e fluência nos diferentes modos de comunicação.",
      "Exprime-se com fluência, pelo menos, numa outra língua estrangeira.",
      "Identifica-se criativamente com a realidade angolana, com conhecimentos sólidos sobre a sua história, geografia e aspectos socioculturais e sociodemográficos.",
      "Possui as bases teóricas para se familiarizar com alguns grandes sistemas de interpretação da realidade.",
      "Tem formação profissional, através da preparação técnica e tecnológica, com vista à entrada no mundo do trabalho.",
      "Desenvolve e aprofunda formas científicas de raciocínio e técnicas de pesquisa.",
      "Integra, elabora e assimila informações e mensagens, com capacidade de observação e de análise crítica.",
      "Relaciona-se com os outros num espírito de confiança e cooperação, com autonomia pessoal e consciência crítica dos interesses e valores.",
      "Valoriza a autodisciplina, a persistência e o trabalho.",
      "Respeita e é solidário com pessoas e povos de diferentes culturas."
    ],
    familiaTitulo: "Escola e família: uma parceria essencial",
    familia: [
      "Família e colégio caminham juntos até à conclusão do ciclo, apoiando as decisões importantes de cada aluno."
    ],
    fecho: "Conheça o II Ciclo do Colégio FERMAS e o caminho do seu educando até ao ensino superior."
  },
  // ---------- Externato ----------
  externato: {
    nome: "Externato",
    oqueEyebrow: "O Externato",
    oqueTitulo: "O que é o Externato?",
    oque: [
      "O Externato do Colégio FERMAS oferece uma experiência educativa que articula o currículo escolar com actividades complementares, promovendo não só o sucesso académico, mas também o crescimento pessoal e social das crianças.",
      "A nossa proposta valoriza a autonomia, a criatividade, a responsabilidade e o respeito pelo ritmo de aprendizagem de cada aluno."
    ],
    fotosTitulo: "O dia a dia no Externato",
    fotos: fotosPadrao,   // troque por ["Imagens/xxx.jpg", ...] para fotos só deste nível
    beneficiosTitulo: "O que o seu educando encontra no Externato?",
    beneficios: [
      ["Ensino de qualidade", "Aprendizagem centrada no aluno e nas suas necessidades."],
      ["Tecnologia e inovação", "Recursos que estimulam a pesquisa e a descoberta."],
      ["Actividades complementares", "Desporto, cultura, arte e projectos educativos."],
      ["Valores e cidadania", "Respeito, inclusão, solidariedade e responsabilidade."]
    ],
    metodologiaTitulo: "Aprender fazendo, crescer com confiança",
    metodologia: [
      "No FERMAS, o aluno participa activamente no processo de aprendizagem. Através de actividades práticas, investigação, trabalho em equipa e acompanhamento pedagógico, incentivamos o pensamento crítico, a resolução de problemas e a capacidade de aprender com autonomia."
    ],
    formacaoTitulo: "Preparados para os desafios do futuro",
    formacao: [
      "Queremos formar alunos capazes de comunicar, pensar de forma crítica, utilizar a tecnologia com responsabilidade, respeitar as diferenças e contribuir positivamente para a sociedade.",
      "A nossa educação valoriza tanto os conhecimentos académicos como o bem-estar, as relações humanas e os hábitos de vida saudáveis."
    ],
    familiaTitulo: "Escola e família: uma parceria essencial",
    familia: [
      "Acreditamos que o sucesso educativo se constrói em conjunto. Valorizamos o diálogo e a colaboração com os encarregados de educação, acompanhando o percurso escolar dos alunos com responsabilidade e compromisso."
    ],
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

const lista = (arr, cls) => arr ? `<ul class="ext-plano ${cls || ''}">${arr.map(d => `<li>${d}</li>`).join('')}</ul>` : '';

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
          <span class="eyebrow">${c.metodologiaEyebrow || 'Metodologia'}</span>
          <h3>${c.metodologiaTitulo}</h3>
        </div>
        <div class="ext-split-text">
          ${c.metodologia.map(t => `<p>${t}</p>`).join('')}${lista(c.metodologiaLista, 'lista-1')}
        </div>
      </div>
    </div>

    <!-- Plano de estudos (só aparece se o nível tiver "plano") -->
    ${(c.plano || c.planoAreas) ? `
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
          ${c.planoAreas ? c.planoAreas.map(a => `
            <div class="ext-area">
              <h4>${a.titulo}</h4>
              ${a.cursos ? `<p>${a.cursos}</p>` : ''}
              ${lista(a.disciplinas)}
            </div>`).join('') : lista(c.plano)}
        </div>
      </div>
    </div>` : ''}

    <!-- 5 · Formação integral -->
    <div class="ext-band ${(c.plano || c.planoAreas) ? 'ext-band-peach' : 'ext-band-white'}">
      <div class="ext-split">
        <div class="ext-split-title">
          <span class="ext-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 17l6-6 4 4 8-8"/>
              <path d="M15 6h6v6"/>
            </svg>
          </span>
          <span class="eyebrow">${c.formacaoEyebrow || 'Formação integral'}</span>
          <h3>${c.formacaoTitulo}</h3>
        </div>
        <div class="ext-split-text">
          ${c.formacao.map(t => `<p>${t}</p>`).join('')}${lista(c.formacaoLista, 'lista-1')}
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
    { hora: "07:40", titulo: "Parada e Higiene", desc: "Momento de organização, higiene pessoal e preparação para as actividades." },
    { hora: "08:00", titulo: "Atividades pedagógicas", desc: "Exploração sensorial, motricidade fina e primeiras noções de linguagem e números." },
    { hora: "09:30", titulo: "Intervalo", desc: "Pausa para lanche, descanso e convívio entre as crianças." },
    { hora: "10:30", titulo: "Música, arte e histórias", desc: "Atividades de expressão plástica, musical e contação de histórias." },
    { hora: "11:50", titulo: "Saída", desc: "Preparação e entrega das crianças aos encarregados de educação." }
  ],
  primario: [
    { hora: "07:00", titulo: "Entrada", desc: "Chegada dos alunos e formatura antes do início das aulas." },
    { hora: "07:40", titulo: "Entrada para a Sala de Aulas", desc: "Organização dos alunos e preparação do ambiente para o início das actividades." },
    { hora: "07:50", titulo: "Actividades Motivacionais", desc: "Momentos de motivação através de canções, dinâmicas e pequenas conversas." },
    { hora: "08:00", titulo: "Actividades Pedagógicas", desc: "Desenvolvimento dos conteúdos curriculares e das competências dos alunos." },
    { hora: "09:30", titulo: "Intervalo", desc: "Pausa para lanche, descanso e convívio entre os alunos." },
    { hora: "10:30", titulo: "Actividades Pedagógicas", desc: "Desenvolvimento dos conteúdos curriculares e das competências dos alunos." },
    { hora: "12:30", titulo: "Saída", desc: "Encerramento das actividades lectivas e saída organizada dos alunos." }
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
    { hora: "07:30", titulo: "Acolhimento", desc: "Chegada dos alunos ao Externato." },
    { hora: "07:40", titulo: "Atividades", desc: "Atividades de aula." },
    { hora: "12:10", titulo: "Higiene/Almoço", desc: "Momento destinado à higiene pessoal e ao almoço dos alunos." },
    { hora: "13:10", titulo: "Atividades", desc: "Atividades varias." },
    { hora: "15:05", titulo: "Lanche", desc: "Pausa para lanche da tarde." },
    { hora: "15:35", titulo: "Atividades", desc: "Atividades de reforço" },
    { hora: "16:30", titulo: "Saída", desc: "Entrega dos alunos aos encarregados de educação." }
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
 { nome:"Cantina", foto:"Imagens/Cantina.png", desc:"Espaço equipado para as refeições diárias dos alunos." },
  { nome:"Cozinhas", foto:"Imagens/Cozinha.png", desc:"Duas cozinhas preparadas para a confecção das refeições." },
  { nome:"Refeitórios", foto:"Imagens/Refeitorio.png", desc:"Dois refeitórios amplos e confortáveis." },
  { nome:"Papelaria", foto:"Imagens/Papelaria.jpeg", desc:"Material escolar disponível dentro do colégio." },
  { nome:"Piscinas", foto:"Imagens/Piscina.png", desc:"Duas piscinas — Piscina para crianças iniciantes e piscina para crianças avançadas e adolescentes." },
  { nome:"Artes Marciais", foto:"Imagens/Marciais.png", desc:"Sala destinada à prática de artes marciais." },
  { nome:"Campos Desportivos", foto:"Imagens/campo.jpeg", desc:"Três campos para a prática de diferentes desportos." },
  { nome:"Anfiteatro", foto:"Imagens/anfiteatro.jpeg", desc:"Espaço para eventos, apresentações e celebrações." },
  { nome:"Laboratórios", foto:"Imagens/Lab_Biologia.png", desc:"Laboratórios de química, física e biologia." },
  { nome:"Informática e Artes", foto:"Imagens/Lab_Informatica.png", desc:"Salas equipadas para tecnologia e robótica" },
  { nome:"Biblioteca", foto:"Imagens/Biblioteca.png", desc:"Um espaço de leitura e pesquisa para os alunos." },
  { nome:"Pronto Socorro", foto:"Imagens/Socorro.png", desc:"Sala destinada ao atendimento imediato em situações de urgência." }
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
  gal.style.display = 'none';
  document.getElementById('nivel-topo').classList.add('so-texto');
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
