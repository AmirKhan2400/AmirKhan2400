import { Braces, BrainCircuit, Server, Gamepad2 } from "lucide-react";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

const icons = [Braces, BrainCircuit, Server, Gamepad2];

export default function Skills() {
  return (
    <section id="skills" className="content-section reveal" aria-label="Skills">
      <SectionHeading
        number="03"
        title="Tools of the trade"
        subtitle="The technologies behind the work."
      />
      <div className="skills-grid">
        {skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-title">
                <Icon size={19} strokeWidth={1.5} />
                <h3>{group.title}</h3>
              </div>
              <div className="tech-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
