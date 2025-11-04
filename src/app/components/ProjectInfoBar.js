export default function ProjectInfoBar({ metal, type, location }) {
  return (
    <div className="bg-white text-[#0b1d2a] shadow-md py-4 px-6 flex flex-col md:flex-row justify-around text-center font-medium">
      <div><span className="font-bold">Metal:</span> {metal}</div>
      <div><span className="font-bold">Type:</span> {type}</div>
      <div><span className="font-bold">Location:</span> {location}</div>
    </div>
  );
}
