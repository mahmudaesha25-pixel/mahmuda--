window.scrollTo(0,0);

/* PARTICLES */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const dots = Array.from({length:100}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2+1,
  dx:(Math.random()-.5)*.3,
  dy:(Math.random()-.5)*.3
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d=>{
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle="rgba(108,242,255,.6)";
    ctx.fill();
    d.x+=d.dx; d.y+=d.dy;
    if(d.x<0||d.x>canvas.width) d.dx*=-1;
    if(d.y<0||d.y>canvas.height) d.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

/* PROJECT TOGGLE */
function toggleProject(card) {
  card.classList.toggle("active");
}

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("visible");
  });
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
