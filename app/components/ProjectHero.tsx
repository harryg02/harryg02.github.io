import { Fragment, ReactNode } from "react";

interface ProjectHeroLink {
  href: string;
  icon: string;
  label: string;
  buttonClassName?: string;
  labelClassName?: string;
  forwardIcon?: string;
}

interface ProjectHeroMeta {
  label: string;
  value: string;
}

interface ProjectHeroProps {
  imageSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
  imageContainerClassName?: string;
  sectionClassName?: string;
  title: string;
  titleAs?: "h1" | "h2";
  titleClassName?: string;
  summary?: string;
  links: ProjectHeroLink[];
  meta: ProjectHeroMeta[];
  metaHeadingClassName?: string;
  description: ReactNode;
}

export default function ProjectHero({
  imageSrc,
  imageMobileSrc,
  imageAlt,
  imageContainerClassName = "bg-[#e7eaed]",
  sectionClassName = "text-white bg-[#141414]",
  title,
  titleAs: Title = "h1",
  titleClassName = "font-RedHatDisplay text-left inline-flex font-semibold text-2xl",
  summary,
  links,
  meta,
  metaHeadingClassName = "font-RedHatDisplay font-bold text-xl",
  description,
}: ProjectHeroProps) {
  return (
    <section className={`lg:pb-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${sectionClassName}`}>
      <div className={`md:col-span-3 transition sm:min-h-[150px] h-fit ${imageContainerClassName}`}>
        <img className="hidden md:block drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]" src={imageSrc} alt={imageAlt} />
        <img className="block md:hidden drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]" src={imageMobileSrc} alt={imageAlt} />
      </div>

      <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] pt-20 flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center">
        <Title className={titleClassName}>{title}</Title>
        {summary && <p className="py-3 text-left inline-flex md:text-sm">{summary}</p>}
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex flex-row justify-between items-center rounded-2xl w-full px-5 py-4 mt-2 shadow-md max-w-xs ${link.buttonClassName ?? "bg-[#333] hover:bg-[#222]"}`}
          >
            <div className="flex items-center flex-1">
              <img src={link.icon} className="mr-0 w-8 h-8 object-contain" alt="" />
              <span className={`ml-2.5 text-base flex-shrink-1 ${link.labelClassName ?? "text-white"}`}>{link.label}</span>
            </div>
            <img src={link.forwardIcon ?? "/icons/forward-white.png"} className="mr-0 w-5 h-5 object-contain" alt="" />
          </a>
        ))}
        <div className="" />
      </div>

      <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-xl">
        {meta.map((item, i) => (
          <Fragment key={item.label}>
            <h2 className={`${metaHeadingClassName}${i > 0 ? " mt-8" : ""}`}>{item.label}</h2>
            <p className="text-left inline-flex md:text-sm">{item.value}</p>
          </Fragment>
        ))}
      </div>

      <div className="md:col-span-2 lg:col-span-1 px-16 py-5 lg:py-[4em] pb-20 flex flex-col justify-start items-start transition bg-grey-500 min-h[30px] text-center max-w-xl">
        {description}
      </div>
    </section>
  );
}
