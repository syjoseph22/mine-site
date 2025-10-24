'use client';

export default function ExpertModal({ expert, onClose }) {
  if (!expert) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative text-[#0b1d2a]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Expert Content */}
        <h2 className="text-3xl font-bold mb-1 text-center">{expert.name}</h2>
        <p className="text-gray-600 text-center mb-4">{expert.title}</p>
        <p className="text-gray-700 leading-relaxed text-justify">{expert.bio}</p>
      </div>
    </div>
  );
}
