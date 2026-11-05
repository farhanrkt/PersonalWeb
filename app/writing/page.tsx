import type { Metadata } from "next";
import Link from "next/link";
import { pieces, labNotes } from "@/lib/writing";
import { Container, PageTitle } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on results worth keeping, including the ones that came back negative.",
};

export default function WritingPage() {
  return (
    <Container wide>
      <PageTitle
        title="Writing"
        intro="Notes on results worth keeping — including the ones that came back negative. New ones are published as lab notes on RangkaLabs and linked from here."
      />
      <ul className="divide-y divide-line border-t border-line">
        {labNotes.map((n) => (
          <li key={n.url}>
            <a href={n.url} target="_blank" rel="noopener noreferrer" className="group block py-8">
              <p className="data text-[12.5px] text-subtle">
                <time dateTime={n.iso}>{n.date}</time> · {n.subject} · RangkaLabs
              </p>
              <h2 className="measure mt-2 text-xl font-medium tracking-tight group-hover:text-accent sm:text-2xl">
                {n.title}
                <ArrowUpRight className="ml-1.5 inline size-4 align-baseline text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </h2>
            </a>
          </li>
        ))}
        {pieces.map((p) => (
          <li key={p.slug}>
            <Link href={`/writing/${p.slug}`} className="group block py-8">
              <p className="data text-[12.5px] text-subtle">
                {p.date} · {p.subject}
                {p.supersededBy && ` · Earlier version of the ${p.supersededBy.date} lab note`}
              </p>
              <h2 className="measure mt-2 text-xl font-medium tracking-tight group-hover:text-accent sm:text-2xl">
                {p.title}
              </h2>
              <p className="measure mt-2.5 text-[16px] leading-relaxed text-muted">
                {p.standfirst}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
