import Script from "next/script";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Home",
  description: "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function Home() {
  return (
    <div className="font-[urbanist] font-semibold bg-[#1E2128]">
      <style>{`
        body { background-color: #1D1F27; }
        html, html body { height: auto; }
        @media (max-width: 767px) {
          #myVideo1, #myVideo2, #myVideo3 { object-position: calc(50% + 40px) center; }
        }
      `}</style>





      <section id="hero" role="banner"
        className="box-border aspect-11/16 md:aspect-square lg:aspect-15/8 relative overflow-hidden bg-[#1C1E1F]">

        <h1 className="sr-only text-white bg-black">I&apos;m Harry Gu. I&apos;m a UI/UX Designer, Front-End Developer, and Graphic Designer</h1>

        <video id="myVideo1" autoPlay loop muted aria-hidden={true}
          className="video-overlay inline-block object-cover w-full h-full absolute top-0 left-0">
          <source src="/herovideo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video id="myVideo2" autoPlay loop muted aria-hidden={true} style={{ display: "none" }}
          className="video-overlay inline-block object-cover w-full h-full absolute top-0 left-0">
          <source src="/herovideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video id="myVideo3" autoPlay loop muted aria-hidden={true} style={{ display: "none" }}
          className="video-overlay inline-block object-cover w-full h-full absolute top-0 left-0">
          <source src="/herovideo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundSize: "cover" }} aria-hidden={true}></div>
      </section>

      <main id="main-content" className="relative z-10">
        <section id="projects" role="region" aria-label="Projects" className="bg-[#171921] p-4 border-y border-gray-800">
          <h2 className="sr-only">Projects</h2>
          {/*
            Bento layout (3-col desktop):
            Row 1: [Kosmos ×2col]         [Impact ×1col]
            Row 2: [ALS-LM ×2col]         [Exodus ×1col, row-span-2 ↓]
            Row 3: [ReentryGuide ×2col]   [Exodus cont.]
            Row 4: [RR ×2col]             [Calvin ×1col]
            Landscape thumbnails → col-span-2, portrait → row-span-2.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto border border-[rgba(204,212,227,0.1)]">
            {/* Row 1 — Kosmos wide, Exodus tall (spills into row 2) */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/kosmos"
              imageSrc="/images/kosmos_resort/thumb-dark.png"
              imageAlt="Desktop and mobile mockups featuring a starry night interface theme."
              title='"Kosmos Stargazing Resort" Website Redesign & Development'
              result="Result: -10% bounce rate"
            />
            <ProjectCard
              className="lg:row-span-2"
              href="/exodusplace"
              imageSrc="/images/ExodusPlace.org/mockup-mobile.png"
              imageAlt="Dark-themed website redesign showing an aerial view of the facility."
              title="Exodus Place Website Redesign"
              result="Result: Implemented in 2 weeks, handled +173% traffic surge"
            />
            {/* Row 2 — ALS-LM wide, Exodus continues */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/als-lm"
              imageSrc="/images/als-lm/cover.png"
              imageAlt="Two web pages on a blueprint grid."
              title='"Adult Learning Systems" Website Research & Redesign'
              result="Result: 5/5 preferred new design for donation"
            />
            {/* Row 3 — ReentryGuide wide, Calvin fills col 3 */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/reentryguide-gr"
              imageSrc="/images/ReentryGuide-GR/cover.png"
              imageAlt="Smartphone held in hand displaying the app's main menu interface."
              title='"ReentryGuide GR" Mobile App & Website'
              result="Result: Fixed 2 usability issues, promoted by MDOC"
            />
            <ProjectCard
              href="/calvin-finds"
              imageSrc="/images/CalvinFinds/thumbnail.png"
              imageAlt="Mobile login screen featuring a flat illustration on an orange background."
              title="Calvin Finds Mobile App"
              result="Result: Identified and fixed 6 usability issues"
            />
            {/* Row 4 */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/reentryreimagined"
              imageSrc="/images/ReentryReimagined/thumbnail.png"
              imageAlt="Earth-toned website layout displayed on desktop and mobile screens."
              title="Reentry Reimagined Website Redesign"
              result="Result: +40% traffic"
            />
            {/* Row 5 */}
            <ProjectCard
              className="md:col-span-1 lg:col-span-1"
              href="/detroit-child-usability"
              imageSrc="/images/detroit-child-usability/suggestion1.png"
              imageAlt="Mockup of the State of the Detroit Child homepage redesign with an embedded interactive map of Detroit prominently featured."
              title="State of the Detroit Child Usability Analysis"
              result="Result: 5 usability findings, 5 actionable recommendations"
            />
          </div>
        </section>
      </main>

      <Footer />

      <Script id="parallax" strategy="afterInteractive">{`
        window.addEventListener('scroll', function() {
          var parallaxContainer = document.getElementById('hero');
          if (parallaxContainer) parallaxContainer.style.transform = 'translateY(' + (window.pageYOffset * 0.3) + 'px)';
        }, { passive: true });
      `}</Script>

      <Script id="hero-video-cycle" strategy="afterInteractive">{`
        (function() {
          var videoOverlays = [
            document.getElementById('myVideo1'),
            document.getElementById('myVideo2'),
            document.getElementById('myVideo3')
          ];
          var currentIndex = 0;
          function changeBackgroundVideo() {
            currentIndex = (currentIndex + 1) % videoOverlays.length;
            if (videoOverlays[currentIndex]) videoOverlays[currentIndex].style.display = 'block';
            if (currentIndex === videoOverlays.length - 1) {
              setTimeout(function() {
                videoOverlays.forEach(function(overlay, index) {
                  if (overlay) overlay.style.display = index === 0 ? 'block' : 'none';
                });
                currentIndex = 0;
              }, 3000);
            }
          }
          setInterval(changeBackgroundVideo, 3000);
        })();
      `}</Script>
    </div>
  );
}
