// ================= SECÇÃO: MATRÍCULA =================
// Este ficheiro insere o HTML da secção "Matrícula": o processo passo a
// passo e os documentos necessários. A lista de documentos é um EXEMPLO
// — substitua pelos requisitos reais do colégio assim que os tiver.
//
// O botão "Quero Matricular" no cabeçalho, no Início, no rodapé e no
// fim de "O Que Oferecemos" leva sempre a esta página. Os botões desta
// própria página abrem uma conversa directa no WhatsApp com a
// secretaria — substitua o número pelo que preferir usar para
// matrículas, se for diferente dos contactos gerais.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', (function(){

  const numeroWhatsapp = "244936269025";
  const mensagem = "Olá! Gostaria de saber mais sobre a matrícula no Colégio Fermas.";
  const linkWhatsapp = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensagem);

  return `
<!-- ================= MATRÍCULA ================= -->
  <section class="view" data-view="matricula">
    <div class="section-head">
      <h2>Matrícula</h2>
      <p>Junte-se à família Fermas. Aqui encontra o processo passo a passo e os documentos necessários para matricular o seu educando.</p>
    </div>

    <div class="cta-banner">
      <div>
        <h3>Vagas abertas para o próximo ano lectivo</h3>
        <p>Fale já com a nossa secretaria e garanta o lugar do seu educando.</p>
      </div>
      <a href="${linkWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-enroll">Quero Matricular</a>
    </div>

    <div class="section-head">
      <h3>Como Matricular — Passo a Passo</h3>
    </div>

    <div class="matricula-steps">
      <div class="matricula-step">
        <span class="step-num">1</span>
        <div>
          <h4>Contacto inicial</h4>
          <p>Fale connosco por telefone, e-mail ou WhatsApp para confirmar a disponibilidade de vagas no nível pretendido.</p>
        </div>
      </div>
      <div class="matricula-step">
        <span class="step-num">2</span>
        <div>
          <h4>Entrega de documentos</h4>
          <p>Reúna e entregue os documentos necessários na secretaria do colégio (ver lista abaixo).</p>
        </div>
      </div>
      <div class="matricula-step">
        <span class="step-num">3</span>
        <div>
          <h4>Pagamento da matrícula</h4>
          <p>Efectue o pagamento da taxa de matrícula e da primeira mensalidade, conforme indicado pela secretaria.</p>
        </div>
      </div>
      <div class="matricula-step">
        <span class="step-num">4</span>
        <div>
          <h4>Confirmação da vaga</h4>
          <p>Receba a confirmação da matrícula e o calendário escolar para o início das aulas.</p>
        </div>
      </div>
    </div>

    <div class="section-head">
      <h3>Documentos Necessários</h3>
      <p><em>Lista de exemplo — actualize esta lista com os requisitos reais do colégio, que podem variar consoante o nível de ensino.</em></p>
    </div>

    <div class="requisitos-grid">
      <div class="requisito-card">
        <h4>Documentos do Aluno</h4>
        <ul>
          <li>Cópia da certidão de nascimento</li>
          <li>4 fotografias tipo passe</li>
          <li>Boletim de vacinas actualizado</li>
          <li>Certificado/declaração da escola anterior (quando aplicável)</li>
          <li>Ficha de matrícula devidamente preenchida</li>
        </ul>
      </div>
      <div class="requisito-card">
        <h4>Documentos do Encarregado de Educação</h4>
        <ul>
          <li>Cópia do Bilhete de Identidade</li>
          <li>Comprovativo de residência</li>
          <li>Contacto telefónico e e-mail actualizados</li>
        </ul>
      </div>
      <div class="requisito-card">
        <h4>Pagamento</h4>
        <ul>
          <li>Taxa de matrícula</li>
          <li>Primeira mensalidade</li>
        </ul>
      </div>
    </div>

    <div class="cta-banner">
      <div>
        <h3>Ainda tem dúvidas?</h3>
        <p>A nossa secretaria está disponível para o ajudar em todo o processo de matrícula.</p>
      </div>
      <a href="${linkWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-enroll">Falar com a Secretaria</a>
    </div>
  </section>
`;
})());
