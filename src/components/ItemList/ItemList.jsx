/* agregar category para filtrar productos cuando toca en la categorias*/

import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { getRandomProducts } from "../../js/getRandomProducts";

export const ItemList = ({ productos }) => {
  const productosPorPagina = 10;
  const [paginas, setPaginas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  // Dividir de a 10 productos aleatorios en páginas
  useEffect(() => {
    if (productos.length > 0) {
      const aleatorios = getRandomProducts(productos);
      const paginados = [];

      for (let i = 0; i < aleatorios.length; i += productosPorPagina) {
        paginados.push(aleatorios.slice(i, i + productosPorPagina));
      }

      setPaginas(paginados);
      setPaginaActual(1);
    }
  }, [productos]);

  return (
    <section className="container mx-auto py-20">
      <h3 className="text-center text-4xl text-blue-800 font-semibold">
        Recomendaciones
      </h3>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-5 px-15">
        {paginas[paginaActual - 1]?.map((item) => (
          <ItemCard key={item.item_id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {paginas.map((_, index) => (
          <button
            key={index}
            onClick={() => setPaginaActual(index + 1)}
            className={`px-4 py-2 rounded text-sm font-medium ${
              paginaActual === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};
