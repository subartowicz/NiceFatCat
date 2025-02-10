// script.js

function saveThemePreference(theme) {
  console.log('Zapisuję ciasteczko z motywem:', theme); // Debug
  setCookie('selectedTheme', theme, 365, "/", "Lax", true); // Zabezpieczenie przez HTTPS
}

function loadThemePreference() {
  const savedTheme = getCookie('selectedTheme'); // Pobierz motyw z ciasteczka
  console.log('Załadowany motyw z ciasteczka:', savedTheme); // Debug

  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const themeToggle = document.getElementById('themeToggle');

  if (savedTheme === 'dark') {
    // Ustaw ciemny motyw
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    sidebar.style.backgroundColor = '#222';
    sidebar.style.color = 'white';
    content.style.color = 'white';
    themeToggle.textContent = 'Przywróć jasny motyw';
  } else {
    // Ustaw jasny motyw (domyślny)
    body.style.backgroundColor = '#f7f7f7';
    body.style.color = 'black';
    sidebar.style.backgroundColor = '#002233';
    sidebar.style.color = 'white';
    content.style.color = '#333';
    themeToggle.textContent = 'Zmień motyw';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadThemePreference(); // Załaduj motyw z ciasteczka

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', function () {
    const body = document.body;

    if (body.style.backgroundColor === 'black') {
      saveThemePreference('light'); // Zapisz "light" w ciasteczku
      loadThemePreference(); // Ponownie załaduj motyw
    } else {
      saveThemePreference('dark'); // Zapisz "dark" w ciasteczku
      loadThemePreference(); // Ponownie załaduj motyw
    }
  });
});
