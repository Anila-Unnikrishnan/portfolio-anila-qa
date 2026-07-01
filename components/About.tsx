const FACTS = [
  {
    k: "Root cause, not just symptoms",
    v: "Comes from a support background — reproduces issues manually before they're ever logged as defects, so tickets reach engineering already triaged.",
  },
  {
    k: "Coverage across the full lifecycle",
    v: "Owns test cases from design through re-testing and release validation, keeping QA documentation audit-ready at every stage.",
  },
  {
    k: "Fluent with the toolchain",
    v: "Comfortable in Jira, Postman, SQL/PostgreSQL, and Core Java — enough technical depth to read logs and query data without waiting on a developer.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow text-pass">01 — About</div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              Quality is a process, not a checkbox.
            </h2>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I'm a{" "}
              <span className="font-medium text-pass">Manual QA &amp; Test Engineer</span>{" "}
              at <span className="font-medium text-pass">TMBill</span>, with experience in{" "}
                Functional Testing, Regression Testing, and UAT. My Customer Operations background helps me reproduce real customer issues, write effective test
              cases, and collaborate closely with developers to deliver reliable
              releases. Currently pursuing an MCA at Manipal University while working full-time.
          </p>

          <div className="grid gap-4 sm:grid-cols-1">
            {FACTS.map((fact) => (
              <div
                key={fact.k}
                className="group rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-pass/50"
              >
                <div className="font-display text-base font-semibold text-text">
                  {fact.k}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{fact.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
