// ============================================================
//  Header scroll effect
// ============================================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============================================================
//  Menu mobile
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
    });
});

document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
    }
});

// ============================================================
//  Particle network — canvas hero background
// ============================================================
(function () {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const ACCENT    = '0, 212, 255';
    const COUNT     = 55;
    const MAX_DIST  = 140;

    let particles = [];
    let W, H;

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    class Dot {
        constructor() { this.init(); }
        init() {
            this.x  = Math.random() * W;
            this.y  = Math.random() * H;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.r  = Math.random() * 1.4 + 0.4;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > W) this.vx *= -1;
            if (this.y < 0 || this.y > H) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${ACCENT}, 0.55)`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = Array.from({ length: COUNT }, () => new Dot());
    }

    function frame() {
        ctx.clearRect(0, 0, W, H);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx   = particles[i].x - particles[j].x;
                const dy   = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${ACCENT}, ${0.14 * (1 - dist / MAX_DIST)})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(frame);
    }

    window.addEventListener('resize', () => {
        resize();
        particles.forEach(p => p.init());
    }, { passive: true });

    init();
    frame();
})();

// ============================================================
//  Scroll reveal — fade-in suave com stagger por grupo
// ============================================================
(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    function observeStaggered(selector, delayStep) {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.style.transitionDelay = `${i * delayStep}s`;
            observer.observe(el);
        });
    }

    observeStaggered('.challenge-item.reveal', 0.07);
    observeStaggered('.method-step.reveal',    0.08);
    observeStaggered('.service-card.reveal',   0.08);

    // Elementos individuais sem stagger
    document.querySelectorAll('.reveal:not(.challenge-item):not(.method-step):not(.service-card)')
        .forEach(el => observer.observe(el));
})();

// ============================================================
//  KPI counters — animate numbers in the dashboard
// ============================================================
(function () {
    const DURATION = 1800;

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function animateCounter(el) {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const isFloat = !Number.isInteger(target);
        const start = performance.now();

        function tick(now) {
            const elapsed  = now - start;
            const progress = Math.min(elapsed / DURATION, 1);
            const value    = target * easeOutCubic(progress);
            el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    const counters = document.querySelectorAll('.dash-kpi__val[data-target]');
    if (!counters.length) return;

    // Trigger when the dashboard card enters the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(animateCounter);
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const card = document.querySelector('.dash-card');
    if (card) observer.observe(card);
})();

// ============================================================
//  3D tilt hover — service cards & challenge cards
// ============================================================
(function () {
    const TILT = 8;

    document.querySelectorAll('.service-card, .challenge-item').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transition = 'transform 0.1s ease';
            card.style.transform =
                `perspective(700px) rotateX(${(-y * TILT).toFixed(2)}deg) rotateY(${(x * TILT).toFixed(2)}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.45s ease';
            card.style.transform = '';
        });
    });
})();
