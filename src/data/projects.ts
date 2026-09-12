export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  googlePlay?: string;
  preview: "analyzer" | "support" | "game";
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Job Market Analyzer",
    category: "AI APPLICATION / FULL STACK",
    description:
      "AI-powered job analysis application that extracts job requirements, matches them against a user profile, and generates personalized recommendations.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "LLM APIs",
      "React",
      "TypeScript",
    ],
    github: "https://github.com/AmirKhan2400/job-market-analyzer",
    demo: "https://amirkhan2400.github.io/job-market-analyzer/",
    preview: "analyzer",
  },
  {
    title: "Smart Support AI",
    category: "MACHINE LEARNING / NLP",
    description:
      "Intent and urgency classifier fine-tuned using Qwen2.5-1.5B-Instruct with QLoRA for structured customer support routing. Turns incoming messages into actionable categories and priority levels.",
    technologies: ["Python", "Qwen", "QLoRA", "NLP", "Hugging Face", "LLMs"],
    github: "https://github.com/AmirKhan2400/smart-support-ai",
    preview: "support",
  },
  {
    title: "Neuroland",
    category: "GAME DEVELOPMENT / MOBILE",
    description:
      "2D mobile game developed in Unity featuring gameplay systems, minigames, rewards, collectibles, customization, analytics, and content management.",
    technologies: ["Unity", "C#", "Mobile Game Development"],
    googlePlay:
      "https://play.google.com/store/apps/dev?id=7416087850817395524&hl=en_US",
    preview: "game",
  },
];
