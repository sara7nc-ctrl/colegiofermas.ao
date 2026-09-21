// ================= SECÇÃO: SOBRE NÓS =================
// Este ficheiro insere o HTML da secção "Sobre Nós" dentro do contentor principal.
// É conteúdo estático, por isso não precisa de dados nem funções adicionais.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= SOBRE NÓS ================= -->
  <section class="view" data-view="sobre">
    <div class="section-head">
      <h2>Sobre Nós</h2>
      <p>Um colégio que cresce junto com as famílias de Angola.</p>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <p>O Colégio Fermas é uma instituição tutelada pelo Ministério da Educação, reconhecida a nível ministerial e municipal.</p>
        <p>Iniciou a sua actividade lectiva no dia 6 de fevereiro de 2015, com o ensino pré-escolar, o ensino primário e o I ciclo. Está situado no Lar Patriota, comuna do Benfica, pertencente ao município do Talatona.</p>
        <p>Acreditamos que aprender é também crescer como pessoa. Por isso, unimos rigor académico e acompanhamento próximo, num ambiente onde professores, alunos e famílias trabalham lado a lado.</p>
      </div>
      <div class="about-photo">
        <div class="photo-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--maroon-dark)" stroke-width="1.2">
            <rect x="3" y="5" width="18" height="14" rx="1.5"/>
            <circle cx="9" cy="10.5" r="1.8"/>
            <path d="M4 18l5-5 4 4 3-3 4 4" stroke-linejoin="round"/>
          </svg>
          <p class="ph-label">Espaço para uma fotografia do colégio — substitua por &lt;img src="..."&gt;.</p>
        </div>
      </div>
    </div>

    <div class="section-head" id="diferenca">
      <h3>O Que Nos Diferencia</h3>
      <p>Seis palavras que resumem o que somos e como trabalhamos, todos os dias, com os nossos alunos.</p>
    </div>

    <div class="acrostic">
      <div class="acrostic-row">
        <div class="acrostic-item"><span class="big-letter">F</span><span class="word">fazer</span></div>
        <div class="acrostic-item"><span class="big-letter">E</span><span class="word">ensinar</span></div>
        <div class="acrostic-item"><span class="big-letter">R</span><span class="word">refletir</span></div>
        <div class="acrostic-item"><span class="big-letter">M</span><span class="word">melhorar</span></div>
        <div class="acrostic-item"><span class="big-letter">A</span><span class="word">aprender</span></div>
        <div class="acrostic-item"><span class="big-letter">S</span><span class="word">ser</span></div>
      </div>
    </div>

    <div class="values-grid">
      <div class="value-card" id="missao">
        <h3>MISSÃO</h3>
        <p>O Complexo escolar privado Fermas tem como
          missão formar indivíduos preparados para
          transformar positivamente a sociedade, através
          de uma educação de qualidade, inovadora e
          orientada para a excelência.</p>
      </div>
      <div class="value-card" id="visao">
        <h3>VISÃO</h3>
        <p>Ser um colégio de referência em Angola,
          reconhecido pela qualidade do ensino, excelência dos serviços e pelos
          resultados dos seus alunos, promovendo conhecimento, inovação e melhoria contínua.</p>
      </div>
      <div class="value-card" id="valores">
        <h3>VALORES</h3>
        <p>A identidade do Complexo escolar privado Fermas assenta em valores que orientam a nossa forma de ensinar, servir e relacionar-nos.</p>
      </div>
    </div>

    <div class="profiles-grid">
      <div class="profile-card aluno">
        <h3>Perfil do Aluno</h3>
        <ul>
          <li>Pesquisador</li>
          <li>Responsável</li>
          <li>Respeitoso</li>
          <li>Autónomo</li>
          <li>Criativo</li>
        </ul>
      </div>
      <div class="profile-card docente">
        <h3>Perfil do Docente</h3>
        <ul>
          <li>Exemplar</li>
          <li>Comunicador</li>
          <li>Competente</li>
          <li>Disciplinado</li>
          <li>Ético</li>
        </ul>
      </div>
    </div>
  </section>
`);
