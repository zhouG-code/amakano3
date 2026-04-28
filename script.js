// ═══════════════════════════════════════════════════════════
//  甜蜜女友3 — アマカノ３ Fan Site
//  交互脚本：花瓣粒子 · 导航 · 滚动揭示 · 3D倾斜 · 灯箱
// ═══════════════════════════════════════════════════════════

// ── Cherry Blossom Particles ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let petals = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  // 重新生成花瓣以适应新尺寸
  petals.forEach(p => p.reset(true));
}

class Petal {
  constructor() {
    this.reset(true);
  }
  reset(init = false) {
    this.x = Math.random() * w;
    this.y = init ? Math.random() * h : -30;
    this.size = Math.random() * 9 + 5;
    this.speedY = Math.random() * 1.0 + 0.3;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.018;
    // 浅色背景下加深花瓣颜色，提高可见度
    this.opacity = Math.random() * 0.35 + 0.2;
    const colors = ['#E8788A', '#F0A0B0', '#E898A0', '#F4B8C1', '#D4808A', '#EAA0AF'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.008) * 0.25;
    this.rotation += this.rotSpeed;
    if (this.y > h + 40) this.reset();
    if (this.x < -30) this.x = w + 30;
    if (this.x > w + 30) this.x = -30;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    // 花瓣主体
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // 花瓣高光
    ctx.fillStyle = '#FFF';
    ctx.globalAlpha = this.opacity * 0.5;
    ctx.beginPath();
    ctx.ellipse(this.size * 0.12, -this.size * 0.08, this.size * 0.22, this.size * 0.1, 0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// 80 瓣樱花，浅色主题下加深颜色提高可见度
for (let i = 0; i < 80; i++) petals.push(new Petal());

function animate() {
  ctx.clearRect(0, 0, w, h);
  petals.forEach(p => { p.update(); p.draw(ctx); });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', resize);

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Heroine card 3D tilt ──
document.querySelectorAll('.heroine-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const avatar = card.querySelector('.heroine-avatar');
    const info = card.querySelector('.heroine-info');
    if (avatar) {
      avatar.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg) translateZ(6px)`;
    }
    if (info) {
      info.style.transform = `translateX(${x * 3}px) translateY(${y * 3}px)`;
    }
  });
  card.addEventListener('mouseleave', () => {
    const avatar = card.querySelector('.heroine-avatar');
    const info = card.querySelector('.heroine-info');
    if (avatar) avatar.style.transform = '';
    if (info) info.style.transform = '';
  });
});

// ── Gallery: 随机选取画廊图片 ──
(function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const displayCount = 18;
  const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

  const galleryDir = 'web_images/gallery/';
  const knownFiles = [
    '蕾蒂1.png', '蕾蒂2.png', '蕾蒂3.png', '蕾蒂4.png',
    '全1.png', '全2.png', '全3.png', '全4.png',
    '叶梦1.png', '叶梦2.png', '叶梦3.png',
    '诗梦.png', '诗梦2.jpg'
  ];

  // Fisher-Yates 洗牌
  const shuffled = [...knownFiles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = shuffled.slice(0, displayCount);

  selected.forEach((file, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal ' + (delays[i % delays.length] || '');
    const img = document.createElement('img');
    img.src = galleryDir + file;
    img.alt = 'アマカノ３ Gallery ' + (i + 1);
    img.loading = 'lazy';
    item.appendChild(img);
    grid.appendChild(item);
  });

  // 重新观测新生成的 .reveal 元素
  document.querySelectorAll('.gallery-item.reveal').forEach(el => observer.observe(el));
})();

// ── Gallery lightbox (事件委托) ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.getElementById('galleryGrid').addEventListener('click', (e) => {
  const img = e.target.closest('.gallery-item')?.querySelector('img');
  if (!img) return;
  lightboxImg.src = img.src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Video: 进入视野自动播放（静音），用户可通过控制器取消静音 ──
const promoVideo = document.getElementById('promoVideo');
if (promoVideo) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        promoVideo.play().catch(() => {});
      } else {
        promoVideo.pause();
      }
    });
  }, { threshold: 0.3 });
  videoObserver.observe(promoVideo);
}
