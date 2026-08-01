import { Link } from "react-router-dom";
import { CodeXml } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-border glass"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-background">
            <CodeXml size={18} strokeWidth={2.25} />
          </span>

          <span className="text-lg font-bold tracking-tight text-ink">
            ReviewPilot
          </span>
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;