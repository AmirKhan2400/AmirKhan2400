import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="content-section reveal"
      aria-label="Experience"
    >
      <SectionHeading
        number="02"
        title="Experience"
        subtitle="From interactive worlds to intelligent systems."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article
            key={item.title}
            className={`timeline-item${item.current ? " current" : ""}`}
          >
            <span className="timeline-dot" />
            <div className="experience-header">
              <h3>{item.title}</h3>
              <span className="period">{item.period}</span>
            </div>
            <p>{item.description}</p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
