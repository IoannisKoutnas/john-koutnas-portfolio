export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-medium text-zinc-100">{title}</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
