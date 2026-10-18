(function(){var d=document;
var b=d.querySelector('.burger'),m=d.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});d.querySelectorAll('.reveal').forEach(function(e){io.observe(e)})}else{d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')})}
d.querySelectorAll('form[data-mail]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
 var r=f.querySelectorAll('[required]'),ok=true;r.forEach(function(x){if(!x.value.trim()){ok=false;x.classList.add('bad')}else x.classList.remove('bad')});
 var msg=f.querySelector('.msg');if(!ok){msg.className='msg show';msg.textContent='Please fill in your name and email.';return}
 var L=[];new FormData(f).forEach(function(v,k){if(String(v).trim())L.push(k+': '+v)});
 msg.className='msg show';msg.textContent="Thanks! Opening your email app with your request. If nothing opens, text 403-397-2142 or email orders@willysdumpruns.com.";
 location.href='mailto:orders@willysdumpruns.com?subject='+encodeURIComponent(f.getAttribute('data-subject'))+'&body='+encodeURIComponent(L.join('\n'))})});
d.querySelectorAll('.rslider').forEach(function(s){var t=s.querySelector('.rtrack');function step(){var c=t.firstElementChild;return c.offsetWidth+24}
 s.querySelector('.prev').onclick=function(){t.scrollBy({left:-step(),behavior:'smooth'})};s.querySelector('.next').onclick=function(){if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4)t.scrollTo({left:0,behavior:'smooth'});else t.scrollBy({left:step(),behavior:'smooth'})}});
d.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
