import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import SummaryCard from "./SummaryCard";
import SuggestionCard from "./SuggestionCard";
import EmptyState from "./EmptyState";
import LoadingSkeleton from "./LoadingSkeleton";

const ReviewPanel = ({ status, review, onDownload, STATUS }) => {
  if (status === STATUS.IDLE) return <EmptyState />;

  if (status === STATUS.REVIEWING && !review) return <LoadingSkeleton />;

  if (status === STATUS.ERROR && !review) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
        <AlertTriangle size={22} className="text-accent" />
        <h3 className="mt-3 text-sm font-bold text-ink">Review failed</h3>
        <p className="mt-1.5 max-w-xs text-sm text-ink/60">
          Check that the backend is running and the AI provider key is configured, then keep typing to retry.
        </p>
      </div>
    );
  }

  if (!review) return <EmptyState />;

  return (
    <div className="scrollbar-thin h-full space-y-4 overflow-y-auto pr-1">
      <SummaryCard summary={review.summary} onDownload={onDownload} />

      <AnimatePresence>
        {review.issues.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-border bg-primary/40 p-5 text-center text-sm font-medium text-ink"
          >
            No issues found. This code looks clean. 🎉
          </motion.div>
        ) : (
          review.issues.map((issue, i) => <SuggestionCard key={issue.id} issue={issue} index={i} />)
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewPanel;
