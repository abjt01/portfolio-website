const skills = [
  // Languages
  { label: "javascript", icon: "devicon-javascript-plain" },
  { label: "go", icon: "devicon-go-plain" },
  { label: "python", icon: "devicon-python-plain" },
  { label: "c", icon: "devicon-c-plain" },
  { label: "c++", icon: "devicon-cplusplus-plain" },
  { label: "typescript", icon: "devicon-typescript-plain" },

  // Web & Frameworks
  { label: "node.js", icon: "devicon-nodejs-plain" },
  { label: "express", icon: "devicon-express-original" },
  { label: "react", icon: "devicon-react-original" },
  { label: "next.js", icon: "devicon-nextjs-original" },
  { label: "vite", icon: "devicon-vitejs-plain" },
  { label: "html5", icon: "devicon-html5-plain" },
  { label: "css3", icon: "devicon-css3-plain" },
  { label: "tailwind", icon: "devicon-tailwindcss-plain" },

  // DevOps & Cloud
  { label: "docker", icon: "devicon-docker-plain" },
  { label: "kubernetes", icon: "devicon-kubernetes-plain" },
  { label: "linux", icon: "devicon-linux-plain" },
  { label: "git", icon: "devicon-git-plain" },
  { label: "github", icon: "devicon-github-original" },
  { label: "gcp", icon: "devicon-googlecloud-plain" },
  { label: "aws", icon: "devicon-amazonwebservices-plain-wordmark" },
  { label: "nginx", icon: "devicon-nginx-original" },

  // Databases
  { label: "mongodb", icon: "devicon-mongodb-plain" },
  { label: "mysql", icon: "devicon-mysql-plain" },
  { label: "redis", icon: "devicon-redis-plain" },

  // Tools
  { label: "postman", icon: "devicon-postman-plain" },
  { label: "bash", icon: "devicon-bash-plain" },
  { label: "npm", icon: "devicon-npm-original-wordmark" },
  { label: "yaml", icon: "devicon-yaml-plain" },
  { label: "solidity", icon: "devicon-solidity-plain" },
  { label: "fastapi", icon: "devicon-fastapi-plain" },
];

export default function SkillsGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-[#6c6499]">&gt;</span> skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-800 text-sm text-gray-400 hover:border-[#6c6499] hover:text-[#6c6499] transition-all duration-300"
            style={{ minWidth: "fit-content" }}
          >
            {icon ? (
              <i className={icon + " text-base"} title={label} />
            ) : (
              <></>
            )}
            <span className="font-mono">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
