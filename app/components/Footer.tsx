export default function Footer() {
  return (
    <footer className="bg-LightGray font-[urbanist]">
      <div className="container flex flex-col md:flex-row relative py-20 px-5 mx-auto text-gray-600 leading-7">
        <div className="basis-2/3 py-10 md:px-10 md:py-0">
          <h2 className="text-gray-900 font-[urbanist] font-extrabold text-lg leading-8">About Me</h2>
          <p className="text-base font-semibold">
            I&apos;m Harry Gu, a designer who codes. I start by understanding users in their environment, then translate those insights into scalable systems: design tokens, component libraries, and documentation that make accessibility the default.{" "}
            I prefer pragmatic simplicity. If two solutions achieve the same outcome, I choose the one that&apos;s easier to maintain, document, and scale. At Kosmos, stakeholders wanted a custom booking system. I proposed a lightweight calendar widget deep-linked to their existing engine: same UX, 80% less scope.
            BA in Graphic Design at Calvin University, MS in Information at University of Michigan - Ann Arbor. Fluent in English and Mandarin.
          </p>
        </div>
        <div className="basis-1/3 py-10 md:px-10 md:py-0">
          <h2 className="text-gray-900 font-[urbanist] font-extrabold text-lg leading-8">Contact Me</h2>
          <a
            href="mailto:tuharrygu@gmail.com"
            className="flex flex-row justify-center items-center rounded-2xl w-[200px] px-5 py-4 my-2 bg-[#1E2128] hover:bg-[#222] shadow-md max-w-xs"
          >
            <div className="flex items-center mr-4">
              <img src="/icons/mail.png" className="mr-0 w-6 h-6 object-contain" alt="icon" />
              <span className="ml-2.5 text-white flex-shrink-1 font-semibold">Email Me</span>
            </div>
          </a>
          <p className="my-2">
            <a className="hover:text-themeRed" href="https://www.linkedin.com/in/harrygu-ux/">
              <img className="inline h-8 m-[2px]" src="/icons/linkedin.svg" alt="LinkedIn Profile" />
            </a>
            <a className="hover:text-themeRed" href="https://github.com/harryg02">
              <img className="inline h-8 m-[2px]" src="/icons/github.svg" alt="GitHub Profile" />
            </a>
          </p>
        </div>
      </div>
      <div className="w-full text-gray-600 p-2 text-center font-semibold">
        <p>© 2025 by harrygu.art. Built with Next.js · Hosted on GitHub Pages</p>
      </div>
    </footer>
  );
}
