"use client";

import { motion } from "framer-motion";
import { Layers, X } from "lucide-react";
import { skillCategories } from "@/components/data/skills";

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
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative max-h-[85vh] overflow-y-auto"
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

        <div className="space-y-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {cat.category}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}