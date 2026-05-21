import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - ReentryGuide GR",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryGuideGRFlyer() {
  return (
    <div className="relative bg-[#fff]">


      {/* p1 */}
      <main id="main-content">
        <div className="bg-[#FDDEBA] px-6 md:px-24 py-10 md:py-0 justify-center grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className=" col-span-2 lg:col-span-1 lg:mx-[2em] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-12 max-w-xl">
            {/* title */}
            <div className="flex flex-row ">
              <h1 className="text-gray-900 inline-flex font-bold text-xl text-left">
                &quot;ReentryGuide GR&quot; Print Marketing Materials
              </h1>
            </div>
            <a className="flex flex-initial space-x-2 mt-3" href="/reentryguide-gr">
              <u>What is &quot;ReentryGuide GR?&quot;</u>
            </a>

            <div className="flex flex-col w-full py-3">
              <p className="inline-flex py-3">
                This design serves both as a flyer and poster. It was displayed at the Michigan Department of
                Corrections Parole Office in Grand Rapids and distributed by multiple local pastors.
              </p>
              <div className="flex flex-col py-2">
                <b className="">&bull; Texts</b>
                <p className="pl-3">
                  The use of large orange/red text on a white background ensures the message is clear and easily
                  noticeable.
                </p>
              </div>
              <div className="flex flex-col py-2">
                <b className="">&bull; Message</b>
                <p className="pl-3">
                  The content is simple and straightforward, including a direct call to action.
                </p>
              </div>
              <div className="flex flex-col py-2">
                <b className="">&bull; QR code</b>
                <p className="pl-3">The QR code directs users to the app&apos;s Google Play page.</p>
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
