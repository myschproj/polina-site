// Import core
import Link from "next/link";
import { motion } from "framer-motion";
// Import customs

function Logo() {
  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex"
    >
      <Link href="/" className="cursor-pointer">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase !cursor-pointer">
            Polina Petkevich
          </h1>
          <h2 className="font-medium !cursor-pointer">
            Designer & Python developer
          </h2>
        </div>
      </Link>
    </motion.header>
  );
}

export default Logo;
