// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "Languages",
      icon: "💻",
      color: "bg-blue-500",
      textColor: "text-blue-400",
      barColor: "bg-blue-500",
      items: [
        { name: "JavaScript", percent: 90 },
        { name: "TypeScript", percent: 85 },
        { name: "Python", percent: 80 },
        { name: "Java", percent: 75 },
        { name: "C++", percent: 70 },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      color: "bg-purple-500",
      textColor: "text-purple-400",
      barColor: "bg-pink-400",
      items: [
        { name: "React", percent: 95 },
        { name: "Next.js", percent: 85 },
        { name: "Tailwind CSS", percent: 90 },
        { name: "Redux", percent: 80 },
        { name: "Framer Motion", percent: 75 },
      ],
    },
    {
      title: "Backend",
      icon: "🛠️",
      color: "bg-green-400",
      textColor: "text-green-400",
      barColor: "bg-green-400",
      items: [
        { name: "Node.js", percent: 85 },
        { name: "Express.js", percent: 80 },
        { name: "MongoDB", percent: 75 },
        { name: "PostgreSQL", percent: 70 },
        { name: "GraphQL", percent: 65 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "bg-orange-400",
      textColor: "text-orange-400",
      barColor: "bg-red-400",
      items: [
        { name: "AWS", percent: 80 },
        { name: "Docker", percent: 75 },
        { name: "Kubernetes", percent: 70 },
        { name: "Vercel", percent: 85 },
        { name: "GitHub Actions", percent: 75 },
      ],
    },
  ];

  const expertise = [
    "Data Structures & Algorithms",
    "System Design",
    "RESTful APIs",
    "Git & Version Control",
    "Agile Methodology",
    "Problem Solving",
    "Team Collaboration",
    "Technical Writing",
  ];

  const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: "spring",
    },
  }),
};

  return (
    <section
      id="skills"
      className="w-full py-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 relative overflow-x-clip"
    >
      {/* Decorative blurred gradients */}
      <div className="absolute top-10 left-[-100px] w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-400/30 to-indigo-400/20 rounded-full blur-3xl opacity-60 z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-[-120px] w-72 h-72 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-2xl opacity-40 z-0 animate-pulse"></div>
      <div className="uppercase tracking-widest text-blue-400 text-xs text-center mb-1 z-10 relative">
        WHAT I WORK WITH
      </div>
      <h2 className="text-5xl font-bold text-center text-white mb-12 z-10 relative">
        My <span className="text-blue-400 border-b-4 border-blue-500 pb-1">Skills</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-7 mb-16 w-full max-w-5xl px-3 z-10 relative">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-blue-400/20 border border-white/20 min-w-[230px] max-w-[270px] flex-1 px-7 py-8 flex flex-col gap-6 group transition-all duration-350 hover:scale-105 hover:shadow-pink-500/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-2xl ${cat.textColor} drop-shadow-lg`}>
                {cat.icon}
              </span>
              <span className={`text-lg font-bold ${cat.textColor}`}>{cat.title}</span>
            </div>
            <div>
              {cat.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.6,
                    type: "spring"
                  }}
                  className="mb-5"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-base">{skill.name}</span>
                    <span className={`text-xs font-bold ${cat.textColor}`}>
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 1, delay: 0.1 + idx * 0.11, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-3 rounded-full ${cat.barColor} drop-shadow`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-blue-300 mb-7 text-center z-10 relative">
        Other Expertise
      </h3>
      <div className="flex flex-wrap gap-4 justify-center px-4 z-10 relative">
        {expertise.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="bg-gray-900 px-5 py-2 rounded-full text-blue-300 font-medium text-md shadow hover:bg-purple-700 hover:text-white transition-all duration-300 border border-blue-400/10"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

