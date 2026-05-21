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


      <main id="main-content">
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
