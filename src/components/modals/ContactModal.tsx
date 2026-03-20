"use client";

import { motion } from "framer-motion";
import { Contact, X, Mail, Linkedin, Github, Twitter, Download, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { name: "Email", icon: Mail, href: "mailto:anoopkrishna.k9@gmail.com", color: "bg-red-50 text-red-500 hover:bg-red-100" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/anoopkrishna2752/", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
  { name: "GitHub", icon: Github, href: "https://github.com/Anoop-2752", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
  { name: "Twitter / X", icon: Twitter, href: "https://x.com/AnoopKr20788928", color: "bg-sky-50 text-sky-500 hover:bg-sky-100" },
];

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to a service like Formspree, EmailJS, or your own API
    console.log("Form submitted:", formData);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Contact className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${s.color}`}
            >
              <s.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{s.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Resume download */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center gap-2 w-full px-4 py-3 mb-6 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download Resume</span>
        </a>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">or send a message</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
          />
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
          />
          <textarea
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={3}
            className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors cursor-pointer text-sm font-medium"
          >
            {sent ? (
              "Message sent! ✓"
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}