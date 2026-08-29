/**
 * What this site does not show, and why. A list of only the good things tells
 * you nothing about how it was selected, so the exclusions are stated too.
 */
export type Excluded = { name: string; what: string; reason: string };

export const excluded: { group: string; note: string; items: Excluded[] }[] = [
  {
    group: "Complete, but not public",
    note: "Finished applied-ML work that has never been pushed to a public repository. Left out because work a reviewer cannot open is an assertion rather than evidence.",
    items: [
      {
        name: "MusicAnalysis",
        what: "Chord progression and section boundaries computed from audio — CQT chroma, Viterbi decoding, beat-synchronous MFCCs, checkerboard novelty.",
        reason: "Local only",
      },
      {
        name: "VocalAcousticFootprint",
        what: "Acoustic voice profiling on the Praat engine via Parselmouth, with jitter, shimmer and HNR validated against synthetic ground-truth signals.",
        reason: "Local only",
      },
      {
        name: "ProjectAnri",
        what: "A fully local voice and vision assistant for an 8 GB M1 — MLX-Whisper, Kokoro TTS, and an intent router over two Ollama models.",
        reason: "Local only",
      },
      {
        name: "Second Brain",
        what: "Voice capture to structured SQLite through Whisper, with a review pane and an append-only data layer.",
        reason: "Local only",
      },
    ],
  },
  {
    group: "Public, but unfinished",
    note: "Repositories that exist and are readable, but are not finished work. They are not listed as projects, and no README has been written to make them look finished.",
    items: [
      { name: "AutoTA", what: "Automated technical analysis over US, Indonesian and crypto markets.", reason: "Unfinished" },
      { name: "stock-whale-tracker", what: "Anomaly detection for institutional market footprint.", reason: "Unfinished" },
      { name: "Stochastic-DCF-DDM", what: "Monte Carlo intrinsic valuation for US and Indonesian listings.", reason: "Unfinished" },
      { name: "Whatsapp-chat-analyzer", what: "Conversation statistics over exported chat history.", reason: "Unfinished" },
      {
        name: "Self-Correcting-Multi-Agent-Syndicate",
        what: "A framework-free agentic RAG pipeline — planner, fetcher, gatekeeper, writer and critic as a deterministic state machine over ChromaDB.",
        reason: "Unfinished",
      },
    ],
  },
  {
    group: "Withheld",
    note: "Work that exists and is complete, but is not mine to publish.",
    items: [
      {
        name: "Data science take-home",
        what: "An end-to-end assessment across SQL, Python and R — RFM and anomaly detection, a scorecard with SHAP, Hosmer–Lemeshow calibration, and a cut-off decision for a credit case.",
        reason: "Company's material",
      },
    ],
  },
];
