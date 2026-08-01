const SEVERITY_STYLES = {
  high: "bg-accent/90 text-ink border-accent",
  medium: "bg-card text-ink border-border",
  low: "bg-primary text-ink border-primary",
};

const SEVERITY_LABEL = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

const Badge = ({ severity = "low", children }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase
        ${SEVERITY_STYLES[severity]}`}
    >
      {children || SEVERITY_LABEL[severity]}
    </span>
  );
};

export default Badge;
