// ================= SECÇÃO: MATRÍCULA =================
// Este ficheiro insere o HTML da secção "Quero Matricular": documentos
// necessários para novos alunos, confirmação de matrícula, informação
// sobre valores (sem preços — remete para a Secretaria) e um bloco
// complementar com actividades extracurriculares e o Externato.
//
// O botão "Quero Matricular" no cabeçalho, no Início, no rodapé e no
// fim de "O Que Oferecemos" leva sempre a esta página. O botão "Falar
// com a Secretaria" desta página abre uma conversa directa no
// WhatsApp — substitua o número pelo que preferir usar para
// matrículas, se for diferente dos contactos gerais.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', (function(){

  const numeroWhatsapp = "244936269025";
  const mensagem = "Olá! Gostaria de saber mais sobre a matrícula no Colégio Fermas.";
  const linkWhatsapp = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensagem);

  return `
<!-- ================= MATRÍCULA ================= -->
  <section class="view" data-view="matricula">
    <div class="section-head">
      <h2>Quero Matricular</h2>
      <p>Quer matricular o seu educando no Colégio Fermas? Veja abaixo os documentos necessários e as informações importantes para realizar a matrícula.</p>
    </div>

    <div class="section-head">
      <h3>1. Matrícula para Novos Alunos</h3>
      <p>Documentos necessários:</p>
    </div>
    <div class="doc-card">
      <ul>
        <li>Atestado médico</li>
        <li>4 fotografias tipo passe</li>
        <li>Fotocópia do cartão de vacinas actualizado — para alunos da Iniciação e 1.ª classe</li>
        <li>Fotocópia do Bilhete de Identidade do aluno, dos pais e do encarregado de educação</li>
        <li>Para alunos provenientes de outras instituições, processo individual de transferência completo</li>
        <li>Para alunos provenientes de outros sistemas de ensino, certificado de equivalência solicitado ao Ministério da Educação</li>
        <li>Declaração de não devedor</li>
      </ul>
    </div>

    <div class="section-head">
      <h3>2. Confirmação de Matrícula</h3>
      <p>Para alunos que já frequentam o Colégio Fermas:</p>
    </div>
    <div class="doc-card">
      <ul>
        <li>1 fotografia tipo passe</li>
        <li>Fotocópia actualizada do Bilhete de Identidade do aluno, dos pais e do encarregado de educação</li>
      </ul>
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
          <p>Reúna e entregue os documentos necessários na secretaria do colégio, conforme a lista acima.</p>
        </div>
      </div>
      <div class="matricula-step">
        <span class="step-num">3</span>
        <div>
          <h4>Pagamento da matrícula</h4>
          <p>Efectue o pagamento da taxa de matrícula na secretaria. O pagamento da primeira mensalidade não é obrigatório nesta fase.</p>
        </div>
      </div>
      <div class="matricula-step">
        <span class="step-num">4</span>
        <div>
          <h4>Matrícula concluída</h4>
          <p>Entregues os documentos e paga a taxa, o processo fica concluído — não é emitido nenhum comprovativo no momento. O calendário escolar fica disponível para levantamento na secretaria no dia seguinte ou alguns dias depois.</p>
        </div>
      </div>
    </div>

    <div class="cta-banner">
      <div>
        <h3>3. Valores</h3>
        <p>Para informações sobre os valores de matrícula, mensalidades, uniformes e outros serviços, contacte a Secretaria do Colégio Fermas.</p>
      </div>
      <a href="${linkWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-enroll">Falar com a Secretaria</a>
    </div>

    <div class="info-extra">
      <h3>4. Informações Adicionais</h3>
      <div class="info-extra-grid">
        <div class="info-extra-card">
          <h4>Actividades Extracurriculares</h4>
          <p>O Colégio Fermas disponibiliza diversas actividades, incluindo Natação, Informática, Inglês, Francês, Ballet, Xadrez, Judo, Dança, Teatro, Coral, Culinária, Literatura, Biblioteca, entre outras.</p>
        </div>
        <div class="info-extra-card">
          <h4>Externato</h4>
          <p>O externato inclui alimentação e diversas actividades educativas e extracurriculares.</p>
          <a href="#nivel-externato" class="link-more">Saber mais sobre o Externato &#8250;</a>
        </div>
      </div>
    </div>
  </section>
`;
})());
