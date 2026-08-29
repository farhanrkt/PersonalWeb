import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pieces, getPiece } from "@/lib/writing";
import { Container, PageTitle, Note } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};
  return {
    title: piece.title,
    description: piece.standfirst,
    openGraph: { title: piece.title, description: piece.standfirst, type: "article" },
  };
}

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  return (
    <>
      <Container>
        <PageTitle title={piece.title} />
        <p className="data -mt-6 text-subtle">
          {piece.date} · {piece.subject}
        </p>
        <p className="measure mt-6 border-b border-line pb-8 text-[19px] leading-relaxed text-muted">
          {piece.standfirst}
        </p>
      </Container>

      {/* The figure breaks out of the reading column so its detail stays legible. */}
      {piece.figure && (
        <Container wide>
          <figure className="mt-10">
            <div className="shot">
              <Image
                src={piece.figure.src}
                alt={piece.figure.alt}
                width={2480}
                height={1132}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="mt-2.5 flex items-baseline gap-2.5 border-t border-line pt-2.5 text-[13.5px] leading-snug text-subtle">
              <span className="label shrink-0 text-accent">Fig. 1</span>
              <span>{piece.figure.caption}</span>
            </figcaption>
          </figure>
        </Container>
      )}

      <Container>
        <div className="mt-12 space-y-9 pb-12">
          {piece.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2 className="mt-2 mb-3 text-xl font-medium tracking-tight">{s.heading}</h2>
              )}
              <div className="space-y-4">
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className={`measure text-[17.5px] leading-[1.72] ${
                      i === 0 && j === 0 ? "dropcap" : ""
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
              {s.aside && (
                <div className="measure mt-7">
                  <Note label="Aside" title={s.aside.title.replace(/^Annot\.\s*—\s*/, "")}>
                    {s.aside.body}
                  </Note>
                </div>
              )}
            </section>
          ))}
        </div>

        <p className="measure border-t border-line pt-7 pb-8 text-[15.5px] leading-relaxed text-muted">
          The panel described here is in{" "}
          <Link
            href="/work/quantdesk"
            className="text-accent underline decoration-line-strong hover:decoration-current"
          >
            QuantDesk
          </Link>
          , which is live and whose source is public.
        </p>
      </Container>
    </>
  );
}
