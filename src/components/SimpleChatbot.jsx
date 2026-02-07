import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function SimpleChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Reset convo on closing
  const handleToggle = () => {
    if (open) {
      setMessages([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
    }
    setOpen((o) => !o);
  };

  const botReply = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hi there! What can I help with?";
    } else if (msg.includes("skills")) {
      return "I specialize in React, Node.js, and cloud technologies.";
    } else if (msg.includes("projects")) {
      return "Please check my Projects section to see what I've built.";
    } else if (msg.includes("contact")) {
      return "You can contact me via email: 1412ankitkumar@gmail.com";
    } else if (msg.includes("future") || msg.includes("plans")){
      return "Ankit wants to expland his knowleadge in the different project ideas and interested in building scallable products which will help the orgainsation in growning in a efficient way"
    }
    return "Sorry, I didn't understand that. Can you rephrase?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input.trim() }]);
    const reply = botReply(input.trim());
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { sender: "bot", text: reply }]);
    }, 800);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.13, rotate: open ? -15 : 15 }}
        whileTap={{ scale: 1.06, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white rounded-full p-5 shadow-2xl drop-shadow-lg border-4 border-white/10 focus:outline-none"
        aria-label="Toggle Chat"
      >
        <motion.span
          key={open ? "close" : "chat"}
          initial={{ scale: 0.7, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 10 }}
          transition={{ duration: 0.15 }}
          className="text-xl font-bold"
        >
          {open ? "✕" : "💬"}
        </motion.span>
      </motion.button>

      {/* Chat Window with entrance/exit animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.38 }}
            className="fixed bottom-20 right-6 w-80 max-w-full bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-400 flex flex-col z-50"
          >
            <div className="p-4 border-b border-purple-500 text-white font-semibold text-lg flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.1 }}
                className=""
              >🤖</motion.span>{" "}
              Chat with me
            </div>
            <div
              className="flex-1 p-4 overflow-y-auto max-h-96 flex flex-col gap-3 custom-scrollbar"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx + msg.text}
                    initial={{
                      opacity: 0,
                      y: msg.sender === "user" ? 16 : -16,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: msg.sender === "user" ? 12 : -12,
                      scale: 0.95,
                    }}
                    transition={{ duration: 0.27, type: "spring" }}
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.sender === "user"
                        ? "self-end bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md"
                        : "self-start bg-gray-700/80 text-blue-100 border border-blue-700 shadow"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex p-3 border-t border-purple-500 bg-gradient-to-r from-purple-900/40 to-gray-900/30"
            >
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 resize-none rounded-md bg-gray-800/80 border border-purple-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-blue-300"
              />
              <motion.button
                type="submit"
                disabled={!input.trim()}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.06 }}
                className="ml-3 bg-gradient-to-br from-purple-500 to-blue-500 hover:to-purple-700 text-white rounded-lg px-5 py-2 shadow font-bold uppercase tracking-wide transition disabled:opacity-50"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #7f5af0; border-radius: 6px; }
        `}
      </style>
    </>
  );
}
