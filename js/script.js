// ================= MOTOR DO SITE (comum a todas as secções) =================
// Este ficheiro corre por último, depois de todas as secções (Início,
// Sobre Nós, Administração e O Que Oferecemos) já terem sido inseridas
// na página. Contém o router (que mostra a secção certa consoante o
// link/hash da barra de endereços), o relógio do ano no rodapé e o
// menu para telemóvel.

// ---------- Router ----------
  const views = document.querySelectorAll('.view');
  const navLinks = document.querySelectorAll('nav a');

  let lastView = null;

  function route(){
    let hash = window.location.hash.replace('#','') || 'inicio';
    let viewName = hash;
    let isNivel = false;
    let isStaff = false;
    let scrollTarget = null;

    if(hash.startsWith('nivel-')){
      isNivel = renderNivel(hash.replace('nivel-',''));
      viewName = 'nivel';
      if(!isNivel){ viewName = 'inicio'; window.location.hash = '#inicio'; }
    } else if(hash.startsWith('staff-')){
      isStaff = renderStaff(hash.replace('staff-',''));
      viewName = 'staff-detalhe';
      if(!isStaff){ viewName = 'inicio'; window.location.hash = '#inicio'; }
    } else if(hash.startsWith('sobre-')){
      viewName = 'sobre';
      scrollTarget = hash.replace('sobre-','');
    } else if(hash.startsWith('contactos-')){
      viewName = 'contactos';
      scrollTarget = hash.replace('contactos-','');
    } else if(hash.startsWith('oferecemos-')){
      viewName = 'oferecemos';
      scrollTarget = hash.replace('oferecemos-','');
    } else if(hash.startsWith('vida-')){
      viewName = 'vida';
      if(typeof filtrarVidaPorHash === 'function'){ filtrarVidaPorHash(hash.replace('vida-','')); }
    }

    views.forEach(v => v.classList.toggle('active', v.dataset.view === viewName));
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.nav === viewName));
    if(viewName !== lastView){ resetReveal(viewName); lastView = viewName; }

    const targetEl = scrollTarget ? document.getElementById(scrollTarget) : null;
    if(targetEl){
      requestAnimationFrame(() => targetEl.scrollIntoView({ behavior: 'instant', block: 'start' }));
    } else {
      window.scrollTo({top:0, behavior:'instant'});
    }
    closeMenu();
  }

  window.addEventListener('hashchange', route);

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  function toggleMenu(){
    const h = document.getElementById('site-header');
    h.classList.toggle('open');
    // altura real do cabeçalho: o menu aberto rola por dentro se não couber no ecrã
    document.documentElement.style.setProperty('--hdr-h', h.offsetHeight + 'px');
  }
  function closeMenu(){
    document.getElementById('site-header').classList.remove('open');
  }

  // ---------- Fechar o submenu ao escolher uma opção ----------
  // Depois de clicar num link do submenu, este fecha-se logo (mesmo com o
  // rato ainda por cima) e volta a abrir na próxima vez que se passar o rato.
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    dd.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if(document.activeElement) document.activeElement.blur();
        dd.classList.add('force-close');
      });
    });
    dd.addEventListener('mouseleave', () => dd.classList.remove('force-close'));
    dd.addEventListener('mouseenter', () => dd.classList.remove('force-close'));
  });

  // ---------- Animações ao fazer scroll ----------
  // Cada elemento listado abaixo aparece com um movimento suave quando entra
  // no ecrã. [selector, variante]  —  variantes: '' (sobe), 'left', 'right', 'zoom'.
  // Os elementos do mesmo grupo entram um após o outro (efeito cascata).
  const revealTargets = [
    ['.features-strip .feature-item', ''],
    ['.colegio-preview-media', 'left'],
    ['.colegio-preview-text', 'right'],
    ['.niveis-preview-band > h3', ''],
    ['.nivel-mini-card', 'zoom'],
    ['.diferenca-preview .section-head', ''],
    ['.acrostic-icon-item', ''],
    ['.vida-preview-text', ''],
    ['.vida-preview-grid .vida-card', 'zoom'],
    ['.paises-band > *:not(.paises-grid)', ''],
    ['.pais-item', 'zoom'],
    ['.quote-block', ''],
    ['.section-head', ''],
    ['.about-text', 'left'],
    ['.about-photo', 'right'],
    ['.acrostic', ''],
    ['.value-card', ''],
    ['.profile-card', 'zoom'],
    ['.staff-card', 'zoom'],
    ['.day-block', ''],
    ['.facility-card', 'zoom'],
    ['.level-row', ''],
    ['.cta-banner', 'zoom'],
    ['.contact-card', 'zoom'],
    ['.map-block', ''],
    ['.matricula-step', ''],
    ['.docs-column', ''],
    ['.info-extra-card', 'zoom'],
    ['.staff-detail-photo', 'left'],
    ['.staff-detail-info', 'right'],
    ['.level-detail-head', ''],
    ['.level-detail-text', ''],
    ['.gallery-photo', 'zoom'],
    ['footer .footer-cta', ''],
    ['footer .footer-grid > div', '']
  ];

  const revealObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if(en.isIntersecting){
            en.target.classList.add('in');
            revealObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    : null;

  const revealEls = [];
  revealTargets.forEach(([sel, variant]) => {
    document.querySelectorAll(sel).forEach(el => {
      if(el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      if(variant) el.classList.add('reveal-' + variant);
      // atraso em cascata entre irmãos do mesmo tipo
      const siblings = Array.from(el.parentElement.children).filter(x => x.matches(sel));
      const idx = siblings.indexOf(el);
      el.style.setProperty('--reveal-delay', (Math.min(idx, 6) * 0.14).toFixed(2) + 's');
      revealEls.push(el);
    });
  });

  function observeReveal(el){
    if(revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  }

  // Ao mudar de página, os elementos dessa página voltam a animar.
  function resetReveal(viewName){
    const view = document.querySelector('.view[data-view="' + viewName + '"]');
    if(!view) return;
    revealEls.forEach(el => {
      if(view.contains(el)){
        el.classList.remove('in');
        observeReveal(el);
      }
    });
  }

  // Rodapé (fora das páginas) e primeira página
  revealEls.forEach(el => { if(!el.closest('.view')) observeReveal(el); });

  // Arranca o site (tem de ser depois de definir as animações)
  route();
