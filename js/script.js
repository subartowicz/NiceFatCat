// Funkcja do zapisania preferencji motywu w localStorage
function saveThemePreference(theme) {
  localStorage.setItem('selectedTheme', theme); // Zapisujemy motyw ('dark' lub 'light')
}

// Funkcja do załadowania motywu na podstawie zapisanej preferencji w localStorage
function loadThemePreference() {
  const savedTheme = localStorage.getItem('selectedTheme'); // Pobieramy zapisany motyw
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const themeToggle = document.getElementById('themeToggle');

  if (savedTheme === 'dark') {
    // Ustawienia ciemnego motywu
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    sidebar.style.backgroundColor = '#222';
    sidebar.style.color = 'white';
    content.style.color = 'white';
    themeToggle.textContent = 'Przywróć jasny motyw';
  } else {
    // Domyślne ustawienia jasnego motywu
    body.style.backgroundColor = '#f7f7f7';
    body.style.color = 'black';
    sidebar.style.backgroundColor = '#002233';
    sidebar.style.color = 'white';
    content.style.color = '#333';
    themeToggle.textContent = 'Zmień motyw';
  }
}

// Funkcja do zmiany motywu i zapisania nowej preferencji (po kliknięciu przycisku)
function toggleTheme() {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const themeToggle = document.getElementById('themeToggle');

  if (body.style.backgroundColor === 'black') {
    // Zmiana na jasny motyw
    body.style.backgroundColor = '#f7f7f7';
    body.style.color = 'black';
    sidebar.style.backgroundColor = '#002233';
    sidebar.style.color = 'white';
    content.style.color = '#333';
    themeToggle.textContent = 'Zmień motyw';

    // Zapisujemy preferencję jasnego motywu
    saveThemePreference('light');
  } else {
    // Zmiana na ciemny motyw
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    sidebar.style.backgroundColor = '#222';
    sidebar.style.color = 'white';
    content.style.color = 'white';
    themeToggle.textContent = 'Przywróć jasny motyw';

    // Zapisujemy preferencję ciemnego motywu
    saveThemePreference('dark');
  }
}

// Po załadowaniu strony wczytaj preferencje z localStorage
document.addEventListener('DOMContentLoaded', function () {
  loadThemePreference(); // Załaduj zapisany motyw

  // Ustaw event listener dla przycisku zmiany motywu
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);
});
