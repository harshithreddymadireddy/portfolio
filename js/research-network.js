/**
 * =========================================================================
 * RESEARCH NETWORK VISUALIZATION (HERO CANVAS - PLEASANT LIGHT MODE)
 * =========================================================================
 * Restrained, slowly evolving scientific graph on a clean, soft canvas.
 * =========================================================================
 */

(function () {
  const canvas = document.getElementById("heroNetworkCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.parentElement.clientWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight || 480);

  // Core Nodes with defined scientific identities and pleasant soft colors
  const nodes = [
    { label: "Mathematical Modeling", short: "Math Modeling", x: 0.22, y: 0.25, vx: 0.0003, vy: 0.0002, r: 5, color: "#0284c7", pulse: 0 },
    { label: "Predictive Cybersecurity", short: "Cybersecurity", x: 0.72, y: 0.22, vx: -0.0002, vy: 0.0003, r: 6, color: "#0d9488", pulse: 1.2 },
    { label: "Machine Learning", short: "Machine Learning", x: 0.48, y: 0.48, vx: 0.0002, vy: -0.0002, r: 6.5, color: "#4f46e5", pulse: 2.4 },
    { label: "Feature Engineering", short: "Feature Selection", x: 0.25, y: 0.74, vx: -0.0002, vy: -0.0002, r: 5, color: "#059669", pulse: 3.6 },
    { label: "Explainable AI (XAI)", short: "Explainable AI", x: 0.76, y: 0.70, vx: 0.0003, vy: -0.0003, r: 5.5, color: "#7c3aed", pulse: 4.8 },
    { label: "Intelligent Systems", short: "Reliable Systems", x: 0.50, y: 0.86, vx: -0.0003, vy: 0.0002, r: 6, color: "#0284c7", pulse: 6.0 }
  ];

  // Specific graph edges representing the research progression
  const edges = [
    [0, 1], // Math Modeling -> Cybersecurity
    [0, 2], // Math Modeling -> Machine Learning
    [1, 2], // Cybersecurity -> Machine Learning
    [2, 3], // Machine Learning -> Feature Engineering
    [2, 4], // Machine Learning -> Explainable AI
    [3, 4], // Feature Engineering -> Explainable AI
    [4, 5], // Explainable AI -> Intelligent Systems
    [1, 5], // Cybersecurity -> Intelligent Systems
    [2, 5]  // Machine Learning -> Intelligent Systems
  ];

  // Subtle data packet particles traveling along edges
  const particles = [];
  for (let i = 0; i < 14; i++) {
    particles.push({
      edgeIndex: i % edges.length,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004
    });
  }

  // Mouse interaction
  let mouse = { x: -1000, y: -1000, active: false };

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight || 480;
  });

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  let lastTime = 0;
  function animate(timestamp) {
    const dt = timestamp - lastTime || 16;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    // Update node positions gently within bounds
    nodes.forEach((n) => {
      n.pulse += 0.02;
      n.x += n.vx;
      n.y += n.vy;

      // Gentle bounds reflection
      if (n.x < 0.12 || n.x > 0.88) n.vx *= -1;
      if (n.y < 0.14 || n.y > 0.88) n.vy *= -1;

      // Subtle mouse repulsion
      if (mouse.active) {
        const px = n.x * width;
        const py = n.y * height;
        const dx = mouse.x - px;
        const dy = mouse.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140 * 0.0004;
          n.x -= dx * force;
          n.y -= dy * force;
        }
      }
    });

    // Draw Edges (Subtle soft slate lines)
    edges.forEach(([i, j]) => {
      const n1 = nodes[i];
      const n2 = nodes[j];
      const x1 = n1.x * width;
      const y1 = n1.y * height;
      const x2 = n2.x * width;
      const y2 = n2.y * height;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(100, 116, 139, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Draw Traveling Data Particles
    particles.forEach((p) => {
      p.progress += p.speed;
      if (p.progress > 1) {
        p.progress = 0;
        p.edgeIndex = Math.floor(Math.random() * edges.length);
      }

      const [i, j] = edges[p.edgeIndex];
      const n1 = nodes[i];
      const n2 = nodes[j];
      const px = n1.x * width + (n2.x * width - n1.x * width) * p.progress;
      const py = n1.y * height + (n2.y * height - n1.y * height) * p.progress;

      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fillStyle = "#0284c7";
      ctx.fill();
    });

    // Draw Nodes and Scientific Labels
    nodes.forEach((n) => {
      const px = n.x * width;
      const py = n.y * height;
      const pulsingRadius = n.r + Math.sin(n.pulse) * 1.2;

      // Outer faint halo
      ctx.beginPath();
      ctx.arc(px, py, pulsingRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(2, 132, 199, 0.08)";
      ctx.fill();

      // Middle node circle
      ctx.beginPath();
      ctx.arc(px, py, pulsingRadius, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();

      // Inner crisp white core
      ctx.beginPath();
      ctx.arc(px, py, n.r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Restrained Monospace Scientific Label (Dark slate, crisp and readable)
      ctx.font = "11.5px 'IBM Plex Mono', monospace";
      ctx.fillStyle = "#1e293b";
      ctx.textAlign = "center";
      ctx.fillText(width < 450 ? n.short : n.label, px, py + n.r + 15);
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
