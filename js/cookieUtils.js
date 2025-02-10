// cookieUtils.js

// Funkcja: Ustawianie ciasteczka
function setCookie(name, value, days, path = "/", samesite = "Lax", secure = false) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  let cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=" + path;
  cookie += ";samesite=" + samesite;
  if (secure) {
    cookie += ";Secure";
  }
  document.cookie = cookie;
  console.log("Ustawiono ciasteczko:", cookie); // Debuging
}

// Funkcja: Pobieranie ciasteczka
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookies[i].substring(nameEQ.length));
    }
  }
  return null; // Brak ciasteczka
}

// Funkcja: Usuwanie ciasteczka
function deleteCookie(name, path = "/") {
  document.cookie = name + "=; Max-Age=-99999999; path=" + path;
}
