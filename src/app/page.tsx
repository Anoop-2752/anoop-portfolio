"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, FolderKanban, Layers, Contact, MapPin } from "lucide-react";
import { useState } from "react";
import AboutModal from "@/components/modals/AboutModal";
import ProjectsModal from "@/components/modals/ProjectsModal";
import SkillsModal from "@/components/modals/SkillsModal";
import ContactModal from "@/components/modals/ContactModal";
import LocationModal from "@/components/modals/LocationModal";
import CursorEffect from "@/components/CursorEffect";

const navItems = [
  { label: "Me", icon: User, id: "me" },
  { label: "Projects", icon: FolderKanban, id: "projects" },
  { label: "Skills", icon: Layers, id: "skills" },
  { label: "Contact", icon: Contact, id: "contact" },
  { label: "Location", icon: MapPin, id: "location" },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#fafafa]">
      {/* Cursor follower effect */}
      <CursorEffect />

      {/* Aurora gradient background */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40 blur-3xl">
          <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply animate-pulse" />
          <div className="absolute top-[50px] left-[200px] w-[350px] h-[250px] bg-indigo-300 rounded-full mix-blend-multiply animate-pulse delay-700" />
          <div className="absolute top-[20px] left-[100px] w-[300px] h-[280px] bg-pink-200 rounded-full mix-blend-multiply animate-pulse delay-1000" />
          <div className="absolute top-[80px] left-[300px] w-[250px] h-[200px] bg-emerald-200 rounded-full mix-blend-multiply animate-pulse delay-500" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 pb-8 sm:pb-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-gray-600"
        >
          <span className="font-bold">Hey, I&apos;m Anoop</span>  👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-900"
        >
          AI/ML Engineer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg mt-4"
        >
          <img src="/profile.png" alt="Anoop K" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-3 mt-8"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal(item.id)}
              className="flex flex-col items-center gap-2 px-6 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-[100px]"
            >
              <item.icon className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === "me" && <AboutModal onClose={() => setActiveModal(null)} />}
        {activeModal === "projects" && <ProjectsModal onClose={() => setActiveModal(null)} />}
        {activeModal === "skills" && <SkillsModal onClose={() => setActiveModal(null)} />}
        {activeModal === "contact" && <ContactModal onClose={() => setActiveModal(null)} />}
        {activeModal === "location" && <LocationModal onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </main>
  );
}