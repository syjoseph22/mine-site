'use client';

export default function ExpertModal({ expert, onClose }) {
  if (!expert) return null;

  return (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6 md:px-12 py-8">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] overflow-y-auto p-10 relative text-[#0b1d2a]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-2xl"
      >
        ✕
      </button>

      {/* Expert Content */}
      <h2 className="text-4xl font-bold mb-3 text-center">{expert.name}</h2>
      <p className="text-lg text-gray-600 text-center mb-6">{expert.title}</p>
      <p className="text-gray-700 leading-relaxed text-justify">{expert.bio}</p>
    </div>
  </div>
);

}
