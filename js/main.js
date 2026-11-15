var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('visible')},60);io.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*.09+'s';io.observe(el)});

/* Copier la somme SHA-256 au clic */
document.querySelectorAll('.hash').forEach(function(h){
  h.style.cursor='pointer';
  h.title='Cliquer pour copier';
  h.addEventListener('click',function(){
    var t=h.getAttribute('data-hash');
    if(!t||t==='A_COMPLETER')return;
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){var o=h.textContent;h.textContent='Copié ✓';setTimeout(function(){h.textContent=o},1500)})}
  });
});

