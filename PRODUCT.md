# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — technical hiring audiences for data science and ML roles.** Two
distinct readers behind one visit:

- *Recruiters and screeners* arriving from a LinkedIn profile, a CV PDF, or a
  GitHub link. Time-boxed first pass, frequently on a phone. They need to
  establish role fit, seniority and credibility fast, and to find a way to make
  contact.
- *Hiring managers and senior data scientists* who click through. They open the
  live app, read the source, and judge rigor — whether the modelling is sound,
  whether claims are backed, whether the person understands their own results'
  limits.

**Secondary.** Academic and conference contacts reaching the ICICyTA
publication; peers in the Indonesian data and ML community.

## Product Purpose

A personal professional website for Farhan Rangkuti — a durable, owned home that
consolidates published research, applied ML and data-science projects,
professional background, a downloadable CV, and writing at one URL.

It is deliberately broader than a project portfolio: the portfolio is one
section of a professional presence, not the whole of it.

Success is a reviewer who, in a single visit, can establish what he does, verify
it against real artifacts rather than assertions, and reach him.

## Positioning

**A data scientist whose work is verifiable end to end.**

Three things a neighboring portfolio could not truthfully copy:

1. **The modelling is deployed, not just notebooked.** QuantDesk, ScholarTrack
   and LinguaKu are each running at a public URL, so a reviewer can exercise the
   model rather than read a claim about it.
2. **Peer-reviewed research at undergraduate level.** The GNN music
   recommendation thesis was presented at ICICyTA 2024, published on IEEE
   Xplore, and took Best Paper (1st) and Best Presenter (8th).
3. **Negative results are kept, not buried.** The QuantDesk history contains the
   commit *"Measure whether the composite ranking predicts anything. It does
   not."* Across projects, limits are stated next to results — refusals to score
   out-of-domain inputs, measured signal correlation printed in the header,
   coverage percentages measured before anything was built on them.

## Operating Context

- Reviewers arrive from LinkedIn, a CV PDF, or GitHub — rarely by search. The
  site is a destination that other channels point at.
- Screening is time-boxed and often mobile-first.
- Market is Indonesian plus remote/international; the site is in English.
- The CV is a live document the user already maintains and re-exports; the site
  must link it without duplicating its facts into prose that will drift.
- GitHub is the verification surface. Anything the site calls public must
  actually be readable there, on the repository's default branch.

## Capabilities and Constraints

- **Featured work is restricted to already-public GitHub repositories that are
  actually finished.** Two confirmed filters, applied in order:
  1. *Public only.* Local-only projects — MusicAnalysis, VocalAcousticFootprint,
     ProjectAnri, Second Brain — are excluded despite being strong applied-ML work.
  2. *Complete only.* Of the public repositories, the three live applications are
     the finished engineering work, and the data-science repositories are
     complete. Explicitly excluded as unfinished: AutoTA, stock-whale-tracker,
     Stochastic-DCF-DDM, Whatsapp-chat-analyzer, and
     Self-Correcting-Multi-Agent-Syndicate. These must not be featured and must
     not have READMEs written to make them look finished.
- **Vercel deploys these projects from their working branch, not `main`.**
  Recorded 2026-08-30 after getting this wrong: `main` being behind is not
  evidence that anything is undeployed, and the only reliable check is to probe
  the live URL for the feature itself. Both apps are current.
