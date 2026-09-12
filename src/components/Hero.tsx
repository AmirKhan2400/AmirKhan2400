import { ArrowDown, Mail } from "lucide-react";
import { heroTechnologies, profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">
        <span className="short-line" /> AI &amp; BACKEND ENGINEERING
      </p>
      <h2 id="hero-title">
        Practical AI.
        <br />
        <span>Reliable systems.</span>
      </h2>
      <p className="hero-description">
        Software engineer transitioning from game and Android development into
        AI and backend engineering, focused on building practical,
        production-ready systems.
      </p>
      <div className="tech-pills hero-pills">
        {heroTechnologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="hero-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Let's work together <Mail size={17} />
        </a>
        <a className="button button-secondary" href="#projects">
          View Projects <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
