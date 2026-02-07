// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Smooth scroll click handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        sticky top-0 z-40 w-full
        bg-black backdrop-blur-lg
        shadow-md shadow-purple-600/10
        flex items-center justify-between
        px-8 py-6
        border-b border-white/10
      "
    >
      <a
        href="#hero"
        onClick={e => handleSmoothScroll(e, "#hero")}
        className="
          text-purple-500 font-extrabold text-2xl tracking-wide
          drop-shadow hover:scale-110 hover:text-blue-400
          transition-all duration-300
        "
      >
        Ankit Kumar
      </a>
      <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={e => handleSmoothScroll(e, link.href)}
            whileHover={{
              scale: 1.12,
              color: "#a855f7", // Tailwind purple-400
            }}
            className="
              relative text-gray-200 font-medium transition-all duration-300 px-2 py-1
              hover:text-purple-400
              group
            "
          >
            <span className="relative z-10">{link.name}</span>
            <span
              className="
                absolute left-0 -bottom-0.5 w-full h-[2px]
                bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400
                rounded
                scale-x-0 group-hover:scale-x-100 transition-transform duration-300
              "
              aria-hidden="true"
            ></span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
