"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, X, Briefcase, GraduationCap, Award } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education & Certification" },
];

const experience = [
  {
    role: "AI/ML Engineer Intern",
    company: "Rubixe AI",
    duration: "Jan 2024 – Aug 2024 · 8 months",
    location: "Bangalore, India",
    bullets: [
      "Built production-ready RAG pipelines with LangChain, FAISS, and Groq with full observability via LangSmith.",
      "Developed a real-time driver safety system using YOLOv8 and MediaPipe for drowsiness, phone usage, and seatbelt detection.",
      "Designed and deployed multi-agent research systems using LangGraph for deep topic exploration.",
      "Worked on NLP pipelines and GenAI applications shipped to real users.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science",
    institution: "University of Calicut",
    year: "2013 – 2016",
    field: "Computer Science",
  },
];

const certifications = [
  { name: "Claude Code in Action", issuer: "Anthropic", year: "2026" },
  { name: "Multicloud Architect Professional", issuer: "Oracle ", year: "2025" },
  { name: "Certified Data Scientist", issuer: "IABAC", year: "2024" },
  { name: "IBM Data Analyst", issuer: "IBM", year: "2023" },
];

export default function AboutModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("about");

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
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 max-w-2xl w-full p-5 md:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">About me</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex gap-1 p-1 bg-gray-100/80 rounded-xl mb-6"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === tab.id ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">

          {/* About Tab */}
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 text-gray-600 leading-relaxed"
            >
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                I&apos;m{" "}
                <span className="text-gray-900 font-medium">Anoop</span>, an
                AI/ML Engineer based in Bangalore, India. I specialize in building
                intelligent systems — from computer vision pipelines and NLP
                solutions to production-ready GenAI applications. My work sits at
                the intersection of research and real-world deployment.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                My focus is on turning complex AI research into real, working
                products. I work across the full stack of modern AI — training
                models, building RAG pipelines, designing multi-agent systems, and
                shipping tools that people actually use. I care deeply about
                evaluation, observability, and making AI systems that are reliable
                — not just impressive in demos.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                Before transitioning into AI in 2024, I spent several years in
                accounting and operations — which gives me a practical understanding
                of the business problems AI can actually solve.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                I believe in learning by building. Every project in my portfolio is
                deployed and functional — from real-time driver safety systems using
                YOLOv8 and MediaPipe, to production RAG pipelines with full
                observability built in. If I find an interesting problem, I build a
                solution for it. That&apos;s how I learn, and that&apos;s how I grow.
              </motion.p>
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.1 }}
                  className="rounded-xl border border-gray-200 p-5 bg-white/60"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-blue-500" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{exp.duration} · {exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education & Certs Tab */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Certifications */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.07 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-white/60"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-orange-500" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{cert.issuer} · {cert.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Education</h3>
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white/60"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-purple-500" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-sm text-purple-600 font-medium">{edu.institution}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{edu.field}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