- **Both apps gained substantial work on 2026-08-29, and it is all live:**
  - *ScholarTrack:* the indigo 60/30/10 palette, and a `not_stated` third state
    that renders as "funding not itemised by the programme" instead of a blank.
    New substance: a five-way taxonomy for why a field is blank (never-crawled,
    not-retrieved, model-silent, grounding-rejected, not-published — only the
    last reaches a student), second sources that now *fill* gaps rather than
    only reconcile dates, 18 migrations, and crawlers deployed to Vercel.
  - *QuantDesk:* a v2 pass on hierarchy and accessibility, and the measurement
    of the claim the app makes loudest. The confluence rail asserted the four
    lenses rest on two independent bodies of data; nothing had measured it.
    Cohen's kappa now ships in the panel with the full pairwise table — raw
    agreement, chance agreement, κ, a bootstrapped 95% interval, τb and the
    name count per pair — stamped with its measurement date and naming the
    script to re-run. **Live figure: κ = +0.05 across 121 names** (Dow Jones
    Industrial Average and Nasdaq-100); across all four universes, 168
    deduplicated names, it is +0.03. The claim survived. Flow · Trend came out
    at +0.07 on an interval straddling zero, and the participation ratio says
    the four lenses carry 3.72 lenses' worth of independent information — but
    the conservative collapse was kept, because a κ near zero cannot tell an
    independent-and-informative lens from an independent-and-noisy one.
- **Three confirmed live deployments:** QuantDesk
  (`quantdesk-v1.vercel.app`), ScholarTrack (`scholartracker-v1.vercel.app`),
  LinguaKu (`linguaku.farhanrangki.workers.dev`). All three verified reachable.
- **Publication:** ICICyTA 2024, IEEE Xplore document `10912908`.
- **No availability or job-seeking language anywhere on the site.** The user is
  currently employed; the contact section stays warm but announces nothing.
- **Contact surface:** email, LinkedIn, GitHub. The phone number on the CV is
  deliberately excluded from the public site.
- **Sections committed:** publication/research, about/background, downloadable
  CV, writing/notes.

### Open — do not invent

- **Writing/notes has no content yet.** The section is committed but unwritten.
  Until at least one real piece exists it must not ship as an empty shell
  implying a cadence that does not exist.
- **LinkedIn side activities and competitions are not yet captured.** The user
  states these exist and are absent from the CV. No LinkedIn extract has been
  read — the Chrome extension is not connected and the profile is behind an auth
  wall. These facts are unknown, not absent.
- **`ds-test` is a job take-home, and its status is undecided.** It is the
  strongest pure data-science artifact in the account — SQL (RFM, anomaly
  detection, repeat-purchase), Python (EDA, model comparison, scorecard, SHAP),
  R (Hosmer-Lemeshow, calibration curve, cut-off selection), and a decision slide
  for a credit case. Two unresolved questions before it can ship: whether the
  originating company's terms permit publishing it, and that its documentation is
  in Indonesian while the site is in English.
- **README coverage is resolved for everything in scope.** QuantDesk's 29 KB
  README was merged to `main` on 2026-08-24; ScholarTrack and LinguaKu already
  carried theirs. The five repositories still without READMEs are the excluded
  unfinished ones, so this is no longer a blocker.
- **Telkom research assistantship dates — resolved to Nov 2024 – Feb 2025.**
  Two independent sources (the CV and the predecessor site) agree; only LinkedIn
  says Apr 2025, and it is the outdated record. Worth correcting on LinkedIn.
- **CV PDF is not yet placed in the project.** The latest export lives in the
  user's Downloads folder and has not been copied in or given a stable path.

## Brand Commitments

- **Name:** Farhan Rangkuti. **GitHub:** `farhanrkt`.
  **LinkedIn:** `linkedin.com/in/farhan-rangkuti`.
  **Email:** `farhanrangki@gmail.com`.
- **Voice — binding, and evidenced by his own writing.** Precise, measured,
  understated. States what a thing cannot do in the same breath as what it can.
  Prefers a measured number to an adjective. Never uses "passionate",
  "cutting-edge", or engagement-bait phrasing. This is not an aspiration: it is
  the register of every README he has written, and the site must not break it.
- No fabricated testimonials, endorsements, metrics, or client claims. There are
  none, and their absence is a fact to respect rather than a gap to fill.
