export default function ProfileCard({ name, image, bio, title, onSeeMore }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      {/* Name & Title */}
      <h3 className="text-xl font-bold text-[#0b1d2a] mb-1">{name}</h3>
      {title && <p className="text-gray-500 text-sm mb-3">{title}</p>}

      {/* Short Bio */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bio}</p>

      {/* Button */}
      <button
        onClick={onSeeMore}
        className="mt-auto px-4 py-2 bg-[#0b1d2a] text-white rounded-md text-sm font-medium hover:bg-[#0b1d2a]/90 transition"
      >
        See More
      </button>
    </div>
  );
}

