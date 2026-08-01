import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gauge,
  Fingerprint,
  GitCompare,
  Timer,
  Sparkles,
} from "lucide-react";
import { LANGUAGES } from "../../constants/languages";

const FEATURES = [
  {
    icon: Timer,
    title: "Reviews as you pause",
    description: "A 1000ms debounce watches every keystroke and triggers a review the moment you stop typing.",
  },
  {
    icon: ShieldCheck,
    title: "Security & memory checks",
    description: "Flags unsafe patterns, memory issues, and security risks alongside standard logic errors.",
  },
  {
    icon: Gauge,
    title: "Complexity estimates",
    description: "Every review estimates time and space complexity so you know the cost of your algorithm.",
  },
  {
    icon: Fingerprint,
    title: "Readability & naming",
    description: "Catches naming convention issues, dead code, and duplication before they reach a PR.",
  },
  {
    icon: GitCompare,
    title: "Improved code, inline",
    description: "Each issue ships with a corrected snippet you can copy straight back into your editor.",
  },
  {
    icon: Sparkles,
    title: "Quality score & report",
    description: "Get an overall quality score per review, plus a downloadable report for your records.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" } }),
};

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Everything a manual review checks. Automatically.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Twelve categories of analysis run on every debounced request — no configuration, no button to click.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/70 text-ink">
              <feature.icon size={20} strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-base font-bold text-ink">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div id="languages" className="mt-24">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-ink/50">
          Supported languages
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {LANGUAGES.map((lang) => (
            <span
              key={lang.id}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink/75 shadow-soft"
            >
              {lang.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
