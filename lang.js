(function(){var d=document.documentElement,l='en';try{l=localStorage.getItem('cs_l')||((navigator.language||'').slice(0,2)=='ru'?'ru':'en')}catch(e){}
function set(x){d.setAttribute('data-l',x);d.lang=x;document.querySelectorAll('.lg button').forEach(function(b){b.classList.toggle('on',b.dataset.l==x)});try{localStorage.setItem('cs_l',x)}catch(e){}}
set(l);document.addEventListener('click',function(e){var b=e.target.closest('.lg button');if(b)set(b.dataset.l)})})();
