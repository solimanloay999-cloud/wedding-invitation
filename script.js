// موعد الفرح: 24 أكتوبر 2026 الساعة 7:00 مساءً بتوقيت مصر
const weddingDate = new Date("2026-10-24T19:00:00+03:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  const ids = ["days", "hours", "minutes", "seconds"];

  if (distance <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = "00");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
