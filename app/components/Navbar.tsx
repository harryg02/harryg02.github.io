"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const borderRef = useRef<HTMLDivElement>(null);

  const linkClass = (href: string) =>
    `transition-colors hover:text-themeRed ${pathname === href ? "text-[#CCD4E3]" : ""}`;

  useEffect(() => {
    if (pathname !== "/") return;
    const border = borderRef.current;

    const onScroll = () => {
      if (border) {
        const t = Math.min(window.pageYOffset / 300, 1);
        border.style.background = `linear-gradient(to bottom, rgba(204,212,227,${(0.06 + t * 0.16).toFixed(3)}), rgba(204,212,227,${(0.22 - t * 0.16).toFixed(3)}))`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <nav id="main-nav" className="font-[urbanist] font-extrabold fixed top-5 inset-x-0 z-701 flex justify-center pointer-events-none">
      <div ref={borderRef} id="nav-border" className="pointer-events-auto p-0.5 rounded-xl" style={{background: "linear-gradient(to bottom, rgba(204,212,227,0.06), rgba(204,212,227,0.22))"}}>
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] bg-[#0d0f14]/80 backdrop-blur-md text-xs text-gray-400 sm:gap-4 sm:px-5 sm:text-sm">
        <Link href="/" className="shrink-0">
          <img className="inline h-5 opacity-50 sm:h-6" src="/icons/logo-9-21-colored.svg" alt="Harry Gu Logo" />
        </Link>
        <span aria-hidden className="w-px h-4 bg-[rgba(204,212,227,0.2)]" />
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
          <Link href="/#projects" className="transition-colors hover:text-themeRed">Projects</Link>
          <Link href="/archive" className={linkClass("/archive")} aria-current={pathname === "/archive" ? "page" : undefined}>Archive</Link>
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
