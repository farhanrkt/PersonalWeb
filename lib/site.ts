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
   ETL and the internal tools that carry genotype and phenotype data — including
   two AI systems that run entirely on our own server, with no external APIs. My
   thesis on graph neural networks for music recommendation took Best Paper at
   ICICyTA 2024.`,
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
             CodeIgniter modules used across several departments — genotype and
             phenotype tooling for the biotechnology researchers, and the leave,
             day-off, design-request and guestbook flows that replaced paper
             ones. Two self-hosted AI tools with no external APIs: a document
             Q&A system over n8n, bge-m3 and Qdrant that streams its answers,
             and a coding assistant that keeps conversation history. I run the
             on-premise server all of it sits on — deployment, monitoring,
             troubleshooting — and I'm first-line support for the researchers
             using it.`,
  },
  {
    role: "Research Assistant",
    org: "Telkom University",
    where: "Bandung",
    period: "Nov 2024 — Feb 2025",
    detail: `Benchmarked three graph neural network architectures — GraphSAGE,
             GCN and GAT — for community detection on SNAP datasets.
             Reproducible training and evaluation pipelines in PyTorch
             Geometric covering preprocessing, sampling and hyperparameter
             tuning, then the findings written up and presented.`,
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
    detail: `Selected for the 2023 cohort: 250 hours of instructor-led training,
             and the TensorFlow Developer Certificate earned during it. The
             capstone was Healthify, a healthy-food recommender that treats diet
             adjustment as a knapsack-like problem — I built the recommendation
             model, from preprocessing through cross-validation and
             hyperparameter tuning.`,
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

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  /** Public verification URL. Present only where the credential is actually
   *  checkable — the page links these and says nothing about the rest, rather
   *  than claiming every entry can be verified. */
  credential?: string;
};

/** Shown compactly — never as nine cards. */
export const certifications: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "Stanford University", year: "2023" },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow Certificate Program",
    year: "2024",
    credential: "https://www.credential.net/6f4a2e6b-ba35-4822-8d47-e1b539000b18",
  },
  { name: "DeepLearning.AI TensorFlow Developer Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "TensorFlow: Data and Deployment Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Mathematics for Machine Learning and Data Science", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Structuring Machine Learning Projects", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Google Data Analytics", issuer: "Google — Coursera" },
  { name: "EF SET English Certificate — 79/100, C2 Proficient", issuer: "EF SET", year: "2023" },
  { name: "Programming fundamentals, logic, and Git", issuer: "Dicoding Indonesia", year: "2024" },
];

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
    label: "Retrieval & self-hosting",
    items: ["Qdrant", "bge-m3 embeddings", "n8n", "On-premise deployment"],
  },
  {
    label: "Shipping",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PHP / CodeIgniter",
      "C++",
      "Vercel",
      "Cloudflare Workers",
    ],
  },
] as const;
