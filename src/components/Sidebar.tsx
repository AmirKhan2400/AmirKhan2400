import { UserRound, BriefcaseBusiness, Layers3, Code2 } from "lucide-react";
import { navigation, profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

const icons = [UserRound, Layers3, BriefcaseBusiness, Code2];

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="sidebar">
      <div className="identity">
        <div className="avatar">
          {profile.photo ? (
            <img
              src={`${import.meta.env.BASE_URL}${profile.photo}`}
              alt={profile.name}
            />
          ) : (
            <span aria-label="Profile photo placeholder">
              A<span className="avatar-dot">.</span>
            </span>
          )}
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
        </div>
      </div>
      <p className="sidebar-description">{profile.description}</p>
      <div className="sidebar-divider" />
      <nav aria-label="Main navigation">
        {navigation.map(({ id, label }, index) => {
          const Icon = icons[index];
          return (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
            >
              <Icon size={18} />
              <span>{label}</span>
              <span className="nav-mark" />
            </a>
          );
        })}
      </nav>
      <div className="mobile-socials">
        <SocialLinks />
      </div>
      <div className="sidebar-bottom">
        <SocialLinks iconSize={25} />
        <span className="sidebar-copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </aside>
  );
}
