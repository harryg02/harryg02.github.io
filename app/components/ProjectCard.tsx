interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  result: string;
  className?: string;
}

export default function ProjectCard({ href, imageSrc, imageAlt, title, result, className = "" }: ProjectCardProps) {
  return (
    <a
      href={href}
      className={`
        group flex flex-col rounded-xl overflow-hidden
        border-2 border-gray-700 bg-gray-950
        transition-colors duration-200
        hover:border-gray-500
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#CCD4E3] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#1D1F27]
        ${className}
      `}
    >
      {/* Image - expands to fill available card height */}
      <div className="flex-1 min-h-0 overflow-hidden bg-[#161820]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text content - pinned to bottom */}
      <div className="px-5 py-4 flex flex-col gap-1 shrink-0">
        <h3 className="font-bold text-[#CCD4E3] text-base leading-snug">{title}</h3>
        <p className="text-[#8B96AA] text-sm font-semibold">{result}</p>
      </div>
    </a>
  );
}
