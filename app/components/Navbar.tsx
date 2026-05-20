import Link from "next/link";
import Script from "next/script";

interface NavbarProps {
  activePage?: "home" | "projects" | "archive";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  return (
    <div className="font-[urbanist] font-extrabold">
      <nav className="fixed top-5 inset-x-0 z-[701] flex justify-center pointer-events-none">
        <div id="nav-border" className="pointer-events-auto p-0.5 rounded-xl" style={{background: "linear-gradient(to bottom, rgba(204,212,227,0.06), rgba(204,212,227,0.22))"}}>
        <div className="flex items-center gap-4 px-5 py-2.5 rounded-[10px] bg-[#0d0f14]/80 backdrop-blur-md text-sm text-gray-400">
          <Link href="/" className="shrink-0">
            <img className="inline h-6 opacity-50" src="/icons/logo-9-21-colored.svg" alt="Harry Gu Logo" />
          </Link>
          <span aria-hidden className="hidden md:block w-px h-4 bg-[rgba(204,212,227,0.2)]" />
          <div className="hidden md:flex items-center gap-5">
            <Link href="/" id="nav-1" className="hover:text-themeRed transition-colors" aria-current={activePage === "home" ? "page" : undefined}>Home</Link>
            <Link href="/#projects" id="nav-3" className="hover:text-themeRed transition-colors" aria-current={activePage === "projects" ? "page" : undefined}>Projects</Link>
            <Link href="/archive" id="nav-2" className="hover:text-themeRed transition-colors" aria-current={activePage === "archive" ? "page" : undefined}>Archive</Link>
          </div>
          <span aria-hidden className="hidden md:block w-px h-4 bg-[rgba(204,212,227,0.2)]" />
          <div className="hidden md:flex items-center gap-2">
            <a href="https://www.linkedin.com/in/harrygu-ux/">
              <img className="inline h-5" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile" />
            </a>
            <a href="https://github.com/harryg02">
              <img className="inline h-5" src="/icons/github-hero.svg" alt="GitHub Profile" />
            </a>
          </div>
          <button id="menu-btn" className="md:hidden hamburger focus:outline-none" aria-label="Toggle menu">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div id="menu" className="fixed w-[100vw] flex-col items-center hidden self-end py-16 space-y-10 font-bold text-darkGray bg-menu animate-open-menu text-base pt-36 -top-1" style={{ zIndex: 700 }}>
          <Link href="/" id="nav-hamburger-1" className="hover:text-themeRed" aria-current={activePage === "home" ? "page" : undefined}>Home</Link>
          <Link href="/#projects" id="nav-hamburger-3" className="hover:text-themeRed" aria-current={activePage === "projects" ? "page" : undefined}>Projects</Link>
          <Link href="/archive" id="nav-hamburger-2" className="hover:text-themeRed" aria-current={activePage === "archive" ? "page" : undefined}>Archive</Link>
          <div>
            <a href="https://www.linkedin.com/in/harrygu-ux/">
              <img className="inline h-8" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile" />
            </a>
            <a href="https://github.com/harryg02">
              <img className="inline h-8" src="/icons/github-hero.svg" alt="GitHub Profile" />
            </a>
          </div>
        </div>
      </div>

      <Script src="/js/script.js" strategy="afterInteractive" />
    </div>
  );
}
