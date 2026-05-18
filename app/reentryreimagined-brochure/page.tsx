import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - ReentryReimagined - Brochure",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryReimagedBrochure() {
  return (
    <div className="relative font-RedHatDisplay font-semibold bg-[#FFF8F1]">
      {/* Nav Bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="relative container p-7 md:text-sm">
          {/* Flex container */}
          <div className="flex items-center justify-between">
            <div className="">
              <a
                href="/"
                className="py-2 px-6 rounded-full bg-[#FFF8F1] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] text-base hover:text-themeRed fill-black hover:fill-themeRed"
              >
                <svg
                  className="inline h-3 mb-[3px]"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                  xmlSpace="preserve"
                  id="svg8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs id="defs12" />
                  <g display="inline" id="g6" transform="matrix(-1,0,0,1,1000,0)">
                    <path
                      d="m 217.6,915.1 c 0,-19.2 7.2,-38.4 21.9,-53 L 601.5,500 239.5,137.9 c -29.3,-29.3 -29.3,-76.7 0,-106 29.3,-29.3 76.7,-29.3 106,0 l 415,415.1 c 29.3,29.3 29.3,76.7 0,106 l -415,415 c -29.3,29.3 -76.7,29.3 -106,0 -14.7,-14.6 -21.9,-33.8 -21.9,-52.9 z"
                      id="path4"
                    />
                  </g>
                </svg>
                Go Back
              </a>
              <a href="/" className="text-base">
                <img className="inline h-7 ml-5" src="/icons/logo-01-18-black.svg" alt="Harry Gu Logo" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main id="gdthumbnails">
        {/* Intro */}
        <div className="lg:pb-1 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
          {/* text block */}
          <div className="lg:order-last md:col-span-2 lg:col-span-1 px-16 py-32 lg:py-10 flex flex-col justify-center items-start transition bg-grey-500 min-h[30px] text-center ">
            <h1 className="text-left inline-flex flex-col">
              <span className="font-RedHatDisplay text-black font-black text-2xl pt-5">Reentry Reimagined</span>
              <span className="font-RedHatDisplay text-[#775022] font-black text-2xl">BROCHURE</span>
              <span className="font-RedHatDisplay text-[#775022] font-black text-2xl">DESIGN</span>
            </h1>

            <p className="text-left inline text-base mt-5">
              Following the{" "}
              <a href="/reentryreimagined" className="text-[#775022] underline">
                website redesign
              </a>{" "}
              for Reentry Reimagined, the next step was bringing their new visual identity to print through a redesigned
              brochure.
            </p>
          </div>

          <div className="md:col-span-2 transition sm:min-h-[150px] h-fit">
            <img
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] md:rounded-br-2xl"
              src="/images/ReentryReimagined-Brochure/1.jpg"
              alt="Hand holding the closed brochure showing the 'Empowering New Beginnings' cover design."
            />
          </div>
        </div>

        {/* Application */}
        <div className="py-10 items-center grid grid-col-1 md:grid-cols-2 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col justify-center items-center p-9 col-span-2 md:col-span-1 row-span-2  transition sm:min-h-[150px] h-fit">
            <div className="p-2">
              <div>
                <h2 className="mb-2 font-RedHatDisplay font-bold text-lg">Target Audience</h2>
                <ul className="list-disc ml-5 p-2">
                  <li>Formerly incarcerated individuals seeking support services</li>
                  <li>
                    Local non-profits across Michigan for potential collaborations
                    <br />
                    <br />
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 font-RedHatDisplay font-bold text-lg">Design Approach</h2>
                <ul className="list-disc ml-5 p-2">
                  <li>Minimum 16px font size for readability</li>
                  <li>Text passes contrast requirements</li>
                  <li>Matches website branding and style</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 md:col-span-1 row-span-2  transition sm:min-h-[150px] h-fit">
            <img
              className="rounded-2xl"
              src="/images/ReentryReimagined-Brochure/2.jpg"
              alt="Hands holding the partially open brochure, revealing the 'Our Team' and 'About Us' panels."
            />
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
            <img
              className="rounded-2xl"
              src="/images/ReentryReimagined-Brochure/4.png"
              alt="Fully open brochure held in hands, displaying the internal 'Our Services' and statistics panels."
            />
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
            <img
              className="rounded-2xl"
              src="/images/ReentryReimagined-Brochure/3.jpg"
              alt="Exterior view of the unfolded brochure showing the cover, back panel, and inside flap layout."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
