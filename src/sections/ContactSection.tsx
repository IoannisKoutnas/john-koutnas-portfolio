import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-zinc-300">
          If you’d like to collaborate, review a project, or discuss a junior opportunity, feel free to reach out.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="button-accent"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>

          <a
            className="button-accent" href={profile.githubUrl}>
            GitHub
          </a>

          <a
            className="button-accent"
            href={profile.linkedinUrl}
          >
            LinkedIn
          </a>

          <a
            href="/cv/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-accent font-medium"
          >
            Download CV
          </a>

        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Tip: add a one-page PDF CV and link it here.
        </p>
      </div>
    </Section>
  );
}
