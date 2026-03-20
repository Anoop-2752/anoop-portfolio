"use client";

import { motion } from "framer-motion";
import { FolderKanban, X, ExternalLink, Github } from "lucide-react";
import { projects } from "@/components/data/projects";

export default function ProjectsModal({ onClose }: { onClose: () => void }) {
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
        className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <FolderKanban className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="w-full h-44 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-gray-300 text-sm">Screenshot coming soon</div>';
                  }}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {"github" in project && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <Github className="w-4 h-4 text-gray-500" />
                      </a>
                    )}
                    {"live" in project && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}