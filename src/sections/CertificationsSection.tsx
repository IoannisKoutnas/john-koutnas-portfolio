import Image from "next/image";
import Section from "@/components/Section";

const certs = [
  {
    title: "Data Visualization and Dashboards with Excel and Cognos",
    issuer: "IBM (Coursera)",
    image: "/certificates/data-visualization-excel-cognos.png",
  },
  {
    title: "Excel Basics for Data Analysis",
    issuer: "IBM (Coursera)",
    image: "/certificates/excel-basics-data-analysis.png",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM (Coursera)",
    image: "/certificates/introduction-to-data-analytics.png",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    image: "/certificates/python-for-data-science.png",
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM (Coursera)",
    image: "/certificates/python-project.png",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM (Coursera)",
    image: "/certificates/databases-and-sql-for-data-science-with-python.png",
  },
];

export default function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications">
      <p className="text-sm text-zinc-400">
        Selected IBM-authorized Coursera certificates. Click to view.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {certs.map((c) => (
          <a
            key={c.title}
            href={c.image}
            target="_blank"
            rel="noopener noreferrer"
            className="card-accent overflow-hidden"
            title="Open certificate"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={c.image}
                alt={`${c.title} certificate`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-zinc-100">{c.title}</p>
              <p className="mt-1 text-xs text-zinc-500">{c.issuer}</p>
              <p className="mt-3 text-xs text-zinc-400 link-accent">
                View →
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
