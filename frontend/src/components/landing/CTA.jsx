import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointerClick, Keyboard, MonitorCheck } from "lucide-react";
import Button from "../common/Button";

const STEPS = [
  { icon: Keyboard, title: "Write code", description: "Type or upload a file into the Monaco editor." },
  { icon: MousePointerClick, title: "Stop typing", description: "The editor waits ~1000ms after your last keystroke." },
  { icon: MonitorCheck, title: "Get reviewed", description: "The AI model returns line-by-line suggestions instantly." },
];

const CTA = () => {
  return (
    <section id="how-it-works" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              No "Review Code" button. On purpose.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Every existing review tool asks you to submit your code. ReviewPilot listens continuously and
              reviews automatically, so feedback arrives while the code is still fresh in your head.
            </p>
            <Link to="/dashboard" className="mt-8 inline-block">
              <Button variant="accent" icon={ArrowRight} className="px-6 py-3 text-base">
                Try the live editor
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-soft"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-ink text-background">
                  <step.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm text-ink/65">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
