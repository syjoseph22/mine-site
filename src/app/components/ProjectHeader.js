
'use client';

export default function ProjectHeader({ image, title }) {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}
