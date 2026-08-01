import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      <main>
        <Hero />
      </main>
    </motion.div>
  );
};

export default Landing;