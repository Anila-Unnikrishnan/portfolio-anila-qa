const ROLES = [
  {
    title: "Quality Analyst",
    badge: "Primary Role",
    org: "TMBill Technology LLC",
    period: "Feb 2025 — Present",
    points: [
      "Designed and executed manual test cases across core application workflows, catching regressions before release.",
      "Ran functional and regression testing manually, holding release stability steady across consecutive deploy cycles.",
      "Logged and tracked defects in Jira end-to-end, cutting resolution turnaround by staying on developers until closure.",
      "Verified bug fixes through structured re-testing prior to every production push.",
    ],
  },
  {
    title: "Operations & Escalation Executive",
    badge: "Concurrent Responsibility",
    org: "TMBill Technology LLC",
    period: "Mar 2025 — Present",
    points: [
      "Handled 20+ customer escalations weekly, pairing with QA and engineering on root cause analysis.",
      "Manually reproduced reported issues to confirm defect validity before fixes shipped.",
      "Maintained escalation and process records that gave QA a traceable link between support tickets and defects.",
    ],
  },
  {
    title: "Technical Support Executive",
    org: "TMBill Technology LLC",
    period: "Jun 2024 — Jan 2025",
    points: [
      "Delivered L1/L2 support and hands-on troubleshooting for 30+ cases weekly.",
      "Diagnosed and reproduced defects with documentation clean enough for QA to act on directly.",
      "Built out support and issue-tracking documentation that streamlined the defect-reporting workflow still in use today.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="eyebrow text-pass">03 — Experience</div>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
          Career progression.
        </h2>

        <div className="mt-14 border-l border-border pl-8">
          {ROLES.map((role, i) => (
            <div key={role.title} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[37px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-pass bg-ink shadow-[0_0_10px_rgba(62,207,142,0.35)]">
                <span className="h-1.5 w-1.5 rounded-full bg-pass" />
              </span>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-text">
                    {role.title}
                  </h3>

                  {role.badge && (
                    <span className="rounded-full border border-pass/30 bg-pass/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-pass">
                      {role.badge}
                    </span>
                  )}
                </div>

                <span className="shrink-0 font-mono text-xs">
                  {role.period}
                </span>
              </div>
              <div className="mt-1 font-mono text-sm text-pass">{role.org}</div>
              <ul className="mt-4 space-y-2">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mutedDark" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
