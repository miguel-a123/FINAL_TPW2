import { MotoCard } from "../molecules/MotoCard";

function MotoGrid({ motos, onSelect }) {
  if (motos.length === 0) {
    return (
      <p className="text-center col-span-full text-gray-500">
        No se encontraron motos.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {motos.map((moto) => (
        <MotoCard key={moto.id} moto={moto} onSelect={onSelect} />
      ))}
    </div>
  );
}
export { MotoGrid };
