import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Crazy Charlies",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function CrazyCharlies() {
  return (
    <div className="font-display bg-veryLightGray">


      <main id="main-content">
        {/* Main content */}
        <section id="gdthumbnails">
          {/* Intro */}
          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="col-span-1 row-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazycharlies.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="md:col-span-2 lg:col-span-1 row-span-2 flex flex-col justify-center items-center transition bg-grey-500 shadow-xl min-h[30px] text-center py-32 md:py-24">
              <p className="inline-flex font-bold md:text-xl p-1">Crazy Charlies Brand Identity</p>
              <p className="inline-flex mx-12">
                Crazy Charlies is a hot dog Restaurant in East Grand Rapids. This was originally a class project, the
                Goal was to find a small business that potentially need brand identity. and design a logo, a copywriting,
                and three posters for this small business.
                <br />
                <br />
                Unfortunately it could not be implemented due to the lack of communication and the different design goal
                with the shop owner .{" "}
              </p>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/poster1final.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/poster3square.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="md:col-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/poster2square.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* Brainstorming & Mood Exploration */}
          <div className="md:py-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="col-span-1 row-span-3 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-6 ">
              {/* title */}
              <div className="flex flex-row p-4">
                <p className="text-gray-600 text-6xl font-bold pr-3">1</p>
                <p className="inline-flex font-bold md:text-xl text-left">
                  Logo
                  <br />
                  Brainstorming
                </p>
              </div>

              <p className="inline-flex  p-2">- Avoid Sans Serif, because it&apos;s not crazy enough.</p>
              <p className="inline-flex  p-2">
                - Because the main customers of this shop is highschool students, so considering Gen-Z-ish graffiti
                style.
              </p>
              <p className="inline-flex  p-2">
                - Vivid colors and playful icon so appealing to Gen-Z audience.
              </p>
              <p className="inline-flex  p-2"></p>
            </div>

            <div className="col-span-1 row-span-3 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/1.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/2.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/3.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* p2 */}
          <div className="grid grid-cols-2 md:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            {/* text block */}
            <div className="bg-red-500 col-span-2 md:col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
              {/* title */}
              <div className=" flex flex-row p-4">
                <p className="text-gray-100 text-6xl font-bold pr-3">2</p>
                <p className="text-gray-100 inline-flex font-bold md:text-xl text-left">
                  Logo
                  <br />
                  Implementation
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/white.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/black.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 md:col-span-1 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazycharlies2.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* 3 */}
          <div className="md:py-1 grid grid-cols-3 md:grid-cols-8  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            {/* text block */}
            <div className="bg-gray-900 col-span-3 md:col-span-4 lg:col-span-2 md:row-span-4 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
              {/* title */}
              <div className=" flex flex-row p-4">
                <p className="text-gray-100 text-6xl font-bold pr-3 pt-3">3</p>
                <p className="text-gray-100 mt-4 inline-flex font-bold text-xl text-left">
                  Poster Brainstorming
                  <br />
                  &amp;
                  <br />
                  Mood Exploration
                </p>
              </div>
            </div>

            <div className="col-span-2 row-span-4 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/third_party_img/cyberpunk.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/third_party_img/sword.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="lg:order-last col-span-1 row-span-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/third_party_img/urban.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-3 row-span-6 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/third_party_img/comics2.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* 4 */}
          <div className="md:py-1 grid grid-cols-4 md:grid-cols-8  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            {/* text block */}
            <div className="bg-yellow-400 col-span-4 md:col-span-4 lg:col-span-2 md:row-span-4 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
              {/* title */}
              <div className=" flex flex-row p-4">
                <p className="text-gray-900 text-6xl font-bold pr-3 pt-3">4</p>
                <p className="text-gray-900 mt-5 inline-flex font-bold  text-xl text-left">
                  Process
                  <br />
                </p>
              </div>
            </div>

            <div className="col-span-2 row-span-4 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process0.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process0.6.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process1.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 row-span-6 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/poster2final.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process3.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process4.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* 4.1 */}
          <div className="md:py-1 grid grid-cols-4 md:grid-cols-8  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="col-span-2 row-span-4 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process5.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 row-span-4 bg-yellow-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process6.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process7.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process8.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 row-span-6 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/poster3final.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process9.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process10.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* 4.1 */}
          <div className="md:py-1 grid grid-cols-4 md:grid-cols-8  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="col-span-2 row-span-4 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process11.jpg" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 row-span-4 bg-gray-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process12.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-gray-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process13.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process14.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-2 row-span-6 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/poster1final.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process15.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="col-span-1 row-span-1 m-1 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/process16.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* p5 */}
          <div className="grid grid-cols-2 md:grid-cols-3  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            {/* text block */}
            <div className="bg-gray-200 col-span-2 md:col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-8 py-12">
              {/* title */}
              <div className=" flex flex-row p-4">
                <p className="text-gray-900 text-6xl font-bold pr-3">5</p>
                <p className="text-gray-900 inline-flex font-bold md:text-xl mt-2 text-left">mockup</p>
              </div>
            </div>

            <div className="col-span-2 row-span-2 bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/crazy_charlies/mockup3.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
