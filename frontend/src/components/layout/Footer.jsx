import { CodeXml, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-background">
                <CodeXml size={16} />
              </span>
              <span className="text-base font-bold text-ink">ReviewPilot</span>
            </div>
            <p className="mt-2 max-w-sm text-sm text-ink/60">
              Real-time AI code review, built as a final-year engineering project. Write code, get feedback,
              ship cleaner software.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink/70 transition hover:bg-background hover:text-ink"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:hello@reviewpilot.dev"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink/70 transition hover:bg-background hover:text-ink"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-ink/50">
          © {new Date().getFullYear()} ReviewPilot. Built for academic demonstration purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
