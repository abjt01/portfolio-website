type Achievement = {
  title: string;
  subtitle: string;
  date: string;
  prize?: string;
};

const achievements: Achievement[] = [
  {
    title: "First Runner-Up — Asymmetric Hackathon",
    subtitle: "48-hour hackathon at CIT Chennai, 300+ teams applied, 20 shortlisted",
    date: "2026",

  },
  {
    title: "2nd Runner-Up — NMIT Hackathon",
    subtitle: "built a multi-agent llm hallucination solver with sympy-backed triple validation",
    date: "2025",
  },
  {
    title: "3rd Place — HackaPhasia 2025",
    subtitle: "ai-enabled virtual health assistant for refugees, organized by BMSCE",
    date: "2025",
  },
  {
    title: "DevOps & SRE Certification — Linux Foundation",
    subtitle: "introduction to devops and site reliability engineering (LFS162)",
    date: "2026",
  },
  {
    title: "MongoDB Node.js Developer Path",
    subtitle: "mongodb certified node.js developer path completion",
    date: "2025",
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full max-w-3xl mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> achievements
      </h2>
      <div className="flex flex-col gap-6">
        {achievements.map(({ title, subtitle, date, prize }) => (
          <div
            key={title}
            className="group border-l-2 border-gray-800 pl-6 hover:border-[#6c6499] transition-all duration-300"
          >
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-base font-grotesk font-bold text-gray-100 group-hover:text-[#6c6499] transition-colors duration-300">
                {title}
              </h3>
              {prize && (
                <span className="text-sm font-mono text-[#6c6499]">· {prize}</span>
              )}
              <span className="text-xs text-gray-600 font-mono">{date}</span>
            </div>
            <p className="text-sm text-gray-400 font-mono">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
