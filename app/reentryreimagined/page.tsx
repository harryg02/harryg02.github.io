import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/ProjectHero";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Reentry Reimagined",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryReimagined() {
  return (
    <div className="relative bg-[#fff]">


      <main id="main-content">
        <h1 className="sr-only">Reentry Reimagined Website Redesign - Project Case Study</h1>

        <ProjectHero
          sectionClassName="text-[#775022] bg-[#FFF8F1]"
          imageSrc="/images/ReentryReimagined/mockup-large.png"
          imageMobileSrc="/images/ReentryReimagined/mockup-mobile.png"
          imageAlt="Earth-toned website redesign displayed on laptop and mobile screens."
          imageContainerClassName="bg-[#EDE7E7] mt-5 mb-[-40px]"
          titleAs="h2"
          titleClassName="text-left inline-flex font-bold text-2xl"
          title="Reentry Reimagined Website Redesign"
          summary="Result: The redesign led to a 40% increase in website traffic and active recurring monthly donations."
          links={[
            { href: "https://reentryreimagined.org", icon: "/icons/globe.png", label: "Visit Website", buttonClassName: "bg-[#775022] hover:bg-[#9e703a]" },
          ]}
          meta={[
            { label: "Technology", value: "Wix, Figma, Inkscape, Krita" },
            { label: "Service", value: "Web Design, Branding, Digital Photography, Digital Illustration, SEO" },
          ]}
          description={<p className="text-left inline-flex md:text-sm">Reentry Reimagined is nonprofit organization dedicated to supporting individuals transitioning back into society after incarceration. The redesign focused on enhancing branding, aesthetics, and SEO while maintaining brand consistency.</p>}
        />

        {/* P2 */}
        <section className="bg-white text-[#775022]  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2 ">
            {/* text block */}
            <div className=" col-span-1  md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">Project Overview</h2>
              </div>

              <p className="inline-flex md:text-sm py-2 mb-10">
                Reentry Reimagined is a Grand Rapids-based non-profit organization dedicated to supporting individuals
                transitioning back into society after incarceration. Their mission focuses on providing resources to
                formerly incarcerated individuals, breaking down reentry barriers, and fostering personal growth and
                community reintegration.
                <br />
                <br />
                The organization&apos;s existing website was rudimentary, lacking in aesthetics and difficult to
                maintain due to its custom-coded structure. It lacked effective communication of their mission, lacked
                donation capabilities, and posed challenges for non-technical staff to update.
              </p>

              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-bold text-2xl text-left">Objectives:</h2>
              </div>

              <p className="inline-flex md:text-sm py-2 mb-5">As the designer, my role encompassed:</p>

              <ol className="list-decimal pl-3 md:text-sm">
                <li className="pb-1">
                  Redesigning the website on a user-friendly platform for easy maintenance by non-technical staff
                </li>
                <li className="pb-1">Transferring the domain name to the new platform</li>
                <li className="pb-1">Implementing a donation system to facilitate financial support</li>
                <li className="pb-1">Enhancing the site&apos;s SEO to improve visibility and reach</li>
                <li className="pb-1">
                  Enhancing design aesthetics and branding that effectively communicates the organization&apos;s
                  mission and services
                </li>
              </ol>
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] lg:min-h-[800px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/old-website.png"
                alt="reference"
              />
              <p className="md:text-sm p-4">The Website Before Redesign</p>
            </div>
          </div>
        </section>

        {/* P3 */}
        <section className="bg-[#775022] text-white  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" justify-center items-center max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2 ">
            {/* Image */}
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition py-5 h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/eg1.png"
                alt="Reference interface featuring bold activism imagery and clear typography."
              />
              <p className="md:text-sm p-4">Liberty in North Korea Site (Credit: Liberty in North Korea)</p>
            </div>
            {/* text block */}
            <div className=" col-span-1 md:row-span-3 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">
                  Research and Discovery
                </h2>
              </div>

              <h3 className="font-black inline-flex py-2 mb-1">
                Target Audience
                <br />
              </h3>
              <p className="inline-flex md:text-sm py-2 mb-1">
                The target audience spans a wide age range and diverse backgrounds, including:
              </p>
              <ul className="list-disc pl-3 md:text-sm">
                <li className="pb-1">Community partners and stakeholders</li>
                <li className="pb-1">Potential donors and volunteers</li>
                <li className="pb-1">Formerly incarcerated individuals seeking support</li>
                <li className="pb-1">Family members of those transitioning back to society</li>
                <li className="pb-1">General public interested in social justice issues</li>
              </ul>
              <p className="inline-flex md:text-sm py-2 mb-2">
                This diverse audience required a design that was accessible, easy to navigate, and appealed to various
                age groups and technical proficiencies.
                <br />
                <br />
              </p>

              <h3 className="font-black inline-flex py-2 mb-1">
                Competitive analysis of similar non-profit websites:
              </h3>
              <p className="inline-flex md:text-sm py-2 mb-1">
                I examined websites of established non-profits, for example American Heart Association, Malala Fund,
                and Liberty in North Korea&apos;s site. Key observations included:
              </p>
              <ul className="list-disc pl-3 md:text-sm">
                <li className="pb-1">Clear, mission-focused homepage messaging</li>
                <li className="pb-1">Use of impactful imagery and personal stories</li>
                <li className="pb-1">
                  Prominent call-to-action buttons for donations and volunteer sign-ups
                  <br />
                  <br />
                </li>
              </ul>

              <h3 className="font-black inline-flex py-2 mb-1">Key insights that informed design decisions:</h3>

              <ul className="list-disc pl-3 md:text-sm">
                <li className="pb-1">
                  Clean, modern design: Following the trend of successful non-profit websites, I opted for a clean,
                  uncluttered layout to enhance readability and focus.
                </li>
                <li className="pb-1">
                  Warm color palette with contrasting elements: I chose warm, inviting colors to convey hope and
                  positivity, while strategically using dark grey to subtly represent the challenges faced by clients.
                  This balance visually communicates both the difficulties and the potential for positive change.
                </li>
                <li className="pb-1">
                  Prominent mission statement: Placing the organization&apos;s mission front and center helps
                  immediately communicate purpose to visitors.
                </li>
                <li className="pb-1">
                  Storytelling elements: Incorporating client testimonials to illustrate the organization&apos;s impact
                  and inspire hope.
                </li>
                <li className="pb-1">
                  Impactful imagery: Incorporating authentic photos and graphics to humanize the cause and create
                  emotional connections.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition py-5 h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/eg2.png"
                alt="Reference interface utilizing diverse photography and red accent colors."
              />
              <p className="md:text-sm p-4">American Heart Association Site (Credit: American Heart Association)</p>
            </div>

            {/* Image */}
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition py-5 h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/eg3.webp"
                alt="Reference interface using bright yellow branding and storytelling elements."
              />
              <p className="md:text-sm p-4">Malala Fund Site (Credit: Malala Fund)</p>
            </div>
          </div>
        </section>

        {/* P4 */}
        <section className="bg-[#FFF8F1] text-[#775022] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-20 grid grid-col-1 lg:grid-cols-2 ">
            {/* text block */}
            <div className=" col-span-1 row-span-3 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left md:text-sm px-8">
              <h2 className="inline-flex font-bold text-2xl text-left py-3">Design Process</h2>

              <ol className="list-decimal pl-3">
                <li className="pb-1">
                  Initial Client Consultation
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-1 relative before:content-['◦'] before:absolute before:left-0">
                      Gathered requirements and understood Reentry Reimagined&apos;s goals
                    </li>
                    <li className="md:text-sm pl-3 py-1 relative before:content-['◦'] before:absolute before:left-0">
                      Gathered content required on the website, based on the old website and the client&apos;s
                      suggestions.
                    </li>
                    <li className="md:text-sm pl-3 py-1 relative before:content-['◦'] before:absolute before:left-0">
                      Discussed target audience and desired functionality
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Platform and Technology
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Figma for website design, on of the best software for UI and Web Design.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Inkscape for custom illustrations, a decent free software as alternative for Adobe Illustrator.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Chose Unplash and Pexels for good quality, free stock photos.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Chose Wix as the website platform for ease of maintenance for non technical people, it also has
                      discount for non-profit organizations as well.
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Brand Identity Development
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Typography: Red Hat Display font family with specified sizes and weights
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Color Palette: Primary (brown tones), Secondary (black and white), and Tertiary colors
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Content Strategy
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Collaborated with the client to outline key messages and content hierarchy
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Identified essential pages: Home, About Us, Services, Resources, Contact
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Testimonials from actual clients to showcase real impact and build trust
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Visual Design
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Created mood boards to align visual direction with brand guidelines
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Designed key page layouts (Homepage, About, Resources) using Figma
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Applied the established color palette to convey warmth and professionalism
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Incorporated imagery and graphics that represent hope and transformation
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Checked for accessibility compliance using online WCAG contrast checker tools.
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Responsive Design
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Adapted layouts for mobile, tablet, and desktop views
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Client Feedback and Iteration
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Presented designs to the client for feedback
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Made revisions based on client input. The client generally satisfied with the design, we only
                      changed some texts for more updated information.
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Implementation
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Implemented Figma design on Wix
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Integrated Stripe for secure and efficient donation processing
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Optimized the site for search engines (SEO) through Wix SEO portal
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Ensured mobile responsiveness and cross-browser compatibility and tested on both Chrome Developer
                      Tools and real hardware
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Set up DNS records to direct the domain name (reentryreimagined.org) to the appropriate server.
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>

                <li className="pb-1">
                  Testing and Quality Assurance
                  <ul className="list-none pt-1">
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Conducted thorough testing across devices and browsers with Chrome, Firefox and Safari, and
                      various window size using browser&apos;s dev tools (F12 Menu).
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Offered initial support and monitored site performance through Wix Dashboard
                      <br />
                      <br />
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/prototype2.png"
                alt="A more polished prototype"
              />
              <p className="md:text-sm p-4">One of the later prototypes</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/brandGuideLines.svg"
                alt="Red Hat Display font specimen displayed alongside an earth-tone color palette."
              />
              <p className="md:text-sm p-4">Brand Guidelines</p>
            </div>
          </div>
        </section>

        {/* P5 */}
        <section className="bg-white text-[#775022]  drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-4 ">
            {/* text block */}
            <div className="md:row-span-2 col-span-4 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-10">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className=" inline-flex font-bold text-2xl text-left">Results and Impact</h2>
              </div>

              <ol className="list-disc pl-3 md:text-sm">
                <li className="pb-1">The redesign resulted in 40% increase in website traffic</li>
                <li className="pb-1">Increased usability and aesthetics</li>
                <li className="pb-1">Received active recurring monthly donations from Stripe</li>
              </ol>
            </div>

            <div className="flex flex-col justify-center items-center col-span-4 lg:col-span-2 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/old-website.png"
                alt="Visual comparison: The dark, outdated previous design versus the bright, modern redesign."
              />
              <p className="md:text-sm p-4">The Website Before Redesign</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 lg:col-span-2 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/new-website.png"
                alt="The bright, modern redesign."
              />
              <p className="md:text-sm p-4">The Website After Redesign</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/d1.png"
                alt="Full-page mockup showing the homepage scroll flow, from hero section to footer."
              />
              <p className="md:text-sm p-4">Home Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/d2.png"
                alt="Desktop screenshot of the Reentry Reimagined Resources page."
              />
              <p className="md:text-sm p-4">Resources Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/d3.png"
                alt="Desktop screenshot of the Reentry Reimagined About page."
              />
              <p className="md:text-sm p-4">About Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 row-span-2 mx-3 my-5 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/d4.png"
                alt="Desktop screenshot of the Reentry Reimagined Contact page."
              />
              <p className="md:text-sm p-4">Contact Page - Desktop</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 md:col-span-1 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/m1.png"
                alt="Mobile screenshot of the Reentry Reimagined Homepage."
              />
              <p className="md:text-sm p-4">Home Page - Mobile</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 md:col-span-1 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/m2.png"
                alt="Mobile screenshot of the Reentry Reimagined Resources page."
              />
              <p className="md:text-sm p-4">Resource Page - Mobile</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 md:col-span-1 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/m3.png"
                alt="Mobile screenshot of the Reentry Reimagined About page."
              />
              <p className="md:text-sm p-4">About Page - Mobile</p>
            </div>
            <div className="flex flex-col justify-center items-center col-span-4 md:col-span-1 row-span-2 mx-3 my-3 transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                src="/images/ReentryReimagined/screenshots/m4.png"
                alt="Mobile screenshot of the Reentry Reimagined Contact page."
              />
              <p className="md:text-sm p-4">Contact Page - Mobile</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
