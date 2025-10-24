import Link from "next/link";

export default function ProfileCard({ name, image, title, slug }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      {/* Name */}
      <h3 className="text-xl font-bold text-[#0b1d2a] mb-1">{name}</h3>

      {/* Title */}
      <p className="text-gray-700 text-base font-medium mb-4">{title}</p>

      {/* See More */}
      <button
        onClick={onSeeMore}
        className="mt-auto px-4 py-2 bg-[#0b1d2a] text-white rounded-md text-sm font-medium hover:bg-[#0b1d2a]/90 transition"
      >
        See More
      </button>
    </div>
  );
}

