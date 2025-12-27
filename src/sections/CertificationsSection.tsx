import Image from "next/image";
import Section from "@/components/Section";

const certs = [
  {
    title: "Data Visualization and Dashboards with Excel and Cognos",
    issuer: "IBM (Coursera)",
    image: "/certificates/1_data-visualization-excel-cognos.png",
  },
  {
    title: "Excel Basics for Data Analysis",
    issuer: "IBM (Coursera)",
    image: "/certificates/2_excel-basics-data-analysis.png",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM (Coursera)",
    image: "/certificates/3_introduction-to-data-analytics.png",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    image: "/certificates/4_python-for-data-science.png",
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM (Coursera)",
    image: "/certificates/5_python-project.png",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM (Coursera)",
    image: "/certificates/6_databases-and-sql-for-data-science-with-python.png",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    image: "/certificates/7_data_analysis_with_python.png",
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM (Coursera)",
    image: "/certificates/8_data_visualization_with_python.png",
  }
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
