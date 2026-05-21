import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-LightGray">
      <div className="container flex flex-col md:flex-row relative max-w-7xl py-20 px-5 mx-auto text-gray-600 leading-7">
        <div className="basis-2/3 py-10 md:px-10 md:py-0">
          <h2 className="text-gray-900 font-bold text-lg leading-8">About Me</h2>
          <p className="text-base">
            I&apos;m Harry Gu. I research, design, and code. I start by watching people doing things, then build solutions where accessibility is the default.{" "}
            I prefer pragmatic simplicity. If two solutions achieve the same outcome, I choose the one that&apos;s easier to maintain, document, and scale. At Kosmos, stakeholders wanted a custom booking system. I proposed a lightweight calendar widget deep-linked to their existing engine: same UX, 80% less scope.
            Graphic Design at Calvin University, UX & Dev at University of Michigan - Ann Arbor. Fluent in English and Mandarin.
          </p>
        </div>
        <div className="basis-1/3 py-10 md:px-10 md:py-0">
          <h2 className="text-gray-900 font-bold text-lg leading-8">Contact Me</h2>
          <div className="my-3">
            <PrimaryButton
              href="mailto:tuharrygu@gmail.com"
              icon={<Image src="/icons/mail.png" className="w-4 h-4 object-contain" alt=""  width={16} height={16} />}
            >
              Email Me
            </PrimaryButton>
          </div>
          <p className="my-2">
            <a className="hover:text-themeRed" href="https://www.linkedin.com/in/harrygu-ux/">
              <Image className="inline h-8 m-[2px]" src="/icons/linkedin.svg" alt="LinkedIn Profile"  width={32} height={32} style={{ width: 'auto' }} />
            </a>
            <a className="hover:text-themeRed" href="https://github.com/harryg02">
              <Image className="inline h-8 m-[2px]" src="/icons/github.svg" alt="GitHub Profile"  width={32} height={32} style={{ width: 'auto' }} />
            </a>
          </p>
        </div>
      </div>
      <div className="w-full text-gray-600 p-2 text-center">
        <p>© 2025 by harrygu.art. Built with Next.js · Hosted on GitHub Pages</p>
      </div>
    </footer>
  );
}
