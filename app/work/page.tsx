import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { analyses } from "@/lib/analysis";
import { excluded } from "@/lib/excluded";
import { Container, PageTitle, SectionHeading, ExternalLink } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Three applications running in production, a list of modelling and analysis work, and what this page leaves out.",
};

export default function WorkPage() {
  return (
    <Container wide>
      <PageTitle
        title="Work"
        intro="Three applications taken from model to deployment and still running, the modelling work that lives as notebooks, and — so the selection is legible — what this page leaves out and why."
      />

      <section className="border-t border-line py-14">
        <SectionHeading numeral="I">Applications</SectionHeading>
        <div className="space-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} figure={i + 1} />
          ))}
        </div>
      </section>

      <section id="analysis" className="scroll-mt-8 border-t border-line py-14">
        <SectionHeading numeral="II">Analysis &amp; modelling</SectionHeading>
        <p className="measure mb-8 text-[16px] leading-relaxed text-muted">
          Work held as notebooks rather than products. Listed with its method and data, which is
          what makes an analysis judgeable without opening it.
        </p>
        <ul className="divide-y divide-line border-y border-line">
          {analyses.map((a) => (
            <li key={a.repo}>
              <ExternalLink
                href={a.repo}
                className="grid w-full gap-x-6 gap-y-1 py-4 hover:text-accent lg:grid-cols-[1fr_16rem_4rem] lg:items-baseline"
              >
                <span className="min-w-0">
                  <span className="block text-[16px] font-medium">{a.title}</span>
                  <span className="mt-0.5 block text-[14.5px] leading-snug text-muted">
                    {a.method}
                  </span>
                </span>
                <span className="data text-[12.5px] leading-snug text-muted">{a.data}</span>
                <span className="data text-[12.5px] text-subtle lg:text-right">{a.year}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-14">
        <SectionHeading numeral="III">Not shown here</SectionHeading>
        <p className="measure mb-8 text-[16px] leading-relaxed text-muted">
          A list of only the good things tells you nothing about how it was selected, so these are
          named rather than quietly omitted.
        </p>
        <div className="space-y-10">
          {excluded.map((g) => (
            <div key={g.group}>
              <h3 className="text-[17px] font-medium tracking-tight">{g.group}</h3>
              <p className="measure mt-1.5 text-[15px] leading-relaxed text-muted">{g.note}</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="grid gap-x-6 gap-y-1 py-3.5 lg:grid-cols-[13rem_1fr_8rem]"
                  >
                    <span className="text-[15.5px] font-medium">{it.name}</span>
                    <span className="measure text-[14.5px] leading-relaxed text-muted">
                      {it.what}
                    </span>
                    <span className="data text-[12px] text-subtle lg:text-right">{it.reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
