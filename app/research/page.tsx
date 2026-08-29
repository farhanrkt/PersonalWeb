import type { Metadata } from "next";
import Image from "next/image";
import { research } from "@/lib/research";
import { Container, PageTitle, ExternalLink, Note, FieldList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Comparative Evaluation of Graph Neural Network Algorithms for Music Recommendation Systems — ICICyTA 2024, Best Paper, indexed in Scopus.",
};

export default function ResearchPage() {
  const { results } = research;

  return (
    <Container wide>
      <PageTitle
        numeral="Publication"
        title="Research"
        intro="One peer-reviewed publication: an undergraduate thesis, presented at an international conference, awarded, and indexed."
      />

      <article className="border-t border-line pt-10 pb-16">
        <div className="label flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="bg-accent-soft px-2 py-1 text-accent">Peer-reviewed</span>
          <span className="text-subtle">{research.indexed}</span>
          {research.awards.map((a) => (
            <span key={a.label} className="text-subtle">
              {a.label} · {a.place}
            </span>
          ))}
        </div>

        <h2 className="measure mt-6 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
          {research.title}
        </h2>
        <p className="data mt-4 text-subtle">{research.authors}</p>
        <p className="data mt-1 text-subtle">{research.venue}</p>

        <p className="measure mt-8 text-[19px] leading-relaxed text-muted italic">
          {research.standfirst}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-14">
          <div className="min-w-0">
            {/* the problem */}
            <section>
              <h3 className="head-rule flex items-baseline gap-3.5 text-xl font-medium tracking-tight">
                <span className="label text-accent">I</span>The problem
              </h3>
              <div className="mt-5 space-y-4">
                {research.problem.map((p, i) => (
                  <p key={i} className="measure text-[17px] leading-[1.7]">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* method */}
            <section className="mt-14">
              <h3 className="head-rule flex items-baseline gap-3.5 text-xl font-medium tracking-tight">
                <span className="label text-accent">II</span>How it was built
              </h3>
              <dl className="mt-6 divide-y divide-line border-y border-line">
                {research.method.map((m) => (
                  <div key={m.term} className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-[9rem_1fr]">
                    <dt className="label pt-1.5 text-subtle">{m.term}</dt>
                    <dd className="measure text-[16px] leading-relaxed text-muted">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* results */}
            <section className="mt-14">
              <h3 className="head-rule flex items-baseline gap-3.5 text-xl font-medium tracking-tight">
                <span className="label text-accent">III</span>Results
              </h3>

              <figure className="mt-6">
                <div className="overflow-x-auto border border-line">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-line bg-band">
                        <th scope="col" className="label px-4 py-3 text-subtle">
                          Metric
                        </th>
                        <th scope="col" className="label px-4 py-3 text-subtle">
                          GraphSAGE
                        </th>
                        <th scope="col" className="label px-4 py-3 text-subtle">
                          GCN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.rows.map((r) => (
                        <tr key={r.metric} className="border-b border-line last:border-b-0">
                          <th scope="row" className="px-4 py-2.5 text-[15.5px] font-normal">
                            {r.metric}
                          </th>
                          <td
                            className={`data px-4 py-2.5 ${
                              r.winner === "sage" ? "font-semibold text-accent" : "text-muted"
                            }`}
                          >
                            {r.sage}
                          </td>
                          <td
                            className={`data px-4 py-2.5 ${
                              r.winner === "gcn" ? "font-semibold text-accent" : "text-muted"
                            }`}
                          >
                            {r.gcn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13.5px] leading-snug text-subtle">
                  <span className="label shrink-0 text-accent">Table 1</span>
                  <span>{results.caption} The better value in each row is marked.</span>
                </figcaption>
              </figure>

              <div className="mt-10 space-y-8">
                {research.findings.map((f) => (
                  <div key={f.title}>
                    <h4 className="text-[17px] leading-snug font-medium tracking-tight">
                      {f.title}
                    </h4>
                    <p className="measure mt-2 text-[16.5px] leading-relaxed text-muted">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* limits */}
            <section className="mt-14">
              <h3 className="head-rule flex items-baseline gap-3.5 text-xl font-medium tracking-tight">
                <span className="label text-accent">IV</span>What it doesn&rsquo;t establish
              </h3>
              <div className="mt-6 space-y-6">
                {research.limitations.map((l) => (
                  <Note key={l.title} title={l.title}>
                    {l.body}
                  </Note>
                ))}
              </div>
              <p className="measure mt-8 text-[16.5px] leading-relaxed text-muted">
                {research.future}
              </p>
            </section>
          </div>

          {/* rail */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <figure>
              <div className="shot">
                <Image
                  src="/images/gnn-system-design.png"
                  alt="System design diagram from the paper: data collection and preprocessing, graph construction, model training, evaluation, then node embeddings used to score recommendations."
                  width={699}
                  height={521}
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="bg-white"
                />
              </div>
              <figcaption className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13px] leading-snug text-subtle">
                <span className="label shrink-0 text-accent">Fig. 1</span>
                <span>System design from the paper.</span>
              </figcaption>
            </figure>

            <FieldList
              className="mt-8 border-t border-line pt-6"
              rows={[
                { term: "Venue", value: "ICICyTA 2024" },
                { term: "Publisher", value: "IEEE, pp. 297–301" },
                { term: "Indexed", value: "Scopus · IEEE Xplore" },
                { term: "Awards", value: "Best Paper (1st), Best Presenter (8th)" },
                { term: "Data", value: "Spotify Million Playlist Dataset" },
                { term: "Models", value: "GraphSAGE, GCN" },
                { term: "Affiliation", value: research.affiliation },
              ]}
            />

            <div className="mt-7 flex flex-wrap gap-2.5 border-t border-line pt-6">
              <ExternalLink
                href={research.doi}
                className="label bg-accent px-4 py-2.5 text-on-accent transition-opacity hover:opacity-90"
              >
                IEEE Xplore
              </ExternalLink>
              <ExternalLink
                href={research.repo}
                className="label border border-line px-4 py-2.5 text-muted transition-colors hover:border-fg hover:text-fg"
              >
                Notebooks
              </ExternalLink>
            </div>
          </aside>
        </div>
      </article>
    </Container>
  );
}
