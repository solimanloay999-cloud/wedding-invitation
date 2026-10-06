const weddingDate = new Date("2026-10-24T19:00:00+03:00").getTime();

function updateCountdown(){
  const d = weddingDate - Date.now();
  if(d <= 0) return;
  document.getElementById("days").textContent = String(Math.floor(d/86400000)).padStart(2,"0");
  document.getElementById("hours").textContent = String(Math.floor(d/3600000)%24).padStart(2,"0");
  document.getElementById("minutes").textContent = String(Math.floor(d/60000)%60).padStart(2,"0");
  document.getElementById("seconds").textContent = String(Math.floor(d/1000)%60).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

// Falling snow layer
const snow = document.getElementById("snow");
for(let i=0;i<95;i++){
  const flake=document.createElement("span");
  flake.className="flake";
  flake.textContent = Math.random() > .72 ? "✦" : "•";
  flake.style.left=(Math.random()*100)+"vw";
  flake.style.fontSize=(Math.random()*7+2)+"px";
  flake.style.opacity=(Math.random()*.55+.2).toFixed(2);
  flake.style.animationDuration=(Math.random()*12+8)+"s";
  flake.style.animationDelay=(-Math.random()*18)+"s";
  flake.style.setProperty("--drift",((Math.random()-.5)*180)+"px");
  snow.appendChild(flake);
}
