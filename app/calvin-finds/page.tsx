import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/ProjectHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Calvin Finds",
  description: "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function CalvinFinds() {
  return (
    <div className="relative bg-[#EDE7E7] font-semibold">
      <style>{`
        body { background-color: #EDE7E7; }
        /* Highlight current page on navbar */
        #nav-hamburger-3,
        #nav-3 {
          color: black;
        }

        @font-face {
          font-family: "TerminalDisplay";
          src: url("/fonts/terminaldisplay.ttf");
        }

        .hamburger-top,
        .hamburger-middle,
        .hamburger-bottom {
          background: #777;
        }

        .bg-menu {
          background-color: #F8F8F8;
        }
      `}</style>



      {/* Main content */}
      <main id="main-content">
        <ProjectHero
          sectionClassName="text-[#2F2E41]"
          imageSrc="/images/CalvinFinds/mockup.png"
          imageMobileSrc="/images/CalvinFinds/thumbnail.png"
          imageAlt="Four mobile screens showing the Calvin Finds app interface: login, item feed, profile, and map."
          imageContainerClassName="bg-[#EDE7E7]"
          titleClassName="text-left inline-flex font-black text-[#2F2E41] text-xl mb-3"
          title="Calvin Finds Mobile App"
          links={[
            { href: "https://github.com/calvin-cs262-fall2023-teamA", icon: "/icons/github.svg", label: "Visit Github", buttonClassName: "bg-[#FFAF66] hover:bg-[#FFAF99]", labelClassName: "text-[#2F2E41]", forwardIcon: "/icons/forward.png" },
          ]}
          metaHeadingClassName="font-black text-[#2F2E41] text-xl"
          meta={[
            { label: "Technology", value: "React Native, Azure, ElephantSQL, Figma, Inkscape, Krita" },
            { label: "Role", value: "UI/UX Design, Development, Branding, Deployment" },
          ]}
          description={
            <>
              <p className="text-left inline-flex md:text-sm">Team Member: Aishwarya Joshi, Branden Husted, Edom Maru, Harry Gu, Steven McKelvey</p>
              <p className="text-left inline-flex md:text-sm">Calvin Finds is a lost and found app for Calvin University students, written in React Native. My role in this development team was UI/UX designer, front-end developer, and various debugging.</p>
            </>
          }
        />

        {/* P2 */}
        <section className="text-[#2F2E41] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2 gap-3">
            {/* text block */}
            <div className="col-span-1 md:row-span-4 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">
                  Project Overview
                </h2>
              </div>

              <p className="inline-flex text-md py-2 mb-3">
                Calvin currently lacks an efficient and organized system for managing lost and found items on campus.
                Calvin&apos;s current system involves lost-and-found boxes around campus and a written record of lost items.
                The absence of an easily accessible, on demand system not only leads to frustration but also results in the
                unnecessary prolonged loss of personal items, which could otherwise be easily recovered with a better
                solution in place. Our app, Calvin Finds, aims to offer easy item reporting, streamlined item searches,
                real-time updates, identifiable pictures, specified locations and community engagement.
              </p>

              <p className="inline-flex text-md py-2 mb-3">
                In contrast to existing apps that cover a broader region, our app is designed exclusively for Calvin
                students and faculty, offering a simplified experience for lost and found on campus.
                It features an authentication system and requires minimal personal information, ensuring easy setup, quick
                posting, and secure communication. This sets us apart from existing options and empowers the Calvin
                community for seamless lost and found retrievals.
              </p>

              <p className="inline-flex text-md py-2 mb-3">
                My role in the team is to design the UI, UX, and Brand Guidelines for the app, front-end development,
                integration with the back-end, and debugging.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]" src="/images/CalvinFinds/photo.png"
                alt="Whiteboard sketch with 'Airpod' written in red marker and an arrow pointing to a drawing." />
            </div>

            <div className="flex flex-col py-5 justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]" src="/images/CalvinFinds/s1.png"
                alt="Email notification reporting a lost phone found in a parking lot." />
            </div>

            <div className="flex flex-col px-5 py-5 justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]" src="/images/CalvinFinds/s2.jpg"
                alt="Chat interface showing a message thread about a lost power brick in a lab." />
            </div>
            <div className="flex flex-col px-5 py-5 justify-center items-center col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-xl drop-shadow-[0_10px_8px_rgba(0,0,0,0.10)]" src="/images/CalvinFinds/s3.jpg"
                alt="Chat interface displaying a message about items left behind in a computer lab." />
            </div>
          </div>
        </section>

        {/* p3 Research and Planning */}
        {/* 3.1 */}
        <section className="text-[#2F2E41] bg-white drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              {/* title */}
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">
                  Research and Planning
                </h2>
              </div>

              <h3 className="font-black text-lg inline-flex pt-4">Target Audience</h3>
              <p className="inline-flex pb-4 mb-3">
                The target audience are primarily College students at Calvin University, as well as some staff.
              </p>
              <b className="font-black text-lg">Key Findings:</b>

              <div className="flex flex-col py-4">
                <b className="">• Demographics</b>
                <p className="pl-3">
                  A large proportion of undergrad students and graduate students, as well as some campus staffs that has a
                  wide range of age and demographics.
                  Therefore we chose colorful color palette that vibes with Gen-Z style, and the UI and functionality is
                  heavily influenced by modern social media app.
                </p>
              </div>
            </div>

            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col py-4">
                <b className="">• Environment</b>
                <p className="pl-3">Primarily on campus, the students and staff are usually busy.</p>
              </div>

              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/CalvinUniversity.jpg"
                  alt="Students walking along a paved pathway on a university campus." />
                <p className="md:text-sm p-2">Credit: Calvin University</p>
              </div>

              <div className="flex flex-col py-4">
                <b className="">• Technology Experience</b>
                <p className="pl-3">Most are experienced with phones, especially social media apps.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 */}
        <section className="text-[#2F2E41] bg-[#F4F1F1] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <h3 className="font-black text-xl inline-flex py-2 mb-1">
                UI/UX Design Brainstorming
                <br />
              </h3>

              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Familiarity</h4>
                <p className="pl-3">inspired by modern social media apps, but posting lost/found items instead.</p>
              </div>

              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Consistency</h4>
                <p className="pl-3">Long rectangular shapes indicates input fields, rounded shapes indicates clickable buttons.</p>
              </div>
            </div>

            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Accessibility</h4>
                <p className="pl-3">We designed the application with inclusive mind. We want to take cared of the users who may
                  have motion or certain vision disabilities, Se we use bright yellow as primary button colors. large text
                  as primary font, and huge buttons for easy user interaction.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.3 */}
        <section className="text-[#2F2E41] bg-[#FFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2">
            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <h3 className="font-black text-xl inline-flex py-2 mb-1">Management Method</h3>
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Sprint Planning</h4>
                <p className="pl-3">
                  We organized our work into sprints - time-boxed periods (for us, typically 2-3 weeks) during which our
                  team worked to complete a set amount of work and reached a milestone, such as completing UI/UX design, or
                  complete deploying the server. This allowed us to:
                </p>
                <ul className="list-disc pl-6">
                  <li>Focus on specific, achievable goals within a fixed timeframe</li>
                  <li>Regularly reassess and adjust our priorities</li>
                  <li>Deliver working increments of our product at the end of each sprint</li>
                </ul>
              </div>
            </div>

            {/* text block */}
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/ReentryGuide-GR/agile.webp"
                  alt="Circular flowchart illustrating the Agile development lifecycle phases." />
                <p className="md:text-sm p-2">Credit: Asana</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.4 */}
        <section className="text-[#2F2E41] bg-[#FFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-5 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Sprint Meetings</h4>
                <p className="pl-3">We held weekly sprint meetings after class to review progress, plan upcoming tasks, and address any challenges.</p>
              </div>
            </div>
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Design-Development Integration</h4>
                <p className="pl-3">As both a designer and developer, I was able to seamlessly integrate Figma designs with React Native development, ensuring a smooth transition from design to implementation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 */}
        <section className="text-[#2F2E41] bg-[#FFF] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-5 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Kanban - Trello Board</h4>
                <p className="pl-3">We used a Kanban board in Trello to visualize our workflow and manage tasks efficiently. Our board included:</p>
                <ul className="list-disc pl-6">
                  <li>Idea log - to record and track project ideas</li>
                  <li>Story log - to document user stories</li>
                  <li>Backlog - for prioritized, sprint-ready tasks</li>
                  <li>Sprint Backlog - tasks committed for the current sprint</li>
                  <li>Doing and Done columns - to track task progress within the sprint</li>
                </ul>
              </div>
              <p className="pl-3">Kanban Template we were using:</p>
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/t1.png"
                  alt="Kanban board interface showing 'To Do', 'Doing', and 'Done' columns." />
                <p className="md:text-sm p-2"></p>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/t2.png"
                  alt="Kanban board columns populated with specific development tasks." />
                <p className="md:text-sm p-2"></p>
              </div>
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/t3.png" alt="Kanban board showing progress on tasks" />
                <p className="md:text-sm p-2"></p>
              </div>
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/t4.png"
                  alt="Kanban board detail view showing 'Sprints 1 through x-1' task grouping." />
                <p className="md:text-sm p-2"></p>
              </div>
            </div>
          </div>
        </section>

        {/* 3.6 */}
        <section className="text-[#2F2E41] bg-[#F4F1F1] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-5 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <h3 className="font-black text-xl inline-flex py-4 mb-1">Technology Stack Evaluation</h3>
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/tech.png"
                  alt="Logos for PostgreSQL, GitHub, Azure, React Native, Figma, Inkscape, and Trello." />
                <p className="md:text-sm p-2"></p>
              </div>
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• ElephantSQL</h4>
                <p className="pl-3">Used as our database, as required by the professor. It provided a reliable PostgreSQL database solution with cloud hosting capabilities.</p>
              </div>
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Microsoft Azure</h4>
                <p className="pl-3">Utilized for server hosting, as required by the professor. Azure offered robust cloud computing services that integrated well with our other technologies.</p>
              </div>
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Figma</h4>
                <p className="pl-3">Our choice for UI/UX design. Figma provided an easy-to-use, free platform for collaborative design work, which integrated seamlessly with our development process.</p>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col py-4">
                <div className="flex flex-col py-4">
                  <h4 className="font-black text-base">• draw.io</h4>
                  <p className="pl-3">Selected for creating various diagrams such as UI models and deployment diagrams. Its user-friendly interface made it easy for all team members to contribute to visual documentation.</p>
                </div>

                <h4 className="font-black text-base">• React Native with Expo</h4>
                <p className="pl-3">Used for client-side development, as required by the professor. We specifically chose to use Expo for a managed workflow, which offered several advantages:</p>
                <ul className="list-disc pl-6">
                  <li>Simplified package management, making it easier to handle dependencies</li>
                  <li>Quick setup and initialization of the project</li>
                  <li>Access to pre-built UI components and APIs</li>
                  <li>Easier testing and previewing on physical devices</li>
                  <li>Streamlined build process for both iOS and Android platforms</li>
                </ul>
                <p className="pl-3 mt-2">
                  This managed workflow approach with Expo allowed us to focus more on developing features rather than
                  configuring the development environment, which was crucial for our project timeline.
                </p>
              </div>
              <div className="flex flex-col py-4">
                <h4 className="font-black text-base">• Github</h4>
                <p className="pl-3">Used for hosting the source code and documents, as required by the professor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.1 */}
        <section className="text-[#2F2E41] bg-[#FFAF66] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pt-10 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">Design</h2>
              </div>
              <h3 className="font-black text-xl inline-flex py-2 mb-1">Social Media Inspiration</h3>
              <div className="flex flex-col py-2">
                <b className="">• Instagram-Inspired Main Screen</b>
                <p className="pl-3">Our main screen design draws primary inspiration from Instagram:</p>
                <ul className="list-disc pl-6">
                  <li>Image-focused layout to showcase lost/found items clearly</li>
                  <li>Card-based organization containing pictures and essential information</li>
                  <li>Comment sections for users to provide additional details</li>
                  <li>Fixed layout for text elements (title, subtitle, date, finder&apos;s name)<br /><br /></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl"
                  src="https://cdn.dribbble.com/users/1052299/screenshots/3819384/shot.png?resize=800x600&vertical=center"
                  alt="Mobile UI concept featuring an image-heavy social media feed layout." />
                <p className="md:text-sm p-2">Credit: Ivan Martynenko</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.2 */}
        <section className="text-[#2F2E41] bg-[#FFAF66] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-5 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/card.png"
                  alt="UI card component displaying a photo of socks, user avatar, and location tag." />
                <p className="md:text-sm p-2"></p>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col py-2">
                <b className="">• Platform Comparisons</b>
                <p className="pl-3">We examined other platforms but found Instagram&apos;s approach most suitable:</p>
                <ul className="list-disc pl-6">
                  <li>Facebook and Twitter are primarily word-focused, less suitable for our image-centric needs</li>
                  <li>Adapted Instagram&apos;s image-first approach to fit our specific lost and found context</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <h3 className="font-black text-lg inline-flex py-2 mb-1">Color Scheme and Branding</h3>
              <div className="flex flex-col py-2">
                <b className="">• Gen-Z Appeal</b>
                <p className="pl-3">We chose bright colors like yellow and red to resonate with our target audience:</p>
                <ul className="list-disc pl-6">
                  <li>Inspired by popular platforms like Snapchat</li>
                  <li>Reflects current Gen-Z fashion and style preferences</li>
                  <li>Creates a vibrant and energetic user interface<br /><br /></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 pb-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="https://images.pexels.com/photos/5325866/pexels-photo-5325866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Three young adults wearing bright clothing, one holding a green smartphone." />
                <p className="md:text-sm p-2"></p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.3 */}
        <section className="text-[#2F2E41] bg-[#fdc794] drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 py-10 grid grid-col-1 lg:grid-cols-2">
            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <h3 className="font-black text-xl inline-flex py-2 mb-1">Accessibility Considerations</h3>
              <div className="flex flex-col py-2">
                <b className="">• Typography</b>
                <p className="pl-3">Our text styling choices support both accessibility and modern design trends:</p>
                <ul className="list-disc pl-6">
                  <li>Implemented bold text throughout the app to improve readability</li>
                  <li>Bold text aligns with recent design trends, creating a modern look while enhancing visibility</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-start items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col py-2">
                <b className="">• Color Choices</b>
                <p className="pl-3">We prioritized accessibility in our color selections:</p>
                <ul className="list-disc pl-6">
                  <li>Avoided problematic color combinations (solid red/green, blue/yellow) to accommodate color blindness</li>
                  <li>Used orange as a key color to enhance visibility for users with color vision deficiencies</li>
                </ul>
              </div>
              <p className="pl-3 mt-4">
                By combining social media design influences with careful consideration for accessibility, we&apos;ve created an
                interface that is both familiar to our users and inclusive for those with different visual needs.
              </p>
            </div>
          </div>
        </section>

        {/* p5 Brand */}
        <section className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img src="/images/CalvinFinds/brand2.svg" alt="Green app icon with a white image-placeholder symbol." />
            </div>
            <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-2 row-span-2 transition sm:min-h-[150px] h-fit">
              <img src="/images/CalvinFinds/brand1.svg" alt="Full logo featuring the icon and 'Calvin Finds' typography." />
            </div>
          </div>
        </section>

        {/* p6 Usability Testing */}
        <section className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1300px] m-auto pb-10 grid grid-col-1 lg:grid-cols-2">
            <div className="order-1 self-start col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              <div className="flex flex-row py-3">
                <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">Usability Testing</h2>
              </div>
              <p className="my-4">
                We conducted comprehensive usability testing to gather valuable user feedback and improve the CalvinFinds
                application. Our approach was methodical and user-centered, designed to uncover real-world usage patterns
                and potential areas for improvement.
              </p>
              <div className="flex flex-col py-6">
                <b className="font-black text-lg">Test Participants and Setting</b>
                <ul className="list-disc pl-6">
                  <li>8 computer science students from lower classmen who are willing to volunteer</li>
                  <li>Conducted in a room in the Science building at Calvin University Campus for easy access to students</li>
                  <li>Two rounds of testing were performed</li>
                </ul>
              </div>
              <div className="flex flex-col py-6">
                <b className="font-black text-lg">Testing Methodology</b>
                <ul className="list-disc pl-6">
                  <li>Two-person testing team: one to read the script, one to record responses</li>
                  <li>Participants were encouraged to think aloud during tasks</li>
                  <li>No specialized software used; focus on direct observation and manual recording</li>
                  <li>Structured script to ensure consistency across all test sessions</li>
                </ul>
              </div>
            </div>

            <div className="order-2 self-start col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-5 py-12">
              <div className="flex flex-col py-6">
                <b className="font-black text-lg">Test Structure</b>
                <ol className="list-decimal pl-6">
                  <li>Introduction and background questions</li>
                  <li>Initial reactions to the main page</li>
                  <li>Series of specific tasks to complete within the app</li>
                  <li>Final observations and feedback</li>
                </ol>
              </div>
              <div className="flex flex-col py-6">
                <b className="font-black text-lg">Key Tasks Tested</b>
                <ul className="list-disc pl-6">
                  <li>Finding a specific lost item and contacting the poster</li>
                  <li>Creating a post for a found item</li>
                  <li>Commenting on an existing post</li>
                  <li>Viewing personal profile and posted/archived items</li>
                  <li>Creating a post for a lost item</li>
                  <li>Logging out, creating a new account, and logging in<br /><br /></li>
                </ul>
              </div>
            </div>

            <div className="order-3 self-start col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/Usability Test Script-1.png"
                  alt="Page 1 of the printed usability testing questionnaire." />
                <p className="md:text-sm p-2">Usability testing Script - Page 1</p>
              </div>
            </div>

            <div className="order-4 self-start col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                <img className="rounded-xl" src="/images/CalvinFinds/Usability Test Script-2.png"
                  alt="Page 2 of the printed usability testing questionnaire." />
                <p className="md:text-sm p-2">Usability testing Script - Page 2</p>
              </div>
            </div>

            <div className="order-5 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <h3 className="font-black text-xl">Key Findings and Improvements</h3>
              <div className="my-6">
                <b className="">1. Navigation and Button Clarity</b>
                <p className="pl-3">Users found the button for toggling between lost and found items on the main page confusing.</p>
                <p className="pl-3 text-[#C62828]">Action: Change the UI layout and adding a help page to explain its functionality.</p>
              </div>
              <div className="my-6">
                <b className="">2. Search Functionality</b>
                <p className="pl-3">Users struggled to find items when searching by description rather than item name.</p>
                <p className="pl-3 text-[#C62828]">Action: Updating search queries to include item descriptions.</p>
              </div>
            </div>

            <div className="order-6 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="my-4 flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/before.png"
                    alt="Dashboard using a segment control for 'Found' vs 'Lost'." />
                  <p className="md:text-sm p-2">before</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/after.png"
                    alt="Dashboard using distinct orange buttons for 'Found' and 'Lost' toggles." />
                  <p className="md:text-sm p-2">after</p>
                </div>
              </div>
              <div className="my-4 flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/main-before-search-activated.png"
                    alt="Search bar with a generic magnifying glass icon." />
                  <p className="md:text-sm p-2">before (search activated)</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/main-after-search-activated.png"
                    alt="Search bar with a clear 'Type to search item' placeholder." />
                  <p className="md:text-sm p-2">after (search activated)</p>
                </div>
              </div>
            </div>

            <div className="order-8 md:order-7 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="grid-cols-2">
                <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                  <img className="rounded-xl max-w-[300px]" src="/images/CalvinFinds/usability-testing/detail-before.png"
                    alt="Item detail screen lacking contact information." />
                  <p className="md:text-sm p-2">before</p>
                </div>
                <div className="flex flex-col justify-center items-center py-2 col-span-1 row-span-1 transition sm:min-h-[150px] h-fit">
                  <img className="rounded-xl max-w-[300px]" src="/images/CalvinFinds/usability-testing/detail-after.png"
                    alt="Item detail screen displaying the poster's email and username." />
                  <p className="md:text-sm p-2">after</p>
                </div>
              </div>
            </div>

            <div className="order-7 md:order-8 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="my-6">
                <b className="">3. Contact Information Accessibility</b>
                <p className="pl-3">Users were uncertain about how to contact item owners.</p>
                <p className="pl-3 text-[#C62828]">Action: Updated the details page to show both username and email of the poster.</p>
              </div>
            </div>

            <div className="order-9 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="my-6">
                <b className="">4. Image Upload Process</b>
                <p className="pl-3">Users wanted to take pictures directly in the app when posting items.</p>
                <p className="pl-3 text-[#C62828]">Action: Implemented the ability to use the phone camera for taking pictures within the app.</p>
              </div>
            </div>

            <div className="order-10 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="my-6">
                <b className="">5. Profile Information Accuracy</b>
                <p className="pl-3">Bug with the numbers displayed on user profiles for posted and archived items.</p>
                <p className="pl-3 text-[#C62828]">Action: Working on accurately tracking and displaying user&apos;s posted and archived items.</p>
              </div>
            </div>

            <div className="order-11 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/map-before.png"
                    alt="Map interface showing a generic pin drop." />
                  <p className="md:text-sm p-2">before</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="rounded-xl max-w-[250px]" src="/images/CalvinFinds/usability-testing/map-after.png"
                    alt="Map interface showing a specific building label 'Beets-Veenstra Hall'." />
                  <p className="md:text-sm p-2">after</p>
                </div>
              </div>
            </div>

            <div className="order-12 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="my-6">
                <b className="">6. Location Selection Interface</b>
                <p className="pl-3">Users found it challenging to find specific locations on the map.</p>
                <p className="pl-3 text-[#C62828]">Action: Added description for selected location on the UI.<br /></p>
              </div>
            </div>

            <div className="order-last self-start mt-10 col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-5">
              <div className="flex flex-col py-2 mt-4">
                <b className="font-black text-lg">Overall User Feedback</b>
                <ul className="list-disc pl-6">
                  <li>App was considered aesthetically pleasing</li>
                  <li>Main page was easy to navigate and scroll through</li>
                  <li>Posts were easily clickable</li>
                  <li>Users found the app helpful despite areas needing improvement</li>
                </ul>
              </div>
              <p className="pl-3 mt-4">
                The usability testing provided crucial insights that have guided our development process, ensuring that
                CalvinFinds becomes more user-friendly and efficient in addressing the needs of the Calvin University
                community. We&apos;re committed to continuous improvement based on user feedback.
              </p>
            </div>
          </div>
        </section>

        {/* p7 UI model */}
        <section className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-1">
            <div className="flex flex-row p-3">
              <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">Initial UI Model</h2>
            </div>
            <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-2xl" src="/images/CalvinFinds/UI-Model.jpg"
                alt="High-fidelity user flow diagram connecting app screens with directional arrows." />
            </div>
          </div>
        </section>

        {/* P8 Final UI */}
        <section className="bg-[#FFAF66] py-10 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 md:row-span-2 flex flex-col max-w-md mx-auto justify-center items-left transition bg-grey-500 min-h[30px] text-left px-8 py-12">
            <div className="flex flex-row p-4">
              <h2 className="text-[#2F2E41] mt-4 inline-flex font-black text-xl text-left">Final UI</h2>
            </div>
          </div>

          {[
            { src: "/images/CalvinFinds/login.png", alt: "Mobile login screen with email and password input fields.", label: "Login Page" },
            { src: "/images/CalvinFinds/signup.png", alt: "Mobile signup form filled with student credentials.", label: "Signup Page - Filled" },
            { src: "/images/CalvinFinds/reset-password-1.png", alt: "Password reset screen requesting an email address.", label: "Reset Password Page - Send Code to Email" },
            { src: "/images/CalvinFinds/reset-password-2.png", alt: "Password reset screen with fields to enter and confirm a new password.", label: "Reset Password Page - Type New Password" },
            { src: "/images/CalvinFinds/main.png", alt: "App homepage showing a feed of lost item cards.", label: "Main Page" },
            { src: "/images/CalvinFinds/main-search.png", alt: "App homepage with 'Socks' typed into the search bar.", label: "Main Page - Search Bar Activated" },
            { src: "/images/CalvinFinds/details.png", alt: "Detailed view of a lost item including a map pin and comments section.", label: "Item Details Page" },
            { src: "/images/CalvinFinds/profile.png", alt: "Mobile user profile screen displaying '2 posted' and '13 archived' items.", label: "User Profile Page" },
            { src: "/images/CalvinFinds/posted.png", alt: "Mobile list view showing a user's history of posted lost and found items.", label: "User Posted Page" },
            { src: "/images/CalvinFinds/add.png", alt: "Mobile entry form for reporting a new item with category selection.", label: "Add Item Page" },
            { src: "/images/CalvinFinds/map.png", alt: "Mobile map interface showing a location pin on a campus building.", label: "Add Item Page - Map Selection" },
            { src: "/images/CalvinFinds/add-filled.png", alt: "Mobile entry form populated with 'Socks' as the item name.", label: "Add Item Page - Filled" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center p-9 col-span-1 row-span-2 bg-[#FFAF66] transition sm:min-h-[150px] h-fit">
              <img src={item.src} alt={item.alt} />
              <p className="text-[#2F2E41] m-1">{item.label}</p>
            </div>
          ))}
        </section>

        {/* p9 Deployment Diagram */}
        <section className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] py-10">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-1">
            <div className="flex flex-row p-3">
              <h2 className="inline-flex font-black text-[#2F2E41] text-2xl text-left">Deployment Diagram</h2>
            </div>
            <div className="flex flex-col justify-center items-center p-2 col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="rounded-2xl" src="/images/CalvinFinds/DeploymentDiagram.png" alt="" />
            </div>
          </div>
        </section>

        {/* p10 Domain Model */}
        <section className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)] py-10 bg-[#18141D]">
          <div className="max-w-[1200px] m-auto px-6 pb-10 grid grid-col-1 lg:grid-cols-1">
            <div className="flex flex-row pt-3">
              <h2 className="w-full justify-center inline-flex font-black text-white text-2xl text-left">Domain Model</h2>
            </div>
            <div className="flex flex-col justify-center items-center col-span-1 md:col-span-1 row-span-2 transition sm:min-h-[150px] h-fit">
              <img className="" src="/images/CalvinFinds/DomainModel.png" alt="" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
