interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ badge, title, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const maxWidthClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-8 ${alignClass}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8735f]/10 border border-[#e8735f]/20 text-[#e8735f] text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-[#faf4f1] mb-4 break-words">{title}</h2>
      {subtitle && (
        <p className={`text-[#4b5563] dark:text-[#9ca3af] text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl leading-relaxed ${maxWidthClass}`}>{subtitle}</p>
      )}
    </div>
  );
}
