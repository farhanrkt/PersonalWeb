import type { Metadata } from "next";
import Link from "next/link";
import { pieces } from "@/lib/writing";
import { Container, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on results worth keeping, including the ones that came back negative.",
};

export default function WritingPage() {
  return (
    <Container wide>
      <PageTitle
        title="Writing"
        intro="Occasional notes on results worth keeping — including the ones that came back negative."
      />
      <ul className="divide-y divide-line border-t border-line">
        {pieces.map((p) => (
          <li key={p.slug}>
            <Link href={`/writing/${p.slug}`} className="group block py-8">
              <p className="data text-[12.5px] text-subtle">
                {p.date} · {p.subject}
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
