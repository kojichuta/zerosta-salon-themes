// 年号を自動更新
document.getElementById('year').textContent = new Date().getFullYear();


// ハンバーガーメニュー
const toggle=document.querySelector('.zf-nav-toggle');
const list=document.getElementById('zf-nav-list');
if(toggle&&list){
toggle.addEventListener('click',()=>{
list.classList.toggle('is-open');
});
}


// タブ切替
const tabs=document.querySelectorAll('.zf-tab');
const panels=document.querySelectorAll('.zf-tabpanel');
function activateTab(btn){
tabs.forEach(t=>t.classList.remove('is-active'));
panels.forEach(p=>p.classList.remove('is-active'));
btn.classList.add('is-active');
const panel=document.getElementById(btn.getAttribute('aria-controls'));
if(panel){panel.classList.add('is-active');}
}
tabs.forEach(btn=>btn.addEventListener('click',()=>activateTab(btn)));