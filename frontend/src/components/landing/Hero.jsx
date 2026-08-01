import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/50 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-20 text-center lg:pt-28"
      >
        <motion.h1
          variants={item}
          className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl"
        > AI Code Review Assistant
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex justify-center"
        >
          <Link to="/dashboard">
            <Button
              variant="primary"
              icon={ArrowRight}
              className="px-6 py-3 text-base"
            >
              Start Reviewing Code
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-16 w-full">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-ink shadow-lift">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-accent/80" />
              <span className="h-3 w-3 rounded-full bg-card/60" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs font-medium text-background/50">
                main.py
              </span>
            </div>

            <div className="px-6 py-6 text-left font-mono text-sm leading-relaxed text-background/90">
              <p>
                <span className="text-primary">def</span>{" "}
                <span className="text-accent">calculate_total</span>(items):
              </p>

              <p className="pl-4">total = 0</p>

              <p className="pl-4">
                <span className="text-primary">for</span> item{" "}
                <span className="text-primary">in</span> items:
              </p>

              <p className="pl-8">
                total += item[<span className="text-card">'price'</span>]
              </p>

              <p className="pl-4">
                <span className="text-primary">return</span> total
              </p>

              <p className="mt-3 inline-flex items-center gap-2 text-xs text-accent">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
                Line 4 · Medium severity · Missing key existence check
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;