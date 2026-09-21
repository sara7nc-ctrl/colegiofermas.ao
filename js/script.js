// ================= MOTOR DO SITE (comum a todas as secções) =================
// Este ficheiro corre por último, depois de todas as secções (Início,
// Sobre Nós, Administração e O Que Oferecemos) já terem sido inseridas
// na página. Contém o router (que mostra a secção certa consoante o
// link/hash da barra de endereços), o relógio do ano no rodapé e o
// menu para telemóvel.

// ---------- Router ----------
  const views = document.querySelectorAll('.view');
  const navLinks = document.querySelectorAll('nav a');

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
    }

    views.forEach(v => v.classList.toggle('active', v.dataset.view === viewName));
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.nav === viewName));

    const targetEl = scrollTarget ? document.getElementById(scrollTarget) : null;
    if(targetEl){
      requestAnimationFrame(() => targetEl.scrollIntoView({ behavior: 'instant', block: 'start' }));
    } else {
      window.scrollTo({top:0, behavior:'instant'});
    }
    closeMenu();
  }

  window.addEventListener('hashchange', route);
  route();

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  function toggleMenu(){
    document.getElementById('site-header').classList.toggle('open');
  }
  function closeMenu(){
    document.getElementById('site-header').classList.remove('open');
  }
