import { useEffect, useState } from "react";

/**
 * MotoCatalogoPagina.jsx
 * Código completo actualizado - mantiene la estructura original y agrega:
 * - Navbar
 * - PromoBanner dinámico (muestra % máximo de descuento si existe)
 * - Grid responsivo (1 / 2 / 3 / 4 / 5 columnas)
 * - Badges de descuento en cada tarjeta
 * - Sección "Motos en Oferta" (filtro rápido)
 * - Funcionalidad de filtros avanzada
 * - Mantiene Modal, Spec y SectionWithImage originales
 */

export default function MotoCatalogoPagina() {
  const [motos, setMotos] = useState([]);
  const [filteredMotos, setFilteredMotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");
  const [selectedMoto, setSelectedMoto] = useState(null);
  const [search, setSearch] = useState("");

  // NUEVO: estado de filtros
  const [filters, setFilters] = useState({
    brand: "",
    year: "",
    type: "",
    offersOnly: false,
  });

  useEffect(() => {
    const data = [
      {
        id: 1,
        purpose: "Deportiva",
        brand: "Yamaha",
        model: "YZF-R1",
        modelImg:
          "https://i.pinimg.com/1200x/a0/db/81/a0db81bc1b2be0a49dc8679c0d5e666f.jpg",
        description:
          "Superbike de alto rendimiento, tecnología derivada de competición y manejo extremo.",
        pricePEN: 65000,
        priceUSD: 17000,
        tankCapacity: "17 L",
        displacement: "998 cc",
        engineStrokes: "4T",
        engineCylindres: "4",
        engineValves: "16",
        engineHP: "200 HP",
        engineRPM: "13,500",
        torqueNm: "112.4",
        torqueRPM: "11,500",
        engineImg:
          "https://i.pinimg.com/1200x/c3/64/1c/c3641cc991a6a3095ca36f0b7a2a8a24.jpg",
        engineDescription:
          "Motor crossplane con entrega lineal y gran respuesta.",
        transmissionSpeeds: "6",
        designImg:
          "https://i.pinimg.com/736x/c2/b6/4f/c2b64ff9f4de13b268e1aebe07e4a857.jpg",
        designDescription:
          "Carrocería agresiva, aerodinámica optimizada para altas velocidades.",
        technologyImg:
          "https://i.pinimg.com/1200x/64/33/4a/64334a6945de2aa5bfe10bff75915d2c.jpg",
        technologyDescription:
          "Control de tracción, modos de motor, quickshifter y ABS avanzado.",
        safetyImg:
          "https://i.pinimg.com/1200x/17/41/d3/1741d3e2efefe70ddc16346b9587db9d.jpg",
        safetyDescription:
          "ABS de última generación, control de estabilidad y frenos de alto rendimiento.",
        stock: 5,
        year: 2023,
        discount: 15,
      },
      {
        id: 2,
        purpose: "Urbana",
        brand: "Honda",
        model: "CB500X",
        modelImg:
          "https://i.pinimg.com/1200x/59/5f/d9/595fd975c9b0149ee664ab35d3cb716a.jpg",
        description:
          "Versátil para ciudad y ruta, cómodo y económico de mantener.",
        pricePEN: 28000,
        priceUSD: 7500,
        tankCapacity: "16.7 L",
        displacement: "471 cc",
        engineStrokes: "4T",
        engineCylindres: "2",
        engineValves: "8",
        engineHP: "47 HP",
        engineRPM: "8,500",
        torqueNm: "43",
        torqueRPM: "6,500",
        engineImg:
          "https://i.pinimg.com/736x/87/7b/a0/877ba0d6032f6b7ec5820df6a5cd55d9.jpg",
        engineDescription:
          "Motor bicilíndrico con buena entrega a bajas y medias rpm.",
        transmissionSpeeds: "6",
        designImg:
          "https://i.pinimg.com/736x/7f/eb/09/7feb09c3ce882b52043041adf1852968.jpg",
        designDescription: "Ergonomía enfocada en confort y maniobrabilidad.",
        technologyImg:
          "https://i.pinimg.com/736x/f4/5d/ae/f45dae524cc23d6b3e81bcd57ca94038.jpg",
        technologyDescription: "Instrumentación digital y ABS de fábrica.",
        safetyImg:
          "https://i.pinimg.com/1200x/cb/f1/a1/cbf1a136549262b272e484466f7d90af.jpg",
        safetyDescription:
          "Chasis estable y frenado asistido para seguridad en ciudad.",
        stock: 12,
        year: 2024,
        discount: 0,
      },
      {
        id: 3,
        purpose: "Deportiva",
        brand: "Kawasaki",
        model: "Ninja 650",
        modelImg:
          "https://i.pinimg.com/736x/1d/79/22/1d79222962a1549086cd2dfffe95d331.jpg",
        description:
          "Equilibrio entre rendimiento y comodidad — ideal para quienes buscan adrenalina sin sacrificar control.",
        pricePEN: 32000,
        priceUSD: 8500,
        tankCapacity: "15 L",
        displacement: "649 cc",
        engineStrokes: "4T",
        engineCylindres: "2",
        engineValves: "8",
        engineHP: "68 HP",
        engineRPM: "8,500",
        torqueNm: "64",
        torqueRPM: "7,000",
        engineImg:
          "https://i.pinimg.com/1200x/64/06/e1/6406e1f0f4afdffad610589db63f7ed6.jpg",
        engineDescription:
          "Bicilíndrico con buen par en medios, respuesta ágil.",
        transmissionSpeeds: "6",
        designImg:
          "https://i.pinimg.com/1200x/d0/52/b2/d052b2e1984b87541ce3ce0f09e0f291.jpg",
        designDescription: "Líneas agresivas y chasis compacto.",
        technologyImg:
          "https://i.pinimg.com/1200x/ba/2e/96/ba2e9693dd74e22b1d285e1b0d7c5cdf.jpg",
        technologyDescription:
          "Modos de conducción y control de tracción.",
        safetyImg:
          "https://i.pinimg.com/736x/fd/d4/eb/fdd4eb59ff6391e6a98c4e925b9c83fc.jpg",
        safetyDescription:
          "Frenos ABS y componentes de seguridad confiables.",
        stock: 8,
        year: 2024,
        discount: 10,
      },
    ];

    setTimeout(() => {
      setMotos(data);
      setFilteredMotos(data);
      setLoading(false);
    }, 300);
  }, []);

  // FILTRADO COMPLETO
  useEffect(() => {
    let temp = motos;

    // Búsqueda
    if (search) {
      temp = temp.filter(m =>
        [m.brand, m.model, m.purpose].some(v =>
          v.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // Filtros avanzados
    if (filters.brand) temp = temp.filter(m => m.brand === filters.brand);
    if (filters.year) temp = temp.filter(m => m.year.toString() === filters.year);
    if (filters.type) temp = temp.filter(m => m.purpose === filters.type);
    if (filters.offersOnly) temp = temp.filter(m => m.discount && m.discount > 0);

    setFilteredMotos(temp);
  }, [motos, search, filters]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700">Cargando motos...</p>
    );

  if (error)
    return (
      <p className="text-center mt-10 text-red-500 font-bold">{error}</p>
    );

  const maxDiscount = Math.max(0, ...motos.map((m) => m.discount || 0));

  return (
    <div className="min-h-screen p-6 bg-linear-to-b from-[#fff7ec] to-[#fff2e6] text-gray-800">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="mb-6">
          <PromoBanner maxDiscount={maxDiscount} />
        </div>

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Explora nuestras <span className="text-orange-600">Motos</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Encuentra tu próxima moto — precios en S/ y USD, ficha técnica completa.
            </p>
          </div>

          <div className="flex gap-4 items-center w-full md:w-1/2">
            <div className="relative flex-1">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por marca, modelo o tipo..."
                className="w-full bg-white rounded-full px-4 py-3 shadow-sm outline-none border border-orange-100 focus:ring-2 focus:ring-orange-300"
              />
              <div className="absolute right-3 top-3 text-orange-600 font-semibold text-sm">
                {filteredMotos.length}
              </div>
            </div>

            <button
              onClick={() => setFilters(f => ({ ...f, offersOnly: !f.offersOnly }))}
              className={`px-4 py-3 rounded-full font-medium text-sm shadow-sm ${
                filters.offersOnly
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border border-orange-100"
              }`}
            >
              {filters.offersOnly ? "Ver todo" : "Solo ofertas"}
            </button>
          </div>
        </header>

        {/* NUEVO: FILTROS */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {Array.from(new Set(motos.map(m => m.brand))).map(brand => (
            <button
              key={brand}
              onClick={() => setFilters(f => ({ ...f, brand: f.brand === brand ? "" : brand }))}
              className={`px-3 py-1 rounded-full border text-sm ${
                filters.brand === brand ? "bg-orange-600 text-white" : "bg-white text-gray-700"
              }`}
            >
              {brand}
            </button>
          ))}

          <select
            value={filters.year || ""}
            onChange={e => setFilters(f => ({ ...f, year: e.target.value || "" }))}
            className="px-3 py-1 border rounded text-sm"
          >
            <option value="">Todos los años</option>
            {Array.from(new Set(motos.map(m => m.year))).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          <select
            value={filters.type || ""}
            onChange={e => setFilters(f => ({ ...f, type: e.target.value || "" }))}
            className="px-3 py-1 border rounded text-sm"
          >
            <option value="">Todos los tipos</option>
            {Array.from(new Set(motos.map(m => m.purpose))).map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Catálogo */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {filteredMotos.length === 0 && (
            <div className="col-span-full text-center text-gray-500">
              No se encontraron motos.
            </div>
          )}

          {filteredMotos.map((moto) => (
            <CardMoto
              key={moto.id}
              moto={moto}
              onOpen={() => setSelectedMoto(moto)}
            />
          ))}
        </main>
      </div>

      {/* Modal */}
      {selectedMoto && (
        <ModalMoto moto={selectedMoto} onClose={() => setSelectedMoto(null)} />
      )}
    </div>
  );
}


/* ===========================
   Navbar
   =========================== */
function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-3 rounded-xl mb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <h2 className="text-lg font-bold text-gray-800">MotoCatalog</h2>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Inicio</li>
          <li className="hover:text-orange-600 cursor-pointer">Catálogo</li>
          <li className="hover:text-orange-600 cursor-pointer">Ofertas</li>
          <li className="hover:text-orange-600 cursor-pointer">Contacto</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <span>Call: </span>
            <strong className="text-gray-800">01-800-123</strong>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold cursor-pointer">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}
/* ===========================
   PromoBanner Mejorado - Versión Profesional
   =========================== */
function PromoBanner({ maxDiscount }) {
  if (!maxDiscount || maxDiscount <= 0) return null;

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-6">
      {/* Imagen de fondo */}
      <img
        src="https://cdn.pixabay.com/photo/2021/12/08/04/53/buildings-6854734_1280.jpg"
        alt="Ofertas de motos"
        className="w-full h-64 md:h-60 object-cover"
      />

      {/* Overlay degradado para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-500/60 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-6">
        {/* Icono + Texto principal */}
        <div className="flex items-center gap-4 mb-3 md:mb-0">
          <span className="text-4xl md:text-5xl font-bold">🔥</span>
          <div>
            <div className="font-bold text-white text-xl md:text-2xl">
              Ofertas de temporada
            </div>
            <div className="text-white text-sm md:text-base opacity-90">
              Hasta {maxDiscount}% de descuento en modelos seleccionados
            </div>
          </div>
        </div>

        {/* Texto secundario + botón */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="text-white font-medium text-sm md:text-base text-center md:text-right">
            Compra seguro · Promociones limitadas
          </div>
          <button className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
            Ver ofertas
          </button>
        </div>
      </div>
    </div>
  );
}


/* ===========================
   Formateadores
   =========================== */
function formatPEN(value) {
  if (value == null) return "-";
  try {
    return "S/ " + Number(value).toLocaleString("es-PE");
  } catch {
    return "S/ " + value;
  }
}
function formatUSD(value) {
  if (value == null) return "-";
  try {
    return "$" + Number(value).toLocaleString("en-US");
  } catch {
    return "$" + value;
  }
}

/* ===========================
   CardMoto (tarjeta) - actualizado con badge de descuento
   =========================== */
function CardMoto({ moto, onOpen }) {
  return (
    <article className="relative bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-lg transition">
      {/* Badge descuento */}
      {moto.discount && moto.discount > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <div className="px-3 py-1 rounded-md text-xs font-bold text-white bg-red-600 shadow">
            -{moto.discount}%
          </div>
        </div>
      )}

      <div className="h-48 w-full bg-linear-to-b from-orange-50 to-transparent flex items-center justify-center overflow-hidden">
        <img
          src={moto.modelImg}
          alt={`${moto.brand} ${moto.model}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {moto.brand}{" "}
              <span className="font-medium text-gray-600">
                {" "}
                {moto.model}
              </span>
            </h3>
            <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              {moto.purpose}
            </span>
          </div>

          <div className="text-right">
            {/* Si hay descuento, mostrar precio con tachado y precio descontado */}
            {moto.discount && moto.discount > 0 ? (
              <>
                <div className="text-sm text-gray-400 line-through">
                  {formatPEN(moto.pricePEN)}
                </div>
                <div className="text-lg font-extrabold text-orange-600">
                  {formatPEN(Math.round(moto.pricePEN * (1 - moto.discount / 100)))}
                </div>
                <div className="text-sm text-gray-500">
                  {formatUSD(Math.round(moto.priceUSD * (1 - moto.discount / 100)))}
                </div>
              </>
            ) : (
              <>
                <div className="text-lg font-extrabold text-orange-600">
                  {formatPEN(moto.pricePEN)}
                </div>
                <div className="text-sm text-gray-500">
                  {formatUSD(moto.priceUSD)}
                </div>
              </>
            )}
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm h-14 overflow-hidden">
          {moto.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <div
              className={`text-sm font-medium ${
                moto.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {moto.stock > 0 ? `Stock: ${moto.stock}` : "Agotado"}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Año: {moto.year}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpen}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow"
            >
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ===========================
   ModalMoto - imágenes mejoradas
   =========================== */
function ModalMoto({ moto, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:flex gap-4 p-4 md:p-6">
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={moto.modelImg}
              alt={`${moto.brand} ${moto.model}`}
              className="w-full max-h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {moto.brand} {moto.model}
                  </h2>
                  <span className="inline-block mt-2 text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full shadow-sm">
                    {moto.purpose}
                  </span>
                </div>

                <div className="text-right">
                  {moto.discount && moto.discount > 0 ? (
                    <>
                      <div className="text-sm text-gray-400 line-through">
                        {formatPEN(moto.pricePEN)}
                      </div>
                      <div className="text-2xl font-extrabold text-orange-600">
                        {formatPEN(Math.round(moto.pricePEN * (1 - moto.discount / 100)))}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatUSD(Math.round(moto.priceUSD * (1 - moto.discount / 100)))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-extrabold text-orange-600">
                        {formatPEN(moto.pricePEN)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatUSD(moto.priceUSD)}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <p className="mt-4 text-gray-700">{moto.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div><strong>Tanque:</strong> {moto.tankCapacity}</div>
                <div><strong>Año:</strong> {moto.year}</div>
                <div><strong>Transmisión:</strong> {moto.transmissionSpeeds} vel.</div>
                <div>
                  <strong>Stock:</strong>{" "}
                  <span className={moto.stock > 0 ? "text-orange-600" : "text-red-500"}>
                    {moto.stock > 0 ? `${moto.stock} disponibles` : "Agotado"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow">
                COTIZAR AHORA
              </button>
              <button
                onClick={onClose}
                className="text-gray-600 px-4 py-2 rounded-md hover:underline"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        {/* Especificaciones */}
        <div className="p-6 border-t border-orange-50">
          <aside className="bg-orange-50 p-4 rounded-xl mb-6 shadow-inner">
            <h3 className="font-semibold text-gray-800 mb-3">Especificaciones</h3>
            <Spec label="Cilindrada" value={moto.displacement} />
            <Spec label="Cilindros" value={moto.engineCylindres} />
            <Spec label="Válvulas" value={moto.engineValves} />
            <Spec label="Potencia" value={moto.engineHP} />
            <Spec label="RPM Potencia" value={moto.engineRPM} />
            <Spec label="Torque" value={moto.torqueNm ? `${moto.torqueNm} Nm` : "-"} />
            <Spec label="RPM Torque" value={moto.torqueRPM} />
            <Spec label="Tipo" value={moto.engineStrokes} />
          </aside>

          {/* Diseño / Tecnología / Seguridad */}
          <div className="space-y-6">
            <SectionWithImage
              title="Diseño"
              image={moto.designImg}
              text={moto.designDescription}
              imageClassName="w-full max-h-48 md:max-h-80 object-cover rounded-xl"
            />
            <SectionWithImage
              title="Tecnología"
              image={moto.technologyImg}
              text={moto.technologyDescription}
              imageClassName="w-full max-h-48 md:max-h-80 object-cover rounded-xl"
            />
            <SectionWithImage
              title="Seguridad"
              image={moto.safetyImg}
              text={moto.safetyDescription}
              imageClassName="w-full max-h-48 md:max-h-130 object-cover rounded-x5"
            />
          </div>
        </div>

        {/* Motor y rendimiento */}
        <div className="p-6 border-t border-orange-50">
          <h3 className="font-semibold text-gray-800 mb-3">Motor y Rendimiento</h3>
          <div className="md:flex gap-10">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">{moto.engineDescription}</p>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <Spec label="Cilindrada" value={moto.displacement} />
                <Spec label="Potencia" value={moto.engineHP} />
                <Spec label="Torque" value={moto.torqueNm ? `${moto.torqueNm} Nm` : "-"} />
                <Spec label="RPM Potencia" value={moto.engineRPM} />
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              {moto.engineImg && (
                <img
                  src={moto.engineImg}
                  alt="motor"
                  className="w-full max-h-36 md:max-h-100 object-cover rounded-xl"
                />
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-orange-50 text-right">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:underline px-3 py-2"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===========================
   Spec y SectionWithImage (pequeños helpers)
   =========================== */
function Spec({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-orange-100 text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-800">
        {value ?? "-"}
      </span>
    </div>
  );
}

function SectionWithImage({ title, image, text, imageClassName }) {
  return (
    <div className="space-y-3">
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-full rounded-xl object-cover ${imageClassName ?? ""}`}
        />
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
