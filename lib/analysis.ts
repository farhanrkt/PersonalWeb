/**
 * The second register of evidence: modelling and analysis work that lives as
 * notebooks rather than products. Presented as a typeset index, never as cards
 * — a notebook judged in the same frame as a deployed application looks thin,
 * and that comparison is not the one worth inviting.
 */
export type Analysis = {
  title: string;
  method: string;
  data: string;
  year: string;
  repo: string;
};

export const analyses: Analysis[] = [
  {
    title: "Healthify — nutrition recommendation",
    method: "Knapsack-style optimisation over nutrient targets",
    data: "USDA / TKPI food composition",
    year: "2023",
    repo: "https://github.com/farhanrkt/CH2-PS253-Capstone-Project-Healthify",
  },
  {
    title: "Credit card default prediction",
    method: "Classification with class-imbalance handling",
    data: "UCI Default of Credit Card Clients",
    year: "2025",
    repo: "https://github.com/farhanrkt/Default-of-credit-card-clients-UCI-",
  },
  {
    title: "Bagging on German credit data",
    method: "Bootstrap aggregating over decision tree, SVM and random forest",
    data: "Statlog (German Credit)",
    year: "2024",
    repo: "https://github.com/farhanrkt/Bagging-on-Statlog-German-Credit-Data-",
  },
  {
    title: "Automated machine learning",
    method: "TPOT genetic pipeline search against NiaPy metaheuristics",
    data: "Pima Indians Diabetes",
    year: "2024",
    repo: "https://github.com/farhanrkt/Automated-Machine-Learning-using-TPOT-Niapy",
  },
  {
    title: "Swarm intelligence optimisation",
    method: "Grey Wolf Optimiser and RAO-3 compared on benchmark functions",
    data: "Standard optimisation benchmarks",
    year: "2024",
    repo: "https://github.com/farhanrkt/Swarm-Intelligence-using-GWO-RAO3",
  },
  {
    title: "Clustering countries for aid prioritisation",
    method: "K-Means with cluster-count selection",
    data: "HELP International country indicators",
    year: "2023",
    repo: "https://github.com/farhanrkt/Unsupervised-Learning-on-Country-Data",
  },
  {
    title: "Cervical cancer risk classification",
    method: "Artificial neural network in TensorFlow",
    data: "Cervical cancer risk factors",
    year: "2023",
    repo: "https://github.com/farhanrkt/ANN-Cervical-Cancer",
  },
  {
    title: "Arrhythmia classification",
    method: "K-nearest neighbours and decision tree — led the project team",
    data: "Arrhythmia dataset",
    year: "2023",
    repo: "https://github.com/farhanrkt/KNN-DT-ML-Algorithm",
  },
];
