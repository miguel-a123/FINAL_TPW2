import { Button } from "../atoms/Button";

function MotoCard({ moto, onSelect }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition cursor-pointer"
      onClick={() => onSelect(moto)}
    >
      <img
        src={moto.imgModelo}
        alt={moto.modelo}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <h2 className="text-xl font-semibold mt-2 text-orange-500">
        {moto.marca} {moto.modelo}
      </h2>
      <p className="mt-1 text-sm text-gray-600">{moto.descripcion}</p>
      <p className="mt-1 font-bold text-lg text-gray-800">${moto.precio}</p>
      <p className="mt-1 text-gray-500">Año: {moto.anio}</p>
      <Button className="mt-3">Ver Detalles</Button>
    </div>
  );
}
export { MotoCard };
