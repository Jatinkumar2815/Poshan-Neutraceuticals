// main.js
(function () {

  // --- Reveal on scroll (Intersection Observer) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
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