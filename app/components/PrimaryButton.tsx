import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export default function PrimaryButton({ href, icon, children, external }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="bg-gray-800 group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 active:scale-[0.97] select-none"
    >
      {/* hover glow layer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ boxShadow: "0 0 18px rgba(126,184,247,0.18), inset 0 1px 0 rgba(255,255,255,0.12)" }}
      />
      {icon && (
        <span className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
          {icon}
        </span>
      )}
      <span className="relative">{children}</span>
    </a>
  );
}
