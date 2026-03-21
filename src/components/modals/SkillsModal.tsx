"use client";

import { motion } from "framer-motion";
import { Layers, X } from "lucide-react";
import { skillCategories } from "@/components/data/skills";

const colorMap: Record<string, { bar: string; bg: string; text: string; border: string }> = {
  blue: {
    bar: "bg-gradient-to-r from-blue-400 to-blue-600",
    bg: "bg-blue-50/60",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  purple: {
    bar: "bg-gradient-to-r from-purple-400 to-purple-600",
    bg: "bg-purple-50/60",
    text: "text-purple-600",
    border: "border-purple-100",
  },
  orange: {
    bar: "bg-gradient-to-r from-orange-400 to-orange-600",
    bg: "bg-orange-50/60",
    text: "text-orange-600",
    border: "border-orange-100",
  },
  teal: {
    bar: "bg-gradient-to-r from-teal-400 to-teal-600",
    bg: "bg-teal-50/60",
    text: "text-teal-600",
    border: "border-teal-100",
  },
  sky: {
    bar: "bg-gradient-to-r from-sky-400 to-sky-600",
    bg: "bg-sky-50/60",
    text: "text-sky-600",
    border: "border-sky-100",
  },
  gray: {
    bar: "bg-gradient-to-r from-gray-400 to-gray-600",
    bg: "bg-gray-50/60",
    text: "text-gray-600",
    border: "border-gray-200",
  },
};

export default function SkillsModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 max-w-3xl w-full p-5 md:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Layers className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIndex) => {
            const colors = colorMap[cat.color] ?? colorMap.gray;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + catIndex * 0.08 }}
                className={`rounded-xl border p-5 ${colors.bg} ${colors.border}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className={`text-sm font-bold uppercase tracking-wider ${colors.text}`}>
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + catIndex * 0.08 + skillIndex * 0.04 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <motion.span
                          className="text-xs font-semibold text-gray-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + catIndex * 0.08 + skillIndex * 0.04 }}
                        >
                          {skill.pct}%
                        </motion.span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${colors.bar}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.pct}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + catIndex * 0.08 + skillIndex * 0.04,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
