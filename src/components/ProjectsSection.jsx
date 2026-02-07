// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectpic1 from "/AI-based-smart-irrigation-system-35.png"
import projectpic2 from "/E-commerce-website.png"

const projects = [
  {
    title: "Crop Recommendation and irrigation system using ML with integrated IoT",
    image: projectpic1,
    description:
      "A smart irrigation and crop recommendation system that leverages Machine Learning and IoT to optimize agricultural efficiency.",
    tags: ["Python", "Arduino uno", "WebSocket", "MongoDB"],
    demoUrl: "https://link.springer.com/chapter/10.1007/978-981-97-3242-5_9",
    codeUrl: "https://github.com/Ankitkumar1412-debug/Crop-recommendtion-and-irrigation-system",
  },  
  {
    title: "E-Commerce Website",
    image: projectpic2,
    description:
      "A fully responsive e-commerce platform that allows users to browse products, add items to the cart, and make secure payments",
    tags: ["Html", "CSS", "Javascript", "Blockchain"],
    demoUrl: "https://ankitkumar1412-debug.github.io/E-Commerce_Website/",
    codeUrl: "https://github.com/Ankitkumar1412-debug/E-Commerce_Website",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-black to-gray-900 px-4 py-16"
    >
      <div className="mb-1 uppercase tracking-widest text-blue-400 text-xs text-center">
        MY WORK
      </div>
      <h2 className="text-5xl font-bold text-center text-white mb-4">
        <span>Featured </span>
        <span className="text-gradient-primary text-blue-400">Projects</span>
      </h2>
      <div className="w-20 h-1 mx-auto mt-2 mb-14 bg-gradient-to-r from-purple-400 to-blue-400 rounded"/>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: i * 0.2, type: "spring" }}
                        className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-purple-400/30 group transition duration-300 flex flex-col"
                    >
                          {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transition group-hover:scale-105"
                        />
                          {/* Overlay buttons appear on hover */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-blue-600/80 text-white text-sm rounded shadow hover:bg-blue-500 transition flex items-center gap-2"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v4.586l-5.293-5.293a1 1 0 00-1.414 0L2.5 7.086a1 1 0 000 1.414L7.293 13.293A1 1 0 008.707 13.293L14 8.707V13h2V3z" /></svg>
                            Live Demo
                        </a>
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1 bg-purple-600/80 text-white text-sm rounded shadow hover:bg-purple-500 transition flex items-center gap-2"
                        >
                            Code
                        </a>
                    </div>
                    </div>
                    {/* Project details */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-purple-400 transition">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.tags.map((tag) => (
                                <span
                                key={tag}
                                className="px-3 py-1 rounded bg-black/60 text-xs text-blue-300 border border-blue-400/10 font-medium"
                                >
                                {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
      </div>
    </section>
  );
}
