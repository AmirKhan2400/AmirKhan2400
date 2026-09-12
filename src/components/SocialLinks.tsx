import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export default function SocialLinks({
  expanded = false,
  iconSize = 18,
}: {
  expanded?: boolean;
  iconSize?: number;
}) {
  const links = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    {
      label: "Email",
      href: profile.email ? `mailto:${profile.email}` : "",
      icon: Mail,
    },
  ];
  return (
    <div className={expanded ? "social-links expanded" : "social-links"}>
      {links.map(({ label, href, icon: Icon }) =>
        href ? (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
          >
            <Icon size={iconSize} />
            {expanded && (
              <>
                <span>{label}</span>
                <ArrowUpRight size={16} />
              </>
            )}
          </a>
        ) : (
          <span
            key={label}
            className="unavailable-link"
            role="link"
            aria-disabled="true"
            aria-label={`${label} — coming soon`}
            title={`${label} — coming soon`}
          >
            <Icon size={iconSize} />
            {expanded && (
              <>
                <span>{label}</span>
                <small>Coming soon</small>
              </>
            )}
          </span>
        ),
      )}
    </div>
  );
}
