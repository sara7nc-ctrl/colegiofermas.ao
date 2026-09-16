// ================= SECÇÃO: INÍCIO =================
// Este ficheiro insere o HTML da secção "Início" (o carrossel de imagens)
// dentro do contentor principal, e depois liga o carrossel.

document.getElementById('app-sections').insertAdjacentHTML('beforeend', `
<!-- ================= INÍCIO ================= -->
  <section class="view" data-view="inicio">
    <div class="hero">
      <div class="hero-frame">
  <div class="hero-carousel" id="hero-carousel">
    <div class="carousel-track" id="carousel-track"></div>
    <button class="carousel-arrow prev" onclick="carouselPrev()" aria-label="Imagem anterior">&#8249;</button>
    <button class="carousel-arrow next" onclick="carouselNext()" aria-label="Imagem seguinte">&#8250;</button>
    <div class="carousel-dots" id="carousel-dots"></div>
  </div>

  <div class="hero-caption">
    <h1>Colégio Fermas</h1>
    <p class="tagline">"Educação é a melhor arma que se pode usar para mudar o mundo."</p>
        <cite>— Nelson Mandela</cite>
  </div>
</div>

      <p class="hero-note">O Colégio Fermas acompanha os alunos desde os primeiros passos na iniciação até à conclusão do ensino secundário, com um ensino próximo, disciplinado e atento a cada criança e jovem.</p>

      <div class="hero-actions">
        <a href="#oferecemos" class="btn btn-primary">Ver os níveis de ensino</a>
        <a href="#sobre" class="btn btn-secondary">Conhecer o colégio</a>
      </div>
    </div>
  </section>
`);

// ---------- Carrossel do Início ----------
  // Substitua "img" pelo caminho real de cada fotografia (ex: "Imagens/hero-2.jpg")
  // e "legenda" pelo texto que descreve o que a imagem representa.
  const heroSlides = [
    { img: "Imagens/fondo_fermas.png", legenda: "O nosso campus, no Lar do Patriota, Talatona." },
    { img: "Imagens/Fermas_fondo2.png", legenda: "Formatura dos alunos de iniciação." },
    { img: "Imagens/fondo_fermas.png", legenda: "Espaços desportivos para o desenvolvimento físico." },
    { img: "Imagens/Fermas_fondo2.png", legenda: "Laboratórios equipados para a aprendizagem prática." }
  ];

  const trackEl = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  let slideIndex = 0;
  let carouselTimer = null;

  heroSlides.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `<img src="${s.img}" alt="${s.legenda}">
      <div class="slide-caption"><p>${s.legenda}</p></div>`;
    trackEl.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir para a imagem ' + (i + 1));
    dot.onclick = () => goToSlide(i);
    dotsEl.appendChild(dot);
  });

  function updateCarousel(){
    trackEl.style.transform = `translateX(-${slideIndex * 100}%)`;
    document.querySelectorAll('.carousel-dots .dot').forEach((d, i) => {
      d.classList.toggle('active', i === slideIndex);
    });
  }
  function goToSlide(i){
    slideIndex = (i + heroSlides.length) % heroSlides.length;
    updateCarousel();
    restartAutoplay();
  }
  function carouselNext(){ goToSlide(slideIndex + 1); }
  function carouselPrev(){ goToSlide(slideIndex - 1); }
  function restartAutoplay(){
    clearInterval(carouselTimer);
    carouselTimer = setInterval(carouselNext, 6000);
  }
  const carouselEl = document.getElementById('hero-carousel');
  carouselEl.addEventListener('mouseenter', () => clearInterval(carouselTimer));
  carouselEl.addEventListener('mouseleave', restartAutoplay);
  restartAutoplay();
