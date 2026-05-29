import React from "react";

const toneMap = {
  mauve: "bg-[#EDE3DD]",
  cream: "bg-[#F9F4F1]",
} as const;

type SectionProps = {
  /** Background band color. */
  tone?: keyof typeof toneMap;
  /** Responsive column count for the inner grid. */
  columns?: 1 | 2;
  /** Max content width in px. */
  maxW?: number;
  /** Vertical padding utility (e.g. "py-10"). */
  py?: string;
  /** Grid gap utility. */
  gap?: string;
  /** Adds the soft drop shadow used on emphasized bands. */
  shadow?: boolean;
  /** Extra classes on the outer <section>. */
  className?: string;
  /** Extra classes on the inner grid container. */
  containerClassName?: string;
  children: React.ReactNode;
};

/**
 * Full-bleed colored band + centered grid container.
 * Owns the page's section layout so column/spacing classes live in one place.
 */
export default function Section({
  tone = "cream",
  columns = 1,
  maxW = 1200,
  py = "py-12",
  gap = "gap-6",
  shadow = false,
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      className={`text-[#392A3D] ${toneMap[tone]} ${
        shadow ? "drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]" : ""
      } ${className}`}
    >
      <div
        className={`m-auto px-6 ${py} grid grid-cols-1 ${
          columns === 2 ? "lg:grid-cols-2" : ""
        } ${gap} ${containerClassName}`}
        style={{ maxWidth: `${maxW}px` }}
      >
        {children}
      </div>
    </section>
  );
}
