import { DvdSection } from "./DvdSection";
import { ScrollReveal } from "./ScrollReveal";

export function StorySection() {
  return (
    <section
      className="projects"
      id="story"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-base)",
        overflow: "visible",
        paddingTop: "clamp(220px, 24vw, 320px)",
      }}
    >
      {/* 2. Original White Scroll-Reveal Animation: Organic Cloud Seam */}
      <div className="sky-band" aria-hidden="true" />

      {/* Complete CD Animation */}
      <ScrollReveal className="cd-animation-container">
        <div style={{ position: "relative", zIndex: 15, width: "100%", overflow: "visible" }}>
          <DvdSection />
        </div>
      </ScrollReveal>
    </section>
  );
}
