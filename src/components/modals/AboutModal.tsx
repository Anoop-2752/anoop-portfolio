"use client";

import { motion } from "framer-motion";
import { User, X } from "lucide-react";

export default function AboutModal({ onClose }: { onClose: () => void }) {
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
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative"
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
            <User className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">About me</h2>
        </div>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I&apos;m{" "}
            <span className="text-gray-900 font-medium">Anoop K</span>, an
            AI/ML Engineer based in Kerala, India. I specialize in building
            intelligent systems — from computer vision pipelines and NLP
            solutions to production-ready GenAI applications.
          </p>
          <p>
            My journey into AI wasn&apos;t linear. After working in accounting
            and operations internationally, I made a deliberate pivot into AI
            engineering in 2024. That non-traditional path gives me a unique edge
            — I don&apos;t just build models, I understand the business problems
            they solve.
          </p>
          <p>
            I&apos;ve worked on real-time driver safety systems using YOLOv8 and
            MediaPipe, built production RAG pipelines, and shipped developer
            tools used by real people. I believe in learning by building — every
            project in my portfolio is deployed and functional.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">4+</p>
            <p className="text-xs text-gray-500 mt-1">Projects shipped</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">8mo</p>
            <p className="text-xs text-gray-500 mt-1">AI internship</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">10+</p>
            <p className="text-xs text-gray-500 mt-1">Tech skills</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}