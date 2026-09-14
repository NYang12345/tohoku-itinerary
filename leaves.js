(function () {
  "use strict";

  const container = document.getElementById("leaves");
  if (!container) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return; // respect accessibility preference: no decorative motion

  const LEAF_COLORS = ["#8C2A1F", "#C79A47", "#C0492C"]; // maroon, gold, burnt — same palette as the UI
  const LEAF_COUNT = 13;
  const SVG_NS = "http://www.w3.org/2000/svg";

  // A simple teardrop leaf silhouette with a center vein, authored once and
  // reused with randomized size/color/motion so every leaf reads as the
  // same drawn mark rather than relying on inconsistent emoji rendering.
  const LEAF_FILL_PATH = "M12 2.2C7.5 6 4.3 9.8 4.3 14a7.7 7.7 0 0 0 15.4 0c0-4.2-3.2-8-7.7-11.8z";
  const LEAF_VEIN_PATH = "M12 5.5V20";

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < LEAF_COUNT; i++) {
    const wrap = document.createElement("span");
    wrap.className = "leaf";

    const startLeft = randomBetween(0, 100); // vw
    const duration = randomBetween(10, 19); // seconds to fall
    const delay = randomBetween(-19, 0); // negative delay: mid-fall on load
    const size = randomBetween(14, 24); // px
    const drift = randomBetween(-60, 60); // px horizontal sway
    const spin = randomBetween(160, 480); // deg rotation over the fall
    const opacity = randomBetween(0.4, 0.75);
    const color = LEAF_COLORS[i % LEAF_COLORS.length];

    wrap.style.left = startLeft + "vw";
    wrap.style.opacity = opacity;
    wrap.style.animationDuration = duration + "s";
    wrap.style.animationDelay = delay + "s";
    wrap.style.setProperty("--drift", drift + "px");
    wrap.style.setProperty("--spin", spin + "deg");

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", String(size));
    svg.setAttribute("height", String(size));
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", LEAF_FILL_PATH);
    path.setAttribute("fill", color);

    const vein = document.createElementNS(SVG_NS, "path");
    vein.setAttribute("d", LEAF_VEIN_PATH);
    vein.setAttribute("stroke", "rgba(255,255,255,0.35)");
    vein.setAttribute("stroke-width", "1");
    vein.setAttribute("fill", "none");

    svg.appendChild(path);
    svg.appendChild(vein);
    wrap.appendChild(svg);
    container.appendChild(wrap);
  }
})();
