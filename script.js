document.getElementById('year').textContent = new Date().getFullYear();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) document.querySelector('.ticker-track')?.style.setProperty('animation', 'none');
