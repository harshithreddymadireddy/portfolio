/**
 * =========================================================================
 * PERSONAL RESEARCH PORTFOLIO - MASTER DATA SPECIFICATION
 * =========================================================================
 * Centralized research data, documented empirical results, experience,
 * and academic credentials for Harshith Reddy Madireddy.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // -----------------------------------------------------------------------
  // 01. PERSONAL IDENTITY & HERO
  // -----------------------------------------------------------------------
  personal: {
    name: "Harshith Reddy Madireddy",
    initials: "HR",
    role: "AI/ML Researcher",
    descriptor: "AI/ML RESEARCHER · FALL 2027 MS/PHD APPLICANT",
    headline: "Engineering mathematically grounded, reliable intelligent systems.",
    intro: "AI/ML researcher and engineer investigating mathematically grounded machine learning, dynamical systems, and explainable intelligent architectures.",
    summary: "AI/ML researcher investigating predictive cybersecurity, dynamical systems, and explainable machine learning architectures. Awarded the INEX 2024 International Silver Medal for a 99.255% accurate 2D-wavelet spatial intrusion detection framework and presented early-warning dynamical modeling research at IIT Dhanbad. Proven engineering across production AI infrastructure and enterprise regulatory automation—preparing for Fall 2027 MS/PhD study.",
    statusLine: "Preparing for Fall 2027 MS/PhD Applications · Machine Learning & Intelligent Systems",
    email: "harshithreddymadireddy1@gmail.com",
    location: "Hyderabad, India",
    cvPath: "assets/documents/Harshith_Reddy_Madireddy_Academic_CV.pdf",
    photo: "assets/images/PF.jpg",
    photoFallback: "assets/images/profile.svg",
    
    // Core Research Interests
    interests: [
      "Machine Learning",
      "Cybersecurity",
      "Explainable AI",
      "Intelligent Systems"
    ],

    // Core Links
    links: {
      email: "mailto:harshithreddymadireddy1@gmail.com",
      portfolio: "https://harshithreddymadireddy.github.io/portfolio/",
      github: "https://github.com/harshithreddymadireddy",
      linkedin: "https://www.linkedin.com/in/harshith-reddy-madireddy",
      cv: "assets/documents/Harshith_Reddy_Madireddy_Academic_CV.pdf"
    }
  },

  // -----------------------------------------------------------------------
  // 02. SELECTED RESEARCH RESULTS (Two Core Empirical Findings)
  // -----------------------------------------------------------------------
  selectedResults: [
    {
      value: "~53 Min",
      label: "Observed Early-Warning Signal",
      context: "Observed anomalous curvature approximately 3,200 seconds before the observed volumetric peak in the investigated network traffic traces."
    },
    {
      value: "99.255%",
      label: "2D-Wavelet Intrusion Detection",
      context: "Extra Trees accuracy on 2D Haar wavelet-derived network-flow representations under 10-fold stratified cross-validation."
    }
  ],

  // -----------------------------------------------------------------------
  // 03. RESEARCH THEMES & FUTURE DIRECTIONS (Section 02)
  // -----------------------------------------------------------------------
  researchThemes: [
    {
      id: "theme-1",
      title: "Reliable & Explainable Machine Learning",
      tagline: "MS/PhD Direction",
      description: "Exploring interpretable intelligent systems using feature attribution methods such as SHAP, alongside quantitative evaluation of model reliability, uncertainty estimation, and robust representations."
    },
    {
      id: "theme-2",
      title: "Dynamical Modeling for Intelligent Systems",
      tagline: "MS/PhD Direction",
      description: "Investigating how continuous mathematical formulations—including differential equations and dynamical state modeling—can characterize rate-of-change behavior in complex telemetry."
    },
    {
      id: "theme-3",
      title: "Security, Privacy & Robustness",
      tagline: "MS/PhD Direction",
      description: "Exploring proactive defenses through robust feature representations and privacy-preserving inference for safety-critical systems."
    }
  ],

  futureResearchDirections: [
    {
      area: "Reliability, Robustness & Uncertainty Estimation",
      question: "How can intelligent systems provide rigorous uncertainty estimation and maintain robustness under distribution shift in mission-critical environments?",
      context: "Exploring connections between empirical machine learning, uncertainty estimation, robustness, and formal methods."
    },
    {
      area: "Dynamical Systems in Machine Learning",
      question: "Can continuous differential-equation formulations bridge physical process modeling and discrete neural representations for early-warning detection?",
      context: "Investigating Neural ODEs, continuous-time temporal representations, and dynamical modeling for complex system monitoring."
    },
    {
      area: "Security, Privacy & Robustness",
      question: "How can early anomaly characterization be achieved while maintaining privacy and robustness under adversarial conditions?",
      context: "Exploring privacy-preserving learning, robust representation learning, and distributed monitoring for decentralized networks."
    }
  ],

  // -----------------------------------------------------------------------
  // 04. FEATURED RESEARCH: TWO UNDERGRADUATE INVESTIGATIONS (Section 03)
  // -----------------------------------------------------------------------
  researchProjects: [
    {
      id: "investigation-1",
      number: "01",
      title: "Second-Order ODE Early Warning for Network Attacks",
      recognition: "Presented at IIT Dhanbad (DPA-NS 2025) & FTCCI IITEX 2025",
      tagline: "Modeling benign network dynamics with second-order ODEs to establish residual warning thresholds for precursor detection.",
      question: "Can deviations from learned benign network dynamics provide an early warning of an impending volumetric attack?",
      approach: "Flow Packets/s and Flow Bytes/s are treated as time-varying network signals with first- and second-order central difference derivatives. Homogeneous second-order ODEs are identified on benign traffic via linear regression to model expected dynamic behavior. Deviations between observed and model-implied velocities yield residual signals calibrated against benign statistical boundaries (μ + kσ) to detect anomalous preparatory dynamics prior to volumetric saturation.",
      mathFormulation: {
        equation: "ẍ + aẋ + bx = 0,   R = ẋ_{observed} − ẋ_{ODE},   Alert: CR > μ_{CR} + 3σ_{CR}",
        interpretation: "where x(t) represents the network flow state (packets/s or bytes/s), ẋ is velocity, ẍ is acceleration, and CR is the aggregate residual compared against benign calibrated thresholds.",
        caveat: "The observed lead time is trace-dependent and represents an empirical investigation rather than a generalized operational deployment."
      },
      modelsExplored: null,
      documentedResult: "≈53 min Lead Time: Identified anomalous curvature ~3,200 seconds prior to observed volumetric attack peak.",
      liveDemoUrl: "https://ddos-ews.onrender.com",
      chronology: "First Research Investigation • Academic Conference Presentations",
      status: "Presented at Academic Conferences",
      evidence: [
        { label: "Signals", desc: "Flow Packets/s + Flow Bytes/s" },
        { label: "System ID", desc: "Benign homogeneous ODE identification" },
        { label: "Thresholding", desc: "Residual-based thresholding (μ + kσ)" },
        { label: "Lead Time", desc: "≈53 min early-warning lead time" }
      ]
    },
    {
      id: "investigation-2",
      number: "02",
      title: "Spatial 2D-Wavelet Transform for Network Intrusion Detection",
      recognition: "Methodological Formulation • 10-Fold Stratified Cross-Validation",
      tagline: "Transforming selected network-flow features into a structured spatial-frequency representation for supervised DDoS/traffic classification.",
      question: "Can selected network-flow features be transformed into a structured spatial representation that captures global and localized variation useful for distinguishing benign and DDoS traffic?",
      approach: "Network-flow telemetry was preprocessed to remove constant and non-informative attributes. Variance thresholding and mutual information were then used to select 58 features for the downstream spatial representation and classification pipeline. Normalized feature vectors were extended to 64 elements, reorganized into an 8×8 spatial matrix, and decomposed using the 2D Haar Wavelet Transform into LL, LH, HL, and HH sub-bands.",
      evaluation: "10-fold stratified cross-validation across 10 evaluated classifiers.",
      modelsExplored: [
        { name: "Extra Trees", status: "99.255% Accuracy (Highest observed among evaluated models)" },
        { name: "XGBoost", status: "98.710% Accuracy" },
        { name: "Random Forest", status: "98.140% Accuracy" },
        { name: "AdaBoost", status: "Iterative Boosting Ensemble" },
        { name: "Decision Trees", status: "Interpretable Baseline" },
        { name: "SVM (RBF)", status: "Non-linear Kernel Baseline" },
        { name: "MLP", status: "Neural Baseline" },
        { name: "KNN", status: "Distance Space Baseline" },
        { name: "Gaussian NB", status: "Probabilistic Baseline" },
        { name: "LDA", status: "Linear Separability Baseline" }
      ],
      documentedResult: "99.255% accuracy: Extra Trees achieved the highest observed accuracy among the evaluated models.",
      liveDemoUrl: "https://detect-ddos.onrender.com",
      chronology: "Second Research Investigation • Discrete Wavelet Transform Pipeline",
      status: "Methodological Formulation • Evaluated Extra Trees Model",
      evidence: [
        { label: "Extraction", desc: "58-feature extraction" },
        { label: "Decomposition", desc: "2D Haar wavelet decomposition" },
        { label: "Evaluation", desc: "10-fold stratified evaluation" },
        { label: "Benchmark", desc: "Classifier benchmark (99.255% Extra Trees)" }
      ]
    }
  ],

  // Synthesis: Potential Integrated Architecture
  researchSynthesis: {
    headline: "Potential Integrated Architecture",
    title: "A proposed synthesis of the two investigations",
    sublabel: "Proposed synthesis of two separate investigations",
    summary: "The two studies suggest a complementary pipeline in which an early-warning signal could trigger more detailed flow-level analysis using the evaluated wavelet representation and classifier.",
    flowSteps: [
      { step: "01 CONTINUOUS MONITORING", title: "Time-Domain Precursor", desc: "Second-order ODE rate-of-change curvature tracking subtle preparatory anomalies." },
      { step: "02 PRECURSOR TRIGGER", title: "Early-Warning Signal", desc: "Inflection alert (~53 min lead time) triggering elevated flow telemetry capture." },
      { step: "03 SPATIAL TRANSFORMATION", title: "2D-Wavelet Sub-Bands", desc: "8×8 spatial matrix decomposed into LL, LH, HL, and HH frequency sub-bands." },
      { step: "04 CLASSIFIER INFERENCE", title: "Flow-Level Classification", desc: "Extra Trees model (99.255%) distinguishing attack signatures from benign flows." }
    ]
  },

  // -----------------------------------------------------------------------
  // 05. FEATURED RECOGNITION & PRESENTATIONS
  // -----------------------------------------------------------------------
  recognition: {
    headline: "2nd Place · Silver Medal — India International Innovation and Invention Expo (INEX 2024)",
    project: "2D-Wavelet Transform Network Intrusion Detection System",
    documentedResult: "99.255% Accuracy • 10-Fold Stratified Cross-Validation",
    scope: "Awarded 2nd place (Silver Medal) among 150+ international innovators, researchers, and inventors representing 15+ countries. INEX is organized by the Indian Innovators Association (IIA) in partnership with international innovation bodies to recognize breakthrough technical inventions.",
    description: "Recognized for the novel algorithmic integration of spatial signal processing (2D Haar wavelets) and supervised machine learning to decouple high-frequency transient attack bursts from baseline traffic flows.",
    presentations: [
      {
        venue: "IIT Dhanbad",
        conference: "National Conference on Data Predictive Analytics and Numerical Simulations (DPA-NS 2025), Indian Institute of Technology (ISM) Dhanbad",
        topic: "“ODE+ML=EWS: Early Warning Signals for Cyber Attacks”",
        status: "Presented Research",
        importance: "Premier national technical conference bringing together applied mathematicians, computational scientists, and machine learning researchers."
      },
      {
        venue: "FTCCI IITEX 2025",
        conference: "Industrial Innovation and Technology Expo (IITEX 2025), The Federation of Telangana Chambers of Commerce and Industry (FTCCI)",
        topic: "“Dynamical Modeling in Network Security & Early Warning”",
        status: "Presented Research",
        importance: "Organized by FTCCI—one of India's oldest industry associations (founded 1917)—to bridge academic research with defense, cyber, and industrial infrastructure leaders."
      }
    ],
    olympiads: [
      { title: "INEX 2024 Silver Medal", ranking: "2nd Place · Silver Medal", context: "International Innovation Expo · 2D-wavelet spatial intrusion detection" },
      { title: "SIPHO Physics Olympiad", ranking: "National Rank 190 (Gold Medal)", context: "Physics Olympiad · Physical systems & mechanics" },
      { title: "SIMO Mathematics Olympiad", ranking: "National Rank 235 (Gold Medal)", context: "Mathematics Olympiad · Analytical problem solving" },
      { title: "University Badminton", ranking: "First Place · Gold Medal", context: "Inter-university Doubles Champion" },
      { title: "Inter-School Kabaddi Competition", ranking: "First Place · Gold Medal", context: "Inter-school tournament · Team Captain" },
      { title: "Excellence in Community Service Award", ranking: "Community Service & Outreach · 2026", context: "Recognized for sustained community service, educational outreach, and local welfare initiatives." }
    ]
  },

  // -----------------------------------------------------------------------
  // 06. PROFESSIONAL & INDUSTRY EXPERIENCE (Section 05)
  // -----------------------------------------------------------------------
  experience: [
    {
      organization: "Thermo Fisher Scientific",
      role: "Software Intern · Regulatory Affairs R&D",
      period: "April 2025 – March 2026",
      location: "Hyderabad, India",
      context: "Hyderabad, India",
      description: "Architected an enterprise RAG pipeline using LangChain and Azure OpenAI to support medical-device registration across 40+ international jurisdictions. Enabled natural-language querying of regulatory documents and contributed to medical-device cybersecurity through threat modeling, hazard analysis, and cybersecurity SOP development.",
      contributions: [
        "Architected an enterprise RAG pipeline using LangChain and Azure OpenAI to support medical-device registration across 40+ international jurisdictions.",
        "Enabled natural-language querying of regulatory documents across multinational compliance workflows.",
        "Contributed to medical-device cybersecurity through threat modeling, hazard analysis, and cybersecurity SOP development."
      ],
      scope: [
        "40+ jurisdictions",
        "Estimated 90% documentation-overhead reduction",
        "Regulatory AI + cybersecurity"
      ],
      metrics: [
        { label: "Scope", value: "40+ Jurisdictions" },
        { label: "Efficiency", value: "Estimated 90% Reduction" },
        { label: "Domain", value: "Regulatory AI + Cybersecurity" }
      ],
      impact: "40+ jurisdictions • Estimated 90% documentation-overhead reduction • Regulatory AI + cybersecurity",
      bridgeToPhD: ""
    },
    {
      id: "pulse-platform",
      organization: "Pulse Platform",
      role: "AI Engineer · Part-time → Full-time",
      period: "August 2025 – Present",
      location: "Seattle, USA · Remote",
      context: "Seattle, USA · Remote",
      subheading: "AI MARKET SIGNAL & ALERT ENGINE",
      description: "Contributed to the AI signal infrastructure powering real-time market intelligence across news, social and financial data sources.",
      hasArchitectureDiagram: true,
      metrics: [
        { label: "Signal Accuracy", value: "94%" },
        { label: "Predictive Reliability on high-impact events", value: "Up to 85%" },
        { label: "Users in testing/early access", value: "200+" }
      ],
      contributions: [
        "Developed AI pipelines combining news, social-media and financial signals for contextual market alerts.",
        "Worked on sentiment analysis, multi-agent consensus and dynamic risk scoring.",
        "Built low-latency streaming workflows for real-time signal generation and delivery."
      ],
      scope: [
        "200+ users in testing/early access",
        "Up to 85% predictive reliability",
        "Real-time AI market alerting"
      ],
      impact: "200+ users in testing/early access • Up to 85% predictive reliability • Real-time AI market alerting",
      bridgeToPhD: ""
    }
  ],

  // -----------------------------------------------------------------------
  // 07. EDUCATION (Section 06)
  // -----------------------------------------------------------------------
  education: {
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    degree: "B.Tech, Information Technology",
    period: "November 2021 – May 2025",
    location: "Hyderabad, India",
    metrics: "GPA: 8.22 / 10.0 (3.53 / 4.0)",
    gpa: "8.22 / 10.0 (3.53 / 4.0)",
    graduationDate: "Graduated May 2025",
    selectedCredentialsNote: "Additional credentials listed on Academic CV →"
  },

  // -----------------------------------------------------------------------
  // 08. PROFESSIONAL CERTIFICATIONS
  // -----------------------------------------------------------------------
  certifications: [
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      year: "2025",
      domain: "Cloud AI Infrastructure"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "KNIME",
      year: "2025",
      domain: "Data Science & Analytics"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      year: "2024",
      domain: "Machine Learning Foundations"
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker, Inc.",
      year: "2025",
      domain: "DevOps & Containerization"
    }
  ],

  allCertifications: [
    { title: "Microsoft Azure AI Essentials Professional Certificate", issuer: "Microsoft", year: "2025", domain: "Cloud AI Infrastructure" },
    { title: "Data Science Professional Certificate", issuer: "KNIME", year: "2025", domain: "Data Science & Analytics" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI", year: "2024", domain: "Machine Learning Foundations" },
    { title: "Docker Foundations Professional Certificate", issuer: "Docker, Inc.", year: "2025", domain: "DevOps & Containerization" },
    { title: "Prompt Engineering and Programming with OpenAI", issuer: "Columbia+", year: "2025", domain: "LLM Orchestration" },
    { title: "Public Speaking Skills Professional Certificate", issuer: "Toastmasters International", year: "2025", domain: "Scientific & Public Communication" },
    { title: "Agile Virtual Experience Program", issuer: "JPMorgan Chase & Co.", year: "2023", domain: "Software Engineering & Agile" }
  ],

  // -----------------------------------------------------------------------
  // 09. LEADERSHIP & SERVICE (Section 07)
  // -----------------------------------------------------------------------
  leadership: {
    organization: "Hussaini Welfare Association",
    role: "Education & Outreach Lead · Pro Bono",
    period: "June 2020 – Present",
    tenure: "6+ Years Continuous Service",
    location: "Nagaram, India",
    description: "Led sustained education and community initiatives across mentorship, healthcare, and environmental programs, mentoring 15 students over four consecutive years, coordinating health camps serving 200+ residents, and mobilizing 20+ volunteers for environmental initiatives.",
    contributions: [
      "Mentored 15 students over four consecutive years, providing structured guidance in mathematics, science, and academic development.",
      "Coordinated community welfare initiatives including organizing free health camps serving 200+ local residents and leading environmental awareness drives with 20+ volunteers."
    ],
    scope: [
      "6+ years of service",
      "15 students mentored",
      "200+ residents reached"
    ],
    reflection: ""
  },

  // -----------------------------------------------------------------------
  // 10. APPLIED ENGINEERING SYSTEMS & TECHNICAL STACK (Section 05)
  // -----------------------------------------------------------------------
  appliedProjects: [
    {
      id: "app-proj-1",
      title: "CypherDocs",
      category: "Hybrid Graph-Vector RAG Platform",
      subtitle: "Multi-Hop Knowledge Retrieval & Dual Fallback Engine",
      problem: "Dense vector retrieval can miss multi-hop relational dependencies and structural relationships across complex documents.",
      approach: "Engineered a GraphRAG system combining Neo4j graph traversal, vector embeddings, asynchronous document parsing, and multi-model Gemini fallbacks.",
      technology: ["Python", "FastAPI", "Neo4j", "Cypher", "Gemini API", "Docker"],
      result: "Relationship-aware document retrieval with multi-hop entity exploration.",
      github: "https://github.com/harshithreddymadireddy/CypherDocs-GraphRAG"
    },
    {
      id: "app-proj-2",
      title: "Social Media Intelligence Hub",
      category: "NLP Microservices & Automated Summarization",
      subtitle: "Concurrent Sentiment Extraction & Content Synthesis",
      problem: "High-volume unstructured text streams require concurrent sentiment classification and automated summarization.",
      approach: "Built a modular FastAPI pipeline combining DistilBERT for classification with GPT-2 for generative content synthesis.",
      technology: ["Python", "FastAPI", "DistilBERT", "GPT-2", "PyTorch", "Docker"],
      result: "Containerized microservice serving concurrent sentiment classifications and automated thematic summaries.",
      github: "https://github.com/harshithreddymadireddy/SentimentAnalysis"
    }
  ],

  // Research Repositories & Engineering Artifacts
  openSourceRepos: [
    {
      name: "Wavelet-Feature-Extractor",
      desc: "2D discrete wavelet transform pipeline & 8×8 matrix reshaping for intrusion detection.",
      link: "https://github.com/harshithreddymadireddy/Wavelet-Feature-Extractor"
    },
    {
      name: "GraphRAG-Neo4j-FastAPI",
      desc: "Hybrid Neo4j Knowledge Graph & vector search with FastAPI and Gemini embeddings.",
      link: "https://github.com/harshithreddymadireddy/GraphRAG-Neo4j-FastAPI"
    }
  ],

  // Curated, High-Signal Technical Stack
  technicalStack: [
    {
      category: "Core Languages",
      items: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      category: "ML & Application Frameworks",
      items: ["PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "FastAPI"]
    },
    {
      category: "Data & Systems Infrastructure",
      items: ["Neo4j (Cypher)", "Docker", "Azure OpenAI", "Git / CI/CD"]
    },
    {
      category: "Mathematical & Analytical Methods",
      items: ["Differential Equations", "Dynamical Systems", "Wavelet Transforms", "Numerical Simulation"]
    }
  ],

  // -----------------------------------------------------------------------
  // 11. RESEARCH & DISSEMINATION (Section 04)
  // -----------------------------------------------------------------------
  researchOutput: [
    {
      shortVenue: "INEX 2024",
      category: "INTERNATIONAL INNOVATION EXPO · 2ND PLACE / SILVER MEDAL",
      year: "2024",
      title: "INEX 2024 — 2D-Wavelet Network Intrusion Detection",
      venue: "India International Innovation and Invention Expo (INEX 2024), Indian Innovators Association",
      status: "2nd Place · Silver Medal",
      result: "2nd Place · Silver Medal",
      summary: "Awarded 2nd place among 150+ international innovators from 15+ countries for the integration of 2D Haar wavelet-based spatial representations with supervised machine learning for network intrusion detection."
    },
    {
      shortVenue: "IIT Dhanbad",
      category: "NATIONAL TECHNICAL CONFERENCE",
      year: "2025",
      title: "ODE+ML=EWS: Early Warning Signals for Cyber Attacks",
      venue: "National Conference on Data Predictive Analytics and Numerical Simulations (DPA-NS 2025), Indian Institute of Technology (ISM) Dhanbad",
      status: "Research Presentation",
      result: "Research Presentation",
      summary: "Presented research on continuous second-order differential-equation modeling for investigating precursor signals in network traffic traces."
    },
    {
      shortVenue: "FTCCI IITEX",
      category: "INDUSTRIAL INNOVATION EXPO",
      year: "2025",
      title: "Dynamical Modeling in Network Security & Early Warning",
      venue: "Industrial Innovation and Technology Expo (IITEX 2025), Federation of Telangana Chambers of Commerce and Industry",
      status: "Research Presentation",
      result: "Research Presentation",
      summary: "Presented research on dynamical modeling, early-warning characterization, and spatial wavelet representations for network security."
    },
    {
      shortVenue: "Working Manuscript",
      category: "WORKING MANUSCRIPT",
      year: "2025–2026",
      title: "Spatial Wavelet Transforms and Dynamical Formulations for Anomaly Detection in Network Telemetry",
      venue: "Manuscript in preparation",
      status: "In Preparation",
      result: "In Preparation",
      summary: "Consolidates the mathematical formulation, classifier benchmark, and dynamical lead-time analysis developed across the two undergraduate investigations."
    }
  ],

  // -----------------------------------------------------------------------
  // 12. ABOUT & RESEARCH VISION (Section 07)
  // -----------------------------------------------------------------------
  about: {
    paragraphs: [
      "My interest in computational problem solving began with competitive mathematics and physics olympiads, where I developed an appreciation for formal mathematical structure and analytical problem solving.",
      "At VNR Vignana Jyothi Institute of Engineering and Technology, this quantitative interest guided two undergraduate research projects: a spatial 2D-wavelet intrusion detection study and a second-order differential-equation investigation of early-warning signals in network traffic.",
      "In industry, I worked on enterprise regulatory AI and cybersecurity at Thermo Fisher Scientific, and AI-driven market intelligence and real-time signal systems at Pulse Platform.",
      "I am preparing for Fall 2027 MS/PhD study focused on mathematically grounded, reliable, and explainable intelligent systems."
    ],
    narrative: "My interest in computational problem solving began with competitive mathematics and physics olympiads, where I developed an appreciation for formal mathematical structure and analytical problem solving. At VNR Vignana Jyothi Institute of Engineering and Technology, this quantitative interest guided two undergraduate research projects: a spatial 2D-wavelet intrusion detection study and a second-order differential-equation investigation of early-warning signals in network traffic. In industry, I worked on enterprise regulatory AI and cybersecurity at Thermo Fisher Scientific, and AI-driven market intelligence and real-time signal systems at Pulse Platform. I am preparing for Fall 2027 MS/PhD study focused on mathematically grounded, reliable, and explainable intelligent systems."
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