- **Standing preference: conventional structure, with material character.**
  Settled 2026-08-25 across three builds. A metaphor-led design was rejected as
  a gimmick; the plain conventional rebuild was then rejected as bland and
  incoherent. The committed position is between them.
  - **No governing metaphor.** No themed vocabulary, no conceptual frame over
    the content, and none smuggled back in as a detail. Sections are named for
    what they hold: Work, Research, Writing, About.
  - **But not neutral-by-default either.** The page carries a voice: a warm
    paper ground rather than stark white, a display serif, small-caps metadata,
    a specific warm accent, and numbered sections. These were each chosen
    deliberately after the alternatives were seen and rejected.
  - **The ground exists to serve the screenshots.** Two of the three products
    are dark-UI; a stark white page made them read as foreign objects pasted on.
    A toned ground is a functional decision, not a decorative one.
- **Real imagery only.** Screenshots are captured from the live applications;
  figures come from the actual repositories. No stock photography, no
  illustrative placeholders, no invented charts.

## Evidence on Hand

- **CV / résumé PDF** — `~/Downloads/Farhan Rangkuti-resume (3).pdf` (latest of
  several exports). Contains: Telkom University, Undergraduate Informatics,
  GPA 3.56/4.00, Feb 2021 – Feb 2025; Bioinformatics Technician at PT SMART Tbk,
  Bogor, Nov 2025 – present (large-scale genotype/phenotype ETL, internal web
  modules, on-prem server operations); Research Assistant at Telkom (GraphSAGE,
  GCN, GAT, PyTorch Geometric); Teaching Assistant; Bangkit Academy 2023 by
  Google, GoTo and Traveloka, ML cohort, ~250 hours.
- **Current role, in specifics** (from the predecessor site, more detailed than
  the CV): based at Sentul, Bogor; builds internal web applications in
  CodeIgniter 3 (HMVC) for lab management and phenotypic data visualisation,
  supporting **oil palm genomic research**. The domain is plant genomics, which
  is a distinguishing detail the CV flattens into "bioinformatics".
- **Additional stack evidenced but not on the current CV** — PHP, CodeIgniter 3,
  HMVC, MySQL, Bootstrap, PyTorch Geometric, Tableau.
- **Predecessor personal site** — `farhanrkt.github.io`, self-titled "Data
  Scientist & Bioinformatics". The new site supersedes it. Note it publishes his
  phone number; the current decision excludes that.
- **Publication — the full paper is in hand** (read 2026-08-25). *Comparative
  Evaluation of Graph Neural Network Algorithms for Music Recommendation
  Systems*, Farhan Rangkuti and Fitriyani, School of Computing, Telkom
  University. ICICyTA 2024, IEEE pp. 297–301, **Scopus-indexed**, IEEE Xplore
  `10912908`. Best Paper (1st), Best Presenter (8th).
  - **It compares exactly two architectures: GraphSAGE and GCN.** Not three.
    GAT is named in the paper's introduction only as an example of GNN variants.
    An earlier version of this site claimed three including GAT — that was a
    conflation with the Telkom research assistantship, which is a separate
    project on SNAP community detection and *did* use GAT. Do not merge them.
  - Data: Spotify Million Playlist Dataset (1M playlists, ~2M tracks, 300k
    artists, 2010–2017), 10,000-playlist subset, bipartite playlist–track graph,
    Spotify API audio features as initial node embeddings, dot-product scoring.
  - Headline results (experiment 1): GraphSAGE AUC 0.9116 / precision 0.8939 /
    F1 0.7986; GCN recall 0.8270 and marginally faster training. GCN overfits;
    GraphSAGE generalises. Wider layers did not improve any metric.
  - The most distinctive finding is qualitative: GCN drifts toward
    already-popular tracks while GraphSAGE returns a more specific spread. The
    paper states this directly.
- **Three live applications**, verified reachable.
- **~20 public non-fork GitHub repositories**, spanning quantitative finance
  (QuantDesk, AutoTA, Stochastic-DCF-DDM, stock-whale-tracker), agentic
  retrieval (Self-Correcting-Multi-Agent-Syndicate), applied ML coursework, and
  two shipped TypeScript products.
