import Section from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="card-accent p-5">
            <p className="text-sm font-medium text-zinc-100">{group.title}</p>

            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
