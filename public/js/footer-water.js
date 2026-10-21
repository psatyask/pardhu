
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("liquidFooter");
  const canvas = document.getElementById("footerWaterCanvas");

  if (!footer || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let width = 0;
  let height = 0;
  let ripples = [];
  let animationId = null;
  let lastX = -1000;
  let lastY = -1000;

  function resizeCanvas() {
    const rect = footer.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createRipple(x, y, strength = 1) {
    ripples.push({
      x,
      y,
      radius: 0,
      opacity: 0.55 * strength,
      speed: 2.2,
      strength
    });

    if (ripples.length > 35) {
      ripples.shift();
    }

    if (animationId === null) {
      animationId = requestAnimationFrame(animate);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const darkMode =
      document.documentElement.dataset.theme === "dark";

    const color = darkMode
      ? "52, 211, 153"
      : "5, 150, 105";

    ripples = ripples.filter(ripple => ripple.opacity > 0.005);

    ripples.forEach(ripple => {
      ripple.radius += ripple.speed;
      ripple.opacity *= 0.965;

      // Multiple concentric water waves
      for (let i = 0; i < 3; i++) {
        const radius = ripple.radius + i * 13;

        ctx.beginPath();
        ctx.ellipse(
          ripple.x,
          ripple.y,
          radius,
          radius * 0.65,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(${color}, ${ripple.opacity / (i + 1)})`;

        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // Soft liquid glow
      const glow = ctx.createRadialGradient(
        ripple.x,
        ripple.y,
        0,
        ripple.x,
        ripple.y,
        ripple.radius + 25
      );

      glow.addColorStop(
        0,
        `rgba(${color}, ${ripple.opacity * 0.14})`
      );

      glow.addColorStop(
        1,
        `rgba(${color}, 0)`
      );

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(
        ripple.x,
        ripple.y,
        ripple.radius + 25,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });

    if (ripples.length > 0) {
      animationId = requestAnimationFrame(animate);
    } else {
      animationId = null;
    }
  }

  footer.addEventListener("pointermove", event => {
    if (reduceMotion.matches) return;

    const rect = footer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (Math.hypot(x - lastX, y - lastY) > 12) {
      createRipple(x, y);
      lastX = x;
      lastY = y;
    }
  });

  footer.addEventListener("pointerdown", event => {
    if (reduceMotion.matches) return;

    const rect = footer.getBoundingClientRect();

    createRipple(
      event.clientX - rect.left,
      event.clientY - rect.top,
      1.5
    );
  });

  function stopAnimation() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    ripples = [];
    ctx.clearRect(0, 0, width, height);
  }

  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches) stopAnimation();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAnimation();
  });

  const observer = new ResizeObserver(resizeCanvas);
  observer.observe(footer);

  resizeCanvas();
});
