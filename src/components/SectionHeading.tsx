import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  /** show the short orange underline separator */
  separator?: boolean;
  as?: "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  separator = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center", separator && "mb-10")}>
      <Tag
        className={cn(
          "font-heading text-[25px] font-semibold leading-tight text-brand-text",
          separator && "heading-sep",
          className,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
