import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

/**
 * Editorial, indexed section header: a hairline rule, a meta row
 * ( (01) — LABEL ), then an asymmetric heading + offset description.
 */
export default function SectionHeader({
  index,
  label,
  title,
  description,
}: Props) {
  return (
    <div className="rule pt-6">
      <Reveal className="flex items-center justify-between">
        <span className="index">({index})</span>
        <span className="eyebrow">{label}</span>
      </Reveal>

      <div className="mt-10 grid gap-x-10 gap-y-6 md:mt-14 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <h2 className="display h2 text-balance">{title}</h2>
        </Reveal>
        {description && (
          <Reveal delay={120} className="md:col-span-4 md:self-end">
            <p className="text-[var(--color-dim)] leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
