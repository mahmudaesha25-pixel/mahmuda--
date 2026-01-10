/* Always start at top */
window.onload = () => window.scrollTo(0,0);

/* Particle Background */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let dots = [];
for (let i=0;i<110;i++) {
  dots.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-.5)*.4,
    dy:(Math.random()-.5)*.4
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d=>{
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle="rgba(108,242,255,.55)";
    ctx.fill();
    d.x+=d.dx; d.y+=d.dy;
    if(d.x<0||d.x>canvas.width) d.dx*=-1;
    if(d.y<0||d.y>canvas.height) d.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

/* Scroll Reveal */
const reveals=document.querySelectorAll('.reveal');
const revealOnScroll=()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top<innerHeight-100)
      r.classList.add('active');
  });
};
addEventListener('scroll',revealOnScroll);
revealOnScroll();
