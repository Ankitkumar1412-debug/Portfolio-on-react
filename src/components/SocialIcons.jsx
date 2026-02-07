// src/components/SocialIcons.jsx
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialIcons() {
  return (
    <div className="flex space-x-2">
      <a    
        href="https://github.com/Ankitkumar1412-debug"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded border border-blue-400 hover:bg-blue-600 group"
        aria-label="GitHub"
      >
        <FaGithub className="h-6 w-6 text-blue-400 group-hover:text-white transition" />
      </a>
      <a
        href="https://www.linkedin.com/in/ankit-kumar-64a1601bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded border border-blue-400 hover:bg-blue-600 group"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-6 w-6 text-blue-400 group-hover:text-white transition" />
      </a>
      <a
        href="mailto:ankit@email.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded border border-blue-400 hover:bg-blue-600 group"
        aria-label="Email"
      >
        <MdEmail className="h-6 w-6 text-blue-400 group-hover:text-white transition" />
      </a>
    </div>
  );
}
