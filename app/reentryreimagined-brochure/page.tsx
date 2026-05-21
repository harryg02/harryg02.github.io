import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - ReentryReimagined - Brochure",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryReimagedBrochure() {
  return (
    <div className="relative bg-[#FFF8F1]">
      <style>{`body { background-color: #FFF8F1; }`}</style>


      {/* Main content */}
      <main id="main-content">
        {/* Intro */}
        <div className="lg:pb-1 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
          {/* text block */}
          <div className="lg:order-last md:col-span-2 lg:col-span-1 px-16 py-32 lg:py-10 flex flex-col justify-center items-start transition bg-grey-500 min-h[30px] text-center ">
            <h1 className="text-left inline-flex flex-col">
              <span className="text-black font-black text-2xl pt-5">Reentry Reimagined</span>
              <span className="text-[#775022] font-black text-2xl">BROCHURE</span>
              <span className="text-[#775022] font-black text-2xl">DESIGN</span>
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
                <h2 className="mb-2 font-bold text-lg">Target Audience</h2>
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
                <h2 className="mb-2 font-bold text-lg">Design Approach</h2>
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
