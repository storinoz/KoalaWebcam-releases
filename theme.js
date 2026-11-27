(() => {
  'use strict';
  const key = 'koalawebcam-theme';
  let theme = 'dark';
  try { if (localStorage.getItem(key) === 'light') theme = 'light'; } catch { }
  const root = document.documentElement;
  root.dataset.theme = theme;

  function updateButton() {
    const next = theme === 'dark' ? 'claro' : 'escuro';
    document.getElementById('theme-label').textContent = next === 'claro' ? 'Claro' : 'Escuro';
    document.getElementById('theme-toggle').setAttribute('aria-label', `Ativar tema ${next}`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#17141d' : '#f7f7fa';
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateButton();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      try { localStorage.setItem(key, theme); } catch { }
      updateButton();
    });
  });
})();
