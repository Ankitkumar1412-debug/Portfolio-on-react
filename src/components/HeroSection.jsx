// src/components/HeroSection.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";
import { ArrowDownToLine , Mouse} from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-black to-gray-900 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-[-100px] w-96 h-96 bg-gradient-to-br from-purple-500/40 to-blue-500/20 rounded-full blur-3xl opacity-70 z-0 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[26rem] h-[18rem] bg-gradient-to-tr from-blue-500/30 to-pink-400/20 rounded-full blur-2xl opacity-60 z-0 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-blue-300 text-lg mb-2">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-2 hover:scale-110 transition">
          Ankit Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 flex justify-center items-center">
          I'm a{" "}
          <span className="text-blue-400 ml-2">
          <Typewriter
            words={["Frontend Engineer", "Software Developer", "Full-Stack Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            cursorBlinking="|"
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-6">
          I build exceptional digital experiences with modern technologies.<br />
          Passionate about creating scalable applications and elegant solutions to complex problems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <a
            href="/Ankit_Kumar_Resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded shadow flex items-center hover:scale-105 transition"
          >
            <ArrowDownToLine className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          <SocialIcons />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-blue-300 cursor-pointer flex flex-col items-center"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
            <Mouse className="w-6 h-6 animate-bounce text-sm mt-1" /> Scroll down
        </motion.div>
      </motion.div>
    </section>
  );
}
