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

      <div id="loadingScreen" className="font-terminal" suppressHydrationWarning
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "black", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, opacity: 1, transition: "opacity 0.5s ease" }}>
        <p id="loadingText" suppressHydrationWarning style={{ color: "#CCD4E3", fontSize: "2em" }}>Loading 0%</p>
      </div>

      <section id="hero" role="banner"
        className="box-border min-h-[600px] max-h-[800px] h-[75vh] md:h-screen relative overflow-hidden bg-[#1C1E1F]">

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

        <div className="font-[urbanist] font-extrabold">
          <nav className="relative container mx-auto text-gray-400">
            <div className="flex items-center justify-between max-w-[600px] mt-[8vh] md:mt-[7vh] mx-6 md:ml-10 lg:ml-20">
              <div style={{ zIndex: 701 }}>
                <a href="/" className="text-base">
                  <img className="inline h-7 opacity-40" src="/icons/logo-9-21-colored.svg" alt="Harry Gu Logo" />
                </a>
              </div>
              <div className="hidden space-x-12 md:flex" style={{ zIndex: 701 }}>
                <a href="/" id="nav-1" className="hover:text-themeRed" aria-current="page">Home</a>
                <a href="/#projects" id="nav-3" className="hover:text-themeRed">Projects</a>
                <a href="/archive" id="nav-2" className="hover:text-themeRed">Archive</a>
              </div>
              <div className="hidden space-x-3 md:flex" style={{ zIndex: 701 }}>
                <a href="https://www.linkedin.com/in/harrygu-ux/" className="text-base">
                  <img className="inline h-7" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile" />
                </a>
                <a href="https://github.com/harryg02" className="text-base">
                  <img className="inline h-7" src="/icons/github-hero.svg" alt="GitHub Profile" />
                </a>
              </div>
              <button id="menu-btn" className="z-40 block hamburger md:hidden focus:outline-none" style={{ zIndex: 701 }} aria-label="Toggle menu">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <div id="menu" className="absolute w-[100vw] flex-col items-center hidden self-end py-16 space-y-10 font-bold text-darkGray bg-menu animate-open-menu text-base pt-36 -top-1" style={{ zIndex: 700 }}>
              <a href="/" id="nav-hamburger-1" className="hover:text-themeRed" aria-current="page">Home</a>
              <a href="/#projects" id="nav-hamburger-3" className="hover:text-themeRed">Projects</a>
              <a href="/archive" id="nav-hamburger-2" className="hover:text-themeRed">Archive</a>
              <div>
                <a href="https://www.linkedin.com/in/harrygu-ux/" className="text-base">
                  <img className="inline h-8" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile" />
                </a>
                <a href="https://github.com/harryg02" className="text-base">
                  <img className="inline h-8" src="/icons/github-hero.svg" alt="GitHub Profile" />
                </a>
              </div>
            </div>
          </div>

          <Script src="/js/script.js" strategy="afterInteractive" />
        </div>
      </section>

      <main id="main" className="relative z-10">
        <section id="projects" role="region" aria-label="Projects" className="bg-[#171921] p-4 border-y border-gray-800">
          <h2 className="sr-only">Projects</h2>
          {/*
            Bento layout (3-col desktop):
            Row 1: [Kosmos ×2] [Impact ×1]
            Row 2: [ALS-LM ×1] [ReentryGuide ×2]
            Row 3: [Exodus ×1] [RR ×1] [Calvin ×1]
            To reorder: move entries in the array below.
            To resize: change the className col-span value.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto border border-[rgba(204,212,227,0.1)]">
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
            <ProjectCard
              href="/als-lm"
              imageSrc="/images/als-lm/cover.png"
              imageAlt="Two web pages on a blueprint grid."
              title='"Adult Learning Systems" Website Research & Redesign'
              result="Result: 5/5 preferred new design for donation"
            />
            <ProjectCard
              className="md:col-span-2 lg:col-span-2"
              href="/reentryguide-gr"
              imageSrc="/images/ReentryGuide-GR/cover.png"
              imageAlt="Smartphone held in hand displaying the app's main menu interface."
              title='"ReentryGuide GR" Mobile App & Website'
              result="Result: Fixed 2 usability issues, promoted by MDOC"
            />
            <ProjectCard
              href="/exodusplace"
              imageSrc="/images/ExodusPlace.org/thumbnail.png"
              imageAlt="Dark-themed website redesign showing an aerial view of the facility."
              title="Exodus Place Website Redesign"
              result="Result: Implemented in 2 weeks, handled +173% traffic surge"
            />
            <ProjectCard
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
        window.addEventListener('scroll', function() {
          var offset = window.pageYOffset;
          var parallaxContainer = document.getElementById('hero');
          if (parallaxContainer) parallaxContainer.style.transform = 'translateY(' + (offset * 0.3) + 'px)';
        });
      `}</Script>

      <Script id="loading-screen" strategy="afterInteractive">{`
        (function() {
          var loadingText = document.getElementById('loadingText');
          var resources = Array.from(document.images).concat(Array.from(document.getElementsByTagName('video')));
          var totalResources = resources.length;
          var loadedResources = 0;

          function updateLoadingPercentage() {
            var percentage = Math.round((loadedResources / totalResources) * 100);
            if (loadingText) loadingText.textContent = 'Loading ' + percentage + '%';
          }

          function resourceLoaded() {
            loadedResources++;
            updateLoadingPercentage();
            if (loadedResources === totalResources) {
              var screen = document.getElementById('loadingScreen');
              if (screen) screen.style.opacity = '0';
              setTimeout(function() {
                if (screen) screen.style.display = 'none';
                startBackgroundChange();
              }, 500);
            }
          }

          if (totalResources === 0) {
            var screen = document.getElementById('loadingScreen');
            if (screen) screen.style.display = 'none';
            return;
          }

          resources.forEach(function(resource) {
            if ((resource.tagName === 'IMG' && resource.complete) ||
                (resource.tagName === 'VIDEO' && resource.readyState >= 4)) {
              resourceLoaded();
            } else {
              resource.addEventListener('load', resourceLoaded, { once: true });
              resource.addEventListener('canplaythrough', resourceLoaded, { once: true });
              resource.addEventListener('error', resourceLoaded, { once: true });
            }
          });

          function startBackgroundChange() {
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
          }
        })();
      `}</Script>
    </div>
  );
}
