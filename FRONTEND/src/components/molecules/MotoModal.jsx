import { Button } from "../atoms/Button";

function MotoModal({ moto, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-transparent backdrop-blur-lg p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 text-3xl font-bold hover:text-red-500"
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={moto.imgModelo}
            alt={moto.modelo}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-orange-500">
                {moto.marca} {moto.modelo}
              </h2>
              <p className="mt-2 text-gray-700">{moto.descripcion}</p>
              <p className="mt-2 text-xl font-bold text-orange-500">
                ${moto.precio}
              </p>
              <p className="mt-1 text-gray-500">Año: {moto.anio}</p>
            </div>
            <Button className="mt-4 w-full md:w-auto">COTIZAR</Button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-600">
          <div>
            <p className="font-semibold">Motor</p>
            <p>{moto.motor}</p>
          </div>
          <div>
            <p className="font-semibold">Diseño</p>
            <p>{moto.descripcionDisenos}</p>
          </div>
          <div>
            <p className="font-semibold">Tecnología</p>
            <p>{moto.descripcionTecnologia}</p>
          </div>
          <div>
            <p className="font-semibold">Seguridad</p>
            <p>{moto.descripcionSeguridad}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { MotoModal };
