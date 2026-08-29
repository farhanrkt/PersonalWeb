import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[55vh] flex-col justify-center py-20">
        <p className="data text-[12.5px] text-subtle">404</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">Page not found</h1>
        <p className="measure mt-4 text-[17px] leading-relaxed text-muted">
          That page doesn&rsquo;t exist. Try the work, the writing, or head back to the start.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
          <Link href="/" className="text-accent underline decoration-line-strong hover:decoration-current">Home</Link>
          <Link href="/work" className="text-muted hover:text-fg">Work</Link>
          <Link href="/writing" className="text-muted hover:text-fg">Writing</Link>
        </div>
      </div>
    </Container>
  );
}
