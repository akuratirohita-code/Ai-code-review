const DetectedLanguage = ({ language }) => {
  if (!language) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/60">
        Detected Language
      </h3>

      <div className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2">
        <span className="text-base font-semibold text-ink capitalize">
          {language}
        </span>
      </div>
    </div>
  );
};

export default DetectedLanguage;