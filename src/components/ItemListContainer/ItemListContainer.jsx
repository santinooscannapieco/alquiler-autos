import { ItemList } from "../ItemList/ItemList";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/autos");
  const { categoryId } = useParams();
  console.log(categoryId);

  console.log("Respuesta de la API", data);
  const dataFilter = categoryId
    ? data.filter((prod) => prod.category_id === parseInt(categoryId))
    : data;

  console.log("Respuesta de la API", dataFilter);

  return (
    <>
      <section className="container mx-auto py-20">
        {loading ? (
          <h3 className="text-center text-4xl text-blue-800 font-semibold">
            Cargando...
          </h3>
        ) : (
          <ItemList productos={dataFilter} categoryId={categoryId} />
        )}
      </section>
    </>
  );
};
