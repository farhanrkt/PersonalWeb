export const research = {
  title:
    "Comparative Evaluation of Graph Neural Network Algorithms for Music Recommendation Systems",
  authors: "Farhan Rangkuti, Fitriyani",
  affiliation: "School of Computing, Telkom University, Bandung",
  venue:
    "2024 International Conference on Intelligent Cybernetics Technology & Applications (ICICyTA), IEEE, pp. 297–301",
  indexed: "Scopus-indexed · IEEE Xplore",
  doi: "https://ieeexplore.ieee.org/document/10912908",
  repo: "https://github.com/farhanrkt/Published-Final-Project-GNN-Music-Recommender",
  awards: [
    { place: "1st", label: "Best Paper" },
    { place: "8th", label: "Best Presenter" },
  ],

  standfirst: `Most music recommenders lean on collaborative filtering, which sees
    only that a user interacted with an item and nothing about how the catalogue
    connects. A graph keeps those connections. This paper asks whether that
    actually helps, and which graph architecture to reach for.`,

  problem: [
    `Collaborative filtering treats recommendation as a user–item matrix. It
     works, but it discards structure: the fact that two playlists overlap on
     four tracks, or that a track sits between two otherwise unconnected
     clusters, is information a matrix cannot hold.`,
    `Graph neural networks are built for exactly that shape, and had been
     applied to e-commerce and social networks — but very little work existed
     for music specifically. The gap was not "does GNN work", it was "which
     architecture, on this kind of data, with what trade-offs".`,
  ],

  method: [
    {
      term: "Data",
      value: `The Spotify Million Playlist Dataset — one million playlists,
        nearly two million distinct tracks, three hundred thousand artists,
        built by users between January 2010 and October 2017. Experiments ran on
        a 10,000-playlist subset.`,
    },
    {
      term: "Features",
      value: `Each track node was augmented with its Spotify API audio features,
        used as the initial node embedding rather than starting from random
        vectors.`,
    },
    {
      term: "Graph",
      value: `A bipartite graph: playlist nodes and track nodes, edges only
        between the two types and never within one. Membership is the edge.`,
    },
    {
      term: "Recommendation",
      value: `The trained model produces an embedding per node. A track is scored
        for a playlist by the dot product of their embeddings, and the highest
        scores that are not already in the playlist become the recommendations.`,
    },
    {
      term: "Training",
      value: `Two convolutional layers, mean aggregation, BCEWithLogitsLoss,
        AdamW, 500 epochs. Three hyperparameter conditions — 36, 92 and 160
        hidden channels — across two architectures, giving six trained models.`,
    },
  ],

  /** Experiment 1, which proved the strongest of the three conditions. */
  results: {
    caption: "Experiment 1 — 10,000 playlists, 500 epochs, 36 hidden channels.",
    rows: [
      { metric: "AUC", sage: "0.9116", gcn: "0.8359", winner: "sage" },
      { metric: "Precision", sage: "0.8939", gcn: "0.7221", winner: "sage" },
      { metric: "Recall", sage: "0.7216", gcn: "0.8270", winner: "gcn" },
      { metric: "F1-score", sage: "0.7986", gcn: "0.7710", winner: "sage" },
      { metric: "Training loss", sage: "0.1755", gcn: "0.3668", winner: "sage" },
      { metric: "Validation loss", sage: "0.5409", gcn: "0.6577", winner: "sage" },
      { metric: "Training time", sage: "1,714.97 s", gcn: "1,691.54 s", winner: "gcn" },
    ],
  },

  findings: [
    {
      title: "GraphSAGE wins on precision, GCN on recall",
      body: `GraphSAGE reached an AUC of 0.91 against GCN's 0.84, and a precision
        of 0.89 against 0.72. GCN took recall, 0.83 to 0.72, and trained
        marginally faster. That split is the useful result: GraphSAGE is the
        better choice when a wrong recommendation is expensive, GCN when missing
        a relevant track is. The ordering held across all three conditions.`,
    },
    {
      title: "GCN overfits where GraphSAGE generalises",
      body: `The loss curves separate the two more clearly than the headline
        metrics do. GraphSAGE's training loss falls to about 0.2 while its
        validation loss stays flat in the 0.4–0.5 band. GCN's training loss also
        falls, but its validation loss climbs consistently past a point — the
        standard signature of overfitting, and the reason its aggregate scores
        are worse despite a comparable training curve.`,
    },
    {
      title: "More parameters did not mean better results",
      body: `Widening the hidden layers from 36 to 92 to 160 channels did not
        produce a significant improvement in AUC, precision, recall or F1. Some
        of the larger conditions returned higher loss and clearer overfitting,
        and all of them cost more training time. The first and smallest
        condition was the best of the three — a scalability finding as much as
        an accuracy one.`,
    },
    {
      title: "GCN drifts toward popular tracks",
      body: `The qualitative output is where the two models differ most. Asked
        for ten tracks for the same playlist, GraphSAGE returned a spread of
        specific artists — Lecrae's religious hip-hop, Enrique Iglesias's Latin
        pop, Christina Aguilera's pop and R&B. GCN returned Kanye West, Justin
        Bieber, Fifth Harmony: broadly popular, broadly safe. The paper reads
        this as a preference for high-popularity items, which is a familiar
        failure mode in recommenders and one the aggregate metrics do not
        reveal.`,
    },
  ],

  limitations: [
    {
      title: "What the comparison establishes, and what it does not",
      body: `Two architectures, one dataset, one graph construction, a
        10,000-playlist subset. That is enough to say which performed better
        here; it is not enough to say which is better for music recommendation
        in general. Graph methods are sensitive to how the graph is built, and a
        different edge definition could reorder the result.`,
    },
    {
      title: "The practical barriers are stated in the paper",
      body: `GNNs need a large amount of data before recommendations are any
        good, they need meaningful compute, and integrating one into an existing
        recommendation pipeline is substantial work. Those three constraints are
        why the result is a finding rather than a deployment.`,
    },
  ],

  future: `The paper's own next steps: a broader hyperparameter search, more of
    the dataset than the 10,000-playlist subset, and architectures beyond the
    two compared here.`,
} as const;
