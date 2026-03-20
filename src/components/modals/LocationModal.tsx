"use client";

import { motion } from "framer-motion";
import { MapPin, X } from "lucide-react";

export default function LocationModal({ onClose }: { onClose: () => void }) {
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
            <MapPin className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Location</h2>
        </div>

        {/* Map embed */}
        <div className="w-full h-56 rounded-xl overflow-hidden mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.997953541645!2d77.74041!3d13.02143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1280b25d5555%3A0x7b2b36aa498e4b67!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location info */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Whitefield, Bangalore, India</p>
              <p className="text-xs text-gray-500 mt-0.5">Based in India · Open to remote work worldwide</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="text-sm mt-0.5">🕐</span>
            <div>
              <p className="text-sm font-medium text-gray-900">IST (UTC +5:30)</p>
              <p className="text-xs text-gray-500 mt-0.5">Comfortable with async & flexible hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
            <span className="text-sm mt-0.5">💼</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Open to opportunities</p>
              <p className="text-xs text-gray-500 mt-0.5">AI/ML Engineer · Computer Vision · GenAI — remote or relocate</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}