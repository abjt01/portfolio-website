'use client';
import { GithubLogo, LinkSimple } from "@phosphor-icons/react";

type Project = {
  title: string;
  desc: string;
  href?: string;
  date?: string;
  github?: string;
  stack?: string[];
};

const projects: Project[] = [
  {
    title: "asyncMCP",
    desc: "lightweight mcp server for javascript and node.js implementing json-rpc 2.0 over stdio for seamless llm and mern integration. modular core with sandboxing, validation, and rate-limiting middleware. optional http adapter for mern stacks while keeping stdio as secure default transport.",
    github: "https://github.com/abjt01/asyncMCP",
    stack: ["Node.js", "Express.js", "JSON-RPC 2.0", "Docker", "JavaScript"],
    date: "2025",
  },
  {
    title: "mirage",
    desc: "state-aware security layer for ml apis with real-time dashboards to visualize threat scores, attack patterns, and model telemetry. streaming pipelines and caching strategies keep frontend latency low while surfacing high-cardinality telemetry for rapid operator response.",
    github: "https://github.com/abjt01/mirage",
    stack: ["Node.js", "React", "WebSockets", "D3.js", "Kubernetes"],
    date: "2026",
  },
  {
    title: "ayuniq",
    desc: "platform integrating ayurvedic (namaste) and icd-11 terminologies using fhir bundles to enable healthcare interoperability and insurance workflows. multi-service architecture combining node.js backend with fastapi microservices, containerized via docker compose.",
    github: "https://github.com/abjt01/ayuniq",
    stack: ["Node.js", "Express.js", "React", "FastAPI", "Python", "Docker", "MongoDB"],
    date: "2025",
  },
  {
    title: "credpulse",
    desc: "an agentic ai credit risk solution for msmes. built a full risk-graph engine and autonomous financing agents in under 24 hours at mumbai hacks. tackles fragmented financial data and slow underwriting with decision engines powered by agentic ai.",
    href: "https://drive.google.com/file/d/157sSCk-lppX_HBSP79HsUjZzjbAx7w9g/view",
    stack: ["Python", "Agentic AI", "FastAPI", "React", "Next.js"],
    date: "2025",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-3xl mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map(({ title, desc, href, date, github }) => (
          <div
            key={title}
            className="group border-l-2 border-gray-800 pl-6 hover:border-[#6c6499] transition-all duration-300"
          >
            <div className="flex flex-row items-start justify-between mb-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-grotesk font-bold text-gray-100 group-hover:text-[#6c6499] transition-colors duration-300">{title}</h3>
                {date && (
                  <span className="text-xs text-gray-600 font-mono">{date}</span>
                )}
              </div>
              <span className="flex items-center gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    className="text-gray-600 hover:text-[#6c6499] transition-colors duration-300"
                  >
                    <GithubLogo size={20} weight="regular" />
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                    className="text-gray-600 hover:text-[#6c6499] transition-colors duration-300"
                  >
                    <LinkSimple size={20} weight="bold" />
                  </a>
                )}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
