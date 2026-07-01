import TerminalTyping from "./TerminalTyping";

const BADGES = [
  { label: "experience", value: "2 yrs", tone: "pass" },
  { label: "escalations / week", value: "20+", tone: "amber" },
  { label: "support cases / week", value: "30+", tone: "amber" },
  { label: "regression coverage", value: "high", tone: "pass" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border section-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fadeUp">
          <div className="eyebrow mb-5 flex items-center gap-2 text-pass">
            <span className="h-1.5 w-1.5 rounded-full bg-pass" />
            Manual QA &amp; Test Engineer
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-text sm:text-4xl lg:text-4.99xl">
           Tested with <span className="text-[#34D399]">precision.</span>
            <br />  
            Released with <span className="text-[#34D399]">confidence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Anila Unnikrishnan — a QA engineer who pairs disciplined manual test
            coverage with real customer-escalation context, so defects get caught
            before release, not after a support ticket.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded bg-pass px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              Run Test Suite →
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-pass hover:text-pass"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="rounded border border-border bg-surface/60 px-3 py-3"
              >
                <div
                  className={`font-display text-xl font-semibold ${
                    badge.tone === "pass" ? "text-pass" : "text-amber"
                  }`}
                >
                  {badge.value}
                </div>
                <div className="eyebrow mt-1 text-mutedDark">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:150ms]">
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-defect/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-pass/70" />
              <span className="ml-3 font-mono text-[11px] text-mutedDark">
                test-run — anila-unnikrishnan.spec
              </span>
            </div>
            <div className="relative h-64 px-5 py-6">
              <TerminalTyping />
              <div className="mt-6 space-y-2 font-mono text-[12px] text-mutedDark">
                <div>✔ functional_testing.spec ................ 48 passed</div>
                <div>✔ regression_suite.spec ................... 62 passed</div>
                <div>✔ defect_lifecycle.spec .................... 19 passed</div>
                <div className="text-pass">✔ 0 critical defects open</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
