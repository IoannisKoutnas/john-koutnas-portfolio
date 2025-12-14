import Section from "@/components/Section";
import { highlights } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4">
        <p className="text-zinc-300 leading-relaxed">
          I am driven by a strong desire to grow and excel in this field. I’m
          passionate about working with data, building dashboards, and using SQL
          and Python to turn analysis into clear, actionable insights. With a
          background in Computer Science and Engineering, I continuously
          strengthen my skills through hands-on projects and professional
          certifications, always seeking to learn more and improve. I’m highly
          motivated, detail-oriented, and committed to putting in the work
          required to become an excellent data analyst and deliver real value
          through data-driven thinking.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.k} className="card-feature p-4">
              <p className="text-xs text-zinc-400">{h.k}</p>
              <p className="mt-1 text-sm text-zinc-200">{h.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
