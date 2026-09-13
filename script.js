  // hero photo slider
  (function(){
    const slider = document.getElementById('heroSlider');
    if(!slider) return;
    const slides = slider.querySelectorAll('.slide-img');
    const dots = slider.querySelectorAll('.dot');
    let current = 0;
    let timer = null;

    function show(i){
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function next(){ show(current + 1); }
    function start(){ timer = setInterval(next, 3200); }
    function stop(){ clearInterval(timer); }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { show(i); stop(); start(); });
    });
    slider.addEventListener('mouseenter', () => { stop(); next(); });
    slider.addEventListener('mouseleave', start);
    start();
  })();

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
