import Script from "next/script";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
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
        #nav-hamburger-1, #nav-1 { color: #fff; }
        .hamburger-top, .hamburger-middle, .hamburger-bottom { background: #CCD4E3; }
        html, html body { height: auto; }
        @media (max-width: 767px) {
          #myVideo1, #myVideo2, #myVideo3 { object-position: calc(50% + 40px) center; }
        }
      `}</style>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] bg-[#CCD4E3] text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      <LoadingScreen />

      <Navbar />

      <section id="hero" role="banner"
        className="box-border aspect-11/16 md:aspect-square lg:aspect-video relative overflow-hidden bg-[#1C1E1F]">

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

      <main id="main" className="relative z-10">
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
            {/* Row 1 */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/kosmos"
              imageSrc="/images/kosmos_resort/thumb-dark.png"
              imageAlt="Desktop and mobile mockups featuring a starry night interface theme."
              title='"Kosmos Stargazing Resort" Website Redesign & Development'
              result="Result: -10% bounce rate"
            />
            <ProjectCard
              className="md:col-span-2 lg:col-span-1"
              href="/impact-report-usletter-Dec4.pdf"
              imageSrc="/images/impact_report/thumbnail.png"
              imageAlt="Teal fiscal year report cover featuring a donation QR code."
              title="Exodus Place 2024 Impact Report"
              result="Result: Distributed to donor base during $835K fundraising campaign"
            />
            {/* Row 2 — ALS-LM wide, Exodus tall (spills into row 3) */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/als-lm"
              imageSrc="/images/als-lm/cover.png"
              imageAlt="Two web pages on a blueprint grid."
              title='"Adult Learning Systems" Website Research & Redesign'
              result="Result: 5/5 preferred new design for donation"
            />
            <ProjectCard
              className="lg:row-span-2"
              href="/exodusplace"
              imageSrc="/images/ExodusPlace.org/mockup-mobile.png"
              imageAlt="Dark-themed website redesign showing an aerial view of the facility."
              title="Exodus Place Website Redesign"
              result="Result: Implemented in 2 weeks, handled +173% traffic surge"
            />
            {/* Row 3 — ReentryGuide wide, Exodus continues */}
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/reentryguide-gr"
              imageSrc="/images/ReentryGuide-GR/cover.png"
              imageAlt="Smartphone held in hand displaying the app's main menu interface."
              title='"ReentryGuide GR" Mobile App & Website'
              result="Result: Fixed 2 usability issues, promoted by MDOC"
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
            <ProjectCard
              href="/calvin-finds"
              imageSrc="/images/CalvinFinds/thumbnail.png"
              imageAlt="Mobile login screen featuring a flat illustration on an orange background."
              title="Calvin Finds Mobile App"
              result="Result: Identified and fixed 6 usability issues"
            />
          </div>
        </section>
      </main>

      <Footer />

      <Script id="parallax" strategy="afterInteractive">{`
        var navBorder = document.getElementById('nav-border');
        var mainNav = document.getElementById('main-nav');
        var NAV_END = 15;
        var NAV_START = 40;
        if (mainNav) {
          mainNav.style.top = NAV_START + 'px';
        }
        window.addEventListener('scroll', function() {
          var offset = window.pageYOffset;
          var parallaxContainer = document.getElementById('hero');
          if (parallaxContainer) parallaxContainer.style.transform = 'translateY(' + (offset * 0.3) + 'px)';
          if (navBorder) {
            var t = Math.min(offset / 300, 1);
            var topAlpha = (0.06 + t * 0.16).toFixed(3);
            var botAlpha = (0.22 - t * 0.16).toFixed(3);
            navBorder.style.background = 'linear-gradient(to bottom, rgba(204,212,227,' + topAlpha + '), rgba(204,212,227,' + botAlpha + '))';
          }
          if (mainNav) {
            var p = Math.min(offset / 80, 1);
            mainNav.style.top = (NAV_START - (NAV_START - NAV_END) * p) + 'px';
          }
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
