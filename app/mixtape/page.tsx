import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - MixTape",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function Mixtape() {
  return (
    <div className="relative bg-[#D0AF40]">
      <style>{`body { background-color: #D0AF40; }`}</style>


      {/* Main content */}
      <main id="main-content">
        {/* Intro */}
        <div className="lg:pb-1 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
          {/* text block */}
          <div className="lg:order-last md:col-span-2 lg:col-span-1 px-16 py-32 lg:py-10 flex flex-col justify-center items-start transition bg-grey-500 min-h[30px] text-center ">
            <h1 className="text-left inline-flex flex-col">
              <span className="text-black font-black text-2xl pt-5 ">MIXTAPE</span>
              <span className="text-black font-black text-2xl">PACKAGING</span>
              <span className="text-black font-black text-2xl">DESIGN</span>
            </h1>

            <p className="text-left inline-flex text-base mt-5">
              &quot;Miscere&quot; is an album packaging design project exploring the integration of graphic design and
              music dring 2023 spring semester.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#EDE7E7] transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/0-albumfinalprint_Page_1.png"
              alt="Album cover art featuring a silhouette figure standing against a gold circle with the title 'MISCERE'."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* P1 */}
        <div className="lg:pb-1 grid grid-cols-1 md:grid-cols-2 px-10 py-20">
          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/0-albumfinalprint_Page_1.png"
              alt="Digital design of the album front cover with a central silhouette and gold circular motif."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">FRONT</p>
          </div>

          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/0-albumfinalprint_Page_3.png"
              alt="Digital design of the album back cover listing the tracklist for Side A and Side B."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">BACK</p>
          </div>
        </div>

        {/* P2 */}
        <div className="lg:pb-1 grid grid-cols-1 md:grid-cols-2 px-10 py-20 bg-[#FBFBE3]">
          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/0-albumfinalprint_Page_2.png"
              alt="Illustration of a hiking backpack containing a blue mountain landscape."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">INTERIOR - LEFT</p>
          </div>

          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/0-albumfinalprint_Page_4.png"
              alt="Stylized typography design of the album title 'MISCERE' featuring a geometric logo symbol."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">INTERIOR - RIGHT</p>
          </div>
        </div>

        {/* P3 */}
        <div className="lg:pb-1 grid grid-cols-1 md:grid-cols-2 px-10 py-20 bg-[#FBFBE3]">
          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/insert1.png"
              alt="Album insert art featuring a dark castle silhouette against a teal background."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">INSERT 1</p>
          </div>

          <div className="flex flex-col justify-center items-center  p-10 col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]"
              src="/images/mixtape/insert2.png"
              alt="Album insert art featuring a city skyline silhouette against a light blue background."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
            <p className="text-black m-3 text-xl font-black">INSERT 2</p>
          </div>
        </div>

        {/* Application */}
        <div className="py-10 items-center grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className=" col-span-1 sm:col-span-2 lg:col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-12">
            {/* title */}
            <div className=" flex flex-row p-4">
              <h2 className="flex flex-row items-center">
                <span className="flex flex-col">
                  <span className="text-gray-900 text-right font-black text-xl">
                    APPLICATION
                    <br />
                  </span>
                  <span className="text-black text-right font-black text-xl">IMPLEMENTATION</span>
                </span>
                <span className="text-[#a18843] text-6xl font-black pl-2">&amp;</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="rounded-2xl"
              src="/images/mixtape/photo6.jpg"
              alt="Physical mockup of the vinyl record, open gatefold sleeve, and cassette tape arranged on a wooden surface."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 md:col-span-1 row-span-2  transition sm:min-h-[150px] h-fit">
            <Image
              className="rounded-2xl"
              src="/images/mixtape/photo5.jpg"
              alt="Close-up of the 'Miscere' cassette tape packaging."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="rounded-2xl"
              src="/images/mixtape/photo1.jpg"
              alt="Physical printed vinyl sleeve with the record peeking out."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="flex flex-col justify-center items-center p-9 col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
            <Image
              className="rounded-2xl"
              src="/images/mixtape/photo2.jpg"
              alt="Interior view of the open gatefold vinyl sleeve displaying the backpack illustration and title typography."
            
            width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
