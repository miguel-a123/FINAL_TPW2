import { useEffect, useState } from "react";
import { PageHeader } from "../atoms/PageHeader";
import { Input } from "../atoms/Input";
import { MotoGrid } from "../organisms/MotoGrid";
import { MotoModal } from "../molecules/MotoModal";

export default function MotosCatalogPage() {
  const [motos, setMotos] = useState([]);
  const [filteredMotos, setFilteredMotos] = useState([]);
  const [selectedMoto, setSelectedMoto] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        marca: "Yamaha",
        modelo: "MT-07",
        descripcion: "Desnuda ligera y potente",
        precio: 6500,
        anio: 2023,
        motor: "689 cc, 2 cilindros",
        descripcionDisenos: "Estilo agresivo y moderno",
        descripcionTecnologia: "Tablero digital, ABS",
        descripcionSeguridad: "Frenos ABS, luces LED",
        imgModelo: "https://i.postimg.cc/MTVW1dR5/pngwing-com.png",
      },
      {
        id: 2,
        marca: "Honda",
        modelo: "CBR500R",
        descripcion: "Deportiva versátil para todos los días",
        precio: 7200,
        anio: 2022,
        motor: "471 cc, 2 cilindros",
        descripcionDisenos: "Carrocería aerodinámica",
        descripcionTecnologia: "ABS, tablero digital",
        descripcionSeguridad: "Frenos ABS, iluminación LED",
        imgModelo: "https://multiagenciacobano.com/wp-content/uploads/2025/04/24YM-MT-CBR500R-Grand-Prix-Red_360_01.png",
      },
      {
        id: 3,
        marca: "Kawasaki",
        modelo: "Ninja 650",
        descripcion: "Deportiva con gran manejo urbano",
        precio: 7800,
        anio: 2023,
        motor: "649 cc, 2 cilindros",
        descripcionDisenos: "Agresiva y compacta",
        descripcionTecnologia: "ABS, pantalla digital",
        descripcionSeguridad: "Frenos ABS, iluminación LED",
        imgModelo: "https://b1748854.smushcdn.com/1748854/wp-content/uploads/2024/04/kawasaki-ninja-650-abs-krt-edition-2.jpg?lossy=2&strip=0&webp=1",
      },
    ];
    setMotos(data);
    setFilteredMotos(data);
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    setFilteredMotos(
      motos.filter(
        (m) =>
          m.marca.toLowerCase().includes(lowerSearch) ||
          m.modelo.toLowerCase().includes(lowerSearch)
      )
    );
  }, [search, motos]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#ffff] via-[#fff7e6] to-[#ffe5d1] text-gray-800">
      {/* Componente de encabezado de página */}
      <PageHeader>
        <span className="text-orange-500">Explora</span> nuestro mundo de{" "}
        <span className="text-orange-500">Motos</span>
      </PageHeader>

      {/* Buscador */}
      <div className="flex justify-center mb-12">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por marca o modelo..."
        />
      </div>

      {/* Grid de motos */}
      <MotoGrid motos={filteredMotos} onSelect={setSelectedMoto} />

      {/* Modal de detalles */}
      {selectedMoto && (
        <MotoModal moto={selectedMoto} onClose={() => setSelectedMoto(null)} />
      )}
    </div>
  );
}

export { MotosCatalogPage };
