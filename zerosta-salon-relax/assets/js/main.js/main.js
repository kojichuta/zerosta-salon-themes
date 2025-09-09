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
// ===== ハンバーガーメニュー制御 =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
// ===== ハンバーガーメニュー制御 =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    const open = () => {
      nav.classList.add('is-open');
      document.body.classList.add('menu-open');
      hamburger.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', () => {
      nav.classList.contains('is-open') ? close() : open();
    });

    // メニュー内リンクを押したら閉じる
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', close);
    });

    // ウィンドウ幅が戻ったら閉じる
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) close();
    });
  }
});
// ===== nav hamburger =====
(() => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  const lockScroll = (on) => {
    document.documentElement.style.overflow = on ? 'hidden' : '';
    document.body.style.overflow = on ? 'hidden' : '';
  };

  btn.addEventListener('click', () => {
    const opened = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    lockScroll(opened);
  });

  // メニュー内リンクを押したら閉じる
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      lockScroll(false);
    }
  });

  // Escape で閉じる
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      lockScroll(false);
    }
  });
})();
