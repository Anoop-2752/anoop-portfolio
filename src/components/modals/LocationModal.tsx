"use client";

import { motion } from "framer-motion";
import { MapPin, X } from "lucide-react";

export default function LocationModal({ onClose }: { onClose: () => void }) {
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
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 max-w-2xl w-full p-5 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Location</h2>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full h-56 rounded-xl overflow-hidden mb-5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.997953541645!2d77.74041!3d13.02143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1280b25d5555%3A0x7b2b36aa498e4b67!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Location info */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
          >
            <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Whitefield, Bangalore, India</p>
              <p className="text-xs text-gray-500 mt-0.5">Based in India · Open to remote work worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
          >
            <span className="text-sm mt-0.5">🕐</span>
            <div>
              <p className="text-sm font-medium text-gray-900">IST (UTC +5:30)</p>
              <p className="text-xs text-gray-500 mt-0.5">Comfortable with async & flexible hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl"
          >
            <span className="text-sm mt-0.5">💼</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Open to opportunities</p>
              <p className="text-xs text-gray-500 mt-0.5">AI/ML Engineer · Computer Vision · GenAI — remote or relocate</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
