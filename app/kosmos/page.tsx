import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/ProjectHero";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Harry Gu - Creative Designer & Developer | Portfolio - Kosmos Stargazing Resort Website Redesign & Development",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function Kosmos() {
  return (
    <div className="relative bg-[#fff]">


      <main id="main-content">
        <ProjectHero
          imageSrc="/images/kosmos_resort/thumb.webp"
          imageMobileSrc="/images/kosmos_resort/thumb-mobile.webp"
          imageAlt="Dark starry night sky background with 'Where The Stars Align With You' headline."
          title="Kosmos Resort Website Redesign & Development"
          summary="Reduced bounce rate by 10% and stabilized traffic 84% above the baseline after a WSJ feature, serving 6,800+ monthly visitors."
          links={[
            { href: "https://www.kosmosresort.com/", icon: "/icons/globe.png", label: "Visit Website", buttonClassName: "bg-[#3B2C3E] hover:bg-[#4b3a4f]" },
          ]}
          meta={[
            { label: "Technology", value: "Webflow, JavaScript, Figma, Mews API" },
            { label: "Service", value: "Web Design, UX Design, Web Development, Responsive Design, API Integration, SEO" },
          ]}
          description={<p className="text-left inline-flex ">A website redesign and development project for Kosmos Stargazing Resort &amp; Spa &mdash; an astrotourism resort in Alamosa, CO. Focused on enhancing the site and building a custom booking widget.</p>}
        />

        {/* P2 */}
        <section className="bg-[#EDE3DD] text-[#392A3D]  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2 ">
            {/* text block */}
            <div className=" col-span-1  md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">Project Overview</h2>
              </div>

              <p className="inline-flex  py-2 mb-6">
                Kosmos Stargazing Resort needed a complete digital transformation. Their existing website was visually
                dated and failed to reflect the premium, immersive nature of the brand.
                <br />
                <br />
                However, the challenge went beyond aesthetics. The critical requirement was a booking flow that
                prioritized villa selection over dates, which was a feature not natively supported by their property
                management system (Mews).
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <h3 className="font-bold text-lg text-[#392A3D]">The Challenge</h3>
                  <p className="">
                    Stakeholders required an urgent launch to capture early reservations. The existing
                    &quot;date-first&quot; flow forced users to guess availability&mdash;picking dates blindly only to
                    find their desired villa unavailable. We needed a solution that offered a seamless, villa-first
                    experience without 4 months-long custom build.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#392A3D]">The Pivot</h3>
                  <p className="">
                    Instead of building a complex custom booking engine from scratch, I proposed a pragmatic
                    alternative: a lightweight, custom calendar widget that deep-links directly into specific Mews
                    booking engine states. This would solve the UX problem while drastically reducing development time
                    and maintenance overhead.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#392A3D]">The Hurdle</h3>
                  <p className="">
                    As the sole developer on a contract, I had no senior engineering support and had never worked with
                    the Mews API. I had to independently navigate their documentation, experiment with endpoints, and
                    engineer a solution that was both robust and secure.
                  </p>
                </div>
              </div>


            </div>

            <div className="flex flex-col justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] lg:min-h-[800px] h-fit">
              <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto py-12">
                <div className="flex flex-row py-3">
                  <h2 className="inline-flex font-bold text-2xl text-left">Key Objectives</h2>
                </div>

                <ol className="list-decimal pl-3  space-y-2">
                  <li>
                    <strong>Strategic UX:</strong> Shift from date-first to villa-first booking flow to align with user
                    mental models.
                  </li>
                  <li>
                    <strong>Technical Solvency:</strong> Independently learn and integrate Mews API to enable
                    deep-linking.
                  </li>
                  <li>
                    <strong>Brand Storytelling:</strong> Redesign the aesthetic to reflect the high-end, immersive nature
                    of the resort.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Ensure WCAG AA contrast compliance for fonts and contrast.
                  </li>
                </ol>
              </div>
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="https://cdn.prod.website-files.com/64b952b6247a6084952d92ef/68537b2786c3788191e0ee87_Kosmos-VillaOne-Web-20-1-p-1600.jpg"
                alt="Geodesic white domes situated in a flat, grassy landscape with mountains in the distance."
              
              width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <p className=" p-4">Credit: Kosmos Stargazing Resort</p>
            </div>
          </div>
        </section>

        {/* P3 */}
        <section className="text-[#392A3D] bg-[#F9F4F1]">
          <div className=" max-w-[1300px] m-auto px-6 py-20 grid grid-col-1 gap-5">
            {/* text block */}
            <div className=" col-span-1 row-span-3 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left  px-8">
              <h2 className="inline-flex font-bold text-2xl text-left py-3">Design</h2>
            </div>

            {/* text block */}
            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/kosmos_resort/desktop.webp"
                alt="Website hero section featuring a galaxy background and a central 'Book Your Stay' call-to-action."
              
              width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <div className="col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-2xl">
                <h3 className="font-bold text-xl  text-left py-2">Homepage - Hero Section</h3>
                <ul className="list-disc pl-3 text-left">
                  <li className="pb-1">Tagline for marketing</li>
                  <li className="pb-1">
                    Big calls-to-action button with strong color contrast to draw users attention, because strong colors
                    would pop up in user&apos;s periphery vision, guiding the user to the booking process
                  </li>
                  <li className="pb-1">Enhancing the site&apos;s SEO to improve visibility and reach.</li>
                  <li className="pb-1">A galaxy video background to echo with the astrotourism theme</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/kosmos_resort/villa.webp"
                alt="Villa booking card displaying amenities, price ($700/night), and interior photos of a bedroom inside a dome structure."
              
              width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <Image
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] pt-10"
                src="/images/kosmos_resort/villa2.webp"
                alt="Villa booking card displaying a night-time rendering of a dome illuminated against a starry desert sky."
              
              width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              />
              <div className="col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-2xl">
                <h3 className="font-bold text-xl  text-left py-2">Homepage - Villa Section</h3>
                <ul className="list-disc pl-3 text-left">
                  <li className="pb-1">Key visual images and features to showcase the villa</li>
                  <li className="pb-1">
                    We chose two vertically stacked villa cards, instead of the tabbed layout, so guests can discover
                    both options by simply scrolling, no extra clicks required.
                  </li>
                  <li className="pb-1">
                    Lower interaction cost: Scrolling (native, continuous) beats clicking a tab (discrete,
                    interruptive), especially on mobile.
                  </li>
                  <li className="pb-1">
                    Behavior match: Modern users expect to scroll (e.g. tiktok, instagram), not hop between tabbed
                    views.
                  </li>
                  <li className="pb-1">
                    &quot;Learn more&quot; button if the user want to see more images and details
                  </li>
                  <li className="pb-1">
                    &quot;Book this villa&quot; button continues the booking process, opens the booking widget
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* P4 */}
        <section className="text-[#392A3D] bg-[#EDE3DD]">
          <div className=" max-w-[1300px] m-auto px-6 py-20 grid grid-col-1 gap-5">
            {/* text block */}
            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] w-full max-w-[500px]"
                  src="/images/kosmos_resort/widget.webp"
                  alt="Desktop view of the booking calendar interface."
                
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                />
                <Image
                  className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] w-full max-w-[500px]"
                  src="/images/kosmos_resort/widget2.webp"
                  alt="Mobile view of the booking calendar interface."
                
                width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-left max-w-2xl">
                <h3 className="font-bold text-2xl text-left py-2 mb-4">
                  Strategic Implementation: The Booking System
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-[#392A3D]">Self-Directed Learning</h4>
                    <p className="">
                      Here&apos;s a rewritten version: With no senior developer to guide me, I dove into the Mews API
                      documentation. I spent days testing endpoints by creating a copy of the Kosmos site on Webflow,
                      directly implementing the API calls in JavaScript and using Vercel logs to debug. This self-taught
                      knowledge was crucial in proving that a lightweight widget could replace a full custom build.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-[#392A3D]">The Solution</h4>
                    <p className="">I built a custom JavaScript calendar widget that:</p>
                    <ul className="list-disc pl-5  mt-2">
                      <li>Fetches real-time availability from Mews.</li>
                      <li>Auto-selects the first available date to reduce friction.</li>
                      <li>Generates a deep link that drops the user directly into the Mews booking engine.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-[#392A3D]">The Result</h4>
                    <p className="">
                      This approach saved 80% of development scope. We launched ahead of schedule, and the simplified
                      flow contributed to a smoother user journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P5: Reflection */}
        <section className="text-[#392A3D] bg-[#F9F4F1]">
          <div className="m-auto col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-left max-w-2xl">  

              <h2 className="font-bold text-2xl mb-8 text-left">Reflection</h2>
              <div className="text-left  space-y-6">
                <p>
                  <strong>Pragmatic Engineering:</strong> This project reinforced that the best engineering solution
                  isn&apos;t always the one with the most code. By leveraging the existing Mews ecosystem instead of
                  rebuilding it, I delivered value faster and with less risk.
                </p>
                <p>
                  <strong>Fearless Learning:</strong> Tackling the Mews API without prior experience taught me that I
                  can learn any technology if I break it down systematically. This confidence in self-directed learning
                  is something I bring to every new challenge.
                </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
