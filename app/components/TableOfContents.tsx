"use client";
import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const allIds = items.flatMap((item) => [
      item.id,
      ...(item.children?.map((c) => c.id) ?? []),
    ]);

    const handleScroll = () => {
      const scrollY = window.scrollY + 130;
      let current = allIds[0];
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Table of contents" className="sticky top-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-4">
          On this page
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-0.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 border-l-2 pl-3 text-sm transition-colors no-underline leading-snug ${
                  activeId === item.id
                    ? "border-[#7eb8f7] text-[#7eb8f7]"
                    : "border-[#1e2737] text-[#64748b] hover:text-[#94a3b8] hover:border-[#334155]"
                }`}
              >
                {item.label}
              </a>
              {item.children && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-0.5">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className={`block py-1 border-l-2 pl-6 text-xs transition-colors no-underline leading-snug ${
                          activeId === child.id
                            ? "border-[#7eb8f7] text-[#7eb8f7]"
                            : "border-[#1e2737] text-[#64748b] hover:text-[#94a3b8] hover:border-[#334155]"
                        }`}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
