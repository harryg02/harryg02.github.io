import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/ProjectHero";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - ReentryGuide GR",
  description:
    "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function ReentryGuideGR() {
  return (
    <div className="relative font-[manrope] font-semibold bg-[#fff]">


      <main id="main-content">
        <ProjectHero
          imageSrc="/images/ReentryGuide-GR/mockup.png"
          imageMobileSrc="/images/ReentryGuide-GR/mockup-mobile.png"
          imageAlt="Three mobile screens showing the App Homepage, Main Menu, and Location Details."
          imageContainerClassName="bg-[#EDE7E7]"
          title="ReentryGuide GR"
          summary="Fixed 2 critical navigation blockers, the app deployed to community pilot group, the app's posters displayed at Michigan Department of Corrections (MDOC) parole office in Grand Rapids."
          links={[
            { href: "https://reentryguidegr.org", icon: "/icons/globe.png", label: "Visit Website" },
            { href: "https://github.com/ReentryGuide-GR", icon: "/icons/github-white.svg", label: "Visit Github" },
          ]}
          meta={[
            { label: "Technology", value: "React Native, Docusaurus, Figma, Inkscape, Krita" },
            { label: "Service", value: "Software Development, UX Design, User Research, Usability Testing, Deployment, Web Design, Graphic Design, Logo Design, Digital Illustration" },
          ]}
          description={<p className="text-left inline-flex md:text-sm">&quot;ReentryGuide GR&quot; is a mobile application developed in collaboration with Reentry Reimagined, designed specifically to support the reintegration of former prisoners into society within the Grand Rapids area.</p>}
        />

        {/* Community Embeddedness */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 flex justify-center">
            <div className="flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 py-12 max-w-md">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  Designing With, Not For
                </h2>
              </div>
              <p className="inline-flex md:text-sm py-2 mb-5">
                To design with formerly incarcerated individuals, I didn&apos;t start with wireframes&mdash;I started
                by showing up. For 3 months, I voluntarily attended weekly meetings with C.L.E.A.R., a community group
                of 20+ formerly incarcerated people in Grand Rapids. I listened to their stories, learned that many had
                never owned a smartphone before and during prison, and discovered that some had cognitive disabilities
                that made complex navigation overwhelming. By the time I opened Figma, I wasn&apos;t designing for an
                abstract &quot;user with low digital literacy.&quot; I was designing for people I knew by name.
              </p>
            </div>
          </div>
        </section>

        {/* p2 */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-10 grid grid-col-1 lg:grid-cols-2 ">
            {/* text block */}
            <div className="col-span-1 max-w-md md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  The Challenge
                </h2>
              </div>

              <p className="inline-flex md:text-sm py-2 mb-10">
                A local non-profit organization &quot;Reentry Reimagined&quot; needed a mobile app to help formerly
                incarcerated people navigate to locations that provide crucial resources for their survival, such as
                food, clothing, hygiene, and healthcare.
              </p>

              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  User Research
                </h2>
              </div>

              <p className="inline-flex md:text-sm py-2 mb-5">
                Our user research focused on understanding the unique needs and challenges of our target audience:
                formerly incarcerated individuals seeking crucial resources.
              </p>

              <h3>Key Findings</h3>

              <div className="flex flex-col py-2">
                <h4 className="md:text-sm">&bull; Demographics</h4>
                <p className="md:text-sm pl-3">
                  Our users come from diverse backgrounds and varies in age, but share the experience of reintegrating
                  into society after incarceration.
                </p>
              </div>

              <div className="flex flex-col py-2">
                <h4 className="md:text-sm">&bull; Environment</h4>
                <p className="md:text-sm pl-3">
                  Many of our users navigate high-stress environments daily, dealing with uncertainties in housing,
                  employment, and social reintegration.
                </p>
              </div>

              <div className="flex flex-col py-2">
                <h4 className="md:text-sm">&bull; Technology Experience</h4>
                <p className="md:text-sm pl-3">
                  A significant portion of our user base has limited experience with modern smartphones and apps.
                </p>
              </div>

              <div className="flex flex-col py-2">
                <h4 className="md:text-sm">&bull; Cognitive Abilities</h4>
                <p className="md:text-sm pl-3">
                  Some users have various cognitive disabilities, requiring special consideration in our design
                  approach.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 col-span-1 row-span-2 bg-[#FDDEBA] transition sm:min-h-[150px] h-fit">
              <img
                src="/images/ReentryGuide-GR/infographic.png"
                alt="Bar charts comparing prison disability rates vs general population and post-release jobless trends."
              />
            </div>
          </div>
        </section>

        {/* Inclusive Design Approach */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 grid grid-col-1">
            <div className="col-span-1 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] px-5 py-12 max-w-3xl">
              <div className="flex flex-row py-3">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  Inclusive Design Approach
                </h2>
              </div>
              <p className="inline-flex md:text-sm py-2 mb-5">
                Our users included people with cognitive disabilities, limited smartphone experience, and motor
                difficulties. Every design decision prioritized their needs:
              </p>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Reduced Cognitive Load</strong>: Limited options per screen to minimize overwhelm
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Motor Accessibility</strong>: Large buttons spanning full screen width, placed in thumb zones
                  for one-handed use
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Visual Clarity</strong>: High contrast (WCAG AAA color compliance), large text (17px
                  minimum), clear visual hierarchy
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Familiar Patterns</strong>: Hybrid of iOS and Fluent Design for users who might recognize
                  settings-menu patterns
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Icon + Text Pairing</strong>: Every button combines icons with text labels to aid
                  comprehension
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <strong>Shadow Indicators</strong>: Buttons have shadows to clearly indicate &quot;clickability&quot;
                  for users unfamiliar with flat design
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* p4 UI/UX Design Research */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pt-10 grid grid-col-1 lg:grid-cols-2 items-start ">
            {/* text block 1 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-12 max-w-md">
              {/* title */}
              <div className="flex flex-row py-5">
                <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                  UI/UX Design Research
                </h2>
              </div>

              <h3>Visual Design Approach</h3>

              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  We opted for a calm, soothing visual design to provide a sense of stability for users navigating
                  potentially stressful environments and coping with past traumas.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  This decision was directly informed by our user research, which highlighted the high-stress situations
                  many of our users face daily.
                  <br />
                  <br />
                </li>
              </ul>

              <h3>Why Hybrid iOS + Fluent (Not Material Design 3)</h3>
              <p className="inline-flex md:text-sm py-2">
                We evaluated iOS, Fluent Design, and Material Design 3. We rejected Material Design 3&apos;s flat
                aesthetic because our users&mdash;many unfamiliar with modern smartphones&mdash;needed clear visual
                depth cues to understand what was clickable. We adopted a hybrid of iOS settings patterns and Fluent
                Design&apos;s depth emphasis, creating immediate clarity for first-time smartphone users.
              </p>
            </div>
            {/* block 2 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-12 max-w-md">
              <div className="max-w-[400px] flex flex-col justify-center items-center  p-2 col-span-2 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                <img
                  src="/images/ReentryGuide-GR/ref.png"
                  alt="Visual references: Microsoft Fluent Design calendar and iOS Settings menu."
                />
              </div>
            </div>
          </div>
        </section>

        {/* p4 UI/UX Design Research continued */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pt-5 grid grid-col-1 lg:grid-cols-2 items-start ">
            {/* text block 1 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-5 max-w-md">
              <h2 className="text-xl font-bold">Design Choices:</h2>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Straightforward and Streamlined process: when the user needs something like food or clothing, we want
                  to help the user to get to their desired locations with few clicks and without extra effort.
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Limited Options on one page: Reduce cognitive load and make sure a Simple and straightforward
                  process.
                </li>

                <li className="list-none">
                  <div className="flex flex-col justify-center items-center  py-9 col-span-2 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                    <img
                      className="w-[300px] rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                      src="/images/ReentryGuide-GR/design-choices/highlight.png"
                      alt="Mobile UI card highlighting the 'Pick Closest Location' button."
                    />
                    <p className="py-3 pt-5 md:text-sm px-9">
                      Highlighting the most likely choice with limited options by the user ensures a streamlined user
                      experience
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* text block 2 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-5 mt-5 max-w-md">
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Accessible Placement: Buttons located in the middle or lower half of the screen, making it easier for
                  users to reach with minimal hand movement
                </li>

                <li className="list-none">
                  <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                      <img
                        className="w-[300px] md:max-w-[300px] rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                        src="/images/ReentryGuide-GR/design-choices/hand-left.png"
                        alt="Heatmap overlay showing reachable screen zones for left-handed users."
                      />
                      <p className="py-3 md:text-sm">Thumb zone for left handed people</p>
                    </div>
                    <div className="mx-5 flex flex-col justify-center items-center px-9 w-full lg:w-1/2 transition h-fit">
                      <img
                        className="w-[300px] md:max-w-[300px] rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                        src="/images/ReentryGuide-GR/design-choices/hand-right.png"
                        alt="Heatmap overlay showing reachable screen zones for right-handed users."
                      />
                      <p className="py-3 md:text-sm">Thumb zone for right handed people</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* p4 Design Choices continued */}
          <div className=" max-w-[1200px] m-auto px-6 pt-5 grid grid-col-1 lg:grid-cols-2 items-start ">
            {/* text block 2 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-5 mt-5 max-w-md">
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Buttons: Large, clearly defined with shadows to indicate &apos;clickability&apos;, with unified style
                  across the app to avoid confusion.
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Combining Texts with Icons: Aid understanding
                </li>

                <li className="list-none">
                  <div className="flex flex-col justify-center items-center py-5 col-span-2 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                    <img
                      className="w-[300px] rounded-3xl"
                      src="/images/ReentryGuide-GR/design-choices/button.png"
                      alt="UI component specs for Primary and Secondary buttons with shadow details."
                    />
                  </div>
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Font: Manrope, which is similar to Product Sans as regular font, increasing the familiarity to Google
                  Maps.
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Big Texts: Font size should be at least 17px to ensure readability, especially for users with visual
                  impairments
                </li>
              </ul>
            </div>

            {/* text block 2 */}
            <div className=" col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 py-5 max-w-md">
              <ul className="list-none">
                <li className="list-none">
                  <div className="flex flex-col justify-center items-center py-5 col-span-2 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
                    <img
                      className="rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                      src="/images/ReentryGuide-GR/design-choices/color.svg"
                      alt="Diagram detailing hex codes for background, beige button, and white button."
                    />
                  </div>
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Color Scheme: Light, Neutral color like #FCFCFC as background color, #FDDEBA as primary button color
                  to ensure brand consistency with Reentry Reimagined.
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  High Contrast: Ensuring all components are WCAG AAA compliant.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* p5 */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3 ">
            <div className="col-span-1 lg:col-span-3 py-10 text-center">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl">Component Library</h2>
              <p className="md:text-sm py-2 max-w-2xl m-auto">
                Documented typography scale, color tokens, and reusable button patterns to ensure consistency and
                accessibility across all screens.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center  p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img
                src="/images/ReentryGuide-GR/Tablet-Screen-1.svg"
                alt="Typography specimen for Roboto and Manrope fonts with button styles."
              />
            </div>

            <div className="flex flex-col justify-center items-center  p-2 col-span-1 md:col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
              <img
                src="/images/ReentryGuide-GR/tablet-screen.svg"
                alt="Color palette grid showing earth tones and pastels with hex codes."
              />
            </div>
          </div>
        </section>

        {/* p6 Usability Testing */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pt-20 grid grid-col-1 lg:grid-cols-2 items-start">
            {/* text block */}
            <div className=" col-span-1  md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 max-w-md">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                Usability Testing
                <br />
                <br />
              </h2>
              <p className="md:text-sm py-2 relative">
                We conducted thorough user testing to ensure our app meets the needs of our diverse user base. Our
                testing group included:
              </p>

              <ul className="list-decimal pl-3">
                <li className="md:text-sm py-2 relative">
                  40s male, formerly incarcerated (2 years ago), homeless, limited smartphone skills
                </li>
                <li className="md:text-sm py-2 relative">
                  <strong>50s male, formerly incarcerated (1 year and 7 months ago), has autism</strong>
                </li>
                <li className="md:text-sm py-2 relative">30s male, homeless, limited smartphone skills</li>
                <li className="md:text-sm py-2 relative">30s female, homeless</li>
                <li className="md:text-sm py-2 relative">
                  40s male, formerly incarcerated (2 months ago), limited smartphone skills
                  <br />
                  <br />
                </li>
                <li className="list-none">
                  <div className="flex flex-col justify-center items-center h-fit">
                    <img
                      className="rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] "
                      src="/images/ReentryGuide-GR/Ferguson.png"
                      alt="Street view photograph of the Ferguson Apartments building, one of the locations used for field usability testing."
                    />
                    <p className="p-2 pb-5 md:text-sm text-center">
                      Ferguson Apartments in Grand Rapids Downtown: One of the usability testing locations
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* text block */}
            <div className=" col-span-1  md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 max-w-md">
              <h3>Key Insight: Testing with Neurodiversity</h3>
              <p className="md:text-sm py-2">
                &quot;When a participant with autism struggled to understand when locations were open or closed, we
                changed from horizontal to vertical alignment and rewrote the timing language to present tense. The
                confusion disappeared in round 2.&quot;
              </p>

              <h3>Testing Methodology</h3>
              <ul className="list-decimal pl-5 space-y-4 md:text-sm">
                <li className="mb-2">
                  <p className="font-semibold">Implemented iterative usability testing process</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Conducted two rounds of evaluations</li>
                    <li>Used different participants for each round</li>
                    <li>Analyzed results and adjusted the app after each round</li>
                  </ul>
                </li>

                <li className="mb-2">
                  <p className="font-semibold">Testing session setup:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Met participants near their homes or location of their choice for comfort</li>
                    <li>Provided a testing phone with preloaded app</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* p6 Key Findings */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pt-10 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 max-w-md">
              <h3 className="text-gray-900 inline-flex font-extrabold text-xl font-RedHatDisplay text-md text-left">
                Key Findings
              </h3>

              <p className="pb-1 font-extrabold">Positive Outcomes:</p>
              <ul className="list-decimal pl-3 md:text-sm py-2">
                <li className="pb-1">Font Readability: All users found the chosen font comfortable to read.</li>
                <li className="pb-5">Clear Navigation: The app&apos;s navigation structure was intuitive for all users.</li>
              </ul>

              <p className="pb-1 font-extrabold">Areas for Improvement:</p>
              <ul className="list-none">
                <li className="md:text-sm py-2 relative">
                  <ul className="">
                    <li className="pb-1">
                      1. During the first round of testing, we found that the users with autism (User No.2) and the
                      ones less familiar with smartphones (User No.1) found the timing and open/closed status
                      confusing.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Solution: We changed the alignments of the elements from horizontal to vertical and the wording
                      to present tense. We did not find this confusing anymore in the second round of usability
                      testing.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-4 max-w-md">
              <img
                src="/images/ReentryGuide-GR/usability-testing-change1.svg"
                alt="Visual comparison of a location card: The 'Before' version versus the 'After' redesign which features improved spacing and clearer status badges."
              />
            </div>
          </div>
        </section>

        {/* p6 Google Maps issue */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 py-10 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1  md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left max-w-md">
              <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 row-span-2 bg-[#FDDEBA] transition sm:min-h-[150px] h-fit">
                <img
                  className="rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] w-[300px]"
                  src="/images/ReentryGuide-GR/screenshots/Screenshot_15.png"
                  alt="Usability Testing: Google Maps Start Button Issue"
                />
              </div>
            </div>

            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 max-w-md">
              <ul className="list-none">
                <li className="md:text-sm py-2 relative">
                  <ul className="">
                    <li className="py-1 pt-5">
                      2. During the first round of testing, we found that the users with autism (User No.2) got lost in
                      Google Maps and did not click on the blue &quot;start&quot; button to start the navigation.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Solution: We added a simple page to remind the user to click on the start button, before our app
                      opens the google map only for the first time.
                      <br />
                      <br />
                      <br />
                    </li>

                    <li className="pb-1">
                      3. In the second round of usability testing, the bus option in Google Maps confused users with
                      limited smartphone experience.
                    </li>
                    <li className="md:text-sm pl-3 py-2 relative before:content-['◦'] before:absolute before:left-0">
                      Future Plans: We are planning to shoot a video guide for how to use Google Maps Bus routes, and
                      link the video into the app.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* p7 Testing scripts */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[2000px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3 ">
            <a
              href="/images/ReentryGuide-GR/UsabilityTestingScript-1.png"
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center  p-2 col-span-1 transition sm:min-h-[150px] h-fit"
            >
              <img
                src="/images/ReentryGuide-GR/UsabilityTestingScript-1.png"
                alt="Page 1 of the printed usability testing script used to interview participants."
              />
            </a>

            <a
              href="/images/ReentryGuide-GR/UsabilityTestingScript-2.png"
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center  p-2 col-span-1 transition sm:min-h-[150px] h-fit"
            >
              <img
                src="/images/ReentryGuide-GR/UsabilityTestingScript-2.png"
                alt="Page 2 of the printed usability testing script used to interview participants."
              />
            </a>

            <a
              href="/images/ReentryGuide-GR/UsabilityTestingScript-3.png"
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center  p-2 col-span-1 transition sm:min-h-[150px] h-fit"
            >
              <img
                src="/images/ReentryGuide-GR/UsabilityTestingScript-3.png"
                alt="Page 3 of the printed usability testing script used to interview participants."
              />
            </a>
          </div>
        </section>

        {/* p8 sitemap */}
        <section className="bg-[#fcfcfc] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto lg:px-6 py-10 grid grid-col-1">
            <div className="flex flex-col justify-center items-center  p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img
                src="/images/ReentryGuide-GR/sitemap.svg"
                alt="Flowchart diagram visualizing the app's logic path for Prominent Disclosures, Permission Requests, and conditional linking to external apps."
              />
            </div>
          </div>
        </section>

        {/* p9 Final UI */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <h2 className="m-auto px-14 pt-10 text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
            Final UI
          </h2>

          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {[
              { src: "Screenshot_1.png", alt: "Onboarding flow showing a Location Permission request.", label: "ProminentDisclosure.js" },
              { src: "Screenshot_2.png", alt: "Onboarding flow showing a safety disclaimer notice.", label: "ImportantNotice.js" },
              { src: "Screenshot_3.png", alt: "Onboarding flow showing a step-by-step guide on how to grant permissions.", label: "RequestPermission.js" },
              { src: "Screenshot_5.png", alt: "Navigation flow starting from the Main Menu.", label: "MainMenu.js" },
              { src: "Screenshot_6.png", alt: "Navigation flow moving to a 'Meal or Groceries' selection.", label: "MealOrGroceries.js" },
              { src: "Screenshot_7.png", alt: "Navigation flow ending with a 'Lunch or Dinner' time selection screen.", label: "LunchOrDinner.js" },
              { src: "Screenshot_8.png", alt: "Interface screen showing details for God's Kitchen.", label: "ResourceLocation.js" },
              { src: "Screenshot_9.png", alt: "Interface screen showing menu options to 'Pick Closest Location' for groceries and hygiene.", label: "SelectResourceLocation.js" },
              { src: "Screenshot_10.png", alt: "Interface screen showing menu options to 'Pick Other Locations' for groceries and hygiene.", label: "SelectResourceLocation.js" },
              { src: "Screenshot_10.5.png", alt: "Mobile screen displaying an 'All locations closed' empty state.", label: "AllLocationsClosed.js" },
              { src: "Screenshot_11.png", alt: "Mobile screen displaying a list of hygiene centers.", label: "ResourceLocationsList.js" },
              { src: "Screenshot_12.png", alt: "Mobile screen displaying a detailed view of the Cathedral of Saint Andrew outreach center.", label: "ResourceLocation.js" },
              { src: "Screenshot_13.png", alt: "User flow displaying a location's details.", label: "MoreInfo.js" },
              { src: "Screenshot_14.png", alt: "User flow displaying transportation mode selection options (Walk, Bus, Drive).", label: "SelectTransportation.js" },
              { src: "Screenshot_15.png", alt: "User flow displaying a tutorial tip for starting Google Maps navigation.", label: "/components/GoogleMapsTutorial.js" },
              { src: "Screenshot_16.png", alt: "Mobile screen showing a query asking if Maps crashed.", label: "DidGoogleMapsCrash.js" },
              { src: "Screenshot_17.png", alt: "Mobile screen showing a confirmation screen.", label: "DidGoogleMapsCrash.js" },
              { src: "Screenshot_18.png", alt: "Mobile screen showing the Find Healthcare category menu.", label: "FindHealthcare.js" },
            ].map((item) => (
              <div
                key={item.src}
                className="flex flex-col justify-center items-center  p-9 col-span-2 md:col-span-1 row-span-2 bg-[#FDDEBA] transition sm:min-h-[150px] h-fit"
              >
                <img
                  className="rounded-3xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]"
                  src={`/images/ReentryGuide-GR/screenshots/${item.src}`}
                  alt={item.alt}
                />
                <p className="py-3 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* p3 (Moved) - Technology Stack */}
        <section className="bg-[#FDDEBA] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className=" max-w-[1200px] m-auto px-6 pb-20 grid grid-col-1 lg:grid-cols-2 ">
            <div className="flex flex-col justify-center items-center  p-2 col-span-1 row-span-1 bg-[#FDDEBA] transition sm:min-h-[150px] h-fit">
              <img src="/images/ReentryGuide-GR/stack.svg" alt="Logos: Trello, React Native, Expo, Yarn, GitHub." />
            </div>
            {/* text block */}
            <div className=" col-span-1 row-span-2 md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 sm:px-16 max-w-md">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-2xl text-left">
                Technology Stack Evaluation
              </h2>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Agile methodology for software development. Utilized Scrum framework for iterative and incremental
                  development.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Trello for agile project management, Used for backlog management and sprint tracking.
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Github for hosting git repository
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <p className="pb-1">React Native as framework</p>
                  <ul className="list-decimal pl-3">
                    <li className="pb-1">Large Community: accessible to large amount of npm packages.</li>
                    <li className="pb-1">Cross-Platform Code: One set of code for multiple potential platforms.</li>
                  </ul>
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Expo for managed workflow and easy debugging on physical devices
                </li>
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Yarn as local package management, as it perform better than npm
                  <br />
                  <br />
                  <br />
                </li>
              </ul>
              <h3>Map Integration Decision</h3>
              <ul className="list-none">
                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <p className="pb-1">Options Considered:</p>
                  <ol className="list-decimal pl-3">
                    <li className="pb-1">
                      Develop a fully-featured map applications, including navigation that leads user to resources
                      locations that provides food, clothing, etc.
                    </li>
                    <li className="pb-1">Create an app that generates links to Google Maps with few clicks.</li>
                  </ol>
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  Decision: We chose option 2 - generating links to Google Maps.
                </li>

                <li className="md:text-sm pl-3 py-2 relative before:content-['•'] before:absolute before:left-0">
                  <p className="pb-1">Rationale:</p>
                  <ul className="list-decimal pl-3">
                    <li className="pb-1">Cost-effective: Avoided expensive API costs for local bus route data</li>
                    <li className="pb-1">Sustainability: More beneficial for long-term maintenance and updates</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center p-2 col-span-1 row-span-1 bg-[#FDDEBA] transition sm:min-h-[150px] h-fit">
              <img
                className="rounded-xl"
                src="/images/ReentryGuide-GR/agile.webp"
                alt="Circular diagram of the Agile lifecycle: Plan, Design, Develop, Test, Deploy, Review."
              />
              <p className="md:text-sm p-2">(Credit: Asana)</p>
            </div>
          </div>
        </section>

        {/* p? Website section */}
        <section className="bg-[#fff] px-6 py-10 justify-center grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          {/* text block */}
          <div className=" col-span-2 lg:col-span-1 lg:mx-[2em] md:row-span-2 flex flex-col justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12 max-w-md">
            {/* title */}
            <div className="flex flex-row py-3">
              <h2 className="text-gray-900 inline-flex font-bold font-RedHatDisplay text-xl text-left">
                The Website
              </h2>
            </div>
            <a
              href="https://reentryguidegr.org"
              className="relative right-1 flex flex-row justify-between items-center rounded-2xl w-full px-5 py-4 my-3 bg-[#fff] hover:bg-[#aaa] drop-shadow-[0_10px_8px_rgba(0,0,0,0.1)] max-w-xs"
            >
              <div className="flex items-center flex-1">
                <img src="/icons/globe-dark.png" className="mr-0 w-6 h-6 object-contain" alt="" />
                <span className="ml-2.5 text-base text-black flex-shrink-1">Visit Website</span>
              </div>
              <img src="/icons/forward.png" className="mr-0 w-5 h-5 object-contain" alt="" />
            </a>

            <p className="inline-flex md:text-sm py-3">
              The website for ReentryGuide GR is built using Docusaurus and React, serving three primary functions:
            </p>
            <div className="flex flex-col w-full py-3">
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; Download the App</b>
                <p className="md:text-sm pl-3">Provides a google play link, ensuring easy access for users. </p>
              </div>
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; Download Resource Sheet</b>
                <p className="md:text-sm pl-3">For those who cannot use a smartphone.</p>
              </div>
              <div className="flex flex-col py-2">
                <b className="md:text-sm">&bull; Documentation</b>
                <p className="md:text-sm pl-3">
                  Allowing developers to fork the project and adapt it for use in their own cities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center col-span-2 row-span-2 transition sm:min-h-[150px] lg:my-14 h-fit">
            <img
              className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)] rounded-md"
              src="/images/ReentryGuide-GR/website.png"
              alt="Promotional graphic featuring a hand holding a smartphone displaying the ReentryGuide main menu against a light gray city skyline background."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
