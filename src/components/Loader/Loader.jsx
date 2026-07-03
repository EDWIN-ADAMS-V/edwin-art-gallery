import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="loader-glow"
        animate={{
          scale: [1, 1.3, 1.8, 2.8],
          opacity: [0.25, 0.45, 0.8, 0],
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
      />

      <motion.h1
        className="loader-logo"
        initial={{
          opacity: 0,
          scale: 1,
          filter: "blur(50px)",
        }}
        animate={{
          opacity: [1, 1, 1, 1],
          scale: [0.85, 0.95, 1.25, 2],
          filter: [
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
          ],
        }}
        transition={{
          duration: 1.9,
          ease: [0.22, 1, 0.36, 1], // premium easing
        }}
      >
        EA<span>.</span>
      </motion.h1>
    </motion.div>
  );
}

export default Loader;