import { useEffect, useState } from "react";
import { getData } from "../services/api";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);
  const [viewCategories, setViewCategories] = useState(false);
  const navigate = useNavigate();

  const loadCategories = async () => {
    try {
      const data = await getData(`/categorias`);
      /* console.log(data); */
      setCategories(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleClick = (id) => {
    if (id) {
      navigate(`/productos/${id}`);
      console.log(id);
    }
  };

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
            <button
              key={categoria.id}
              className="text-md w-[140px] p-5 text-center text-white cursor-pointer hover:bg-gray-800"
              onClick={() => {
                handleClick(categoria.id);
              }}
            >
              {categoria.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
