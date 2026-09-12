import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { profile } from "./data/profile";

export default function App() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((section) => {
      section.classList.add("reveal-ready");
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const offset =
        window.innerWidth <= 900
          ? parseFloat(
              getComputedStyle(document.documentElement).scrollPaddingTop,
            ) + 40
          : 140;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]"),
      );
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= offset)
        .at(-1);
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      )
        setActive(sections.at(-1)?.id ?? "about");
      else setActive(current?.id ?? "about");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Sidebar active={active} />
      <main id="main">
        <div className="main-inner">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <footer>
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a href="#about">Back to top ↑</a>
          </footer>
        </div>
      </main>
    </>
  );
}
