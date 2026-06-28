// main.js — original liquid-gold 2D canvas + page scripts
(function () {
  // Liquid-gold 2D canvas background (not copied from public sources)
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Create a field of particles that follow a smooth procedural flow
    const PARTICLE_COUNT = Math.max(60, Math.floor((W * H) / 8000));
    const particles = [];

    function rand(min, max) { return min + Math.random() * (max - min); }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: 0,
        vy: 0,
        size: rand(6, 30) * (window.devicePixelRatio || 1),
        life: rand(60, 240)
      });
    }

    // Smooth pseudo-flow function built from sines/cosines (original)
    function flowAngle(x, y, t) {
      // combine a few different wave frequencies and phase shifts
      const a = Math.sin((x * 0.0012) + (t * 0.0009));
      const b = Math.cos((y * 0.0016) - (t * 0.0011));
      const c = Math.sin((x + y) * 0.0009 + Math.cos(t * 0.0007));
      // mix and scale to angle
      return (a * 0.6 + b * 0.4 + c * 0.2) * Math.PI * 1.8;
    }

    // Draw a soft gold glow for a particle
    function drawParticle(p, alphaMul) {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      // layered gold tones
      g.addColorStop(0, `rgba(255, 245, 210, ${0.95 * alphaMul})`);
      g.addColorStop(0.4, `rgba(217, 171, 66, ${0.6 * alphaMul})`);
      g.addColorStop(0.8, `rgba(120, 80, 20, ${0.15 * alphaMul})`);
      g.addColorStop(1, `rgba(0,0,0,0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    let lastTime = performance.now();
    function animate(time) {
      const dt = Math.min(40, time - lastTime);
      lastTime = time;

      // subtle clear with low alpha to create trailing
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(8,12,6,0.12)';
      ctx.fillRect(0, 0, W, H);

      // render particles with additive blending
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const t = time;
        const angle = flowAngle(p.x, p.y, t);
        // velocity follows the procedural flow + a gentle radial push
        const speed = (0.02 + (p.size / 1200)) * (dt);
        p.vx += Math.cos(angle) * speed * 0.5;
        p.vy += Math.sin(angle) * speed * 0.5;
        // gentle damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // life and subtle pulsing
        p.life -= dt * 0.02;
        if (p.life <= 0) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.vx = p.vy = 0;
          p.life = rand(120, 400);
        }

        // wrap edges smoothly
        if (p.x < -p.size) p.x = W + p.size;
        if (p.x > W + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = H + p.size;
        if (p.y > H + p.size) p.y = -p.size;

        // alpha based on life and size
        const alpha = Math.max(0.06, Math.min(1, (p.life / 400) * 1.2));
        drawParticle(p, alpha);
      }

      // draw subtle highlights: moving golden streaks
      ctx.globalCompositeOperation = 'lighter';
      if (Math.random() < 0.02) {
        const sx = Math.random() * W;
        const sy = Math.random() * H;
        const lx = sx + (Math.random() - 0.5) * 300;
        const ly = sy + (Math.random() - 0.5) * 300;
        const grad = ctx.createLinearGradient(sx, sy, lx, ly);
        grad.addColorStop(0, 'rgba(255, 245, 210, 0.14)');
        grad.addColorStop(0.5, 'rgba(245, 200, 80, 0.08)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse((sx + lx) / 2, (sy + ly) / 2, Math.abs(lx - sx), Math.abs(ly - sy), Math.random() * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // --- Cellular floating particles (kept as DOM layer) ---
  (function () {
    const container = document.getElementById('cellular-particles');
    if (!container) return;
    // clear any existing children
    container.innerHTML = '';
    const count = 36;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'absolute bg-secondary-fixed/30 rounded-full blur-[1px]';
      const size = Math.random() * 6 + 2;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = Math.random() * 100 + '%';
      el.style.top = Math.random() * 100 + '%';
      // animate using Web Animations API
      const dx = (Math.random() - 0.5) * 200;
      const dy = - (Math.random() * 300 + 50);
      el.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 0.22 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0 }
      ], {
        duration: Math.random() * 7000 + 5000,
        iterations: Infinity,
        delay: Math.random() * 3000
      });
      container.appendChild(el);
    }
  })();

  // --- Reveal on scroll (Intersection Observer) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // --- Countdown (real-time 3-day timer) ---
  (function () {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    if (!daysEl || !hoursEl || !minsEl) return;

    const target = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
      const now = new Date();
      let diff = target - now;
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      diff -= days * 24 * 60 * 60 * 1000;
      const hours = Math.floor(diff / (60 * 60 * 1000));
      diff -= hours * 60 * 60 * 1000;
      const mins = Math.floor(diff / (60 * 1000));

      daysEl.innerText = String(days).padStart(2, '0');
      hoursEl.innerText = String(hours).padStart(2, '0');
      minsEl.innerText = String(mins).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  })();

})();