// Pobieramy przycisk zmiany motywu
const themeToggle = document.getElementById('themeToggle');

// Funkcja zmiany motywu
themeToggle.addEventListener('click', function () {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');

  // Zmieniamy motyw na ciemny lub jasny
  if (body.style.backgroundColor === 'black') {
    // Jasny motyw
    body.style.backgroundColor = '#f7f7f7'; // Jasne tło
    body.style.color = 'black'; // Ciemny tekst
    sidebar.style.backgroundColor = '#002233'; // Oryginalne tło sidebaru
    sidebar.style.color = 'white';
    content.style.color = '#333'; // Oryginalny kolor tekstu treści
    themeToggle.textContent = 'Zmień motyw'; // Zmieniamy tekst przycisku
  } else {
    // Ciemny motyw
    body.style.backgroundColor = 'black'; // Czarne tło
    body.style.color = 'white'; // Biały tekst
    sidebar.style.backgroundColor = '#222'; // Bardziej jednolite tło sidebaru
    sidebar.style.color = 'white'; // Tekst sidebaru na biało
    content.style.color = 'white'; // Tekst zawartości na biało
    themeToggle.textContent = 'Przywróć jasny motyw'; // Zmieniamy tekst przycisku
  }
});
