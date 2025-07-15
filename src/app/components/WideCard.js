'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WideCard({ title, content, image, link, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-7xl mx-auto my-12 overflow-hidden rounded-2xl shadow-lg bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Image side */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center text-[#0b1d2a]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6 text-[#0b1d2a]">{content}</p>
          <Link href={link} className="text-cyan-400 hover:underline font-semibold">
            Learn more →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}