document.addEventListener('DOMContentLoaded',()=>{
  const yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',ev=>{
    const href=link.getAttribute('href');
    if(href && href!=='#'){
      ev.preventDefault();
      const target=document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
