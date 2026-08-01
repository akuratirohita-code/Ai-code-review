import { motion } from "framer-motion";

const VARIANTS = {
  primary: "bg-ink text-background hover:bg-ink/90",
  accent: "bg-accent text-ink hover:bg-accent/90",
  outline: "bg-transparent text-ink border border-border hover:bg-card",
  ghost: "bg-transparent text-ink hover:bg-card/70",
};

/**
 * Shared button primitive so hover/press motion and sizing stay
 * consistent everywhere instead of being re-implemented per page.
 */
const Button = ({ children, variant = "primary", className = "", icon: Icon, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
        transition-colors duration-200 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2.25} />}
      {children}
    </motion.button>
  );
};

export default Button;
