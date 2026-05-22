import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "subtle" | "ink";
}) {
  const toneClass =
    tone === "ink"
      ? "section-ink bg-[var(--color-ink)] text-[var(--color-bg-primary)]"
      : tone === "subtle"
        ? "bg-[var(--color-bg-subtle)]"
        : "bg-[var(--color-bg-primary)]";

  return (
    <section className={`py-24 md:py-32 ${toneClass} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
      {children}
    </div>
  );
}
