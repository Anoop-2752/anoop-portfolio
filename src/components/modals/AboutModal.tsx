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
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative"
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
            <span className="text-gray-900 font-medium">Anoop</span>, an
            AI/ML Engineer based in Bangalore, India. I specialize in building
            intelligent systems — from computer vision pipelines and NLP
            solutions to production-ready GenAI applications. My work sits at
            the intersection of research and real-world deployment.
          </p>
          <p>
            My focus is on turning complex AI research into real, working
            products. I work across the full stack of modern AI — training
            models, building RAG pipelines, designing multi-agent systems, and
            shipping tools that people actually use. I care deeply about
            evaluation, observability, and making AI systems that are reliable,
            not just impressive in demos.
          </p>
          <p>
            I believe in learning by building. Every project in my portfolio is
            deployed and functional — from real-time driver safety systems using
            YOLOv8 and MediaPipe, to production RAG pipelines with full
            observability built in. If I find an interesting problem, I build a
            solution for it. That&apos;s how I learn, and that&apos;s how I grow.
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}