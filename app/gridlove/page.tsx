import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harry Gu - Web Design, Front-End & UX Research | Portfolio - GridLove",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function GridLove() {
  return (
    <div className="font-display bg-veryLightGray">


      <main id="main-content">
        {/* Main content */}
        <section id="gdthumbnails">
          <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className=" flex flex-col justify-center items-center transition bg-grey-500 shadow-xl min-h[30px] text-center py-32 md:py-24">
              <p className="inline-flex font-bold md:text-xl">Grid Love</p>
              <p className="inline-flex mx-12">
                This is a school project I did during my 2022 fall semester. It is about using the knowledge of
                hierarchy, content navigation, and aesthetics in graphic design, organizing texts on a 7*7 inches square
                under various restrictions.{" "}
              </p>
            </div>

            <div className="bg-blue-200 transition sm:min-h-[150px] h-fit">
              <Image src="/images/GridLove.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="bg-transparent transition sm:min-h-[150px] h-fit">
              <Image src="/images/GridLove/cover-transparent.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>

        {/* p1 */}
        <div className="md:py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="col-span-2 md:row-span-3 md:col-span-1 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-6 py-20 md:py-10">
            {/* title */}
            <div className="flex flex-row p-4">
              <p className="text-gray-600 text-6xl font-bold pr-3">1</p>
              <p className="inline-flex font-bold md:text-xl text-left">
                Black &amp;
                <br />
                White &amp;
                <br />
                Horizontal
              </p>
            </div>

            <p className="inline-flex pl-7 pr-3">- Only Black and white is allowed, color is forbidden.</p>
            <p className="inline-flex pl-7 pr-3">- Text need be horizontal.</p>
          </div>

          <div className="md:order-2 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-10.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-3 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-12.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-13.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-4 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-07.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-6 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-09.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-7 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/B&W/gridlove - Remake-08.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* p2 */}
        <div className="md:py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="bg-[#F2F4B6] text-[#364232] col-span-2 md:row-span-3 md:col-span-1 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-6 py-20">
            {/* title */}
            <div className=" flex flex-row p-4">
              <p className=" text-6xl font-bold pr-3">2</p>
              <p className="inline-flex font-bold md:text-xl text-left">
                Colored &amp;
                <br />
                Vertical
              </p>
            </div>

            <p className="inline-flex pl-7 pr-3">- Color can be used</p>
            <p className="inline-flex pl-7 pr-3">- Must include vertical text</p>
          </div>

          <div className="md:order-2 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/cher.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-3 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/frozen.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/blackmirror.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-4 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/assassin.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-6 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/ps5.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="md:order-7 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Colored/cards.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* p3 */}
        <div className="md:py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="bg-[#35363e] text-[#e7ffdf] col-span-2 md:row-span-3 md:col-span-1 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-6 py-20">
            {/* title */}
            <div className=" flex flex-row p-4">
              <p className=" text-6xl font-bold pr-3">3</p>
              <p className="inline-flex font-bold md:text-xl text-left">
                Photo &amp;
                <br />
                Diagonal
              </p>
            </div>

            <p className="inline-flex pl-7 pr-3">- Photo must be used.</p>
            <p className="inline-flex pl-7 pr-3">- Text must be diagonal or tilted.</p>
          </div>

          <div className="col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Photo/weather.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Photo/matterhorn.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Photo/modernism.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/Photo/frozen2.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* p4 */}
        <div className="bg-[#d1ebff] md:py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" text-[#3c3743] col-span-2 md:row-span-3 md:col-span-1 flex flex-col justify-center items-left transition bg-grey-500 shadow-xl min-h[30px] text-left px-6 py-20">
            {/* title */}
            <div className=" flex flex-row p-4">
              <p className=" text-6xl font-bold pr-3">4</p>
              <p className="inline-flex font-bold md:text-xl text-left">
                Cover
                <br />
                Process
              </p>
            </div>

            <p className="inline-flex pl-7 pr-3">- Designing a cover for this project within 30 minutes.</p>
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/CoverProcess/cover-01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/CoverProcess/cover-02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/CoverProcess/cover-03.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/CoverProcess/cover-05.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove/CoverProcess/cover-06.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="m-5 col-span-1 row-span-1 bg-white transition sm:min-h-[150px] h-fit">
            <Image src="/images/GridLove.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
