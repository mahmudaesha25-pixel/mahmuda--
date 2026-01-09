/* Background particles */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.4,
        vy: Math.random() * 0.4
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = "#6cf2ff";

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x,p.y,1.4,0,Math.PI*2);
        ctx.stroke();
    });

    requestAnimationFrame(animate);
}
animate();

/* Project toggle */
function toggleProject(el) {
    el.parentElement.classList.toggle("active");
}

/* Certificate lightbox */
document.querySelectorAll('.cert-lightbox').forEach(link => {
    link.onclick = e => {
        e.preventDefault();
        const o = document.createElement('div');
        o.className = 'lightbox-overlay show';
        const i = document.createElement('img');
        i.src = link.href;
        o.appendChild(i);
        document.body.appendChild(o);
        o.onclick = () => o.remove();
    };
});
