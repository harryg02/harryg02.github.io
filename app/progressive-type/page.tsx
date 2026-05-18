import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Progressive Type",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ProgressiveType() {
  return (
    <div className="font-display bg-veryLightGray">
      {/* Nav Bar */}
      <header className="bg-veryLightGray">
        <nav className="relative container p-7 text-darkGray md:text-sm font-bold">
          {/* Flex container */}
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="">
              <a
                href="/"
                className="pt-2 text-base hover:text-themeRed fill-darkGray hover:fill-themeRed"
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
                GO BACK
              </a>
              <a href="/" className="text-base">
                <img className="inline h-7 ml-5" src="/icons/logo-01-18-black.svg" alt="Harry Gu Logo" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* Main content */}
        <section id="gdthumbnails">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col justify-center items-center transition bg-grey-500 shadow-xl min-h[30px] text-center py-32 md:py-24">
              <p className="inline-flex font-bold md:text-xl">PROGRESSIVE TYPE</p>
              <p className="inline-flex md:text-sm mx-12">
                This project is for rearranging texts from &quot;first things first manifesto 2000&quot; and fit them
                into a square, from &quot;formal&quot;, to &quot;deconstructed&quot;, with only black and white color
                and no illustration.
              </p>
            </div>
            <div className="bg-blue-200 transition sm:min-h-[150px] h-fit">
              <img src="/images/progressive_type1.png" alt="" />
            </div>
            <div className="bg-slate-600 transition sm:min-h-[150px] h-fit">
              <img src="/images/progressive_type.png" alt="" />
            </div>
            <div className="bg-red-200 transition sm:min-h-[150px] h-fit">
              <img src="/images/progressive_type1.5.png" alt="" />
            </div>
            <div className="bg-pink-200 transition sm:min-h-[150px] h-fit">
              <img src="/images/progressive_type2.png" alt="" />
            </div>
            <div className="bg-cyan-200 transition sm:min-h-[150px] h-fit">
              <img src="/images/progressive_type0.png" alt="" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
