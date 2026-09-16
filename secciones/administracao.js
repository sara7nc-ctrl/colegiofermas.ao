// ================= SECÇÃO: ADMINISTRAÇÃO =================
// Este ficheiro insere o HTML da grelha da Administração e da página de
// biografia, e contém a lista da equipa (equipa) e a função que constrói
// a página de biografia de cada pessoa (renderStaff), usada pelo router
// em js/script.js.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= ADMINISTRAÇÃO ================= -->
  <section class="view" data-view="administracao">
    <div class="section-head">
      <h2>Administração</h2>
      <p>Conheça a equipa que lidera o Colégio Fermas. Toque numa fotografia para conhecer a biografia completa.</p>
    </div>
    <div class="staff-grid" id="staff-grid"></div>
  </section>

  <!-- ================= BIOGRAFIA DE MEMBRO (gerado por JS) ================= -->
  <section class="view" data-view="staff-detalhe">
    <a href="#administracao" class="back-link">&larr; Voltar a Administração</a>
    <div class="staff-detail">
      <div class="staff-detail-photo" id="staff-detalhe-foto"></div>
      <div class="staff-detail-info">
        <span class="level-tag" id="staff-detalhe-cargo"></span>
        <h2 id="staff-detalhe-nome"></h2>
        <div class="staff-detail-text" id="staff-detalhe-bio"></div>
      </div>
    </div>
  </section>
`);

// ---------- Dados da Administração ----------
  // Substitua "foto" pelo caminho real de cada fotografia e "bio" pelo texto da biografia.
  const equipa = [
    { id:"diretor-geral", nome:"Nome do Director-Geral", cargo:"Director-Geral", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Director-Geral. Substitua este texto pela formação, percurso profissional e visão desta pessoa para o Colégio Fermas.", "Pode acrescentar um segundo parágrafo com mais detalhes sobre a sua experiência."] },
    { id:"subdiretor-pedagogico", nome:"Nome do Subdirector Pedagógico", cargo:"Subdirector Pedagógico", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Subdirector Pedagógico. Substitua este texto pela formação e percurso profissional."] },
    { id:"subdiretor-administrativo", nome:"Nome do Subdirector Administrativo e Financeiro", cargo:"Subdirector Administrativo e Financeiro", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Subdirector Administrativo e Financeiro. Substitua este texto pela formação e percurso profissional."] },
    { id:"diretor-pre-escolar", nome:"Nome do Director da Educação Pré-Escolar", cargo:"Director da Educação Pré-Escolar", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Director da Educação Pré-Escolar. Substitua este texto pela formação e percurso profissional."] },
    { id:"diretor-primario", nome:"Nome do Director do Ensino Primário", cargo:"Director do Ensino Primário", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Director do Ensino Primário. Substitua este texto pela formação e percurso profissional."] },
    { id:"diretor-iciclo", nome:"Nome do Director do I Ciclo", cargo:"Director do I Ciclo do Ensino Secundário", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Director do I Ciclo. Substitua este texto pela formação e percurso profissional."] },
    { id:"diretor-iiciclo", nome:"Nome do Director do II Ciclo", cargo:"Director do II Ciclo do Ensino Secundário", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Director do II Ciclo. Substitua este texto pela formação e percurso profissional."] },
    { id:"coordenador-pedagogico", nome:"Nome do Coordenador Pedagógico", cargo:"Coordenador Pedagógico", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Coordenador Pedagógico. Substitua este texto pela formação e percurso profissional."] },
    { id:"coordenador-disciplina", nome:"Nome do Coordenador de Disciplina", cargo:"Coordenador de Disciplina", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Coordenador de Disciplina. Substitua este texto pela formação e percurso profissional."] },
    { id:"chefe-secretaria", nome:"Nome do Chefe de Secretaria", cargo:"Chefe de Secretaria", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Chefe de Secretaria. Substitua este texto pela formação e percurso profissional."] },
    { id:"recursos-humanos", nome:"Nome do Responsável de Recursos Humanos", cargo:"Responsável de Recursos Humanos", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Responsável de Recursos Humanos. Substitua este texto pela formação e percurso profissional."] },
    { id:"instalacoes-logistica", nome:"Nome do Responsável de Instalações e Logística", cargo:"Responsável de Instalações e Logística", foto:"Imagens/staff/placeholder.png",
      bio:["Biografia do Responsável de Instalações e Logística. Substitua este texto pela formação e percurso profissional."] }
  ];

  const staffGridEl = document.getElementById('staff-grid');
  equipa.forEach(m => {
    const card = document.createElement('button');
    card.className = 'staff-card';
    card.onclick = () => { window.location.hash = '#staff-' + m.id; };
    card.innerHTML = `
      <div class="staff-photo"><img src="${m.foto}" alt="${m.nome}"></div>
      <div class="staff-name">${m.nome}</div>
      <div class="staff-role">${m.cargo}</div>
    `;
    staffGridEl.appendChild(card);
  });

  function renderStaff(id){
    const m = equipa.find(x => x.id === id);
    if(!m) return false;
    document.getElementById('staff-detalhe-cargo').textContent = m.cargo;
    document.getElementById('staff-detalhe-nome').textContent = m.nome;
    document.getElementById('staff-detalhe-bio').innerHTML = m.bio.map(p => `<p>${p}</p>`).join('');
    document.getElementById('staff-detalhe-foto').innerHTML = `<img src="${m.foto}" alt="${m.nome}">`;
    return true;
  }
