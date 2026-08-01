import { FileCode2 } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/60 text-ink">
        <FileCode2 size={24} />
      </div>
      <h3 className="mt-4 text-sm font-bold text-ink">No review yet</h3>
      <p className="mt-1.5 max-w-xs text-sm text-ink/60">
        Start typing in the editor. Reviews run automatically about a second after you pause.
      </p>
    </div>
  );
};

export default EmptyState;