- **Measured project figures** available from project documentation, e.g.
  LinguaKu: 108 ms to first answerable question, 138 KB gzipped JS, 822 tests,
  0 WCAG 2.1 AA violations gated in CI.
- **Certifications — ten, all with verifiable credential IDs** (from LinkedIn,
  2026-08-24). The CV lists only a fraction of these:
  - *TensorFlow Developer Certificate* — TensorFlow Certificate Program,
    Feb 2024, ID `95087323`, valid to Feb 2027.
  - *Machine Learning Specialization* — **Stanford University**, Oct 2023.
  - *Mathematics for Machine Learning and Data Science Specialization* —
    DeepLearning.AI, Sep 2023.
  - *DeepLearning.AI TensorFlow Developer Specialization* — Nov 2023.
  - *TensorFlow: Data and Deployment Specialization* — DeepLearning.AI, Nov 2023.
  - *Structuring Machine Learning Projects* — DeepLearning.AI, Nov 2023.
  - Three Dicoding Indonesia certificates (programming fundamentals,
    programming logic, Git/GitHub), Jan 2024.
- **English proficiency is credentialed, not asserted** — *EF SET English
  Certificate 79/100, C2 Proficient*, Sep 2023. Materially stronger than the
  CV's "proficient in English" for international applications.
- **Side activities, recovered from the 2023 CV and the predecessor site** —
  all absent from the current CV:
  - *#JuaraGCP Season 12* — completed the Google Cloud Indonesia challenge
    (~Feb 2026), earning GCP skill badges. Self-directed.
  - *Google Developer Student Club UI* — Trainee, Jan 2021 – Dec 2021. AI/ML
    workshops, industry guest sessions, hands-on project work.
  - *Tahfidz Ummul Quro, Medan* — Language, Mathematics and Science Teacher,
    Jan 2023 – May 2023. 18 teaching hours a week across 35 students.
  - *Introduction to AI course project* — **Leader**, Apr – May 2023. KNN and
    Decision Tree on an arrhythmia dataset. Earliest evidence of leading a
    technical team; corresponds to the `KNN-DT-ML-Algorithm` repository.
- **Bangkit** — Machine Learning cohort, graduate certificate `M012BSY1554`.
  Capstone *Healthify* (team CH2-PS253, seven members) — a nutrition
  recommendation app solving a knapsack-like diet problem.
- **Languages** — native Indonesian, proficient English (see EF SET above).

**Absences that must not be fabricated:** no testimonials, no employer
endorsements, no user or traffic numbers, no published writing yet, and no
awards beyond ICICyTA.

**There are no competitions.** Confirmed by the user on 2026-08-24 after every
source was checked. This is a settled fact, not a gap awaiting research: never
add a competitions or awards section beyond ICICyTA, and never re-open this.

## Product Principles

1. **Claim only what an artifact can verify.** Every assertion on the site
   should terminate in a live URL, a repository, or a published paper.
2. **The model is the point; the app is the proof.** Lead with the
   data-science substance, and use the deployment as evidence it survived
   contact with reality — not as the achievement itself.
3. **Name the limit next to the result.** The willingness to state what a model
   cannot do is the strongest differentiator in the evidence, and it is real.
4. **Public means clickable.** If the site calls something public, a reviewer
   must land on something readable — not a bare default branch.
5. **One professional home, kept current.** Research, work, background, CV and
   writing live together and stay in sync with the CV rather than drifting from it.

## Accessibility & Inclusion

WCAG 2.1 AA is the working standard, and it is already met elsewhere in the
user's work — LinguaKu gates zero axe violations in CI across both themes. The
site must clear 4.5:1 for normal text and 3:1 for large text, be fully keyboard
navigable, and respect `prefers-reduced-motion`.

Mobile-first is an accessibility requirement here, not a preference: a
meaningful share of first views are recruiters on phones.
