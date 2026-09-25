/**
 * =========================================================================
 * PERSONAL RESEARCH PORTFOLIO - MAIN COORDINATOR (8 CANONICAL SECTIONS)
 * =========================================================================
 * Compact Digital Research Dossier with Concentrated Scientific Exhibits:
 * 01. Academic Identity (#home)
 * 02. Research Trajectory (#research)
 * 03. Featured Research (#featured-research)
 * 04. Research & Dissemination (#research-output)
 * 05. Experience & Systems (#experience)
 * 06. Education & Distinctions (#education)
 * 07. About & Community (#about)
 * 08. Contact (#contact)
 * =========================================================================
 */

// Ensure manual scroll restoration so reloading starts cleanly at top (01 Academic Identity)
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function initApp() {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found. Please verify js/portfolio-data.js.");
    return;
  }

  // 0. ENSURE FRESH PAGE START AT TOP (01 ACADEMIC IDENTITY) AND SLIDE 1 ON RELOAD
  if (window.location.hash) {
    try {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch (e) {}
  }
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  // 1. RENDER ALL 8 SECTIONS
  renderHome(data.personal, data.selectedResults);
  renderResearchTrajectory(data.researchThemes, data.futureResearchDirections);
  renderFeaturedResearch(data.researchProjects, data.researchSynthesis);
  renderResearchOutput(data.researchOutput);
  renderExperienceAndSystems(data.experience, data.appliedProjects, data.technicalStack);
  renderEducationAndDistinctions(data.education, data.certifications, data.recognition);
  renderAbout(data.about, data.leadership);
  renderFooter(data.personal);

  // 2. INTERACTIVE CONTROLLERS
  initSmoothScrollLinks();
  initDossierScrollspy();
  initScrollReveal();
  initCvModal(data.personal.cvPath);
  initMobileMenu();
  initCopyEmail();
  initStickyResearchContext();

  // 3. TRIGGER RESEARCH EXHIBITS
  if (window.initResearchShowcaseComponents) {
    window.initResearchShowcaseComponents();
  }

  // 4. ICONS
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // 5. DEEP LINKING TO INVESTIGATION
  if (isDeepInv) {
    setTimeout(() => {
      const target = document.getElementById("featured-research");
      if (target) {
        const headerOffset = 90;
        const targetRect = target.getBoundingClientRect();
        const offsetPosition = window.scrollY + targetRect.top - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth"
        });
      }
    }, 150);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Extra safeguards on window load and reload
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    try {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch (e) {}
  }
});

/* =========================================================================
 * SMOOTH SCROLL WITH HEADER OFFSET
 * ========================================================================= */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const targetRect = target.getBoundingClientRect();
        const offsetPosition = window.scrollY + targetRect.top - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth"
        });
        history.pushState(null, null, href);
      }
    });
  });
}

/* =========================================================================
 * 01 — HOME: ACADEMIC IDENTITY & RESEARCH SNAPSHOT
 * ========================================================================= */
function renderHome(personal, selectedResults) {
  document.title = `${personal.name} — ${personal.role}`;

  const nameEls = document.querySelectorAll(".applicant-name");
  nameEls.forEach(el => el.textContent = personal.name);

  const initialsEl = document.getElementById("applicantInitials");
  if (initialsEl && personal.initials) initialsEl.textContent = personal.initials;

  const descriptorEl = document.getElementById("heroDescriptor");
  if (descriptorEl) descriptorEl.textContent = personal.descriptor;

  const roleEl = document.getElementById("heroRole");
  if (roleEl) roleEl.textContent = "AI/ML DEVELOPER & RESEARCHER";

  const headlineEl = document.getElementById("heroHeadline");
  if (headlineEl) headlineEl.textContent = `"${personal.headline}"`;

  // Scholarly lead text and 4 explicit focus areas
  const introEl = document.getElementById("heroIntro");
  if (introEl) {
    introEl.innerHTML = `
      <p class="editorial-lead text-slate-800 mb-4">
        ${personal.intro || 'AI/ML developer and researcher investigating mathematically grounded machine learning, dynamical systems, and explainable intelligent architectures.'}
      </p>
      <div class="flex flex-wrap items-center gap-2 pt-1 pb-1">
        <span class="text-xs font-mono text-slate-500 font-semibold mr-1">Focus Areas:</span>
        ${personal.interests.map(i => `
          <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-50 text-sky-800 shadow-sm border border-sky-100/70">
            ${i}
          </span>
        `).join("")}
      </div>
    `;
  }

  // Selected Research Results: 2 Core Empirical Results (Semantic Colors: Green = 99.255%, Amber = ~53 min)
  const snapshotContainer = document.getElementById("academicSnapshotContainer");
  if (snapshotContainer && selectedResults) {
    const res1 = selectedResults[0] || {
      value: "99.255%",
      label: "2D-Wavelet Intrusion Detection",
      context: "Extra Trees accuracy on 2D Haar wavelet-derived network-flow representations under 10-fold stratified cross-validation."
    };
    const res2 = selectedResults[1] || {
      value: "~53 Min",
      label: "Observed Early-Warning Signal",
      context: "Observed anomalous curvature approximately 3,200 seconds before the observed volumetric peak in the investigated network traffic traces."
    };

    snapshotContainer.innerHTML = `
      <div class="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1 sm:border-r sm:border-slate-100 sm:pr-6">
            <div class="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 tracking-tight">${res1.value}</div>
            <div class="text-xs sm:text-sm font-semibold text-slate-800">${res1.label}</div>
            <div class="text-xs text-slate-500 leading-relaxed">${res1.context}</div>
          </div>
          <div class="space-y-1 sm:pl-6">
            <div class="text-3xl sm:text-4xl font-serif font-bold text-amber-800 tracking-tight">${res2.value}</div>
            <div class="text-xs sm:text-sm font-semibold text-slate-800">${res2.label}</div>
            <div class="text-xs text-slate-500 leading-relaxed">${res2.context}</div>
          </div>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
          <span class="font-medium text-slate-700">${personal.statusLine || 'Preparing for Fall 2027 MS/PhD Applications · Machine Learning & Intelligent Systems'}</span>
          <span class="hidden sm:inline text-slate-400">Undergraduate Research Highlights</span>
        </div>
      </div>
    `;
  }
}

/* =========================================================================
 * 02 — RESEARCH TRAJECTORY: SPLIT LAYOUT (3 SELECTABLE THEMES + FIXED PANEL)
 * ========================================================================= */
