// Import core
import Link from "next/link";
import { motion } from "framer-motion";
// Import customs
import PopButton from '@/components/PopButton';

function Navbar() {
  return (
    <motion.nav
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <motion.ul className="space-y-2 sm:space-y-1 ">
        <li className="navitem">
          <Link href="/CV" scroll={true} className="group">
            <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
              📁
            </span>
            CV
          </Link>
        </li>
        <li className="navitem">
          <a
            href="https://t.me/pqwunn"
            className="group"
          >
            <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
              👋
            </span>
            Telegram
          </a>
        </li>
        <PopButton />
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
