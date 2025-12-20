import Section from "@/components/Section";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <p className="text-sm text-zinc-400">
        A selection of projects that show how I work end-to-end: turning a dataset
        or algorithm into a usable tool, with clear outputs and thoughtful UI.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project ${p.title} on GitHub`}
            className="card-accent group p-5 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-medium text-zinc-100">{p.title}</h3>
              <span
                aria-hidden="true"
                className="text-xs text-zinc-400 transition group-hover:text-zinc-200"
              >
                View →
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-300">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
