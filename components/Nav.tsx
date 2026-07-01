const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-text">
          <span className="h-2 w-2 rounded-full bg-pass shadow-[0_0_8px_#3ECF8E]" />
          anila.qa
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-pass">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:anukrishna0408@gmail.com"
          className="rounded border border-pass/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-pass transition-colors hover:bg-pass hover:text-ink"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
