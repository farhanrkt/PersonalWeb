import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "./icons";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${wide ? "max-w-5xl" : "max-w-3xl"} ${className}`}>
      {children}
    </div>
  );
}

/**
 * A section heading with its numeral. The numerals are information here, not
 * ornament: the page has a stated order and a reader can go straight to III.
 */
export function SectionHeading({
  numeral,
  children,
  href,
  action,
}: {
  numeral?: string;
  children: React.ReactNode;
  href?: string;
  action?: string;
}) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-6">
      <h2 className="head-rule flex flex-1 items-baseline gap-3.5 text-xl font-medium tracking-tight sm:text-2xl">
        {numeral && <span className="label text-accent">{numeral}</span>}
        {children}
      </h2>
      {href && action && (
        <Link
          href={href}
          className="label -my-1 shrink-0 py-1 text-subtle transition-colors hover:text-accent"
        >
          {action}
        </Link>
      )}
    </div>
  );
}

export function PageTitle({
  numeral,
  title,
  intro,
  back = true,
}: {
  numeral?: string;
  title: string;
  intro?: string;
  back?: boolean;
}) {
  return (
    <div className="pt-12 pb-10 sm:pt-16 sm:pb-12">
      {back && (
        <Link
          href="/"
          className="label group mb-8 -my-1 inline-flex items-center gap-2 py-1 text-subtle transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Home
        </Link>
      )}
      {numeral && <p className="label mb-3 text-accent">{numeral}</p>}
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
      {intro && <p className="measure mt-4 text-[18px] leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Small-caps metadata: field term, then value. Dense information, printed. */
export function FieldList({
  rows,
  className = "",
}: {
  rows: { term: string; value: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={`grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 ${className}`}>
      {rows.map((r) => (
        <div key={r.term} className="contents">
          <dt className="label pt-[3px] text-subtle">{r.term}</dt>
          <dd className="data leading-snug text-muted">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * A limitation, set apart. It is not a disclaimer appended at the end — it is a
 * labelled part of the record, so it gets its own treatment and its own rule.
 */
export function Note({
  label = "Limitation",
  title,
  children,
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent bg-band py-5 pr-5 pl-6">
      <p className="label text-accent">{label}</p>
      <h3 className="mt-2.5 text-[17px] leading-snug font-medium tracking-tight">{title}</h3>
      <p className="measure mt-2 text-[16px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label inline-flex items-center border border-line bg-band px-2 py-1 text-subtle">
      {children}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group -my-1 inline-flex items-center gap-1 py-1 ${className}`}
    >
      {children}
      <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function LiveDot({ label }: { label: string }) {
  return (
    <span className="label inline-flex items-center gap-2 text-subtle">
      <span className="size-1.5 rounded-full bg-accent" />
      {label}
    </span>
  );
}
