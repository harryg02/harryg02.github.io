import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Adult Learning Systems - Lower Michigan Website",
  description: "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function AlsLm() {
  return (
    <div className="relative font-[manrope] font-semibold bg-[#fff]">
      <style>{`
        .font-RedHatDisplay {
          font-family: "Red Hat Display";
        }
      `}</style>

      <Navbar />

      <main>
        {/* p1 */}
        <section className="lg:pb-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white bg-[#141414]">
          {/* text block */}
          <div className="md:col-span-3 bg-[#e7eaed] transition sm:min-h-[150px] h-fit">
            <img className="hidden md:block drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]" src="/images/als-lm/cover.png"
              alt="Redesigned ALS-LM website showing the homepage with hero image of three smiling adults, impact statistics, and the Support Us page with donation options." />
            <img className="block md:hidden drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]" src="/images/als-lm/cover-mobile.png"
              alt="Redesigned ALS-LM website showing the homepage with hero image of three smiling adults, impact statistics, and the Support Us page with donation options." />
          </div>

          <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] pt-20 flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center">
            <h1 className="font-RedHatDisplay text-left inline-flex font-semibold text-2xl">Rescuing a Nonprofit&apos;s Donation Flow</h1>
            <p className="py-3 text-left inline-flex md:text-sm"><br /> 5/5 A/B testing participants preferred the redesigned
              donation flow for confidence. NPS improved from 1.25 &rarr; 7.0 average.</p>

            <a href="https://als-lm.org/"
              className="flex flex-row justify-between items-center rounded-2xl w-full px-5 py-4 mt-2 bg-[#333] hover:bg-[#222] shadow-md max-w-xs">
              <div className="flex items-center flex-1">
                <img src="/icons/globe.png" className="mr-0 w-8 h-8 object-contain" alt="" />
                <span className="ml-2.5 text-base text-white flex-shrink-1">Visit Original Site</span>
              </div>
              <img src="/icons/forward-white.png" className="mr-0 w-5 h-5 object-contain" alt="" />
            </a>

            <a href="https://www.figma.com/proto/bqmh0ZZ6qSnKzmLsNV2tIj/Adult-Learning-Systems?node-id=131-287&scaling=scale-down-width&content-scaling=fixed"
              className="flex flex-row justify-between items-center rounded-2xl w-full px-5 py-4 mt-2 bg-[#333] hover:bg-[#222] shadow-md max-w-xs">
              <div className="flex items-center flex-1">
                <img src="/icons/globe.png" className="mr-0 w-8 h-8 object-contain" alt="" />
                <span className="ml-2.5 text-base text-white flex-shrink-1">Visit Figma Prototype</span>
              </div>
              <img src="/icons/forward-white.png" className="mr-0 w-5 h-5 object-contain" alt="" />
            </a>

            <div className=""></div>
          </div>

          <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-xl">
            <h2 className="font-RedHatDisplay font-bold text-xl">Technology</h2>
            <p className="text-left inline-flex md:text-sm">Figma</p>
            <h2 className="font-RedHatDisplay font-bold text-xl mt-8">Scope</h2>
            <p className="text-left inline-flex md:text-sm">UX Research, Interaction Design, Usability Testing, A/B Testing</p>
          </div>

          <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] pb-20 flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-xl">
            <p className="text-left inline-flex md:text-sm">A semester-long UX redesign of Adult Learning Systems &mdash; Lower
              Michigan&apos;s donation flow, using the UX Research method to form, test, and revise design hypotheses.</p>
          </div>
        </section>

        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 flex justify-center">
            <div className="flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 sm:px-8 py-12 max-w-xl">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  The Problem
                </h2>
              </div>
              <p className="inline-flex md:text-sm py-2 mb-5">
                ALS-LM is a 501(c)(3) serving adults with disabilities in South East Michigan.
                Their donation page requires mailing physical cash, and no digital payment exists.
                The site&apos;s overall design lacks professional
                visual design, having long and information dense paragraphs, and may lack trust signals. These issue creates
                a trust and conversion barrier.
              </p>
            </div>
          </div>
        </section>

        {/* p2 */}
        <section className="bg-[#E4EFFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 lg:mx-[9vh] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 sm:px-8 py-12 max-w-xl">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  Diagnosis
                </h2>
              </div>
              <ul>
                <li>Persona: John, a middle-aged donor with disposable income, altruistic, interested in the cause</li>
                <li>Peak-End Rule applied: the ending (users seeing mail-only) is the worst moment, and per Peak-End, users
                  disproportionately remember the ending</li>
                <li>Psych scores table (compact): Steps 1&ndash;5 with scores (+10, +5, -15, -10, -20)</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center p-2 col-span-1 row-span-2 bg-[#E4EFFF] transition sm:min-h-[150px] h-fit">
              <img src="/images/als-lm/psych_graph.png"
                alt="Line graph of user emotional response across the donation flow: scores rise to +15 at step 3, then drop sharply to −30 at the final step when users discover mail-only donations." />
            </div>
          </div>
        </section>

        {/* p4 UI/UX Design Research */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 flex justify-center">
            <div className="flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 sm:px-8 py-12 max-w-xl">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  Hypothesis
                </h2>
              </div>
              <p className="inline-flex md:text-sm py-2 mb-5">
                I made six falsifiable hypothesis and predictions, each grounded in a named design principle.
              </p>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H1: A less dense paragraph with icons makes people more willing to read (Reduces Cognitive load)
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H2: Displaying impact metrics on the homepage increases persuasion (social proof from Cialdini)
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H3: Adding client testimony increases persuasion.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H4: Providing a digital donation flow increases task completion likelihood
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H5: Adding a staff group photo on the last page increases personal connection and increases return intent
                  (Peak-End Rule)
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  H6: Social media CTA post-donation increases follow behavior
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* p5 */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-3 py-10 text-center">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl">
                The Redesign
              </h2>
              <div className="flex flex-col justify-center items-center min-w-0 p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/1.png" className="w-full"
                  alt="Redesigned homepage section displaying impact statistics: 300+ disabled individuals achieved independent living, 25+ years of service, and 600+ free equipment distributed." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  Added Impact statistics (300+, 25+, 600+) on homepage &rarr; tests H2
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/2.png" className="w-full max-w-2xl"
                  alt="Client testimony section showing a smiling man in a wheelchair outdoors, with the quote: 'ALS-LM helped me to achieve independent living within 6 months.' — Tony Smith." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  Added client testimony with photo &rarr; tests H3
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/5.png" className="w-full"
                  alt="Digital donation form with frequency toggle for one-time or monthly giving, preset amount buttons from $10 to $200, a custom amount field, and a Donate button." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  Added digital donation form with preset amounts &rarr; tests H4
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/3.png" className="w-full"
                  alt="Redesigned Support Us page with three illustrated cards for Financial Support, Donate Equipment, and Volunteering, each with a brief description and call-to-action button." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  Re-arrange support Us layout with 3 illustrations &rarr; tests H1
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/4.png" className="w-full"
                  alt="Thank You page displayed after donation, featuring a group photo of staff members outside a lodge and social media links to Instagram and Facebook." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  Add a thank You page post donation with group photo and social media links &rarr; tests H5, H6&quot;
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                  <img className="w-full md:max-3xl rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                    src="/images/als-lm/8.png"
                    alt="Before: original ALS-LM website with a dense, single-block paragraph describing their CARF accreditation and 25-year history." />
                  <p className="py-3 md:text-sm">Before</p>
                </div>
                <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                  <img className="w-full md:max-3xl rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                    src="/images/als-lm/7.png"
                    alt="After: redesigned CARF accreditation section with shortened paragraph text for improved scannability." />
                  <p className="py-3 md:text-sm">After</p>
                </div>
              </div>
              <p className="py-3 md:text-sm">Reduced CARF paragraph text &rarr; tests H1</p>
            </div>
          </div>
        </section>

        <section className="bg-[#E4EFFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 flex justify-center">
            <div className="flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 sm:px-8 py-12 max-w-xl">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  A/B Testing
                </h2>
              </div>
              <p className="md:text-sm py-2 relative">
                Due to Time constraints, I could only recruit users from or close to academia. But I tried to list
                the criteria that are potentially most likely to donate.
              </p>

              <p className="md:text-sm py-2 relative">
                I recruited and tested 5 users, 3 of whom are younger adults in their early career phase, and 2 of
                them are mid to late adults. 2 of them are currently students who have had full-time job
                experience, 1 is currently full-time at a religious/non-profit industry, 1 researcher/professor at
                UM, and 1 software developer.
              </p>
              <h3>Test protocol summary</h3>
              <p className="md:text-sm py-2">
                Think-aloud, 3 tasks per version, post-test survey with
                NPS/WoMI/trust/confidence/engagement/conversion/retention
              </p>
            </div>
          </div>
        </section>

        {/* p6 */}
        <section className="bg-[#E4EFFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pt-10 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 lg:mx-[6vh] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 max-w-xl">
              <h3 className="text-gray-900 inline-flex font-extrabold text-xl font-RedHatDisplay text-md text-left">
                Key Findings
              </h3>
              <ul className="list-decimal pl-3 md:text-sm py-2">
                <li className="pb-1">H1: &#9888;&#65039; Falsified - 3/5 expressed opposite: they wanted MORE detail (contradicts assumption)</li>
                <li className="pb-5">H2: &#9989; Verified (3/5), with no opposites</li>
                <li className="pb-5">H3: &#9888;&#65039; Weak (1/5), with no opposites</li>
                <li className="pb-5">H4: &#9989; Strongest (4/5), with no opposites</li>
                <li className="pb-5">H5: &#10060; Unfalsifiable from data</li>
                <li className="pb-5">H6: &#9888;&#65039; Weak (1/5), the participant expressed that he cares about where his
                  money goes after donation, and he needs to follow their social media to find that
                  out.
                </li>
              </ul>
            </div>
            {/* text block */}
            <div className="col-span-1 lg:mx-[6vh] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-4 max-w-xl">
              <h3 className="text-gray-900 inline-flex font-extrabold text-xl font-RedHatDisplay text-md text-left">
                Key Discovery: The Information Density Paradox
              </h3>
              <p>
                The initial hypothesis assumed less text = more engagement. Testing revealed a tension:
                reduced text improved scannability but decreased trust. I originally assumed that with less text, people are
                more willing to read paragraphs, but
                with reduced text, people are less likely to trust the organization. 3 participants
                expressed that they want to see the detailed information because they want to
                see if the organization has real impacts or not.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#E4EFFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 flex justify-center">
            <div className="flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 sm:px-8 py-12 max-w-xl">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  Additional Findings
                </h2>
              </div>
              <h3 className="font-bold mt-2">Findings on what increases trustworthiness</h3>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  4 of 5 participants expressed that trustworthiness comes from knowledge and familiarity with the
                  organization, so that they are more willing to donate
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  1 participant expressed that adding a text that &quot;we won&apos;t sell your information&quot; or &quot;we won&apos;t spam your
                  email&quot; would increase trustworthiness.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  1 participant (SW Engineer) expressed that adding the payment platform name, such as who backs up the
                  payment process, increases trust and credibility.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  1 participant (a master&apos;s student) expressed that they like the tax-deductible label on the old website,
                  suggesting this may increase persuasion to donate.
                </li>
              </ul>
              <h3 className="font-bold mt-4">Findings on the unexpected constraints of this study</h3>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  The About page is not available when testing, because one participant expressed that they want to know
                  more about the organization, and wants to click on the About page to know more about them, so they feel
                  safer donating.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Some images are generic images from Pexels/Unsplash; one participant commented that these images look
                  fake.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  One A/B testing was conducted after a class; one participant may be tired and give more generic thoughts.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Figma does not allow input; therefore, it&apos;s hard to tell if the checkout form would decrease the
                  motivation of the users when they are filling out these forms.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-3 py-10 text-center">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl">
                Redesign Iteration
              </h2>
              <p className="py-3 md:text-sm">1. Added back dense paragraph text, but braking them into smaller paragraphs</p>

              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                  <img className="w-full md:max-3xl rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                    src="/images/als-lm/7.png"
                    alt="Before iteration: CARF accreditation section with a shortened paragraph that reduced trust." />
                  <p className="py-3 md:text-sm">Before</p>
                </div>
                <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                  <img className="w-full md:max-3xl rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                    src="/images/als-lm/9.png"
                    alt="After iteration: CARF section with detailed text broken into smaller, scannable paragraphs to balance readability and trust." />
                  <p className="py-3 md:text-sm">After</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  2. Added texts to explicitly address that we will keep your information private on checkout Page
                </p>
                <img src="/images/als-lm/10.png" className="w-full max-w-xl"
                  alt="Redesigned checkout page header showing 'Powered by PayPal' badge and a privacy assurance statement: 'We will keep your information private and not sell your information.'" />
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <p className="md:text-sm py-2 max-w-2xl m-auto">
                  3. Added About Us Page
                </p>
                <img src="/images/als-lm/final/7.png" className="w-full"
                  alt="New About Us page with organization history, photos of a residential home and staff with a client, descriptions of 24-hour specialized residential and community living services, and a Board of Directors section." />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-3 py-10 text-center">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl">
                Final Redesign
              </h2>
              <div className="flex flex-col justify-center items-center min-w-0 p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/final/1.png" className="w-full"
                  alt="Final redesigned homepage with hero section, impact statistics, a 'Learn More About Us' button, client testimony carousel, accreditation details, and a Support Us call to action." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">Home Page</p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/final/2.png" className="w-full"
                  alt="Final Support Us page with a hero photo of volunteers packing donations and three illustrated cards for Financial Support, Donate Equipment, and Volunteering." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">Support Us Page (Previously Donation Page)</p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/final/3.png" className="w-full"
                  alt="Final donation selection page with a photo of two men high-fiving, frequency toggle, preset donation amounts from $10 to $200, and a Donate button." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">Donation Selection page</p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/final/5.png" className="w-full"
                  alt="Final checkout page with PayPal badge, privacy assurance text, contact and payment form fields, donation summary showing a $10 one-time donation, and a Submit button." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">Payment Page</p>
              </div>

              <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img src="/images/als-lm/final/6.png" className="w-full"
                  alt="Final thank-you page with a group photo of staff in front of a lodge, a message confirming the donation, and social media links to Instagram and Facebook." />
                <p className="md:text-sm py-2 max-w-2xl m-auto">Thank You Page</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
