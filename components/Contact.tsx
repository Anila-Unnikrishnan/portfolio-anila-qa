const CHANNELS = [
  { label: "Email", value: "anukrishna0408@gmail.com", href: "mailto:anukrishna0408@gmail.com" },
  { label: "Phone", value: "+91 70203 04620", href: "tel:+917020304620" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anila-unnikrishnan",
    href: "https://linkedin.com/in/anila-unnikrishnan",
  },
  { label: "Location", value: "Nashik , Maharashtra, India", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="eyebrow text-pass">05 — Contact</div>
        <div className="mt-3 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-text sm:text-4xl">
            Open to QA, SDET, and Support-to-QA roles.
            <span className="text-pass"> Let&apos;s ship reliable software.</span>
          </h2>
          <a
            href="mailto:anukrishna0408@gmail.com"
            className="w-fit rounded bg-pass px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            Get in Touch →
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <div key={c.label} className="rounded-lg border border-border bg-surface/50 p-5">
              <div className="eyebrow text-mutedDark">{c.label}</div>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-2 block break-words font-mono text-sm text-text transition-colors hover:text-pass"
                >
                  {c.value}
                </a>
              ) : (
                <div className="mt-2 font-mono text-sm text-text">{c.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
