const PROJECTS = [
  {
    id: "order-hub",
    title: "TMBill Order Hub",
    tag: "Production application",
    status: "PASS",
    summary:
      "End-to-end manual QA ownership for TMBill's core order-management workflows, from test design through release sign-off.",
    points: [
      "Built and executed functional and regression suites covering order creation, status transitions, and billing edge cases.",
      "Logged and triaged defects in Jira with reproduction steps precise enough that developers could act without follow-up questions.",
      "Partnered with engineering on 3+ release cycles, verifying fixes and re-testing before each production deploy.",
    ],
    stack: ["Manual Testing", "Jira", "SQL", "Regression"],
  },
  {
    id: "campus-portal",
    title: "Campus Training & Placement Portal",
    tag: "Full-stack build + QA",
    status: "PASS",
    summary:
      "A placement-tracking web app built and tested end-to-end — one of the few projects where Anila owned both the code and the test plan.",
    points: [
      "Built the application using HTML, CSS, JavaScript, Java, Bootstrap, and PostgreSQL.",
      "Designed functional and integration test cases for student placement and opportunity-tracking workflows.",
      "Validated data integrity across the placement pipeline, from student registration to opportunity matching.",
    ],
    stack: ["Java", "PostgreSQL", "JavaScript", "Integration Testing"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-border bg-surface/30 section-grid">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="eyebrow text-pass">02 — Featured Work</div>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
          Test reports from the field.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-lg border border-border bg-ink transition-all hover:border-pass/50 hover:shadow-[0_0_30px_-10px_rgba(62,207,142,0.25)]"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="eyebrow text-mutedDark">{project.tag}</span>
                <span className="rounded bg-pass/10 px-2 py-1 font-mono text-[10px] font-semibold text-pass">
                  {project.status}
                </span>
              </div>
              <div className="flex-1 p-5">
                <h3 className="font-display text-xl font-semibold text-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1 text-pass">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-border px-5 py-4">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
