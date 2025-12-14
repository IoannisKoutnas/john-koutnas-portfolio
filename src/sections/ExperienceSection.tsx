import Section from "@/components/Section";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="card-accent p-5">
        <p className="text-sm leading-relaxed text-zinc-300">
          I gained hands-on analytical and operational experience as a{" "}
          <span className="font-medium text-zinc-100">
            Head Waiter and Store Manager
          </span>{" "}
          in a high-volume restaurant, where I applied data-driven thinking to
          support daily operations and decision-making. In parallel, my academic
          background in{" "}
          <span className="font-medium text-zinc-100">
            Computer Science and Engineering
          </span>{" "}
          strengthened my analytical foundation through coursework and
          data-focused projects.
        </p>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>
            Analyzed sales, inventory, and performance metrics to identify trends
            and support data-driven purchasing and staff scheduling decisions.
          </li>
          <li>
            Applied data-driven thinking to improve daily operations in a
            fast-paced, high-volume environment.
          </li>
          <li>
            Managed and coordinated a team of 15+ employees, using performance
            insights to improve efficiency and team coordination.
          </li>
          <li>
            Communicated insights clearly to support better operational and
            customer-facing decisions.
          </li>
          <li>
            Built strong analytical skills through academic projects in data
            analysis, algorithms, databases, and information retrieval.
          </li>
        </ul>
      </div>
    </Section>
  );
}
