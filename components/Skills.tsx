const SKILL_GROUPS = [
  {
    label: "Testing Discipline",
    skills: [
      { name: "Manual & Functional Testing", level: 92 },
      { name: "Regression Testing", level: 90 },
      { name: "Defect Lifecycle Management", level: 88 },
      { name: "Integration Testing", level: 78 },
    ],
  },
  {
    label: "Tools & Data",
    skills: [
      { name: "Jira", level: 90 },
      { name: "SQL / PostgreSQL", level: 92 },
      { name: "Postman", level: 70 },
      { name: "Core Java", level: 75 },
    ],
  },
];

const CERTS = [
  "Google Cloud Cybersecurity Professional Certificate — Google",
  "Capstone: Preparing to Work as a Cloud Support Associate — AWS",
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface/30 section-grid">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="eyebrow text-pass">04 — Skills</div>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
          Quality toolkit.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-mutedDark">
                {group.label}
              </h3>
              <div className="mt-5 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-text">{skill.name}</span>
                      <span className="font-mono text-xs text-mutedDark">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-passDim to-pass"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-border bg-ink p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-mutedDark">
            Certifications
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {CERTS.map((cert) => (
              <li key={cert} className="flex gap-2 text-sm text-muted">
                <span className="text-amber">▸</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
