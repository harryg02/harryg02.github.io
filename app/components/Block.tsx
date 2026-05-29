import React from "react";

const widthMap = {
  md: "max-w-md mx-auto",
  "2xl": "max-w-2xl",
} as const;

type BlockProps = {
  /** Horizontal alignment of the block's items. */
  align?: "left" | "center";
  /** Max width of the text column. */
  width?: keyof typeof widthMap;
  /** Extra classes (padding, spacing, etc.). */
  className?: string;
  children: React.ReactNode;
};

/**
 * Vertical text column used inside a Section.
 * Pure layout shell — pass any headings, paragraphs, or lists as children.
 */
export default function Block({
  align = "left",
  width = "2xl",
  className = "",
  children,
}: BlockProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col justify-start ${widthMap[width]} ${alignment} ${className}`}>
      {children}
    </div>
  );
}
