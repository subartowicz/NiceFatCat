// js/cookiePopup_old.js

document.addEventListener('DOMContentLoaded', function () {
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    return null;
  }

  // Check for the cookie
  const cookiePopup = document.getElementById('cookiePopup');
  const cookieButton = document.getElementById('cookieButton');

  if (!getCookie('visited')) {
    // Show the popup if the cookie is not set
    cookiePopup.style.display = 'block';

    // Set the cookie when button is clicked
    cookieButton.addEventListener('click', function() {
      setCookie('visited', 'true', 365);
      cookiePopup.style.display = 'none';
    });
  }
});
