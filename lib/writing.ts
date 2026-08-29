export type Aside = { title: string; body: string };
export type Section = { heading?: string; body: string[]; aside?: Aside };

export type Piece = {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  year: string;
  subject: string;
  sections: Section[];
  figure?: { src: string; alt: string; caption: string };
};

export const pieces: Piece[] = [
  {
    slug: "the-ranking-predicts-nothing",
    title: "The ranking predicts nothing",
    standfirst:
      "QuantDesk sorts a universe of stocks by a seven-signal composite. I finally measured whether that order predicts anything. It does not — and the app now says so on the panel that produces it.",
    date: "August 2026",
    year: "2026",
    subject: "Backtesting · multiple comparisons",
    figure: {
      src: "/images/quantdesk-backtest.png",
      alt: "The panel in QuantDesk headed \u201cDoes this ranking predict anything?\u201d \u2014 rank-versus-return correlations at three holding periods with corrected p-values, a smallest-detectable-effect column, and the caveats listed beneath.",
      caption:
        "The panel as it ships. The ranking still runs; the correction is stated beneath it, where the list is \u2014 not filed somewhere a reader would have to go looking.",
    },
    sections: [
      {
        body: [
          `A composite that sorts a universe makes a claim without ever writing
           it down. Put twenty names in an order and the order implies it means
           something — that the top of the list is a better place to look than
           the bottom. Nothing in QuantDesk had ever checked whether that was
           true.`,
          `This was an inconsistency, not an oversight I can excuse. The flow
           lens has been held to a stricter standard since the day its event
           study shipped: it measures whether an anomaly flag actually precedes
           abnormal returns, and it reports the null when there is one. The
           breadth tier was asserting its usefulness by omission while the lens
           beside it was doing the work.`,
        ],
      },
      {
        heading: "What the test was",
        body: [
          `Twelve backtests: four universes at three holding periods. Each ranks
           its universe using only data that existed on the ranking date, then
           measures the rank correlation between that order and what actually
           happened next. Six years of history.`,
          `The constraint that matters is the first one. A ranking built with
           any data from after the ranking date will look predictive, and the
           amount by which it looks predictive is a measure of the leak rather
           than of the signal.`,
        ],
      },
      {
        heading: "The answer",
        body: [
          `Twenty-four tests. One of them cleared the conventional 5% cutoff.`,
          `At twenty-four tests, 1.2 are expected to clear it by chance. So the
           honest reading of "one significant result" is that I found slightly
           fewer than the number I would expect from noise. None of the
           twenty-four survives a Benjamini–Hochberg correction.`,
          `The panel also reports what the test could have detected. With 71
           non-overlapping periods, the most sensitive horizon could only have
           found a mean information coefficient of about 0.08; a genuinely
           useful one in this field is nearer 0.03. That distinction matters
           more than the p-values: this is "no edge large enough to see here",
           not "no edge".`,
        ],
        aside: {
          title: "Annot. — why the correction is not optional",
          body: `Running many tests produces a winner by construction. Reporting
                 that winner without the correction is not a small statistical
                 impropriety; it is the entire finding. QuantDesk's anomaly
                 screener already applies Benjamini–Hochberg to its own hits for
                 exactly this reason, so declining to apply it here would have
                 meant holding two parts of the same app to different standards.`,
        },
      },
      {
        heading: "What shipped",
        body: [
          `The panel that presents the ranking now states, in the product, that
           these seven signals did not predict returns over six years of
           testing. It still ranks. The ranking is still useful as a way to
           narrow a universe to a shortlist worth opening the slower lenses on —
           that is what the breadth tier is for.`,
          `What it no longer does is let its own layout imply a claim it cannot
           support. An ordered list looks like a prediction whether or not you
           intended one, so the correction had to be stated where the list is,
           not filed somewhere a reader would have to go looking.`,
        ],
      },
      {
        heading: "What this does not establish",
        body: [
          `That these signals are worthless. A null over four universes and
           three holding periods is a null in this test, on this data, at this
           horizon — not a proof of absence. A different universe, a longer
           hold, or a conditioning variable I did not try could all produce a
           different answer.`,
          `It also says nothing about the other three lenses, which read
           different data and are measured separately. The result is narrow on
           purpose. A negative result stated more broadly than it was tested is
           the same failure as a positive one.`,
        ],
      },
    ],
  },
];

export const getPiece = (slug: string) => pieces.find((p) => p.slug === slug);
