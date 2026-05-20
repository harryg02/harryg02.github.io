import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Measuring LLM-Powered Screen Reader Efficiency — Harry Gu",
  description:
    "HCI research proposal investigating how blind and low vision users access complex data visualizations using LLM-powered conversational screen readers versus traditional screen readers.",
};

export default function HCIResearch() {
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
        .paper abbr {
          text-decoration: underline dotted;
          cursor: help;
        }
        .paper .section-num { color: #7eb8f7; }
        .paper cite { font-style: italic; }
        @media print {
          .paper { color: #000; background: #fff; }
          .paper h1, .paper h2, .paper h3 { color: #000; }
          .paper blockquote { background: #f8f8f8; border-color: #aaa; color: #333; }
        }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#7eb8f7] focus:text-[#0a0c10] focus:px-4 focus:py-2 focus:rounded focus:font-bold"
      >
        Skip to main content
      </a>

      <div className="paper min-h-screen">
        {/* ── Header ── */}
        <header className="border-b border-[#1e2737] pt-28 pb-10">
          <div className="max-w-3xl mx-auto px-6">

            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7eb8f7] border border-[#7eb8f7]/30 px-3 py-1 rounded-full mb-6">
              HCI Research Proposal
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4 leading-tight">
              Measuring <abbr title="Large Language Model">LLM</abbr>-Powered Conversational Screen Reader Efficiency for Accessing Complex Visualizations
            </h1>

            <p className="text-[#94a3b8]">
              <span className="text-[#cbd5e1] font-medium">Harry (Tu) Gu</span>
              {" · "}
              <a href="mailto:harrygu@umich.edu">harrygu@umich.edu</a>
            </p>

            <div className="mt-8">
              <a
                href="/hci-research.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2737] hover:bg-[#273549] text-[#7eb8f7] rounded-lg text-sm font-medium transition-colors no-underline border border-[#334155]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* ── TOC ── */}
          <nav aria-label="Table of contents" className="mb-16 p-6 bg-[#111827] rounded-xl border border-[#1e2737]">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-4">Contents</h2>
            <ol className="space-y-1.5 text-[#7eb8f7] text-sm" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="#introduction">Introduction</a></li>
              <li>
                <a href="#section-1">1. The Deficit of Traditional Alt-Text and the Demand for Agency</a>
                <ol className="mt-1 ml-4 space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li><a href="#section-1-1">1.1 User Agency and Control</a></li>
                  <li><a href="#section-1-2">1.2 Information Needs by Context</a></li>
                </ol>
              </li>
              <li>
                <a href="#section-2">2. LLM Bias, Misrepresentation, and Hallucination</a>
                <ol className="mt-1 ml-4 space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li><a href="#section-2-1">2.1 Bias, Stereotypes, and Misrepresentations</a></li>
                  <li><a href="#section-2-2">2.2 Hallucination, User Frustration, and Trust</a></li>
                </ol>
              </li>
              <li>
                <a href="#section-3">3. Study Design</a>
                <ol className="mt-1 ml-4 space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li><a href="#section-3-2">3.2 Research Question</a></li>
                  <li><a href="#section-3-3">3.3 Co-Design</a></li>
                  <li><a href="#section-3-4">3.4 Recruitment</a></li>
                  <li><a href="#section-3-5">3.5 Materials and Tools</a></li>
                  <li><a href="#section-3-6">3.6 Procedure</a></li>
                  <li><a href="#section-3-7">3.7 Data Collection and Analysis</a></li>
                </ol>
              </li>
              <li><a href="#references">References</a></li>
              <li><a href="#ai-statement">AI Statement</a></li>
            </ol>
          </nav>

          <main id="main-content">
            <article>

              {/* ── Introduction ── */}
              <section id="introduction" aria-labelledby="intro-heading">
                <h2 id="intro-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">Introduction</h2>
                <p className="mb-4">
                  As Artificial Intelligence (<abbr title="Artificial Intelligence">AI</abbr>), such as Large Language Models (<abbr title="Large Language Models">LLMs</abbr>), advances in recent years, Blind and Low Vision (<abbr title="Blind and Low Vision">BLV</abbr>) users have started to use LLMs for varied use cases — retrieving information, programming, creative writing, and more (Adnin et al. 2024). BLV users also leverage LLMs to overcome accessibility barriers to inaccessible information, such as high-level structure and details in both digital and physical documents and images (Tang et al. 2025).
                </p>
                <p className="mb-4">
                  LLMs have shown benefits: removing the social pressure of asking people (Penuela et al. 2024) and increasing task performance (Kodandaram et al. 2024). An LLM-powered conversational screen reader can increase user agency and allow users to access detailed information from images, which traditional alt text does not provide (Phutane et al. 2023).
                </p>
                <p className="mb-4">
                  However, BLV users also face significant challenges. LLMs can hallucinate by producing wrong information (Adnin et al. 2024; Tang et al. 2025), and it is hard for BLV users to verify such content (Tang et al. 2025). This forces BLV users to employ verification strategies: asking a sighted person, querying multiple LLMs, or using Google Search (Adnin et al. 2024; Tang et al. 2025; Penuela et al. 2026).
                </p>
                <p className="mb-4">
                  This review synthesizes current challenges and opportunities that LLMs bring to BLV users in accessing information from complex visualizations and images. When BLV users use traditional screen readers to access complex data visualizations, they encounter cognitive overload and constant hypothesis testing (Zong et al. 2022). An empirical usability evaluation of LLM-powered conversational screen readers in this context is needed to evaluate potential benefits and drawbacks.
                </p>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Section 1 ── */}
              <section id="section-1" aria-labelledby="s1-heading">
                <h2 id="s1-heading" className="text-2xl font-bold text-[#f1f5f9] mb-8">
                  <span className="section-num">1.</span> The Deficit of Traditional Alt-Text and the Demand for Agency
                </h2>

                <section id="section-1-1" aria-labelledby="s1-1-heading">
                  <h3 id="s1-1-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">1.1</span> The Need for User Agency and Control
                  </h3>
                  <p className="mb-4">
                    BLV users have diverse habits of accessing data from images and visualizations. They want agency to control what information they access — rather than accepting an author's default (Thompson et al. 2023). Some start with high-level summaries; others dig deep for their own conclusions (Thompson et al. 2023). Traditional static alt texts cannot satisfy this range of needs (Jung et al. 2022).
                  </p>
                  <blockquote>
                    <p>"In one instance [I might want] the background and in another instance it might be a facial expression. Who knows? How would it know what I want?"</p>
                    <footer>— Participant, <cite>Penuela et al. (2024)</cite></footer>
                  </blockquote>
                  <p className="mb-4">
                    As web content has become "scattered, visual, and dynamic," screen readers have not kept pace (Phutane et al. 2023). A hypothetical conversational screen reader lets users "dig into" details beyond alt text — satisfying their need for agency over image information.
                  </p>
                  <blockquote>
                    <p>"I would love to have all that information" and "this screen reader sounds like I wouldn't be left out."</p>
                    <footer>— BLV participant on a conversational screen reader concept, <cite>Phutane et al. (2023)</cite></footer>
                  </blockquote>
                  <p className="mb-4">
                    Recent products enabling LLM-powered conversational interfaces include TalkBack 16.0 (Al-Heeti, 2025) and <abbr title="NonVisual Desktop Access">NVDA</abbr> with the <a href="https://github.com/nvaccess/AI-content-describer" rel="external noopener noreferrer">AI-Content Describer plugin</a> (Temm, 2025). However, how the LLM-assisted interface actually performs for information seeking on complex visualizations remains untested (Phutane et al. 2023).
                  </p>
                </section>

                <section id="section-1-2" aria-labelledby="s1-2-heading" className="mt-10">
                  <h3 id="s1-2-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">1.2</span> Information Needs by Context
                  </h3>
                  <p className="mb-4">
                    What BLV users want from an image description depends on the scenario — location, use case, and goal (Kreiss et al. 2022; Stangl et al. 2021). When purchasing a gift, users want focus on the primary object; on a news site about work conditions, they want focus on people's activities (Stangl et al. 2021). For data visualizations, task type shapes navigation strategy entirely (Zong et al. 2022).
                  </p>
                  <p className="mb-4">
                    Both Stangl et al. (2021) and Jiang et al. (2024) found that a "one-size-fits-all" model fails users. Current audio description guidelines for video and metric systems for image descriptions are not context-dependent — what constitutes a useful description "is still an underexplored question" (Kreiss et al. 2022).
                  </p>
                </section>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Section 2 ── */}
              <section id="section-2" aria-labelledby="s2-heading">
                <h2 id="s2-heading" className="text-2xl font-bold text-[#f1f5f9] mb-8">
                  <span className="section-num">2.</span> LLM Bias, Misrepresentation, and Hallucination vs. Information Access
                </h2>

                <section id="section-2-1" aria-labelledby="s2-1-heading">
                  <h3 id="s2-1-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">2.1</span> Bias, Stereotypes, and Misrepresentations
                  </h3>
                  <p className="mb-4">
                    LLM outputs can contain stereotypes and misrepresentations toward people with disabilities (Adnin et al. 2024). LLMs "repeatedly present reductive archetypes" such as characterizing blind people as "courageous and resilient" (Mack et al. 2024). AI-generated images of people with disabilities disproportionately overrepresent assistive technology and portray disabled subjects as sad or helpless (Mack et al. 2024).
                  </p>
                  <p className="mb-4">
                    Meanwhile, BLV users desire information like face, gender, and skin color from images (Stangl et al. 2021), but LLMs sometimes refuse to process such information (Tang et al. 2025) — creating a tension between bias avoidance and meeting user needs. No AI prototype describing appearance characteristics on race, gender, or disability has been tested with actual users (Bennett et al. 2021).
                  </p>
                </section>

                <section id="section-2-2" aria-labelledby="s2-2-heading" className="mt-10">
                  <h3 id="s2-2-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">2.2</span> Hallucination, User Frustration, and Trust
                  </h3>
                  <p className="mb-4">
                    In a GPT-4o-powered visual access application, 22.2% of responses contained false information, and 34.6% of follow-up responses contained one or more hallucinations (Penuela et al. 2026) — even as users rated trust highly (mean 3.76/5) and satisfaction highly (mean 4.13/5). This gap between perceived and actual accuracy poses a critical accessibility risk.
                  </p>
                  <p className="mb-4">
                    When encountering inaccurate information, BLV users employ verification strategies: search engines, visiting related sites, asking for sighted assistance, switching LLM models, or asking the LLM multiple follow-up questions (Adnin et al. 2024; Tang et al. 2025; Penuela et al. 2026).
                  </p>
                  <p className="mb-4">
                    Additionally, many LLM web interfaces are not screen reader accessible — users must navigate excessive keyboard commands, face inconsistent heading structures, and encounter inaccessible controls (Adnin et al. 2024; Leporini et al. 2025). Despite these harms, LLMs significantly increase information access speed (Kodandaram et al. 2024). What remains unexplored is "an ethical and productive way forward to combat GenAI-related harms without minimizing the progress in accessibility" (Adnin et al. 2024).
                  </p>
                </section>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── Section 3 ── */}
              <section id="section-3" aria-labelledby="s3-heading">
                <h2 id="s3-heading" className="text-2xl font-bold text-[#f1f5f9] mb-8">
                  <span className="section-num">3.</span> Study Design
                </h2>

                <section id="section-3-2" aria-labelledby="s3-2-heading">
                  <h3 id="s3-2-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.2</span> Research Question
                  </h3>
                  <blockquote>
                    <p>Do BLV users using a conversational screen reader (Group B) gain more complete information and experience a significant reduction in task completion time and information loss when accessing complex data visualizations, compared to users utilizing standard screen reader navigation (Group A), without sacrificing significant data accuracy?</p>
                  </blockquote>
                  <p>This study proposes an A/B test between Group A (standard NVDA) and Group B (NVDA with the AI Content Describer plugin).</p>
                </section>

                <section id="section-3-3" aria-labelledby="s3-3-heading" className="mt-10">
                  <h3 id="s3-3-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.3</span> Co-Design
                  </h3>
                  <p>
                    The study begins by recruiting BLV researchers to co-lead. This reflects the disability justice principle of "Leadership of the most impacted" (Berne et al. 2018) — "Nothing about us, without us" — to avoid solving imaginary problems or unintentionally creating harm (Zong et al. 2022).
                  </p>
                </section>

                <section id="section-3-4" aria-labelledby="s3-4-heading" className="mt-10">
                  <h3 id="s3-4-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.4</span> Recruitment
                  </h3>
                  <p className="mb-4">
                    We plan to recruit 20 BLV users proficient with NVDA (10 per group). This aligns with established methodological standards: N=10–11 in comparable screen reader studies (Thompson et al. 2023; Kodandaram et al. 2024), and Hwang and Salvendy's (2010) finding that 10 evaluators discover 80% of usability problems.
                  </p>
                  <p>
                    To reflect the disability justice principle of "Recognizing wholeness" (Berne et al. 2018), we proactively ask participants about their needs (transportation, devices) without using the word "accommodation," treating them as complete humans rather than test subjects.
                  </p>
                </section>

                <section id="section-3-5" aria-labelledby="s3-5-heading" className="mt-10">
                  <h3 id="s3-5-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.5</span> Materials and Tools
                  </h3>
                  <p className="mb-4">
                    The only variable between groups is whether the screen reader is conversational. Group A uses standard NVDA; Group B uses NVDA with the <a href="https://github.com/nvaccess/AI-content-describer" rel="external noopener noreferrer">AI Content Describer plugin</a> and GPT-4 integration (Temm, 2025). We deliberately avoid building a custom application — using existing free tools reflects the disability justice principle of "Sustainability" (Berne et al. 2018).
                  </p>
                  <p>
                    Both groups access the same complex visualization from an academic or government dataset, strictly compliant with the <a href="https://chartability.fizz.studio/" rel="external noopener noreferrer">Chartability Guidelines</a> (Elavsky 2022), including a high-level alt text summary and an accessible HTML table.
                  </p>
                </section>

                <section id="section-3-6" aria-labelledby="s3-6-heading" className="mt-10">
                  <h3 id="s3-6-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.6</span> Procedure
                  </h3>
                  <ol className="list-decimal list-outside pl-6 space-y-4">
                    <li>Researchers frame the session as testing the product, not the participant. Group B receives a tutorial on the AI Content Describer plugin. All participants are encouraged to think aloud.</li>
                    <li>Participants locate specific data points from the visualization (e.g., "Find the nearest peak," "Find where these two lines intersect").</li>
                    <li>Participants freely explore the visualization and narrate what data they encounter — measuring support for both high-level comprehension and deep exploration without cognitive overload.</li>
                    <li>A post-task survey measures perceived trustworthiness, satisfaction, agency, and control on a 5-point Likert scale. Group B additionally rates their baseline experience with traditional NVDA retrospectively, enabling a direct within-group comparison.</li>
                  </ol>
                </section>

                <section id="section-3-7" aria-labelledby="s3-7-heading" className="mt-10">
                  <h3 id="s3-7-heading" className="text-xl font-semibold text-[#f1f5f9] mb-4">
                    <span className="section-num">3.7</span> Data Collection and Analysis
                  </h3>

                  <h4 className="text-base font-semibold text-[#f1f5f9] mt-5 mb-3">Quantitative Measures</h4>
                  <ul className="list-disc list-outside pl-6 space-y-3 mb-6">
                    <li><strong>Time on task</strong> — seconds from start to completion or abandonment</li>
                    <li><strong>Accuracy rate</strong> — correct data points reported ÷ total data points reported</li>
                    <li><strong>Information Loss Rate</strong> — volume of missed data points versus the baseline</li>
                    <li><strong>Survey Scales</strong> — 5-point Likert scores for trustworthiness, satisfaction, user agency, and control</li>
                  </ul>

                  <h4 className="text-base font-semibold text-[#f1f5f9] mb-3">Qualitative Measures</h4>
                  <ul className="list-disc list-outside pl-6 space-y-3">
                    <li>Think-aloud behavior analysis to identify frustration, cognitive overload, or hypothesis testing</li>
                    <li>Open-ended survey responses for emerging usage patterns</li>
                    <li>Thematic analysis applied across all qualitative data</li>
                  </ul>
                </section>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── References ── */}
              <section id="references" aria-labelledby="ref-heading">
                <h2 id="ref-heading" className="text-2xl font-bold text-[#f1f5f9] mb-5">References</h2>
                <ol className="space-y-3 text-[#94a3b8] text-[0.9rem] list-decimal list-outside pl-5">
                  <li>Adnin, R., &amp; Das, M. (2024). "I look at it as the king of knowledge": How blind people use and understand generative AI tools. <cite>Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility</cite>, Article 38, 1–14.</li>
                  <li>Al-Heeti, A. (2025, May 15). Gemini can now answer questions about images in Android's TalkBack screen reader. <cite>CNET</cite>.</li>
                  <li>Autistic Self Advocacy Network. (2025). ASAN says no generative AI in plain language.</li>
                  <li>Bennett, C. L., et al. (2021). "It's complicated": Negotiating accessibility and (mis)representation in image descriptions of race, gender, and disability. <cite>Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems</cite>, Article 375, 1–19.</li>
                  <li>Berne, P., et al. (2018). Ten principles of disability justice. <cite>WSQ: Women's Studies Quarterly</cite>, 46(1-2), 227–230.</li>
                  <li>Elad, B., &amp; Lee, R. (2026). LLM hallucination statistics 2026: Hidden risks now.</li>
                  <li>Elavsky, F. (2022). <cite>The Chartability Workbook</cite>.</li>
                  <li>Equal Entry. (2023). AI for accessibility: Opportunities and challenges.</li>
                  <li>Hwang, W., &amp; Salvendy, G. (2010). Number of people required for usability evaluation: The 10±2 rule. <cite>Communications of the ACM</cite>, 53(5), 130–133.</li>
                  <li>Jiang, L., et al. (2024). "It's kind of context dependent": Understanding blind and low vision people's video accessibility preferences. <cite>Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems</cite>, Article 897, 1–20.</li>
                  <li>Jung, C., et al. (2022). Communicating visualizations without visuals: Investigation of visualization alternative text for people with visual impairments. <cite>IEEE Transactions on Visualization and Computer Graphics</cite>, 28(1), 1095–1105.</li>
                  <li>Kodandaram, S. R., et al. (2024). Enabling uniform computer interaction experience for blind users through large language models. <cite>Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility</cite>, Article 73, 1–14.</li>
                  <li>Kreiss, E., et al. (2022). Context matters for image descriptions for accessibility: Challenges for referenceless evaluation metrics. <cite>arXiv</cite>.</li>
                  <li>Leporini, B., et al. (2025). A preliminary evaluation of generative AI tools for blind users: Usability and screen reader interaction. <cite>Conference on Inclusive Education and Accessibility</cite>.</li>
                  <li>Mack, K. A., et al. (2024). "They only care to show us the wheelchair": Disability representation in text-to-image AI models. <cite>Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems</cite>, Article 288, 1–23.</li>
                  <li>Penuela, R. E., et al. (2024). Investigating use cases of AI-powered scene description applications for blind and low vision people. <cite>Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems</cite>, Article 901, 1–21.</li>
                  <li>Penuela, R. E., et al. (2026). How multimodal large language models support access to visual information: A diary study with blind and low vision people. <cite>arXiv</cite>.</li>
                  <li>Phutane, M., et al. (2023). Speaking with my screen reader: Using audio fictions to explore conversational access to interfaces. <cite>Proceedings of the 25th International ACM SIGACCESS Conference on Computers and Accessibility</cite>, Article 53, 1–18.</li>
                  <li>Stangl, A., et al. (2021). Going beyond one-size-fits-all image descriptions. <cite>Proceedings of the 23rd International ACM SIGACCESS Conference on Computers and Accessibility</cite>, Article 16, 1–15.</li>
                  <li>Tang, X., et al. (2025). Everyday uncertainty: How blind people use GenAI tools for information access. <cite>Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems</cite>, Article 63, 1–17.</li>
                  <li>Temm, C. (2025). AI-content-describer [Computer software]. GitHub.</li>
                  <li>Thompson, J. R., et al. (2023). Chart reader: Accessible visualization experiences designed with screen reader users. <cite>Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems</cite>, Article 802, 1–18.</li>
                  <li>Zong, J., et al. (2022). Rich screen reader experiences for accessible data visualization. <cite>Computer Graphics Forum</cite>.</li>
                </ol>
              </section>

              <hr className="border-[#1e2737] my-12" />

              {/* ── AI Statement ── */}
              <section id="ai-statement" aria-labelledby="ai-heading">
                <h2 id="ai-heading" className="text-xl font-bold text-[#f1f5f9] mb-3">AI Statement</h2>
                <p className="text-[#94a3b8] text-sm">
                  Claude Opus 4.6 and reasoning, and Gemini 3 Pro were used to aid in planning the assignment, structuring writing, finding relevant research papers, suggesting grammar improvements, and identifying gaps. All readings, comprehension, synthesis, and writing were done by the author.
                </p>
              </section>

            </article>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
