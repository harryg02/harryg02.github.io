import Link from "next/link";

interface NavbarProps {
  activePage?: "home" | "projects" | "archive";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  return (
    <nav className="font-[urbanist] font-extrabold fixed top-5 inset-x-0 z-[701] flex justify-center pointer-events-none">
      <div id="nav-border" className="pointer-events-auto p-0.5 rounded-xl" style={{background: "linear-gradient(to bottom, rgba(204,212,227,0.06), rgba(204,212,227,0.22))"}}>
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] bg-[#0d0f14]/80 backdrop-blur-md text-xs text-gray-400 sm:gap-4 sm:px-5 sm:text-sm">
        <Link href="/" className="shrink-0">
          <img className="inline h-5 opacity-50 sm:h-6" src="/icons/logo-9-21-colored.svg" alt="Harry Gu Logo" />
        </Link>
        <span aria-hidden className="w-px h-4 bg-[rgba(204,212,227,0.2)]" />
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/" id="nav-1" className="hover:text-themeRed transition-colors" aria-current={activePage === "home" ? "page" : undefined}>Home</Link>
          <Link href="/#projects" id="nav-3" className="hover:text-themeRed transition-colors" aria-current={activePage === "projects" ? "page" : undefined}>Projects</Link>
          <Link href="/archive" id="nav-2" className="hover:text-themeRed transition-colors" aria-current={activePage === "archive" ? "page" : undefined}>Archive</Link>
        </div>
        <span aria-hidden className="w-px h-4 bg-[rgba(204,212,227,0.2)]" />
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/harrygu-ux/">
            <img className="inline h-4 sm:h-5" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile" />
          </a>
          <a href="https://github.com/harryg02">
            <img className="inline h-4 sm:h-5" src="/icons/github-hero.svg" alt="GitHub Profile" />
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
}
