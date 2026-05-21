import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - E-Community-Service",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ECommunityServiceLogo() {
  return (
    <div className="font-display bg-veryLightGray">


      {/* Main content */}
      <main id="main-content">
        {/* Intro */}
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className="lg:order-last md:col-span-2 lg:col-span-1  flex flex-col justify-center items-center transition bg-grey-500 shadow-xl min-h[30px] text-center py-32 md:py-24">
            <h1 className="inline-flex font-bold md:text-xl p-1">E-community-service logo</h1>
            <p className="inline-flex mx-12">
              e-community-service.org is a mobile oriented web platform for high school students to do community service
              online.{" "}
            </p>
          </div>

          <div className="md:col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service.png"
              alt="Final E-Community Service logo design featuring a gradient heart-handshake icon on a dark gray background."
            />
          </div>
        </div>

        {/* Brainstorming & Mood Exploration */}
        <div className="md:py-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="col-span-2 row-span-3 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
            {/* title */}
            <div className="flex flex-row p-4">
              <p className="text-gray-600 text-6xl font-bold pr-3">1</p>
              <h2 className="inline-flex font-bold md:text-xl text-left">
                Brainstorming &amp;
                <br />
                Mood Exploration
              </h2>
            </div>

            <p className="inline-flex  p-2">
              - A formal, modern sans serif font, because it&apos;s easy to read on screen and good for visually
              disabled people. All caps to avoid weird space between letters.
            </p>
            <p className="inline-flex  p-2">- A simple icon illustration that&apos;s good for small screens.</p>
            <p className="inline-flex  p-2">
              - Icon on the left and text on the right to make the logo wider, so it can be more easily put on a
              navigation bar.
            </p>
            <p className="inline-flex  p-2">
              - blue or/and green color for the logo, symbolizing growth and trust. It also accompanying with the
              current changing the present logo.{" "}
            </p>
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/img1.png" alt="Logo reference: ProPrio." />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/LiNK_Logo.png" alt="Logo reference: Liberty in North Korea." />
          </div>

          <div className="col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/heartassociation.png" alt="Logo reference: American Heart Association." />
          </div>

          <div className="col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/third_party_img/220421132621_LogoCett-Descriptiu-UB-H-color-positiu.png"
              alt="Logo reference: Barcelona School of Tourism and Gastronomy."
            />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/third_party_img/onedrop_share-1552502970-1669300092.png"
              alt="Logo reference: One Drop."
            />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/Human_appeal_logo18.png" alt="Logo reference: Human Appeal." />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/PoP.png" alt="Logo reference: Pencils of Promise." />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img src="/third_party_img/DAM_New_Logo.svg.png" alt="Logo reference: Denver Art Museum." />
          </div>

          <div className="col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/third_party_img/IMG_BANDEAUX_PAGE-LOGO_EN.jpg"
              alt="Logo reference: Handicap International."
            />
          </div>
        </div>

        {/* Mark & Type Exploration */}
        <div className="grid grid-cols-2 md:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className="bg-gray-800 col-span-2 lg:col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
            {/* title */}
            <div className=" flex flex-row p-4">
              <p className="text-gray-400 text-6xl font-bold pr-3">2</p>
              <h2 className="text-gray-100 inline-flex font-bold md:text-xl text-left">
                Mark &amp;
                <br />
                Type Exploration
              </h2>
            </div>
          </div>

          <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/progress1.png"
              alt="Typography iterations testing various font weights, alignments, and teal/red color accents."
            />
          </div>

          <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/progress2.png"
              alt="Typography iterations testing various font weights, alignments, and teal/red color accents."
            />
          </div>

          <div className="col-span-2 md:col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/progress3.png"
              alt="Vector sketches exploring combinations of heart, handshake, and mobile device motifs."
            />
          </div>

          {/* Mark & Type Exploration p2 for medium screen */}
          {/* text block */}
          <div className="hidden md:block lg:hidden font-['Raleway'] row-span-2 col-span-2 font-bold text-gray-900 bg-gray-200  flex flex-col items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-20 py-32">
            {/* title */}
            <div className=" flex flex-col">
              <div className=" ">Logo Wordmark</div>
              <p className="inline-flex text-3xl text-left">Raleway Bold</p>
            </div>
            <p className="inline-flex leading-tight">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="inline-flex leading-tight">abcdefghijklmnopqrstuvwxyz</p>
            <p className="inline-flex leading-tight">1234567890</p>
          </div>

          <div className="hidden md:block lg:hidden col-span-2 md:col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/logo-complete3.png"
              alt="Final logo layout displayed on a white background with black text."
            />
          </div>
        </div>

        {/* Mark & Type Exploration p2 for small and large screen */}
        <div className="grid md:hidden lg:grid grid-cols-1 md:grid-cols-3  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className="font-['Raleway'] font-bold text-gray-900 bg-gray-200  flex flex-col items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-20 py-16">
            {/* title */}
            <div className=" flex flex-col">
              <div className=" ">Logo Wordmark</div>
              <p className="inline-flex text-3xl text-left">Raleway Bold</p>
            </div>
            <p className="inline-flex leading-tight">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="inline-flex leading-tight">abcdefghijklmnopqrstuvwxyz</p>
            <p className="inline-flex leading-tight">1234567890</p>
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/logo-complete1.png"
              alt="Final logo layout displayed on a dark background with white text."
            />
          </div>

          <div className="col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/logo-complete2.png"
              alt="Final logo layout displayed on a white background with black text."
            />
          </div>
        </div>

        {/* Application */}
        <div className="md:py-1 grid grid-cols-2 md:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className="bg-gray-400 col-span-2 md:col-span-4 lg:col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
            {/* title */}
            <div className=" flex flex-row p-4">
              <p className="text-gray-700 text-6xl font-bold pr-3">3</p>
              <h2 className="text-gray-800 mt-4 inline-flex font-bold text-xl text-left">Application</h2>
            </div>
          </div>

          <div className="col-span-3 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/desktop-web-mockup.png"
              alt="Desktop website homepage mockup featuring the new logo and photography of holding hands."
            />
          </div>

          <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/phone-web-mockup.png"
              alt="Mobile website mockup showing responsive navigation and header design."
            />
          </div>

          <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/insta.png"
              alt="Instagram profile mockup showing the logo used as a profile picture."
            />
          </div>

          <div className="col-span-2 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
            <img
              src="/trademarks/e-community-service/facebook.png"
              alt="Facebook page mockup demonstrating the brand identity in a social media context."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