function renderResearchTrajectory(themes, futureDirections) {
  const listContainer = document.getElementById("trajectoryThemeList");
  const detailPanel = document.getElementById("trajectoryDetailPanel");
  if (!listContainer || !themes || !detailPanel || !futureDirections) return;

  const exploringMap = [
    ["SHAP feature attribution", "Model reliability evaluation", "Uncertainty quantification", "Robust representations"],
    ["Neural ODEs", "Continuous-time state models", "Dynamical curvature analysis", "Early-warning detection"],
    ["Privacy-preserving learning", "Robust feature representations", "Distributed network monitoring", "Adversarial robustness"]
  ];

  function buildThemeDetailHtml(idx) {
    const t = themes[idx];
    const f = futureDirections[idx];
    const exploring = exploringMap[idx] || [];

    return `
      <div class="space-y-5 flex flex-col justify-between h-full">
        <div class="space-y-4">
          <div class="space-y-1 pb-3 border-b border-slate-100">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
              Theme 0${idx + 1} · ${t.tagline || 'MS/PhD Direction'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-snug">
              ${f.area}
            </h3>
          </div>

          <div class="space-y-1.5">
            <div class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Core Scientific Question</div>
            <p class="font-serif italic text-base sm:text-lg text-slate-900 leading-relaxed">
              "${f.question}"
            </p>
          </div>

          <div class="space-y-1.5">
            <div class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Context & Problem Formulation</div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${t.description}
            </p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 space-y-1.5 mt-auto">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Exploring</div>
          <div class="meta-dot-row text-xs sm:text-sm font-mono text-slate-700">
            ${exploring.map(item => `<span class="meta-dot-item font-medium">${item}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  let activeThemeIdx = 0;

  function showTheme(idx, updateSync = true) {
    activeThemeIdx = idx;
    detailPanel.dataset.activeTheme = idx;
    const t = themes[idx];
    const f = futureDirections[idx];
    const exploring = exploringMap[idx] || [];

    // Render Left Theme Buttons
    listContainer.innerHTML = `
      <div class="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
        Select Research Theme (${idx + 1} of ${themes.length})
      </div>
      ${themes.map((theme, i) => {
        const isActive = (i === idx);
        return `
          <button class="trajectory-theme-btn flex-1 p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${isActive ? 'bg-sky-50/90 border-sky-500 text-sky-950 shadow-sm' : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'}" data-idx="${i}" role="tab" aria-selected="${isActive}" aria-controls="trajectoryDetailPanel" id="themeTab-${i}">
            <div class="space-y-1.5">
              <span class="text-xs font-mono uppercase tracking-wider font-bold ${isActive ? 'text-sky-700' : 'text-slate-400'}">0${i + 1} Theme</span>
              <div class="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">${theme.title}</div>
            </div>
            ${isActive ? `<span class="w-2.5 h-2.5 rounded-full bg-sky-600 shrink-0 ml-3"></span>` : `<span class="w-2.5 h-2.5 rounded-full bg-transparent shrink-0 ml-3"></span>`}
          </button>
        `;
      }).join("")}
    `;

    // Attach click and keyboard events
    const themeBtns = listContainer.querySelectorAll(".trajectory-theme-btn");
    themeBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const nextIdx = parseInt(btn.dataset.idx, 10);
        showTheme(nextIdx);
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const next = (i + 1) % themeBtns.length;
          themeBtns[next].focus();
          showTheme(next);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = (i - 1 + themeBtns.length) % themeBtns.length;
          themeBtns[prev].focus();
          showTheme(prev);
        }
      });
    });

    // Render Right Fixed Detail Panel
    detailPanel.innerHTML = buildThemeDetailHtml(idx);

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function syncThemeDimensions() {
    if (!detailPanel || !themes.length) return;
    detailPanel.style.minHeight = "";
    let maxH = 0;
    const currentIdx = activeThemeIdx;
    for (let i = 0; i < themes.length; i++) {
      detailPanel.innerHTML = buildThemeDetailHtml(i);
      const h = detailPanel.offsetHeight;
      if (h > maxH) maxH = h;
    }
    detailPanel.style.minHeight = `${maxH}px`;
    showTheme(currentIdx, false);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncThemeDimensions, 100);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncThemeDimensions);
  }

  showTheme(0, false);
  syncThemeDimensions();
}

/* =========================================================================
 * 03 — FEATURED RESEARCH: DUAL INVESTIGATION LABORATORY & PERSISTENT CONTROLLER
 * ========================================================================= */
// Centralized research state with position memory across investigations
window.researchState = window.researchState || {
  investigation: 1,
  waveletStage: 0,
  odeStage: "baseline"
};

function getResearchStateFromHash() {
  const h = window.location.hash.toLowerCase();
  let inv = 1;
  let stageIdx = null;

  if (h.includes("investigation-02") || h.includes("wavelet") || h.includes("inv=2")) {
    inv = 2;
  } else if (h.includes("investigation-01") || h.includes("ode") || h.includes("inv=1")) {
    inv = 1;
  }

  // Parse stage parameter or subpath: e.g. stage=2, stage-02, stage-2
  const stageMatch = h.match(/stage[=-]0?([1-4])/);
  if (stageMatch) {
    stageIdx = parseInt(stageMatch[1], 10) - 1;
  } else if (h.includes("baseline")) {
    stageIdx = 0;
  } else if (h.includes("precursor")) {
    stageIdx = 1;
  } else if (h.includes("saturation") || h.includes("peak")) {
    stageIdx = 2;
  }

  return { inv, stageIdx };
}

window.updateResearchUrlHash = function(invNum, stageIdx) {
  // Keep URL clean so page refresh always starts from the first page (01 Academic Identity)
  // and all slides start from slide 1 without browser jumping down to research.
};

