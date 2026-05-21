import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/ProjectHero";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Exodus Place Website Redesign",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ExodusPlace() {
  return (
    <div className="relative bg-[#fff]">


      <main id="main-content">
        <ProjectHero
          sectionClassName="text-white bg-[#1A1A1A]"
          imageSrc="/images/ExodusPlace.org/mockup-large.webp"
          imageMobileSrc="/images/ExodusPlace.org/mockup-mobile.webp"
          imageAlt="Dark-themed homepage with aerial facility view."
          imageContainerClassName="mb-[-40px]"
          titleClassName="text-left inline-flex font-bold text-2xl text-[#72D976]"
          title="Exodus Place Website Redesign"
          summary="Result: Implemented the website in 2 weeks, handled a 173% traffic surge during an $835K fundraising campaign."
          links={[
            { href: "https://exodusplace.org", icon: "/icons/globe.png", label: "Visit Website", buttonClassName: "bg-[#2a2a2a] hover:bg-[#333]" },
          ]}
          metaHeadingClassName="font-bold text-xl text-[#72D976]"
          meta={[
            { label: "Technology", value: "Figma, Inkscape, Krita, GRCMC custom platform" },
            { label: "Service", value: "Web Design, User Experience, Branding, SEO" },
          ]}
          description={<p className="text-left inline-flex ">Exodus Place, a non-profit organization providing transitional housing for homeless people in Grand Rapids, Michigan, needed redesigning their website. The redesign is a collaboration with the Exodus Place marketing team and GRCMC, focused on enhancing aesthetics, usability, and branding.</p>}
        />

        {/* P2 */}
        <section className="bg-[#0B4F3A] text-white  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className=" col-span-1 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">Project Overview</h2>
              </div>

              <p className="inline-flex  py-2 mb-10">
                Exodus Place is a non-profit organization based in Grand Rapids, Michigan, dedicated to assisting men in
                their transition out of homelessness. Building on experience from designing the Reentry Reimagined
                website, we leveraged established non-profit design patterns while tailoring the solution to Exodus
                Place&apos;s specific needs.
                <br />
                <br />
                The organization&apos;s existing website was too simple, lacking in aesthetics, content structure, and
                might confuse the user.
              </p>

              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-bold text-2xl text-left">Objectives:</h2>
              </div>

              <p className="inline-flex  py-2 mb-5">As the designer, my role encompassed:</p>

              <ol className="list-decimal pl-3 ">
                <li className="pb-1">Redesigning the website on GRCMC&apos;s custom website hosting platform</li>
                <li className="pb-1">Assisting transferring the domain name to the new platform</li>
                <li className="pb-1 mb-10">
                  Enhancing design aesthetics and branding that effectively communicates the organization&apos;s mission
                  and services
                </li>
              </ol>

              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-bold text-2xl text-left">
                  Old Website Analysis
                </h2>
              </div>

              <p className="inline-flex  py-2 mb-5">
                Analysis of the original website revealed several key issues:
              </p>

              <ol className="list-decimal pl-3 ">
                <li className="pb-1">Basic, text-heavy design lacking visual hierarchy and engagement</li>
                <li className="pb-1">Disconnected content presentation</li>
                <li className="pb-1">Confusing grouping of navigation bar items</li>
              </ol>
            </div>

            <div className="flex flex-col justify-center gap-4 items-center col-span-1 row-span-2 transition sm:min-h-[150px] lg:min-h-[800px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/old-website.webp"
                alt="Dated layout with cluttered navigation."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/old-website-2.webp"
                alt="Dated layout with small text."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="">The Website Before Redesign</p>
            </div>
          </div>
        </section>

        {/* P3 */}
        <section className="bg-[#E6F2EB] text-black  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" justify-center items-center max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2 ">
            {/* Image */}
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition py-5 h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/eg1.webp"
                alt="Reference interface with bold hero photography."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Liberty in North Korea Site (Credit: Liberty in North Korea)</p>
            </div>
            {/* text block */}
            <div className=" col-span-1 md:row-span-3 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <p className=" inline-flex font-bold text-2xl text-left text-[#006826]">
                  Research and Discovery
                </p>
              </div>

              <h3 className="font-black inline-flex py-2 mb-1">
                Stakeholder Input
                <br />
              </h3>
              <ul className="list-disc pl-3 ">
                <li className="pb-1">Direct feedback from Exodus Place CEO and executive team</li>
                <li className="pb-1">
                  Indirect user feedback collected through staff interactions with:
                  <ul className="list-disc pl-5 mt-1">
                    <li className="pb-1">Donors and volunteers</li>
                    <li className="pb-1">Community partners accessing services</li>
                    <li className="pb-1">Resident members using the website</li>
                  </ul>
                </li>
              </ul>

              <h3 className="font-black inline-flex py-2 mb-1">Target Audience Analysis</h3>
              <p className=" py-2 mb-1">We identified key user groups:</p>
              <ul className="list-disc pl-3 ">
                <li className="pb-1">Potential donors and community supporters</li>
                <li className="pb-1">Men seeking housing and support services</li>
                <li className="pb-1">Partner organizations and service providers</li>
                <li className="pb-1">Community volunteers</li>
                <li className="pb-1">
                  General public interested in homeless advocacy
                  <br />
                  <br />
                </li>
              </ul>

              <h3 className="font-black inline-flex py-2 mb-1">Competitive Analysis</h3>
              <p className=" py-2 mb-1">
                Building on previous non-profit experience for{" "}
                <a href="/reentryreimagined" className="inline underline">
                  Reentry Reimagined Website
                </a>{" "}
                from non-profit sector informed key design patterns:
              </p>
              <ul className="list-disc pl-3 ">
                <li className="pb-1">Clear, mission-focused messaging</li>
                <li className="pb-1">Impactful imagery and testimonials</li>
                <li className="pb-1">Prominent calls-to-action</li>
                <li className="pb-1">Accessible navigation patterns</li>
                <li className="pb-1">Mobile-optimized layouts</li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition py-5 h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/eg2.webp"
                alt="Reference interface with diverse imagery."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">American Heart Association Site (Credit: American Heart Association)</p>
            </div>
          </div>
        </section>

        {/* P4 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className=" col-span-1 row-span-3 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left  px-8">
              <h2 className="inline-flex font-bold text-[#72D976] text-2xl text-left py-3">
                Design
              </h2>
            </div>

            <div className="flex flex-col justify-center items-center md:col-span-2 transition sm:min-h-[150px] h-fit mt-[-40px] mb-[-40px]">
              <Image
                className="hidden md:block"
                src="/images/ExodusPlace.org/mockup-large.webp"
                alt="Dark-themed homepage with aerial facility view."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="block md:hidden"
                src="/images/ExodusPlace.org/mockup-mobile.webp"
                alt="Dark-themed homepage with aerial facility view."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center">
              <h3 className="font-bold text-xl text-[#72D976] text-left py-2">
                Mission-Focused Homepage
              </h3>
              <p className="text-left">&bull; Clear &quot;hand up, not handout&quot; messaging</p>
              <p className="text-left">&bull; Direct paths to key actions (donate)</p>
              <p className="text-left">&bull; Mobile-optimized navigation</p>
            </div>

            <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center">
              <h3 className="font-bold text-xl text-[#72D976] text-left py-2">
                Visual Communication
              </h3>
              <p className="text-left">&bull; Clear typography hierarchy</p>
              <p className="text-left">&bull; Balanced white space</p>
              <p className="text-left">
                &bull; Video looping in the hero section background, enhancing engagement
              </p>
            </div>
          </div>
        </section>

        {/* P5 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1300px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/hero-event.webp"
                alt="Homepage variation: 'Roof Sit' banner."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">
                Hero Section if important events ongoing, providing easy access for users
              </p>
            </div>

            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/hero-normal.webp"
                alt="Homepage variation: standard video background."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Normal Hero Section</p>
            </div>
          </div>
        </section>

        {/* P6 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center md:col-span-2 transition sm:min-h-[150px] h-fit mt-[-40px] mb-[-40px]">
              <Image
                className="hidden md:block rounded-2xl"
                src="/images/ExodusPlace.org/service-section.webp"
                alt="Photos of building exterior, food preparation, and medical care."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="block md:hidden rounded-xl"
                src="/images/ExodusPlace.org/service-section-mobile.webp"
                alt="Photos of building exterior, food preparation, and medical care."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="p-2">Structured service categories</p>
            </div>
          </div>
        </section>

        {/* P7 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-4 gap-6">
            <div className="flex flex-col justify-center items-center md:col-span-3 transition sm:min-h-[150px] h-fit md:mt-[-40px] md:mb-[-40px]">
              <Image
                className="rounded-2xl"
                src="/images/ExodusPlace.org/grouping.webp"
                alt="Desktop dropdown menu."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="p-2 hidden md:block">Improved grouping for navigation bar items</p>
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 transition sm:min-h-[150px] h-fit md:mt-[-40px] md:mb-[-40px]">
              <Image
                className="rounded-2xl"
                src="/images/ExodusPlace.org/grouping-mobile.webp"
                alt="Mobile menu drawer."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="p-2 md:hidden">Improved grouping for navigation bar items</p>
            </div>
          </div>
        </section>

        {/* P8 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center md:col-span-2 transition sm:min-h-[150px] h-fit md:mt-[-40px] md:mb-[-40px]">
              <Image
                className="hidden md:block rounded-2xl"
                src="/images/ExodusPlace.org/accessibility.webp"
                alt="Toolbar with contrast, font size, and pause toggles."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="block md:hidden rounded-xl"
                src="/images/ExodusPlace.org/accessibility-mobile.webp"
                alt="Toolbar with contrast, font size, and pause toggles."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="p-2">
                Accessibility Options: Resize font, High contract, pause video autoplay (provided by GRCMC)
              </p>
            </div>
          </div>
        </section>

        {/* P9 */}
        <section className="bg-[#1A1A1A] text-white">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-4 gap-6">
            <div className="flex flex-col justify-center items-center md:col-span-3 transition sm:min-h-[150px] h-fit md:mt-[-40px] md:mb-[-40px]">
              <Image
                className="rounded-2xl"
                src="/images/ExodusPlace.org/housing.webp"
                alt="Mobile Housing UI: Text list."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 transition sm:min-h-[150px] h-fit md:mt-[-40px] md:mb-[-40px]">
              <Image
                className="rounded-2xl"
                src="/images/ExodusPlace.org/housing2.webp"
                alt="Mobile Housing UI: Large touch-friendly buttons."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className="p-2">Mobile Page is provided with additional buttons easier for users to click</p>
            </div>
          </div>
        </section>

        {/* P5 (Results) */}
        <section className="bg-white text-[#006826]  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-4 ">
            <div className="flex flex-col justify-center items-center col-span-4 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/Exodus-Place-Brand-Guidelines.webp"
                alt="Montserrat font weights and green color swatches."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Brand Guidelines</p>
            </div>

            {/* text block */}
            <div className="md:row-span-2 col-span-4 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-10">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">Results and Impact</h2>
              </div>

              <ol className="list-disc pl-3 ">
                <li className="pb-1">
                  Redesigned and implemented exodusplace.org in 2 weeks to support a 173% traffic surge during an $835K
                  fundraising campaign.
                </li>
              </ol>
            </div>

            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/home-event.webp"
                alt="Desktop view of the homepage highlighting the event announcement section."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Home Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/events.webp"
                alt="Desktop view of the Events page listing upcoming community activities."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Events Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ExodusPlace.org/service-meals.webp"
                alt="Exodus Place branded delivery van featuring a bright green and white vehicle wrap."
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Meals Page - Desktop</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
