import { PageLoader } from "@/components/PageLoader";
import { RouteCurtain } from "@/components/RouteCurtain";
import { ZainabLandingPage } from "@/components/ZainabLandingPage";
import { StorySection } from "@/components/StorySection";
import { ScreenshotShowcase } from "@/components/ScreenshotShowcase";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { FaqShowcase } from "@/components/FaqShowcase";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <div id="top" style={{ position: "absolute", top: 0, left: 0, height: 1, width: 1, pointerEvents: "none" }} aria-hidden="true" />
      <PageLoader />
      <RouteCurtain />

      {/* STAGE 1: LANDING PAGE & SCROLL-COVER DVD EXPERIENCE */}
      {/* The sticky hero is strictly contained within hero-scroll-stage so it can NEVER reappear below the DVD section */}
      <div className="hero-scroll-stage" style={{ position: "relative", width: "100%" }}>
        <ZainabLandingPage />
        <StorySection />
      </div>

      {/* STAGE 2: COMPLETE ORIGINAL HOMEPAGE CONTENT STREAM */}
      {/* Immediately follows DVD section in normal document flow with solid opaque background and layer isolation */}
      <div
        className="homepage-content-stream"
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          background: "var(--bg-base)",
        }}
      >
        {/* 3. SEE IT IN ACTION — Real Android Screenshots Showcase */}
        <ScreenshotShowcase />
        {/* 4. WHY TERA — Eight Refined Feature Cards */}
        <FeaturesShowcase />
        {/* 5. QUESTIONS — Straight Answers FAQ Accordion */}
        <FaqShowcase />
        {/* 6. COMBINED ABOUT & SUPPORT TERA MUSIC */}
        <SupportSection />
      </div>
    </>
  );
}
