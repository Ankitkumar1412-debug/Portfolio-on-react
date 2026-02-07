// src/components/AboutSection.jsx
import profilePic from '/IMG_20241211_185208.jpg';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div>
        <img
        src={profilePic}
        alt="Ankit Kumar"
        className="
            w-128 h-160 object-cover
            rounded-3xl
            shadow-2xl
            border-4 border-purple-600
            hover:scale-105 hover:shadow-purple-400 hover:border-blue-400
            transition-all duration-300
            backdrop-blur-[2px]
            bg-white/10
            "
        />
        </div>
      </div>
      <div className="md:w-1/2 max-w-xl px-6">
        <div className="mb-3 uppercase tracking-widest text-blue-400 text-xs">Get to know me</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-purple-400 border-b-4 border-purple-500 pb-1">Me</span>
        </h2>
        <h3 className="text-xl font-semibold text-blue-300 mb-2">My Journey in Tech</h3>
        <p className="text-gray-200 mb-2">
          Hello! I'm Ankit Kumar, a passionate software developer based in India. My journey into programming started during my college years, where I discovered my love for creating digital solutions that make a real impact.
        </p>
        <p className="text-gray-200 mb-2">
          I specialize in building exceptional web applications using modern technologies like React, Node.js, and cloud platforms. I'm particularly fascinated by <span className="text-blue-400 underline cursor-pointer">scalable system design</span> and <span className="text-purple-400 underline cursor-pointer">clean architecture patterns</span>.
        </p>
        <p className="text-gray-400 mb-8">
          When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying updated with the latest industry trends.
        </p>
        <div className="flex gap-6 mb-6">
          <div className="px-7 py-5 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center hover:scale-120 hover:shadow-purple-400 hover:border-blue-400 transition-all duration-300 backdrop-blur-[2px]">
            <span className="text-purple-400 text-2xl font-bold">10+</span>
            <span className="text-gray-300 text-xs mt-1">Projects Built</span>
          </div>
          <div className="px-7 py-5 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center hover:scale-120 hover:shadow-blue-400 hover:border-purple-400 transition-all duration-300 backdrop-blur-[2px]">
            <span className="text-blue-400 text-2xl font-bold">1+</span>
            <span className="text-gray-300 text-xs mt-1">Years Experience</span>
          </div>
        </div>
        <div>
          <h4 className="text-blue-300 font-semibold mb-2">What I'm Passionate About:</h4>
          <div className="flex flex-wrap gap-2">
            {["Full-Stack Development", "System Design", "Cloud Architecture", "Performance Optimization", "Open Source"].map((item) => (
              <span
                key={item}
                className="bg-gray-800 px-4 py-2 rounded-full text-blue-300 font-medium text-xs shadow hover:bg-purple-700 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
