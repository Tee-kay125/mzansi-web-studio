type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, description, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={light ? "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300" : "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700"}>
          {eyebrow}
        </p>
      )}
      <h2 className={light ? "text-3xl font-black tracking-tight text-white md:text-5xl" : "text-3xl font-black tracking-tight text-slate-950 md:text-5xl"}>
        {title}
      </h2>
      {description && (
        <p className={light ? "mt-5 text-base leading-8 text-slate-300 md:text-lg" : "mt-5 text-base leading-8 text-slate-600 md:text-lg"}>
          {description}
        </p>
      )}
    </div>
  );
}
