// ---------------------------------------------------------------------------
// Personal details. Edit these — everything else on the site reads from here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Farhan Rangkuti",
  handle: "farhanrkt",
  role: "Data Scientist",
  location: "Bogor, Indonesia",
  email: "farhanrangki@gmail.com",
  github: "https://github.com/farhanrkt",
  linkedin: "https://www.linkedin.com/in/farhan-rangkuti",
  url: "https://farhanrangkuti.vercel.app",
  /** Drop a square photo in public/images/ and set the path here; the page
   *  renders without one until you do. */
  photo: "",
  tagline: "I build models, ship them, and say what they can't tell you.",
} as const;

/**
 * The first viewport's factual claim. Phrases, not a stat strip — a big-number
 * row would turn checkable facts into the hero-metric template.
 */
export const proof = [
  "Three models running in production",
  "Best Paper at ICICyTA 2024, indexed in Scopus",
  "Graph neural networks, anomaly detection, valuation",
] as const;

export const intro = [
  `I work where the model meets the thing people actually use. A four-lens
   equity research desk, a scholarship crawler that may only record what it can
   quote, and an offline-first language tutor scheduled by a memory model — all
   three deployed, all three still running.`,
  `Day to day I'm a bioinformatics technician on oil palm genomics, building the
   ETL and the internal tools that carry genotype and phenotype data. My thesis
   on graph neural networks for music recommendation took Best Paper at ICICyTA
   2024.`,
  `The habit that runs through all of it is refusing to overstate a result. A
   blank field beats a plausible wrong one; a model that can't speak to a case
   should say so rather than return a number.`,
] as const;

export const background = [
  {
    role: "Bioinformatics Technician",
    org: "PT SMART Tbk",
    where: "Sentul, Bogor",
    period: "Nov 2025 — present",
    detail: `Large-scale ETL to process, validate and ingest millions of genotype
             and phenotype records for oil palm genomic research. Internal
             CodeIgniter applications for lab management and phenotypic data
             visualisation, plus on-premise server operations.`,
  },
  {
    role: "Research Assistant",
    org: "Telkom University",
    where: "Bandung",
    period: "Nov 2024 — Feb 2025",
    detail: `Community detection on SNAP datasets — data exploration and
             preprocessing, then GraphSAGE, GCN and GAT implemented over
             PyTorch Geometric, with the training pipelines to compare them.`,
  },
  {
    role: "Teaching Assistant — Discrete Mathematics",
    org: "Telkom University",
    where: "Bandung",
    period: "Feb 2024 — Jul 2024",
    detail: `Supported a class of 41 students: assignment solutions, grading,
             discussion forums and the term's grade reporting.`,
  },
  {
    role: "Machine Learning Cohort",
    org: "Bangkit Academy — Google, GoTo, Traveloka",
    where: "Remote",
    period: "Aug 2023 — Jan 2024",
    detail: `Around 250 hours of instructor-led training. Capstone was Healthify,
             a nutrition recommendation system framed as a knapsack-like
             optimisation over a USDA food dataset.`,
  },
] as const;

export const education = {
  degree: "Bachelor of Informatics",
  school: "Telkom University",
  period: "Feb 2021 — Feb 2025",
  grade: "3.56 / 4.00",
  thesis: `Comparative Evaluation of Graph Neural Network Algorithms for Music
           Recommendation Systems`,
} as const;

/** Ten, all with credential IDs. Shown compactly — never as ten cards. */
export const certifications = [
  { name: "Machine Learning Specialization", issuer: "Stanford University", year: "2023" },
  { name: "TensorFlow Developer Certificate", issuer: "TensorFlow Certificate Program", year: "2024" },
  { name: "DeepLearning.AI TensorFlow Developer Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "TensorFlow: Data and Deployment Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Mathematics for Machine Learning and Data Science", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Structuring Machine Learning Projects", issuer: "DeepLearning.AI", year: "2023" },
  { name: "EF SET English Certificate — 79/100, C2 Proficient", issuer: "EF SET", year: "2023" },
  { name: "Programming fundamentals, logic, and Git", issuer: "Dicoding Indonesia", year: "2024" },
] as const;

export const capabilities = [
  {
    label: "Machine learning",
    items: [
      "PyTorch Geometric",
      "TensorFlow",
      "scikit-learn",
      "Graph neural networks (GraphSAGE, GCN, GAT)",
      "Isolation Forest",
      "SHAP",
    ],
  },
  {
    label: "Statistics & analysis",
    items: [
      "Monte Carlo simulation",
      "Model calibration (Hosmer–Lemeshow)",
      "Time-series analysis",
      "Metaheuristic optimisation",
      "pandas / NumPy",
      "R",
    ],
  },
  {
    label: "Data engineering",
    items: ["Python", "SQL", "PostgreSQL", "Large-scale ETL", "Supabase", "Tableau"],
  },
  {
    label: "Shipping",
    items: ["Next.js", "React", "FastAPI", "TypeScript", "Vercel", "Cloudflare Workers"],
  },
] as const;
