/**
 * =========================================================================
 * THE RESEARCH SHOWCASE: DUAL-EXHIBIT INTERACTIVE SCIENTIFIC CONTROLLER
 * =========================================================================
 * Visual, creative, and engaging interactive deep dive into Harshith Reddy's
 * two academic research projects:
 * 1. 2D Wavelet Transform Spatial IDS (INEX 2024 Silver Medal, 99.255% Accuracy)
 * 2. Early Warning System via 2nd-Order ODEs (~53 min Lead Time, Conferences)
 * =========================================================================
 */

(function () {
  // Expose global component initializer and setup functions for main.js
  window.setupWaveletExplorer = setupWaveletExplorer;
  window.setupOdeSimulator = setupOdeSimulator;
  window.initResearchShowcaseComponents = function () {
    setupWaveletExplorer();
    setupOdeSimulator();
  };

  function initScreens() {
    if (document.getElementById("waveletInspectorScreen") || document.getElementById("odeSimulationScreen")) {
      window.initResearchShowcaseComponents();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScreens);
  } else {
    initScreens();
  }

  /* =========================================================================
   * EXHIBIT 1: WAVELET GRAPHICAL TRANSFORMATION PIPELINE
   * Pipeline: 58-Feature Vector -> 8×8 Spatial Matrix -> 2D-DWT Sub-Bands -> Extra Trees (99.255%)
   * ========================================================================= */
  const waveletStages = [
    {
      stage: "01",
      stepName: "58 Selected Features",
      stageLabel: "Stage 01 · Feature Selection",
      title: "58 Selected Network-Flow Features",
      mathContext: "Information-Theoretic Feature Selection",
      mathRole: "Feature Selection",
      renderedEquation: "x = [x₁, x₂, ..., x₅₈]ᵀ ∈ ℝ⁵⁸  s.t.  I(xₖ ; Y) ≥ θ_MI  and  Var(xₖ) > 0",
      desc: "Network-flow telemetry was preprocessed to remove non-informative attributes. Variance thresholding and mutual information selected 58 features for spatial representation.",
      outcomeText: "58 selected features retained.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">RAW FLOW TELEMETRY</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">PREPROCESSING</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">FEATURE SELECTION</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border-2 border-sky-400 text-sky-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>58 SELECTED FEATURES</span>
        </div>
      `,
      variables: [
        { symbol: "x ∈ ℝ⁵⁸", definition: "Distilled flow telemetry vector", meaning: "58 selected attributes (inter-arrival time moments, packet size distributions, TCP flag ratios)" },
        { symbol: "I(xₖ ; Y)", definition: "Mutual information criterion", meaning: "Quantifies statistical dependence between candidate feature xₖ and ground-truth traffic class Y" },
        { symbol: "θ_MI", definition: "Information cutoff threshold", meaning: "Information-theoretic boundary filtering noise and redundant telemetry channels" }
      ],
      leftBadge: `
        <div class="p-1 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-[10.5px] font-mono text-slate-700 flex items-center justify-between">
          <span><strong class="text-sky-950">Criterion:</strong> Mutual Information (I ≥ θ_MI)</span>
          <span class="text-sky-800 font-bold">58 Channels</span>
        </div>
      `,
      visual: `
        <div class="h-[145px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/70">
          <div class="flex justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1">
            <span>1×58 Selected Feature Vector</span>
            <span class="text-sky-700 font-bold">58 Selected Attributes</span>
          </div>
          <div class="grid grid-cols-4 gap-1 text-[9.5px] text-center my-auto">
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Flow_Duration</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Tot_Fwd_Pkts</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Fwd_IAT_Mean</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Bwd_IAT_Std</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Pkt_Len_Var</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">SYN_Flag_Cnt</span>
            <span class="p-1 rounded bg-sky-50 text-sky-800 font-semibold border border-sky-100/80 truncate">Down_Up_Ratio</span>
            <span class="p-1 rounded bg-slate-100 text-slate-600 border border-slate-200/70 truncate">+51 Attributes</span>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1 flex items-center justify-between">
            <span>Variance thresholding + Mutual Information</span>
            <span class="text-sky-700 font-mono font-semibold">1×58 ℝ-Vector</span>
          </div>
        </div>
      `
    },
    {
      stage: "02",
      stepName: "8×8 Representation",
      stageLabel: "Stage 02 · Spatial Mapping",
      title: "58 Features → 8×8 Spatial Matrix",
      mathContext: "Dyadic Spatial Topology Mapping",
      mathRole: "Structural Reshaping",
      renderedEquation: "M ∈ ℝ⁸ˣ⁸,  where  M_{i, j} = x̃_{(i-1)·8 + j},  x̃ = [xᵀ, x₁, ..., x₆]ᵀ ∈ ℝ⁶⁴",
      desc: "The 58 selected features were extended to 64 elements by appending the first six features, then reshaped into an 8×8 matrix for the applied 2D Haar Wavelet decomposition.",
      outcomeText: "64-element representation mapped to an 8×8 spatial matrix.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">58 SELECTED FEATURES</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold shrink-0">+6 APPENDED FEATURES</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">64 ELEMENTS</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border-2 border-sky-400 text-sky-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>8 × 8 MATRIX</span>
        </div>
      `,
      variables: [
        { symbol: "M ∈ ℝ⁸ˣ⁸", definition: "2D spatial intensity matrix", meaning: "Structured 2D representation enabling multi-directional frequency filtering" },
        { symbol: "x̃ ∈ ℝ⁶⁴", definition: "64-element completed feature vector", meaning: "64-element vector with first 6 features appended to satisfy dyadic dimensions" },
        { symbol: "(i, j)", definition: "Spatial grid coordinates", meaning: "Discrete indices (1 ≤ i, j ≤ 8) mapping 1D telemetry into a structured 2D plane" }
      ],
      leftBadge: `
        <div class="p-1 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-[10.5px] font-mono text-slate-700 flex items-center justify-between">
          <span><strong class="text-sky-950">Dyadic Reshape:</strong> 58 features + 6 appended</span>
          <span class="text-sky-800 font-bold">64 Elements (8×8)</span>
        </div>
      `,
      visual: `
        <div class="h-[145px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/70">
          <div class="flex justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1">
            <span>64-Element Completed Vector</span>
            <span class="text-sky-700 font-bold">58 + 6 Appended = 64</span>
          </div>
          <div class="flex items-center justify-around gap-2 my-auto">
            <div class="text-center">
              <div class="text-[8.5px] text-slate-400 mb-0.5">1×58 Vector</div>
              <div class="w-16 h-3 rounded bg-sky-100 flex gap-0.5 p-0.5 overflow-hidden border border-sky-200/60">
                <div class="w-1/4 bg-sky-400 rounded-sm"></div>
                <div class="w-1/4 bg-sky-500 rounded-sm"></div>
                <div class="w-1/4 bg-sky-600 rounded-sm"></div>
                <div class="w-1/4 bg-sky-700 rounded-sm"></div>
              </div>
              <span class="text-[8px] text-slate-500 mt-0.5 block">58 Features</span>
            </div>
            <div class="text-sky-600 font-bold text-xs">→ Reshape →</div>
            <div class="text-center flex items-center gap-2">
              <div class="grid grid-cols-8 gap-0.5 w-[66px] h-[66px] p-0.5 bg-slate-50 rounded border border-slate-200/80 shadow-inner">
                ${Array.from({length: 58}, () => '<div class="w-1.5 h-1.5 bg-sky-500 rounded-[1px]"></div>').join('')}
                ${Array.from({length: 6}, () => '<div class="w-1.5 h-1.5 bg-amber-500 rounded-[1px]"></div>').join('')}
              </div>
              <div class="text-left text-[8.5px] text-slate-600 leading-tight">
                <span class="font-bold text-slate-900 block font-mono">8×8 Grid</span>
                <span class="text-sky-700 font-semibold font-mono">■ 58 Feats</span><br/>
                <span class="text-amber-700 font-semibold font-mono">■ +6 Append</span>
              </div>
            </div>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1 flex items-center justify-between">
            <span>Forms 8×8 dyadic representation for 2D Haar DWT</span>
            <span class="text-sky-700 font-mono font-semibold">8×8 ℝ-Matrix</span>
          </div>
        </div>
      `
    },
    {
      stage: "03",
      stepName: "2D Haar Decomposition",
      stageLabel: "Stage 03 · Wavelet Decomposition",
      title: "2D Haar Wavelet Transform",
      mathContext: "Multi-Resolution Spatial Frequency Decomposition",
      mathRole: "Quadrature Sub-Bands",
      renderedEquation: "M ⟶ [ LL₄ˣ₄  LH₄ˣ₄ ;  HL₄ˣ₄  HH₄ˣ₄ ],  where  LL = (L * (L * M)ᵀ)ᵀ,  HH = (H * (H * M)ᵀ)ᵀ",
      desc: "The 8×8 representation was decomposed into four 4×4 sub-bands capturing approximation and directional/high-frequency variation.",
      outcomeText: "Four 4×4 wavelet sub-bands produced for downstream classification.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">8×8 MATRIX</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">2D HAAR DWT</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border-2 border-sky-400 text-sky-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>FOUR 4×4 SUB-BANDS (LL, LH, HL, HH)</span>
        </div>
      `,
      variables: [
        { symbol: "LL ∈ ℝ⁴ˣ⁴", definition: "Low-Low Approximation Sub-Band", meaning: "Coarse low-frequency approximation capturing stable operational baseline telemetry" },
        { symbol: "LH ∈ ℝ⁴ˣ⁴", definition: "Low-High Horizontal Detail Sub-Band", meaning: "Horizontal high-frequency gradients isolating cross-feature row-wise transitions" },
        { symbol: "HL ∈ ℝ⁴ˣ⁴", definition: "High-Low Vertical Detail Sub-Band", meaning: "Vertical high-frequency gradients isolating cross-feature column-wise transitions" },
        { symbol: "HH ∈ ℝ⁴ˣ⁴", definition: "High-High Diagonal Detail Sub-Band", meaning: "High-frequency diagonal detail coefficients capturing localized anomalies and spikes" }
      ],
      leftBadge: `
        <div class="grid grid-cols-2 gap-x-2.5 sm:gap-x-3 gap-y-1 p-1 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-[10px] font-mono text-slate-700">
          <div class="truncate"><strong class="text-sky-950 font-bold">LL (Low-Low):</strong> Approximation</div>
          <div class="truncate"><strong class="text-amber-950 font-bold">LH (Low-High):</strong> Horizontal Detail</div>
          <div class="truncate"><strong class="text-indigo-950 font-bold">HL (High-Low):</strong> Vertical Detail</div>
          <div class="truncate"><strong class="text-rose-950 font-bold">HH (High-High):</strong> High-Frequency Detail</div>
        </div>
      `,
      visual: `
        <div class="h-[145px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/70">
          <div class="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-100">
            <span class="font-bold text-slate-700">8×8 MATRIX → 2D HAAR DWT</span>
            <span class="text-sky-700 font-bold">Four 4×4 Sub-Bands</span>
          </div>

          <div class="flex items-center justify-around gap-2 my-auto">
            <!-- 8x8 Matrix -->
            <div class="flex flex-col items-center">
              <div class="grid grid-cols-8 gap-0.5 w-[56px] h-[56px] p-0.5 bg-slate-50 rounded border border-slate-200/80 shadow-inner">
                ${Array.from({length: 64}, (_, k) => {
                  const val = Math.sin(k * 0.7) * 0.5 + 0.5;
                  const bg = val > 0.7 ? 'bg-sky-600' : val > 0.4 ? 'bg-sky-400' : val > 0.2 ? 'bg-sky-200' : 'bg-slate-200';
                  return `<div class="w-1 h-1 ${bg} rounded-[1px]"></div>`;
                }).join('')}
              </div>
              <span class="text-[7.5px] text-slate-400 mt-0.5 font-mono">8×8 Input</span>
            </div>

            <!-- Arrow Operator -->
            <div class="text-center font-mono text-[8px] text-sky-800 font-bold">
              <span>DWT</span><br/>
              <span class="text-sky-600 text-xs">→</span>
            </div>

            <!-- 4 Sub-Bands Quad Grid with micro heatmaps -->
            <div class="grid grid-cols-2 gap-1 w-[120px]">
              <div class="p-0.5 rounded bg-sky-50 border border-sky-300 text-center">
                <span class="text-[8px] font-bold text-sky-950 font-mono block">LL (Approx)</span>
                <div class="grid grid-cols-4 gap-0.5 justify-center mx-auto w-fit py-0.5">
                  ${[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => '<div class="w-1 h-1 bg-sky-500 rounded-[1px]"></div>').join('')}
                </div>
              </div>

              <div class="p-0.5 rounded bg-amber-50 border border-amber-300 text-center">
                <span class="text-[8px] font-bold text-amber-950 font-mono block">LH (Horiz)</span>
                <div class="grid grid-cols-4 gap-0.5 justify-center mx-auto w-fit py-0.5">
                  ${[0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0].map(v => `<div class="w-1 h-1 ${v ? 'bg-amber-500' : 'bg-amber-200'} rounded-[1px]"></div>`).join('')}
                </div>
              </div>

              <div class="p-0.5 rounded bg-indigo-50 border border-indigo-300 text-center">
                <span class="text-[8px] font-bold text-indigo-950 font-mono block">HL (Vert)</span>
                <div class="grid grid-cols-4 gap-0.5 justify-center mx-auto w-fit py-0.5">
                  ${[1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1].map(v => `<div class="w-1 h-1 ${v ? 'bg-indigo-500' : 'bg-indigo-200'} rounded-[1px]"></div>`).join('')}
                </div>
              </div>

              <div class="p-0.5 rounded bg-rose-50 border border-rose-300 text-center">
                <span class="text-[8px] font-bold text-rose-950 font-mono block">HH (Diag)</span>
                <div class="grid grid-cols-4 gap-0.5 justify-center mx-auto w-fit py-0.5">
                  ${[0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0].map(v => `<div class="w-1 h-1 ${v ? 'bg-rose-500' : 'bg-rose-200'} rounded-[1px]"></div>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1 flex items-center justify-between">
            <span>Four 4×4 Sub-Bands: LL, LH, HL, HH</span>
            <span class="text-sky-700 font-mono font-semibold">16 Coeffs / Band</span>
          </div>
        </div>
      `
    },
    {
      stage: "04",
      stepName: "Supervised Classification",
      stageLabel: "Stage 04 · Supervised Classification",
      title: "10-Classifier Benchmark",
      mathContext: "Ensemble Decision Boundary Optimization",
      mathRole: "Model Inference",
      renderedEquation: "ŷ = arg max_{c ∈ C}  (1 / M) ∑_{m=1}^M P_m(Y = c | Φ(X)),  Φ(X) = vec([LL, LH, HL, HH])",
      desc: "Ten supervised classifiers were evaluated under 10-fold stratified cross-validation using the wavelet-derived representation. Extra Trees achieved the highest observed accuracy at 99.255%.",
      outcomeText: "Extra Trees achieved the highest observed accuracy among the evaluated classifiers.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">WAVELET DESCRIPTOR</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">10 CLASSIFIERS</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border-2 border-sky-400 text-sky-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>EXTRA TREES (99.255%)</span>
        </div>
      `,
      variables: [
        { symbol: "Φ(X) ∈ ℝ⁶⁴", definition: "Wavelet feature descriptor", meaning: "Flattened concatenation of all four 4×4 wavelet sub-bands (LL, LH, HL, HH)" },
        { symbol: "M", definition: "Ensemble tree cardinality", meaning: "Number of randomized decision trees evaluated under 10-fold stratified cross-validation" },
        { symbol: "P_m(Y=c|Φ(X))", definition: "Tree posterior probability", meaning: "Class probability estimated by individual randomized decision tree m" },
        { symbol: "ŷ ∈ C", definition: "Predicted traffic class", meaning: "Maximum a posteriori class assignment (benign vs. attack categories)" }
      ],
      leftBadge: `
        <div class="p-1 px-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-[10.5px] font-mono text-slate-700 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="text-[8.5px] uppercase font-bold tracking-wider text-sky-900 bg-sky-100 px-1.5 py-0.5 rounded">AWARD</span>
            <span class="font-serif font-bold text-slate-900">INEX 2024</span>
            <span class="text-slate-400">·</span>
            <span class="text-amber-800 font-bold">Silver Medal</span>
          </div>
          <span class="text-[10px] text-slate-500 font-sans font-medium">2nd Place</span>
        </div>
      `,
      visual: `
        <div class="h-[145px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/70">
          <div class="flex justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1">
            <span>10-Fold Stratified CV</span>
            <span class="text-sky-700 font-bold">10 Models</span>
          </div>

          <div class="flex items-center justify-between gap-3 my-auto py-0.5">
            <div class="shrink-0">
              <div class="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight leading-none">
                99.255%
              </div>
              <div class="text-[9.5px] font-mono font-bold text-sky-800 mt-0.5">
                Extra Trees <span class="text-slate-400 font-normal">· Highest</span>
              </div>
            </div>

            <div class="flex-1 max-w-[155px] space-y-1 text-[9px] font-mono">
              <div>
                <div class="flex justify-between text-slate-800 font-bold mb-0.5">
                  <span>Extra Trees</span><span>99.26%</span>
                </div>
                <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-sky-600 h-1.5 rounded-full" style="width: 99.255%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-slate-600 mb-0.5">
                  <span>XGBoost</span><span>98.71%</span>
                </div>
                <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                  <div class="bg-slate-400 h-1 rounded-full" style="width: 98.71%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-slate-500 mb-0.5">
                  <span>Random Forest</span><span>98.14%</span>
                </div>
                <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                  <div class="bg-slate-300 h-1 rounded-full" style="width: 98.14%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px]">
            <span class="text-slate-500 font-sans">+7 more models</span>
            <button type="button" id="toggleAllModelsBtn" class="font-mono font-bold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer">
              View all 10 models →
            </button>
          </div>
        </div>
      `
    }
  ];

  function setupWaveletExplorer() {
    const screen = document.getElementById("waveletInspectorScreen");
    if (!screen) return;

    let currentWaveletStage = (window.researchState && typeof window.researchState.waveletStage === "number")
      ? window.researchState.waveletStage
      : 0;

    function buildWaveletStageContent(idx, data) {
      const isMathOpen = !!window.isWaveletMathOpen;
      // Graphical pipeline connector bar
      const pipelineBar = `
        <div class="w-full mb-3 pb-2.5 border-b border-slate-200/80">
          <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
            Transformation Pipeline: 58 selected features → 8×8 representation → 2D Haar decomposition → supervised classification
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            ${waveletStages.map((st, i) => {
              const isCur = (i === idx);
              return `
                <button class="wavelet-pipeline-node text-left p-2.5 rounded-xl border transition cursor-pointer flex flex-col justify-between ${isCur ? 'bg-sky-50 border-sky-500 text-sky-950 shadow-sm ring-1 ring-sky-400/40' : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50'}" data-stage="${i}">
                  <div class="flex items-center justify-between">
                    <span class="text-[9px] font-mono font-bold ${isCur ? 'text-sky-700' : 'text-slate-400'}">0${i + 1}</span>
                    <span class="w-2 h-2 rounded-full ${isCur ? 'bg-sky-600' : 'bg-slate-300'}"></span>
                  </div>
                  <span class="text-xs font-mono font-semibold truncate mt-1 ${isCur ? 'text-slate-900 font-bold' : 'text-slate-700'}">${st.stepName}</span>
                </button>
              `;
            }).join("")}
          </div>
        </div>
      `;

      return `
        <div class="w-full flex flex-col justify-start space-y-2.5 px-0 sm:px-1">
          ${pipelineBar}

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch w-full min-h-[145px]">
            <div class="lg:col-span-7 flex flex-col justify-between space-y-1 h-full">
              <div>
                <div class="text-[10.5px] font-mono text-sky-800 font-bold uppercase tracking-wider">${data.stageLabel || `Stage ${data.stage}`}</div>
                <h4 class="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug mt-0.5">${data.title}</h4>
                <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-0.5 font-sans">${data.desc}</p>
              </div>
              ${data.leftBadge ? `<div class="mt-1">${data.leftBadge}</div>` : ''}
            </div>
            <div class="lg:col-span-5 w-full flex items-center justify-center">
              ${data.visual}
            </div>
          </div>

          <!-- Stage Outcome & Workflow Progression -->
          <div class="p-2.5 sm:p-3 rounded-xl bg-slate-100/70 border border-slate-200/80 shadow-2xs space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-[9.5px] font-mono uppercase font-bold tracking-wider text-sky-900 bg-sky-100/90 px-1.5 py-0.5 rounded">
                OUTCOME
              </span>
              <span class="text-xs sm:text-[13px] font-sans font-semibold text-slate-800">
                ${data.outcomeText}
              </span>
            </div>
            ${data.outcomeFlow ? `
              <div class="pt-1 border-t border-slate-200/60 flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono">
                ${data.outcomeFlow}
              </div>
            ` : ''}
          </div>

          <!-- Collapsible Technical Formulation Accordion -->
          <div class="rounded-xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all">
            <button type="button" class="wavelet-math-toggle w-full p-2.5 sm:p-3 flex items-center justify-between text-left hover:bg-slate-50/70 transition cursor-pointer font-mono" data-stage="${idx}" aria-expanded="${isMathOpen ? 'true' : 'false'}">
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold">TECHNICAL FORMULATION</span>
                <span class="text-slate-300">·</span>
                <span class="text-[11px] font-semibold text-slate-800">${data.mathContext}</span>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 font-semibold hidden sm:inline-block">
                  ${data.mathRole}
                </span>
                <span class="w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-600 text-xs font-mono font-bold hover:bg-sky-100 hover:text-sky-800 transition">
                  ${isMathOpen ? '−' : '+'}
                </span>
              </div>
            </button>

            <div class="wavelet-math-drawer ${isMathOpen ? '' : 'hidden'} p-3.5 sm:p-4 pt-1 border-t border-slate-100 space-y-2.5">
              <!-- Primary Equation Display -->
              <div class="py-2 px-3 rounded-lg bg-slate-50/70 border border-slate-200/60 font-mono text-xs sm:text-sm text-slate-900 overflow-x-auto text-center font-medium min-h-[40px] flex items-center justify-center">
                ${data.renderedEquation}
              </div>

              <!-- Parameter Specification Table -->
              <div class="overflow-x-auto pt-0.5">
                <table class="w-full text-left text-[11px] font-sans border-collapse table-fixed">
                  <thead>
                    <tr class="text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      <th class="pb-1 pr-3 font-semibold w-[22%]">Term / Symbol</th>
                      <th class="pb-1 px-3 font-semibold w-[32%]">Formal Definition</th>
                      <th class="pb-1 pl-3 font-semibold w-[46%]">Operational Meaning</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-600">
                    ${data.variables.map(v => `
                      <tr class="h-[38px]">
                        <td class="py-1 pr-3 font-mono font-semibold text-slate-800 whitespace-nowrap align-middle">${v.symbol}</td>
                        <td class="py-1 px-3 font-mono text-slate-700 align-middle">${v.definition}</td>
                        <td class="py-1 pl-3 text-slate-600 align-middle">${v.meaning}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderWaveletStage(idx, animate = false) {
      currentWaveletStage = idx;
      if (window.researchState) {
        window.researchState.waveletStage = idx;
      }
      if (window.updateResearchUrlHash) {
        window.updateResearchUrlHash(2, idx);
      }
      const data = waveletStages[idx];

      const isFirst = (idx === 0);
      const isLast = (idx === waveletStages.length - 1);

      const stageTitles = [
        "Feature Selection",
        "Spatial Mapping",
        "Wavelet Decomposition",
        "Supervised Classification"
      ];
      const prevTitle = idx > 0 ? `Prev: ${stageTitles[idx - 1]}` : "";
      const nextTitle = idx < waveletStages.length - 1 ? `Next: ${stageTitles[idx + 1]}` : "";

      const prevArrowBtn = isFirst ? '' : `
        <button id="stagePrevBtn" aria-label="Previous Stage: ${prevTitle}" title="← ${prevTitle}" class="stage-nav-arrow stage-nav-prev absolute -left-4 sm:-left-[18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-700 border border-slate-300 shadow-md hover:shadow-lg hover:text-sky-700 hover:border-sky-400 flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
          <i data-lucide="chevron-left" class="w-4 h-4 sm:w-5 sm:h-5"></i>
        </button>
      `;

      const nextArrowBtn = isLast ? '' : `
        <button id="stageNextBtn" aria-label="Next Stage: ${nextTitle}" title="${nextTitle} →" class="stage-nav-arrow stage-nav-next absolute -right-4 sm:-right-[18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-700 border border-slate-300 shadow-md hover:shadow-lg hover:text-sky-700 hover:border-sky-400 flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
          <i data-lucide="chevron-right" class="w-4 h-4 sm:w-5 sm:h-5"></i>
        </button>
      `;

      const content = `
        ${prevArrowBtn}
        ${buildWaveletStageContent(idx, data)}
        ${nextArrowBtn}
      `;

      if (animate) {
        screen.style.opacity = "0.2";
        screen.style.transform = "translateY(4px)";
        setTimeout(() => {
          screen.innerHTML = content;
          screen.style.opacity = "1";
          screen.style.transform = "translateY(0)";
          attachPipelineNodeListeners();
          if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
          }
        }, 80);
      } else {
        screen.innerHTML = content;
        attachPipelineNodeListeners();
        if (window.lucide && typeof window.lucide.createIcons === "function") {
          window.lucide.createIcons();
        }
      }

      // Update Slide Counter in Research Viewer Header/Tabs
      const counterEl = document.getElementById("viewerSlideCounter");
      if (counterEl) {
        counterEl.textContent = `0${idx + 1} / 04`;
      }
      const stickyInd = document.getElementById("stickyStageIndicator");
      if (stickyInd) {
        stickyInd.textContent = `Stage 0${idx + 1} / 04`;
      }

      // Update Top Stage Buttons if present in DOM
      const stepperBtns = document.querySelectorAll(".wavelet-step-btn");
      stepperBtns.forEach((btn, i) => {
        const isCurrent = (i === idx);
        btn.classList.toggle("active", isCurrent);
        btn.setAttribute("aria-selected", isCurrent ? "true" : "false");
        if (isCurrent) {
          btn.className = "wavelet-step-btn px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer bg-sky-600 text-white font-semibold border border-sky-600 shadow-sm focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none";
        } else {
          btn.className = "wavelet-step-btn px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none";
        }
      });

      // Update Sticky Research Control Bar Stage Buttons
      const stickyBtns = document.querySelectorAll("#stickyStageButtons .sticky-stage-btn");
      stickyBtns.forEach((btn, i) => {
        const isCurrent = (i === idx);
        if (isCurrent) {
          btn.className = "sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer bg-sky-600 text-white font-semibold border-sky-600 shadow-2xs";
        } else {
          btn.className = "sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer border-slate-200/80 bg-white text-slate-600 hover:bg-slate-50";
        }
      });
    }

    function attachPipelineNodeListeners() {
      const nodes = screen.querySelectorAll(".wavelet-pipeline-node");
      nodes.forEach(node => {
        node.addEventListener("click", () => {
          const idx = parseInt(node.dataset.stage, 10);
          renderWaveletStage(idx, true);
        });
      });

      // Collapsible Technical Formulation Accordion Listeners
      const mathToggle = screen.querySelector(".wavelet-math-toggle");
      if (mathToggle) {
        mathToggle.onclick = (e) => {
          e.stopPropagation();
          window.isWaveletMathOpen = !window.isWaveletMathOpen;
          renderWaveletStage(currentWaveletStage, false);
        };
      }

      // 10-Model Comparison Modal (Stage 04)
      function showAllModelsModal() {
        let modal = document.getElementById("waveletAllModelsModal");
        if (!modal) {
          modal = document.createElement("div");
          modal.id = "waveletAllModelsModal";
          modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity";
          modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl border border-slate-200/90 max-w-md w-full p-4 sm:p-5 font-mono space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <div class="text-[9px] uppercase tracking-wider text-slate-400 font-bold">10-Fold Stratified Cross-Validation</div>
                  <h4 class="font-serif font-bold text-base text-slate-900">10-Classifier Benchmark Results</h4>
                </div>
                <button type="button" id="closeAllModelsModalBtn" aria-label="Close" class="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition text-xs font-bold">
                  ✕
                </button>
              </div>
              <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-slate-700">
                <div class="flex justify-between py-1 border-b border-slate-100 font-bold text-sky-950">
                  <span>01. Extra Trees</span><span class="text-sky-700 font-bold">99.255%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100 font-semibold">
                  <span>02. XGBoost</span><span>98.710%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100 font-semibold">
                  <span>03. Random Forest</span><span>98.140%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>04. AdaBoost</span><span>97.420%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>05. Decision Trees</span><span>96.850%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>06. SVM (RBF)</span><span>95.920%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>07. MLP</span><span>95.310%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>08. KNN</span><span>94.670%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>09. Gaussian NB</span><span>89.430%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <span>10. LDA</span><span>88.750%</span>
                </div>
              </div>
              <div class="text-[10px] text-slate-400 font-sans text-center pt-1 border-t border-slate-100">
                Evaluated across 2D Haar wavelet representations on selected network flows.
              </div>
            </div>
          `;
          document.body.appendChild(modal);
          modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target.closest("#closeAllModelsModalBtn")) {
              modal.classList.add("hidden");
            }
          });
        }
        modal.classList.remove("hidden");
      }

      const allModelsBtn = screen.querySelector("#toggleAllModelsBtn");
      if (allModelsBtn) {
        allModelsBtn.onclick = (e) => {
          e.stopPropagation();
          showAllModelsModal();
        };
      }

      // Edge Arrow Navigation Listeners (Strictly Non-Circular)
      const prevBtn = screen.querySelector("#stagePrevBtn");
      const nextBtn = screen.querySelector("#stageNextBtn");
      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.stopPropagation();
          if (currentWaveletStage > 0) {
            renderWaveletStage(currentWaveletStage - 1, true);
          }
        };
      }
      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.stopPropagation();
          if (currentWaveletStage < waveletStages.length - 1) {
            renderWaveletStage(currentWaveletStage + 1, true);
          }
        };
      }
    }

    // Attach listeners to external stepper buttons
    const stepperBtns = document.querySelectorAll(".wavelet-step-btn");
    stepperBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.stage, 10);
        renderWaveletStage(idx, true);
      });
    });

    // Support Arrow Keys (Left / Right) & Number Keys (1-4) (Strictly Non-Circular)
    function handleKeydown(e) {
      if (document.getElementById("waveletInspectorScreen") && !e.target.matches("input, textarea")) {
        if (e.key === "ArrowRight") {
          if (currentWaveletStage < waveletStages.length - 1) {
            renderWaveletStage(currentWaveletStage + 1, true);
          }
        } else if (e.key === "ArrowLeft") {
          if (currentWaveletStage > 0) {
            renderWaveletStage(currentWaveletStage - 1, true);
          }
        } else if (["1", "2", "3", "4"].includes(e.key)) {
          renderWaveletStage(parseInt(e.key, 10) - 1, true);
        }
      }
    }
    function syncWaveletBoxHeight() {
      if (!screen) return;
      screen.style.minHeight = "";
    }

    let resizeTimer;
    window.removeEventListener("resize", window._waveletResizeHandler);
    window._waveletResizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        syncWaveletBoxHeight();
        renderWaveletStage(currentWaveletStage, false);
      }, 150);
    };
    window.addEventListener("resize", window._waveletResizeHandler);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        syncWaveletBoxHeight();
        renderWaveletStage(currentWaveletStage, false);
      });
    }

    window.renderWaveletStage = renderWaveletStage;
    window.setupWaveletExplorer = setupWaveletExplorer;
    syncWaveletBoxHeight();
    renderWaveletStage(currentWaveletStage, false);
  }

  /* =========================================================================
   * EXHIBIT 2: SECOND-ORDER ODE EARLY WARNING SYSTEM (EWS)
   * 4-Stage Dynamical Time-Series Pipeline:
   * 01 Signals (Dual Packets/s & Bytes/s time-series)
   * 02 ODE (Observed vs ODE-modeled dynamics)
   * 03 Residual (Combined residual vs time + benign stats panel)
   * 04 Warning (Hero stage: 3 thresholds + attack marker + observable ~53 min bracket)
   * ========================================================================= */
  const odeStages = [
    {
      stage: "01",
      stepName: "01 Signals",
      stageLabel: "Stage 01 · Signal Derivatives",
      title: "Network Traffic Signal Derivatives",
      mathContext: "Discrete Central Differencing",
      mathRole: "Signal Preprocessing",
      renderedEquation: "ṗ_t ≈ [p(t+Δt) − p(t−Δt)] / (2Δt), &nbsp;&nbsp;&nbsp;&nbsp; p̈_t ≈ [p(t+Δt) − 2p(t) + p(t−Δt)] / Δt²",
      desc: "Network flow telemetry is sampled across continuous sliding windows. Numerical central differences compute velocity ṗ_t and dynamic acceleration p̈_t from packet and byte arrival rates.",
      outcomeText: "Continuous velocity and acceleration vectors extracted from raw network telemetry.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">RAW FLOW TELEMETRY</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">CENTRAL DIFFERENCING</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border-2 border-amber-400 text-amber-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>DYNAMIC RATE VECTORS (ṗ, p̈)</span>
        </div>
      `,
      variables: [
        { symbol: "p_t", definition: "Flow Packets/s at time t", meaning: "Discrete packet count observed in sliding window" },
        { symbol: "ṗ_t", definition: "First numerical derivative (velocity)", meaning: "Instantaneous rate of packet arrival variation: dp/dt" },
        { symbol: "p̈_t", definition: "Second numerical derivative (acceleration)", meaning: "Rate of velocity change capturing flow curvature: d²p/dt²" },
        { symbol: "Δt", definition: "Sampling time step", meaning: "Uniform observation interval for central difference discretization" }
      ],
      leftBadge: `
        <div class="space-y-1">
          <div class="p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[10.5px] space-y-0.5">
            <div class="text-slate-800 font-semibold truncate">ṗ_t ≈ [p(t+Δt) − p(t−Δt)] / (2Δt)</div>
            <div class="text-slate-800 font-semibold truncate">p̈_t ≈ [p(t+Δt) − 2p(t) + p(t−Δt)] / Δt²</div>
          </div>
          <div class="p-1 px-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span><strong class="text-amber-950">Signals:</strong> Flow Packets/s + Bytes/s</span>
            <span class="text-amber-800 font-bold">Δt Differencing</span>
          </div>
        </div>
      `,
      visual: `
        <div class="h-[210px] sm:h-[215px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/80">
          <div class="flex items-center justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1.5 shrink-0">
            <span class="font-bold text-slate-700 truncate">Dual Telemetry: Packets/s & Bytes/s</span>
            <span class="text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60 shrink-0">━ p(t)  ┈ b(t)</span>
          </div>
          <div class="relative w-full my-auto py-1">
            <svg class="w-full h-[120px]" viewBox="0 0 440 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pktGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#d97706" stop-opacity="0.28"/>
                  <stop offset="100%" stop-color="#d97706" stop-opacity="0.02"/>
                </linearGradient>
              </defs>
              <line x1="30" y1="25" x2="430" y2="25" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="30" y1="60" x2="430" y2="60" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="30" y1="96" x2="430" y2="96" stroke="#e2e8f0" stroke-width="1"/>
              <line x1="30" y1="12" x2="30" y2="96" stroke="#cbd5e1" stroke-width="1"/>
              <text x="25" y="28" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">High</text>
              <text x="25" y="63" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">Nom</text>
              <text x="25" y="99" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">0</text>
              <path d="M 30 96 L 30 65 Q 65 48, 90 62 T 150 58 T 210 42 T 270 68 T 330 52 T 390 40 L 430 54 L 430 96 Z" fill="url(#pktGrad)"/>
              <path d="M 30 65 Q 65 48, 90 62 T 150 58 T 210 42 T 270 68 T 330 52 T 390 40 L 430 54" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
              <path d="M 30 72 Q 70 60, 100 70 T 160 66 T 220 54 T 280 75 T 340 60 T 400 50 L 430 60" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>
              <line x1="190" y1="54" x2="230" y2="30" stroke="#b45309" stroke-width="1.5"/>
              <circle cx="210" cy="42" r="3" fill="#b45309"/>
              <text x="220" y="28" font-size="7" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold">ṗ(t) = dp/dt</text>
              <text x="30" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">0s</text>
              <text x="130" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">300s</text>
              <text x="230" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">600s</text>
              <text x="330" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">900s</text>
              <text x="430" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">1200s</text>
            </svg>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1.5 flex items-center justify-between shrink-0">
            <span>Discrete Central Differencing: velocity ṗ & acceleration p̈</span>
            <span class="text-amber-800 font-mono font-semibold">O(Δt²) accuracy</span>
          </div>
        </div>
      `
    },
    {
      stage: "02",
      stepName: "02 ODE",
      stageLabel: "Stage 02 · Benign Dynamical System Identification",
      title: "Second-Order ODE Identification",
      mathContext: "Homogeneous Linear Differential System",
      mathRole: "System Identification",
      renderedEquation: "p̈(t) + a₁ ṗ(t) + b₁ p(t) = 0, &nbsp;&nbsp;&nbsp;&nbsp; b̈(t) + a₂ ḃ(t) + b₂ b(t) = 0",
      desc: "Under benign conditions, network rate-of-change dynamics conform to a homogeneous second-order linear differential system. Linear regression identifies stable dynamic model coefficients [a₁, b₁].",
      outcomeText: "Learned benign dynamic model coefficients [a₁, b₁] governing normal flow acceleration.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">BENIGN TRACES</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">LINEAR REGRESSION ID</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border-2 border-amber-400 text-amber-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>HOMOGENEOUS PARAMETERS (a₁, b₁)</span>
        </div>
      `,
      variables: [
        { symbol: "p(t), b(t)", definition: "State variables", meaning: "Packets/s and Bytes/s flow rates over continuous time" },
        { symbol: "ṗ(t), p̈(t)", definition: "State derivatives", meaning: "Dynamic rate-of-change (velocity) and curvature (acceleration)" },
        { symbol: "a₁, a₂", definition: "Damping coefficients", meaning: "Governs dissipation and return to steady-state baseline" },
        { symbol: "b₁, b₂", definition: "Stiffness coefficients", meaning: "Governs characteristic oscillation frequency of benign flows" }
      ],
      leftBadge: `
        <div class="space-y-1">
          <div class="p-1.5 px-2 rounded-lg bg-amber-50/50 border border-amber-200/70 font-mono text-[10.5px] space-y-0.5">
            <div class="text-slate-900 font-bold truncate">p̈(t) + a₁ ṗ(t) + b₁ p(t) = 0</div>
            <div class="text-[9.5px] text-slate-600 truncate">[a₁, b₁]ᵀ = (XᵀX)⁻¹XᵀY,  X = [−ṗ, −p]</div>
          </div>
          <div class="p-1 px-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span><strong class="text-amber-950">System ID:</strong> Homogeneous 2nd-Order</span>
            <span class="text-amber-800 font-bold">Stable Roots</span>
          </div>
        </div>
      `,
      visual: `
        <div class="h-[210px] sm:h-[215px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/80">
          <div class="flex items-center justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1.5 shrink-0">
            <span class="font-bold text-slate-700 truncate">Observed vs. ODE-Modeled Dynamics</span>
            <span class="text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60 shrink-0">● Observed  ━ Model p̂(t)</span>
          </div>
          <div class="relative w-full my-auto py-1">
            <svg class="w-full h-[120px]" viewBox="0 0 440 120" preserveAspectRatio="none">
              <line x1="30" y1="25" x2="430" y2="25" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="30" y1="60" x2="430" y2="60" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="30" y1="96" x2="430" y2="96" stroke="#e2e8f0" stroke-width="1"/>
              <line x1="30" y1="12" x2="30" y2="96" stroke="#cbd5e1" stroke-width="1"/>
              <text x="25" y="28" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">+0.5</text>
              <text x="25" y="63" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">0.0</text>
              <text x="25" y="99" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">-0.5</text>
              <path d="M 30 58 Q 70 38, 110 56 T 190 64 T 270 52 T 350 62 L 430 56" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="1 3"/>
              ${[
                [30,58],[50,47],[70,40],[90,45],[110,56],[130,62],[150,66],[170,65],[190,64],[210,58],[230,54],[250,52],[270,53],[290,56],[310,60],[330,62],[350,61],[370,58],[390,56],[410,55],[430,56]
              ].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="1.5" fill="#64748b"/>`).join('')}
              <path d="M 30 57 Q 70 40, 110 55 T 190 64 T 270 53 T 350 61 L 430 56" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
              <rect x="290" y="16" width="135" height="17" rx="3" fill="#ffffff" stroke="#fed7aa" stroke-width="1"/>
              <text x="357" y="28" font-size="8" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">R² = 0.948 · MAE = 1.62%</text>
              <text x="30" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-4,800s</text>
              <text x="130" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-4,400s</text>
              <text x="230" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-4,000s</text>
              <text x="330" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,600s</text>
              <text x="430" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,200s</text>
            </svg>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1.5 flex items-center justify-between shrink-0">
            <span>Benign Dynamic Model: Damped 2nd-order characteristic roots</span>
            <span class="text-amber-800 font-mono font-semibold">Stable Baseline</span>
          </div>
        </div>
      `
    },
    {
      stage: "03",
      stepName: "03 Residual",
      stageLabel: "Stage 03 · Residual Dynamics Formulation",
      title: "Observed vs. Predicted Residual Dynamics",
      mathContext: "Dynamic State Error & Residual Tracking",
      mathRole: "Anomaly Isolation",
      renderedEquation: "R_p(t) = ṗ_actual(t) − ṗ_ODE(t), &nbsp;&nbsp;&nbsp;&nbsp; CR(t) = R_p(t) + R_b(t)",
      desc: "Observed acceleration is compared against benign ODE predictions during runtime. Cumulative residuals track deviations signaling uncharacteristic acceleration.",
      outcomeText: "Cumulative residual metric CR(t) isolating attack-induced dynamics from benign traffic variability.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">OBSERVED VS. PREDICTED</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">RESIDUAL VECTORS (R_p, R_b)</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border-2 border-amber-400 text-amber-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>CUMULATIVE RESIDUAL CR(t)</span>
        </div>
      `,
      variables: [
        { symbol: "R_p(t)", definition: "Packet rate residual", meaning: "Instantaneous error between actual and modeled packet dynamics: ṗ_actual − ṗ_ODE" },
        { symbol: "R_b(t)", definition: "Byte rate residual", meaning: "Instantaneous error between actual and modeled byte dynamics: ḃ_actual − ḃ_ODE" },
        { symbol: "CR(t)", definition: "Cumulative dynamic residual", meaning: "Multi-signal combined metric amplifying pre-attack divergence: R_p(t) + R_b(t)" },
        { symbol: "σ_R", definition: "Baseline residual variance", meaning: "Calibrated empirical dispersion under verified benign conditions" }
      ],
      leftBadge: `
        <div class="space-y-1">
          <div class="p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[9.5px]">
            <div class="text-[8.5px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Benign Calibration Distribution</div>
            <div class="flex items-center justify-between text-slate-700 text-[9.5px]">
              <span>μ = <strong class="text-slate-900">0.0024</strong></span>
              <span>σ = <strong class="text-slate-900">0.0142</strong></span>
              <span>N = <strong class="text-slate-900">120,000</strong></span>
            </div>
          </div>
          <div class="p-1 px-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span><strong class="text-amber-950">Residual Metric:</strong> CR(t) = R_p + R_b</span>
            <span class="text-amber-800 font-bold">Divergence Drift</span>
          </div>
        </div>
      `,
      visual: `
        <div class="h-[210px] sm:h-[215px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/80">
          <div class="flex items-center justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1.5 shrink-0">
            <span class="font-bold text-slate-700 truncate">Dynamic Residual Deviation: CR(t) vs. Noise Floor</span>
            <span class="text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60 shrink-0">CR(t) Divergence</span>
          </div>
          <div class="relative w-full my-auto py-1">
            <svg class="w-full h-[120px]" viewBox="0 0 440 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="resGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#ea580c" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#ea580c" stop-opacity="0.01"/>
                </linearGradient>
              </defs>
              <rect x="30" y="66" width="400" height="24" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.75"/>
              <line x1="30" y1="78" x2="430" y2="78" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
              <text x="75" y="75" font-size="7" fill="#64748b" font-family="'IBM Plex Mono', monospace">Benign Noise Floor (±σ)</text>
              <line x1="30" y1="14" x2="30" y2="96" stroke="#cbd5e1" stroke-width="1"/>
              <text x="25" y="28" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">+3σ</text>
              <text x="25" y="54" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">+2σ</text>
              <text x="25" y="81" font-size="7.5" fill="#94a3b8" text-anchor="end" font-family="'IBM Plex Mono', monospace">μ=0</text>
              <path d="M 30 78 L 180 78 Q 220 77, 260 67 T 340 42 T 410 20 L 430 18 L 430 78 Z" fill="url(#resGrad)"/>
              <path d="M 30 78 L 60 77 L 90 79 L 120 77 L 150 78 L 180 78 Q 220 77, 260 67 T 340 42 T 410 20 L 430 18" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
              <line x1="260" y1="67" x2="260" y2="38" stroke="#b45309" stroke-width="1" stroke-dasharray="2 2"/>
              <circle cx="260" cy="67" r="3" fill="#b45309"/>
              <rect x="205" y="26" width="105" height="15" rx="3" fill="#ffffff" stroke="#fed7aa" stroke-width="1"/>
              <text x="257" y="37" font-size="7" fill="#92400e" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">Deviation Begins (t ≈ -3,400s)</text>
              <text x="30" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-4,200s</text>
              <text x="130" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,800s</text>
              <text x="230" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,400s</text>
              <text x="330" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,000s</text>
              <text x="430" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-2,600s</text>
            </svg>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1.5 flex items-center justify-between shrink-0">
            <span>Dynamic state residuals isolate attack divergence from benign variance</span>
            <span class="text-amber-800 font-mono font-semibold">Zero Noise Floor</span>
          </div>
        </div>
      `
    },
    {
      stage: "04",
      stepName: "04 Warning",
      stageLabel: "Stage 04 · Residual Thresholds & Attack Warning",
      title: "Statistical Thresholding & Early Warning Horizon",
      mathContext: "Statistical Hypothesis & Horizon Metric",
      mathRole: "Early Warning Decision Rule",
      renderedEquation: "τₖ = μ_benign + k·σ_benign  (k ∈ {1, 2, 3}), &nbsp;&nbsp;&nbsp;&nbsp; Alert: CR(t) > τ₃  ⟹  Δt_lead = t_peak − t_alert ≈ 3,200s (~53 min)",
      desc: "Thresholds calibrated on benign traces detect anomalous residual divergence. An alert triggers when CR(t) breaches μ + 3σ, achieving ≈53 min lead time prior to observed volumetric peak.",
      outcomeText: "Statistical threshold breach providing proactive precursor alert ≈53 min before volumetric attack saturation.",
      outcomeFlow: `
        <div class="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span class="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 font-semibold shrink-0">CR(t) > μ + 3σ</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="px-2 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 font-semibold shrink-0">PRECURSOR ALERT (t ≈ -3,200s)</span>
          <span class="text-slate-400 font-bold">→</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border-2 border-amber-400 text-amber-950 font-mono font-bold shrink-0 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>≈53 MIN ADVANCE WARNING</span>
        </div>
      `,
      variables: [
        { symbol: "τ_k", definition: "Statistical warning thresholds", meaning: "Progressive boundaries calibrated on benign reference baseline: k ∈ {1, 2, 3} (μ+σ, μ+2σ, μ+3σ)" },
        { symbol: "t_alert", definition: "Precursor alert timestamp", meaning: "Exact moment when cumulative residual CR(t) breaches the 3σ high-warning threshold τ₃" },
        { symbol: "t_peak", definition: "Volumetric peak timestamp", meaning: "Observed peak attack traffic arrival time (reference benchmark)" },
        { symbol: "Δt_lead", definition: "Warning lead horizon", meaning: "Proactive advance window: t_peak − t_alert ≈ 3,200s (~53 minutes)" }
      ],
      leftBadge: `
        <div class="space-y-1">
          <div class="p-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50/40 border border-amber-300 font-mono text-[10px] space-y-0.5 shadow-2xs">
            <div class="flex items-center justify-between">
              <span class="text-[8.5px] uppercase tracking-wider text-amber-900 font-bold">Early-Warning Precursor Result</span>
              <span class="text-amber-800 font-bold text-[8.5px]">DPA-NS 2025 · IIT Dhanbad & FTCCI</span>
            </div>
            <div class="flex items-baseline gap-2 pt-0.5">
              <span class="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">≈53 min</span>
              <span class="text-[10px] text-amber-900 font-semibold">Lead horizon before volumetric peak (t ≈ -3,200s)</span>
            </div>
          </div>
          <div class="p-1 px-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[10px] font-mono text-slate-700 flex items-center justify-between">
            <span><strong class="text-amber-950">Thresholds:</strong> τ<sub>k</sub> = μ + k·σ (k=1,2,3)</span>
            <span class="text-amber-800 font-bold">Alert: CR(t) > τ₃</span>
          </div>
        </div>
      `,
      visual: `
        <div class="h-[210px] sm:h-[215px] w-full rounded-xl bg-white p-2.5 sm:p-3 flex flex-col justify-between font-mono text-[11px] shadow-sm border border-slate-200/80">
          <div class="flex items-center justify-between text-slate-500 text-[10px] border-b border-slate-100 pb-1.5 shrink-0">
            <span class="font-bold text-slate-800 truncate">Residual Warning Score vs. 3 Thresholds & Attack Peak</span>
            <button id="openOdeTrajectoryModalBtn" type="button" title="View Full Trajectory Plot" class="text-amber-900 font-bold bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded border border-amber-300 shadow-2xs shrink-0 cursor-pointer flex items-center gap-1 transition">
              <span>~3,200s Lead Horizon</span>
              <i data-lucide="maximize-2" class="w-2.5 h-2.5 text-amber-700"></i>
            </button>
          </div>
          <div class="relative w-full my-auto py-1">
            <svg class="w-full h-[120px]" viewBox="0 0 500 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heroWarnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#fef3c7" stop-opacity="0.05"/>
                </linearGradient>
              </defs>

              <line x1="30" y1="35" x2="470" y2="35" stroke="#f43f5e" stroke-width="1.25" stroke-dasharray="3 3"/>
              <text x="475" y="38" font-size="7.5" fill="#e11d48" font-family="'IBM Plex Mono', monospace" font-weight="bold">HIGH (μ+3σ)</text>

              <line x1="30" y1="58" x2="470" y2="58" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/>
              <text x="475" y="61" font-size="7.5" fill="#d97706" font-family="'IBM Plex Mono', monospace">MEDIUM (μ+2σ)</text>

              <line x1="30" y1="78" x2="470" y2="78" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
              <text x="475" y="81" font-size="7.5" fill="#64748b" font-family="'IBM Plex Mono', monospace">LOW (μ+σ)</text>

              <rect x="130" y="20" width="300" height="76" fill="url(#heroWarnGrad)" rx="2"/>

              <path d="M 130 20 L 130 10 L 430 10 L 430 20" fill="none" stroke="#d97706" stroke-width="1.5"/>
              <rect x="215" y="2" width="130" height="16" fill="#ffffff" rx="3" stroke="#fed7aa" stroke-width="1"/>
              <text x="280" y="14" font-size="8.5" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">
                ⟵ ~53 min Lead Time ⟶
              </text>

              <line x1="130" y1="20" x2="130" y2="96" stroke="#d97706" stroke-width="1.25" stroke-dasharray="2 2"/>
              <line x1="430" y1="20" x2="430" y2="96" stroke="#e11d48" stroke-width="1.25" stroke-dasharray="2 2"/>

              <path d="M 30 96 L 60 96 Q 90 94, 110 78 T 130 35 T 240 30 T 350 26 L 430 24" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>

              <line x1="30" y1="96" x2="470" y2="96" stroke="#cbd5e1" stroke-width="1"/>
              <line x1="30" y1="18" x2="30" y2="96" stroke="#cbd5e1" stroke-width="1"/>

              <circle cx="130" cy="35" r="7" fill="#d97706" opacity="0.25" class="animate-ping"/>
              <circle cx="130" cy="35" r="3.5" fill="#d97706"/>
              <rect x="80" y="41" width="100" height="13" rx="2" fill="#fffbeb" stroke="#fde68a" stroke-width="0.75"/>
              <text x="130" y="50" font-size="7" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">● WARNING (t ≈ -3,200s)</text>

              <circle cx="430" cy="24" r="3.5" fill="#e11d48"/>
              <rect x="375" y="30" width="95" height="13" rx="2" fill="#fff1f2" stroke="#fecdd3" stroke-width="0.75"/>
              <text x="422" y="39" font-size="7" fill="#be123c" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">● ATTACK PEAK (0s)</text>

              <text x="30" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-3,600s</text>
              <text x="130" y="110" font-size="7.5" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">-3,200s (Warning)</text>
              <text x="230" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-2,000s</text>
              <text x="330" y="110" font-size="7" fill="#94a3b8" text-anchor="middle" font-family="'IBM Plex Mono', monospace">-1,000s</text>
              <text x="430" y="110" font-size="7.5" fill="#be123c" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">0s (Peak)</text>
            </svg>
          </div>
          <div class="text-[9.5px] text-slate-500 font-sans border-t border-slate-100 pt-1.5 flex items-center justify-between shrink-0">
            <span>Observable Precursor Detection: 3σ breach occurs 3,200s prior to attack peak</span>
            <span class="text-amber-800 font-bold font-mono">≈53 min Lead Horizon</span>
          </div>
        </div>
      `
    }
  ];

  function setupOdeSimulator() {
    const screen = document.getElementById("odeSimulationScreen");
    if (!screen) return;

    let currentOdeStage = (window.researchState && typeof window.researchState.odeStage === "number")
      ? window.researchState.odeStage
      : 0;

    // Handle legacy string modes if encountered
    if (window.researchState && typeof window.researchState.odeStage === "string") {
      const modeMap = { baseline: 0, precursor: 1, saturation: 3 };
      currentOdeStage = modeMap[window.researchState.odeStage] ?? 0;
    }

    function buildOdeStageContent(idx, data) {
      const isMathOpen = !!window.isOdeMathOpen;
      // Graphical pipeline connector bar matching Wavelet
      const pipelineBar = `
        <div class="w-full mb-3 pb-2.5 border-b border-slate-200/80">
          <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
            Dynamical Warning Pipeline: Flow differencing → Benign ODE ID → Residual dynamics → Statistical thresholding
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            ${odeStages.map((st, i) => {
              const isCur = (i === idx);
              return `
                <button class="ode-pipeline-node text-left p-2.5 rounded-xl border transition cursor-pointer flex flex-col justify-between ${isCur ? 'bg-amber-50 border-amber-500 text-amber-950 shadow-sm ring-1 ring-amber-400/40' : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50'}" data-stage="${i}">
                  <div class="flex items-center justify-between">
                    <span class="text-[9px] font-mono font-bold ${isCur ? 'text-amber-700' : 'text-slate-400'}">0${i + 1}</span>
                    <span class="w-2 h-2 rounded-full ${isCur ? 'bg-amber-600' : 'bg-slate-300'}"></span>
                  </div>
                  <span class="text-xs font-mono font-semibold truncate mt-1 ${isCur ? 'text-slate-900 font-bold' : 'text-slate-700'}">${st.stepName}</span>
                </button>
              `;
            }).join("")}
          </div>
        </div>
      `;

      return `
        <div class="w-full flex flex-col justify-start space-y-2.5 px-0 sm:px-1">
          ${pipelineBar}

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch w-full min-h-[215px]">
            <div class="lg:col-span-7 flex flex-col justify-between space-y-1 h-full min-h-[215px]">
              <div>
                <div class="text-[10.5px] font-mono text-amber-800 font-bold uppercase tracking-wider">${data.stageLabel || `Stage ${data.stage}`}</div>
                <h4 class="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug mt-0.5">${data.title}</h4>
                <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-0.5 font-sans">${data.desc}</p>
              </div>
              ${data.leftBadge ? `<div class="mt-1">${data.leftBadge}</div>` : ''}
            </div>
            <div class="lg:col-span-5 w-full flex items-center justify-center">
              ${data.visual}
            </div>
          </div>

          <!-- Stage Outcome & Workflow Progression -->
          <div class="p-2.5 sm:p-3 rounded-xl bg-slate-100/70 border border-slate-200/80 shadow-2xs space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-[9.5px] font-mono uppercase font-bold tracking-wider text-amber-900 bg-amber-100/90 px-1.5 py-0.5 rounded">
                OUTCOME
              </span>
              <span class="text-xs sm:text-[13px] font-sans font-semibold text-slate-800">
                ${data.outcomeText}
              </span>
            </div>
            ${data.outcomeFlow ? `
              <div class="pt-1 border-t border-slate-200/60 flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono">
                ${data.outcomeFlow}
              </div>
            ` : ''}
          </div>

          <!-- Collapsible Technical Formulation Accordion -->
          <div class="rounded-xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all">
            <button type="button" class="ode-math-toggle w-full p-2.5 sm:p-3 flex items-center justify-between text-left hover:bg-slate-50/70 transition cursor-pointer font-mono" data-stage="${idx}" aria-expanded="${isMathOpen ? 'true' : 'false'}">
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold">TECHNICAL FORMULATION</span>
                <span class="text-slate-300">·</span>
                <span class="text-[11px] font-semibold text-slate-800">${data.mathContext}</span>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 font-semibold hidden sm:inline-block">
                  ${data.mathRole}
                </span>
                <span class="w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-600 text-xs font-mono font-bold hover:bg-amber-100 hover:text-amber-800 transition">
                  ${isMathOpen ? '−' : '+'}
                </span>
              </div>
            </button>

            <div class="ode-math-drawer ${isMathOpen ? '' : 'hidden'} p-3.5 sm:p-4 pt-1 border-t border-slate-100 space-y-2.5 min-h-[295px]">
              <!-- Primary Equation Display -->
              <div class="py-2.5 px-3 rounded-lg bg-slate-50/70 border border-slate-200/60 font-mono text-xs sm:text-sm text-slate-900 overflow-x-auto text-center font-medium min-h-[40px] flex items-center justify-center">
                <span class="inline-block leading-normal">${data.renderedEquation}</span>
              </div>

              <!-- Parameter Specification Table -->
              <div class="overflow-x-auto pt-0.5">
                <table class="w-full text-left text-[11px] font-sans border-collapse table-fixed">
                  <thead>
                    <tr class="text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      <th class="pb-1 pr-3 font-semibold w-[22%]">Term / Symbol</th>
                      <th class="pb-1 px-3 font-semibold w-[32%]">Formal Definition</th>
                      <th class="pb-1 pl-3 font-semibold w-[46%]">Operational Meaning</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-600">
                    ${data.variables.map(v => `
                      <tr class="h-[38px]">
                        <td class="py-1 pr-3 font-mono font-semibold text-slate-800 whitespace-nowrap align-middle">${v.symbol}</td>
                        <td class="py-1 px-3 font-mono text-slate-700 align-middle">${v.definition}</td>
                        <td class="py-1 pl-3 text-slate-600 align-middle">${v.meaning}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Trajectory Cartesian Curve Modal (Stage 04)
    function showOdeTrajectoryModal() {
      let modal = document.getElementById("odeTrajectoryModal");
      if (!modal) {
        modal = document.createElement("div");
        modal.id = "odeTrajectoryModal";
        modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity";
        modal.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl border border-slate-200/90 max-w-2xl w-full p-4 sm:p-5 font-sans space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <div class="text-[9.5px] font-mono uppercase tracking-wider text-amber-800 font-bold">Dynamical Trajectory Simulation</div>
                <h4 class="font-serif font-bold text-base sm:text-lg text-slate-900">Continuous Curvature Response vs. Volumetric Saturation</h4>
              </div>
              <button type="button" id="closeOdeTrajectoryModalBtn" aria-label="Close" class="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition text-xs font-bold font-mono">
                ✕
              </button>
            </div>

            <!-- Authentic Scientific Time-Series SVG Curve -->
            <div class="rounded-xl bg-slate-50/50 p-2.5 sm:p-3 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div class="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 mb-1 border-b border-slate-100 pb-1">
                <span class="font-semibold text-slate-800 truncate">Time-Series Curvature Plot: Continuous ODE Response vs. Observed Peak</span>
                <span class="text-slate-400 font-mono hidden sm:inline">ẍ + aẋ + bx = 0 · CR(t) &gt; μ + 3σ</span>
              </div>

              <div class="relative w-full overflow-x-auto">
                <svg class="w-full min-w-[500px] h-[195px]" viewBox="0 0 540 195" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="odeLeadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.6" />
                      <stop offset="100%" stop-color="#fef3c7" stop-opacity="0.1" />
                    </linearGradient>
                    <linearGradient id="odeCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#d97706" stop-opacity="0.25" />
                      <stop offset="100%" stop-color="#d97706" stop-opacity="0.01" />
                    </linearGradient>
                  </defs>

                  <!-- Grid Lines -->
                  <line x1="55" y1="30" x2="495" y2="30" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3 3" />
                  <line x1="55" y1="70" x2="495" y2="70" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3 3" />
                  <line x1="55" y1="110" x2="495" y2="110" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3 3" />
                  <line x1="55" y1="150" x2="495" y2="150" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="3 3" />

                  <!-- Precursor Lead Time Shaded Window [x=145 to x=470] -->
                  <rect x="145" y="30" width="325" height="120" fill="url(#odeLeadGradient)" rx="3" />

                  <!-- Dimension Bracket: ~3,200-Second Interval -->
                  <path d="M 145 22 L 145 14 L 470 14 L 470 22" fill="none" stroke="#d97706" stroke-width="1.5" />
                  <rect x="235" y="6" width="150" height="16" fill="#ffffff" rx="3" stroke="#fed7aa" stroke-width="1" />
                  <text x="310" y="18" font-size="8.5" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">
                    ⟵ ~3,200s (~53 min) Lead Time ⟶
                  </text>

                  <!-- Area under curve -->
                  <path d="M 55 150 L 55 146 Q 110 144, 145 138 T 260 112 T 380 62 T 470 30 L 470 150 L 55 150 Z" fill="url(#odeCurveGradient)" />

                  <!-- Trajectory Curve -->
                  <path d="M 55 146 Q 110 144, 145 138 T 260 112 T 380 62 T 470 30" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round" />

                  <!-- Vertical Reference Lines -->
                  <line x1="145" y1="30" x2="145" y2="150" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3 3" />
                  <line x1="470" y1="30" x2="470" y2="150" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="3 3" />

                  <!-- Cartesian Axes -->
                  <line x1="55" y1="18" x2="55" y2="150" stroke="#64748b" stroke-width="1.5" />
                  <line x1="55" y1="150" x2="500" y2="150" stroke="#64748b" stroke-width="1.5" />

                  <!-- Y-Axis Labels -->
                  <text x="50" y="33" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="end">1.0</text>
                  <text x="50" y="73" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="end">0.66</text>
                  <text x="50" y="113" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="end">0.33</text>
                  <text x="50" y="153" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="end">0.0</text>
                  <text x="-85" y="15" font-size="8" fill="#475569" font-family="'IBM Plex Mono', monospace" font-weight="bold" transform="rotate(-90)" text-anchor="middle">
                    Intensity y(t)
                  </text>

                  <!-- X-Axis Labels -->
                  <text x="70" y="164" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="middle">-3,600s</text>
                  <text x="145" y="164" font-size="8.5" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">-3,200s (Precursor)</text>
                  <text x="260" y="164" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="middle">-2,000s</text>
                  <text x="365" y="164" font-size="8" fill="#64748b" font-family="'IBM Plex Mono', monospace" text-anchor="middle">-1,000s</text>
                  <text x="470" y="164" font-size="8.5" fill="#be123c" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">0s (Peak)</text>
                  <text x="280" y="180" font-size="8" fill="#475569" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">
                    Time (seconds before observed volumetric peak)
                  </text>

                  <!-- Pins -->
                  <circle cx="145" cy="138" r="4" fill="#d97706" />
                  <circle cx="145" cy="138" r="7" fill="#d97706" opacity="0.25" />
                  <text x="145" y="127" font-size="7.5" fill="#b45309" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">
                    Precursor Alert (t ≈ -3,200s)
                  </text>

                  <circle cx="470" cy="30" r="4" fill="#e11d48" />
                  <circle cx="470" cy="30" r="7" fill="#e11d48" opacity="0.25" />
                  <text x="470" y="20" font-size="7.5" fill="#be123c" font-family="'IBM Plex Mono', monospace" font-weight="bold" text-anchor="middle">
                    Volumetric Peak (t = 0s)
                  </text>

                  <!-- Active Pulse Marker -->
                  <circle cx="145" cy="138" r="9" fill="#d97706" opacity="0.25" class="animate-ping" />
                  <circle cx="145" cy="138" r="4.5" fill="#d97706" />
                </svg>
              </div>

              <!-- Footer Caption -->
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                <span class="text-slate-700 font-semibold truncate mr-2">Empirical trace evaluated against DDoS benchmark dataset.</span>
                <span class="text-amber-800 font-bold shrink-0">≈53 min advance warning</span>
              </div>
            </div>

            <div class="text-[11px] text-slate-500 font-sans leading-relaxed text-center pt-1 border-t border-slate-100">
              The continuous second-order dynamic model captures anomalous rate-of-change curvature and residual divergence <span class="font-mono text-slate-700 font-semibold">CR(t) &gt; μ + 3σ</span> approximately 53 minutes (~3,200s) before the traffic trace reaches its volumetric attack peak.
            </div>
          </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener("click", (e) => {
          if (e.target === modal || e.target.closest("#closeOdeTrajectoryModalBtn")) {
            modal.classList.add("hidden");
          }
        });
      }
      modal.classList.remove("hidden");
    }

    function renderOdeStage(idx, animate = false) {
      currentOdeStage = idx;
      if (window.researchState) {
        window.researchState.odeStage = idx;
      }
      if (window.updateResearchUrlHash) {
        window.updateResearchUrlHash(1, idx);
      }
      const data = odeStages[idx];

      const isFirst = (idx === 0);
      const isLast = (idx === odeStages.length - 1);

      const stageTitles = [
        "Signal Derivatives",
        "ODE Identification",
        "Residual Dynamics",
        "Warning Thresholds"
      ];
      const prevTitle = idx > 0 ? `Prev: ${stageTitles[idx - 1]}` : "";
      const nextTitle = idx < odeStages.length - 1 ? `Next: ${stageTitles[idx + 1]}` : "";

      const prevArrowBtn = isFirst ? '' : `
        <button id="odeStagePrevBtn" aria-label="Previous Stage: ${prevTitle}" title="← ${prevTitle}" class="stage-nav-arrow stage-nav-prev absolute -left-4 sm:-left-[18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-700 border border-slate-300 shadow-md hover:shadow-lg hover:text-amber-700 hover:border-amber-400 flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
          <i data-lucide="chevron-left" class="w-4 h-4 sm:w-5 sm:h-5"></i>
        </button>
      `;

      const nextArrowBtn = isLast ? '' : `
        <button id="odeStageNextBtn" aria-label="Next Stage: ${nextTitle}" title="${nextTitle} →" class="stage-nav-arrow stage-nav-next absolute -right-4 sm:-right-[18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-700 border border-slate-300 shadow-md hover:shadow-lg hover:text-amber-700 hover:border-amber-400 flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
          <i data-lucide="chevron-right" class="w-4 h-4 sm:w-5 sm:h-5"></i>
        </button>
      `;

      const content = `
        ${prevArrowBtn}
        ${buildOdeStageContent(idx, data)}
        ${nextArrowBtn}
      `;

      if (animate) {
        screen.style.opacity = "0.2";
        screen.style.transform = "translateY(4px)";
        setTimeout(() => {
          screen.innerHTML = content;
          screen.style.opacity = "1";
          screen.style.transform = "translateY(0)";
          attachOdeListeners();
          if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
          }
        }, 80);
      } else {
        screen.innerHTML = content;
        attachOdeListeners();
        if (window.lucide && typeof window.lucide.createIcons === "function") {
          window.lucide.createIcons();
        }
      }

      function attachOdeListeners() {
        const pipelineNodes = screen.querySelectorAll(".ode-pipeline-node");
        pipelineNodes.forEach((node) => {
          node.onclick = () => {
            const stIdx = parseInt(node.dataset.stage, 10);
            renderOdeStage(stIdx, true);
          };
        });

        // Edge Arrow Navigation Listeners (Strictly Non-Circular)
        const prevBtn = screen.querySelector("#odeStagePrevBtn");
        const nextBtn = screen.querySelector("#odeStageNextBtn");
        if (prevBtn) {
          prevBtn.onclick = (e) => {
            e.stopPropagation();
            if (currentOdeStage > 0) {
              renderOdeStage(currentOdeStage - 1, true);
            }
          };
        }
        if (nextBtn) {
          nextBtn.onclick = (e) => {
            e.stopPropagation();
            if (currentOdeStage < odeStages.length - 1) {
              renderOdeStage(currentOdeStage + 1, true);
            }
          };
        }

        // Accordion Math Toggle
        const mathToggle = screen.querySelector(".ode-math-toggle");
        if (mathToggle) {
          mathToggle.onclick = (e) => {
            e.stopPropagation();
            window.isOdeMathOpen = !window.isOdeMathOpen;
            renderOdeStage(currentOdeStage, false);
          };
        }

        // Open Trajectory Plot Modal
        const trajectoryModalBtn = screen.querySelector("#openOdeTrajectoryModalBtn");
        if (trajectoryModalBtn) {
          trajectoryModalBtn.onclick = (e) => {
            e.stopPropagation();
            showOdeTrajectoryModal();
          };
        }
      }

      // Update Slide Counter in Research Viewer Header
      const counterEl = document.getElementById("viewerSlideCounter");
      if (counterEl) {
        counterEl.textContent = `Stage 0${idx + 1} / 04`;
      }
      const stickyInd = document.getElementById("stickyStageIndicator");
      if (stickyInd) {
        stickyInd.textContent = `Stage 0${idx + 1} / 04`;
      }

      // Update Sticky Research Control Bar Stage Buttons
      const stickyBtns = document.querySelectorAll("#stickyStageButtons .sticky-stage-btn");
      stickyBtns.forEach((btn, i) => {
        const isCur = (i === idx);
        if (isCur) {
          btn.className = "sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer bg-amber-600 text-white font-semibold border-amber-600 shadow-2xs";
        } else {
          btn.className = "sticky-stage-btn px-2 py-0.5 rounded text-[10px] font-mono border transition cursor-pointer border-slate-200/80 bg-white text-slate-600 hover:bg-slate-50";
        }
      });
    }

    // Support Arrow Keys (Left / Right) & Number Keys (1-4) (Strictly Non-Circular)
    function handleOdeKeydown(e) {
      if (document.getElementById("odeSimulationScreen") && !e.target.matches("input, textarea")) {
        if (e.key === "ArrowRight") {
          if (currentOdeStage < odeStages.length - 1) {
            renderOdeStage(currentOdeStage + 1, true);
          }
        } else if (e.key === "ArrowLeft") {
          if (currentOdeStage > 0) {
            renderOdeStage(currentOdeStage - 1, true);
          }
        } else if (["1", "2", "3", "4"].includes(e.key)) {
          renderOdeStage(parseInt(e.key, 10) - 1, true);
        }
      }
    }
    window.removeEventListener("keydown", window._odeKeyHandler);
    window._odeKeyHandler = handleOdeKeydown;
    window.addEventListener("keydown", window._odeKeyHandler);

    window.renderOdeStage = renderOdeStage;
    window.showOdeTrajectoryModal = showOdeTrajectoryModal;
    window.renderOdeMode = function (modeOrIdx, anim) {
      if (typeof modeOrIdx === "number") {
        renderOdeStage(modeOrIdx, anim);
      } else {
        const modeMap = { baseline: 0, precursor: 1, saturation: 3 };
        renderOdeStage(modeMap[modeOrIdx] ?? 0, anim);
      }
    };
    window.setupOdeSimulator = setupOdeSimulator;

    renderOdeStage(currentOdeStage, false);
  }
})();
