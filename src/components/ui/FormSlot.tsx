/**
 * Stands in for the real application form until it's built. Pass
 * `embedUrl` (a Typeform/Tally/etc. share URL) once the form exists, and
 * this renders it inline instead of the placeholder. Always keeps
 * id="apply" so every "APPLY NOW" CTA on the site keeps working.
 */
export default function FormSlot({
  label,
  spec,
  embedUrl,
}: {
  label: string;
  spec: string;
  embedUrl?: string;
}) {
  if (embedUrl) {
    return (
      <div
        id="apply"
        className="w-full overflow-hidden rounded-2xl border border-border"
      >
        <iframe src={embedUrl} title={label} className="h-[500px] w-full" />
      </div>
    );
  }

  return (
    <div
      id="apply"
      className="flex min-h-[360px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-background-elevated px-6 text-center"
    >
      <span aria-hidden className="text-3xl">
        📝
      </span>
      <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
        {label}
      </p>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{spec}</p>
    </div>
  );
}
