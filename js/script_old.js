// Funkcja do zapisania preferencji motywu w ciasteczku
function saveThemePreference(theme) {
  console.log('Zapisuję motyw w ciasteczku:', theme); // Debug
  document.cookie = `selectedTheme=${theme}; path=/; max-age=31536000`; // Ciasteczko ważne przez 1 rok
}

// Funkcja do odczytania wartości ciasteczka
function getThemePreference() {
  const cookies = document.cookie.split(';'); // Pobierz wszystkie ciasteczka
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Usuń zbędne spacje
    if (cookie.startsWith('selectedTheme=')) {
      return cookie.split('=')[1]; // Zwróć wartość ciasteczka
    }
  }
  return null; // Jeśli nie znaleziono ciasteczka
}

// Funkcja do załadowania motywu na podstawie zapisanej preferencji w ciasteczku
function loadThemePreference() {
  const savedTheme = getThemePreference(); // Pobierz motyw z ciasteczka
  console.log('Załadowany motyw z ciasteczka:', savedTheme); // Debug
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

    // Zapisujemy preferencję jasnego motywu w ciasteczku
    saveThemePreference('light');
  } else {
    // Zmiana na ciemny motyw
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    sidebar.style.backgroundColor = '#222';
    sidebar.style.color = 'white';
    content.style.color = 'white';
    themeToggle.textContent = 'Przywróć jasny motyw';

    // Zapisujemy preferencję ciemnego motywu w ciasteczku
    saveThemePreference('dark');
  }
}

// Po załadowaniu strony wczytaj preferencje z ciasteczek
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded - strona załadowana'); // Debug
  loadThemePreference(); // Załaduj zapisany motyw

  // Ustaw event listener dla przycisku zmiany motywu
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);
});
