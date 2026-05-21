"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const borderRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `transition-colors hover:text-themeRed ${pathname === href ? "text-[#CCD4E3]" : ""}`;

  useEffect(() => {
    if (pathname !== "/") return;
    const border = borderRef.current;

    const heroHeight = document.getElementById("hero")?.offsetHeight ?? 900;
    const phase1End = heroHeight / 3;

    const onScroll = () => {
      if (!border) return;
      const offset = window.pageYOffset;
      const t1 = Math.min(offset / phase1End, 1);
      const t2 = Math.min(Math.max(offset - heroHeight, 0) / 250, 1);
      const t = t1 - t2 * t1;
      border.style.background = `linear-gradient(to bottom, rgba(204,212,227,${(0.06 + t * 0.16).toFixed(3)}), rgba(204,212,227,${(0.22 - t * 0.16).toFixed(3)}))`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:text-sm"
    >
      Skip to main content
    </a>
    <nav
      id="main-nav"
      className="font-semibold fixed top-5 inset-x-0 z-701 flex flex-col items-center gap-2 pointer-events-none"
    >
      {/* ── Pill ── */}
      <div
        ref={borderRef}
        id="nav-border"
        className="pointer-events-auto p-0.5 rounded-xl"
        style={{ background: "linear-gradient(to bottom, rgba(204,212,227,0.06), rgba(204,212,227,0.22))" }}
      >
        <div className="flex items-center gap-5 px-5 py-2.5 rounded-[10px] bg-[#0d0f14]/80 backdrop-blur-md text-sm text-gray-400">
          <Link href="/" className="shrink-0">
            <Image className="inline h-6 opacity-50" src="/icons/logo-9-21-colored.svg" alt="Harry Gu Logo"  width={24} height={24} style={{ width: 'auto' }} />
          </Link>

          <span aria-hidden className="w-px h-4 bg-[rgba(204,212,227,0.2)]" />

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-5">
            <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
            <Link href="/#projects" className="transition-colors hover:text-themeRed">Projects</Link>
            <Link href="/archive" className={linkClass("/archive")} aria-current={pathname === "/archive" ? "page" : undefined}>Archive</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 -m-2 transition-colors hover:text-[#CCD4E3]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="3" y1="3" x2="13" y2="13" />
                <line x1="13" y1="3" x2="3" y2="13" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="3.25" width="14" height="1.5" rx="0.75" />
                <rect x="1" y="7.25" width="14" height="1.5" rx="0.75" />
                <rect x="1" y="11.25" width="14" height="1.5" rx="0.75" />
              </svg>
            )}
          </button>

          <span aria-hidden className="w-px h-4 bg-[rgba(204,212,227,0.2)]" />

          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/harrygu-ux/">
              <Image className="inline h-6" src="/icons/linkedin-hero.svg" alt="LinkedIn Profile"  width={24} height={24} style={{ width: 'auto' }} />
            </a>
            <a href="https://github.com/harryg02">
              <Image className="inline h-6" src="/icons/github-hero.svg" alt="GitHub Profile"  width={24} height={24} style={{ width: 'auto' }} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="sm:hidden pointer-events-auto px-6 py-3 rounded-xl bg-[#0d0f14]/80 backdrop-blur-md ring-2 ring-white/[0.08]">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/#projects" className="transition-colors hover:text-themeRed" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/archive" className={linkClass("/archive")} aria-current={pathname === "/archive" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Archive</Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
