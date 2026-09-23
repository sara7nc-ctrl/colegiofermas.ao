// ================= SECÇÃO: CONTACTOS =================
// Este ficheiro insere o HTML da secção "Contactos": telefones, e-mail,
// morada, redes sociais e um mapa (Google Maps) com botões para abrir
// as rotas directamente no Google Maps ou no Waze.
//
// Substitua "endereco" pela morada real do colégio se for diferente,
// e "email" pelo e-mail real de contacto.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', (function(){

  const endereco = "Rua 18/33, Lar do Patriota, Talatona, Luanda, Angola";
  const email = "geral@colegiofermas.co.ao";
  const enderecoCodificado = encodeURIComponent(endereco);

  const mapaEmbedSrc = "https://maps.google.com/maps?q=" + enderecoCodificado + "&output=embed";
  const googleMapsDirLink = "https://www.google.com/maps/dir/?api=1&destination=" + enderecoCodificado;
  const wazeLink = "https://waze.com/ul?q=" + enderecoCodificado + "&navigate=yes";

  return `
<!-- ================= CONTACTOS ================= -->
  <section class="view" data-view="contactos">
    <div class="section-head">
      <h2>Contactos</h2>
      <p>Estamos disponíveis para esclarecer qualquer dúvida. Estas são as formas de nos contactar.</p>
    </div>

    <div class="contact-grid">
      <a class="contact-card" id="telefone" href="tel:+244936269025">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.72a2 2 0 0 1 2.11-.45c.76.24 1.55.41 2.36.54A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h4>Telefone</h4>
        <p>(+244) 936 269 025</p>
        <p>(+244) 929 065 460</p>
      </a>

      <a class="contact-card" href="mailto:${email}">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 6l-10 7L2 6"/>
          </svg>
        </div>
        <h4>E-mail</h4>
        <p>${email}</p>
      </a>

      <div class="contact-card" id="morada">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 6.5-9 12.5-9 12.5S3 16.5 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h4>Morada</h4>
        <p>Rua 18/33, Lar do Patriota</p>
        <p>Município de Talatona, Luanda &mdash; Angola</p>
      </div>

      <div class="contact-card" id="redes">
        <div class="contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.6" y1="10.5" x2="15.4" y2="6.5"/>
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/>
          </svg>
        </div>
        <h4>Redes Sociais</h4>
        <div class="social-links">
          <a href="https://www.instagram.com/colegiofermas_?stkn=MXd0b3J5Y2FmeGRpbg==" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@colegiofermas.oficial?_r=1&_t=ZS-99aZjawJEQx" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46" stroke-linejoin="round"/>
              <path d="M14 3c.4 2.3 2 4 4.5 4.3" stroke-linejoin="round"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </div>

    <div class="map-block" id="como-chegar">
      <h3>Como Chegar?</h3>
      <p>Veja no mapa onde ficamos e escolha a melhor rota até ao colégio, com trânsito em tempo real.</p>
      <div class="map-frame">
        <iframe
          src="${mapaEmbedSrc}"
          width="100%" height="100%" style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Localização do Colégio Fermas">
        </iframe>
      </div>
      <div class="map-actions">
        <a href="${googleMapsDirLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Abrir no Google Maps</a>
        <a href="${wazeLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Abrir no Waze</a>
      </div>
    </div>
  </section>
`;
})());
