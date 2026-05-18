interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  result: string;
}

export default function ProjectCard({ href, imageSrc, imageAlt, title, result }: ProjectCardProps) {
  return (
    <a
      href={href}
      className="
        group flex flex-col rounded-2xl overflow-hidden
        border border-gray-700 bg-gray-950
        transition-colors duration-200
        hover:border-[#4A4F62]
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#CCD4E3] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#1D1F27]
      "
    >
      {/* Image */}
      <div className="aspect-[2/1] overflow-hidden bg-[#161820]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-bold text-[#CCD4E3] text-base leading-snug">{title}</h3>
      </div>

      {/* Result */}
      <div className="px-5 pb-5 mt-auto">
        <p className="text-[#8B96AA] text-sm font-semibold">{result}</p>
      </div>
    </a>
  );
}
