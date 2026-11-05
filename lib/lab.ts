/**
 * RangkaLabs — the lab the projects on this site come from.
 *
 * rangkalabs.cloud is the source of truth for every project's status, links
 * and one-line description. This site may say less, never something
 * different: same labels, same links, no claim the lab page doesn't make.
 * Descriptions below are copied word for word from rangkalabs.cloud/lab
 * (synced 2026-11-05).
 */
export const lab = {
  name: "RangkaLabs",
  url: "https://rangkalabs.cloud",
  page: "https://rangkalabs.cloud/lab/",
} as const;

export type LabProject = {
  name: string;
  /** RangkaLabs' label, exactly: Idea, Experiment, Beta or Live. */
  status: string;
  category: string;
  /** `desc` on rangkalabs.cloud/lab, word for word. */
  desc: string;
  /** Part or all of the lab page's `note`, word for word. */
  note?: string;
  /** Where the code stands, as the lab page puts it. */
  access: string;
  /** A lab note on rangkalabs.cloud. */
  writeUp?: string;
};

/**
 * Projects without a case study here — no public repository, or nothing built
 * yet. Listed, never carded: there is no screenshot to show for an agent that
 * lives in Telegram, a private pipeline, or an idea.
 */
export const labProjects: LabProject[] = [
  {
    name: "Hermes",
    status: "Live",
    category: "Self-hosted AI agent",
    desc: "My always-on assistant on Telegram, built on Nous Research's open-source Hermes Agent. It runs on a 2 GB VPS on free model tiers, knows my projects, reads my own news pipeline, and sends me briefs on a schedule.",
    note: "Model spend is $0.",
    access: "Personal · it only answers me",
    writeUp: "https://rangkalabs.cloud/notes/hermes-a-personal-ai-agent-on-a-2-gb-vps/",
  },
  {
    name: "idx-newsflow",
    status: "Experiment",
    category: "Data engineering / NLP",
    desc: "Collects Indonesian market news from 8 feeds every 30 minutes, scores each headline for sentiment, links it to IDX tickers, and sends a de-duplicated, interactive digest to Telegram. Built on a $0 budget and a 2 GB server.",
    note: "It replaces a bot with 13 feeds. In October 2026, 9 of them returned nothing to it and none of its 203 runs had failed. Here an empty feed fails the run.",
    access: "Code is private",
    writeUp: "https://rangkalabs.cloud/notes/idx-newsflow-what-i-built-and-what-i-measured/",
  },
  {
    name: "RAG evaluation dashboard",
    status: "Idea",
    category: "Retrieval + evaluation",
    desc: "A public dashboard that scores every retrieval-augmented answer for grounding and accuracy, built on Claude.",
    access: "On the roadmap · Next",
  },
];
