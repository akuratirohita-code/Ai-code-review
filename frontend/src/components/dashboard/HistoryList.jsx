import { History } from "lucide-react";
import { formatDate } from "../../utils/formatters";
import { getLanguageById } from "../../constants/languages";

const HistoryList = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 px-1">
        <History size={14} className="text-ink/50" />
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Recent reviews</p>
      </div>
      <div className="mt-2 space-y-1">
        {history.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs text-ink/70">
            <span>
              {getLanguageById(entry.language).label} · {formatDate(entry.timestamp)}
            </span>
            <span className="font-semibold text-ink">{entry.qualityScore}/100</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
