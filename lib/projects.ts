export type Metric = { value: string; label: string; note?: string };
export type Block = { title: string; body: string[] };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  year: string;
  role: string;
  status: string;
  domain: string;
  liveUrl?: string;
  repoUrl: string;
  /** A real screenshot of the running application, captured from the live URL. */
  image: string;
  shape: "wide" | "phone";
  shotAlt: string;
  /** One short line for the index cards, where space is tight. */
  shotShort: string;
  /** True pixel dimensions, so nothing guesses an aspect ratio. */
  imageW: number;
  imageH: number;
  /** An optional second capture, shown on the case study only. */
  image2?: string;
  shape2?: "wide" | "phone";
  shotAlt2?: string;
  image2W?: number;
  image2H?: number;
  chips: string[];
  stack: { label: string; value: string }[];
  metrics: Metric[];
  problem: string[];
  sections: Block[];
  decisions: Block[];
  limits: Block[];
};

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  {
    slug: "quantdesk",
    name: "QuantDesk",
    tagline: "Four independent models read the same stock, side by side.",
    blurb:
      "A quantitative equity research desk that runs four models reading four different datasets — order flow, price trend, intrinsic value and accounting quality — then reports where they agree, where they contradict each other, and what none of them can see. Covers US and Indonesian (IDX) listings.",
    year: "2026",
    role: "Sole engineer — modelling, API, interface",
    status: "Live",
    domain: "Quantitative finance",
    liveUrl: "https://quantdesk-v1.vercel.app",
    repoUrl: "https://github.com/farhanrkt/QuantDesk",
    image: "/images/quantdesk-confluence.png",
    shape: "wide",
    shotAlt:
      "QuantDesk reading AAPL: four lenses reporting Quiet, Uptrend, Above model range and Neutral, above a line stating that Flow and Trend both read price and volume while Value and Quality both read the filings \u2014 so the count is of data sources, not panels.",
    shotShort: "AAPL read by all four lenses \u2014 and where they disagree.",
    imageW: 2480,
    imageH: 826,
    image2: "/images/quantdesk-overlap.png",
    shape2: "wide",
    image2W: 2392,
    image2H: 850,
    shotAlt2:
      "The measured-overlap panel: chance-corrected agreement for all six pairs of lenses, each with the raw agreement rate, the rate chance alone would produce, \u03ba, a bootstrapped 95% interval, Kendall\u2019s tau-b, and the number of names it was measured on.",
    chips: ["Next.js 15", "React 19", "Python", "FastAPI", "scikit-learn", "Recharts"],
    stack: [
      { label: "Frontend", value: "Next.js 15 · React 19 · TypeScript · Tailwind · Recharts" },
      { label: "API", value: "Python 3.12 · FastAPI on Vercel serverless functions" },
      { label: "Modelling", value: "scikit-learn · pandas · NumPy" },
      { label: "Testing", value: "pytest · ruff · ESLint" },
      { label: "Deploy", value: "Vercel — Next.js and Python API in one project" },
    ],
    metrics: [
      { value: "4", label: "lenses \u2014 independence measured, not assumed", note: "\u03ba = +0.03 between the price and filings families, over 168 names" },
      { value: "10,000", label: "draw Monte Carlo", note: "per valuation, for a range not a point" },
      { value: "~6s", label: "to rank the Nasdaq-100", note: "250 symbols, batched upstream calls" },
      { value: "2", label: "markets covered", note: "US equities and IDX" },
    ],
    problem: [
      `Most retail research tools give you one opinion and a number. That is the
       failure mode, not the feature: any single model can be fooled. A stock
       looks cheap on a spreadsheet while quietly bleeding cash; it looks strong
       on a chart because one fund happened to rebalance that week.`,
      `The interesting signal is not any one model's verdict — it is agreement
       between models that share no inputs. So QuantDesk runs four that read
       genuinely different data and puts their answers in a row, including when
       they contradict each other.`,
    ],
    sections: [
      {
        title: "Flow — is anyone unusual trading this?",
        body: [
          `An Isolation Forest reads six behavioural features per trading day —
           return, relative volume, absolute return, Money Flow Index, an
           on-balance-volume z-score, and intraday range. Days that don't look
           like other days get flagged, labelled Accumulation or Distribution
           by a four-way vote of money-flow indicators, and scored 0–100.`,
          `Alongside it runs a CUSUM change detector, which exists to catch what
           the first model structurally cannot. An institution building a
           position splits its order across weeks precisely so that no single
           day stands out — a per-day outlier detector can only ever catch the
           impatient buyer. CUSUM accumulates small deviations instead, so a
           long run of unremarkable days trips a threshold none of them would
           alone. On AAPL it surfaced a 27-day accumulation running at 1.04×
           average volume: invisible to any volume-spike rule.`,
        ],
      },
      {
        title: "Trend — what is the price doing, and could I have held it?",
        body: [
          `Five sections behind a horizon selector, ordered longest-first so
           reading left to right walks from the strongest evidence to the
           weakest. The long horizon leads with a checklist — 200-day average,
           Faber's 10-month rule, 12-1 momentum, ADX, Hurst exponent, trend-line
           fit, 52-week position, drawdown survivability — each line stating
           which way it points and why.`,
          `Then the table that actually matters: every overlapping holding
           period in the history, so "worst 3-year window" replaces a headline
           CAGR that only describes one lucky start date. Then what holding it
           cost — maximum drawdown with depth, duration and recovery, plus the
           Ulcer index, which correctly scores a long shallow grind as worse
           than a sharp fall, because that is how it feels to hold.`,
          `Setups are pre-registered and checked in order, and "none of them is
           present" is the most common answer. A test fires the detector across
           twenty random walks and fails the build if a majority produce a
           trade. Candlestick patterns are detected, graded weak, and firewalled
           — none is permitted to place an entry, stop or target.`,
        ],
      },
      {
        title: "Value — what is the business actually worth?",
        body: [
          `Three models routed automatically by sector: discounted cash flow for
           most companies, a dividend discount model for banks and insurers, and
           residual income for financials with no usable dividend data. Each
           runs a five-year projection plus terminal value, then a 10,000-draw
           Monte Carlo to produce a range rather than a single number.`,
          `The panel also solves the model backwards: what growth rate would
           make today's price correct? On AAPL that came out at 37% a year for
           five years against a 10% assumption — a claim about the world you can
           agree or disagree with, rather than a "fair value" a reader has no
           basis to judge. It is stated as conditional on the other inputs,
           because across plausible discount rates the same price implies
           anywhere from 24% to 42%.`,
        ],
      },
      {
        title: "Quality — are the numbers real?",
        body: [
          `Three published accounting screens computed from filings the app has
           already fetched: the Piotroski F-Score for fundamental trend, the
           Altman Z''-score for distance from distress, and the Beneish M-Score
           for accruals resembling companies later found to have manipulated
           earnings. The Altman variant is the emerging-market one, so an IDX
           listing and a US one land on the same scale.`,
        ],
      },
      {
        title: "Scan, rank, and the honesty of a composite",
        body: [
          `The breadth half of the workflow batch-downloads up to 250 symbols in
           a handful of upstream calls and scores each on seven price-and-volume
           signals. Every signal becomes a cross-sectional percentile before
           anything is combined, because "top decile of this scan" is a claim
           the data supports and "82/100" is not.`,
          `The panel then does what composite scores usually hide: it reports the
           measured rank correlation between every pair of signals and the
           participation ratio of that matrix — how many genuinely independent
           signals the composite is really averaging. On a real Dow scan,
           momentum and trend correlate at +0.98 and seven columns carry about
           3.2 signals' worth of independent information. That number is printed
           in the panel header rather than buried.`,
        ],
      },
      {
        title: "Measuring the claim the app makes loudest",
        body: [
          `In the largest type on the page, on every run, the confluence rail
           asserted that the four lenses rest on two independent bodies of data
           — and therefore that when the two agree, the agreement is not one
           fact counted twice. Nothing had ever measured it. Both the rail and
           the explainer admitted as much, and gave the same excuse: the ranking
           panel can measure its own overlap because a scan gives it a
           cross-section, and a single ticker does not. That is true of a
           request and false of a script.`,
          `The statistic is Cohen's kappa — observed agreement minus the
           agreement each lens's own habits already supply. Raw agreement is
           uninterpretable here for the same reason a raw screener hit count is:
           a lens calling 70% of companies cheap and one calling 70% sound land
           on the same label 58% of the time while sharing nothing at all.
           Kendall's tau-b runs alongside it, because kappa asks whether two
           lenses reach the same label and tau-b whether they order the same
           way. Intervals are bootstrapped over names rather than taken from a
           closed form that conditions on marginals which are themselves
           estimates.`,
          `It ran on all 168 deduplicated names of the four index universes,
           each pushed through the production payload builders — the same API
           calls the ticker bar actually sends, so the number describes this
           app rather than a lookalike. A lens that could not read does not
           vote: a bank's refused accounting screens recorded as neutral would
           manufacture agreement with every other lens that happened to be quiet.`,
          `The claim survived. The panel now reports it in place: measured
           across 121 names in the Dow Jones Industrial Average and the
           Nasdaq-100, the price family and the filings family agree no more
           often than chance would put them there, κ = +0.05. Across all four
           index universes — 168 deduplicated names — the figure is +0.03. So
           agreement between them really is two facts rather than one counted
           twice.`,
          `What ships is the whole table, not the headline: every pair of lenses
           with its raw agreement rate, the rate chance alone would produce, κ,
           a bootstrapped 95% interval, τb and the number of names behind it.
           Three of the six pairs come out slightly negative. It is stamped with
           the date it was measured and names the script to re-run, because a
           rate like this decays with the lists it was taken on.`,
        ],
      },
      {
        title: "The finding nobody was looking for",
        body: [
          `Flow and Trend — the pair deliberately collapsed into a single vote
           because they read the same price-and-volume series — came out at
           κ = +0.07, on an interval running from −0.02 to +0.17 that straddles
           zero. From the other end, the participation ratio says the four
           lenses carry 3.72 lenses' worth of independent information, not the
           two they are counted as.`,
          `The grouping was left alone anyway, and that is the part worth
           keeping. A kappa near zero cannot distinguish a reading that carries
           separate information from one that is mostly noise — both are
           uncorrelated with everything. The Flow lens's own event study returns
           no significant effect on most tickers. A lens that is independent
           because it is uninformative has not earned a vote of its own, so the
           conservative collapse stands and the panel explains why rather than
           quietly claiming credit for the extra independence.`,
        ],
      },
    ],
    decisions: [
      {
        title: "Prose summary instead of a buy/hold/sell score",
        body: [
          `Above the tabs, a plain-English summary reports what the lenses agree
           on, names where they disagree, states what it cannot tell you about
           this particular company, and lists what to check next. It is
           deliberately prose and not a number: collapsing four disagreeing
           models into one score discards every finding the rest of the app
           works to establish.`,
        ],
      },
      {
        title: "Every figure explains itself",
        body: [
          `Each number carries an info affordance that says what it measures in
           plain English, whether this value is good or bad and why, and what
           would make you act differently — or admits that nothing would. A
           Guided/Full toggle defaults to Guided, folding expert tuning controls
           behind one labelled disclosure so the interface is legible to someone
           who has never read a DCF.`,
        ],
      },
      {
        title: "Indicators grouped by the horizon they speak to",
        body: [
          `A long-term investor shown "Stochastic 82, overbought" next to "price
           is above its 200-day average" has been handed two statements of very
           different weight, presented identically. Grouping by horizon is a
           small change that removes a real category error.`,
        ],
      },
    ],
    limits: [
      {
        title: "The independence claim is measured, but narrowly",
        body: [
          `The headline claim now rests on a measurement rather than an
           assertion, and it held: κ = +0.03 between the price family and the
           filings family. But that is one statistic, on 168 names, in one
           snapshot. A kappa near zero says two lenses do not agree more than
           chance — it does not say either of them is informative, which is
           exactly why the Flow and Trend result was left as a caution rather
           than used to justify splitting their vote.`,
        ],
      },
      {
        title: "Flow cannot identify who traded",
        body: [
          `Index rebalances, options expiry, dividend dates and earnings all
           produce identical footprints to institutional accumulation. The panel
           estimates the bid-ask spread and warns when a move is small enough to
           be swallowed by trading costs — on a thin stock, "heavy volume moved
           the price" often just means the order book is shallow.`,
        ],
      },
      {
        title: "A DCF is an opinion with arithmetic attached",
        body: [
          `The answer moves enormously with the growth and discount rates you
           assume, which is why the output is a P5–P95 range and every
           assumption is an editable field. The panel warns when terminal value
           dominates — often 60–80% of a DCF — because that means the answer
           rests on a perpetuity guess rather than on the forecast.`,
        ],
      },
      {
        title: "Quality refuses to score banks",
        body: [
          `None of the three accounting screens was built on financial firms:
           there is no operating cycle for "working capital" to describe, and
           revenue is not a receivables-and-inventory process. Financials get an
           explicit refusal instead of a misleading number. Beneish is also a
           screen, not a finding — it catches roughly three-quarters of
           manipulators, which on a population where manipulation is rare means
           most flags are false alarms.`,
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "scholartrack",
    name: "ScholarTrack",
    tagline: "A crawler that is only allowed to record what it can quote.",
    blurb:
      "A zero-cost dashboard for finding, filtering and tracking fully-funded international scholarships. Programme details live in structured JSONB columns rather than prose, so questions a wall of text cannot answer become filters — and every extracted value is verified against a verbatim quote from the funder's own page before it is allowed into the database.",
    year: "2026",
    role: "Sole engineer — schema, pipeline, interface",
    status: "Live",
    domain: "Data extraction & trust",
    liveUrl: "https://scholartracker-v1.vercel.app",
    repoUrl: "https://github.com/farhanrkt/ScholarshipTracker",
    image: "/images/scholartrack.png",
    shape: "wide",
    shotAlt:
      "ScholarTrack listing 43 fully-funded programmes. The filter rail states what each eligibility filter does and does not include; cards show coverage, verification date, and where funding is not itemised rather than leaving a blank.",
    shotShort: "43 programmes, filtered by what actually disqualifies you.",
    imageW: 2880,
    imageH: 2000,
    chips: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "RLS", "Claude & Gemini"],
    stack: [
      { label: "Framework", value: "Next.js 16 — App Router, React 19, Server Components" },
      { label: "Styling", value: "Tailwind CSS v4 · shadcn/ui (Base UI) · Lucide" },
      { label: "Backend", value: "Supabase — PostgreSQL with Row Level Security" },
      { label: "Auth", value: "Supabase anonymous auth — no sign-up wall" },
      { label: "Extraction", value: "Anthropic Claude & Google Gemini · Zod schemas · unpdf" },
      { label: "Language", value: "TypeScript, strict mode" },
    ],
    metrics: [
      { value: "18", label: "SQL migrations", note: "schema, provenance, trust tiers, gap causes" },
      { value: "100%", label: "of values carry a quote", note: "unquotable values are discarded" },
      { value: "5", label: "causes a field can be blank", note: "only one of them is the funder\u2019s decision" },
      { value: "$0", label: "recurring cost", note: "free tiers, weekly cron" },
    ],
    problem: [
      `Scholarship information is scattered across funder websites in prose,
       and aggregators mostly copy each other's summaries. The result is a
       search experience that cannot answer the questions applicants actually
       have — "scholarships in Japan that need no work experience and include a
       funded language year" is a reading exercise across forty tabs, not a
       filter.`,
      `The obvious fix is to run a language model over each page and store what
       it returns. The obvious fix is also how you end up telling someone the
       wrong deadline. An earlier version of this reconstructed deadlines from
       each programme's typical cycle and got Chevening wrong by a month. A
       scholarship deadline is a date somebody plans a year of their life
       around.`,
    ],
    sections: [
      {
        title: "Grounding — the control everything else rests on",
        body: [
          `Every value the extractor produces must carry a verbatim quote, and
           that quote is checked by string search against the fetched page.
           Values whose quote is not found in the source are discarded.
           Fabrication is caught mechanically, not by a human reading output and
           hoping.`,
          `Numbers must appear inside their own quote: a grounded "includes a
           monthly stipend" does not license an invented amount printed beside
           it. And a date more than one cycle old is refused even when its quote
           is perfectly real, because programmes run annually and a deadline
           read off a page the funder left up since 2019 is not this cycle's.`,
        ],
      },
      {
        title: "Absent is not false",
        body: [
          `An unstated requirement renders as "Not stated", never "Not
           required" — and the filters hold the same line. "No work experience
           required" returns only programmes whose pages say so. A row nobody
           has read is not evidence of anything, and quietly treating missing
           data as a negative would turn silence into a claim.`,
          `Dates are nullable throughout. A programme with no published deadline
           renders as "Dates not published" rather than borrowing last year's.
           The rule the whole design follows is that a blank field beats a
           plausible wrong one.`,
        ],
      },
      {
        title: "Why a field is blank",
        body: [
          `The run log could always say "12 of 25 fields filled". It could say
           nothing about the other thirteen, and those thirteen are not one
           thing. A blank had four causes fixed in four different files, and
           only one of them was the pipeline working correctly — so "improve
           coverage" was an unfalsifiable goal, and a crawl that never reached
           the benefits page looked exactly like a funder that publishes no
           stipend.`,
          `Every empty slot is now classified: never-crawled, not-retrieved,
           model-silent, grounding-rejected, or not-published. The order runs
           from the most specific evidence to the least, and not-published is
           the residual — the claim the system is least entitled to make, and
           the only one allowed to reach a student. The interface says "not
           stated by the programme" only when the pages on that subject were
           actually crawled and read.`,
        ],
      },
      {
        title: "Second sources fill the gaps, not just check the dates",
        body: [
          `Cross-verification originally existed to reconcile deadlines across
           sources. It could not fill anything, because the crawler is
           same-origin by construction: coverage, eligibility and documents were
           read exclusively from the funder's own site, so whatever a funder
           chose not to publish stayed blank permanently.`,
          `Second sources now fill the profile — gaps only, never overwriting,
           grounded against each source's own pages, and every filled field
           attributed to where it came from. Where a whole topic was starved
           rather than merely missed, a further pass re-crawls with quotas on
           the starved topics and links scored on the missing facts' own
           vocabulary, excluding pages already read.`,
        ],
      },
      {
        title: "Provenance is never defaulted",
        body: [
          `last_verified_at stays NULL until a human actually checks, and the
           interface says "Not verified" out loud rather than hiding the gap.
           "Verified" is the one status no crawler may write — it comes from a
           person, through a dedicated review route. Nothing the pipeline
           produces is visible in the app until a human applies it.`,
        ],
      },
      {
        title: "Two programs, one database",
        body: [
          `The web app reads scholarships and writes only a user's own tracking
           rows; it never holds a privileged key. The pipeline crawls funder
           sites and writes proposals into staging tables using the service-role
           key — which bypasses every RLS policy, so it is confined to scripts,
           never prefixed NEXT_PUBLIC_, and never imported by anything under
           src/. Both halves now deploy to Vercel.`,
          `A weekly Vercel cron re-reads what has gone stale. The same two
           crawlers can also be driven from an admin console in the browser,
           with an argument whitelist and a tick runner that lets a long crawl
           survive a serverless function ceiling.`,
        ],
      },
      {
        title: "Ghost accounts, so tracking works on the first click",
        body: [
          `A proxy runs on every request: it refreshes the Supabase session and,
           if there is none, calls signInAnonymously(). The visitor holds a real
           JWT and a stable UUID before the first Server Component renders, so
           "Track this scholarship" works immediately with no login wall.`,
          `Anonymous users hold real JWTs, so RLS covers them under the
           authenticated role exactly like email users — there is no second code
           path for "logged out". Linking an email later preserves the UUID, so
           every tracked scholarship and ticked checkbox survives the upgrade.
           Sign-out is deliberately not offered to anonymous users, because
           their tracker is only reachable through that session.`,
        ],
      },
    ],
    decisions: [
      {
        title: "JSONB columns instead of prose descriptions",
        body: [
          `Coverage, eligibility, documents and application windows are stored
           as structured shapes rather than paragraphs. This is what makes the
           sidebar able to answer compound questions, and it is also what makes
           the "not stated" distinction expressible at all — prose has no way to
           be explicitly silent about one field.`,
        ],
      },
      {
        title: "Everything the crawler produces is a proposal",
        body: [
          `The pipeline writes into staging tables, never into the tables the
           app reads. A human reviews candidates and extractions through admin
           routes, including a duplicates view for rows that may be one
           programme twice. This keeps the model in the role it is good at —
           reading pages fast — and out of the role it is bad at, which is being
           trusted.`,
        ],
      },
    ],
    limits: [
      {
        title: "Coverage is only as wide as the seed list",
        body: [
          `Discovery finds programmes there is no row for, but it works from
           scored seeds and link classification — a funder whose site is
           JavaScript-rendered or paywalled simply will not appear. The absence
           of a scholarship from the dashboard says nothing about whether it
           exists.`,
        ],
      },
      {
        title: "Grounding catches fabrication, not misreading",
        body: [
          `String-matching a quote proves the sentence is on the page. It does
           not prove the extractor understood it — a real quote can be attached
           to the wrong field. That is precisely why the human verification step
           exists and why "verified" is a status a crawler is forbidden to
           write.`,
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "linguaku",
    name: "LinguaKu",
    tagline: "Offline-first language learning, with no account and no dark patterns.",
    blurb:
      "A PWA that teaches English and Japanese to Indonesian speakers — no account, no paywall, no ads, no engagement mechanics, and zero recurring cost. A learner on a cheap Android phone taps the icon and is answering a useful question in 108 ms, fully offline, because a memory model predicts they are about to forget it.",
    year: "2026",
    role: "Sole engineer — spec, data pipeline, app",
    status: "Live · v1.11.1",
    domain: "Learning science & performance",
    liveUrl: "https://linguaku.farhanrangki.workers.dev",
    repoUrl: "https://github.com/farhanrkt/LinguaKu",
    image: "/images/linguaku-progress.png",
    shape: "phone",
    shotAlt:
      "LinguaKu's progress view on a fresh install: vocabulary size, a distribution across word-frequency bands, retention, and a fourteen-day review forecast — every figure showing an explicit \u201cnot measured yet\u201d state rather than a zero.",
    shotShort: "Progress, with every unmeasured figure saying so.",
    imageW: 840,
    imageH: 1800,
    image2: "/images/linguaku-session.png",
    image2W: 840,
    image2H: 1720,
    shotAlt2:
      "One card into a session: an English sentence with its Indonesian translation, the target word, and a listen control. This is the exposure rung, the first of seven.",
    chips: ["React 19", "TypeScript", "Vite", "Dexie", "FSRS", "PWA", "Cloudflare"],
    stack: [
      { label: "App", value: "React 19 · TypeScript · Vite 8 · Tailwind v4" },
      { label: "Storage", value: "IndexedDB via Dexie — append-only review log" },
      { label: "Scheduling", value: "ts-fsrs — free spaced repetition scheduler" },
      { label: "Offline", value: "vite-plugin-pwa · service worker precache" },
      { label: "Testing", value: "Vitest · Playwright · axe-core, gated in CI" },
      { label: "Deploy", value: "Cloudflare Workers static assets — no invocations billed" },
    ],
    metrics: [
      { value: "108 ms", label: "icon tap → first question", note: "against a 3 s budget" },
      { value: "138 KB", label: "initial JS, gzipped", note: "budget 200 KB · CSS 6.7 KB of 40" },
      { value: "822", label: "tests", note: "766 unit · 56 end-to-end" },
      { value: "0", label: "WCAG 2.1 AA violations", note: "gated in CI, in both themes" },
    ],
    problem: [
      `Language apps aimed at Indonesian learners are mostly translations of
       apps designed for English speakers learning European languages. They
       teach the wrong mistakes: the errors an Indonesian speaker actually makes
       in English come from specific structural differences — and nobody is
       teaching those differences directly.`,
      `The second problem is access. Streaks, hearts, paywalls and ad breaks are
       not learning mechanics; they are retention mechanics, and they cost the
       learner attention and money. The premise here is that a learner in Bogor
       should tap an icon on a cheap Android phone and be answering a useful
       question within three seconds, offline, for free, forever.`,
    ],
    sections: [
      {
        title: "The contrastive engine",
        body: [
          `This is the differentiator. Authored Indonesian notes follow a fixed
           order — what Indonesian does, what English does instead, one minimal
           pair — compiled from versioned YAML at build time by a compiler that
           fails the build on an unanswerable question.`,
          `Interference detection tags ordinary wrong answers by category, so
           the weakness heatmap is built from what a learner does when they are
           not being tested on it. For Japanese it also names six places where
           Indonesian gives the learner an advantage — the half of contrastive
           teaching this audience never hears, because the material is written
           for English speakers who do not have those advantages.`,
        ],
      },
      {
        title: "The review loop, enforced at the data layer",
        body: [
          `FSRS scheduling over a seven-rung card ladder, from L0 exposure to L6
           free production. One active card per item; the rung selects the task
           and FSRS state carries across promotion.`,
          `No card advances without a learner response, and that is enforced
           structurally rather than by convention: recordReview is the only
           writer of scheduling state, it cannot be called without a rating, and
           the review log is append-only at the Dexie hook. The invariant is
           impossible to violate from feature code.`,
        ],
      },
      {
        title: "The graded reader",
        body: [
          `Running text comes from Simple English Wikipedia, selected by
           known-token coverage inside a [0.92, 0.98] band — a threshold that is
           literally unreachable on a single sentence and only becomes
           meaningful across a paragraph. Below it sits a feed of level-matched
           sentence pairs, because the Tatoeba corpus is independent pairs
           rather than documents.`,
          `Tap-to-gloss and one-tap mining are entirely local. Mining records an
           intention, not a card: the word arrives in the next session and
           becomes a card only when it is actually answered.`,
        ],
      },
      {
        title: "The corpus",
        body: [
          `English ships 23,497 banded sentence pairs, 5,245 lexemes, 1,581
           Indonesian glosses, 1,680 graded reading passages, 73 authored
           collocations, 12 topic clusters, 21 contrastive categories, 126
           drills and 75 false friends. Japanese ships 15,324 pairs, 6,904
           lexemes, all 1,748 jōyō kanji with component breakdowns, and 14
           contrastive categories.`,
          `All of it is built by a set of ingest scripts from licensed open
           corpora, with a licence checker wired into the verify gate so a
           build cannot ship data whose terms have not been read.`,
        ],
      },
      {
        title: "Privacy as a structural property",
        body: [
          `Optional sync is off by default, and nothing in the feature or data
           layers even imports it. An end-to-end test drives a full study
           session and asserts that zero requests leave the origin — which
           stayed true after an instance was actually deployed.`,
          `There is no AI layer and no seam for one. The app is structurally
           incapable of sending a learner's work to a model, rather than merely
           configured not to.`,
        ],
      },
    ],
    decisions: [
      {
        title: "Honesty encoded in the type system",
        body: [
          `Every progress figure has an explicit "not measured yet" state and
           shows it. Charts take number | null and draw a gap rather than a bar
           of zero, so an unmeasured week cannot be misread as a week of no
           work. The distinction is enforced by the types, not by discipline.`,
        ],
      },
      {
        title: "No CEFR or JLPT level claims",
        body: [
          `No licence-cleared alignment exists for either, and deriving one from
           word frequency would be fake precision dressed as a standard. The app
           bands its own content and says so, rather than borrowing authority it
           has not earned.`,
        ],
      },
      {
        title: "Glosses are reference, never an answer key",
        body: [
          `Indonesian glosses cover 30% of English words and 4% of Japanese —
           measured before anything was built on them. Grading a typed meaning
           against a set that thin would mark good answers wrong, so glosses are
           shown where they exist and their absence is stated where they do not.`,
        ],
      },
      {
        title: "Deployed as an assets-only Worker",
        body: [
          `There is no Worker script, so no request is ever billed as an
           invocation and static asset requests stay free and unlimited. The SPA
           fallback is deliberately disabled: it would answer a missing content
           shard with index.html and a 200, turning a clean 404 into a JSON
           parse error somewhere further down.`,
        ],
      },
    ],
    limits: [
      {
        title: "Pre-cached audio is empty",
        body: [
          `The audio set stays empty until a voice model's licence is read and
           dated. This is named in the README and in the app rather than quietly
           shipped with an unlicensed voice — but it does mean listening
           practice is thinner than it should be.`,
        ],
      },
      {
        title: "The device matrix has one row of five",
        body: [
          `Real-device coverage is thin and recorded as thin. The app collects a
           device profile itself in five taps, and the first one already
           corrected a timeout that was withholding listening practice from a
           phone perfectly capable of it.`,
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
