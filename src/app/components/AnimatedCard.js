'use client';

import { motion } from "framer-motion";
import { use } from "react";

export default function AnimatedCard({ title, content, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-sm p-6 m-4 text-white max-w-xl"
    >
      <div className="flex items-center space-x-4 mb-4">
        {icon && <div className="text-3xl">{icon}</div>}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/80">{content}</p>
    </motion.div>
  );
}