function renderFeaturedResearch(projects, synthesis) {
  const container = document.getElementById("featuredResearchContainer");
  if (!container || !projects || projects.length < 2) return;

  const proj1 = projects[0]; // Investigation 01: 2nd-Order ODEs (Continuous Dynamics)
  const proj2 = projects[1]; // Investigation 02: 2D Wavelet IDS (Spatial Representation)

  // ALWAYS initialize cleanly: Investigation 1, Slide 1 for both ODE and Wavelet
  window.researchState = {
    investigation: 1,
    odeStage: 0,
    waveletStage: 0
  };
  let currentInvestigation = 1;

  function selectInvestigation(invNum, targetStage) {
    if (invNum !== currentInvestigation) {
      window.isOdeMathOpen = false;
      window.isWaveletMathOpen = false;
    }
    currentInvestigation = invNum;
    window.researchState.investigation = invNum;

    if (targetStage !== undefined && targetStage !== null) {
      if (invNum === 1) {
        window.researchState.odeStage = (typeof targetStage === "number") ? targetStage : 0;
      } else {
        window.researchState.waveletStage = targetStage;
      }
    }

    const activeStageIdx = (invNum === 1)
      ? (typeof window.researchState.odeStage === "number" ? window.researchState.odeStage : 0)
      : window.researchState.waveletStage;

    window.updateResearchUrlHash(invNum, activeStageIdx);
    renderViewer();

    if (invNum === 1 && window.setupOdeSimulator) {
      window.setupOdeSimulator();
    } else if (invNum === 2 && window.setupWaveletExplorer) {
      window.setupWaveletExplorer();
    }

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }
  window.selectInvestigation = selectInvestigation;

  // Handle browser back/forward navigation
  window.addEventListener("hashchange", () => {
    const { inv, stageIdx } = getResearchStateFromHash();
    if (inv !== currentInvestigation) {
      selectInvestigation(inv, stageIdx);
    } else if (stageIdx !== null) {
      if (inv === 1) {
        if (window.renderOdeStage && stageIdx !== window.researchState.odeStage) {
          window.renderOdeStage(stageIdx, true);
        } else if (window.renderOdeMode) {
          const modeKeys = ["baseline", "precursor", "saturation"];
          const targetMode = modeKeys[stageIdx] || "baseline";
          if (targetMode !== window.researchState.odeStage) {
            window.renderOdeMode(targetMode, true);
          }
        }
      } else if (inv === 2 && window.renderWaveletStage && stageIdx !== window.researchState.waveletStage) {
        window.renderWaveletStage(stageIdx, true);
      }
    }
  });

  function renderViewer() {
    const isOde = (currentInvestigation === 1);
    const isWavelet = (currentInvestigation === 2);
    const currentProj = isOde ? proj1 : proj2;

    container.innerHTML = `
      <!-- Persistent Sticky Research Control Bar (Zero Layout Shift Sticky Anchor) -->
      <div class="sticky-research-bar-wrapper">
        <div id="stickyResearchContext" class="sticky-research-bar py-1.5 px-3 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs font-mono hidden">
          <!-- Left: Investigation Switcher Tabs (Point 3 & Point 7) -->
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider hidden sm:inline">Investigation:</span>
            <div class="inline-flex p-0.5 rounded-xl bg-slate-100/90 border border-slate-200/80 shrink-0 gap-1" role="tablist" aria-label="Sticky Investigation Switcher">
              <!-- Tab 1: ODE -->
              <button id="stickyTabOde" class="px-2.5 py-1 rounded-lg text-left transition cursor-pointer flex flex-col justify-center ${isOde ? 'bg-white text-amber-950 shadow-sm font-semibold ring-2 ring-amber-500' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}" role="tab" aria-selected="${isOde}">
                <div class="flex items-center gap-1.5 text-[11px] font-mono font-bold">
                  <span class="w-1.5 h-1.5 rounded-full ${isOde ? 'bg-amber-600' : 'bg-transparent'}"></span>
                  <span class="${isOde ? 'text-amber-900 font-bold' : 'text-slate-700'}">01 · ODE Early Warning</span>
                </div>
                <div class="pl-3 text-[9px] font-mono ${isOde ? 'text-amber-800 font-bold' : 'text-slate-400 font-medium'}">
                  ~53 min Lead Time
                </div>
              </button>

              <!-- Tab 2: Wavelet -->
              <button id="stickyTabWavelet" class="px-2.5 py-1 rounded-lg text-left transition cursor-pointer flex flex-col justify-center ${isWavelet ? 'bg-white text-sky-950 shadow-sm font-semibold ring-2 ring-sky-500' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}" role="tab" aria-selected="${isWavelet}">
                <div class="flex items-center gap-1.5 text-[11px] font-mono font-bold">
                  <span class="w-1.5 h-1.5 rounded-full ${isWavelet ? 'bg-sky-600' : 'bg-transparent'}"></span>
                  <span class="${isWavelet ? 'text-sky-900 font-bold' : 'text-slate-700'}">02 · Spatial Wavelet IDS</span>
                </div>
                <div class="pl-3 text-[9px] font-mono ${isWavelet ? 'text-emerald-700 font-bold' : 'text-slate-400 font-medium'}">
                  99.255% Accuracy
                </div>
              </button>
            </div>
          </div>

          <!-- Right: Interactive Stage Navigator & Subtle Progress Counter -->
          <div class="flex items-center justify-between md:justify-end gap-2 overflow-x-auto">
            <div class="flex items-center gap-1 shrink-0" id="stickyStageButtons">
              ${isOde ? `
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="0">01 Signals</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="1">02 ODE</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="2">03 Residual</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="3">04 Warning</button>
              ` : `
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="0">01 Features</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="1">02 Matrix</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="2">03 Wavelet</button>
                <button class="sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer" data-stage="3">04 Classification</button>
              `}
            </div>
            <div class="h-3.5 w-[1px] bg-slate-200 shrink-0"></div>
            <span id="stickyStageIndicator" class="font-mono font-bold text-slate-700 text-xs shrink-0 pl-0.5">
              Stage 01 / 04
            </span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- Research Breadcrumbs -->
        <div class="flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-1 flex-wrap">
          <span>Featured Research</span>
          <span class="text-slate-300">/</span>
          <span class="text-slate-700 font-semibold">Investigation 0${currentInvestigation}</span>
          <span class="text-slate-300">/</span>
          <span class="font-semibold ${isOde ? 'text-amber-800' : 'text-sky-800'}">${isOde ? 'Second-Order ODE Early Warning' : 'Spatial 2D-Wavelet Transform'}</span>
        </div>

        <!-- Dedicated Prominent Investigation Switcher ABOVE Research Content -->
        <div id="investigationSelectorSection" class="space-y-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
            <span class="text-slate-500 uppercase tracking-wider font-bold">Select Investigation To Explore</span>
            <span class="text-slate-400">Two Complementary Studies · Proactive Precursor Warning → Spatial Classification</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4" role="tablist" aria-label="Investigation Selection">
            <!-- Card 01: Investigation 01 (ODE) -->
            <button id="invCard1" class="text-left p-5 sm:p-6 rounded-2xl transition-all cursor-pointer border flex flex-col justify-between space-y-4 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${isOde ? 'bg-amber-50/60 border-amber-500 shadow-sm ring-1 ring-amber-400/40' : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/60'}" role="tab" aria-selected="${isOde}">
              <div class="space-y-2.5 w-full">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-xs ${isOde ? 'text-amber-800 bg-amber-100/90' : 'text-slate-500 bg-slate-100'} px-2 py-0.5 rounded">01</span>
                    <span class="text-[11px] font-mono uppercase tracking-wider font-bold ${isOde ? 'text-amber-800' : 'text-slate-500'}">Investigation 01 · Dynamical Early Warning</span>
                  </div>
                  ${isOde ? `
                    <span class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-900 bg-white px-2.5 py-0.5 rounded-full border border-amber-200 shadow-2xs">
                      <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                      VIEWING NOW
                    </span>
                  ` : `
                    <span class="text-[10px] font-mono text-slate-400 font-medium">INSPECT →</span>
                  `}
                </div>

                <h3 class="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                  Second-Order ODE Early Warning for Network Attacks
                </h3>

                <p class="text-xs sm:text-sm font-mono text-slate-600">
                  Can network dynamics reveal an attack before the attack becomes obvious? Modeling benign dynamics to detect precursors.
                </p>
              </div>

              <div class="pt-3 border-t ${isOde ? 'border-amber-200/70' : 'border-slate-100'} flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                <div class="text-xs font-mono font-bold text-amber-800">
                  ~53 min Lead Time · IIT Dhanbad & FTCCI
                </div>
                <div class="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl transition ${isOde ? 'bg-amber-600 text-white shadow-2xs self-start sm:self-auto' : 'bg-slate-100 text-slate-700 self-start sm:self-auto'}">
                  ${isOde ? 'Viewing Investigation 01' : 'Inspect Investigation 01 →'}
                </div>
              </div>
            </button>

            <!-- Card 02: Investigation 02 (Wavelet) -->
            <button id="invCard2" class="text-left p-5 sm:p-6 rounded-2xl transition-all cursor-pointer border flex flex-col justify-between space-y-4 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${isWavelet ? 'bg-sky-50/60 border-sky-500 shadow-sm ring-1 ring-sky-400/40' : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/60'}" role="tab" aria-selected="${isWavelet}">
              <div class="space-y-2.5 w-full">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-xs ${isWavelet ? 'text-sky-700 bg-sky-100/90' : 'text-slate-500 bg-slate-100'} px-2 py-0.5 rounded">02</span>
                    <span class="text-[11px] font-mono uppercase tracking-wider font-bold ${isWavelet ? 'text-sky-800' : 'text-slate-500'}">Investigation 02 · Spatial Representation</span>
                  </div>
                  ${isWavelet ? `
                    <span class="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-sky-800 bg-white px-2.5 py-0.5 rounded-full border border-sky-200 shadow-2xs">
                      <span class="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                      VIEWING NOW
                    </span>
                  ` : `
                    <span class="text-[10px] font-mono text-slate-400 font-medium">INSPECT →</span>
                  `}
                </div>

                <h3 class="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                  Spatial 2D-Wavelet Transform for Network Intrusion Detection
                </h3>

                <p class="text-xs sm:text-sm font-mono text-slate-600">
                  Can spatial-frequency representations improve classification once traffic is observed? 58 features → 8×8 matrix → 2D Haar DWT → Extra Trees.
                </p>
              </div>

              <div class="pt-3 border-t ${isWavelet ? 'border-sky-200/70' : 'border-slate-100'} flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                <div class="text-xs font-mono font-bold text-emerald-700">
                  99.255% Accuracy · INEX 2024 Silver Medal
                </div>
                <div class="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl transition ${isWavelet ? 'bg-sky-600 text-white shadow-2xs self-start sm:self-auto' : 'bg-slate-100 text-slate-700 self-start sm:self-auto'}">
                  ${isWavelet ? 'Viewing Investigation 02' : 'Inspect Investigation 02 →'}
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Selected Investigation Detailed Laboratory Frame -->
        <div id="investigationDetailsFrame" class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6">
          <!-- Active Investigation Header -->
          <div id="activeInvestigationHeader" class="pb-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span id="activeInvestigationWording" class="text-xs font-mono font-bold uppercase tracking-wider ${isOde ? 'text-amber-800' : 'text-sky-800'}">
                Investigation 0${currentInvestigation} · ${isOde ? 'Dynamical Early Warning' : 'Spatial Representation'}
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1 leading-snug">
              ${currentProj.title}
            </h3>
            ${isWavelet ? `
              <p class="text-xs sm:text-sm text-slate-600 mt-2 font-sans leading-relaxed">
                Transforming selected network-flow features into a structured spatial-frequency representation for supervised DDoS/traffic classification.
              </p>
            ` : `
              <p class="text-xs sm:text-sm text-slate-600 mt-2 font-sans leading-relaxed">
                Modeling benign network dynamics with second-order ODEs to establish residual warning thresholds for precursor detection.
              </p>
            `}
          </div>

          <!-- Central Scientific Question Callout -->
          <div class="p-4 rounded-xl ${isOde ? 'bg-amber-50/50 border-l-2 border-amber-600' : 'bg-sky-50/50 border-l-2 border-sky-600'}">
            <div class="text-[11px] font-mono uppercase tracking-wider ${isOde ? 'text-amber-800' : 'text-sky-800'} font-bold mb-0.5">
              Central Scientific Question
            </div>
            <p class="font-serif italic text-sm sm:text-base text-slate-800 leading-relaxed">
              "${currentProj.question}"
            </p>
          </div>

          <!-- Research Pipeline Stage Header -->
          <div class="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-100">
            <span class="text-slate-500 font-bold uppercase tracking-wider">
              Research Pipeline · 4 Stages
            </span>
            <span id="viewerSlideCounter" class="font-bold ${isOde ? 'text-amber-800' : 'text-sky-800'}">
              Stage 01 / 04
            </span>
          </div>

          <!-- Scientific Visualization Screen -->
          <div id="${isOde ? 'odeSimulationScreen' : 'waveletInspectorScreen'}" class="relative w-full p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col justify-start">
            <!-- Rendered dynamically by research-pipeline.js -->
          </div>

          <!-- Evidence Block -->
          <div class="pt-4 border-t border-slate-100 text-xs font-mono space-y-2">
            ${isWavelet ? `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Evidence</span>
                    <span class="text-slate-300">·</span>
                    <span class="text-slate-600 text-[11px]">58 selected features · 2D Haar decomposition · 10-fold stratified evaluation · 10 classifiers evaluated</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs font-mono">
                    <span class="font-semibold text-emerald-700">Result: Extra Trees · 99.255%</span>
                    <span class="text-slate-300">·</span>
                    <span class="text-slate-500">Highest observed across evaluated models</span>
                  </div>
                </div>
              </div>

              <!-- Continuation for Investigation 02: INTERACTIVE RESEARCH SYSTEM for DDoS Detection -->
              <div class="mt-3.5 pt-3.5 border-t border-slate-200/80">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-50/60 to-slate-50 border border-sky-300/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
                  <div class="space-y-1.5 max-w-xl">
                    <div class="flex items-center gap-2">
                      <span class="text-[10px] font-mono uppercase font-bold tracking-wider text-sky-900 bg-sky-200/80 px-2 py-0.5 rounded">
                        Continuation · Interactive Research System
                      </span>
                      <span class="text-slate-300">·</span>
                      <span class="text-[11px] font-mono text-slate-600 font-medium">Spatial 2D-Wavelet IDS (99.255%)</span>
                    </div>

                    <div class="font-serif font-bold text-base sm:text-lg text-slate-900">
                      INTERACTIVE RESEARCH SYSTEM for DDoS Detection
                    </div>

                    <p class="text-xs font-mono text-slate-600 leading-relaxed font-sans">
                      Explore the live interactive system for 2D Haar wavelet spatial decomposition, multi-subband feature mapping (LL, LH, HL, HH), and real-time Extra Trees DDoS classification.
                    </p>
                  </div>

                  <a id="ddosAccessInteractiveBtn" href="https://detect-ddos.onrender.com" target="_blank" rel="noopener noreferrer" class="px-5 py-3 rounded-xl font-mono text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 shrink-0 bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
                    <span>Access Interactive System →</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </a>
                </div>
              </div>
            ` : `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Evidence</span>
                    <span class="text-slate-300">·</span>
                    <span class="text-slate-600 text-[11px]">Flow Packets/s + Flow Bytes/s · first/second-order dynamics · benign ODE identification · residual-based thresholding · ≈53 min lead time</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs font-mono">
                    <span class="font-semibold text-amber-800">Result: Precursor alert ≈53 min prior to volumetric peak</span>
                    <span class="text-slate-300">·</span>
                    <span class="text-slate-500">IIT Dhanbad (DPA-NS 2025) & FTCCI IITEX 2025</span>
                  </div>
                </div>
              </div>

              <!-- Continuation for Investigation 01: INTERACTIVE RESEARCH SYSTEM for EWS -->
              <div class="mt-3.5 pt-3.5 border-t border-slate-200/80">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-50/60 to-slate-50 border border-amber-300/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
                  <div class="space-y-1.5 max-w-xl">
                    <div class="flex items-center gap-2">
                      <span class="text-[10px] font-mono uppercase font-bold tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                        Continuation · Interactive Research System
                      </span>
                      <span class="text-slate-300">·</span>
                      <span class="text-[11px] font-mono text-slate-600 font-medium">ODE Early-Warning Signals (EWS)</span>
                    </div>

                    <div class="font-serif font-bold text-base sm:text-lg text-slate-900">
                      INTERACTIVE RESEARCH SYSTEM for EWS
                    </div>

                    <p class="text-xs font-mono text-slate-600 leading-relaxed font-sans">
                      Explore the live interactive simulation harness for second-order differential equation dynamics, synthetic telemetry injection, and real-time precursor curvature thresholding.
                    </p>
                  </div>

                  <a id="ewsAccessInteractiveBtn" href="https://ddos-ews.onrender.com" target="_blank" rel="noopener noreferrer" class="px-5 py-3 rounded-xl font-mono text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 shrink-0 bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow group focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
                    <span>Access Interactive System →</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </a>
                </div>
              </div>
            `}
          </div>

          <!-- Deliberate Linear Research Transition (Next Investigation CTA) -->
          <div class="mt-6 pt-6 border-t border-slate-200/80">
            <div class="p-5 sm:p-6 rounded-2xl ${isOde ? 'bg-gradient-to-r from-amber-50/60 via-slate-50 to-sky-50/40 border border-amber-200/80' : 'bg-gradient-to-r from-sky-50/60 via-slate-50 to-amber-50/40 border border-sky-200/80'} flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
              <div class="space-y-1.5 max-w-xl">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono uppercase font-bold tracking-wider ${isOde ? 'text-amber-800 bg-amber-100/90' : 'text-sky-800 bg-sky-100/90'} px-2 py-0.5 rounded">
                    ${isOde ? 'Investigation 01 Complete' : 'Investigation 02 Complete'}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-[11px] font-mono text-slate-500 font-medium">
                    ${isOde ? 'Continuous 2nd-Order ODE (~53 min Lead)' : 'Spatial 2D-Wavelet Transform (99.255%)'}
                  </span>
                </div>

                <div class="font-serif font-bold text-base sm:text-lg text-slate-900">
                  ${isOde ? 'Next Investigation: 02 · Spatial 2D-Wavelet IDS' : 'Next Investigation: 01 · ODE Early Warning Signals'}
                </div>

                <p class="text-xs font-mono text-slate-600">
                  ${isOde 
                    ? '58 features → 8×8 spatial matrix → 2D Haar DWT → Extra Trees (99.255% accuracy)' 
                    : 'Continuous dynamics → rate-of-change curvature → observed precursor signal (~53 min lead time)'}
                </p>
              </div>

              <button id="nextInvCtaBtn" class="px-5 py-3 rounded-xl font-mono text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 shrink-0 ${isOde ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow' : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow'}">
                <span>${isOde ? 'Explore Investigation 02 · Spatial Wavelet IDS →' : '← Return to Investigation 01 · ODE Early Warning'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Comparative Research Matrix -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs">
          <div class="flex items-center justify-between text-[11px] font-mono mb-3 border-b border-slate-100 pb-2">
            <span class="text-slate-500 uppercase tracking-wider font-bold">Comparative Research Matrix</span>
            <span class="text-slate-400">Two Complementary Studies · Cross-Investigation Analysis</span>
          </div>
          <table class="w-full text-left text-xs font-sans border-collapse">
            <thead>
              <tr class="text-[10px] font-mono uppercase tracking-wider border-b border-slate-100 text-slate-400">
                <th class="pb-2 pr-3 font-semibold w-1/5">Dimension</th>
                <th class="pb-2 px-3 font-semibold text-amber-800 w-2/5">Investigation 01 · Continuous ODE</th>
                <th class="pb-2 pl-3 font-semibold text-sky-800 w-2/5">Investigation 02 · Spatial Wavelet</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td class="py-2 pr-3 font-mono font-medium text-slate-700">Research Domain</td>
                <td class="py-2 px-3 text-slate-900 font-medium">Continuous dynamics & state acceleration</td>
                <td class="py-2 pl-3 text-slate-900 font-medium">Spatial representation & frequency sub-bands</td>
              </tr>
              <tr>
                <td class="py-2 pr-3 font-mono font-medium text-slate-700">Core Methodology</td>
                <td class="py-2 px-3 text-slate-700">2nd-order ODE rate-of-change curvature formulation</td>
                <td class="py-2 pl-3 text-slate-700">8×8 matrix reshaping + 2D Haar DWT + Extra Trees</td>
              </tr>
              <tr>
                <td class="py-2 pr-3 font-mono font-medium text-slate-700">Input Telemetry</td>
                <td class="py-2 px-3 text-slate-700">Aggregated packet arrival rate y(t)</td>
                <td class="py-2 pl-3 text-slate-700">58 selected bidirectional network-flow attributes</td>
              </tr>
              <tr>
                <td class="py-2 pr-3 font-mono font-medium text-slate-700">Operational Target</td>
                <td class="py-2 px-3 text-slate-700">Early-warning signal before volumetric saturation</td>
                <td class="py-2 pl-3 text-slate-700">High-accuracy multi-class signature classification</td>
              </tr>
              <tr>
                <td class="py-2 pr-3 font-mono font-medium text-slate-700">Key Empirical Result</td>
                <td class="py-2 px-3 font-mono font-bold text-amber-800">~53 min observed lead time (IIT Dhanbad / FTCCI)</td>
                <td class="py-2 pl-3 font-mono font-bold text-emerald-700">99.255% accuracy (INEX 2024 Silver Medal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Integrated Architecture Synthesis -->
        <div class="space-y-4 pt-2">
          <div class="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
            <i data-lucide="git-merge" class="w-4 h-4 text-sky-600"></i>
            <span>${synthesis ? synthesis.headline : "Potential Integrated Architecture"}</span>
            <span class="text-slate-400">·</span>
            <span class="text-slate-500 font-normal lowercase">${synthesis ? synthesis.sublabel : "synthesizing continuous ODEs & spatial wavelets"}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-4xl">
            ${synthesis ? synthesis.summary : ""}
          </p>

          <!-- Unboxed connected flow cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
              <div class="flex items-center justify-between text-[10px] font-mono font-bold text-amber-800">
                <span>01 CONTINUOUS MONITORING</span>
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
              <div class="font-serif font-bold text-sm text-slate-900">Time-Domain Precursor</div>
              <p class="text-xs text-slate-500 leading-relaxed font-sans">Second-order ODE rate-of-change curvature tracking subtle preparatory anomalies.</p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
              <div class="flex items-center justify-between text-[10px] font-mono font-bold text-amber-800">
                <span>02 PRECURSOR TRIGGER</span>
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
              <div class="font-serif font-bold text-sm text-slate-900">Early-Warning Signal</div>
              <p class="text-xs text-slate-500 leading-relaxed font-sans">Inflection alert (~53 min lead time) triggering elevated flow telemetry capture.</p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
              <div class="flex items-center justify-between text-[10px] font-mono font-bold text-sky-800">
                <span>03 SPATIAL TRANSFORMATION</span>
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
              </div>
              <div class="font-serif font-bold text-sm text-slate-900">2D-Wavelet Sub-Bands</div>
              <p class="text-xs text-slate-500 leading-relaxed font-sans">8×8 spatial matrix decomposed into LL, LH, HL, and HH frequency sub-bands.</p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
              <div class="flex items-center justify-between text-[10px] font-mono font-bold text-emerald-800">
                <span>04 CLASSIFIER INFERENCE</span>
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              </div>
              <div class="font-serif font-bold text-sm text-slate-900">Extra Trees (99.255%)</div>
              <p class="text-xs text-slate-500 leading-relaxed font-sans">Supervised classification distinguishing attack signatures from benign flows.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach Switcher Listeners
    const card1 = document.getElementById("invCard1");
    const card2 = document.getElementById("invCard2");
    const stickyTab1 = document.getElementById("stickyTabOde");
    const stickyTab2 = document.getElementById("stickyTabWavelet");
    const nextCta = document.getElementById("nextInvCtaBtn");

    function scrollToInvestigationBox() {
      setTimeout(() => {
        const targetBox = document.getElementById("investigationDetailsFrame");
        if (targetBox) {
          const headerOffset = 64;
          const elementPosition = targetBox.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
          window.scrollTo({
            top: Math.max(0, elementPosition - headerOffset),
            behavior: "smooth"
          });
        }
      }, 40);
    }

    if (card1) card1.onclick = () => {
      selectInvestigation(1);
      scrollToInvestigationBox();
    };
    if (card2) card2.onclick = () => {
      selectInvestigation(2);
      scrollToInvestigationBox();
    };
    if (stickyTab1) stickyTab1.onclick = () => selectInvestigation(1);
    if (stickyTab2) stickyTab2.onclick = () => selectInvestigation(2);

    if (nextCta) {
      nextCta.onclick = () => {
        const nextInv = isOde ? 2 : 1;
        selectInvestigation(nextInv);
        scrollToInvestigationBox();
      };
    }


    // Attach Sticky Stage Button Listeners
    const stickyStageBtns = document.querySelectorAll("#stickyStageButtons .sticky-stage-btn");
    stickyStageBtns.forEach((btn) => {
      btn.onclick = () => {
        const stageIdx = parseInt(btn.dataset.stage, 10);
        if (isOde && window.renderOdeStage) {
          window.renderOdeStage(stageIdx, true);
        } else if (isOde && window.renderOdeMode) {
          window.renderOdeMode(btn.dataset.mode || stageIdx, true);
        } else if (!isOde && window.renderWaveletStage) {
          window.renderWaveletStage(stageIdx, true);
        }
      };
    });

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    if (window.checkStickyResearchContext) {
      window.checkStickyResearchContext();
    }
  }

  renderViewer();
  if (currentInvestigation === 1 && window.setupOdeSimulator) {
    window.setupOdeSimulator();
  } else if (currentInvestigation === 2 && window.setupWaveletExplorer) {
    window.setupWaveletExplorer();
  }
}

/* =========================================================================
 * 04 — INDUSTRY EXPERIENCE & APPLIED SYSTEMS
 * (Unboxed Editorial Experience + Simplified Applied Systems)
 * ========================================================================= */
function renderExperienceAndSystems(experience, appliedProjects, technicalStack) {
  // 1. Industry Experience (Unboxed Editorial Format directly on canvas)
  const expListContainer = document.getElementById("experienceListContainer");
  if (expListContainer && experience) {
    expListContainer.innerHTML = experience.map((exp, idx) => {
      const hasDiagram = exp.hasArchitectureDiagram;

      return `
        <div class="py-6 ${idx !== 0 ? 'border-t border-slate-200/80' : ''} space-y-3.5">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
            <div>
              <h3 class="font-serif font-bold text-2xl text-slate-900">${exp.organization}</h3>
              <div class="text-xs sm:text-sm font-mono text-sky-800 font-semibold mt-0.5">${exp.role}</div>
            </div>
            <div class="text-xs font-mono text-slate-500 font-medium">${exp.period} · ${exp.location || 'Hyderabad, India'}</div>
          </div>

          ${exp.subheading ? `
            <div class="text-xs font-mono font-bold uppercase tracking-wider text-sky-900 pt-0.5">
              ${exp.subheading}
            </div>
          ` : ''}

          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">${exp.description}</p>

          ${hasDiagram ? `
            <!-- Pulse Market Signal & Alert Engine Pipeline Architecture -->
            <div class="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5 my-3 shadow-2xs">
              <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3 border-b border-slate-200/60 pb-1.5 flex items-center justify-between">
                <span>Signal Processing & Real-Time Alert Engine</span>
                <span class="text-slate-500 font-medium">Pipeline Architecture</span>
              </div>
              <div class="flex flex-col items-center max-w-xl mx-auto space-y-2 py-1">
                <!-- Top 3 Parallel Inputs -->
                <div class="grid grid-cols-3 gap-2 sm:gap-4 w-full text-center">
                  <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-center">
                    <span class="text-[10px] sm:text-xs font-mono font-bold text-slate-800">SENTIMENT</span>
                    <span class="text-[9px] sm:text-[10px] font-mono text-slate-500 font-medium">ANALYSIS</span>
                  </div>
                  <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-center">
                    <span class="text-[10px] sm:text-xs font-mono font-bold text-slate-800">CONSENSUS</span>
                    <span class="text-[9px] sm:text-[10px] font-mono text-slate-500 font-medium">ENGINE</span>
                  </div>
                  <div class="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-center">
                    <span class="text-[10px] sm:text-xs font-mono font-bold text-slate-800">RISK</span>
                    <span class="text-[9px] sm:text-[10px] font-mono text-slate-500 font-medium">SCORING</span>
                  </div>
                </div>

                <!-- Flow Connector (Horizontal bus converging to center arrow) -->
                <div class="w-full flex flex-col items-center pt-0.5">
                  <div class="w-2/3 h-2.5 border-b-2 border-x-2 border-slate-300 rounded-b-md"></div>
                  <div class="w-[2px] h-3 bg-slate-300"></div>
                  <i data-lucide="arrow-down" class="w-3.5 h-3.5 text-slate-400 -mt-0.5"></i>
                </div>

                <!-- Middle Converged Node: MARKET SIGNAL -->
                <div class="w-full flex justify-center">
                  <div class="px-5 py-2 rounded-xl bg-sky-50 border border-sky-300/80 text-center shadow-2xs">
                    <span class="text-xs sm:text-sm font-mono font-bold text-sky-900 tracking-wider">MARKET SIGNAL</span>
                  </div>
                </div>

                <!-- Arrow Down -->
                <div class="flex flex-col items-center -my-0.5">
                  <div class="w-[2px] h-2.5 bg-sky-300"></div>
                  <i data-lucide="arrow-down" class="w-3.5 h-3.5 text-sky-600 -mt-0.5"></i>
                </div>

                <!-- Final Output: REAL-TIME ALERT -->
                <div class="w-full flex justify-center">
                  <div class="px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-300/80 text-center shadow-2xs">
                    <span class="text-xs sm:text-sm font-mono font-bold text-emerald-900 tracking-wider">REAL-TIME ALERT</span>
                  </div>
                </div>
              </div>
            </div>
          ` : ''}

          ${exp.metrics ? `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 pb-0.5">
              ${exp.metrics.map(m => `
                <div class="p-3 rounded-xl bg-slate-50/90 border border-slate-200/60 flex flex-col justify-center">
                  <span class="text-base sm:text-lg font-mono font-bold text-slate-900 leading-tight">${m.value}</span>
                  <span class="text-[11px] font-mono text-slate-600 mt-1 leading-snug">${m.label}</span>
                </div>
              `).join("")}
            </div>
          ` : ''}

          ${exp.contributions ? `
            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans pt-1">
              ${exp.contributions.map(c => `
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-600 mt-1 font-bold text-sm leading-none">•</span>
                  <span>${c}</span>
                </li>
              `).join("")}
            </ul>
          ` : ''}

          <div class="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div class="meta-dot-row text-slate-700">
              <span class="font-bold text-slate-900">Scope:</span>
              ${(exp.scope || []).map(item => `<span class="meta-dot-item font-medium text-slate-800">${item}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // 2. Applied Software Engineering Projects: Static Clean Cards (NO CAROUSEL, NO GREEN RESULT BOXES)
  const appliedContainer = document.getElementById("appliedProjectsContainer");
  if (appliedContainer && appliedProjects) {
    appliedContainer.innerHTML = `
      <div class="space-y-5">
        <!-- 2 Clean Applied Projects -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${appliedProjects.map(p => `
            <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
              <div class="space-y-2.5">
                <div class="flex items-center justify-between gap-1">
                  <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold">${p.category}</span>
                  <span class="text-[10px] font-mono text-slate-500 font-semibold">${p.subtitle || 'Production System'}</span>
                </div>
                <h4 class="font-serif font-bold text-xl text-slate-900 leading-snug">${p.title}</h4>
                <div class="space-y-2 text-xs">
                  <div class="p-3 rounded-xl bg-slate-50/80 space-y-0.5 border border-slate-100">
                    <span class="font-mono uppercase tracking-wider text-slate-500 font-bold text-[9px] block">Problem</span>
                    <p class="text-slate-700 leading-relaxed font-sans">${p.problem}</p>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50/80 space-y-0.5 border border-slate-100">
                    <span class="font-mono uppercase tracking-wider text-slate-600 font-bold text-[9px] block">Solution & Approach</span>
                    <p class="text-slate-700 leading-relaxed font-sans">${p.approach}</p>
                  </div>
                </div>
              </div>

              <div class="space-y-2.5 pt-2 border-t border-slate-100">
                <div class="meta-dot-row text-[11px] font-mono text-slate-600">
                  ${(Array.isArray(p.technology) ? p.technology : p.technology.split(",")).map(t => `
                    <span class="meta-dot-item font-medium">${typeof t === 'string' ? t.trim() : t}</span>
                  `).join("")}
                </div>
                <div class="flex items-center justify-between gap-2 text-xs">
                  <span class="text-slate-600 font-sans text-xs">
                    ${p.result}
                  </span>
                  ${p.github ? `
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-700 hover:text-sky-900 shrink-0 transition">
                      <i data-lucide="github" class="w-3.5 h-3.5"></i>
                      <span>Repository →</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- View All Repositories Link -->
        <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <i data-lucide="folder-git-2" class="w-4 h-4 text-sky-600 shrink-0"></i>
              <h4 class="font-serif font-bold text-base sm:text-lg text-slate-900">Research Repositories & Engineering Artifacts</h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              To explore additional software repositories, reproducible benchmarks, and system implementations, visit my GitHub profile.
            </p>
          </div>
          <a href="https://github.com/harshithreddymadireddy?tab=repositories" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200/70 shadow-sm transition shrink-0">
            <i data-lucide="github" class="w-3.5 h-3.5"></i>
            <span>View All Repositories →</span>
          </a>
        </div>
      </div>
    `;
  }

  // 3. Curated Technical Stack
  const stackContainer = document.getElementById("technicalStackContainer");
  if (stackContainer && technicalStack) {
    stackContainer.innerHTML = technicalStack.map(cat => `
      <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2.5">
        <h4 class="font-serif font-bold text-sm text-slate-900 pb-1 flex items-center justify-between border-b border-slate-100">
          <span>${cat.category}</span>
          <span class="text-[10px] font-mono text-slate-400 font-normal">${cat.items.length} tools</span>
        </h4>
        <div class="meta-dot-row text-xs font-mono text-slate-700 pt-1">
          ${cat.items.map(s => `
            <span class="meta-dot-item font-medium">${s}</span>
          `).join("")}
        </div>
      </div>
    `).join("");
  }
}

/* =========================================================================
 * 04 — RESEARCH & DISSEMINATION: STREAMLINED ACADEMIC RECORD TIMELINE
 * ========================================================================= */
function renderResearchOutput(output) {
  const container = document.getElementById("researchOutputContainer");
  if (!container || !output || !output.length) return;

  container.innerHTML = `
    <!-- Streamlined Academic Record Timeline -->
    <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
      <div class="academic-timeline space-y-6">
        ${output.map((p, i) => {
          let badgeColor = "bg-slate-100 text-slate-700 border border-slate-200/70";
          let badgeIcon = "clock";
          if (p.result && p.result.includes("Silver Medal")) {
            badgeColor = "bg-emerald-50 text-emerald-800 border border-emerald-200/70";
            badgeIcon = "award";
          } else if (p.result && p.result.includes("53-Minute")) {
            badgeColor = "bg-amber-50 text-amber-900 border border-amber-200/70";
            badgeIcon = "activity";
          } else if (p.result && p.result.includes("Presentation")) {
            badgeColor = "bg-sky-50 text-sky-800 border border-sky-200/70";
            badgeIcon = "presentation";
          } else if (p.result && p.result.includes("Preparation")) {
            badgeColor = "bg-slate-100 text-slate-700 border border-slate-200/70";
            badgeIcon = "file-edit";
          }

          const venueIcon = (i === 0) ? "award" : (i === 3 ? "file-text" : "presentation");

          return `
            <div class="timeline-milestone pb-6 ${i !== output.length - 1 ? 'border-b border-slate-100' : ''}">
              <div class="timeline-dot">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
              </div>

              <div class="space-y-1.5 pl-2">
                <!-- Meta Row: Year + Short Venue/Category + Recognition Badge -->
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono text-xs font-bold">${p.year}</span>
                    <span class="text-xs font-mono font-bold text-sky-900 uppercase tracking-wider">${p.shortVenue || ''}</span>
                    <span class="text-slate-300 hidden sm:inline">•</span>
                    <span class="text-[11px] font-mono text-slate-500 hidden sm:inline">${p.category}</span>
                  </div>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${badgeColor}">
                    <i data-lucide="${badgeIcon}" class="w-3.5 h-3.5"></i>
                    <span>${p.result}</span>
                  </span>
                </div>

                <!-- Title & Venue -->
                <div>
                  <h4 class="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">${p.title}</h4>
                  <div class="text-xs sm:text-sm text-slate-500 font-serif italic mt-0.5 flex items-center gap-1.5">
                    <i data-lucide="${venueIcon}" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i>
                    <span>${p.venue}</span>
                  </div>
                </div>

                <!-- Direct Academic Record Summary -->
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1 max-w-3xl">
                  ${p.summary}
                </p>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

/* =========================================================================
 * 06 — EDUCATION & DISTINCTIONS
 * (Clean 2x2 Certifications Grid + Scannable Distinctions)
 * ========================================================================= */
function renderEducationAndDistinctions(edu, certs, rec) {
  const eduContainer = document.getElementById("educationContainer");
  if (!eduContainer || !edu) return;

  const distinctions = [
    {
      badge: "International Award",
      badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200/70",
      title: "INEX 2024",
      award: "2nd Place · Silver Medal",
      context: "Indian Innovators Association"
    },
    {
      badge: "National Olympiad",
      badgeColor: "text-indigo-800 bg-indigo-50 border-indigo-100",
      title: "SIPHO Physics Olympiad",
      award: "National Rank 190 · Gold Medal",
      context: "Physical Systems & Mechanics"
    },
    {
      badge: "National Olympiad",
      badgeColor: "text-indigo-800 bg-indigo-50 border-indigo-100",
      title: "SIMO Mathematics Olympiad",
      award: "National Rank 235 · Gold Medal",
      context: "Analytical Problem Solving"
    },
    {
      badge: "University Athletics",
      badgeColor: "text-indigo-800 bg-indigo-50 border-indigo-100",
      title: "University Badminton",
      award: "First Place · Gold Medal",
      context: "Inter-university Doubles Champion"
    },
    {
      badge: "Athletics & Leadership",
      badgeColor: "text-amber-800 bg-amber-50 border-amber-200/70",
      title: "Inter-School Kabaddi",
      award: "First Place · Gold Medal",
      context: "Inter-school Champion · Team Captain"
    },
    {
      badge: "Community & Outreach",
      badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200/70",
      title: "Excellence in Community Service Award",
      award: "Community Service & Outreach · 2026",
      context: "Recognized for sustained community service, educational outreach, and local welfare initiatives."
    }
  ];

  eduContainer.innerHTML = `
    <div class="space-y-5">
      <!-- 1. Formal Undergraduate Degree & Scholastic Record -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <div class="text-xs font-mono text-sky-800 uppercase tracking-wider font-bold">Formal Undergraduate Degree</div>
            <h3 class="font-serif font-bold text-2xl text-slate-900 mt-1">${edu.institution}</h3>
            <div class="text-base text-slate-800 font-medium mt-0.5">${edu.degree}</div>
          </div>
          <div class="sm:text-right space-y-1">
            <span class="inline-block text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
              GPA: ${edu.gpa || edu.metrics}
            </span>
            <div class="text-xs font-mono text-slate-500">${edu.period} • ${edu.location}</div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans">
          <div>
            <span class="font-mono text-slate-500 block text-xs">Graduation & Cumulative Record</span>
            <span class="font-semibold text-slate-900">Bachelor of Technology in Information Technology</span>
          </div>
          <span class="font-mono text-xs font-bold text-sky-800 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-200/60 shrink-0">
            ${edu.graduationDate || 'Graduated May 2025'}
          </span>
        </div>
      </div>

      <!-- 2. Curated Professional Certifications (4 Selected Cards + CV Link) -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <div class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-sky-600"></i>
              <span>Selected Certifications</span>
            </div>
            <span class="text-[10px] font-mono text-sky-800 font-bold px-2 py-0.5 rounded-full bg-sky-100/70">4 Selected Credentials</span>
          </div>
          <button class="view-cv-btn text-xs font-mono font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 transition">
            <span>Additional credentials listed on Academic CV →</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          ${certs ? certs.map(c => `
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-100 flex flex-col justify-between space-y-3 hover:border-sky-200 transition">
              <div>
                <span class="text-[10px] font-mono text-sky-700 font-bold uppercase block tracking-wider">${c.domain || 'Certification'}</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-1 leading-snug font-sans">${c.title || c.name}</h5>
              </div>
              <div class="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200/50 flex items-center justify-between">
                <span>${c.issuer}</span>
                <span class="font-semibold text-slate-700">${c.year}</span>
              </div>
            </div>
          `).join("") : ''}
        </div>
      </div>

      <!-- 3. Distinctions & Achievements (Compact Cards, No Long Descriptions) -->
      <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <div class="text-xs font-mono text-indigo-800 uppercase tracking-wider font-bold flex items-center gap-1.5">
            <i data-lucide="trophy" class="w-4 h-4 text-indigo-600"></i>
            <span>Distinctions & Achievements</span>
          </div>
          <span class="text-xs font-mono text-slate-500">Scholastic, Athletic & Community Distinctions</span>
        </div>

        <div class="distinctions-2x2-grid">
          ${distinctions.map(d => `
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-100 shadow-2xs space-y-2 flex flex-col justify-between hover:border-slate-300 transition">
              <div class="space-y-1">
                <div>
                  <span class="inline-block text-[10px] font-mono font-bold uppercase ${d.badgeColor} px-2.5 py-0.5 rounded-full border">${d.badge}</span>
                </div>
                <h5 class="font-serif font-bold text-base text-slate-900 leading-snug">${d.title}</h5>
                <div class="text-xs sm:text-sm font-mono font-bold text-slate-800">${d.award}</div>
              </div>
              <div class="pt-2 border-t border-slate-200/50 text-[11px] font-mono text-slate-500">
                <span>${d.context}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

/* =========================================================================
 * 07 — ABOUT & COMMUNITY (Narrative & Leadership)
 * ========================================================================= */
function renderAbout(about, lead) {
  // 1. Personal Narrative (Master 4-paragraph narrative)
  const textContainer = document.getElementById("aboutTextContainer");
  if (textContainer) {
    const paragraphs = (about && about.paragraphs) ? about.paragraphs : [
      "My interest in computational problem solving began with competitive mathematics and physics olympiads, where I developed an appreciation for formal mathematical structure and analytical problem solving.",
      "At VNR Vignana Jyothi Institute of Engineering and Technology, this quantitative interest guided two undergraduate research projects: a spatial 2D-wavelet intrusion detection study and a second-order differential-equation investigation of early-warning signals in network traffic.",
      "In industry, I worked on enterprise regulatory AI and cybersecurity at Thermo Fisher Scientific, and AI-driven market intelligence and real-time signal systems at Pulse Platform.",
      "I am preparing for Fall 2027 MS/PhD study focused on mathematically grounded, reliable, and explainable intelligent systems."
    ];

    textContainer.innerHTML = `
      <div class="space-y-4 text-base sm:text-[17px] text-slate-700 leading-relaxed font-sans">
        ${paragraphs.map(p => `<p>${p}</p>`).join("")}
      </div>
    `;
  }

  // 2. Beyond Research Sub-Section (Community Leadership)
  const beyondContainer = document.getElementById("beyondResearchContainer");
  if (beyondContainer && lead) {
    beyondContainer.innerHTML = `
      <div class="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1 border-b border-slate-100">
          <div>
            <h4 class="font-serif font-bold text-lg text-slate-900">${lead.organization}</h4>
            <div class="text-xs font-mono text-sky-800 font-semibold">${lead.role}</div>
          </div>
          <div class="text-xs font-mono text-slate-700 font-semibold px-2.5 py-0.5 rounded-full bg-slate-100">
            ${lead.period}
          </div>
        </div>

        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          ${lead.description || 'Led sustained education and community initiatives across mentorship, healthcare, and environmental programs, mentoring 15 students over four consecutive years, coordinating health camps serving 200+ residents, and mobilizing 20+ volunteers for environmental initiatives.'}
        </p>

        <div class="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <div class="meta-dot-row text-slate-700">
            <span class="font-bold text-slate-900">Scope:</span>
            ${(lead.scope || ['6+ years of service', '15 students mentored', '200+ residents reached']).map(item => `
              <span class="meta-dot-item font-medium text-slate-800">${item}</span>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }
}

/* =========================================================================
 * 08 — FOOTER
 * ========================================================================= */
function renderFooter(personal) {
  const nameEl = document.getElementById("footerName");
  if (nameEl) nameEl.textContent = personal.name;

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* =========================================================================
 * 8-SECTION LEFT-SIDEBAR SCROLLSPY (Proportional Dynamic Timeline Tracking)
 * ========================================================================= */
function initDossierScrollspy() {
  const leftLinks = document.querySelectorAll(".left-flow-link");
  const mobileLinks = document.querySelectorAll(".mobile-flow-link");
  const fillTrack = document.getElementById("railTimelineFill");
  const track = document.querySelector(".rail-timeline-track");
  const timelineContainer = document.querySelector(".rail-timeline-container");
  if (!leftLinks.length) return;

  const sectionIds = Array.from(leftLinks).map(link => link.getAttribute("href").replace("#", ""));
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const markers = Array.from(leftLinks).map(link => link.querySelector(".milestone-marker"));

  let markerCentersInTrack = [];
  let trackHeight = 0;

  function measureMarkers() {
    if (!timelineContainer) return;
    const containerRect = timelineContainer.getBoundingClientRect();
    const trackRect = track ? track.getBoundingClientRect() : containerRect;
    trackHeight = trackRect.height;

    // Dynamically align track to the exact horizontal center of the circle markers
    if (markers.length && markers[0] && track) {
      const markerRect = markers[0].getBoundingClientRect();
      const markerCenterX = (markerRect.left + markerRect.width / 2) - containerRect.left;
      const trackWidth = trackRect.width || 2;
      track.style.left = `${Math.round((markerCenterX - trackWidth / 2) * 10) / 10}px`;
    }

    markerCentersInTrack = markers.map(marker => {
      if (!marker) return 0;
      const r = marker.getBoundingClientRect();
      return (r.top + r.height / 2) - trackRect.top;
    });
  }

  function updateTimeline() {
    if (!sections.length || !markerCentersInTrack.length) return;

    const scrollY = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check if user is scrolled to the absolute bottom of the document
    const isBottom = (scrollY + winHeight >= docHeight - 40);

    let activeIndex = 0;
    let sectionProgress = 0;

    if (isBottom) {
      activeIndex = sections.length - 1;
      sectionProgress = 1.0;
    } else {
      // Viewport-based intersection trigger line: 32% of viewport height or max 220px
      // Ensures the active state switches slightly before the next section fully reaches the top
      const triggerY = Math.min(220, winHeight * 0.32);

      let foundIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          foundIndex = i;
          break;
        }
      }

      if (foundIndex !== -1) {
        activeIndex = foundIndex;
      } else {
        if (sections[0].getBoundingClientRect().top > triggerY) {
          activeIndex = 0;
        } else {
          let minDistance = Infinity;
          for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            const dist = Math.abs(rect.top - triggerY);
            if (dist < minDistance) {
              minDistance = dist;
              activeIndex = i;
            }
          }
        }
      }

      const activeRect = sections[activeIndex].getBoundingClientRect();
      const activeHeight = Math.max(1, activeRect.height);
      sectionProgress = Math.max(0, Math.min(1, (triggerY - activeRect.top) / activeHeight));
    }

    let targetFillY = 0;
    if (activeIndex < sections.length - 1) {
      const t1 = markerCentersInTrack[activeIndex];
      const t2 = markerCentersInTrack[activeIndex + 1];
      targetFillY = t1 + sectionProgress * (t2 - t1);
    } else {
      const t1 = markerCentersInTrack[activeIndex];
      targetFillY = t1 + sectionProgress * (trackHeight - t1);
    }

    if (fillTrack) {
      fillTrack.style.height = `${Math.max(0, targetFillY)}px`;
    }

    leftLinks.forEach((link, idx) => {
      if (idx < activeIndex) {
        link.classList.add("completed");
        link.classList.remove("active");
      } else if (idx === activeIndex) {
        link.classList.add("active");
        link.classList.remove("completed");
      } else {
        link.classList.remove("active", "completed");
      }
    });

    const activeId = sections[activeIndex] ? sections[activeIndex].getAttribute("id") : "";
    // Note: Do not mutate window.location.hash on scroll to prevent browser reload from starting at #research instead of top

    mobileLinks.forEach(link => {
      const targetId = link.getAttribute("href").replace("#", "");
      if (targetId === activeId) {
        link.classList.add("text-sky-700", "font-bold", "bg-sky-50");
      } else {
        link.classList.remove("text-sky-700", "font-bold", "bg-sky-50");
      }
    });
  }

  // Keyboard navigation for sidebar links (Point 22 & Point 26)
  leftLinks.forEach((link, idx) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" && idx < leftLinks.length - 1) {
        e.preventDefault();
        leftLinks[idx + 1].focus();
        leftLinks[idx + 1].click();
      } else if (e.key === "ArrowUp" && idx > 0) {
        e.preventDefault();
        leftLinks[idx - 1].focus();
        leftLinks[idx - 1].click();
      } else if (e.key === "Home") {
        e.preventDefault();
        leftLinks[0].focus();
        leftLinks[0].click();
      } else if (e.key === "End") {
        e.preventDefault();
        leftLinks[leftLinks.length - 1].focus();
        leftLinks[leftLinks.length - 1].click();
      }
    });
  });

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateTimeline();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    measureMarkers();
    updateTimeline();
  }, { passive: true });

  measureMarkers();
  setTimeout(() => {
    measureMarkers();
    updateTimeline();
  }, 80);
}

/* =========================================================================
 * SCROLL REVEAL ANIMATIONS
 * ========================================================================= */
function initScrollReveal() {
  const sections = document.querySelectorAll(".reveal-on-scroll");
  const cards = document.querySelectorAll(".telemetry-hud, .scientific-callout, .scientific-callout-amber");
  
  cards.forEach(card => card.classList.add("stagger-child"));

  // Ensure top sections in view are immediately revealed so user never sees a blank screen
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sec.classList.add("revealed");
      const children = sec.querySelectorAll(".stagger-child");
      children.forEach(c => c.classList.add("revealed"));
    }
  });

  if (!("IntersectionObserver" in window)) {
    sections.forEach(el => el.classList.add("revealed"));
    cards.forEach(el => el.classList.add("revealed"));
    return;
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        const children = entry.target.querySelectorAll(".stagger-child");
        children.forEach((child, idx) => {
          setTimeout(() => {
            child.classList.add("revealed");
          }, 30 + idx * 55);
        });
      }
    });
  }, {
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.01
  });

  sections.forEach(el => sectionObserver.observe(el));
}

/* =========================================================================
 * PERSISTENT CV MODAL & VIEWER
 * ========================================================================= */
function initCvModal(cvPath) {
  const modal = document.getElementById("cvModal");
  const viewBtns = document.querySelectorAll(".view-cv-btn");
  const closeBtns = document.querySelectorAll(".close-cv-btn");

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        if (window.lucide && typeof window.lucide.createIcons === "function") {
          window.lucide.createIcons();
        }
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  }
}

/* =========================================================================
 * MOBILE MENU (Point 27)
 * ========================================================================= */
function initMobileMenu() {
  const btn = document.getElementById("mobileNavToggle");
  const drawer = document.getElementById("mobileNavDrawer");

  if (btn && drawer) {
    btn.addEventListener("click", () => {
      drawer.classList.toggle("hidden");
    });

    drawer.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("click", () => {
        drawer.classList.add("hidden");
      });
    });
  }
}

/* =========================================================================
 * COPY EMAIL INTERACTION (Point 21)
 * ========================================================================= */
function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  const textEl = document.getElementById("copyEmailText");
  const iconEl = document.getElementById("copyEmailIcon");
  if (!btn || !textEl) return;

  const email = "harshithreddymadireddy1@gmail.com";

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    textEl.textContent = "Copied! ✓";
    btn.classList.add("bg-emerald-100", "text-emerald-900");
    if (iconEl) iconEl.setAttribute("data-lucide", "check");
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    setTimeout(() => {
      textEl.textContent = "Copy Email";
      btn.classList.remove("bg-emerald-100", "text-emerald-900");
      if (iconEl) iconEl.setAttribute("data-lucide", "copy");
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }, 2500);
  });
}

/* =========================================================================
 * PERSISTENT STICKY RESEARCH CONTEXT (Point 2 & Point 24)
 * ========================================================================= */
function initStickyResearchContext() {
  const section = document.getElementById("featured-research");
  if (!section) return;

  function checkSticky() {
    const stickyBar = document.getElementById("stickyResearchContext");
    if (!stickyBar) return;
    const wordingEl = document.getElementById("activeInvestigationWording");
    if (!wordingEl) return;

    const sectionRect = section.getBoundingClientRect();
    const wordingRect = wordingEl.getBoundingClientRect();

    // The floating bar is visible at exactly after crossing the investigation wording above
    // (wording scrolls beneath the top header at ~64px). Disappears when wording is back in view or section leaves.
    if (wordingRect.bottom <= 64 && sectionRect.bottom > 135) {
      stickyBar.classList.remove("hidden");
    } else {
      stickyBar.classList.add("hidden");
    }
  }

  window.addEventListener("scroll", checkSticky, { passive: true });
  window.checkStickyResearchContext = checkSticky;
  checkSticky();
}

