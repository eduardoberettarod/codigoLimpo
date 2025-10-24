// script_after.js
// Código limpo: nomes claros, funções pequenas, separação de responsabilidades
(function () {
    const BODY_CLASS = 'theme-dark';
    const btn = document.getElementById('btnTema');
    const titulo = document.getElementById('titulo');
  
    function isDarkMode() {
      return document.body.classList.contains(BODY_CLASS);
    }
  
    function applyModeUI() {
      const dark = isDarkMode();
      titulo.textContent = dark ? 'Modo Escuro' : 'Modo Claro';
      btn.textContent = dark ? 'Voltar ao Claro' : 'Alternar Tema';
      btn.setAttribute('aria-pressed', String(dark));
    }
  
    function toggleTheme() {
      document.body.classList.toggle(BODY_CLASS);
      applyModeUI();
      // aqui, se quisermos evoluir, podemos chamar outras funções (analytics, salvar preferencia, etc.)
    }
  
    function init() {
      // bind de eventos de forma moderna
      btn.addEventListener('click', toggleTheme);
      // estado inicial
      applyModeUI();
    }
  
    // inicializa quando DOM estiver pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
  