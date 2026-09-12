import {
  ArrowUpRight,
  Github,
  Gamepad2,
  Code2,
  Terminal,
  Play,
} from "lucide-react";
import type { Project } from "../data/projects";

// Abstract previews are placeholders, not screenshots or claimed project results.
function ProjectPreview({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className="project-preview">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </div>
    );
  return (
    <div
      className={`project-preview preview-${project.preview}`}
      aria-label={`${project.title} illustrative preview placeholder`}
      role="img"
    >
      {project.preview === "analyzer" && (
        <div className="mini-window" aria-hidden="true">
          <div className="window-bar">
            <span className="window-dots">● ● ●</span>
            <span>job-market-analyzer</span>
            <Code2 size={12} />
          </div>
          <div className="analyzer-body">
            <div className="mini-side">
              <div />
              <div />
              <div />
            </div>
            <div className="mini-analysis">
              <span>Profile → Opportunity</span>
              <div className="analysis-line long" />
              <div className="analysis-line medium" />
              <div className="mini-tags">
                <i>Python</i>
                <i>FastAPI</i>
                <i>SQL</i>
              </div>
              <div className="analysis-bottom">
                <span>Requirements extracted</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {project.preview === "support" && (
        <div className="terminal-preview" aria-hidden="true">
          <div className="terminal-title">
            <Terminal size={13} />
            <span>support_classifier.py</span>
          </div>
          <div className="code-line">
            <span className="code-muted">01</span>
            <span className="code-comment"># Turn messages into decisions</span>
          </div>
          <div className="code-line">
            <span className="code-muted">02</span>
            <span>{"{"}</span>
          </div>
          <div className="code-line">
            <span className="code-muted">03</span>
            <span>
              &nbsp; <b>"intent"</b>: <em>"technical_support"</em>,
            </span>
          </div>
          <div className="code-line">
            <span className="code-muted">04</span>
            <span>
              &nbsp; <b>"urgency"</b>: <em>"high"</em>
            </span>
          </div>
          <div className="code-line">
            <span className="code-muted">05</span>
            <span>{"}"}</span>
          </div>
          <div className="terminal-caption">
            Qwen2.5 · QLoRA · Structured output
          </div>
        </div>
      )}
      {project.preview === "game" && (
        <div className="game-preview" aria-hidden="true">
          <Gamepad2 size={44} strokeWidth={1} />
          <span>NEUROLAND</span>
          <p>Gameplay. Systems. Play.</p>
          <div className="game-preview-tags">
            <span>2D</span>
            <span>UNITY</span>
            <span>MOBILE</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-pills">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={15} /> View on GitHub <ArrowUpRight size={15} />
            </a>
          ) : project.googlePlay ? (
            <a
              href={project.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={15} /> View on Google Play <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="project-unavailable">
              Repository not published
            </span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
