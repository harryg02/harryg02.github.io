import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Terminal Display",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function TerminalDisplay() {
  return (
    <div className="font-TerminalDisplay bg-[#2E3135]">
      <style>{`body { background-color: #2E3135; }`}</style>


      <main id="main-content">
        {/* Main content */}
        <section id="gdthumbnails">
          <div className="grid items-center md:p-10 md:gap-12 grid-cols-1 lg:grid-cols-3">
            <div className="md:relative m-5 lg:m-0 my-10 lg:ml-20 flex flex-col justify-center items-left transition bg-grey-500  min-h[30px] text-center py-32 md:py-24 lg:py-2">
              <p className="inline-flex font-bold text-[#C4CBD9] md:text-xl">TERMINAL DISPLAY 3500</p>
              <p className="inline-flex  font-bold text-[#C4CBD9] md:text-xl">TYPOGRAPHY / FONT</p>
              <p className="inline-flex my-5 text-md text-[#C4CBD9] text-left">
                this bitmap font is the first bitmap font I made for graphic design class during 2022 fall semester.
              </p>
              {/* download button */}
              <a
                href="https://github.com/harryg02/Terminal_Display_2000"
                className="p-1 pt-2 font-bold border-slate-300 bg-[#C4CBD9] text-[#2E3135] bg-brightRed rounded-full baseline hover:bg-brightRedLight block"
              >
                DOWNLOAD
              </a>
            </div>

            <div className="bg-blue-200 relative items-left lg:left-10 lg:col-span-2 lg:mr-20 transition sm:min-h-[150px] h-fit">
              <Image src="/images/font1.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="bg-slate-600 rounded transition sm:min-h-[150px] h-fit">
              <Image src="/images/font3.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="transition sm:min-h-[150px] h-fit">
              <Image src="/images/font5.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="transition sm:min-h-[150px] h-fit">
              <Image src="/images/font7.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="transition sm:min-h-[150px] h-fit">
              <Image src="/images/font6.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="transition sm:min-h-[150px] h-fit">
              <Image src="/images/font4.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
