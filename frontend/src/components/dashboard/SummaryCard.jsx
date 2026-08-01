import { motion } from "framer-motion";
import { Download, Gauge, Clock, Box } from "lucide-react";
import { scoreLabel } from "../../utils/formatters";

const SummaryCard = ({ summary, onDownload }) => {
  const scoreColor = summary.qualityScore >= 70 ? "text-ink" : "text-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Quality score</p>
          <p className={`mt-1 text-4xl font-extrabold ${scoreColor}`}>
            {summary.qualityScore}
            <span className="text-lg font-semibold text-ink/40">/100</span>
          </p>
          <p className="mt-0.5 text-sm font-medium text-ink/60">{scoreLabel(summary.qualityScore)}</p>
        </div>
        <button
          onClick={onDownload}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-ink/70 transition hover:text-ink"
          title="Download review report"
        >
          <Download size={15} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-accent/25 py-2.5">
          <p className="text-lg font-bold text-ink">{summary.highCount}</p>
          <p className="text-[11px] font-semibold text-ink/60">High</p>
        </div>
        <div className="rounded-xl bg-background py-2.5">
          <p className="text-lg font-bold text-ink">{summary.mediumCount}</p>
          <p className="text-[11px] font-semibold text-ink/60">Medium</p>
        </div>
        <div className="rounded-xl bg-primary/60 py-2.5">
          <p className="text-lg font-bold text-ink">{summary.lowCount}</p>
          <p className="text-[11px] font-semibold text-ink/60">Low</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-ink/70">
        <span className="flex items-center gap-1.5">
          <Clock size={13} /> Time: <strong className="text-ink">{summary.timeComplexity}</strong>
        </span>
        <span className="flex items-center gap-1.5">
          <Box size={13} /> Space: <strong className="text-ink">{summary.spaceComplexity}</strong>
        </span>
      </div>

      {summary.overallFeedback && (
        <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink/70">
          <Gauge size={15} className="mt-0.5 flex-none text-ink/40" />
          {summary.overallFeedback}
        </p>
      )}
    </motion.div>
  );
};

export default SummaryCard;
