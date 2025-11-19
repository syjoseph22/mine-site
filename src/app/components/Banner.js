'use client';

export default function Banner() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/bannerImage.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle gradient fade to white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>

      {/* Text content (left aligned, stacked) */}
      <div className="relative z-10 h-full flex items-center justify-start px-8 md:px-16">
        <div className="text-left max-w-md">
          <h1 className="text-[#0b1d2a] text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Welcome to Volcan Holdings
          </h1>
          <p className="text-[#0b1d2a] text-lg md:text-xl mt-4 drop-shadow-md">
            Pioneering sustainable gold and mineral development across Ecuador.
          </p>
        </div>
      </div>
    </div>
  );
}
