import { motion, AnimatePresence } from "framer-motion";
import { Circle, Loader2, CheckCircle2, AlertCircle, Keyboard } from "lucide-react";

const STATUS_CONFIG = {
  idle: { icon: Circle, label: "Waiting for code", color: "text-ink/40" },
  typing: { icon: Keyboard, label: "Typing…", color: "text-ink/60" },
  reviewing: { icon: Loader2, label: "Reviewing…", color: "text-accent", spin: true },
  done: { icon: CheckCircle2, label: "Review complete", color: "text-ink" },
  error: { icon: AlertCircle, label: "Review failed", color: "text-accent" },
};

const StatusIndicator = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.idle;
  const Icon = config.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={status}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{ duration: 0.2 }}
        className={`flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold ${config.color}`}
      >
        <Icon size={14} className={config.spin ? "animate-spin" : ""} />
        {config.label}
      </motion.div>
    </AnimatePresence>
  );
};

export default StatusIndicator;
