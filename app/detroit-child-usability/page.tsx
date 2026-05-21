import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import TableOfContents from "@/app/components/TableOfContents";
import type { TocItem } from "@/app/components/TableOfContents";
import Image from "next/image";

export const metadata: Metadata = {
  title: "State of the Detroit Child — Usability Analysis | Harry Gu",
  description:
    "Usability analysis of the State of the Detroit Child website, conducted for Data Driven Detroit. Includes findings from 5 participants and 5 actionable recommendations.",
};

const detroitTocItems: TocItem[] = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "introduction", label: "Introduction" },
  { id: "methods", label: "Methods" },
  { id: "findings", label: "Findings" },
  { id: "recommendations", label: "Recommendations" },
  { id: "discussion", label: "Discussion" },
  { id: "task-data", label: "Task Performance Data" },
  { id: "contribution", label: "Contribution Statement" },
];

export default function DetroitChildUsability() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&display=swap');

        .paper {
          font-family: 'Atkinson Hyperlegible Next', system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #cbd5e1;
          background: #0a0c10;
        }
        .paper h1, .paper h2, .paper h3, .paper h4 {
          color: #f1f5f9;
          line-height: 1.3;
        }
        .paper a {
          color: #7eb8f7;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
        .paper a:hover { color: #bdd8fb; }
        .paper a:focus-visible {
          outline: 2px solid #7eb8f7;
          outline-offset: 3px;
          border-radius: 2px;
        }
        .paper blockquote {
          border-left: 3px solid #334155;
          padding: 0.75rem 1.25rem;
          margin: 1.25rem 0;
          background: #111827;
          border-radius: 0 6px 6px 0;
          font-style: italic;
          color: #94a3b8;
        }
        .paper table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin: 1.5rem 0;
        }
        .paper th {
          background: #1e2737;
          color: #f1f5f9;
          font-weight: 600;
          text-align: left;
          padding: 0.625rem 0.875rem;
          border: 1px solid #2d3748;
        }
        .paper td {
          padding: 0.5rem 0.875rem;
          border: 1px solid #1e2737;
          vertical-align: top;
        }
        .paper tr:nth-child(even) td { background: #0f1520; }
        .paper .tag-pass { color: #4ade80; font-weight: 600; }
        .paper .tag-fail { color: #f87171; font-weight: 600; }
        @media (max-width: 640px) {
          .paper table { font-size: 0.8rem; }
          .paper th, .paper td { padding: 0.4rem 0.5rem; }
        }
        @media print {
          .paper { color: #000; background: #fff; }
          .paper h1, .paper h2, .paper h3 { color: #000; }
          .paper blockquote { background: #f8f8f8; border-color: #aaa; color: #333; }
        }
      `}</style>

<div className="paper min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="lg:grid lg:grid-cols-[1fr_14rem] lg:gap-12">
            <main id="main-content" className="min-w-0">
              <article>
                <header className="pt-15 mb-5">
                  <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7eb8f7] border border-[#7eb8f7]/30 px-3 py-1 rounded-full mb-6">
                    UX Research · Usability Testing
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4 leading-tight">
                    State of the Detroit Child<br />Usability Analysis
                  </h1>

                  <p className="text-[#94a3b8] mb-1">Leinweber Consulting</p>
                  <p className="text-[#94a3b8] mb-1">
                    Authors:{" "}
                    <span className="text-[#cbd5e1] font-medium">Harry Gu</span>,{" "}
                    Nathan Schuman, Louise Depa, Mikang Moon, Zhitai Jin
                  </p>
                  <p className="text-[#94a3b8]">Date: April 20, 2026</p>

                  <p className="mt-6 text-[#94a3b8] border-l-2 border-[#7eb8f7]/40 pl-4">
                    <strong className="text-[#cbd5e1]">My role:</strong> Analyzed usability testing notes, drafted the Findings section, authored Recommendations 1 and 3, and participated in 2 of the 5 test sessions.
                  </p>
                </header>

                <hr className="border-[#1e2737] my-12" />

              {/* ── Executive Summary ── */}
              <section id="executive-summary" aria-labelledby="exec-heading">
                <h2 id="exec-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Executive Summary</h2>
                <p className="mb-4">
                  For this project, we have been tasked by Data Driven Detroit to investigate the user engagement issues on their website, State of the Detroit Child. To gain a better understanding of these issues, we conducted usability testing of this website and its core features amongst potential users. For this, we recruited 5 individuals who fit the profile of users of the State of the Detroit Child, including librarians, several professors, and a PhD student. We tested how easily users can find certain information on the website and whether they can successfully operate it. From our tests, we attained data corresponding with our previous findings and provided us with new insights as well. During our tests, several of our testers struggled to find and operate certain features on the site, either taking more time than anticipated or failing to complete certain tasks. When the participants shared their thoughts during the test debriefs, several of them felt it was difficult and unintuitive to find and operate certain core features of the site. Based on this data, our team recommends that the State of the Detroit Child website move its interactive map to the homepage, add the &ldquo;Site Tutorial&rdquo; to the main navigation menu, implement filtering options on pages where data is displayed, and add more descriptive titles to pages and features. Through this, we believe Data Driven Detroit will be able to generate better engagement amongst users of their site.
                </p>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Introduction ── */}
              <section id="introduction" aria-labelledby="intro-heading">
                <h2 id="intro-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Introduction</h2>
                <p className="mb-4">
                  The State of the Detroit Child is a data visualization and analytics website where users can view and analyze statistics related to the conditions of children living in Michigan. The intended users of this site include non-profit workers, community leaders, policy makers, and academics. For our usability tests, we wanted to expand upon our previous findings surrounding the ease of use and intuitiveness of this site. We also determined there is a strong connection between the information architecture of these sites and how easy it is for users to operate them. As such, we determined the following key questions we used to guide this study:
                </p>
                <ol className="list-decimal list-outside pl-6 space-y-2 mb-4">
                  <li>How easily can users find the core features and tools of this website?</li>
                  <li>How quickly can these features be found, if at all?</li>
                  <li>When interacting with these tools, how intuitive are they for users to operate?</li>
                </ol>
                <p>
                  Through attaining the answers to these questions when conducting our user testing, we believe we will be able to fulfill our team&apos;s goal of crafting recommendations for ways to make the State of the Detroit Child more engaging for users.
                </p>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Methods ── */}
              <section id="methods" aria-labelledby="methods-heading">
                <h2 id="methods-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Methods</h2>
                <p className="mb-4">
                  We recruited individuals who fit the profile of potential users of the State of the Detroit Child website. This included researchers, professors, and librarians from our university who possess experience with data visualization software and geographic information systems. The experience these individuals have working with such technology would allow them to provide invaluable data for our study. We employed &ldquo;cold emailing&rdquo; to recruit our testers. To attain new insights and information, we recruited different individuals from those we previously conducted interviews with. As such, we were able to recruit the following participants:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-1.5 mb-4">
                  <li>One professor at the School of Public Health (P3)</li>
                  <li>One lecturer at the School of Public Policy (P2)</li>
                  <li>Two librarians at the UM library (P4) (P5)</li>
                  <li>One PhD student (P1)</li>
                </ul>
                <p className="mb-4">
                  The participants of our test have all used data analytics websites for their work and research. While none of them have used State of the Detroit Child before, some of them have used other websites created by Data Driven Detroit. All of our testers described themselves as possessing moderate to advanced technical skills.
                </p>
                <p className="mb-4">
                  For our usability testing, we worked as a team to craft protocols to capture important data for our study. Our protocols start with:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-1.5 mb-4">
                  <li>A recording and data use consent form.</li>
                  <li>A preamble to inform the participant of the purpose of this test and that they can leave at any time.</li>
                </ul>
                <p className="mb-4">We then move on to a basic questionnaire in which we ask the participant to:</p>
                <ul className="list-disc list-outside pl-6 space-y-1.5 mb-4">
                  <li>Describe their work experience.</li>
                  <li>Discuss the software they use for work.</li>
                  <li>Describe their level of technical proficiency.</li>
                </ul>
                <p className="mb-4">Next, one team member provided the participant with instructions for the test while another took notes. The tasks were:</p>
                <ol className="list-decimal list-outside pl-6 space-y-2 mb-4">
                  <li>Find the page containing the site tutorial.</li>
                  <li>Navigate to the interactive map of Michigan.</li>
                  <li>
                    Use this map to find specific pieces of data, such as:
                    <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                      <li>Locate Detroit on the map.</li>
                      <li>Find the rate of child poverty in Highland Park.</li>
                      <li>Find the number of young adults who were without healthcare in 2017.</li>
                    </ul>
                  </li>
                  <li>Find a specific existing geographic data set created by another user</li>
                  <li>Create a data set of their own using the interactive map.</li>
                  <li>Go to the methodology pages of the site to view the data sources.</li>
                </ol>
                <p className="mb-4">
                  Following the test, we asked them a series of follow-up questions. For this, we asked the participants to share their thoughts regarding their experience using this website, such as what they liked about the site, what they didn&apos;t like, and what, if anything, they would change about it.
                </p>
                <p className="mb-4">
                  When we conducted pilot testing of our protocols, we found many of our tasks are interdependent upon each other. If a user failed a task that involves them navigating to a certain page, they wouldn&apos;t be able to proceed with following tasks requiring them to be on that page. To prevent us from losing crucial data, if a participant failed to find a certain page, we would make a note, and then guide them to this page to allow the test to continue.
                </p>
                <p>
                  Tests were held over Zoom to make participation convenient. We had participants share their screens during their test and think aloud while completing tasks. Zoom&apos;s video recording and transcription features were paired with manual note-taking to capture as much data as possible.
                </p>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Findings ── */}
              <section id="findings" aria-labelledby="findings-heading">
                <h2 id="findings-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Findings</h2>
                <p className="mb-6">Our findings from reviewing our notes and data from our tests include:</p>

                <ol className="list-decimal list-outside pl-6 space-y-8">
                  <li>
                    <p className="mb-3">
                      Some participants expressed frustration over the design and layout of certain pages. They felt it made navigating through pages cumbersome:
                    </p>
                    <blockquote>
                      <p>&ldquo;Have to go to three different places on the screen, 2 different search bars, one button at the bottom. Prefer all data related to filtering in one area to find.&rdquo; (P1)</p>
                    </blockquote>
                    <blockquote>
                      <p>&ldquo;Big icons just jumping to different sections of the Detroit data page can be confusing.&rdquo; (P2)</p>
                    </blockquote>
                  </li>
                  <li>
                    <p className="mb-3">
                      Many testers were confused and somewhat overwhelmed by the homepage. They felt it was hard to navigate to other pages on the site from it and instead wished certain features on other pages were consolidated there.
                    </p>
                    <blockquote>
                      <p>&ldquo;where do I actually start?&rdquo; (P4)</p>
                    </blockquote>
                    <blockquote>
                      <p>&ldquo;Big icons just jumping to different sections of the Detroit data page can be confusing.&rdquo; (P2)</p>
                    </blockquote>
                    <p>P4 explicitly wanted the interactive map on the first page while P2 wanted the tutorial there as well.</p>
                  </li>
                  <li>
                    <p className="mb-3">
                      Certain tools and features were hard for users to find and operate. Participant 1 felt the &ldquo;Over Time&rdquo; button on the map/data page is difficult to locate.
                    </p>
                    <blockquote>
                      <p>(P1: &ldquo;Find the overtime button in 50 sec, find the data in 1 min and 10 sec.&rdquo;)</p>
                    </blockquote>
                    <p className="mt-3">
                      It took participant 5 longer than anticipated for him to find this feature as well. (P5: &ldquo;Notices over time button after 1 min&rdquo;) Several participants also struggled with creating their own geographic data sets, with participants 3 and 4 failing this task.
                    </p>
                  </li>
                  <li>
                    <p className="mb-3">
                      Several testers were confused by the language and wording used throughout the site. They were confused by the titles used to describe certain pages and tools. Participant 4 was confused by the title &ldquo;Custom profiles&rdquo; for the page to view data sets made by other users. Participant 5 was confused by the title for the page &ldquo;Explore by topic&rdquo; because
                    </p>
                    <blockquote>
                      <p>&ldquo;it&apos;s not exploring by topic but exploring the context of the data.&rdquo; (P5)</p>
                    </blockquote>
                    <p>Participant 4 was confused by the title &ldquo;Additional resources&rdquo; and expected it to lead to the tutorial page. (P4)</p>
                  </li>
                  <li>
                    <p>
                      Participants 5, 4, and 1 struggled with navigating through the data sets listed below the interactive map of Michigan. It took them longer than expected to scroll through all of the data displayed to find what they were looking for. It wasn&apos;t apparent to them that there is a drop-down menu that allows them to navigate faster.
                    </p>
                  </li>
                </ol>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Recommendations ── */}
              <section id="recommendations" aria-labelledby="rec-heading">
                <h2 id="rec-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Recommendations</h2>
                <p className="mb-6">Based on these findings, we will present Data Driven Detroit with the following recommendations:</p>

                <ol className="list-decimal list-outside pl-6 space-y-8">
                  <li>
                    <p className="mb-2"><strong className="text-[#f1f5f9]">Move the interactive map of Detroit to the homepage.</strong> Several participants were dissatisfied with the content on the homepage and felt it was difficult to navigate from it to important features on the site. This can be remedied by moving the map to the homepage. This aligns with our previous findings that featuring such content here is industry standard, as shown by the homepage from another analytics site we previously analyzed.</p>
                    <Image
                      src="/images/detroit-child-usability/social-explorer.webp"
                      alt="Social Explorer analytics website homepage showing an interactive map of the United States as its primary feature."
                      className="w-full rounded-lg border border-[#1e2737] my-4"
                      loading="lazy"
                    
                    width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                    />
                    <p>Below is a mockup of how the site&apos;s homepage could potentially look if this suggestion is implemented.</p>
                    <Image
                      src="/images/detroit-child-usability/suggestion1.webp"
                      alt="Mockup of the State of the Detroit Child homepage redesign with an embedded interactive map of Detroit prominently featured."
                      className="w-full rounded-lg border border-[#1e2737] my-4"
                      loading="lazy"
                    
                    width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                    />
                  </li>
                  <li>
                    <p><strong className="text-[#f1f5f9]">Putting a link to the &ldquo;Site Tutorial&rdquo; in the hamburger menu.</strong> Participants 3 and 5 attempted to find it there during their tests. Doing so would make this page more accessible and assist users with figuring out how to use site tools more effectively.</p>
                  </li>
                  <li>
                    <p className="mb-2"><strong className="text-[#f1f5f9]">On the Data/Map page, make the &ldquo;Jump to a section&rdquo; dropdown sticky on top.</strong> Instead of having users scroll through all of the data, sticky links would allow them to efficiently find whatever they&apos;re looking for as shown below.</p>
                    <Image
                      src="/images/detroit-child-usability/suggestion3.webp"
                      alt="Screenshot showing the 'Jump to a section' dropdown in its default position at the top of the data page before the user scrolls."
                      className="w-full rounded-lg border border-[#1e2737] my-4"
                      loading="lazy"
                    
                    width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="text-sm text-[#94a3b8] italic">(&ldquo;Jump to a section&rdquo; can remain in the same location if the user does not scroll down)</p>
                    <Image
                      src="/images/detroit-child-usability/suggestion3.1.webp"
                      alt="Screenshot showing the 'Jump to a section' dropdown fixed to the top of the viewport after the user has scrolled down the page."
                      className="w-full rounded-lg border border-[#1e2737] my-4"
                      loading="lazy"
                    
                    width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="text-sm text-[#94a3b8] italic">(&ldquo;Jump to a section&rdquo; becomes sticky on top after the user scrolls down)</p>
                  </li>
                  <li>
                    <p><strong className="text-[#f1f5f9]">Use more descriptive language for the titles of pages and tools.</strong> Renaming these features and pages to reflect their actual content will help users navigate the site and use its tools more effectively. (Such as Rename &ldquo;Topics&rdquo; to &ldquo;Methodology&rdquo;, rename &ldquo;Custom profiles&rdquo; to &ldquo;User Created Profiles.&rdquo;)</p>
                  </li>
                  <li>
                    <p><strong className="text-[#f1f5f9]">Group filtering buttons together.</strong> Put the &ldquo;One year / Over Time&rdquo; buttons grouped with the &ldquo;Jump to a section&rdquo; buttons to make navigation through data easier. Please the screenshot below for a mockup of how this might look:</p>
                  </li>
                </ol>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Discussion ── */}
              <section id="discussion" aria-labelledby="discussion-heading">
                <h2 id="discussion-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Discussion</h2>
                <p>
                  One of the major shortcomings of this study was the technical capabilities of the participants involved. As previously mentioned, all of our testers were very technically savvy individuals. This might skew the data from this study since the typical user of this site might not possess such technical skills. As such, the next steps for Data Driven Detroit would be for them to conduct this test themselves, but with individuals they believe are more indicative of the average user of their site.
                </p>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Task Performance Data ── */}
              <section id="task-data" aria-labelledby="task-heading">
                <h2 id="task-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Task Performance Data</h2>
                <div className="overflow-x-auto">
                  <table aria-label="Task completion results for 5 participants across 7 tasks">
                    <thead>
                      <tr>
                        <th scope="col">Task Number</th>
                        <th scope="col">Participant 1</th>
                        <th scope="col">Participant 2</th>
                        <th scope="col">Participant 3</th>
                        <th scope="col">Participant 4</th>
                        <th scope="col">Participant 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><span className="tag-pass">Pass</span><br />15 sec</td>
                        <td><span className="tag-pass">Pass</span><br />11 sec</td>
                        <td><span className="tag-pass">Pass</span><br />28 sec</td>
                        <td><span className="tag-pass">Pass</span><br />31 sec</td>
                        <td><span className="tag-pass">Pass</span><br />5 sec</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><span className="tag-pass">Pass</span><br />30 sec</td>
                        <td><span className="tag-pass">Pass</span><br />1 min</td>
                        <td><span className="tag-pass">Pass</span><br />55 sec</td>
                        <td><span className="tag-pass">Pass</span><br />23 sec</td>
                        <td><span className="tag-pass">Pass</span><br />20 sec</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><span className="tag-pass">Pass</span><br />2 min 25 sec</td>
                        <td><span className="tag-pass">Pass</span><br />45 sec</td>
                        <td><span className="tag-pass">Pass</span><br />56 sec</td>
                        <td><span className="tag-pass">Pass</span><br />42 sec</td>
                        <td><span className="tag-pass">Pass</span><br />1 min 30 sec</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><span className="tag-pass">Pass</span><br />1 min 10 sec</td>
                        <td><span className="tag-pass">Pass</span><br />55 sec</td>
                        <td><span className="tag-pass">Pass</span><br />30 sec</td>
                        <td><span className="tag-pass">Pass</span><br />2 min 3 sec</td>
                        <td><span className="tag-pass">Pass</span><br />1 min 30 sec</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><span className="tag-pass">Pass</span><br />40 sec</td>
                        <td><span className="tag-pass">Pass</span><br />40 sec</td>
                        <td><span className="tag-pass">Pass</span><br />33 sec</td>
                        <td><span className="tag-fail">Fail</span><br />2 min 21 sec</td>
                        <td><span className="tag-pass">Pass</span><br />1 min 24 sec</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td><span className="tag-fail">Fail</span><br />50 sec</td>
                        <td><span className="tag-pass">Pass</span><br />5 min 50 sec</td>
                        <td><span className="tag-pass">Pass</span><br />2 min 30 sec</td>
                        <td><span className="tag-pass">Pass</span><br />46 sec</td>
                        <td><span className="tag-pass">Pass</span><br />4 min 34 sec</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td><span className="tag-pass">Pass</span><br />10 sec</td>
                        <td><span className="tag-pass">Pass</span><br />30 sec</td>
                        <td><span className="tag-pass">Pass</span><br />1 min 30 sec</td>
                        <td><span className="tag-fail">Fail</span><br />2 min 10 sec</td>
                        <td><span className="tag-pass">Pass</span><br />30 sec</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Contribution Statement ── */}
              <section id="contribution" aria-labelledby="contrib-heading">
                <h2 id="contrib-heading" className="text-xl font-bold text-[#f1f5f9] mb-4">Contribution Statement</h2>
                <p className="text-[#94a3b8] mb-4">
                  <strong className="text-[#cbd5e1]">Harry Gu:</strong> I primarily analyzed usability testing scripts and wrote the findings and recommendation section based on findings from participant quotes. I modified some of the recommendations section. I also wrote the discussion section. I participated in two usability tests.
                </p>
                <p className="text-[#94a3b8] mb-4">
                  <strong className="text-[#cbd5e1]">Nathan Schuman:</strong> Recruited 4 out of 5 of our testers. Administered our first test and took notes during the second. Wrote the initial rough draft of this report and participated with my teammates in editing it.
                </p>
                <p className="text-[#94a3b8] mb-4">
                  <strong className="text-[#cbd5e1]">Mikang Moon:</strong> Participated in two usability testing sessions. I helped write the recommendations section. I created presentation slides and recorded presentation.
                </p>
                <p className="text-[#94a3b8] mb-4">
                  <strong className="text-[#cbd5e1]">Louise Depa:</strong> I participated in two usability testing sessions (one as a notetaker, and another as the administrator), helped edit the document, and created the appendices section.
                </p>
                <p className="text-[#94a3b8] mb-6">
                  <strong className="text-[#cbd5e1]">Zhitai Jin:</strong> I participated in three usability testing sessions and helped write the recommendations section.
                </p>
                <p className="text-[#94a3b8]">AI was not used in the creation of this report.</p>
              </section>

              </article>
            </main>
            <TableOfContents items={detroitTocItems} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
