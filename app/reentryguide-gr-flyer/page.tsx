import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - ReentryGuide GR",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryGuideGRFlyer() {
  return (
    <div className="relative font-[manrope] font-semibold bg-[#fff]">
      {/* Nav Bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="relative container p-7 text-black md:text-sm font-bold ">
          {/* Flex container */}
          <div className="flex">
            <div className="">
              <a
                href="/"
                className="py-3 px-12 pl-5 rounded-[15px] bg-[#FDDEBA] font-semibold text-[#191919] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] text-base hover:text-themeRed fill-[#141414] hover:fill-themeRed"
              >
                <svg
                  className="inline h-3 mb-[3px] mr-3"
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

      {/* p1 */}
      <main>
        <div className="bg-[#FDDEBA] px-6 md:px-24 py-10 md:py-0 justify-center grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className=" col-span-2 lg:col-span-1 lg:mx-[2em] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-12 max-w-xl">
            {/* title */}
            <div className="flex flex-row ">
              <h1 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-xl text-left">
                &quot;ReentryGuide GR&quot; Print Marketing Materials
              </h1>
            </div>
            <a className="flex flex-initial space-x-2 mt-3" href="/reentryguide-gr">
              <u>What is &quot;ReentryGuide GR?&quot;</u>
            </a>

            <div className="flex flex-col w-full py-3">
              <p className="inline-flex md:text-sm py-3">
                This design serves both as a flyer and poster. It was displayed at the Michigan Department of
                Corrections Parole Office in Grand Rapids and distributed by multiple local pastors.
              </p>
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; Texts</b>
                <p className="md:text-sm pl-3">
                  The use of large orange/red text on a white background ensures the message is clear and easily
                  noticeable.
                </p>
              </div>
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; Message</b>
                <p className="md:text-sm pl-3">
                  The content is simple and straightforward, including a direct call to action.
                </p>
              </div>
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; QR code</b>
                <p className="md:text-sm pl-3">The QR code directs users to the app&apos;s Google Play page.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center col-span-2 row-span-2 transition sm:min-h-[150px] lg:my-14 h-fit">
            <img
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] rounded-md max-h-[630px] px-5"
              src="/images/ReentryGuide-GR/flyer.png"
              alt="High-contrast flyer design featuring bold orange typography listing resources like Food and Hygiene alongside a QR code."
            />
          </div>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 text-white bg-[#141414]">
          {/* text block */}
          <div className="md:col-span-3 bg-[#EDE7E7] transition sm:min-h-[150px] h-fit">
            <img
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] max-h-[600px] w-full object-cover"
              src="/images/ReentryGuide-GR/flyer-mockup.png"
              alt="Top-down view of printed flyers arranged on a dark wooden texture, framed by decorative green palm leaves."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
