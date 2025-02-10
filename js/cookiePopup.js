// cookiePopup.js

document.addEventListener('DOMContentLoaded', function () {
  const cookiePopup = document.getElementById('cookiePopup'); // Element popup
  const cookieButton = document.getElementById('cookieButton'); // Przycisk

  if (!getCookie('visited')) {
    // Pokaż popup, jeśli ciasteczko "visited" nie istnieje
    cookiePopup.style.display = 'block';

    cookieButton.addEventListener('click', function () {
      // Ustaw ciasteczko "visited" na 365 dni
      setCookie('visited', 'true', 365);
      cookiePopup.style.display = 'none';
    });
  }
});
