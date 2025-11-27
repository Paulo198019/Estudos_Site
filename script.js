
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{e.preventDefault();document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({behavior:'smooth'});});});
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.card').forEach((c,i)=>{setTimeout(()=>{c.style.opacity='1';c.style.transform='translateY(0)';},i*250);});});
