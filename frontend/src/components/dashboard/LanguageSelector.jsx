import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { LANGUAGES, getLanguageById } from "../../constants/languages";

const LanguageSelector = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = getLanguageById(value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-semibold text-ink shadow-soft transition hover:bg-background"
      >
        {current.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-lift">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => {
                onChange(lang.id);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm text-ink/80 transition hover:bg-background"
            >
              {lang.label}
              {lang.id === value && <Check size={14} className="text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
