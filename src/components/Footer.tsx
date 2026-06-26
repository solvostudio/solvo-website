import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-32 bg-[var(--color-ink)] text-[var(--color-bg-primary)]">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl tracking-tight">
              Solvo<span className="dot">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-bg-primary)]/70">
              Operating Partner per founder e scale-up. Vendite, finanza,
              tecnologia, con la stessa mano.
            </p>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-[var(--color-bg-primary)]/50">
              Studio
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/andrea" className="hover:underline">
                  Andrea
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:underline">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-[var(--color-bg-primary)]/50">
              Contatti
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:andrea@solvo.studio" className="hover:underline">
                  andrea@solvo.studio
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/andreadroghetti"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-bg-primary)]/15 pt-8 text-xs text-[var(--color-bg-primary)]/50 md:flex-row md:items-center">
          <div>
            &copy; {new Date().getFullYear()}{" "}Solvo, brand commerciale
            di Andrea Droghetti.
          </div>
          <div>solvo.studio</div>
        </div>
      </Container>
    </footer>
  );
}
