// =============================================
// GROK 5大予想 — サイト共通スクリプト
// =============================================

(function () {
  'use strict';

  // -- ドロワーメニュー制御 --
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  // ドロワー内のリンクをクリックしたら閉じる
  document.querySelectorAll('.drawer-link').forEach(function (a) {
    a.addEventListener('click', function () {
      setTimeout(closeDrawer, 120);
    });
  });

  // -- 現在ページをドロワーでハイライト --
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.drawer-link').forEach(function (a) {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === currentPath) a.classList.add('active');
  });

  // -- スクロールトップボタン --
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) scrollBtn.classList.add('show');
      else scrollBtn.classList.remove('show');
    }, { passive: true });
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -- ベンチマークバーの遅延アニメ --
  if ('IntersectionObserver' in window) {
    const bars = document.querySelectorAll('.bm-bar .fill, .scenario-prob-bar .fill');
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute('data-width') || el.style.width;
          el.style.width = '0%';
          requestAnimationFrame(function () {
            setTimeout(function () {
              el.style.width = target;
            }, 60);
          });
          io.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(function (el) {
      // 元のwidthを取得しておく
      const w = el.style.width;
      if (w) el.setAttribute('data-width', w);
      io.observe(el);
    });
  }

  // -- フェードイン（.fade-in要素の遅延Intersection）--
  if ('IntersectionObserver' in window) {
    const fades = document.querySelectorAll('.chapter-card, .info-card, .scenario, .correction-note, .correct-item, .benchmark, .timeline-item');
    const io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          io2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fades.forEach(function (el) { io2.observe(el); });
  }
})();
