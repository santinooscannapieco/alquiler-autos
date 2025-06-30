import { useState } from "react";

const categories = [
  { id: 1, type: "Económico" },
  { id: 2, type: "Estandar" },
  { id: 3, type: "Intermedio" },
  { id: 4, type: "De lujo" },
  { id: 5, type: "Élite" },
  { id: 6, type: "Premium" },
  { id: 7, type: "Eléctrico" },
  { id: 8, type: "Compacto" },
  { id: 9, type: "Grande" },
  { id: 10, type: "Descapotable" },
  { id: 11, type: "Deportivo" },
  { id: 12, type: "Híbrido" },
];

export const CategoriesComponent = () => {
  const [viewCategories, setViewCategories] = useState(false);

  return (
    <>
      <div className="w-full mt-5 px-10 bg-blue-600">
        <div className="block xl:hidden text-center">
          <button
            onClick={() => setViewCategories(!viewCategories)}
            className="text-white text-xl font-semibold bg-blue-800 px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            {viewCategories ? "Ocultar categorías" : "Ver categorías"}
          </button>
        </div>
        <div
          className={`
          ${viewCategories ? "flex" : "hidden"} 
          flex-wrap justify-center xl:flex-nowrap xl:flex
        `}
        >
          {categories.map((categoria) => (
            <div
              key={categoria.id}
              className="text-md w-[140px] p-5 text-center text-white cursor-pointer hover:bg-gray-800"
            >
              {categoria.type}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
