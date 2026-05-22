import Link from "next/link";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" aria-label="Solvo" className="inline-flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="50" cy="50" r="50" fill="#020D4A" />
        <text
          x="32"
          y="68"
          fill="#FAF8F4"
          fontFamily="Newsreader, Georgia, serif"
          fontSize="56"
          fontWeight="500"
        >
          S
        </text>
        <circle cx="72" cy="62" r="6" fill="#C9933C" />
      </svg>
      <span className="font-display text-xl tracking-tight text-[var(--color-ink)]">
        Solvo<span className="dot">.</span>
      </span>
    </Link>
  );
}
