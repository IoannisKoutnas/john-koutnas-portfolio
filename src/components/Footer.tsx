import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-500">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js + Tailwind.
      </p>
    </footer>
  );
}
