import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

const NAV = [
  { href: "/services", label: "Servizi" },
  { href: "/andrea", label: "Andrea" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contatti" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden gap-8 text-sm text-[var(--color-text-primary)] md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-[var(--color-ink)] px-5 py-2 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)] md:inline-flex"
        >
          Lavoriamo insieme
        </Link>
      </Container>
    </header>
  );
}
