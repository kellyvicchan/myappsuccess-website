(function(){
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function toTop(){ if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
  toTop(); window.addEventListener('load', toTop); window.addEventListener('pageshow', function(e){ if (e.persisted) toTop(); });
  var b = document.getElementById('menuBtn'), n = document.getElementById('siteNav');
  if (b && n) {
    function close(){ n.classList.remove('open'); b.setAttribute('aria-expanded','false'); b.textContent = 'Menu'; }
    b.addEventListener('click', function(){ var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o ? 'true' : 'false'); b.textContent = o ? 'Close' : 'Menu'; });
    n.addEventListener('click', function(e){ if (e.target.tagName === 'A') close(); });
  }
  var dd = document.querySelector('.nav-dd');
  if (dd) {
    var db = dd.querySelector('.nav-dd-btn');
    function set(o){ dd.classList.toggle('open', o); db.setAttribute('aria-expanded', o ? 'true' : 'false'); }
    db.addEventListener('click', function(e){ if (window.matchMedia('(max-width:1020px)').matches) return; e.stopPropagation(); set(!dd.classList.contains('open')); });
    document.addEventListener('click', function(e){ if (!dd.contains(e.target)) set(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && dd.classList.contains('open')) { set(false); db.focus(); } });
  }
  var nf = document.getElementById('newsForm');
  if (nf) nf.addEventListener('submit', function(e){ e.preventDefault(); var em = document.getElementById('newsEmail').value; nf.style.display = 'none'; document.getElementById('newsMsg').hidden = false; fetch('https://script.google.com/macros/s/AKfycbwtvI0rGuOArY1MPeLBMvxaMQvgMhu_0w9GeaDgrcrnIORDU8fV0MY0lUpERjFW_K6suQ/exec', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: em, source: 'newsletter', submitted_at: new Date().toISOString() }), mode: 'no-cors' }).catch(function(){}); });
})();
