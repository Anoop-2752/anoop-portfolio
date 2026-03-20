"use client";

import { motion } from "framer-motion";
import { Layers, X } from "lucide-react";
import { skillCategories } from "@/components/data/skills";

const categoryStyles: Record<string, { card: string; title: string; pill: string; dot: string }> = {
  "AI / ML": {
    card: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100",
    title: "text-blue-600",
    pill: "bg-white border-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white hover:border-blue-500",
    dot: "bg-blue-400",
  },
  "GenAI / LLMs": {
    card: "bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-100",
    title: "text-purple-600",
    pill: "bg-white border-purple-100 text-purple-700 hover:bg-purple-500 hover:text-white hover:border-purple-500",
    dot: "bg-purple-400",
  },
  "Frontend / Mobile": {
    card: "bg-gradient-to-br from-teal-50 to-teal-100/50 border-teal-100",
    title: "text-teal-600",
    pill: "bg-white border-teal-100 text-teal-700 hover:bg-teal-500 hover:text-white hover:border-teal-500",
    dot: "bg-teal-400",
  },
  "Tools / Infra": {
    card: "bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-100",
    title: "text-orange-600",
    pill: "bg-white border-orange-100 text-orange-700 hover:bg-orange-500 hover:text-white hover:border-orange-500",
    dot: "bg-orange-400",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const pillContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function SkillsModal({ onClose }: { onClose: () => void }) {
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
            <Layers className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Skills</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((cat) => {
            const style = categoryStyles[cat.category] ?? {
              card: "bg-gray-50 border-gray-100",
              title: "text-gray-600",
              pill: "bg-white border-gray-200 text-gray-700 hover:bg-gray-500 hover:text-white",
              dot: "bg-gray-400",
            };

            return (
              <motion.div
                key={cat.category}
                variants={cardVariants}
                whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                className={`rounded-xl border p-4 ${style.card}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                  <h3 className={`text-sm font-bold uppercase tracking-wider ${style.title}`}>
                    {cat.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={pillContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={pillVariants}
                      whileHover={{ scale: 1.08 }}
                      className={`flex items-center gap-1.5 px-2.5 py-1 border rounded-full text-xs font-medium cursor-default transition-colors ${style.pill}`}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
