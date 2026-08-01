import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import Badge from "../common/Badge";

const SuggestionCard = ({ issue, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!issue.improvedCode) return;
    await navigator.clipboard.writeText(issue.improvedCode);
    setCopied(true);
    toast.success("Improved code copied");
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge severity={issue.severity} />
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink/50">
            <MapPin size={12} />
            Line {issue.line}
          </span>
        </div>
        <span className="rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold text-ink/50">
          {issue.category}
        </span>
      </div>

      <h4 className="mt-3 text-sm font-bold text-ink">{issue.issue}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{issue.explanation}</p>

      {issue.suggestion && (
        <p className="mt-3 rounded-lg bg-background px-3 py-2 text-sm leading-relaxed text-ink/75">
          <span className="font-semibold text-ink">Suggestion: </span>
          {issue.suggestion}
        </p>
      )}

      {issue.improvedCode && (
        <div className="mt-3 overflow-hidden rounded-lg border border-border">
          <div className="flex items-center justify-between bg-ink px-3 py-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-background/50">
              Improved code
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-background/70 transition hover:bg-white/10 hover:text-background"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="scrollbar-thin overflow-x-auto bg-ink px-3 py-3 text-xs leading-relaxed text-background/90">
            <code>{issue.improvedCode}</code>
          </pre>
        </div>
      )}
    </motion.div>
  );
};

export default SuggestionCard;
