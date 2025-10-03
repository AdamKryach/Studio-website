// Typing effect for hero heading
const typingText = document.querySelector('.typing-text');
const phrases = ['Welcome to Foreverglow Studio', 'Innovate. Play. Create.', 'Games with a Neon Soul.'];
let phraseIndex = 0;
let charIndex = 0;
const typingDelay = 120;
const erasingDelay = 60;
const pauseDelay = 2000;

function type() {
  if(charIndex < phrases[phraseIndex].length) {
    typingText.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, pauseDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    typingText.textContent = phrases[phraseIndex].substring(0, charIndex -1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if(phrases.length) setTimeout(type, typingDelay);
});

// Simple particle background
const canvas = document.getElementById('particles-js');
const ctx = canvas.getContext('2d');
let particlesArray = [];

function initParticles() {
  particlesArray = [];
  const numberOfParticles = Math.floor(window.innerWidth / 10);
  for(let i=0; i < numberOfParticles; i++) {
    particlesArray.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(80, 250, 123, 0.7)';
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x > canvas.width) p.x = 0;
    if(p.x < 0) p.x = canvas.width;
    if(p.y > canvas.height) p.y = 0;
    if(p.y < 0) p.y = canvas.height;
  });
  requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
animateParticles();
