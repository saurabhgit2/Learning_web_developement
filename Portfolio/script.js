// ============================================
// DATA — projects pulled from the GitHub profile
// ============================================
const repos = [
  {
    name: "saurabhgit2.githhub.io",
    desc: "The portfolio site itself — the meta-project. Where the GitHub-page version of this profile lives.",
    lang: "HTML",
    color: "#e34c26",
    tag: "portfolio"
  },
  {
    name: "demo_portfolio",
    desc: "An earlier draft portfolio used to test layout ideas before committing to a final version.",
    lang: "HTML",
    color: "#e34c26",
    tag: "draft"
  },
  {
    name: "CRS_a_newApproach",
    desc: "A hands-on attempt to learn object-oriented programming by applying OOP concepts to a real, structured project.",
    lang: "Python",
    color: "#3572A5",
    tag: "learning"
  },
  {
    name: "DiceGamePython",
    desc: "A small dice game built to practice Python fundamentals while getting comfortable with Git workflows.",
    lang: "Python",
    color: "#3572A5",
    tag: "practice"
  },
  {
    name: "localtogithub",
    desc: "A practical exercise in taking local code and properly pushing it up to a remote GitHub repository.",
    lang: "Python",
    color: "#3572A5",
    tag: "git workflow"
  },
  {
    name: "LearnGithub",
    desc: "The very first repo — where Git and GitHub fundamentals were learned by doing rather than just reading docs.",
    lang: "Python",
    color: "#3572A5",
    tag: "fundamentals"
  }
];

// ============================================
// RENDER REPO CARDS
// ============================================
function renderRepos() {
  const grid = document.getElementById("repoGrid");
  grid.innerHTML = repos.map(r => `
    <a class="repo-card reveal" href="https://github.com/saurabhgit2/${r.name}" target="_blank" rel="noopener">
      <div class="repo-head">
        <span class="repo-name">${r.name}</span>
        <svg class="repo-icon" viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.55-1.16a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
        </svg>
      </div>
      <p class="repo-desc">${r.desc}</p>
      <div class="repo-meta">
        <span><span class="lang-dot" style="background:${r.color}"></span>${r.lang}</span>
        <span>#${r.tag}</span>
      </div>
    </a>
  `).join("");
}

// ============================================
// CONTRIBUTION GRAPH (signature hero element)
// ============================================
function renderGraph() {
  const grid = document.getElementById("contribGrid");
  const cellCount = window.innerWidth < 700 ? 12 * 9 : 18 * 9;
  let html = "";
  for (let i = 0; i < cellCount; i++) {
    const r = Math.random();
    let level = "";
    if (r > 0.93) level = "l4";
    else if (r > 0.82) level = "l3";
    else if (r > 0.65) level = "l2";
    else if (r > 0.45) level = "l1";
    const delay = (i * 6) % 900;
    html += `<div class="graph-cell ${level}" style="animation-delay:${delay}ms"></div>`;
  }
  grid.innerHTML = html;
}

// ============================================
// NAV: scroll state + mobile toggle
// ============================================
const navEl = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("[data-nav]").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .about-copy, .about-terminal, .skill-card, .contact-card");
  targets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // trigger skill bars when their card appears
        const bars = entry.target.querySelectorAll(".bar-fill");
        bars.forEach(b => b.classList.add("animate"));

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
}

// ============================================
// INIT
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();
renderRepos();
renderGraph();
initReveal();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderGraph, 300);
});