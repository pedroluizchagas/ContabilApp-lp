import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <Reveal>
        <span className="chip">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-base text-[var(--color-muted)] md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
