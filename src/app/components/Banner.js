export default function Banner() {
    return (
        <div className="relative h-[60vh] w-full overflow-hidden">
  {/* Image */}
  <img
    src="/ecuador.jpg"
    alt="Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient fade overlay (bottom → white) */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>

  {/* Centered content (optional) */}
  <div className="relative z-10 h-full flex items-center justify-center px-4">
    <h1 className="text-[#0b1d2a] text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
      Sabaleta Gold Opportunity
    </h1>
  </div>
</div>


    )
}